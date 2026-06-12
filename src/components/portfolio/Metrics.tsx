import { METRICS } from "@/lib/portfolio-data";

const COLORS = ["bg-paper", "bg-pop text-white", "bg-acid", "bg-ink text-white"];

export function Metrics() {
  return (
    <section className="border-b-4 border-ink">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
        {METRICS.map((m, i) => (
          <div
            key={m.label}
            className={`flex flex-col items-center justify-center border-ink p-8 text-center ${COLORS[i % COLORS.length]} ${
              i < METRICS.length - 1 ? "border-b-4 md:border-b-0 md:border-r-4" : ""
            } ${i < 2 ? "border-b-4 md:border-b-0" : ""} ${i % 2 === 0 ? "border-r-4 md:border-r-4" : ""}`}
          >
            <span className="font-display text-5xl md:text-6xl">{m.value}</span>
            <span className="mt-2 text-[10px] font-bold uppercase tracking-widest">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
