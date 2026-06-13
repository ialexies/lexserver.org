import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/work")({
  component: WorkPage,
});

function WorkPage() {
  return (
    <motion.div
      className="min-h-screen bg-paper text-ink"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <Nav />
      <main>
        <section className="border-b border-[#1e2d45] bg-[#070e1b] text-white">
          <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
            <span className="inline-block border border-pop bg-pop px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              / Client Work
            </span>
            <h1 className="font-display mt-6 text-[clamp(48px,11vw,140px)] uppercase leading-[0.84] tracking-tight">
              Our Work.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#e2eaf5]/65">
              A selection of projects built for clients across Southeast Asia
              and beyond — mobile apps, web platforms, brand identities, and
              more.
            </p>
          </div>
        </section>

        <Portfolio />
      </main>
      <Footer />
    </motion.div>
  );
}
