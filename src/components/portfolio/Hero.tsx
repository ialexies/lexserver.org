import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-4 border-ink bg-ink">
      <div className="mx-auto flex min-h-[90vh] max-w-[1400px] flex-col justify-end px-4 py-12 md:px-8 md:py-20">
        {/* Badges */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="inline-block border-2 border-pop bg-pop px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
            Web · Mobile · Branding · IT
          </span>
          <span className="inline-flex items-center gap-2 border-2 border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/60">
            <span className="h-2 w-2 flex-shrink-0 bg-pop" />
            Available for projects · Bataan, PH
          </span>
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display -ml-1 text-[clamp(56px,14vw,210px)] uppercase leading-[0.84] tracking-tight text-white"
        >
          We&nbsp;build
          <br />
          Worlds<span className="text-pop">.</span>
        </motion.h1>

        {/* Sub-headline + CTAs */}
        <div className="mt-10 grid items-end gap-8 md:grid-cols-2">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-xl text-xl font-semibold leading-relaxed text-white/75 md:text-[clamp(18px,2.2vw,24px)]"
          >
            Web, mobile &amp; IT services for startups and businesses across
            Southeast Asia. One studio, end-to-end delivery — from Bataan to
            the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="font-display border-4 border-white px-6 py-3 text-base uppercase text-white transition-colors hover:bg-white hover:text-ink"
            >
              See Our Work
            </a>
            <a
              href="#contact"
              className="font-display border-4 border-pop bg-pop px-6 py-3 text-base uppercase text-white shadow-brut-white transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              Start a Project →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
