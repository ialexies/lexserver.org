import { createFileRoute } from "@tanstack/react-router";
import { formatDate, getAllPosts } from "@/lib/blog";
import { Container, PageHeader, PageShell, label } from "@/components/portfolio/Page";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Lexserver" },
      {
        name: "description",
        content:
          "Notes on building websites and apps for businesses in the Philippines: costs, platforms, SEO and how we built our own products.",
      },
    ],
  }),
  component: BlogListPage,
});

function BlogListPage() {
  const posts = getAllPosts();

  return (
    <PageShell>
      <PageHeader
        eyebrow="Blog"
        title="Notes from the studio"
        intro="What we've learned building websites and apps for businesses in the Philippines."
      />
      <section className="border-t border-line pb-20">
        <Container>
          {posts.length === 0 ? (
            <p className="py-10 text-muted">No posts yet.</p>
          ) : (
            <ul className="grid max-w-3xl">
              {posts.map((post) => (
                <li key={post.slug} className="border-b border-line">
                  <a href={`/blog/${post.slug}`} className="group grid gap-1.5 py-7">
                    <p className={label}>
                      {formatDate(post.date)} · {post.category} · {post.readingMinutes} min read
                    </p>
                    <h2 className="text-[20px] font-semibold leading-snug tracking-[-0.01em] group-hover:text-accent">
                      {post.title}
                    </h2>
                    <p className="leading-relaxed text-muted">{post.excerpt}</p>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </PageShell>
  );
}
