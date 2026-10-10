import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { Reveal, RevealItem } from "@/components/portfolio/Reveal";
import { OfficeDemo } from "@/components/portfolio/OfficeDemo";

const LIVE_URL = "https://lupaatbahay.com";
const OFFICE_PREVIEW_URL = "https://aiteampreview.lexserver.org/";

const MCP_POINTS = [
  "Google Analytics, Tag Manager and Search Console",
  "Keyword, rank and competitor research",
  "Page speed and Core Web Vitals, plus on-site page audits",
  "Error tracking with stack traces",
  "Facebook and Instagram insights, with posting that needs your confirmation",
  "Leads and listings as aggregates only, with no inquirer personal data",
];

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

export const Route = createFileRoute("/lupaatbahay")({
  head: () => ({
    meta: [
      { title: "LupaAtBahay — Case Study | Builds Worlds Studio" },
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
    <motion.div
      className="min-h-screen bg-paper text-ink"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <Nav />
      <main>
        <section className="border-b border-border bg-canvas text-ink">
          <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
            <span className="inline-block border border-pop bg-pop px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              / Case Study · Live
            </span>
            <h1 className="font-display mt-6 text-[clamp(40px,10vw,140px)] uppercase leading-[0.84] tracking-tight">
              LupaAt<span className="text-pop">Bahay.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              A free property marketplace for Central Luzon. Verified agents list houses, lots and
              land, buyers browse and inquire, and admins moderate what goes live — built, hosted
              and run end to end by our studio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display border border-pop bg-pop px-6 py-3 text-base uppercase text-white shadow-brut-pop transition-all hover:ring-2 hover:ring-pop/30"
              >
                Visit lupaatbahay.com →
              </a>
              <a
                href="/#contact"
                className="font-display border border-ink/30 px-6 py-3 text-base uppercase text-ink transition-all hover:border-ink/60 hover:bg-ink/5"
              >
                Build something like this
              </a>
            </div>
            <img
              src="/products/lupaatbahay-desktop.webp"
              alt="LupaAtBahay home page on a wide screen"
              width={1280}
              height={800}
              className="mt-12 w-full border border-border bg-surface shadow-brut"
            />
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-20">
            <div>
              <SectionHeading index="01" eyebrow="The brief" title="Leads, not checkout." />
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                Central Luzon buyers had no single, trustworthy place to browse lots and homes, and
                small agents had no affordable way to be seen. The platform's job is simple: get a
                genuine inquiry to the right agent. There is deliberately no payment or escrow flow
                — an inquiry is the product.
              </p>
            </div>
            <div>
              <SectionHeading index="02" eyebrow="The outcome" title="Free for everyone." />
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                Free to browse, free to list, no commission. A mobile-first site and app that agents
                can run from their phones, with moderation and role-based access keeping listings
                trustworthy as the catalogue grows.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
            <SectionHeading
              index="03"
              eyebrow="What we built"
              title="Features that matter."
              description="The parts of a marketplace that clients most often ask us for."
            />
            <Reveal stagger className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {FEATURES.map((f) => (
                <RevealItem key={f.title}>
                  <article className="card-shimmer flex h-full flex-col border border-border bg-surface p-7 transition-all duration-200 hover:-translate-y-1 hover:border-pop hover:shadow-brut">
                    <span className="inline-block self-start border border-pop bg-pop px-2 py-0.5 font-display text-[11px] uppercase tracking-widest text-white">
                      {f.tag}
                    </span>
                    <h3 className="font-display mt-4 text-xl uppercase leading-tight tracking-tight">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                      {f.body}
                    </p>
                  </article>
                </RevealItem>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
            <SectionHeading index="04" eyebrow="On a phone" title="Mobile first." />
            <Reveal stagger className="grid gap-6 sm:grid-cols-3">
              {SCREENS.map((s) => (
                <RevealItem key={s.src}>
                  <figure>
                    <img
                      src={s.src}
                      alt={s.alt}
                      width={540}
                      height={960}
                      loading="lazy"
                      className="mx-auto w-full max-w-[300px] border border-border bg-surface"
                    />
                    <figcaption className="mt-3 text-center text-[12px] font-bold uppercase tracking-widest text-muted-foreground">
                      {s.caption}
                    </figcaption>
                  </figure>
                </RevealItem>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
            <SectionHeading
              index="05"
              eyebrow="For agents"
              title="Run listings from one place."
              description="Agents get a dashboard for their listings, leads and public profile. These screens are from a test agent account."
            />
            <Reveal stagger className="grid gap-6 md:grid-cols-2">
              <RevealItem className="md:col-span-2">
                <figure>
                  <img
                    src="/products/agent-dashboard.webp"
                    alt="LupaAtBahay agent dashboard showing listing counts, leads, inquiries, favorites and top performing listings"
                    width={1400}
                    height={547}
                    loading="lazy"
                    className="w-full border border-border bg-surface shadow-brut"
                  />
                  <figcaption className="mt-3 text-[12px] font-bold uppercase tracking-widest text-muted-foreground">
                    Dashboard · listings, leads and performance at a glance
                  </figcaption>
                </figure>
              </RevealItem>
              <RevealItem>
                <figure>
                  <img
                    src="/products/agent-listings.webp"
                    alt="LupaAtBahay My Listings page with photos, prices, status and quick actions"
                    width={1400}
                    height={460}
                    loading="lazy"
                    className="w-full border border-border bg-surface"
                  />
                  <figcaption className="mt-3 text-[12px] font-bold uppercase tracking-widest text-muted-foreground">
                    My listings · edit prices inline, hide or remove
                  </figcaption>
                </figure>
              </RevealItem>
              <RevealItem>
                <figure>
                  <img
                    src="/products/agent-profile.webp"
                    alt="LupaAtBahay agent profile editor with vanity URL, photo, cover photo and bio"
                    width={800}
                    height={703}
                    loading="lazy"
                    className="w-full border border-border bg-surface"
                  />
                  <figcaption className="mt-3 text-[12px] font-bold uppercase tracking-widest text-muted-foreground">
                    Profile · public page with vanity URL and verified badge
                  </figcaption>
                </figure>
              </RevealItem>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
            <SectionHeading
              index="06"
              eyebrow="How we run it"
              title="Managed with AI."
              description="LupaAtBahay isn't just shipped and forgotten. It has its own MCP server and an AI team that watches and reports on it."
            />
            <div className="mb-10">
              <OfficeDemo
                src={OFFICE_PREVIEW_URL}
                poster={OFFICE_SHOTS[0].src}
                posterAlt={OFFICE_SHOTS[0].alt}
              />
            </div>
            <Reveal stagger className="grid gap-6 md:grid-cols-2">
              <RevealItem>
                <article className="card-shimmer flex h-full flex-col border border-border bg-surface p-7">
                  <span className="inline-block self-start border border-pop bg-pop px-2 py-0.5 font-display text-[11px] uppercase tracking-widest text-white">
                    Dedicated MCP
                  </span>
                  <h3 className="font-display mt-4 text-2xl uppercase leading-tight tracking-tight">
                    Site Insights MCP
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    A purpose-built Model Context Protocol server that gives an AI assistant live
                    marketing, SEO and analytics data for the site. Ask a question in plain language
                    and get an answer from real data.
                  </p>
                  <ul className="mt-5 space-y-2">
                    {MCP_POINTS.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-[14px] leading-snug">
                        <Check size={14} className="mt-0.5 shrink-0 text-pop" />
                        <span className="text-ink/75">{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </RevealItem>
              <RevealItem>
                <article className="card-shimmer flex h-full flex-col border border-border bg-surface p-7">
                  <span className="inline-block self-start border border-pop bg-pop px-2 py-0.5 font-display text-[11px] uppercase tracking-widest text-white">
                    AI Office · Demo
                  </span>
                  <h3 className="font-display mt-4 text-2xl uppercase leading-tight tracking-tight">
                    An AI team on the job
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    We manage the site through AI Office, a 3D virtual office where AI teammates
                    take requests, pick up tasks and report back. It connects to the Site Insights
                    MCP with a read-only token, so answers come from real data.
                  </p>
                  <ul className="mt-5 space-y-2">
                    {OFFICE_QUESTIONS.map((q) => (
                      <li
                        key={q}
                        className="border border-border bg-canvas px-3 py-2 text-[13px] italic text-ink/70"
                      >
                        “{q}”
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-[12px] leading-relaxed text-muted-foreground">
                    The preview is a simulated demo of the office. It doesn't show live LupaAtBahay
                    data.
                  </p>
                  <div className="mt-auto pt-6">
                    <a
                      href={OFFICE_PREVIEW_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border border-pop bg-pop px-4 py-2 text-[12px] font-bold uppercase tracking-widest text-white shadow-brut-pop transition-all hover:ring-2 hover:ring-pop/30"
                    >
                      See the AI Office demo →
                    </a>
                  </div>
                </article>
              </RevealItem>
            </Reveal>
            <Reveal stagger className="mt-10 grid gap-6 sm:grid-cols-2">
              {OFFICE_SHOTS.slice(1).map((s) => (
                <RevealItem key={s.src}>
                  <figure>
                    <a href={OFFICE_PREVIEW_URL} target="_blank" rel="noopener noreferrer">
                      <img
                        src={s.src}
                        alt={s.alt}
                        width={1200}
                        height={675}
                        loading="lazy"
                        className="w-full border border-border bg-surface transition-all hover:border-pop hover:shadow-brut"
                      />
                    </a>
                    <figcaption className="mt-3 text-[12px] font-bold uppercase tracking-widest text-muted-foreground">
                      {s.caption} · simulated demo
                    </figcaption>
                  </figure>
                </RevealItem>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
            <SectionHeading index="07" eyebrow="Under the hood" title="The stack." />
            <ul className="flex flex-wrap gap-2">
              {TECH.map((t) => (
                <li
                  key={t}
                  className="border border-border bg-surface px-3 py-1.5 text-[12px] font-bold uppercase tracking-wide text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-canvas">
          <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
            <h2 className="font-display max-w-3xl text-[clamp(28px,5vw,56px)] uppercase leading-[0.95] tracking-tight">
              Need a marketplace, listing site or lead-gen platform?
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/65">
              Tell us what you're building. We'll scope it, design it, ship it and keep it running.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="font-display border border-pop bg-pop px-6 py-3 text-base uppercase text-white shadow-brut-pop transition-all hover:ring-2 hover:ring-pop/30"
              >
                Start a project →
              </a>
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display border border-ink/30 px-6 py-3 text-base uppercase text-ink transition-all hover:border-ink/60 hover:bg-ink/5"
              >
                Visit the live site
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}
