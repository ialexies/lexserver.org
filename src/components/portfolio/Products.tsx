import { PRODUCTS, type OwnProduct } from "@/lib/portfolio-data";
import { Section, SectionHeader, accentLink } from "./Page";

function primaryLink(p: OwnProduct): { href: string; text: string; external: boolean } | null {
  if (p.url?.startsWith("/indexwise"))
    return { href: p.url, text: "About Indexwise", external: false };
  if (p.url?.startsWith("/")) return { href: p.url, text: "Read the case study", external: false };
  if (p.storeLinks?.chrome)
    return { href: p.storeLinks.chrome, text: "Get it for Chrome", external: true };
  if (p.storeLinks?.website)
    return {
      href: p.storeLinks.website,
      text: p.status === "in-development" ? "Preview the staging site" : "Visit the site",
      external: true,
    };
  return null;
}

function secondaryLink(p: OwnProduct): { href: string; text: string } | null {
  if (p.storeLinks?.website && p.url?.startsWith("/"))
    return { href: p.storeLinks.website, text: p.storeLinks.website.replace(/^https?:\/\//, "") };
  if (p.storeLinks?.chrome && p.url?.startsWith("/"))
    return { href: p.storeLinks.chrome, text: "Chrome Web Store" };
  return null;
}

export function Products() {
  const listed = PRODUCTS.filter((p) => p.status !== "coming-soon");
  const soon = PRODUCTS.filter((p) => p.status === "coming-soon");

  return (
    <Section id="products">
      <SectionHeader
        title="Our own products"
        intro="Software we design, ship and keep running ourselves."
      />
      <ul className="grid">
        {listed.map((p) => {
          const main = primaryLink(p);
          const extra = secondaryLink(p);
          return (
            <li
              key={p.slug}
              className={`grid items-center gap-5 border-t border-line py-6 md:gap-8 ${p.image ? "sm:grid-cols-[200px_minmax(0,1fr)]" : ""}`}
            >
              {p.image && (
                <img
                  src={p.image}
                  alt={`${p.name}: ${p.tagline}`}
                  width={400}
                  height={250}
                  loading="lazy"
                  className="aspect-[8/5] w-full max-w-[320px] rounded-lg border border-line object-cover"
                />
              )}
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-[18px] font-semibold">{p.name}</h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 text-[13px] text-fg">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${p.status === "published" ? "bg-[#2f9e6a]" : "bg-muted"}`}
                      aria-hidden="true"
                    />
                    {p.status === "published" ? "Live" : "In development"}
                  </span>
                </div>
                <p className="mt-1.5 max-w-[62ch] leading-relaxed text-muted">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
                  {main && (
                    <a
                      href={main.href}
                      className={accentLink}
                      {...(main.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {main.text} →
                    </a>
                  )}
                  {extra && (
                    <a
                      href={extra.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted underline-offset-4 hover:text-fg hover:underline"
                    >
                      {extra.text} ↗
                    </a>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {soon.length > 0 && (
        <p className="mt-6 border-t border-line pt-6 text-[15px] text-muted">
          <span className="font-medium text-fg">In the works:</span>{" "}
          {soon.map((p, i) => (
            <span key={p.slug}>
              {p.name}
              {i < soon.length - 2 ? ", " : i === soon.length - 2 ? " and " : "."}
            </span>
          ))}
        </p>
      )}
    </Section>
  );
}
