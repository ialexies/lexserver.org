import { PRICING } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Pricing() {
  return (
    <section id="pricing" className="border-b-4 border-ink bg-paper">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="06"
          eyebrow="Transparent pricing"
          title="What It Costs."
          description="Starting-from rates for every service. Every project gets a custom quote — these give you a clear ballpark before we talk."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {PRICING.map((tier, i) => (
            <Reveal key={tier.service} delay={i * 0.07}>
              <div
                className={`relative flex h-full flex-col border-2 p-7 transition-all duration-200 hover:shadow-md ${
                  tier.highlight
                    ? "border-pop bg-ink text-white"
                    : "border-ink/20 bg-paper text-ink hover:border-pop"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-6 bg-pop px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                    Most Popular
                  </span>
                )}

                {/* Tag */}
                <span
                  className={`inline-block self-start border-2 px-2 py-0.5 font-display text-[11px] uppercase tracking-widest ${
                    tier.highlight
                      ? "border-pop bg-pop text-white"
                      : "border-ink/20 text-ink/60"
                  }`}
                >
                  {tier.tag}
                </span>

                {/* Service name */}
                <h3 className="font-display mt-4 text-xl uppercase leading-tight">
                  {tier.service}
                </h3>

                {/* Price */}
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-4xl tracking-tight">
                    {tier.price}
                  </span>
                  <span
                    className={`text-[13px] font-bold uppercase tracking-wide ${
                      tier.highlight ? "text-white/50" : "text-ink/40"
                    }`}
                  >
                    {tier.unit}
                  </span>
                </div>
                <p
                  className={`mt-1 text-[12px] font-bold uppercase tracking-wide ${
                    tier.highlight ? "text-white/40" : "text-ink/40"
                  }`}
                >
                  {tier.note}
                </p>

                {/* Divider */}
                <div
                  className={`my-5 border-t ${
                    tier.highlight ? "border-white/10" : "border-ink/10"
                  }`}
                />

                {/* Includes */}
                <ul className="flex-1 space-y-2.5">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[14px] leading-snug">
                      <span className="mt-0.5 shrink-0 text-pop">✓</span>
                      <span className={tier.highlight ? "text-white/75" : "text-ink/70"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="/#contact"
                  className={`mt-7 block border-2 py-3 text-center text-[12px] font-bold uppercase tracking-widest transition-all ${
                    tier.highlight
                      ? "border-pop bg-pop text-white hover:bg-transparent hover:text-white"
                      : "border-ink/30 text-ink hover:border-pop hover:text-pop"
                  }`}
                >
                  Get a Quote →
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-[13px] text-ink/40 font-bold uppercase tracking-widest">
            All prices in Philippine Peso (₱) · VAT not included · Custom quotes available for larger projects
          </p>
        </Reveal>
      </div>
    </section>
  );
}
