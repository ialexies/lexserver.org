import { createFileRoute } from "@tanstack/react-router";
import {
  ClosingCta,
  PageHeader,
  PageShell,
  Section,
  SectionHeader,
} from "@/components/portfolio/Page";
import { Process } from "@/components/portfolio/Process";
import { PRICING, SERVICE_GROUPS } from "@/lib/portfolio-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services and prices | Lexserver" },
      {
        name: "description",
        content:
          "Websites from ₱15,000, mobile apps from ₱150,000, plus SEO, hosting and IT support. What Lexserver builds, what's included and what it costs.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Services"
        title="What we build, and what it costs"
        intro="We take a project from first sketch to a running app, and we can look after it once it's live. Every project gets a written quote before we start."
      />

      {SERVICE_GROUPS.map((g) => (
        <section
          key={g.slug}
          id={g.slug}
          className="scroll-mt-20 border-t border-line py-14 md:py-20"
        >
          <div className="mx-auto grid max-w-[1168px] gap-8 px-4 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16 md:px-6">
            <div>
              <h2 className="text-[26px] font-medium tracking-[-0.015em]">{g.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{g.summary}</p>
              <p className="mt-4 font-mono text-xs text-muted">{g.tools.join(" · ")}</p>
            </div>
            <ul className="grid content-start">
              {g.includes.map((item) => (
                <li
                  key={item}
                  className="border-t border-line py-3.5 text-[16px] first:border-t-0 first:pt-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <Section id="prices">
        <SectionHeader
          title="Starting prices"
          intro="Prices in Philippine pesos, VAT not included. Your quote depends on what you need; these are where most projects start."
        />
        <ul className="grid max-w-3xl">
          {PRICING.map((p) => (
            <li
              key={p.service}
              className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-1 border-t border-line py-5"
            >
              <h3 className="text-[17px] font-semibold">{p.service}</h3>
              <p className="text-right text-[17px] tabular-nums">
                {p.unit === "starting from" ? (
                  <>
                    <span className="text-muted">from </span>
                    {p.price}
                  </>
                ) : (
                  <>
                    {p.price}
                    <span className="text-muted"> {p.unit}</span>
                  </>
                )}
              </p>
              <p className="col-span-2 text-[15px] leading-relaxed text-muted">
                {p.includes.join(" · ")} · {p.note}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-[15px] text-muted">
          Not sure what you need? Send us a message and we'll tell you honestly, even if the answer
          is a small fix you can do yourself.
        </p>
      </Section>

      <Process />
      <ClosingCta
        title="Ready for a quote?"
        body="Tell us what you need and roughly what you can spend."
      />
    </PageShell>
  );
}
