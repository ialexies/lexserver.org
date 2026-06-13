import { TECH } from "@/lib/portfolio-data";

export function TechStack() {
  const items = [...TECH, ...TECH];
  return (
    <section
      id="stack"
      aria-label="Tech stack"
      className="border-b border-[#1e2d45] bg-[#070e1b] py-6 text-[#e2eaf5]"
    >
      <div className="flex overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center gap-10 whitespace-nowrap px-6 font-display text-2xl uppercase md:text-3xl">
          {items.map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className={i % 5 === 2 ? "text-pop" : "text-[#e2eaf5]/70"}>
                {t}
              </span>
              <span className="text-pop opacity-40">●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
