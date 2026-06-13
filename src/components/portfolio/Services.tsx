import { SERVICES } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const CARDS = [
  "bg-ink text-white",
  "bg-pop text-white",
  "bg-paper text-ink",
  "bg-paper text-ink",
];

export function Services() {
  return (
    <section id="capabilities" className="border-b-4 border-ink bg-acid">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="01"
          eyebrow="What we do"
          title="Capabilities."
          description="Four disciplines, one workflow — we ship digital products and physical prototypes from the same workbench, then keep them running."
        />

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article
                className={`flex h-full flex-col border-4 border-ink p-8 shadow-brut-lg ${CARDS[i]}`}
              >
                <span
                  className={`font-display text-xs uppercase tracking-widest ${
                    i >= 2 ? "text-pop" : "opacity-70"
                  }`}
                >
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
