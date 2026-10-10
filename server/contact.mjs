// Contact form backend. nginx forwards /api/ here (see nginx.conf).
//
// POST /api/contact  { name, email, budget, message, website }
//   Every valid message is appended to $DATA_DIR/messages.jsonl, then emailed to CONTACT_TO
//   through SMTP. Without SMTP settings it answers 503 so the page falls back to a mailto link.
// GET /api/health    200 when the service is up; reports whether email is configured.

import { createServer } from "node:http";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import nodemailer from "nodemailer";

const PORT = Number(process.env.PORT || 3000);
const DATA_DIR = process.env.DATA_DIR || "/data";
const CONTACT_TO = process.env.CONTACT_TO || "ialexies@gmail.com";
const SMTP_HOST = process.env.SMTP_HOST || "";
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";
const CONTACT_FROM = process.env.CONTACT_FROM || SMTP_USER;

const LIMITS = { name: 120, email: 200, budget: 60, message: 5000 };
const MAX_BODY = 16 * 1024;
// Per-IP: at most 5 messages an hour.
const RATE_WINDOW_MS = 60 * 60 * 1000;
const RATE_MAX = 5;

const mailer =
  SMTP_HOST && SMTP_USER && SMTP_PASS
    ? nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      })
    : null;

const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, times] of hits) {
    if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(ip);
  }
}, RATE_WINDOW_MS).unref();

function clientIp(req) {
  return String(req.headers["x-real-ip"] || req.socket.remoteAddress || "unknown");
}

function send(res, status, body) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY) {
        reject(new Error("too_large"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

function clean(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function oneLine(s) {
  return s.replace(/[\r\n]+/g, " ");
}

function validate(input) {
  const name = oneLine(clean(input.name, LIMITS.name));
  const email = oneLine(clean(input.email, LIMITS.email));
  const budget = oneLine(clean(input.budget, LIMITS.budget));
  const message = clean(input.message, LIMITS.message);
  if (!name || !message) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  return { name, email, budget, message };
}

async function save(entry) {
  await mkdir(DATA_DIR, { recursive: true });
  await appendFile(path.join(DATA_DIR, "messages.jsonl"), JSON.stringify(entry) + "\n");
}

async function handleContact(req, res) {
  let input;
  try {
    input = JSON.parse(await readBody(req));
  } catch {
    return send(res, 400, { error: "bad_request" });
  }
  if (!input || typeof input !== "object") return send(res, 400, { error: "bad_request" });

  // Honeypot: people never see the "website" field, bots fill it. Pretend it worked.
  if (clean(input.website, 200)) return send(res, 200, { ok: true });

  const msg = validate(input);
  if (!msg) return send(res, 422, { error: "invalid" });

  const ip = clientIp(req);
  if (rateLimited(ip)) return send(res, 429, { error: "rate_limited" });

  const entry = { at: new Date().toISOString(), ip, ...msg, emailed: false };

  if (mailer) {
    try {
      await mailer.sendMail({
        from: { name: "Lexserver website", address: CONTACT_FROM },
        to: CONTACT_TO,
        replyTo: { name: msg.name, address: msg.email },
        subject: `Project inquiry from ${msg.name}`,
        text: `${msg.message}\n\nBudget: ${msg.budget || "Not given"}\n\n${msg.name} <${msg.email}>\n`,
      });
      entry.emailed = true;
    } catch (err) {
      console.error("sendMail failed:", err.message);
    }
  }

  try {
    await save(entry);
  } catch (err) {
    console.error("save failed:", err.message);
    if (!entry.emailed) return send(res, 500, { error: "not_sent" });
  }

  if (!entry.emailed) return send(res, 503, { error: "not_sent" });
  return send(res, 200, { ok: true });
}

const server = createServer((req, res) => {
  const url = new URL(req.url || "/", "http://localhost");
  if (url.pathname === "/api/health" && req.method === "GET") {
    return send(res, 200, { ok: true, email: Boolean(mailer) });
  }
  if (url.pathname === "/api/contact") {
    if (req.method !== "POST") return send(res, 405, { error: "method_not_allowed" });
    if (!String(req.headers["content-type"] || "").startsWith("application/json")) {
      return send(res, 415, { error: "unsupported_media_type" });
    }
    return handleContact(req, res).catch((err) => {
      console.error(err);
      send(res, 500, { error: "server_error" });
    });
  }
  send(res, 404, { error: "not_found" });
});

server.listen(PORT, () => {
  console.log(`contact api on :${PORT}, email ${mailer ? `to ${CONTACT_TO}` : "not configured"}`);
});
