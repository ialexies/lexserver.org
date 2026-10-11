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

const LIVE_URL = "https://lupaatbahay.com";

const MCP_POINTS = [
  "Google Analytics, Tag Manager and Search Console",
  "Keyword, rank and competitor research",
  "Page speed and Core Web Vitals, plus on-site page audits",
  "Error tracking with stack traces",
  "Facebook and Instagram insights, with posting that needs your confirmation",
  "Leads and listings as aggregates only, with no inquirer personal data",
];

export const Route = createFileRoute("/lupaatbahay")({
  head: () => ({
    meta: [
      { title: "LupaAtBahay case study | Lexserver" },
      {
        name: "description",
        content:
          "How we built LupaAtBahay, a free multi-agent real estate marketplace for Central Luzon: map search, agent portal, admin moderation, loan calculator and a native app shell.",
      },
    ],
  }),
  component: LupaAtBahayPage,
});

const FEATURES = [
  {
    tag: "Buyers",
    title: "Search that fits how people look",
    body: "Filter by city, province, property type and price, or explore on a map and search the area you're viewing.",
  },
  {
    tag: "Agents",
    title: "Agent & owner portal",
    body: "Agents and owners manage listings, an inquiries inbox and a public profile, all from their phone.",
  },
  {
    tag: "Trust",
    title: "Moderated before it goes live",
    body: "Every listing is reviewed by an admin first. Four roles are enforced at the proxy, the page and the database.",
  },
  {
    tag: "Leads",
    title: "Inquiries are the product",
    body: "Buyers contact an agent without creating an account, and agents are notified instantly on their phone.",
  },
  {
    tag: "Tools",
    title: "Pag-IBIG & bank loan calculator",
    body: "A monthly amortization estimator that updates as you type. Nothing entered is saved or sent anywhere.",
  },
  {
    tag: "Growth",
    title: "Built to be found",
    body: "Buyer guides, sitemaps, structured data and an llms.txt, with search and analytics tooling wired in.",
  },
  {
    tag: "Mobile",
    title: "Native app shell",
    body: "A Flutter app around the live site, with push notifications, geofencing and deep links.",
  },
  {
    tag: "Ops",
    title: "Self-hosted and monitored",
    body: "Runs as a containerised stack behind Cloudflare, with error tracking, backups and a documented deploy.",
  },
];

const TECH = [
  "Next.js 16",
  "Supabase",
  "Postgres + RLS",
  "Tailwind v4",
  "shadcn/ui",
  "TanStack Query",
  "Zod",
  "Leaflet / OSM",
  "Flutter",
  "Vitest",
  "Playwright",
  "Docker",
];

const SCREENS = [
  {
    src: "/products/lupaatbahay-home.webp",
    alt: "LupaAtBahay home screen on a phone with search by city and transaction type",
    caption: "Search",
  },
  {
    src: "/products/lupaatbahay-listing.webp",
    alt: "A LupaAtBahay listing page with a photo gallery, on a phone",
    caption: "Listing",
  },
  {
    src: "/products/lupaatbahay-calculator.webp",
    alt: "The Pag-IBIG and bank housing loan calculator on a phone",
    caption: "Loan calculator",
  },
];

