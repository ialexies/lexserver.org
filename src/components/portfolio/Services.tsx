import { SERVICES } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="border-b-4 border-ink bg-paper">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="01"
          eyebrow="What we do"
          title="Our Services."
          description="Six disciplines, one accountable studio. We design, build, and run the digital infrastructure your business needs."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <article className="group flex h-full flex-col border-2 border-ink/20 bg-paper p-7 transition-all duration-200 hover:border-pop hover:shadow-md">
                <span className="inline-block self-start border-2 border-pop bg-pop px-2 py-0.5 font-display text-[11px] uppercase tracking-widest text-white">
                  {s.tag}
                </span>
                <h3 className="font-display mt-4 text-2xl uppercase leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/70">
                  {s.body}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="border border-ink/20 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-ink/60"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
