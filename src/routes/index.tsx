import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Section, SectionHeader, textLink } from "@/components/portfolio/Page";
import { Hero } from "@/components/portfolio/Hero";
import { FeaturedCase, WorkRows, VISIBLE_WORK } from "@/components/portfolio/WorkList";
import { WhatWeDo } from "@/components/portfolio/WhatWeDo";
import { Products } from "@/components/portfolio/Products";
import { Process } from "@/components/portfolio/Process";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lexserver | Web and mobile apps from Bataan, Philippines" },
      {
        name: "description",
        content:
          "Lexserver is a two-person studio in Bataan, Philippines. We design, build and run websites and mobile apps, and make our own products like LupaAtBahay and Indexwise.",
      },
    ],
  }),
  component: Index,
});

const HOME_WORK = ["sarisuki-ecommerce", "madmonkey-app"];

function Index() {
  return (
    <PageShell>
      <Hero />
      <Section id="work">
        <SectionHeader
          title="Selected work"
          intro="Apps and platforms we've designed and built, and in some cases still run."
          action={
            <a href="/work" className={textLink}>
              All work
            </a>
          }
        />
        <FeaturedCase />
        <div className="mt-12">
          <WorkRows items={VISIBLE_WORK.filter((p) => HOME_WORK.includes(p.slug))} />
        </div>
      </Section>
      <WhatWeDo />
      <Products />
      <Process />
      <Contact />
    </PageShell>
  );
}
