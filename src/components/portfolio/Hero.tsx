import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="relative border-b-4 border-ink overflow-hidden">
      <div className="mx-auto flex min-h-[86vh] max-w-[1400px] flex-col justify-end px-4 py-10 md:px-8 md:py-16">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="inline-block border-2 border-ink bg-pop px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
            Digital &amp; physical product studio
          </span>
          <span className="inline-flex items-center gap-2 border-2 border-ink bg-paper px-3 py-1 text-xs font-bold uppercase tracking-widest">
            <span className="h-2 w-2 flex-shrink-0 bg-pop" />
            Available for new projects · Bataan, PH
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display -ml-1 text-[clamp(56px,14vw,210px)] uppercase leading-[0.84] tracking-tight"
        >
          We&nbsp;build
          <br />
          Worlds<span className="text-pop">.</span>
        </motion.h1>

        <div className="mt-10 grid items-end gap-8 md:grid-cols-2">
          <p className="max-w-xl text-xl font-semibold leading-tight md:text-[clamp(20px,2.4vw,30px)]">
            A product studio shipping high-performance web{" "}
            <span className="text-pop">/</span> mobile apps, brand design{" "}
            <span className="text-pop">/</span> 3D&#8209;printed prototypes —
            and the IT services to keep them running. From one workbench in
            Bataan, Philippines.
          </p>
          <div className="flex flex-wrap gap-4">
            <Tile rot="rotate-3" bg="bg-acid text-ink" label="Code" />
            <Tile rot="-rotate-6" bg="bg-pop text-white" label="UI/UX" />
            <Tile rot="rotate-12" bg="bg-ink text-white" label="3D" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Tile({ label, bg, rot }: { label: string; bg: string; rot: string }) {
  return (
    <div
      className={`flex h-24 w-24 items-center justify-center border-4 border-ink font-display text-2xl uppercase shadow-brut ${bg} ${rot}`}
    >
      {label}
    </div>
  );
}
