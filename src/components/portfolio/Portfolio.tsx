import { useState } from "react";
import { PORTFOLIO, type PortfolioCategory, type PortfolioItem } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const FILTERS: { value: PortfolioCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "branding", label: "Branding" },
  { value: "design", label: "Design" },
  { value: "wordpress", label: "WordPress" },
];

const CATEGORY_COLORS: Record<PortfolioCategory, string> = {
  web: "bg-[#1e2d45] text-[#e2eaf5]",
  mobile: "bg-pop text-white",
  branding: "bg-[#111827] text-[#e2eaf5] border border-[#1e2d45]",
  design: "bg-[#111827] text-[#e2eaf5] border border-[#1e2d45]",
  wordpress: "bg-[#111827] text-[#e2eaf5] border border-[#1e2d45]",
};

function SkeletonImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative h-full w-full">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-[#1a2540]" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}

export function Portfolio() {
  const [active, setActive] = useState<PortfolioCategory | "all">("all");
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);

  const filtered = active === "all" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === active);

  return (
    <section id="work" className="border-b border-[#1e2d45]">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="03"
          eyebrow="Portfolio"
          title="Our Work."
          description="From mobile apps serving thousands of users to brand identities shipped to clients around the world."
        />

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`border px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest transition-all ${
                active === f.value
                  ? "border-pop bg-pop text-white"
                  : "border-[#1e2d45] bg-[#111827] text-[#e2eaf5] hover:border-[#e2eaf5]/30"
              }`}
            >
              {f.label}
              <span className="ml-1.5 opacity-50">
                ({f.value === "all" ? PORTFOLIO.length : PORTFOLIO.filter((p) => p.category === f.value).length})
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 3) * 0.07}>
              <article
                className="card-shimmer group cursor-pointer border border-[#1e2d45] bg-[#111827] transition-all duration-200 hover:-translate-y-1 hover:border-pop hover:shadow-brut"
                onClick={() => setLightbox(item)}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <SkeletonImage src={item.image} alt={item.title} />
                  {item.status === "in-development" && (
                    <span className="absolute left-3 top-3 bg-pop px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                      In Development
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-display truncate text-lg uppercase leading-tight tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-[12px] font-bold uppercase tracking-wide text-[#7890a8]">
                        {item.client} · {item.country}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${CATEGORY_COLORS[item.category]}`}
                    >
                      {item.category}
                    </span>
                  </div>

                  <p className="mt-3 line-clamp-2 text-[13px] leading-relaxed text-[#7890a8]">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {item.tech?.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="border border-[#1e2d45] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#7890a8]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="ml-2 shrink-0 text-[11px] font-bold uppercase tracking-wide text-pop hover:underline"
                      >
                        View Live →
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1120]/92 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-auto bg-[#111827] shadow-brut-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-0 top-0 z-10 border-b border-l border-[#1e2d45] bg-[#111827] px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-[#7890a8] hover:bg-[#1a2540] hover:text-[#e2eaf5]"
            >
              ✕ Close
            </button>

            <div style={{ aspectRatio: "16/9" }}>
              <SkeletonImage src={lightbox.image} alt={lightbox.title} />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-start gap-3">
                <h2 className="font-display text-3xl uppercase leading-tight tracking-tight">
                  {lightbox.title}
                </h2>
                {lightbox.status === "in-development" && (
                  <span className="border border-pop px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-pop">
                    In Development
                  </span>
                )}
              </div>

              <p className="mt-1 text-sm font-bold uppercase tracking-wide text-[#7890a8]">
                {lightbox.client} · {lightbox.country}
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#e2eaf5]/75">
                {lightbox.description}
              </p>

              {lightbox.tech && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {lightbox.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-[#1e2d45] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[#7890a8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {lightbox.url && (
                <a
                  href={lightbox.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block border border-pop bg-pop px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white shadow-brut-pop transition-all hover:ring-2 hover:ring-pop/30"
                >
                  View Live Site →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
