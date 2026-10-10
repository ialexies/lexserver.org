import { createFileRoute } from "@tanstack/react-router";
import {
  ClosingCta,
  Container,
  PageHeader,
  PageShell,
  btnPrimary,
  textLink,
} from "@/components/portfolio/Page";
import { Experience } from "@/components/portfolio/Experience";
import { TEAM } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About us | Lexserver" },
      {
        name: "description",
        content:
          "Lexserver is Alexies Iglesia and Charity Dultra, a developer and a designer in Hermosa, Bataan, building web and mobile apps for businesses across Southeast Asia.",
      },
    ],
  }),
  component: AboutPage,
});

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("");
}

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About"
        title="A developer and a designer in Bataan"
        intro="We're Alexies Iglesia and Charity Dultra. Together we take a project from first sketch to a running app, and we keep looking after it."
      />

      <section className="border-t border-line py-14 md:py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-16">
            <div className="grid max-w-[62ch] content-start gap-4 text-[17px] leading-relaxed">
              <p>
                Alexies has spent 15 years building web and mobile apps for startups and agencies,
                from leading a web team and running scrum to shipping Flutter apps used by thousands
                of people a day.
              </p>
              <p className="text-muted">
                Charity is a Cum Laude Fine Arts graduate in graphic design, with close to a decade
                of brand, illustration and marketing work for clients in the US and Asia.
              </p>
              <p className="text-muted">
                Lexserver is what we do together: websites, apps, design and the hosting to keep it
                all running, for clients who want one accountable team instead of a hand-off chain.
                We also build and run our own products, like LupaAtBahay and Indexwise.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-6">
                <a href="/#contact" className={btnPrimary}>
                  Start a project
                </a>
                <a href="/work" className={textLink}>
                  See our work
                </a>
              </div>
            </div>

            <ul className="grid content-start gap-6 sm:grid-cols-2">
              {TEAM.map((m) => (
                <li key={m.name} className="grid gap-3">
                  {/* Swap for a real photo: public/team/<name>.webp, square, under 150 KB */}
                  <div
                    className="flex aspect-square w-full items-center justify-center rounded-lg border border-line bg-accent-soft text-[32px] font-medium text-accent"
                    aria-hidden="true"
                  >
                    {initials(m.name)}
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold">{m.name}</p>
                    <p className="text-[14px] text-muted">{m.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <Experience />
      <ClosingCta />
    </PageShell>
  );
}
