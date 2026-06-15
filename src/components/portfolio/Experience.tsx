import { ALEXIES_EXPERIENCE, CHARITY_EXPERIENCE } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const DOT_COLORS = ["bg-pop", "bg-[#2a3f5f]", "bg-border"];

type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  body: string;
};

function PersonTimeline({
  name,
  role,
  entries,
}: {
  name: string;
  role: string;
  entries: ExperienceEntry[];
}) {
  return (
    <div className="p-6 md:p-10">
      <div className="mb-8">
        <p className="font-display text-lg uppercase text-ink">{name}</p>
        <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-pop">{role}</p>
      </div>
      <ol className="space-y-10">
        {entries.map((e, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <li className="relative grid grid-cols-1 gap-4 border-l border-border pl-6">
              <span
                className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border border-border ${DOT_COLORS[i % DOT_COLORS.length]}`}
              />
              <div>
                <h4 className="font-display text-lg uppercase md:text-xl">{e.company}</h4>
                <p className="mt-1 text-sm font-bold uppercase tracking-widest text-pop">{e.role}</p>
                <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{e.body}</p>
                <span className="mt-3 inline-block border border-border bg-surface px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                  {e.period}
                </span>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-12">
        <div className="border-b border-border p-6 md:p-12 lg:col-span-4 lg:border-b-0 lg:border-r lg:border-r-border">
          <div className="lg:sticky lg:top-24">
            <SectionHeading
              index="03"
              eyebrow="Career"
              title="The Timeline."
              description="Roles where we built, led, and shipped — most recent first."
            />
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0">
            <PersonTimeline
              name="Alexies Iglesia"
              role="IT Engineer · Software Engineer"
              entries={ALEXIES_EXPERIENCE}
            />
            <PersonTimeline
              name="Charity Dultra"
              role="Graphic Designer · Illustrator"
              entries={CHARITY_EXPERIENCE}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
