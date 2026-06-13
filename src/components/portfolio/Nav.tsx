import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b-4 border-ink bg-paper transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-8">
        <a href="/" className="font-display text-xl uppercase tracking-tighter">
          Builds&nbsp;Worlds<span className="text-pop">.</span>
        </a>

        <ul className="hidden items-center gap-1 text-[13px] font-bold uppercase tracking-widest md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="border-2 border-transparent px-3 py-1 transition-colors hover:border-ink hover:bg-muted"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/#contact"
          className="hidden border-2 border-ink bg-pop px-4 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-brut transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:inline-block"
        >
          Start a Project
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="border-2 border-ink bg-paper px-3 py-2 text-xs font-bold uppercase hover:bg-muted md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul className="grid border-t-4 border-ink bg-paper md:hidden">
          {NAV_LINKS.map((l) => (
            <li key={l.href} className="border-b-2 border-ink/10">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-sm font-bold uppercase tracking-widest hover:bg-muted"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="block bg-pop px-6 py-4 text-sm font-bold uppercase tracking-widest text-white"
            >
              Start a Project →
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
