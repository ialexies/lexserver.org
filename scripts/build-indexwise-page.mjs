// Generates public/indexwise/index.html. The page is static HTML (not part of the React app), so this
// script keeps the repeated image blocks consistent and guarantees that the FAQPage JSON-LD is built
// from the same questions that are shown on the page.
//   node scripts/build-indexwise-page.mjs
import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const STORE = "https://chromewebstore.google.com/detail/demkfoednfaklniecnobahjiddbhnlpe";
const SITE = "https://lexserver.org";
const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const IMG = {
  issues: [
    880,
    1800,
    "Indexwise side panel showing a score of 51 with an HTTPS error and warnings, each with a plain-language reason and a copy-paste fix",
  ],
  fullcheck: [
    880,
    1800,
    "Full check tab: a score, the three things to fix first, and results for page audit, AI search readiness, structured data and images",
  ],
  preview: [880, 1800, "Preview tab showing how the page appears in Google on desktop and mobile"],
  aibots: [
    880,
    1800,
    "AI and bots tab: an AI readiness score and which search engines and AI crawlers are allowed",
  ],
  render: [
    1120,
    1800,
    "Raw vs rendered tab: a table of title, description, canonical and heading that only exist after JavaScript runs",
  ],
  speed: [
    880,
    1800,
    "Indexwise side panel for lupaatbahay.com scoring 96, with LCP, CLS and INP explained in plain words",
  ],
  search: [
    880,
    1800,
    "Search tab showing clicks, impressions, CTR, average position and quick-win queries (sample data)",
  ],
  schema: [
    880,
    1800,
    "Schema tab with an Article form filled in and the generated JSON-LD ready to copy",
  ],
  tools: [
    880,
    1800,
    "Tools tab: fix-it checklist, keyword check, rewrite prompts, alt text drafts and a readability score",
  ],
  bulk: [880, 1800, "Bulk tab with 90 URLs loaded from a site’s sitemap, ready to audit"],
};
const file = {
  issues: "panel-issues",
  fullcheck: "panel-fullcheck",
  preview: "panel-preview",
  aibots: "panel-ai-bots",
  render: "panel-render",
  speed: "panel-speed",
  search: "panel-search",
  schema: "panel-schema",
  tools: "panel-tools-v2",
  bulk: "panel-bulk",
};
const img = (k, cls = "shot panel", lazy = true) => {
  const [w, h, alt] = IMG[k];
  return `<img class="${cls}" src="/indexwise/img/${file[k]}.webp" width="${w}" height="${h}"${lazy ? ' loading="lazy" decoding="async"' : ""} alt="${esc(alt)}">`;
};
const bullets = (items) => `<ul class="ticks">${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
const block = ({ id, eyebrow, title, body, items, k, flip = false, note }) => `
<section class="two${flip ? " flip" : ""}"${id ? ` id="${id}"` : ""}>
<div>
<p class="eyebrow">${eyebrow}</p>
<h2>${title}</h2>
<p>${body}</p>
${items ? bullets(items) : ""}${note ? `<p class="note">${note}</p>` : ""}
</div>
${img(k)}
</section>`;

const FAQ = [
  [
    "Is Indexwise really free?",
    "Yes. Indexwise is a free Chrome extension. There is no account to create and nothing to pay.",
  ],
  [
    "Does it send my pages or data anywhere?",
    'No. The audit runs in your browser and the results are shown only to you. Indexwise does not track you. The only thing it sends is an anonymous error report when Indexwise itself breaks, with no page addresses in it, and you can turn that off. See the <a href="/indexwise/privacy/">privacy policy</a> for the details.',
  ],
  [
    "Do I have to connect Google Search Console or Google Analytics?",
    "No. Everything except the Search Console and Analytics tabs works without them. If you choose to connect, access is read-only and the data goes straight from Google to your browser.",
  ],
  [
    "Which sites and platforms does it work on?",
    "Any page you can open in Chrome. It recognises WordPress (Yoast and Rank Math), Shopify, Wix, Webflow, Squarespace and Next.js, and gives platform-specific fix steps when it can.",
  ],
  [
    "What does the score mean?",
    "It is a score out of 100 for the page you are viewing, based on the errors, warnings and notes found. Each item explains why it matters and how to fix it. Fixing items and re-analyzing raises the score.",
  ],
  [
    "Can I use it with an AI assistant?",
    "Yes. “Copy as AI prompt” puts the whole audit into one prompt you can paste into your AI assistant. It copies to your clipboard only. Nothing is sent for you.",
  ],
  [
    "Does it work in Edge, Brave or Opera?",
    "Indexwise is built for Chrome, and Chrome is the supported browser. Other Chromium browsers may be able to run it, but that is not guaranteed.",
  ],
];

const faqHtml = FAQ.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join(
  "\n",
);
const strip = (s) => s.replace(/<[^>]+>/g, "");

const ld = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Indexwise",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Chrome",
    description:
      "A free Chrome side panel that audits the page you are viewing, explains what to fix, and shows your Google Search data. No account, no tracking.",
    url: `${SITE}/indexwise/`,
    downloadUrl: STORE,
    image: `${SITE}/indexwise/img/social-og-1200x630.png`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: "Lexserver", url: SITE },
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Indexwise demo: audit a page, fix it, watch the score rise",
    description:
      "A 40-second walkthrough: open any page, see what is wrong and why, copy a fix, highlight the element, copy the audit as an AI prompt, and watch the score go from 53 to 98.",
    thumbnailUrl: `${SITE}/indexwise/video/indexwise-demo-wide-poster.webp`,
    contentUrl: `${SITE}/indexwise/video/indexwise-demo-wide.mp4`,
    uploadDate: "2026-10-11",
    duration: "PT39S",
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Indexwise: on-page SEO audit in your Chrome side panel",
    description:
      "A 35-second video of Indexwise, the free Chrome side panel that audits the page you are viewing and shows what to fix.",
    thumbnailUrl: `${SITE}/indexwise/video/indexwise-demo-wide-poster.webp`,
    embedUrl: "https://www.youtube-nocookie.com/embed/N7BgcLCU7I8",
    contentUrl: "https://www.youtube.com/watch?v=N7BgcLCU7I8",
    uploadDate: "2026-10-10",
    duration: "PT35S",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: strip(a) },
    })),
  },
];

const html = `<!doctype html>
<html lang="en">
<head>
<script src="/theme-init.js"></script>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Indexwise: free on-page SEO checker for Chrome</title>
<meta name="description" content="Indexwise is a free Chrome side panel that audits the page you are viewing, explains what to fix with copy-paste fixes, and shows your Google Search data. No account, no tracking.">
<link rel="canonical" href="${SITE}/indexwise/">
<link rel="icon" href="/indexwise/img/indexwise-icon.svg" type="image/svg+xml">
<meta property="og:title" content="Indexwise: free on-page SEO checker for Chrome">
<meta property="og:description" content="Find what is wrong, get the fix, and copy everything into your AI assistant in one click.">
<meta property="og:image" content="${SITE}/indexwise/img/social-og-1200x630.png">
<meta property="og:url" content="${SITE}/indexwise/">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/indexwise/indexwise.css">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
<header class="site">
<div class="wrap">
<a class="logo" href="/">Lexserver<span>.</span></a>
<ul>
<li><a href="/work">Work</a></li>
<li><a href="/#products">Products</a></li>
<li><a href="/services">Services</a></li>
<li><a href="/about">About</a></li>
<li><a href="/blog">Blog</a></li>
</ul>
<a class="back" href="/#products">All products</a>
</div>
</header>
<main class="wrap">
<div class="product"><img src="/indexwise/img/indexwise-icon.svg" width="28" height="28" alt=""><span>Indexwise</span><span class="sp"></span><a href="#faq">FAQ</a><a href="/indexwise/privacy/">Privacy</a></div>

