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
import { AutoplayVideo } from "@/components/portfolio/AutoplayVideo";

const LIVE_URL = "https://fitness-app.lexserver.org";

const VIDEO_LD = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Raceverse walkthrough",
  description:
    "A one-minute tour of Raceverse, a fitness community and race platform: activity feed, race registration, organizer tools and admin approval.",
  thumbnailUrl: "https://lexserver.org/products/raceverse-video-poster.webp",
  contentUrl: "https://lexserver.org/products/raceverse-demo.mp4",
  uploadDate: "2026-10-11",
  duration: "PT56S",
};

export const Route = createFileRoute("/raceverse")({
  head: () => ({
    meta: [
      { title: "Raceverse case study | Lexserver" },
      {
        name: "description",
        content:
          "How we built Raceverse, a fitness community and race platform: activity feed and badges, real and virtual races, guided registration with payments, organizer tools and an admin approval flow.",
      },
    ],
  }),
  component: RaceversePage,
});

const JOURNEY = [
  {
    step: "1",
    title: "Log it and share it",
    body: "Athletes log runs, walks and rides with photos. Friends see them in a live feed, with likes, comments and 24-hour stories.",
    src: "/products/raceverse-feed.webp",
    alt: "The Raceverse feed with a stories bar, a featured race and a walking activity card showing distance, time, pace and calories",
  },
  {
    step: "2",
    title: "Earn badges",
    body: "Distance, consistency and social badges show progress as athletes train, so there is always a next milestone.",
    src: "/products/raceverse-badges.webp",
    alt: "The Raceverse badges page with earned badges in color and in-progress badges with progress bars",
  },
  {
    step: "3",
    title: "Find a race",
    body: "In-person and virtual events, filterable by status, type and price. Each race shows distances, tiered pricing and a live countdown.",
    src: "/products/raceverse-races.webp",
    alt: "The Raceverse race schedule with a featured event and a grid of upcoming races with banners, distances and prices",
  },
  {
    step: "4",
    title: "Register and pay",
    body: "A guided flow: choose a distance, accept waivers, add merchandise, pick delivery or pickup, then pay online or upload a transfer receipt. Steps a race doesn't use are skipped.",
    src: "/products/raceverse-register.webp",
    alt: "The Raceverse registration page with a five-step progress bar and distance options showing early bird, regular and late pricing",
  },
  {
    step: "5",
    title: "Results",
    body: "Virtual runners submit their time and everyone sees the leaderboard, with positions, chip time and pace.",
    src: "/products/raceverse-leaderboard.webp",
    alt: "A Raceverse race leaderboard with runner photos, chip times and pace per kilometer",
  },
];

const PHONE = [
  { src: "/products/raceverse-m-feed.webp", alt: "The Raceverse feed on a phone", caption: "Feed" },
  {
    src: "/products/raceverse-m-race.webp",
    alt: "A race detail page on a phone",
    caption: "Race page",
  },
  {
    src: "/products/raceverse-m-register.webp",
    alt: "Race registration on a phone",
    caption: "Registration",
  },
  {
    src: "/products/raceverse-m-leaderboard.webp",
    alt: "A leaderboard on a phone",
    caption: "Leaderboard",
  },
];

const BEHIND = [
  {
    tag: "Organizers",
    title: "Run the event",
    body: "A dashboard for events, participants and pending approvals. Payment proofs from bank or e-wallet transfers are reviewed in one place.",
    src: "/products/raceverse-payments.webp",
    alt: "The Raceverse organizer payment review table with pending manual payments, references and amounts",
  },
  {
    tag: "Admins",
    title: "Keep it trustworthy",
    body: "Events and organizers are approved before anything goes live. Admins can feature races, handle refunds and see an audit log of every action.",
    src: "/products/raceverse-admin-races.webp",
    alt: "The Raceverse admin race management page with status filters, featured events and approval controls",
  },
];

const ATHLETES = [
  "Activity logging with photos, plus stats and streaks",
  "Social feed with likes, comments and stories",
  "Badges with progress tracking",
  "Follow friends, then message them one to one or in groups",
  "Real-time notifications",
  "Real and virtual races with live leaderboards",
];

const ORGANIZERS = [
  "Request organizer status, approved by an admin",
  "Distance categories with early bird, regular and late pricing",
  "Waivers, merchandise sizes, shipping tiers and pickup points",
  "Online payment, or manual payment proofs reviewed by the organizer",
  "Group registration of up to 20 people on one payment",
  "Guests can register without an account",
];

const PLATFORM = [
  "Admin approval of events and organizers before they publish",
  "Audit log for admin actions and refunds",
  "Roles for athletes, organizers and admins",
  "Email notifications and a public contact form",
  "Error tracking and an accessibility test suite",
  "Self-hosted with Docker behind a Cloudflare Tunnel",
];

