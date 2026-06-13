import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
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
            <p className="mt-4 text-[#7890a8]">
              This article doesn't exist or may have been moved.
            </p>
            <a
              href="/blog"
              className="mt-8 border border-pop bg-pop px-6 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-brut-pop transition-all hover:ring-2 hover:ring-pop/30"
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
    <motion.div
      className="min-h-screen bg-paper text-ink"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <Nav />
      <main>
        {/* Hero image */}
        <div className="border-b border-[#1e2d45]" style={{ aspectRatio: "21/7", maxHeight: "480px", overflow: "hidden" }}>
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
              className="text-[11px] font-bold uppercase tracking-widest text-[#7890a8] hover:text-pop"
            >
              ← Blog
            </a>
            <span className="border border-pop bg-pop px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
              {post.category}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wide text-[#7890a8]">
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

          <hr className="divider-gradient my-8" />

          {/* Content */}
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <hr className="divider-gradient my-12" />

          {/* CTA */}
          <div className="border border-[#1e2d45] bg-[#111827] p-6 md:p-8">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#7890a8]">
              / Work with us
            </p>
            <h2 className="font-display mt-2 text-3xl uppercase leading-tight tracking-tight">
              Ready to build something?
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#7890a8]">
              We build websites, mobile apps, brand identities, and IT infrastructure for businesses across Southeast Asia.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="border border-pop bg-pop px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white shadow-brut-pop transition-all hover:ring-2 hover:ring-pop/30"
              >
                Start a Project →
              </a>
              <a
                href="/blog"
                className="border border-[#1e2d45] px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-[#e2eaf5] transition-all hover:border-pop hover:text-pop"
              >
                More Articles
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </motion.div>
  );
}
