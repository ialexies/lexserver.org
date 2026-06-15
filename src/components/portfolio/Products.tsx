import { PRODUCTS, type Platform } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal, RevealItem } from "./Reveal";
import { Check } from "lucide-react";

const PLATFORM_LABELS: Record<Platform, string> = {
  android: "Android",
  ios: "iOS",
  web: "Web App",
};

export function Products() {
  return (
    <section id="products" className="border-b border-[#1e2d45]">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
        <SectionHeading
          index="04"
          eyebrow="Built in-house"
          title="Our Products."
          description="Beyond client work — software we've designed, built, and shipped ourselves."
        />

        <Reveal stagger className="grid gap-6 md:grid-cols-3">
          {PRODUCTS.map((product) => (
            <RevealItem key={product.slug}>
              <div
                className={`card-shimmer flex h-full flex-col border transition-all duration-200 hover:-translate-y-1 ${
                  product.status === "published"
                    ? "border-pop shadow-brut-pop"
                    : "border-[#1e2d45] bg-[#111827] hover:border-pop hover:shadow-brut"
                }`}
              >
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
                        ? "bg-[#111827] text-[#e2eaf5]"
                        : "bg-pop text-white"
                    }`}
                  >
                    {product.status === "published" ? "Published" : "In Development"}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl uppercase leading-tight tracking-tight">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-[12px] font-bold uppercase tracking-widest text-[#7890a8]">
                    {product.tagline}
                  </p>

                  <p className="mt-4 text-[14px] leading-relaxed text-[#7890a8]">
                    {product.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[13px] leading-snug">
                        <Check size={13} className="mt-0.5 shrink-0 text-pop" />
                        <span className="text-[#e2eaf5]/70">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.platforms.map((p) => (
                      <span
                        key={p}
                        className="border border-[#1e2d45] px-2 py-0.5 text-[11px] font-bold uppercase tracking-widest text-[#7890a8]"
                      >
                        {PLATFORM_LABELS[p]}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {product.url && (
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-pop bg-pop px-4 py-2 text-[12px] font-bold uppercase tracking-widest text-white shadow-brut-pop transition-all hover:ring-2 hover:ring-pop/30"
                      >
                        Visit →
                      </a>
                    )}
                    {product.storeLinks?.android && (
                      <a
                        href={product.storeLinks.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#1e2d45] px-4 py-2 text-[12px] font-bold uppercase tracking-widest text-[#e2eaf5] transition-all hover:border-pop hover:text-pop"
                      >
                        Play Store →
                      </a>
                    )}
                    {product.storeLinks?.github && (
                      <a
                        href={product.storeLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#1e2d45] px-4 py-2 text-[12px] font-bold uppercase tracking-widest text-[#7890a8] transition-all hover:border-pop hover:text-pop"
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
