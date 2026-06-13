import { motion, useReducedMotion } from "framer-motion";

const HEADLINE = ["We", "build", "Worlds."];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden border-b border-[#1e2d45] bg-[#070e1b]">
      {/* Gradient mesh glows */}
      <div className="pointer-events-none absolute inset-0">
        {/* Orange glow — bottom-right where CTA lives */}
        <div className="absolute -bottom-20 -right-20 h-[600px] w-[600px] rounded-full bg-[#ff5722]/10 blur-[120px]" />
        {/* Indigo glow — top-left counterbalance */}
        <div className="absolute -left-32 -top-20 h-[500px] w-[500px] rounded-full bg-[#4f46e5]/8 blur-[100px]" />
        {/* Subtle warm mid glow */}
        <div className="absolute bottom-1/3 left-1/3 h-[300px] w-[400px] rounded-full bg-[#ff5722]/5 blur-[80px]" />
      </div>

      <div className="mx-auto flex min-h-[90vh] max-w-[1400px] flex-col justify-end px-4 py-12 md:px-8 md:py-20">
        {/* Badges */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block border border-pop bg-pop px-3 py-1 text-xs font-bold uppercase tracking-widest text-white"
          >
            Web · Mobile · Branding · IT
          </motion.span>
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 border border-[#e2eaf5]/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#e2eaf5]/50"
          >
            <motion.span
              className="h-2 w-2 flex-shrink-0 rounded-full bg-pop"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Available for projects · Bataan, PH
          </motion.span>
        </div>

        {/* Headline — word by word */}
        <h1 className="font-display -ml-1 text-[clamp(56px,14vw,210px)] uppercase leading-[0.84] tracking-tight text-white">
          {reduce ? (
            <>We&nbsp;build<br />Worlds<span className="text-pop">.</span></>
          ) : (
            HEADLINE.map((word, i) => (
              <span key={word} className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word === "Worlds." ? (
                    <>{word.slice(0, -1)}<span className="text-pop">.</span></>
                  ) : word}
                  {i < HEADLINE.length - 1 && (i === 1 ? <br /> : " ")}
                </motion.span>
              </span>
            ))
          )}
        </h1>

        {/* Sub-headline + CTAs */}
        <div className="mt-10 grid items-end gap-8 md:grid-cols-2">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="max-w-xl text-xl font-semibold leading-relaxed text-[#e2eaf5]/65 md:text-[clamp(18px,2.2vw,24px)]"
          >
            Web, mobile &amp; IT services for startups and businesses across
            Southeast Asia. One studio, end-to-end delivery — from Bataan to
            the world.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="font-display border border-[#e2eaf5]/30 px-6 py-3 text-base uppercase text-white transition-all hover:border-[#e2eaf5]/60 hover:bg-[#e2eaf5]/5"
            >
              See Our Work
            </a>
            <a
              href="#contact"
              className="font-display border border-pop bg-pop px-6 py-3 text-base uppercase text-white shadow-brut-pop transition-all hover:ring-2 hover:ring-pop/30"
            >
              Start a Project →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
