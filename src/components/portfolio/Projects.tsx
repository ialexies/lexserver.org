import { PROJECTS } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal, RevealItem } from "./Reveal";

const GRID_BG = [
  "bg-surface text-ink",
  "bg-pop text-white",
  "bg-surface/60 text-ink",
];

export function Projects() {
  if (PROJECTS.length === 0) return null;
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="02"
          eyebrow="Selected case studies"
          title="Featured Work."
          description="Shipped apps, internal tools, and award-winning systems — a decade of building for startups and brands."
        />

        {/* Featured full-width card */}
        <Reveal>
          <article className="card-shimmer overflow-hidden border border-border bg-surface shadow-brut">
            <div
              className="relative border-b border-border bg-canvas"
              style={{ aspectRatio: "16/7" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display select-none text-center text-[8vw] uppercase text-ink/5">
                  {featured.title}
                </span>
              </div>
              <div className="absolute left-4 top-4 border border-border bg-surface px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                Featured · {featured.year}
              </div>
            </div>
            <div className="px-7 py-8 md:px-14 md:py-14">
              <span className="text-xs font-bold uppercase tracking-widest text-pop">
                {featured.client} · {featured.year}
              </span>
              <h3 className="font-display mt-2 text-4xl uppercase leading-tight tracking-tight md:text-[clamp(32px,6vw,64px)]">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {featured.blurb}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featured.tech.map((t) => (
                  <span
                    key={t}
                    className="border border-border px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>

        {/* 2-column grid */}
        <Reveal stagger className="mt-7 grid gap-7 md:grid-cols-2">
          {rest.map((p, i) => (
            <RevealItem key={p.title}>
              <article
                className={`card-shimmer flex flex-col border border-border transition-all duration-200 hover:-translate-y-1 hover:shadow-brut ${GRID_BG[i % GRID_BG.length]}`}
              >
                <div
                  className="border-b border-border/50"
                  style={{ aspectRatio: "16/10" }}
                />
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest opacity-60">
                      <span>{p.client}</span>
                      <span>{p.year}</span>
                    </div>
                    <h3 className="font-display mt-4 text-2xl uppercase leading-tight tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed opacity-70">
                      {p.blurb}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="border border-current/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest opacity-70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
