import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/#products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

function isActive(href: string, path: string) {
  if (href.startsWith("/#")) return false;
  return path === href || path.startsWith(href + "/");
}

export function Nav() {
  const path = useLocation({ select: (l) => l.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const close = () => setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", close);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", close);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-bg/90 backdrop-blur transition-colors ${
        scrolled || open ? "border-line" : "border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-[1168px] items-center justify-between gap-4 px-4 md:px-6"
      >
        <a href="/" className="text-[17px] font-semibold tracking-[-0.01em] text-fg">
          Lexserver<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 text-[14px] md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={isActive(l.href, path) ? "page" : undefined}
                className="text-muted transition-colors hover:text-fg aria-[current=page]:text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a
            href="/#contact"
            className="rounded-md border border-line px-3.5 py-1.5 text-[14px] font-medium text-fg transition-colors hover:border-fg/40"
          >
            Start a project
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-line px-3 py-1.5 text-[14px] font-medium text-fg"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="grid border-t border-line bg-bg px-4 pb-4 md:hidden">
          {NAV_LINKS.map((l) => (
            <li key={l.href} className="border-b border-line">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3.5 text-[16px] text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="block rounded-md bg-accent py-3 text-center text-[15px] font-medium text-accent-fg"
            >
              Start a project
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
