import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { Experience } from "@/components/portfolio/Experience";
import { Reveal } from "@/components/portfolio/Reveal";
import { PROFILE, TEAM } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <motion.div
      className="min-h-screen bg-paper text-ink"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <Nav />
      <main>
        {/* Hero */}
        <section className="border-b border-[#1e2d45] bg-[#070e1b] text-white">
          <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
            <span className="inline-block border border-pop bg-pop px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              / About the Studio
            </span>
            <h1 className="font-display mt-6 text-[clamp(48px,11vw,140px)] uppercase leading-[0.84] tracking-tight">
              Builds<br />Worlds<span className="text-pop">.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#e2eaf5]/65">
              A web, mobile, and IT services studio based in Bataan, Philippines
              — built by <strong className="text-white">Alexies Iglesia</strong> (IT &amp; Software Engineer)
              and <strong className="text-white">Charity Dultra</strong> (Graphic Designer &amp; Illustrator).
              Code and craft, under one roof.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="border-b border-[#1e2d45]">
          <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
            <div className="grid gap-12 md:grid-cols-2">
              <Reveal>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#7890a8]">
                    / The Story
                  </span>
                  <h2 className="font-display mt-3 text-4xl uppercase leading-[0.95] tracking-tight md:text-5xl">
                    Code. Design.
                    <br />
                    <span className="text-pop">Ship it.</span>
                  </h2>
                  <p className="mt-6 text-xl leading-relaxed text-[#e2eaf5]/80">
                    Builds Worlds Studio is the combined work of{" "}
                    <strong className="text-[#e2eaf5]">Alexies Iglesia</strong> — IT engineer and software developer with 15+ years across startups and agencies — and{" "}
                    <strong className="text-[#e2eaf5]">Charity Dultra</strong> — a Cum Laude Fine Arts graduate and graphic designer with a decade of work for international clients.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-[#7890a8]">
                    From Flutter apps shipped to thousands of daily users, to
                    brand identities delivered to clients in Singapore, Australia,
                    and Japan — the through-line is code and design that hold up
                    in the real world, built by people who care about both.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-[#7890a8]">
                    The studio takes on web &amp; mobile builds, graphic design
                    and illustration, and the IT services to keep it all running —
                    for clients who want one accountable team, not a handoff chain.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="/#contact"
                      className="font-display border border-pop bg-pop px-6 py-3 text-base uppercase text-white shadow-brut-pop transition-all hover:ring-2 hover:ring-pop/30"
                    >
                      Start a Project →
                    </a>
                    <a
                      href="/work"
                      className="font-display border border-[#1e2d45] bg-[#111827] px-6 py-3 text-base uppercase text-[#e2eaf5] transition-all hover:border-pop hover:text-pop"
                    >
                      See Our Work
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Team cards */}
              <Reveal delay={0.1}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {TEAM.map((member) => (
                    <div key={member.name} className="border border-[#1e2d45] bg-[#111827] p-4 shadow-brut-lg">
                      <div
                        className="flex items-center justify-center border border-[#1e2d45] bg-[#1e2d45]"
                        style={{ aspectRatio: "1/1" }}
                      >
                        <span className="font-display text-2xl uppercase text-[#e2eaf5]/20">
                          Photo
                        </span>
                      </div>
                      <div className="mt-3">
                        <p className="font-display text-base uppercase text-[#e2eaf5]">
                          {member.name}
                        </p>
                        <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-pop">
                          {member.role}
                        </p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#7890a8]">
                          {member.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <Experience />
      </main>
      <Footer />
    </motion.div>
  );
}
