// Turns the client bundle into one static HTML file per page, so crawlers and link previews
// see real content without running JavaScript. Runs after both Vite builds (see "build").
//   dist/index.html        -> template, overwritten with the homepage
//   dist/<path>.html       -> every other page (nginx: try_files $uri $uri.html ...)
//   dist/404.html          -> not-found page (nginx error_page 404)
//   dist/sitemap.xml
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const SITE = "https://lexserver.org";
const OG_IMAGE = `${SITE}/og-image.png`;
const dist = join(import.meta.dirname, "..", "dist");
const serverEntry = join(import.meta.dirname, "..", "dist-ssr", "entry-server.js");

const { render, STATIC_PATHS } = await import(serverEntry);
const template = readFileSync(join(dist, "index.html"), "utf8")
  .replace(/\s*<title>[\s\S]*?<\/title>/, "")
  .replace(/\s*<meta\s+name="description"[\s\S]*?\/>/, "");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function headTags(meta, path, { noindex = false } = {}) {
  const title = [...meta].reverse().find((m) => m.title)?.title ?? "Lexserver";
  const find = (key, value) => meta.some((m) => m[key] === value);
  const desc = [...meta].reverse().find((m) => m.name === "description")?.content ?? "";
  const extra = [];
  if (!find("property", "og:title"))
    extra.push(`<meta property="og:title" content="${esc(title)}"/>`);
  if (!find("property", "og:description") && desc)
    extra.push(`<meta property="og:description" content="${esc(desc)}"/>`);
  extra.push(`<meta property="og:image" content="${OG_IMAGE}"/>`);
  extra.push(`<meta property="og:image:width" content="1200"/>`);
  extra.push(`<meta property="og:image:height" content="630"/>`);
  if (noindex) {
    extra.push(`<meta name="robots" content="noindex"/>`);
  } else {
    extra.push(`<meta property="og:url" content="${SITE}${path}"/>`);
    extra.push(`<link rel="canonical" href="${SITE}${path}"/>`);
  }
  return extra.join("");
}

// renderToString puts React's hoisted <title>/<meta>/<link> tags first; move them into <head>.
function splitHead(html) {
  const m = html.match(/^(?:<(?:title)[^>]*>[\s\S]*?<\/title>|<(?:meta|link)\b[^>]*\/?>)+/);
  const head = m ? m[0] : "";
  return { head, body: html.slice(head.length) };
}

async function page(url, outPath, opts) {
  const { html, meta, notFound } = await render(url);
  if (notFound && !opts?.noindex) throw new Error(`Prerender: ${url} rendered the 404 page`);
  let { head, body } = splitHead(html);
  // The router's inline scroll-restoration script would be blocked by the CSP anyway, and the
  // client never renders it, so leaving it in breaks hydration.
  body = body.replace(/<script>[\s\S]*?<\/script>/g, "");
  if (opts?.noindex)
    head = head.replace(/<title>[\s\S]*?<\/title>/, "<title>Page not found | Lexserver</title>");
  head = head.replace(/<(title|meta|link)\b/g, "<$1 data-prerendered");
  const out = template
    .replace("</head>", `${head}${headTags(meta, url, opts)}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, out);
}

for (const path of STATIC_PATHS) {
  const file = path === "/" ? "index.html" : `${path.slice(1)}.html`;
  await page(path, join(dist, file));
}
await page("/404", join(dist, "404.html"), { noindex: true });

const urls = [...STATIC_PATHS, "/indexwise/", "/indexwise/privacy/"];
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${SITE}${u}</loc></url>`)
    .join("\n")}\n</urlset>\n`,
);

rmSync(join(dist, "..", "dist-ssr"), { recursive: true, force: true });
console.log(`Prerendered ${STATIC_PATHS.length} pages, 404.html and sitemap.xml`);
