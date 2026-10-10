import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

const router = getRouter();
const root = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Pages are pre-rendered at build time (scripts/prerender.mjs), so hydrate when there is markup.
// router.ssr tells the router the markup came from a server render, so it renders the same tree.
// The pre-rendered <title>/<meta> copies are dropped because <HeadContent> renders them again.
if (root.hasChildNodes()) {
  router.ssr = { manifest: undefined };
  router.load().then(() => {
    document.head.querySelectorAll("[data-prerendered]").forEach((el) => el.remove());
    ReactDOM.hydrateRoot(root, app);
  });
} else {
  ReactDOM.createRoot(root).render(app);
}
