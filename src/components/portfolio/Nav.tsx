import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setScrolled(v > 0.01);
  });

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[2px] bg-pop origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <header
        className={`sticky top-0 z-50 border-b border-border transition-all duration-300 ${
          scrolled
            ? "bg-paper/85 backdrop-blur-md shadow-lg shadow-black/10"
            : "bg-paper"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-8">
          <a href="/" className="flex items-center gap-1.5 font-display text-xl uppercase tracking-tighter text-ink">
            Builds&nbsp;Worlds
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-pop"
            >
              .
            </motion.span>
          </a>

          <ul className="hidden items-center gap-1 text-[13px] font-bold uppercase tracking-widest md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="border border-transparent px-3 py-1.5 text-ink/70 transition-colors hover:border-border hover:bg-surface-raised hover:text-ink"
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
              className="inline-flex items-center gap-2 border border-border bg-pop px-4 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-brut-pop transition-all hover:ring-2 hover:ring-pop/30"
            >
              Start a Project
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="border border-border bg-surface px-3 py-2 text-xs font-bold uppercase text-ink hover:bg-surface-raised"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="grid border-t border-border bg-paper md:hidden"
            >
              {NAV_LINKS.map((l) => (
                <li key={l.href} className="border-b border-border">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 text-sm font-bold uppercase tracking-widest text-ink/80 hover:bg-surface-raised hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 bg-pop px-6 py-4 text-sm font-bold uppercase tracking-widest text-white"
                >
                  Start a Project <ArrowRight size={14} />
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
