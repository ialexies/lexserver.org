import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Story" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-paper">
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-8">
        <a href="#top" className="font-display text-2xl uppercase tracking-tighter">
          Alexies<span className="text-pop">.</span>
        </a>
        <ul className="hidden items-center gap-2 text-sm font-bold uppercase tracking-widest md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="border-2 border-transparent px-3 py-1 transition-colors hover:border-ink hover:bg-acid"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden border-2 border-ink bg-acid px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-brut transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:inline-block"
        >
          Hire me
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="border-2 border-ink bg-acid px-3 py-2 text-xs font-bold uppercase md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <ul className="grid border-t-4 border-ink bg-paper md:hidden">
          {LINKS.map((l) => (
            <li key={l.href} className="border-b-2 border-ink last:border-b-0">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-sm font-bold uppercase tracking-widest hover:bg-acid"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
