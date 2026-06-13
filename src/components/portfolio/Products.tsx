import { PRODUCTS, type Platform } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const PLATFORM_LABELS: Record<Platform, string> = {
  android: "Android",
  ios: "iOS",
  web: "Web App",
};

export function Products() {
  return (
    <section id="products" className="border-b-4 border-ink bg-paper">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="04"
          eyebrow="Built in-house"
          title="Our Products."
          description="Beyond client work — software we've designed, built, and shipped ourselves."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.1}>
              <div
                className={`flex h-full flex-col border-2 transition-all duration-200 ${
                  product.status === "published"
                    ? "border-pop shadow-brut-pop"
                    : "border-ink/20 hover:border-pop hover:shadow-md"
                }`}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span
                    className={`absolute left-3 top-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${
                      product.status === "published"
                        ? "bg-ink text-white"
                        : "bg-pop text-white"
                    }`}
                  >
                    {product.status === "published" ? "Published" : "In Development"}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl uppercase leading-tight">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-[12px] font-bold uppercase tracking-widest text-ink/40">
                    {product.tagline}
                  </p>

                  <p className="mt-4 text-[14px] leading-relaxed text-ink/65">
                    {product.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {product.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-[13px] leading-snug"
                      >
                        <span className="mt-0.5 shrink-0 text-pop">✓</span>
                        <span className="text-ink/70">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Platform badges */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.platforms.map((p) => (
                      <span
                        key={p}
                        className="border border-ink/20 px-2 py-0.5 text-[11px] font-bold uppercase tracking-widest text-ink/50"
                      >
                        {PLATFORM_LABELS[p]}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {product.url && (
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-pop bg-pop px-4 py-2 text-[12px] font-bold uppercase tracking-widest text-white shadow-brut-pop transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                      >
                        Visit →
                      </a>
                    )}
                    {product.storeLinks?.android && (
                      <a
                        href={product.storeLinks.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-ink px-4 py-2 text-[12px] font-bold uppercase tracking-widest text-ink transition-all hover:bg-ink hover:text-white"
                      >
                        Play Store →
                      </a>
                    )}
                    {product.storeLinks?.github && (
                      <a
                        href={product.storeLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-ink/30 px-4 py-2 text-[12px] font-bold uppercase tracking-widest text-ink/60 transition-all hover:border-ink hover:text-ink"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
