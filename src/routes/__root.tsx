import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext, useRouter, HeadContent } from "@tanstack/react-router";
import { useEffect } from "react";

import { reportLovableError } from "../lib/lovable-error-reporting";
import { Container, PageShell, btnPrimary, textLink } from "../components/portfolio/Page";

function NotFoundComponent() {
  return (
    <PageShell>
      <Container className="py-24 md:py-32">
        <p className="font-mono text-xs text-muted">404</p>
        <h1 className="mt-3 text-[30px] font-medium tracking-[-0.02em] md:text-[40px]">
          That page doesn't exist
        </h1>
        <p className="mt-3 max-w-[50ch] text-lg text-muted">
          It may have moved. These are the places most people are looking for:
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a href="/" className={btnPrimary}>
            Go to the homepage
          </a>
          <a href="/work" className={textLink}>
            Our work
          </a>
          <a href="/blog" className={textLink}>
            Blog
          </a>
        </div>
      </Container>
    </PageShell>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <PageShell>
      <Container className="py-24 md:py-32">
        <h1 className="text-[30px] font-medium tracking-[-0.02em]">This page didn't load</h1>
        <p className="mt-3 text-lg text-muted">
          Something went wrong on our side. Try again, or go back to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className={btnPrimary}
          >
            Try again
          </button>
          <a href="/" className={textLink}>
            Go to the homepage
          </a>
        </div>
      </Container>
    </PageShell>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { title: "Lexserver | Web and mobile apps from Bataan, Philippines" },
      {
        name: "description",
        content:
          "Lexserver is a two-person studio in Bataan, Philippines. We design, build and run websites and mobile apps, and make our own products like LupaAtBahay and Indexwise.",
      },
      { name: "author", content: "Alexies Iglesia" },
      { property: "og:site_name", content: "Lexserver" },
      { property: "og:title", content: "Lexserver" },
      {
        property: "og:description",
        content:
          "Web and mobile apps designed, built and run from Bataan, Philippines. Makers of LupaAtBahay and Indexwise.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

// This is a client-only SPA mounted inside #root, so the app must not render its own
// <html>/<body>: doing so replaced the document element and wiped the theme class.
// HeadContent renders the per-route <title> and <meta> tags, which React hoists into <head>.
function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
