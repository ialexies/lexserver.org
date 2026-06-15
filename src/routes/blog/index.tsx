import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { getAllPosts } from "@/lib/blog";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { Reveal } from "@/components/portfolio/Reveal";

export const Route = createFileRoute("/blog/")({
  component: BlogListPage,
});

function BlogListPage() {
  const posts = getAllPosts();

  return (
    <motion.div
      className="min-h-screen bg-paper text-ink"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <Nav />
      <main>
        {/* Hero */}
        <section className="border-b border-border bg-canvas">
          <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
            <span className="inline-block border border-pop bg-pop px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              / Blog
            </span>
            <h1 className="font-display mt-6 text-[clamp(48px,10vw,120px)] uppercase leading-[0.88] tracking-tight text-ink">
              Articles &amp;
              <br />
              Insights<span className="text-pop">.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-semibold text-ink/60">
              Web development, branding, and IT insights for businesses in Southeast Asia — written from Bataan, Philippines.
            </p>
          </div>
        </section>

        {/* Post grid */}
        <section>
          <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
            {posts.length === 0 ? (
              <p className="text-muted-foreground">No posts yet. Check back soon.</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {posts.map((post, i) => (
                  <Reveal key={post.slug} delay={(i % 3) * 0.07}>
                    <a
                      href={`/blog/${post.slug}`}
                      className="card-shimmer group flex h-full flex-col border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-pop hover:shadow-brut"
                    >
                      <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading={i < 3 ? "eager" : "lazy"}
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-center gap-2">
                          <span className="border border-pop bg-pop px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                            {post.category}
                          </span>
                          <span className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                            {new Date(post.date).toLocaleDateString("en-PH", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <h2 className="font-display mt-3 text-xl uppercase leading-tight tracking-tight">
                          {post.title}
                        </h2>
                        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                          {post.excerpt}
                        </p>
                        <span className="mt-4 text-[12px] font-bold uppercase tracking-wide text-pop">
                          Read More →
                        </span>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}
