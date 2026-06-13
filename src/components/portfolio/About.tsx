import { AWARDS, PROFILE } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="border-b border-[#1e2d45]">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="07"
          eyebrow="About the studio"
          title="Why Builds Worlds."
        />

        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-xl leading-relaxed text-[#e2eaf5]/80">
                Builds Worlds Studio is a web, mobile, and IT services studio
                based in <strong className="text-[#e2eaf5]">Bataan, Philippines</strong> — founded by{" "}
                <strong className="text-[#e2eaf5]">{PROFILE.name}</strong>, a developer and designer with
                15+ years of experience across startups, agencies, and product
                companies.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#7890a8]">
                We work at the intersection of code, design, and brand — giving
                businesses in Southeast Asia access to production-quality
                digital work without the overhead of a large agency. One
                accountable studio, end-to-end.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#7890a8]">
                From Flutter apps shipped to thousands of users, to WordPress
                sites that rank on the first page of Google, to brand identities
                delivered to clients in Singapore, Australia, and Japan — we
                treat every project as if our own name is on it. Because it is.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/#contact"
                  className="font-display border border-pop bg-pop px-6 py-3 text-base uppercase text-white shadow-brut-pop transition-all hover:ring-2 hover:ring-pop/30"
                >
                  Start a Project →
                </a>
                <a
                  href="/#work"
                  className="font-display border border-[#1e2d45] bg-[#111827] px-6 py-3 text-base uppercase text-[#e2eaf5] transition-all hover:border-pop hover:text-pop"
                >
                  See Our Work
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-widest text-[#7890a8]">
                / Recognition &amp; Awards
              </p>
              <ul className="space-y-4">
                {AWARDS.map((a, i) => (
                  <li
                    key={a.title}
                    className={`border p-5 transition-all duration-200 hover:-translate-y-0.5 ${
                      i === 0
                        ? "border-pop bg-pop text-white shadow-brut-pop"
                        : i === 1
                          ? "border-[#1e2d45] bg-[#111827] text-[#e2eaf5]"
                          : "border-[#1e2d45] bg-[#0d1a2e] text-[#e2eaf5]"
                    }`}
                  >
                    <p className="text-[11px] font-bold uppercase tracking-widest opacity-60">
                      Award 0{i + 1}
                    </p>
                    <h3 className="font-display mt-1 text-xl uppercase leading-tight tracking-tight">
                      {a.title}
                    </h3>
                    <p className="mt-1 text-sm opacity-70">{a.org}</p>
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
