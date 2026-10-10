import { useState } from "react";
import { PROFILE } from "@/lib/portfolio-data";
import { Container, btnPrimary, textLink } from "./Page";

const BUDGETS = ["Not sure yet", "Under ₱50,000", "₱50,000 – ₱150,000", "Over ₱150,000"];

function oneLine(s: string) {
  return s.replace(/[\r\n]+/g, " ").trim();
}

const fieldClass =
  "mt-1.5 w-full rounded-md border border-line bg-surface px-3 py-2.5 text-[16px] text-fg placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25";

export function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [budget, setBudget] = useState(BUDGETS[0]);
  const [msg, setMsg] = useState("");
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Project inquiry from ${oneLine(name) || "the website"}`;
    const body = `${msg.trim()}\n\nBudget: ${budget}\n\n${oneLine(name)}${from ? ` (${oneLine(from)})` : ""}`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
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
            className="grid gap-5 rounded-xl border border-line bg-surface p-5 md:p-7"
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
            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" className={btnPrimary}>
                Send
              </button>
              <p className="text-[13px] text-muted">Opens your email app with this message.</p>
            </div>
            {opened && (
              <p role="status" className="rounded-md bg-accent-soft px-4 py-3 text-[14px] text-fg">
                Your email app should now be open with the message ready to send. If nothing opened,
                email us at {PROFILE.email}.
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
