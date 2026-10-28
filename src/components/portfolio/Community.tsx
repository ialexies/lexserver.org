import { COMMUNITY } from "@/lib/portfolio-data";
import { Section, SectionHeader, accentLink } from "./Page";

export function Community() {
  return (
    <Section id="community">
      <SectionHeader title={COMMUNITY.title} intro={COMMUNITY.intro} />
      <div className="grid items-center gap-5 md:gap-8 sm:grid-cols-[200px_minmax(0,1fr)]">
        <img
          src={COMMUNITY.image}
          alt={`${COMMUNITY.name}: community portal for the Municipality of Hermosa`}
          width={400}
          height={250}
          loading="lazy"
          className="aspect-[8/5] w-full max-w-[320px] rounded-lg border border-line object-cover"
        />
        <div className="min-w-0">
          <h3 className="text-[18px] font-semibold">{COMMUNITY.name}</h3>
          <p className="mt-1.5 max-w-[62ch] leading-relaxed text-muted">{COMMUNITY.description}</p>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
            <a
              href={COMMUNITY.url}
              target="_blank"
              rel="noopener noreferrer"
              className={accentLink}
            >
              Visit BetterHermosa.org →
            </a>
            <a
              href={COMMUNITY.parentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline-offset-4 hover:text-fg hover:underline"
            >
              {COMMUNITY.parentName} ↗
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
