# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Production build → dist/
npm run preview    # Serve the production build locally
npm run lint       # ESLint (TypeScript + React hooks + Prettier)
npm run format     # Prettier write
```

Docker (maps port 8085 → nginx 80):
```bash
docker compose up --build
```

There are no tests in this project.

## Architecture

This is a **single-page portfolio site** — one scrollable page with anchor-based navigation. No backend, no routing between pages, no form submission backend (contact uses a `mailto:` link only).

### Data flow

All page content lives in [src/lib/portfolio-data.ts](src/lib/portfolio-data.ts) as typed exported constants (`PROFILE`, `METRICS`, `SERVICES`, `PROJECTS`, `TECH`, `EXPERIENCE`, `AWARDS`). Section components import directly from this file — it is the single source of truth for all copy and data. To update any content on the site, edit only this file.

### Component structure

The page is assembled in [src/routes/index.tsx](src/routes/index.tsx) as a linear stack of section components from [src/components/portfolio/](src/components/portfolio/). Each section is a self-contained component that reads from `portfolio-data.ts`.

- `Reveal.tsx` — framer-motion wrapper used by all sections for scroll-triggered fade-in; respects `prefers-reduced-motion`
- `SectionHeading.tsx` — shared heading layout reused across sections
- `Nav.tsx` — sticky anchor nav linking to section IDs

### Styling

Tailwind CSS v4 with a brutalist design language:
- **No border radius** — all radius tokens are set to `0px`
- **Color tokens**: `bg-paper` (white `#ffffff`), `text-ink` (near-black `#0a0a0a`), `bg-pop` (orange `#ff5722`), `bg-acid` (yellow `#ffeb3b`)
- **Custom shadow utilities**: `.shadow-brut` (8px hard offset), `.shadow-brut-lg` (12px), `.shadow-brut-white`
- **Fonts**: `Archivo Black` (`font-display`) for headings, `Hind` (`font-sans`) for body, `JetBrains Mono` for mono — loaded via Google Fonts
- **Marquee animation**: `.marquee-track` class runs a CSS `marquee` keyframe animation used in the TechStack section

Styles and theme tokens are defined in [src/styles.css](src/styles.css). Tailwind classes are the primary styling mechanism; raw CSS is only used for tokens, fonts, and the marquee animation.

### Build & deployment

Vite builds a fully static SPA into `dist/`. The Docker image is a two-stage build: Node 20 builds the app, then nginx:alpine serves `dist/` with `try_files $uri /index.html` to handle client-side routing. No server-side rendering — the TanStack Start/router setup is present in `src/router.tsx` and `src/server.ts` but the actual entrypoint (`src/main.tsx`) bypasses the router and renders `Index` directly as a plain React SPA.
