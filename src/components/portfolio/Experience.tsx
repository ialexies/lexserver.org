import { EXPERIENCE } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="border-b-4 border-ink">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-12">
        <div className="border-b-4 border-ink p-6 md:p-12 lg:col-span-4 lg:border-b-0 lg:border-r-4">
          <div className="lg:sticky lg:top-24">
            <SectionHeading
              index="03"
              eyebrow="Career"
              title="The Timeline."
              description="Roles where we built, led, and shipped — most recent first."
            />
          </div>
        </div>
        <div className="p-6 md:p-12 lg:col-span-8">
          <ol className="space-y-10">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <li className="relative grid grid-cols-1 gap-4 border-l-4 border-ink pl-6 md:grid-cols-[1fr_auto] md:gap-8">
                  <span
                    className={`absolute -left-3 top-1 h-5 w-5 border-2 border-ink ${
                      i === 0 ? "bg-pop" : i % 2 === 0 ? "bg-acid" : "bg-ink"
                    }`}
                  />
                  <div>
                    <h4 className="font-display text-xl uppercase md:text-2xl">
                      {e.company}
                    </h4>
                    <p className="mt-1 text-sm font-bold uppercase tracking-widest text-pop">
                      {e.role}
                    </p>
                    <p className="mt-3 max-w-xl leading-relaxed">{e.body}</p>
                  </div>
                  <span className="self-start whitespace-nowrap border-2 border-ink bg-paper px-3 py-1 text-[11px] font-bold uppercase tracking-widest">
                    {e.period}
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
