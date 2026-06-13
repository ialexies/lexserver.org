import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/work")({
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        {/* Page hero */}
        <section className="border-b-4 border-ink bg-ink text-white">
          <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
            <span className="inline-block border-2 border-white/20 bg-pop px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              / Client Work
            </span>
            <h1 className="font-display mt-6 text-[clamp(48px,11vw,140px)] uppercase leading-[0.84] tracking-tight">
              Our Work.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
              A selection of projects built for clients across Southeast Asia
              and beyond — mobile apps, web platforms, brand identities, and
              more.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
