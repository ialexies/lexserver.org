import { useState } from "react";
import { PROFILE } from "@/lib/portfolio-data";

function sanitize(s: string) {
  return s.replace(/[\r\n]/g, " ").trim();
}

export function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const safeName = sanitize(name);
    const safeFrom = sanitize(from);
    const safeMsg = sanitize(msg);
    const uri =
      "mailto:" +
      PROFILE.email +
      "?subject=" +
      encodeURIComponent(`Project inquiry from ${safeName || "your site"}`) +
      "&body=" +
      encodeURIComponent(`${safeMsg}\n\n— ${safeName}${safeFrom ? ` (${safeFrom})` : ""}`);
    if (!uri.startsWith("mailto:")) return;
    window.location.href = uri;
  };

  return (
    <section id="contact" className="border-b-4 border-ink bg-pop text-white">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-4 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <div className="flex flex-col justify-between">
          <div>
            <span className="border-2 border-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
              / Let's talk
            </span>
            <h2 className="font-display mt-6 text-6xl uppercase leading-[0.9] md:text-8xl">
              Ready to
              <br />
              <span className="text-acid">build?</span>
            </h2>
            <p className="mt-6 max-w-md text-lg font-semibold uppercase tracking-wide">
              Open for product builds, contracts, IT services, and custom 3D-printed work.
            </p>
          </div>
          <ul className="mt-10 space-y-3 text-sm font-bold uppercase tracking-widest">
            <li>
              <a className="hover:text-acid" href={`mailto:${PROFILE.email}`}>
                ▸ {PROFILE.email}
              </a>
            </li>
            <li>
              <a className="hover:text-acid" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                ▸ linkedin.com/in/alexies-iglesia
              </a>
            </li>
            <li>
              <a className="hover:text-acid" href={PROFILE.github} target="_blank" rel="noreferrer">
                ▸ github.com/ialexies
              </a>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border-4 border-ink bg-paper p-6 text-ink shadow-brut-lg md:p-8"
        >
          <div className="grid gap-4">
            <Field label="Name" value={name} onChange={setName} placeholder="JUAN DELA CRUZ" />
            <Field label="Email" type="email" value={from} onChange={setFrom} placeholder="YOU@COMPANY.COM" />
            <label className="block">
              <span className="block text-[11px] font-bold uppercase tracking-widest">
                Project brief
              </span>
              <textarea
                required
                rows={5}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="TELL ME WHAT YOU'RE BUILDING…"
                className="mt-2 w-full resize-none border-4 border-ink bg-paper p-4 text-sm font-bold uppercase tracking-wider placeholder:text-ink/40 focus:bg-acid focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="font-display border-4 border-ink bg-ink p-5 text-xl uppercase text-paper transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brut"
            >
              Send message →
            </button>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">
              Opens your email client. No data is stored.
            </p>
          </div>
        </form>
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
      <span className="block text-[11px] font-bold uppercase tracking-widest">
        {label}
      </span>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full border-4 border-ink bg-paper p-4 text-sm font-bold uppercase tracking-wider placeholder:text-ink/40 focus:bg-acid focus:outline-none"
      />
    </label>
  );
}
