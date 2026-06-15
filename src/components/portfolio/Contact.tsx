import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { PROFILE } from "@/lib/portfolio-data";
import { CheckCircle } from "lucide-react";

function sanitize(s: string) {
  return s.replace(/[\r\n]/g, " ").trim();
}

export function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const reduce = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const safeName = sanitize(name);
    const safeFrom = sanitize(from);
    const safeMsg = sanitize(msg);
    const uri =
      "mailto:" +
      PROFILE.email +
      "?subject=" +
      encodeURIComponent(`Project inquiry from ${safeName || "your website"}`) +
      "&body=" +
      encodeURIComponent(
        `${safeMsg}\n\n— ${safeName}${safeFrom ? ` (${safeFrom})` : ""}`
      );
    if (!uri.startsWith("mailto:")) return;
    window.location.href = uri;
    setSent(true);
  };

  return (
    <section id="contact" className="border-b border-border bg-pop text-white">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-4 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <div className="flex flex-col justify-between">
          <div>
            <span className="border border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest">
              / Let's talk
            </span>
            <h2 className="font-display mt-6 text-6xl uppercase leading-[0.9] tracking-tight md:text-8xl">
              Ready to
              <br />
              build?
            </h2>
            <p className="mt-6 max-w-md text-lg font-semibold leading-relaxed uppercase tracking-wide text-white/80">
              Open for website projects, mobile apps, branding, graphic design,
              and IT services. Let's make something great together.
            </p>
          </div>

          <ul className="mt-10 space-y-3 text-sm font-bold uppercase tracking-widest">
            <li>
              <a className="transition-colors hover:text-white/70" href={`mailto:${PROFILE.email}`}>
                ▸ {PROFILE.email}
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-white/70"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                ▸ LinkedIn — Alexies Iglesia
              </a>
            </li>
            <li>
              <span className="text-white/50">▸ Hermosa, Bataan · Philippines</span>
            </li>
          </ul>
        </div>

        {sent ? (
          <div className="flex flex-col items-center justify-center gap-6 border border-white/20 bg-paper p-8 text-center shadow-brut-lg">
            <CheckCircle size={64} className="text-pop" strokeWidth={1.5} />
            <div>
              <h3 className="font-display text-2xl uppercase tracking-tight text-ink">
                Message Sent!
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your email client should have opened. We'll get back to you within 24 hours.
              </p>
            </div>
            <button
              onClick={() => setSent(false)}
              className="border border-border px-6 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:border-pop hover:text-pop"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="border border-white/20 bg-paper p-6 shadow-brut-lg md:p-8"
          >
            <div className="grid gap-4">
              <Field label="Name" value={name} onChange={setName} placeholder="JUAN DELA CRUZ" />
              <Field label="Email" type="email" value={from} onChange={setFrom} placeholder="YOU@COMPANY.COM" />
              <label className="block">
                <span className="block text-[11px] font-bold uppercase tracking-widest text-ink">
                  Project Brief
                </span>
                <textarea
                  required
                  rows={5}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="TELL US WHAT YOU'RE BUILDING…"
                  className="mt-2 w-full resize-none border border-border bg-canvas p-4 text-sm font-bold uppercase tracking-wider text-ink placeholder:text-muted-foreground/60 focus:border-pop focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="font-display border border-pop bg-pop p-5 text-xl uppercase text-white transition-all hover:ring-2 hover:ring-pop/30 hover:shadow-brut-pop"
              >
                Send Message →
              </button>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                Opens your email client. No data is stored.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] font-bold uppercase tracking-widest text-ink">
        {label}
      </span>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full border border-border bg-canvas p-4 text-sm font-bold uppercase tracking-wider text-ink placeholder:text-muted-foreground/60 focus:border-pop focus:outline-none"
      />
    </label>
  );
}
