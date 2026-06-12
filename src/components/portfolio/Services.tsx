import { SERVICES } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const CARDS = [
  "bg-paper text-ink",
  "bg-pop text-white",
  "bg-ink text-white",
];

export function Services() {
  return (
    <section id="services" className="border-b-4 border-ink bg-acid">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="01"
          eyebrow="What I do"
          title="Capabilities."
          description="Three disciplines, one workflow — shipping digital products and physical prototypes from the same workbench."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article
                className={`flex h-full flex-col border-4 border-ink p-8 shadow-brut-lg ${CARDS[i % CARDS.length]}`}
              >
                <span className="font-display text-xs uppercase tracking-widest opacity-70">
                  / {s.tag}
                </span>
                <h3 className="font-display mt-3 text-3xl uppercase leading-tight">
                  {s.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed">{s.body}</p>
                <ul className="mt-6 space-y-1 text-sm font-bold uppercase tracking-wide">
                  {s.points.map((p) => (
                    <li key={p}>— {p}</li>
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