<div class="hero">
<p class="eyebrow">Free Chrome extension</p>
<h1>See what Google and AI see. Fix it in one click.</h1>
<p class="lead">Indexwise is a free Chrome side panel that audits the page you are viewing, tells you what to fix in plain words, and shows your Google Search data without leaving the page.</p>
<a class="btn" href="${STORE}">Add to Chrome, it's free</a>
<p class="sub">No account. No tracking. Runs in your browser.</p>
</div>

<figure class="demo">
<video id="demo" autoplay muted loop playsinline preload="metadata" width="1280" height="720" poster="/indexwise/video/indexwise-demo-wide-poster.webp" aria-label="Indexwise demo video: audit a page, copy a fix, and watch the score rise from 53 to 98">
<source media="(max-width: 700px)" src="/indexwise/video/indexwise-demo-tall.webm" type="video/webm">
<source media="(max-width: 700px)" src="/indexwise/video/indexwise-demo-tall.mp4" type="video/mp4">
<source src="/indexwise/video/indexwise-demo-wide.webm" type="video/webm">
<source src="/indexwise/video/indexwise-demo-wide.mp4" type="video/mp4">
</video>
<figcaption>A 40-second tour on a demo page: find the problems, copy a fix, highlight the element, copy the audit as an AI prompt, and watch the score rise from 53 to 98. The demo page is fictional. Every number comes from the real extension.</figcaption>
</figure>

