import { createFileRoute } from "@tanstack/react-router";
import { formatDate, getAllPosts, getPostBySlug } from "@/lib/blog";
import { Container, PageShell, btnPrimary, label, textLink } from "@/components/portfolio/Page";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getPostBySlug(params.slug);
    return {
      meta: post
        ? [
            { title: `${post.title} | Lexserver` },
            { name: "description", content: post.excerpt },
            { property: "og:title", content: post.title },
            { property: "og:description", content: post.excerpt },
            { property: "og:type", content: "article" },
          ]
        : [{ title: "Post not found | Lexserver" }],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <PageShell>
        <Container narrow className="py-24">
          <h1 className="text-[30px] font-medium tracking-[-0.02em]">That post doesn't exist</h1>
          <p className="mt-3 text-muted">It may have been renamed or removed.</p>
          <a href="/blog" className={`${textLink} mt-6 inline-block`}>
            See all posts
          </a>
        </Container>
      </PageShell>
    );
  }

  const more = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <PageShell>
      <article>
        <header className="pb-10 pt-14 md:pt-20">
          <Container narrow>
            <a href="/blog" className="text-[14px] text-muted hover:text-fg">
              ← Blog
            </a>
            <h1 className="mt-6 text-[30px] font-medium leading-[1.15] tracking-[-0.02em] md:text-[38px]">
              {post.title}
            </h1>
            <p className={`${label} mt-4`}>
              {formatDate(post.date, "long")} · {post.category} · {post.readingMinutes} min read
            </p>
          </Container>
        </header>
        {post.image && (
          <Container narrow className="pb-10">
            <img src={post.image} alt="" className="w-full rounded-lg border border-line" />
          </Container>
        )}
        <Container narrow className="pb-16">
          <div className="prose-site" dangerouslySetInnerHTML={{ __html: post.content }} />
        </Container>
      </article>

      <section className="border-t border-line py-14">
        <Container narrow>
          <div className="rounded-xl border border-line bg-surface p-6 md:p-8">
            <h2 className="text-[22px] font-medium tracking-[-0.015em]">Need help with this?</h2>
            <p className="mt-2 text-muted">
              We build and look after websites and apps for businesses across Southeast Asia.
            </p>
            <a href="/#contact" className={`${btnPrimary} mt-5`}>
              Start a project
            </a>
          </div>
          {more.length > 0 && (
            <div className="mt-14">
              <h2 className="text-[18px] font-semibold">More from the blog</h2>
              <ul className="mt-3 grid">
                {more.map((p) => (
                  <li key={p.slug} className="border-t border-line">
                    <a href={`/blog/${p.slug}`} className="block py-3.5 hover:text-accent">
                      {p.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </section>
    </PageShell>
  );
}
