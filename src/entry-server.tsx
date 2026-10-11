// Used only at build time by scripts/prerender.mjs: renders one URL to static HTML so search
// engines and link previews get real content. The browser then hydrates it (see main.tsx).
import { renderToString } from "react-dom/server";
import { RouterProvider, createMemoryHistory } from "@tanstack/react-router";
import { getRouter } from "./router";
import { getAllPosts } from "./lib/blog";

export const STATIC_PATHS = [
  "/",
  "/work",
  "/services",
  "/about",
  "/lupaatbahay",
  "/aioffice",
  "/tara-stays",
  "/raceverse",
  "/blog",
  ...getAllPosts().map((p) => `/blog/${p.slug}`),
];

export async function render(url: string) {
  const router = getRouter(createMemoryHistory({ initialEntries: [url] }));
  await router.load();
  const html = renderToString(<RouterProvider router={router} />);
  const meta = router.state.matches.flatMap((m) => m.meta ?? []).filter(Boolean);
  return { html, meta, notFound: router.state.matches.some((m) => m.globalNotFound) };
}
