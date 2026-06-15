import { motion, useReducedMotion } from "framer-motion";

const HEADLINE = ["We", "build", "Worlds."];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden border-b border-[#1e2d45] bg-[#070e1b]">
      {/* Gradient mesh glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-20 -right-20 h-[600px] w-[600px] rounded-full bg-[#ff5722]/10 blur-[120px]" />
        <div className="absolute -left-32 -top-20 h-[500px] w-[500px] rounded-full bg-[#4f46e5]/8 blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/3 h-[300px] w-[400px] rounded-full bg-[#ff5722]/5 blur-[80px]" />
      </div>

      {/* flex col on mobile → grid 2-col on desktop */}
      <div className="mx-auto flex min-h-[90vh] max-w-[1400px] flex-col px-4 py-12 md:grid md:grid-cols-2 md:px-8 md:py-20">

        {/* Left: text content — grows to fill height, content pinned to bottom */}
        <div className="flex flex-grow flex-col justify-end">
          {/* Globe — mobile only, sits in the empty top space */}
          <div className="mb-auto flex justify-center pt-4 md:hidden">
            <motion.img
              src="/hero-globe.png"
              alt=""
              initial={reduce ? false : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-[85%] max-w-[340px] mix-blend-lighten"
            />
          </div>
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

          {/* Headline — space/br placed OUTSIDE overflow-hidden span to avoid clip */}
          <h1 className="font-display -ml-1 text-[clamp(56px,10vw,160px)] uppercase leading-[0.84] tracking-tight text-white">
            {reduce ? (
              <>We&nbsp;build<br />Worlds<span className="text-pop">.</span></>
            ) : (
              HEADLINE.map((word, i) => (
                <span key={word}>
                  <span className="inline-block overflow-hidden">
                    <motion.span
                      className="inline-block"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {word === "Worlds." ? (
                        <>{word.slice(0, -1)}<span className="text-pop">.</span></>
                      ) : word}
                    </motion.span>
                  </span>
                  {i === 0 && " "}
                  {i === 1 && <br />}
                </span>
              ))
            )}
          </h1>

          {/* Sub-headline + CTAs */}
          <div className="mt-8 flex flex-col gap-6">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="max-w-lg text-lg font-semibold leading-relaxed text-[#e2eaf5]/65"
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

        {/* Right: globe — hidden on mobile, centered on desktop */}
        <div className="hidden md:flex md:items-center md:justify-center">
          <motion.img
            src="/hero-globe.png"
            alt=""
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[620px] mix-blend-lighten"
          />
        </div>
      </div>
    </section>
  );
}
