import { PROCESS } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="border-b border-[#1e2d45] bg-[#070e1b] text-[#e2eaf5]">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
        <SectionHeading
          index="02"
          eyebrow="How we work"
          title="Our Process."
          description="We keep it simple, transparent, and results-focused. Here's what working with us looks like."
          invert
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1}>
              <div className="relative border border-[#1e2d45] bg-[#111827]/60 p-7 transition-all duration-200 hover:border-pop hover:bg-[#111827]">
                <span className="font-display text-5xl text-pop opacity-90">
                  {p.step}
                </span>
                <h3 className="font-display mt-4 text-2xl uppercase leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#7890a8]">
                  {p.body}
                </p>
                {i < PROCESS.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 font-display text-xl text-pop xl:block">
                    →
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