<section id="how">
<h2>How it works</h2>
<ol class="steps">
<li><h3>Add and pin</h3><p>Install Indexwise from the Chrome Web Store and pin its icon to your toolbar.</p></li>
<li><h3>Open any page</h3><p>Click the icon. The side panel opens beside the page and audits it in a moment.</p></li>
<li><h3>Fix what it lists</h3><p>Copy a fix, highlight the element on the page, or copy the whole audit as one AI prompt.</p></li>
</ol>
</section>
${block({ id: "issues", eyebrow: "Issues and fixes", title: "Find what is wrong, and exactly how to fix it", body: "Every page gets a score out of 100. Every problem comes with a reason in plain language and a fix you can copy.", items: ["Errors, warnings, notes and passed checks, most important first", "A copy-paste fix on every issue, with CMS-specific steps for WordPress, Shopify, Wix, Webflow, Squarespace and Next.js", "“Show on page” highlights the exact element", "“Copy as AI prompt” turns the whole audit into one prompt for your assistant"], k: "issues" })}
${block({ eyebrow: "Full check", title: "One click for the whole picture", body: "Run a Full check to review the page, AI search readiness, structured data, images, links and speed together, with the three things to fix first.", items: ["Compare with your last check to see what changed", "Copy the report, export a CSV, or download a printable client report"], k: "fullcheck", flip: true })}
${block({ id: "google-ai", eyebrow: "Google and AI", title: "See what search engines and AI tools see", body: "Preview how the page appears in Google on desktop and mobile, and in a social share card. Then check which crawlers are allowed in.", items: ["Googlebot and Bingbot, plus ChatGPT search, Perplexity and Claude search", "AI training crawlers: GPTBot, ClaudeBot, Google-Extended, Applebot-Extended and CCBot", "An AI readiness score, with robots.txt, llms.txt and structured data checked"], k: "aibots" })}
${block({ eyebrow: "Raw vs rendered", title: "Spot what only exists after JavaScript runs", body: "Search engines read the raw HTML first and may render the page later. Indexwise compares both so you can see what a crawler that does not run JavaScript would miss.", items: ["Title, description, canonical, robots meta and headings side by side", "Differences are highlighted", "An optional logged-out view shows what visitors who are not signed in see"], k: "render", flip: true })}
${block({ eyebrow: "Speed", title: "Speed, explained in plain words", body: "Largest Contentful Paint, Cumulative Layout Shift and Interaction to Next Paint, each with Google’s thresholds and what to do about it.", note: "Measured in your browser during the visit, so it varies with your device and connection. It is a quick check, not Google’s 28-day field data.", k: "speed" })}
${block({ id: "search", eyebrow: "Search Console", title: "Your Google Search data, in the panel", body: "Connect Search Console (optional, read-only) to see how the page performs without switching tabs. Connect Google Analytics too (also optional and read-only) to see sessions, engagement and key events for the same page.", items: ["Clicks, impressions, CTR and position for 7 days to 12 months, with change arrows", "Quick wins: queries ranking just off page one", "Devices, countries, sitemaps and Google’s index status for the page", "Download the queries as a CSV"], note: "The numbers in this screenshot are sample data for a fictional site.", k: "search", flip: true })}
${block({ id: "tools", eyebrow: "Tools", title: "Tools that finish the job", body: "The fix is not always one line. These tools help you write, check and generate what the audit asks for.", items: ["Schema generator for Article, Product and more, ready to paste", "Title and description rewrite prompts, and image alt text drafts", "Readability score, keyword check and a structured data validator", "Broken link checker and competitor content gap"], k: "schema" })}
${block({ eyebrow: "Bulk and watch", title: "Many pages, many clients", body: "Audit up to 100 pages at once from a sitemap, and keep an eye on the pages that matter.", items: ["Bulk audit from the sitemap, three pages at a time", "Watch pages: re-checked every 6 hours, with an alert when a title, canonical, robots tag, status or indexability changes", "Score history, a Client report with your own branding, and CSV export"], k: "bulk", flip: true })}

