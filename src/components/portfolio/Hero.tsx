import { motion } from "framer-motion";
import { PROFILE } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative border-b-4 border-ink overflow-hidden"
    >
      <div className="mx-auto flex min-h-[88vh] max-w-[1400px] flex-col justify-end px-4 py-10 md:px-8 md:py-16">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="inline-block border-2 border-ink bg-pop px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
            Full-Stack · Mobile · 3D Maker
          </span>
          <span className="inline-flex items-center gap-2 border-2 border-ink bg-paper px-3 py-1 text-xs font-bold uppercase tracking-widest">
            <span className="h-2 w-2 bg-pop" /> Available · {PROFILE.location}
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display -ml-1 text-[18vw] uppercase leading-[0.85] md:text-[14vw]"
        >
          Alexies
          <br />
          Iglesia<span className="text-pop">.</span>
        </motion.h1>

        <div className="mt-10 grid items-end gap-8 md:grid-cols-2">
          <p className="max-w-xl text-2xl font-semibold leading-tight md:text-3xl">
            Code <span className="text-pop">/</span> Design{" "}
            <span className="text-pop">/</span> Make. Crafting high-performance
            digital and physical products from Bataan, PH.
          </p>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Tile rot="rotate-3" bg="bg-acid" label="CODE" />
            <Tile rot="-rotate-6" bg="bg-pop text-white" label="UI/UX" />
            <Tile rot="rotate-12" bg="bg-ink text-white" label="3D" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Tile({
  label,
  bg,
  rot,
}: {
  label: string;
  bg: string;
  rot: string;
}) {
  return (
    <div
      className={`flex h-24 w-24 items-center justify-center border-4 border-ink font-display text-2xl uppercase shadow-brut ${bg} ${rot}`}
    >
      {label}
    </div>
  );
}
