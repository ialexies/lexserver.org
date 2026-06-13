import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { Experience } from "@/components/portfolio/Experience";
import { Reveal } from "@/components/portfolio/Reveal";
import { PROFILE } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        {/* Hero */}
        <section className="border-b-4 border-ink bg-ink text-white">
          <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
            <span className="inline-block border-2 border-white/20 bg-pop px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              / About the Studio
            </span>
            <h1 className="font-display mt-6 text-[clamp(48px,11vw,140px)] uppercase leading-[0.84] tracking-tight">
              Builds Worlds<span className="text-pop">.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
              A web, mobile, and IT services studio based in Bataan,
              Philippines. Founded by {PROFILE.name} — developer, designer,
              and maker with 15+ years across startups, agencies, and product
              companies.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="border-b-4 border-ink bg-paper">
          <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
            <div className="grid gap-12 md:grid-cols-2">
              <Reveal>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-ink/40">
                    / The Story
                  </span>
                  <h2 className="font-display mt-3 text-4xl uppercase leading-[0.95] md:text-5xl">
                    Code. Design.
                    <br />
                    <span className="text-pop">Ship it.</span>
                  </h2>
                  <p className="mt-6 text-xl leading-relaxed text-ink/80">
                    Builds Worlds Studio is the workbench of{" "}
                    <strong>{PROFILE.name}</strong> — 15+ years spent at the
                    intersection of mobile, web, brand, and physical
                    prototyping.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-ink/65">
                    From Flutter apps shipped to thousands of daily users, to
                    WordPress sites that rank on the first page of Google, to
                    brand identities delivered to clients in Singapore,
                    Australia, and Japan — the through-line is craft that holds
                    up in the real world.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-ink/65">
                    The studio takes on web &amp; mobile builds, brand and
                    design work, and the IT services to keep it all running —
                    for clients who want one accountable partner, not a handoff
                    chain.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="/#contact"
                      className="font-display border-4 border-pop bg-pop px-6 py-3 text-base uppercase text-white shadow-brut transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                    >
                      Start a Project →
                    </a>
                    <a
                      href="/work"
                      className="font-display border-4 border-ink bg-paper px-6 py-3 text-base uppercase transition-colors hover:bg-ink hover:text-white"
                    >
                      See Our Work
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Founder card */}
              <Reveal delay={0.1}>
                <div className="border-4 border-ink bg-ink p-6 text-white shadow-brut-lg">
                  <div
                    className="flex items-center justify-center border-4 border-white/20 bg-white/5"
                    style={{ aspectRatio: "4/5" }}
                  >
                    <span className="font-display text-4xl uppercase text-white/20">
                      Photo
                    </span>
                  </div>
                  <div className="mt-6">
                    <p className="font-display text-xl uppercase">
                      {PROFILE.name}
                    </p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-widest text-pop">
                      Founder · Developer · Designer · Maker
                    </p>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-white/60">
                      {PROFILE.location}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Experience timeline */}
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