<section id="watch">
<h2>Watch it with sound</h2>
<figure class="yt">
<div class="yt-frame" data-video-id="N7BgcLCU7I8" data-title="Indexwise: on-page SEO audit in your Chrome side panel">
<button type="button" class="yt-play" aria-label="Play video: Indexwise, on-page SEO audit in your Chrome side panel">
<img src="/indexwise/video/indexwise-demo-wide-poster.webp" alt="" width="1280" height="720" loading="lazy" decoding="async">
<span class="yt-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z"/></svg></span>
</button>
</div>
<figcaption>35 seconds. Plays from YouTube only after you press play. <a href="https://www.youtube.com/watch?v=N7BgcLCU7I8" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></figcaption>
</figure>
</section>

<section id="real">
<p class="eyebrow">On a real site</p>
<h2>Works on real sites, not just demos</h2>
<div class="stats">
<div><b>96</b><span>score for lupaatbahay.com, a Next.js marketplace</span></div>
<div><b>0</b><span>errors and warnings found on its home page</span></div>
<div><b>11</b><span>AI and search crawlers checked in one view</span></div>
</div>
<p class="note">Measured with Indexwise 0.5.0 in October 2026. Read how that site was built in the <a href="/lupaatbahay">LupaAtBahay case study</a>.</p>
</section>

<section id="who">
<h2>Who it is for</h2>
<div class="grid">
<div class="item"><h3>Site owners</h3><p>Know what to fix first on your own pages, without learning SEO jargon.</p></div>
<div class="item"><h3>Marketers and writers</h3><p>Check titles, descriptions and headings before you publish, and see how a page looks in search.</p></div>
<div class="item"><h3>Developers</h3><p>Catch missing tags, canonicals and structured data, and see what changes after JavaScript.</p></div>
<div class="item"><h3>Agencies and freelancers</h3><p>Audit many pages, track changes, and hand clients a branded report.</p></div>
</div>
</section>

<section id="privacy">
<h2>Private by design</h2>
<p class="lead">Indexwise does not track you. The pages you analyze never leave your browser. Only anonymous error reports are sent, and you can turn them off.</p>
${bullets(["It reads the active page only when you click the icon", "It asks for access to websites only when you allow it", "It stores your watched pages locally, in your browser", "It signs in with Google only if you choose to connect Search Console or Google Analytics, read-only", "It uses no remote code, no ads and no trackers"])}
<p><a href="/indexwise/privacy/">Read the privacy policy</a></p>
</section>

<section id="faq" class="faq">
<h2>Questions</h2>
${faqHtml}
</section>

<section class="cta">
<h2>Fix your next page in minutes</h2>
<p class="lead">Free for Chrome. No account to create.</p>
<a class="btn" href="${STORE}">Add to Chrome, it's free</a>
</section>
</main>
<footer class="site-footer">
<div class="wrap">
<ul>
<li><a href="/indexwise/">Indexwise</a></li>
<li><a href="/indexwise/privacy/">Privacy policy</a></li>
<li><a href="mailto:ialexies@gmail.com">Contact</a></li>
<li><a href="/">Lexserver</a></li>
</ul>
<p>Indexwise is made by Lexserver in Bataan, Philippines. It is not affiliated with Google. Search Console and Google Analytics are trademarks of Google LLC.</p>
</div>
</footer>
<script src="/indexwise/indexwise.js" defer></script>
</body>
</html>
`;

writeFileSync(join(root, "public", "indexwise", "index.html"), html);
console.log(`wrote public/indexwise/index.html (${html.length} bytes)`);
