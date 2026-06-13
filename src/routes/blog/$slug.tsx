import { createFileRoute } from "@tanstack/react-router";
import { getPostBySlug } from "@/lib/blog";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-paper text-ink">
        <Nav />
        <main>
          <div className="mx-auto flex min-h-[60vh] max-w-[1400px] flex-col items-center justify-center px-4 py-20 text-center">
            <h1 className="font-display text-6xl uppercase">Post Not Found</h1>
            <p className="mt-4 text-ink/60">
              This article doesn't exist or may have been moved.
            </p>
            <a
              href="/blog"
              className="mt-8 border-2 border-ink bg-pop px-6 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-brut transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              ← Back to Blog
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        {/* Hero image */}
        <div className="border-b-4 border-ink" style={{ aspectRatio: "21/7", maxHeight: "480px", overflow: "hidden" }}>
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Article */}
        <article className="mx-auto max-w-[720px] px-4 py-16 md:px-8 md:py-20">
          {/* Meta */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <a
              href="/blog"
              className="text-[11px] font-bold uppercase tracking-widest text-ink/40 hover:text-pop"
            >
              ← Blog
            </a>
            <span className="border-2 border-pop bg-pop px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
              {post.category}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wide text-ink/40">
              {new Date(post.date).toLocaleDateString("en-PH", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-[clamp(28px,5vw,52px)] uppercase leading-[0.92] tracking-tight">
            {post.title}
          </h1>

          <div className="my-8 border-t-4 border-ink" />

          {/* Content */}
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="my-12 border-t-4 border-ink" />

          {/* CTA */}
          <div className="border-2 border-ink/20 bg-paper p-6 md:p-8">
            <p className="text-[11px] font-bold uppercase tracking-widest text-ink/40">
              / Work with us
            </p>
            <h2 className="font-display mt-2 text-3xl uppercase leading-tight">
              Ready to build something?
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/65">
              We build websites, mobile apps, brand identities, and IT infrastructure for businesses across Southeast Asia.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="border-2 border-pop bg-pop px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white shadow-brut transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                Start a Project →
              </a>
              <a
                href="/blog"
                className="border-2 border-ink px-5 py-2.5 text-sm font-bold uppercase tracking-widest hover:bg-muted"
              >
                More Articles
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
