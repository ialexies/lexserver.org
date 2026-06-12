## Portfolio for Alexies Iglesia — Final Plan

Single-page dark portfolio populated from the resume PDF. No backend, no contact form delivery (mailto link only).

### Design

- Dark theme: near-black bg `oklch(0.14 0.01 260)`, warm amber accent `oklch(0.78 0.16 65)`
- Space Grotesk (headings) + Inter (body) via Google Fonts in `__root.tsx`
- Subtle scroll reveals via `framer-motion`
- Single scrollable page with anchor nav

### Sections

1. **Nav** — sticky, anchor links: Work · Services · Stack · About · Contact
2. **Hero** — "Alexies Iglesia" / "Full-Stack · Mobile · Designer · Maker" / tagline / CTAs (View Work, Get in Touch)
3. **Metrics band** — 15+ Years · 6 Mobile Apps · 9+ Companies · Award-Winning
4. **Services** — 3 cards: Build (web/mobile), Design (graphic/3D), Make (3D printing/prototyping)
5. **Projects** — 4 real apps from resume, each with screenshot from PDF:
   - Biyahero Riding App (Groover, 2019)
   - Cryptonight App
   - Store Inventory
   - Fulfillment Mgmt. App (SARISUKI)
   - Plus 2 text-only cards: Supah Quick Ecommerce (SARISUKI) and MerryNation Inventory (2015 Thesis)
6. **Tech Stack** — chip grid: Flutter, Dart, GraphQL, Bloc, GetX, Laravel, Vue.js, Quasar, Feathers.js, WordPress, PHP, MySQL, JavaScript, HTML/CSS, Git, Photoshop, Illustrator, Blender 3D
7. **Experience** — vertical timeline, top 6 modern roles:
   - MadMonkey Hostels (May 2023 – Present) — Mobile dev, Crashlytics, stakeholder updates
   - SARISUKI (Jan 2022 – May 2023) — 5 apps including Supah Quick + Warehouse
   - Salon D'Art (Oct 2022) — Internal Bidding App, Firebase + Zoho
   - DealFlow Brokerage (Feb–May 2021) — Business Valuation Tool + Chrome scraper
   - Groover Delivery (Oct 2019 – Feb 2020) — Biyahero Riding App
   - Captivate Solutions (Jun 2017 – Sep 2019) — Web team lead, scrum master, Laravel/WordPress
8. **About + Awards** — short bio (Hermosa, Bataan · 15+ years · full-stack + design + 3D printing) alongside 3 highlight awards:
   - Best Thesis 2015 — MerryNation Inventory System
   - 3× Programmer of the Year (2013, 2014, 2015) — Mondriaan Aura College
   - Presidential Award for Excellence in Visual Arts (2015)
9. **Contact** — email (ialexies@gmail.com), LinkedIn (linkedin.com/in/alexies-iglesia), GitHub (github.com/ialexies). Mailto link as primary CTA — no form submission backend.
10. **Footer** — name, location, copyright

### Project Images

Copy 4 screenshots from the parsed PDF into `src/assets/projects/` and import them into the Projects component:
- `img_p1_*.png/jpg` → biyahero.jpg, cryptonight.jpg, inventory.jpg, fulfillment.jpg

(Will inspect images first to match the right file to the right project label.)

### Files

New:
- `src/lib/portfolio-data.ts` — typed arrays for projects, experience, awards, stack, services, metrics
- `src/components/portfolio/Nav.tsx`
- `src/components/portfolio/Hero.tsx`
- `src/components/portfolio/Metrics.tsx`
- `src/components/portfolio/Services.tsx`
- `src/components/portfolio/Projects.tsx`
- `src/components/portfolio/TechStack.tsx`
- `src/components/portfolio/Experience.tsx`
- `src/components/portfolio/About.tsx`
- `src/components/portfolio/Contact.tsx`
- `src/components/portfolio/Footer.tsx`
- `src/components/portfolio/SectionHeading.tsx`
- `src/components/portfolio/Reveal.tsx` (framer-motion wrapper)
- `src/assets/projects/*.jpg` (copied from parsed-documents)

Modified:
- `src/styles.css` — dark theme tokens, font variables
- `src/routes/__root.tsx` — Google Fonts, `dark` class, meta tags (title, description, OG)
- `src/routes/index.tsx` — assemble sections in order

### Dependencies

- `framer-motion` (scroll reveals)

### Out of scope

- Working contact form (mailto only)
- CMS, blog, i18n, light/dark toggle
- Backend / Lovable Cloud
