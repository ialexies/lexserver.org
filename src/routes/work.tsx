import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ClosingCta, Container, PageHeader, PageShell } from "@/components/portfolio/Page";
import { FeaturedCase, WorkRows, VISIBLE_WORK } from "@/components/portfolio/WorkList";
import type { PortfolioCategory } from "@/lib/portfolio-data";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our work | Lexserver" },
      {
        name: "description",
        content:
          "Web and mobile apps Lexserver has designed and built for SARISUKI, MadMonkey Hostels, DealFlow Brokerage, Groover and our own products.",
      },
    ],
  }),
  component: WorkPage,
});

const FILTERS: { key: "all" | PortfolioCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "mobile", label: "Mobile" },
  { key: "web", label: "Web" },
];

function WorkPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");
  const items = filter === "all" ? VISIBLE_WORK : VISIBLE_WORK.filter((p) => p.category === filter);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Work"
        title="Selected projects"
        intro="Apps and platforms we've built for businesses in the Philippines and beyond, plus the products we run ourselves."
      />
      <section className="border-t border-line py-14 md:py-20">
        <Container>
          <FeaturedCase />
        </Container>
      </section>
      <section className="border-t border-line py-14 md:py-20">
        <Container>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-[24px] font-medium tracking-[-0.015em]">Client work</h2>
            <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  aria-pressed={filter === f.key}
                  onClick={() => setFilter(f.key)}
                  className="rounded-full border border-line px-3.5 py-1 text-[14px] text-muted transition-colors hover:text-fg aria-pressed:border-fg aria-pressed:bg-fg aria-pressed:text-bg"
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <WorkRows items={items} />
        </Container>
      </section>
      <ClosingCta title="Have a project like these?" />
    </PageShell>
  );
}
