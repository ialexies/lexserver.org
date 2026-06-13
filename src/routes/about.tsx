import { createFileRoute } from '@tanstack/react-router';
import { Nav } from '@/components/portfolio/Nav';
import { Footer } from '@/components/portfolio/Footer';
import { Experience } from '@/components/portfolio/Experience';
import { Reveal } from '@/components/portfolio/Reveal';
import { SectionHeading } from '@/components/portfolio/SectionHeading';
import { AWARDS, PROFILE } from '@/lib/portfolio-data';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        {/* Intro */}
        <section className="border-b-4 border-ink">
          <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
            <span className="inline-block border-2 border-ink bg-pop px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              / About us
            </span>
            <h1 className="font-display mt-6 text-[clamp(48px,11vw,150px)] uppercase leading-[0.84] tracking-tight">
              One maker.
              <br />
              Many <span className="text-pop">worlds.</span>
            </h1>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {/* Story */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-60">
                  / The story
                </span>
                <h2 className="font-display mt-3 text-4xl uppercase leading-[0.95] md:text-5xl">
                  Build it.
                  <br />
                  Design it.
                  <br />
                  <span className="text-pop">Print it.</span>
                </h2>
                <p className="mt-6 text-xl leading-relaxed">
                  Builds Worlds started as the workbench of{" "}
                  <strong>{PROFILE.name}</strong> — 15+ years across startups
                  and agencies, working at the intersection of mobile, web,
                  brand, and physical prototyping.
                </p>
                <p className="mt-4 text-lg leading-relaxed opacity-85">
                  We treat a Flutter widget tree the same way we treat a 3D
                  print: model it carefully, iterate fast, ship the part that
                  actually works. From award-winning thesis systems to
                  production apps shipped for delivery, grocery, and brokerage
                  businesses — the through-line is craft that holds up in the
                  real world.
                </p>
                <p className="mt-4 text-lg leading-relaxed opacity-85">
                  Today the studio takes on web &amp; mobile builds, brand and
                  3D design, physical prototyping, and the IT services to keep
                  it all running — for clients who want one accountable maker,
                  not a handoff chain.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/#contact"
                    className="font-display border-4 border-ink bg-acid px-6 py-3 text-base uppercase shadow-brut transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                  >
                    Start a project →
                  </a>
                  <a
                    href="/#work"
                    className="font-display border-4 border-ink bg-paper px-6 py-3 text-base uppercase transition-colors hover:bg-pop hover:text-white"
                  >
                    See our work
                  </a>
                </div>
              </div>

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
                    <p className="mt-2 text-xs font-bold uppercase tracking-widest text-acid">
                      Founder · Developer · Designer · Maker
                    </p>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-wide opacity-75">
                      {PROFILE.location}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Experience timeline — reuses home component */}
        <Experience />

        {/* Accolades */}
        <section className="border-b-4 border-ink bg-ink text-white">
          <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
            <SectionHeading
              index="02"
              eyebrow="Recognition"
              title="Accolades."
              invert
            />
            <div className="grid gap-7 md:grid-cols-3">
              {AWARDS.map((a, i) => (
                <Reveal key={a.title} delay={i * 0.08}>
                  <div
                    className={`border-4 p-7 ${
                      i === 0
                        ? "border-ink bg-pop text-white shadow-[10px_10px_0_0_#ffffff]"
                        : i === 1
                          ? "border-ink bg-paper text-ink shadow-[10px_10px_0_0_#ff5722]"
                          : "border-ink bg-acid text-ink shadow-[10px_10px_0_0_#ffffff]"
                    }`}
                  >
                    <p className="text-[11px] font-bold uppercase tracking-widest opacity-80">
                      Award 0{i + 1}
                    </p>
                    <h3 className="font-display mt-3 text-2xl uppercase leading-tight">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed">{a.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
