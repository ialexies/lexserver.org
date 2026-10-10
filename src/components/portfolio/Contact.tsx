import { useState } from "react";
import { PROFILE } from "@/lib/portfolio-data";
import { Container, btnPrimary, textLink } from "./Page";

const BUDGETS = ["Not sure yet", "Under ₱50,000", "₱50,000 – ₱150,000", "Over ₱150,000"];

function oneLine(s: string) {
  return s.replace(/[\r\n]+/g, " ").trim();
}

const fieldClass =
  "mt-1.5 w-full rounded-md border border-line bg-surface px-3 py-2.5 text-[16px] text-fg placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25";

type Status = "idle" | "sending" | "sent" | "fallback" | "invalid" | "busy";

export function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [budget, setBudget] = useState(BUDGETS[0]);
  const [msg, setMsg] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const mailtoHref = () => {
    const subject = `Project inquiry from ${oneLine(name) || "the website"}`;
    const body = `${msg.trim()}\n\nBudget: ${budget}\n\n${oneLine(name)}${from ? ` (${oneLine(from)})` : ""}`;
    return `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: from, budget, message: msg, website }),
      });
      if (res.ok) {
        setStatus("sent");
        setName("");
        setFrom("");
        setBudget(BUDGETS[0]);
        setMsg("");
      } else if (res.status === 422) {
        setStatus("invalid");
      } else if (res.status === 429) {
        setStatus("busy");
      } else {
        setStatus("fallback");
      }
    } catch {
      setStatus("fallback");
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 border-t border-line py-16 md:py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
          <div>
            <h2 className="text-[28px] font-medium leading-tight tracking-[-0.015em] md:text-[32px]">
              Tell us what you're working on
            </h2>
            <p className="mt-3 max-w-[44ch] text-lg leading-relaxed text-muted">
              A few lines is enough to start. We reply to every message ourselves.
            </p>
            <dl className="mt-8 grid gap-4 text-[15px]">
              <div>
                <dt className="text-muted">Email</dt>
                <dd>
                  <a href={`mailto:${PROFILE.email}`} className={textLink}>
                    {PROFILE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">LinkedIn</dt>
                <dd>
                  <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className={textLink}>
                    Alexies Iglesia
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Based in</dt>
                <dd>Hermosa, Bataan, Philippines</dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative grid gap-5 rounded-xl border border-line bg-surface p-5 md:p-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-[14px] font-medium" htmlFor="contact-name">
                Name
                <input
                  id="contact-name"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={fieldClass}
                />
              </label>
              <label className="block text-[14px] font-medium" htmlFor="contact-email">
                Email
                <input
                  id="contact-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className={fieldClass}
                />
              </label>
            </div>
            <label className="block text-[14px] font-medium" htmlFor="contact-budget">
              Budget <span className="font-normal text-muted">(optional)</span>
              <select
                id="contact-budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className={fieldClass}
              >
                {BUDGETS.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </label>
            <label className="block text-[14px] font-medium" htmlFor="contact-message">
              What do you need?
              <textarea
                id="contact-message"
                required
                rows={5}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="For example: a website for our resort with online booking."
                className={`${fieldClass} resize-y`}
              />
            </label>
            {/* Hidden from people; bots that fill it are ignored by the server. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor="contact-website">
                Website
                <input
                  id="contact-website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </label>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className={`${btnPrimary} disabled:opacity-60`}
              >
                {status === "sending" ? "Sending…" : "Send"}
              </button>
            </div>
            <div role="status" aria-live="polite">
              {status === "sent" && (
                <p className="rounded-md bg-accent-soft px-4 py-3 text-[14px] text-fg">
                  Thanks, your message is on its way. We'll reply to your email soon.
                </p>
              )}
              {status === "invalid" && (
                <p className="rounded-md bg-accent-soft px-4 py-3 text-[14px] text-fg">
                  Please check your name, email and message, then try again.
                </p>
              )}
              {status === "busy" && (
                <p className="rounded-md bg-accent-soft px-4 py-3 text-[14px] text-fg">
                  That's a lot of messages in a short time. Please wait a bit, or email us at{" "}
                  <a href={`mailto:${PROFILE.email}`} className={textLink}>
                    {PROFILE.email}
                  </a>
                  .
                </p>
              )}
              {status === "fallback" && (
                <p className="rounded-md bg-accent-soft px-4 py-3 text-[14px] text-fg">
                  We couldn't send it from here.{" "}
                  <a href={mailtoHref()} className={textLink}>
                    Send it from your email app
                  </a>{" "}
                  instead, and your message will be filled in.
                </p>
              )}
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
