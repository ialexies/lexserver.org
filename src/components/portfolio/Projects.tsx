import { PROJECTS } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const GRID_BG = [
  "bg-ink text-white",
  "bg-pop text-white",
  "bg-paper text-ink",
  "bg-acid text-ink",
];

export function Projects() {
  if (PROJECTS.length === 0) return null;
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="work" className="border-b-4 border-ink">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="02"
          eyebrow="Selected case studies"
          title="Featured Work."
          description="Shipped apps, internal tools, and award-winning systems — a decade of building for startups and brands."
        />

        {/* Featured full-width card */}
        <Reveal>
          <article className="border-4 border-ink bg-paper shadow-[14px_14px_0_0_#0a0a0a]">
            <div
              className="relative border-b-4 border-ink bg-acid"
              style={{ aspectRatio: "16/7" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display select-none text-center text-[8vw] uppercase text-ink/10">
                  {featured.title}
                </span>
              </div>
              <div className="absolute left-4 top-4 border-2 border-ink bg-ink px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-paper">
                Featured · {featured.year}
              </div>
            </div>
            <div className="px-7 py-8 md:px-14 md:py-14">
              <span className="text-xs font-bold uppercase tracking-widest text-pop">
                {featured.client} · {featured.year}
              </span>
              <h3 className="font-display mt-2 text-4xl uppercase leading-tight md:text-[clamp(32px,6vw,64px)]">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed">
                {featured.blurb}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featured.tech.map((t) => (
                  <span
                    key={t}
                    className="border-2 border-ink px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>

        {/* 2-column grid */}
        <div className="mt-7 grid gap-7 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={(i + 1) * 0.06}>
              <article
                className={`flex flex-col border-4 border-ink transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brut ${GRID_BG[i % GRID_BG.length]}`}
              >
                {/* Image placeholder — inherits card background */}
                <div
                  className="border-b-4 border-ink"
                  style={{ aspectRatio: "16/10" }}
                />
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest opacity-80">
                      <span>{p.client}</span>
                      <span>{p.year}</span>
                    </div>
                    <h3 className="font-display mt-4 text-2xl uppercase leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed opacity-90">
                      {p.blurb}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="border-2 border-current px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
