import { PORTFOLIO, type PortfolioItem } from "@/lib/portfolio-data";
import { Shot, accentLink, label } from "./Page";

const KIND: Record<PortfolioItem["category"], string> = {
  web: "Web app",
  mobile: "Mobile app",
  branding: "Branding",
  design: "Design",
  wordpress: "Website",
};

export const VISIBLE_WORK = PORTFOLIO.filter((p) => !p.hidden);

/** The LupaAtBahay case study, shown as the lead item wherever work is listed. */
export function FeaturedCase() {
  return (
    <article className="grid items-center gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-12">
      <a href="/lupaatbahay" aria-label="LupaAtBahay case study">
        <Shot
          src="/products/agent-dashboard.webp"
          alt="LupaAtBahay agent dashboard with listings, leads and inquiries"
          width={1400}
          height={547}
        />
      </a>
      <div className="grid gap-3">
        <p className={label}>Marketplace · our own product · live</p>
        <h3 className="text-[22px] font-semibold leading-snug tracking-[-0.01em]">LupaAtBahay</h3>
        <p className="leading-relaxed text-muted">
          A free property marketplace for Pampanga, Tarlac, Zambales and Bataan. Buyers message
          verified agents directly, agents run their listings from their phones, and every listing
          is checked before it goes live.
        </p>
        <p className="text-[14px] text-muted">
          <span className="font-medium text-fg">Role</span> design, build, hosting
          <span className="mx-2 text-line">|</span>
          <span className="font-medium text-fg">Stack</span> Next.js, Supabase, Flutter
        </p>
        <a href="/lupaatbahay" className={`${accentLink} mt-1 w-fit`}>
          Read the case study →
        </a>
      </div>
    </article>
  );
}

/** Client projects as a simple list. They get images once we have real screenshots. */
export function WorkRows({ items = VISIBLE_WORK }: { items?: PortfolioItem[] }) {
  return (
    <ul className="grid">
      {items.map((p) => (
        <li
          key={p.slug}
          className="grid gap-2 border-t border-line py-6 md:grid-cols-[220px_minmax(0,1fr)_auto] md:gap-8"
        >
          <div className="grid content-start gap-1">
            <p className={label}>
              {KIND[p.category]}
              {p.period ? ` · ${p.period}` : ""}
            </p>
            <p className="text-[14px] text-muted">
              {p.client}, {p.country}
            </p>
          </div>
          <div className="min-w-0">
            <h3 className="text-[18px] font-semibold leading-snug">{p.title}</h3>
            <p className="mt-1.5 max-w-[62ch] leading-relaxed text-muted">{p.description}</p>
          </div>
          {p.tech && (
            <p className="font-mono text-xs leading-relaxed text-muted md:max-w-[180px] md:text-right">
              {p.tech.join(" · ")}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
