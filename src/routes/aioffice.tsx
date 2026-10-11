import { createFileRoute } from "@tanstack/react-router";
import {
  ClosingCta,
  Container,
  PageShell,
  Section,
  SectionHeader,
  Shot,
  btnPrimary,
  btnSecondary,
  label,
} from "@/components/portfolio/Page";
import { OfficeDemo } from "@/components/portfolio/OfficeDemo";

const OFFICE_PREVIEW_URL = "https://aiteampreview.lexserver.org/";

const OFFICE_SHOTS = [
  {
    src: "/products/aioffice-office.webp",
    alt: "The AI Office: a 3D office where AI teammates sit at their desks, with a chat panel on the right",
    caption: "The office",
  },
  {
    src: "/products/aioffice-board.webp",
    alt: "The AI Office task board with queued, in progress, needs you and done columns",
    caption: "Task board",
  },
  {
    src: "/products/aioffice-whole.webp",
    alt: "The whole AI Office property seen from above, with the office, garden and pool",
    caption: "The whole property",
  },
];

const OFFICE_QUESTIONS = [
  "How did organic traffic do last month?",
  "Which pages are close to page one on Google?",
  "Are there new errors on the site since the last deploy?",
];

const FEATURES = [
  {
    tag: "Delegate",
    title: "One assistant, a whole team",
    body: "You talk to Kaia. She breaks the request into tasks and hands each one to the right teammate, each with their own queue.",
  },
  {
    tag: "Watch",
    title: "A 3D office you can see into",
    body: "Teammates work at their desks in an isometric office, with name tags showing role, project, level and what they're doing right now.",
  },
  {
    tag: "Control",
    title: "A task board with a human in the loop",
    body: "Queued, in progress, needs you and done. Agents stop and ask when they're stuck, and you answer from the board.",
  },
  {
    tag: "Anywhere",
    title: "Works from your chat apps",
    body: "Give Kaia work and answer questions from Telegram, Slack or WhatsApp, not only from the office.",
  },
  {
    tag: "Data",
    title: "Answers from real numbers",
    body: "Connects to the Site Insights MCP with a read-only token, so questions about traffic, rankings and errors come back with live data.",
  },
  {
    tag: "Safe",
    title: "Changes go through a pull request",
    body: "Answer tasks only look things up. Change tasks ship as a branch and a pull request, never a push to the main branch.",
  },
  {
    tag: "Fun",
    title: "Teammates with personalities",
    body: "XP and levels for finished work, and teammates who take snack breaks, visit the garden and look after the office pets when they're idle.",
  },
  {
    tag: "Demo",
    title: "Runs without a server",
    body: "Open it with no backend and the office runs on simulated work, which is what the preview on this page is.",
  },
];

const TECH = [
  "Claude",
  "Model Context Protocol",
  "Three.js",
  "cannon-es",
  "Node.js",
  "Telegram / Slack / WhatsApp",
  "Docker",
];

export const Route = createFileRoute("/aioffice")({
  head: () => ({
    meta: [
      { title: "AI Office | Lexserver" },
      {
        name: "description",
        content:
          "AI Office is a 3D virtual office where Claude-powered teammates take requests, work a task board and report back with real data. Our own product, with a live demo.",
      },
    ],
  }),
  component: AiOfficePage,
});

function AiOfficePage() {
  return (
    <PageShell>
      <header className="pb-12 pt-14 md:pb-16 md:pt-20">
        <Container>
          <p className={label}>Our own product · in use</p>
          <h1 className="mt-3 text-[30px] font-medium leading-[1.12] tracking-[-0.02em] md:text-[40px]">
            AI Office
          </h1>
          <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-muted">
            A 3D office where AI agents work as employees. Ask one assistant for something, and it
            splits the work across a team of Claude-powered teammates while you watch them do it at
            their desks.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={OFFICE_PREVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={btnPrimary}
            >
              Open the live demo ↗
            </a>
            <a href="/#contact" className={btnSecondary}>
              Talk to us about it
            </a>
          </div>
          <div className="mt-12">
            <OfficeDemo
              src={OFFICE_PREVIEW_URL}
              poster={OFFICE_SHOTS[0].src}
              posterAlt={OFFICE_SHOTS[0].alt}
            />
          </div>
        </Container>
      </header>

      <Section>
        <SectionHeader
          title="What it does"
          intro="We built it to run our own sites, then kept going."
        />
        <ul className="grid gap-x-12 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <li key={f.title} className="grid gap-1 border-t border-line py-5">
              <p className={label}>{f.tag}</p>
              <h3 className="text-[17px] font-semibold">{f.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{f.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader
          title="How we use it"
          intro="AI Office manages LupaAtBahay for us, through its own Site Insights MCP server."
        />
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="leading-relaxed text-muted">
              Workers get their data tools from the Site Insights MCP, which covers analytics,
              Search Console, keyword research, page speed, error tracking and leads. The office
              connects with a read-only token and offers whatever tools that server lists. Questions
              it handles:
            </p>
            <ul className="mt-4 grid">
              {OFFICE_QUESTIONS.map((q) => (
                <li key={q} className="border-t border-line py-2.5 text-[15px] italic">
                  “{q}”
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="leading-relaxed text-muted">
              See it on a real project in the{" "}
              <a href="/lupaatbahay" className="font-medium text-fg underline underline-offset-4">
                LupaAtBahay case study
              </a>
              .
            </p>
            <p className="mt-4 text-[14px] text-muted">
              The preview on this page is a simulated demo of the office. It doesn't show live
              LupaAtBahay data.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader title="Screens" />
        <div className="grid gap-8 sm:grid-cols-2">
          {OFFICE_SHOTS.slice(1).map((s) => (
            <figure key={s.src}>
              <a href={OFFICE_PREVIEW_URL} target="_blank" rel="noopener noreferrer">
                <Shot src={s.src} alt={s.alt} width={1200} height={675} />
              </a>
              <figcaption className="mt-3 text-[14px] text-muted">
                {s.caption}, simulated demo
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="The stack" />
        <p className="font-mono text-[13px] leading-loose text-muted">{TECH.join(" · ")}</p>
      </Section>

      <ClosingCta
        title="Want an AI team for your own site or business?"
        body="We can set up AI Office around your data and tools, or build something similar to fit how you work."
      />
    </PageShell>
  );
}
