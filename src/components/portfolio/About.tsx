import { AWARDS, PROFILE } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="border-b-4 border-ink bg-paper">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="06"
          eyebrow="About the studio"
          title="Why Builds Worlds."
        />

        <div className="grid gap-12 md:grid-cols-2">
          {/* Story */}
          <Reveal>
            <div>
              <p className="text-xl leading-relaxed text-ink/80">
                Builds Worlds Studio is a web, mobile, and IT services studio
                based in <strong>Bataan, Philippines</strong> — founded by{" "}
                <strong>{PROFILE.name}</strong>, a developer and designer with
                15+ years of experience across startups, agencies, and product
                companies.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink/65">
                We work at the intersection of code, design, and brand — giving
                businesses in Southeast Asia access to production-quality
                digital work without the overhead of a large agency. One
                accountable studio, end-to-end.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink/65">
                From Flutter apps shipped to thousands of users, to WordPress
                sites that rank on the first page of Google, to brand identities
                delivered to clients in Singapore, Australia, and Japan — we
                treat every project as if our own name is on it. Because it is.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/#contact"
                  className="font-display border-4 border-pop bg-pop px-6 py-3 text-base uppercase text-white shadow-brut transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  Start a Project →
                </a>
                <a
                  href="/#work"
                  className="font-display border-4 border-ink bg-paper px-6 py-3 text-base uppercase transition-colors hover:bg-ink hover:text-white"
                >
                  See Our Work
                </a>
              </div>
            </div>
          </Reveal>

          {/* Awards */}
          <Reveal delay={0.1}>
            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-widest text-ink/40">
                / Recognition &amp; Awards
              </p>
              <ul className="space-y-4">
                {AWARDS.map((a, i) => (
                  <li
                    key={a.title}
                    className={`border-2 p-5 ${
                      i === 0
                        ? "border-pop bg-pop text-white shadow-brut"
                        : i === 1
                          ? "border-ink/20 bg-paper shadow-sm"
                          : "border-ink bg-ink text-white shadow-brut-white"
                    }`}
                  >
                    <p className="text-[11px] font-bold uppercase tracking-widest opacity-70">
                      Award 0{i + 1}
                    </p>
                    <h3 className="font-display mt-1 text-xl uppercase leading-tight">
                      {a.title}
                    </h3>
                    <p className="mt-1 text-sm opacity-75">{a.org}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
