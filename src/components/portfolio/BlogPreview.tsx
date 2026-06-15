import { getAllPosts } from "@/lib/blog";
import { SectionHeading } from "./SectionHeading";
import { Reveal, RevealItem } from "./Reveal";

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="blog" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="08"
            eyebrow="From the blog"
            title="Latest Articles."
            description="Insights on web development, branding, and tech for Southeast Asian businesses."
          />
          <a
            href="/blog"
            className="mb-12 shrink-0 self-start border border-border px-4 py-2 text-[12px] font-bold uppercase tracking-widest text-ink transition-all hover:border-pop hover:text-pop md:self-auto"
          >
            All Posts →
          </a>
        </div>

        <Reveal stagger className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <RevealItem key={post.slug}>
              <a
                href={`/blog/${post.slug}`}
                className="card-shimmer group flex h-full flex-col border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-pop hover:shadow-brut"
              >
                <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
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

                  <h3 className="font-display mt-3 text-xl uppercase leading-tight tracking-tight">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 text-[12px] font-bold uppercase tracking-wide text-pop">
                    Read More →
                  </span>
                </div>
              </a>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
