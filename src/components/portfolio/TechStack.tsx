import { TECH } from "@/lib/portfolio-data";

export function TechStack() {
  // Duplicate for seamless marquee loop
  const items = [...TECH, ...TECH];
  return (
    <section
      id="stack"
      aria-label="Tech stack"
      className="border-b-4 border-ink bg-ink py-6 text-paper"
    >
      <div className="flex overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center gap-10 whitespace-nowrap px-6 font-display text-2xl uppercase md:text-3xl">
          {items.map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className={i % 3 === 1 ? "text-pop" : i % 3 === 2 ? "text-acid" : ""}>
                {t}
              </span>
              <span className="text-pop">●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
