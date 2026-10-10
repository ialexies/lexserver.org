import { SERVICE_GROUPS } from "@/lib/portfolio-data";
import { Section, SectionHeader, textLink } from "./Page";

export function WhatWeDo() {
  return (
    <Section id="services">
      <SectionHeader
        title="What we do"
        intro="Three things, done by the same two people from start to finish."
        action={
          <a href="/services" className={textLink}>
            Services and prices
          </a>
        }
      />
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {SERVICE_GROUPS.map((g) => (
          <div key={g.slug} className="grid content-start gap-3 border-t border-line pt-5">
            <h3 className="text-[20px] font-semibold tracking-[-0.01em]">{g.title}</h3>
            <p className="leading-relaxed text-muted">{g.summary}</p>
            <p className="font-mono text-xs text-muted">{g.tools.join(" · ")}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 text-[15px] text-muted">
        Websites from ₱15,000. Mobile apps from ₱150,000.{" "}
        <a href="/services" className={textLink}>
          See all prices
        </a>
      </p>
    </Section>
  );
}
