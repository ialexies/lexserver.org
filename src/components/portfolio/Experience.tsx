import { ALEXIES_EXPERIENCE, AWARDS, CHARITY_EXPERIENCE } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./Page";

type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  body: string;
};

const SHOWN = 4;

function Entry({ e }: { e: ExperienceEntry }) {
  return (
    <li className="grid gap-1 border-t border-line py-5">
      <p className="font-mono text-xs text-muted">{e.period}</p>
      <h4 className="text-[17px] font-semibold">{e.company}</h4>
      <p className="text-[15px] text-fg">{e.role}</p>
      <p className="mt-1 text-[15px] leading-relaxed text-muted">{e.body}</p>
    </li>
  );
}

function PersonTimeline({ name, entries }: { name: string; entries: ExperienceEntry[] }) {
  const rest = entries.slice(SHOWN);
  return (
    <div className="min-w-0">
      <h3 className="text-[20px] font-semibold tracking-[-0.01em]">{name}</h3>
      <ol className="mt-4 grid">
        {entries.slice(0, SHOWN).map((e) => (
          <Entry key={e.company + e.period} e={e} />
        ))}
      </ol>
      {rest.length > 0 && (
        <details className="group border-t border-line">
          <summary className="cursor-pointer py-4 text-[15px] font-medium text-accent">
            <span className="group-open:hidden">Show {rest.length} earlier roles</span>
            <span className="hidden group-open:inline">Hide earlier roles</span>
          </summary>
          <ol className="grid">
            {rest.map((e) => (
              <Entry key={e.company + e.period} e={e} />
            ))}
          </ol>
        </details>
      )}
    </div>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader title="Experience" intro="Where we've worked, most recent first." />
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <PersonTimeline name="Alexies Iglesia" entries={ALEXIES_EXPERIENCE} />
        <PersonTimeline name="Charity Dultra" entries={CHARITY_EXPERIENCE} />
      </div>
      <p className="mt-12 max-w-3xl border-t border-line pt-6 text-[14px] leading-relaxed text-muted">
        <span className="font-medium text-fg">Recognition:</span>{" "}
        {AWARDS.map((a) => `${a.title} (${a.org})`).join("; ")}.
      </p>
    </Section>
  );
}
