import { SERVICES } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal, RevealItem } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
        <SectionHeading
          index="01"
          eyebrow="What we do"
          title="Our Services."
          description="Six disciplines, one accountable studio. We design, build, and run the digital infrastructure your business needs."
        />

        <Reveal stagger className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((s) => (
            <RevealItem key={s.title}>
              <article className="card-shimmer group flex h-full flex-col border border-border bg-surface p-7 transition-all duration-200 hover:-translate-y-1 hover:border-pop hover:shadow-brut">
                <span className="inline-block self-start border border-pop bg-pop px-2 py-0.5 font-display text-[11px] uppercase tracking-widest text-white">
                  {s.tag}
                </span>
                <h3 className="font-display mt-4 text-2xl uppercase leading-tight tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="border border-border px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-muted-foreground"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
