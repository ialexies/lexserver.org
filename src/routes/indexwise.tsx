import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { Reveal, RevealItem } from "@/components/portfolio/Reveal";
import { PRODUCTS } from "@/lib/portfolio-data";

export const Route = createFileRoute("/indexwise")({
  head: () => ({
    meta: [
      { title: "Indexwise — On-Page SEO Checker for Chrome" },
      {
        name: "description",
        content:
          "Indexwise is a Chrome extension that shows what's wrong with a page's SEO, why it matters, and how to fix it. Runs locally — no account, no tracking.",
      },
    ],
  }),
  component: IndexwisePage,
});

const FEATURES = [
  {
    title: "Score + prioritized issues",
    body: "Errors, warnings, notes and passed checks — each with a plain-language reason and a copy-paste fix.",
  },
  {
    title: "CMS-aware fixes",
    body: "Detects WordPress (Yoast, Rank Math), Shopify, Wix, Webflow, Squarespace, Next.js and more, then gives platform-specific steps.",
  },
  {
    title: "Raw vs rendered HTML",
    body: "See what only exists after JavaScript runs, so you know what crawlers that don't render will miss.",
  },
  {
    title: "Crawler access matrix",
    body: "Googlebot, Bingbot, ChatGPT search, Perplexity, GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot and /llms.txt.",
  },
  {
    title: "Core Web Vitals",
    body: "LCP, CLS and INP explained in plain language, with Google's thresholds beside your numbers.",
  },
  {
    title: "Search Console tab",
    body: "Queries, daily trends, devices, countries, rich results and sitemaps for the site you're viewing.",
  },
];

const CHECKS = [
  "Indexability (meta/header noindex, robots.txt)",
  "Title and meta description, with pixel width",
  "Canonical (missing, relative, conflicting)",
  "Headings and image alt/dimensions",
  "Links, JSON-LD, Open Graph, lang, viewport",
  "HTTPS and mixed content, hreflang codes",
];

function IndexwisePage() {
  const product = PRODUCTS.find((p) => p.slug === "indexwise");
  const storeUrl = product?.storeLinks?.chrome;

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
          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-16 md:grid-cols-[1fr_320px] md:px-8 md:py-20">
            <div>
              <span className="inline-block border border-pop bg-pop px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                / Chrome Extension
              </span>
              <h1 className="font-display mt-6 text-[clamp(44px,11vw,140px)] uppercase leading-[0.84] tracking-tight">
                Index<span className="text-pop">wise.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
                An on-page SEO checker that tells you what's wrong, why it matters, and how to fix
                it. It runs locally in your browser — no account, no tracking.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {storeUrl ? (
                  <a
                    href={storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display border border-pop bg-pop px-6 py-3 text-base uppercase text-white shadow-brut-pop transition-all hover:ring-2 hover:ring-pop/30"
                  >
                    Add to Chrome →
                  </a>
                ) : (
                  <span className="font-display border border-border bg-surface px-6 py-3 text-base uppercase text-muted-foreground">
                    Chrome Web Store · Coming soon
                  </span>
                )}
                <a
                  href="/#contact"
                  className="font-display border border-ink/30 px-6 py-3 text-base uppercase text-ink transition-all hover:border-ink/60 hover:bg-ink/5"
                >
                  Ask about SEO services
                </a>
              </div>
            </div>
            <img
              src="/products/indexwise-panel.webp"
              alt="Indexwise side panel showing a 96 SEO score, issues and Core Web Vitals for a page"
              width={640}
              height={1000}
              className="mx-auto w-full max-w-[320px] border border-border bg-surface shadow-brut"
            />
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
            <SectionHeading
              index="01"
              eyebrow="What it does"
              title="Fix what matters first."
              description="Open any page, click the toolbar icon, and get a prioritized report you can act on right away."
            />
            <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f) => (
                <RevealItem key={f.title}>
                  <article className="card-shimmer flex h-full flex-col border border-border bg-surface p-7 transition-all duration-200 hover:-translate-y-1 hover:border-pop hover:shadow-brut">
                    <h3 className="font-display text-xl uppercase leading-tight tracking-tight">
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
          <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-20">
            <div>
              <SectionHeading index="02" eyebrow="Checks" title="What it looks at." />
              <ul className="space-y-3">
                {CHECKS.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[15px] leading-snug">
                    <Check size={16} className="mt-0.5 shrink-0 text-pop" />
                    <span className="text-ink/80">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading index="03" eyebrow="Privacy" title="Local by design." />
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                Indexwise only asks for the <strong className="text-ink">activeTab</strong>,{" "}
                <strong className="text-ink">scripting</strong> and{" "}
                <strong className="text-ink">sidePanel</strong> permissions. Page data is analysed
                on your device, and there is no account and no tracking. Optional site-wide access
                is requested only if you choose to allow it.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}
