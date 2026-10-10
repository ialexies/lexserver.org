import { PROCESS } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./Page";

export function Process() {
  return (
    <Section id="process">
      <SectionHeader
        title="How we work"
        intro="Four steps, the same for a ₱15,000 site or a full app."
      />
      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((s, i) => (
          <li key={s.title} className="grid content-start gap-2 border-t border-line pt-5">
            <span className="font-mono text-xs text-muted">Step {i + 1}</span>
            <h3 className="text-[18px] font-semibold">{s.title}</h3>
            <p className="leading-relaxed text-muted">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
