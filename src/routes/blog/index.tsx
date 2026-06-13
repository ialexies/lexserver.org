import { createFileRoute } from "@tanstack/react-router";
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
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        {/* Hero */}
        <section className="border-b-4 border-ink bg-ink">
          <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
            <span className="inline-block border-2 border-pop bg-pop px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              / Blog
            </span>
            <h1 className="font-display mt-6 text-[clamp(48px,10vw,120px)] uppercase leading-[0.88] tracking-tight text-white">
              Articles &amp;
              <br />
              Insights<span className="text-pop">.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-semibold text-white/60">
              Web development, branding, and IT insights for businesses in Southeast Asia — written from Bataan, Philippines.
            </p>
          </div>
        </section>

        {/* Post grid */}
        <section>
          <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
            {posts.length === 0 ? (
              <p className="text-ink/50">No posts yet. Check back soon.</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {posts.map((post, i) => (
                  <Reveal key={post.slug} delay={(i % 3) * 0.07}>
                    <a
                      href={`/blog/${post.slug}`}
                      className="group flex h-full flex-col border-2 border-ink/20 bg-paper transition-all duration-200 hover:border-pop hover:shadow-md"
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
                          <span className="border-2 border-pop bg-pop px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                            {post.category}
                          </span>
                          <span className="text-[11px] font-bold uppercase tracking-wide text-ink/40">
                            {new Date(post.date).toLocaleDateString("en-PH", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <h2 className="font-display mt-3 text-xl uppercase leading-tight">
                          {post.title}
                        </h2>
                        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink/60">
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
    </div>
  );
}
