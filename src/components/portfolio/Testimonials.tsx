import { TESTIMONIALS } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b-4 border-ink bg-paper">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="05"
          eyebrow="Client feedback"
          title="What Clients Say."
          description="Real words from real people we've built for."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                className={`flex h-full flex-col border-2 p-7 ${
                  i === 1
                    ? "border-pop bg-pop text-white"
                    : "border-ink/20 bg-paper text-ink"
                }`}
              >
                <span
                  className={`font-display text-4xl leading-none ${
                    i === 1 ? "text-white/40" : "text-pop/30"
                  }`}
                >
                  "
                </span>
                <p
                  className={`mt-2 flex-1 text-[15px] leading-relaxed ${
                    i === 1 ? "text-white/90" : "text-ink/75"
                  }`}
                >
                  {t.quote}
                </p>
                <div className="mt-6 border-t border-current/10 pt-5">
                  <p className="font-display text-base uppercase">{t.name}</p>
                  <p
                    className={`mt-0.5 text-[12px] font-bold uppercase tracking-wide ${
                      i === 1 ? "text-white/60" : "text-ink/50"
                    }`}
                  >
                    {t.company}
                  </p>
                  <p
                    className={`text-[11px] uppercase tracking-widest ${
                      i === 1 ? "text-white/40" : "text-ink/40"
                    }`}
                  >
                    {t.location}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
