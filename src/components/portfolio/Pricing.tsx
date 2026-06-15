import { PRICING } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal, RevealItem } from "./Reveal";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
        <SectionHeading
          index="06"
          eyebrow="Transparent pricing"
          title="What It Costs."
          description="Starting-from rates for every service. Every project gets a custom quote — these give you a clear ballpark before we talk."
        />

        <Reveal stagger className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {PRICING.map((tier) => (
            <RevealItem key={tier.service}>
              <div
                className={`card-shimmer relative flex h-full flex-col border p-7 transition-all duration-200 hover:-translate-y-1 ${
                  tier.highlight
                    ? "border-pop bg-pop/10 text-ink shadow-brut-pop"
                    : "border-border bg-surface text-ink hover:border-pop hover:shadow-brut"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-6 bg-pop px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                    Most Popular
                  </span>
                )}

                <span
                  className={`inline-block self-start border px-2 py-0.5 font-display text-[11px] uppercase tracking-widest ${
                    tier.highlight
                      ? "border-pop bg-pop text-white"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {tier.tag}
                </span>

                <h3 className="font-display mt-4 text-xl uppercase leading-tight tracking-tight">
                  {tier.service}
                </h3>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-4xl tracking-tight">
                    {tier.price}
                  </span>
                  <span
                    className={`text-[13px] font-bold uppercase tracking-wide ${
                      tier.highlight ? "text-ink/50" : "text-muted-foreground"
                    }`}
                  >
                    {tier.unit}
                  </span>
                </div>
                <p
                  className={`mt-1 text-[12px] font-bold uppercase tracking-wide ${
                    tier.highlight ? "text-ink/40" : "text-muted-foreground"
                  }`}
                >
                  {tier.note}
                </p>

                <div
                  className={`my-5 border-t ${
                    tier.highlight ? "border-pop/20" : "border-border"
                  }`}
                />

                <ul className="flex-1 space-y-2.5">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[14px] leading-snug">
                      <Check size={14} className="mt-0.5 shrink-0 text-pop" />
                      <span className={tier.highlight ? "text-ink/75" : "text-ink/70"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/#contact"
                  className={`mt-7 block border py-3 text-center text-[12px] font-bold uppercase tracking-widest transition-all ${
                    tier.highlight
                      ? "border-pop bg-pop text-white hover:ring-2 hover:ring-pop/30"
                      : "border-border text-ink hover:border-pop hover:text-pop"
                  }`}
                >
                  Get a Quote →
                </a>
              </div>
            </RevealItem>
          ))}
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-[13px] font-bold uppercase tracking-widest text-muted-foreground">
            All prices in Philippine Peso (₱) · VAT not included · Custom quotes available for larger projects
          </p>
        </Reveal>
      </div>
    </section>
  );
}
