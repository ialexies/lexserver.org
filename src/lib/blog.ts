import { marked } from "marked";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
};

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };

  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, "");
    data[key] = value;
  }

  return { data, body: match[2] };
}

const modules = import.meta.glob("../blog/posts/*.md", {
  query: "?raw",
  eager: true,
}) as Record<string, { default: string }>;

export function getAllPosts(): BlogPost[] {
  return Object.entries(modules)
    .map(([path, mod]) => {
      const raw = mod.default;
      const slug = path.split("/").pop()!.replace(".md", "");
      const { data, body } = parseFrontmatter(raw);

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        category: data.category ?? "General",
        excerpt: data.excerpt ?? "",
        content: marked(body) as string,
        image: data.image ?? `https://picsum.photos/seed/${slug}/1200/600`,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