function LupaAtBahayPage() {
  return (
    <PageShell>
      <header className="pb-12 pt-14 md:pb-16 md:pt-20">
        <Container>
          <p className={label}>Case study · our own product · live</p>
          <h1 className="mt-3 text-[30px] font-medium leading-[1.12] tracking-[-0.02em] md:text-[40px]">
            LupaAtBahay
          </h1>
          <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-muted">
            A free property marketplace for Central Luzon. Verified agents list houses, lots and
            land, buyers browse and inquire, and admins check every listing before it goes live. We
            designed it, built it, host it and run it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
              Visit lupaatbahay.com ↗
            </a>
            <a href="/#contact" className={btnSecondary}>
              Build something like this
            </a>
          </div>
          <div className="mt-12">
            <Shot
              src="/products/lupaatbahay-desktop.webp"
              alt="LupaAtBahay home page on a wide screen"
              width={1280}
              height={800}
              eager
            />
          </div>
        </Container>
      </header>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className={label}>The brief</p>
            <h2 className="mt-2 text-[24px] font-medium tracking-[-0.015em]">
              Leads, not checkout
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Central Luzon buyers had no single, trustworthy place to browse lots and homes, and
              small agents had no affordable way to be seen. The platform's job is simple: get a
              genuine inquiry to the right agent. There is deliberately no payment or escrow flow.
              The inquiry is the product.
            </p>
          </div>
          <div>
            <p className={label}>The outcome</p>
            <h2 className="mt-2 text-[24px] font-medium tracking-[-0.015em]">Free for everyone</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Free to browse, free to list, no commission. A mobile-first site and app that agents
              can run from their phones, with moderation and role-based access keeping listings
              trustworthy as the catalogue grows.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="What we built"
          intro="The parts of a marketplace that clients most often ask us for."
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
          title="On a phone"
          intro="Most buyers find LupaAtBahay on mobile, so it was designed for phones first."
        />
        <div className="grid gap-8 sm:grid-cols-3">
          {SCREENS.map((s) => (
            <figure key={s.src}>
              <Shot
                src={s.src}
                alt={s.alt}
                width={540}
                height={960}
                className="mx-auto max-w-[300px]"
              />
              <figcaption className="mt-3 text-center text-[14px] text-muted">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="For agents"
          intro="Agents get a dashboard for their listings, leads and public profile. These screens are from a test agent account."
        />
        <div className="grid gap-8 md:grid-cols-2">
          <figure className="md:col-span-2">
            <Shot
              src="/products/agent-dashboard.webp"
              alt="LupaAtBahay agent dashboard showing listing counts, leads, inquiries, favorites and top performing listings"
              width={1400}
              height={547}
            />
            <figcaption className="mt-3 text-[14px] text-muted">
              Dashboard: listings, leads and performance at a glance
            </figcaption>
          </figure>
          <figure>
            <Shot
              src="/products/agent-listings.webp"
              alt="LupaAtBahay My Listings page with photos, prices, status and quick actions"
              width={1400}
              height={460}
            />
            <figcaption className="mt-3 text-[14px] text-muted">
              My listings: edit prices inline, hide or remove
            </figcaption>
          </figure>
          <figure>
            <Shot
              src="/products/agent-profile.webp"
              alt="LupaAtBahay agent profile editor with vanity URL, photo, cover photo and bio"
              width={800}
              height={703}
            />
            <figcaption className="mt-3 text-[14px] text-muted">
              Profile: public page with a custom URL and verified badge
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="How we run it"
          intro="LupaAtBahay isn't shipped and forgotten. It has its own MCP server and an AI team that watches it and reports back."
        />
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="text-[20px] font-semibold tracking-[-0.01em]">Site Insights MCP</h3>
            <p className="mt-2 leading-relaxed text-muted">
              A purpose-built Model Context Protocol server that gives an AI assistant live
              marketing, SEO and analytics data for the site. Ask a question in plain language and
              get an answer from real data. It covers:
            </p>
            <ul className="mt-4 grid">
              {MCP_POINTS.map((p) => (
                <li key={p} className="border-t border-line py-2.5 text-[15px]">
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-semibold tracking-[-0.01em]">An AI team on the job</h3>
            <p className="mt-2 leading-relaxed text-muted">
              We manage the site through AI Office, a 3D virtual office where AI teammates take
              requests, pick up tasks and report back. It connects to the Site Insights MCP with a
              read-only token, so answers come from real data.
            </p>
            <p className="mt-4">
              <a href="/aioffice" className="font-medium text-fg underline underline-offset-4">
                See AI Office, with a live demo →
              </a>
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader title="The stack" />
        <p className="font-mono text-[13px] leading-loose text-muted">{TECH.join(" · ")}</p>
      </Section>

      <ClosingCta
        title="Need a marketplace, listing site or lead-gen platform?"
        body="Tell us what you're building. We'll scope it, design it, ship it and keep it running."
      />
    </PageShell>
  );
}
