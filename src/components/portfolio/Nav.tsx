import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
        className={`sticky top-0 z-50 border-b border-[#1e2d45] transition-all duration-300 ${
          scrolled
            ? "bg-[#0b1120]/85 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-[#0b1120]"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-8">
          <a href="/" className="flex items-center gap-1.5 font-display text-xl uppercase tracking-tighter text-[#e2eaf5]">
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
                  className="border border-transparent px-3 py-1.5 text-[#e2eaf5]/70 transition-colors hover:border-[#e2eaf5]/20 hover:bg-[#1a2540] hover:text-[#e2eaf5]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/#contact"
            className="hidden items-center gap-2 border border-[#1e2d45] bg-pop px-4 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-brut-pop transition-all hover:ring-2 hover:ring-pop/30 md:inline-flex"
          >
            Start a Project
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </a>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="border border-[#1e2d45] bg-[#111827] px-3 py-2 text-xs font-bold uppercase text-[#e2eaf5] hover:bg-[#1a2540] md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="grid border-t border-[#1e2d45] bg-[#0b1120] md:hidden"
            >
              {NAV_LINKS.map((l) => (
                <li key={l.href} className="border-b border-[#1e2d45]">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 text-sm font-bold uppercase tracking-widest text-[#e2eaf5]/80 hover:bg-[#1a2540] hover:text-[#e2eaf5]"
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