const TECH = [
  "React 19",
  "TypeScript",
  "Vite",
  "Tailwind",
  "TanStack Query",
  "Node.js",
  "Express",
  "Prisma",
  "PostgreSQL",
  "Redis",
  "Socket.io",
  "Firebase Auth",
  "PayMongo",
  "Resend",
  "Zod",
  "Playwright",
  "Docker",
];

function RaceversePage() {
  return (
    <PageShell>
      <header className="pb-12 pt-14 md:pb-16 md:pt-20">
        <Container>
          <p className={label}>Case study · our own product · live</p>
          <h1 className="mt-3 text-[30px] font-medium leading-[1.12] tracking-[-0.02em] md:text-[40px]">
            Raceverse
          </h1>
          <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-muted">
            A fitness community and race platform for the Philippines. Athletes log their training
            and follow friends, then find and register for races. Organizers run events with payment
            review, and admins approve everything before it goes live.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
              Visit Raceverse ↗
            </a>
            <a href="/#contact" className={btnSecondary}>
              Build something like this
            </a>
          </div>
          <div className="mt-12">
            <Shot
              src="/products/raceverse-home.webp"
              alt="The Raceverse home page: Train. Race. Conquer. over a photo of a city road race"
              width={1440}
              height={820}
              eager
            />
          </div>
        </Container>
      </header>

      <Section id="video">
        <SectionHeader
          title="See it in action"
          intro="A one-minute walkthrough: the athlete feed, finding and registering for a race, and the organizer and admin tools."
        />
        <figure>
          <AutoplayVideo
            src="/products/raceverse-demo.mp4"
            poster="/products/raceverse-video-poster.webp"
            width={1280}
            height={720}
          />
          <figcaption className="mt-3 text-[14px] text-muted">Walkthrough · 1 min</figcaption>
        </figure>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(VIDEO_LD) }}
        />
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className={label}>The brief</p>
            <h2 className="mt-2 text-[24px] font-medium tracking-[-0.015em]">
              One place for the whole race
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Training, community and race registration usually live in separate places, and
              organizers end up matching payments to people by hand. Raceverse puts training,
              community and race entry in one product, with proper tools for the people running the
              events.
            </p>
          </div>
          <div>
            <p className={label}>The outcome</p>
            <h2 className="mt-2 text-[24px] font-medium tracking-[-0.015em]">
              Athletes, organizers and admins
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Three roles share one platform. Athletes train and enter races from their phones.
              Organizers create events and confirm payments without a spreadsheet. Admins review
              events and organizers before they publish, so what people see is trustworthy.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="How it works"
          intro="Five screens from an athlete's point of view, with demo data."
        />
        <ol className="grid gap-12">
          {JOURNEY.map((f) => (
            <li
              key={f.step}
              className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-10"
            >
              <div>
                <p className={label}>Step {f.step}</p>
                <h3 className="mt-1 text-[20px] font-medium tracking-[-0.01em]">{f.title}</h3>
                <p className="mt-2 max-w-[44ch] leading-relaxed text-muted">{f.body}</p>
              </div>
              <Shot src={f.src} alt={f.alt} width={1440} height={900} />
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeader
          title="On a phone"
          intro="Most athletes check in from their phone, so phones come first: a bottom tab bar, a floating log button and forms built for thumbs."
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {PHONE.map((s) => (
            <figure key={s.src}>
              <Shot src={s.src} alt={s.alt} width={540} height={960} />
              <figcaption className="mt-3 text-center text-[14px] text-muted">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Behind the scenes"
          intro="The tools that make it work for the people running races and the platform."
        />
        <div className="grid gap-12 md:grid-cols-2 md:gap-10">
          {BEHIND.map((b) => (
            <figure key={b.title}>
              <Shot src={b.src} alt={b.alt} width={1440} height={900} />
              <figcaption className="mt-4">
                <p className={label}>{b.tag}</p>
                <h3 className="mt-1 text-[20px] font-medium tracking-[-0.01em]">{b.title}</h3>
                <p className="mt-2 max-w-[52ch] leading-relaxed text-muted">{b.body}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="What it covers" intro="Three audiences, one codebase." />
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-3">
          {[
            ["Athletes", ATHLETES],
            ["Organizers", ORGANIZERS],
            ["Platform and admin", PLATFORM],
          ].map(([title, items]) => (
            <div key={title as string}>
              <p className={label}>{title as string}</p>
              <ul className="mt-3 grid">
                {(items as string[]).map((i) => (
                  <li key={i} className="border-t border-line py-3 text-[15px] leading-relaxed">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="The stack" />
        <p className="font-mono text-[13px] leading-loose text-muted">{TECH.join(" · ")}</p>
        <p className="mt-4 max-w-[62ch] text-[14px] text-muted">
          Hosted on our own server behind a Cloudflare Tunnel. Screenshots on this page use demo
          data and sample photos.
        </p>
      </Section>

      <ClosingCta
        title="Need a community, events or registration platform?"
        body="Raceverse shows what we build end to end: the member experience, the organizer tools, payments and the operations behind them. Tell us what you have in mind."
      />
    </PageShell>
  );
}
