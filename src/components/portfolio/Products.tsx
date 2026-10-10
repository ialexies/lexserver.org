import { PRODUCTS, type Platform } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal, RevealItem } from "./Reveal";
import { Check } from "lucide-react";

const PLATFORM_LABELS: Record<Platform, string> = {
  android: "Android",
  ios: "iOS",
  web: "Web App",
  extension: "Chrome Extension",
};

export function Products() {
  return (
    <section id="products" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
        <SectionHeading
          index="04"
          eyebrow="Built in-house"
          title="Our Products."
          description="Beyond client work — software we've designed, built, and shipped ourselves."
        />

        <Reveal stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <RevealItem key={product.slug}>
              <div
                className={`card-shimmer flex h-full flex-col border transition-all duration-200 hover:-translate-y-1 ${
                  product.status === "published"
                    ? "border-pop shadow-brut-pop"
                    : "border-border bg-surface hover:border-pop hover:shadow-brut"
                }`}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="flex h-full w-full items-center justify-center bg-canvas"
                    >
                      <span className="font-display px-4 text-center text-3xl uppercase tracking-tight text-pop">
                        {product.name}
                      </span>
                    </div>
                  )}
                  <span
                    className={`absolute left-3 top-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${
                      product.status === "published" ? "bg-surface text-ink" : "bg-pop text-white"
                    }`}
                  >
                    {product.status === "published" ? "Published" : "In Development"}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl uppercase leading-tight tracking-tight">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-[12px] font-bold uppercase tracking-widest text-muted-foreground">
                    {product.tagline}
                  </p>

                  <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[13px] leading-snug">
                        <Check size={13} className="mt-0.5 shrink-0 text-pop" />
                        <span className="text-ink/70">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.platforms.map((p) => (
                      <span
                        key={p}
                        className="border border-border px-2 py-0.5 text-[11px] font-bold uppercase tracking-widest text-muted-foreground"
                      >
                        {PLATFORM_LABELS[p]}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {product.url && (
                      <a
                        href={product.url}
                        {...(product.url.startsWith("/")
                          ? {}
                          : { target: "_blank", rel: "noopener noreferrer" })}
                        className="border border-pop bg-pop px-4 py-2 text-[12px] font-bold uppercase tracking-widest text-white shadow-brut-pop transition-all hover:ring-2 hover:ring-pop/30"
                      >
                        {product.url.startsWith("/") ? "Learn more →" : "Visit →"}
                      </a>
                    )}
                    {product.storeLinks?.website && (
                      <a
                        href={product.storeLinks.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-border px-4 py-2 text-[12px] font-bold uppercase tracking-widest text-ink transition-all hover:border-pop hover:text-pop"
                      >
                        Visit site →
                      </a>
                    )}
                    {product.storeLinks?.chrome && (
                      <a
                        href={product.storeLinks.chrome}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-border px-4 py-2 text-[12px] font-bold uppercase tracking-widest text-ink transition-all hover:border-pop hover:text-pop"
                      >
                        Chrome Web Store →
                      </a>
                    )}
                    {product.storeLinks?.android && (
                      <a
                        href={product.storeLinks.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-border px-4 py-2 text-[12px] font-bold uppercase tracking-widest text-ink transition-all hover:border-pop hover:text-pop"
                      >
                        Play Store →
                      </a>
                    )}
                    {product.storeLinks?.github && (
                      <a
                        href={product.storeLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-border px-4 py-2 text-[12px] font-bold uppercase tracking-widest text-muted-foreground transition-all hover:border-pop hover:text-pop"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
