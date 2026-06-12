import { PROJECTS } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const TILE_BG = [
  "bg-pop text-white",
  "bg-ink text-white",
  "bg-acid text-ink",
  "bg-paper text-ink",
  "bg-pop text-white",
  "bg-acid text-ink",
];

export function Projects() {
  const [featured, ...rest] = PROJECTS;
  return (
    <section id="work" className="border-b-4 border-ink">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="02"
          eyebrow="Selected case studies"
          title="Featured Work."
          description="Shipped apps, internal tools, and award-winning thesis work — a decade of building."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Featured */}
          <Reveal className="md:col-span-8">
            <article className="group relative h-[420px] overflow-hidden border-4 border-ink bg-acid md:h-[520px]">
              <div className="absolute inset-0 flex items-center justify-center px-8">
                <span className="font-display select-none text-center text-[14vw] uppercase leading-none text-ink/10 md:text-[8vw]">
                  {featured.title}
                </span>
              </div>
              <div className="absolute inset-0 flex translate-y-2 flex-col justify-end bg-pop p-8 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-95 md:p-12">
                <span className="text-xs font-bold uppercase tracking-widest">
                  {featured.client} · {featured.year}
                </span>
                <h3 className="font-display mt-3 text-4xl uppercase leading-tight md:text-6xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-xl text-lg">{featured.blurb}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.tech.map((t) => (
                    <span
                      key={t}
                      className="border-2 border-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute left-4 top-4 border-2 border-ink bg-ink px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-paper">
                Featured · {featured.year}
              </div>
            </article>
          </Reveal>

          {/* Side card */}
          <Reveal className="md:col-span-4" delay={0.08}>
            <ProjectCard p={rest[0]} bg="bg-ink text-white" tall />
          </Reveal>

          {/* Smaller grid */}
          {rest.slice(1).map((p, i) => (
            <Reveal key={p.title} className="md:col-span-4" delay={i * 0.05}>
              <ProjectCard p={p} bg={TILE_BG[(i + 2) % TILE_BG.length]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  p,
  bg,
  tall = false,
}: {
  p: (typeof PROJECTS)[number];
  bg: string;
  tall?: boolean;
}) {
  return (
    <article
      className={`flex h-full ${tall ? "min-h-[520px]" : "min-h-[280px]"} flex-col justify-between border-4 border-ink p-6 transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brut md:p-8 ${bg}`}
    >
      <div>
        <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest opacity-80">
          <span>{p.client}</span>
          <span>{p.year}</span>
        </div>
        <h3 className="font-display mt-4 text-2xl uppercase leading-tight md:text-3xl">
          {p.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed opacity-90">{p.blurb}</p>
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
    </article>
  );
}
