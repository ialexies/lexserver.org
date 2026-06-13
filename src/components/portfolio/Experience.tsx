import { EXPERIENCE } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const DOT_COLORS = ["bg-pop", "bg-[#2a3f5f]", "bg-[#1e2d45]"];

export function Experience() {
  return (
    <section id="experience" className="border-b border-[#1e2d45]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-12">
        <div className="border-b border-[#1e2d45] p-6 md:p-12 lg:col-span-4 lg:border-b-0 lg:border-r lg:border-r-[#1e2d45]">
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
                <li className="relative grid grid-cols-1 gap-4 border-l border-[#1e2d45] pl-6 md:grid-cols-[1fr_auto] md:gap-8">
                  <span
                    className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border border-[#1e2d45] ${DOT_COLORS[i % DOT_COLORS.length]}`}
                  />
                  <div>
                    <h4 className="font-display text-xl uppercase md:text-2xl">
                      {e.company}
                    </h4>
                    <p className="mt-1 text-sm font-bold uppercase tracking-widest text-pop">
                      {e.role}
                    </p>
                    <p className="mt-3 max-w-xl leading-relaxed text-[#7890a8]">{e.body}</p>
                  </div>
                  <span className="self-start whitespace-nowrap border border-[#1e2d45] bg-[#111827] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#7890a8]">
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
