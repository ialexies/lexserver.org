import { METRICS } from "@/lib/portfolio-data";

const COLORS = [
  "bg-paper text-ink",
  "bg-pop text-white",
  "bg-acid text-ink",
  "bg-paper text-ink",
];

export function Metrics() {
  return (
    <section className="border-b-4 border-ink bg-ink">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-1 p-1 md:grid-cols-4">
        {METRICS.map((m, i) => (
          <div
            key={m.label}
            className={`flex flex-col items-center justify-center px-4 py-10 text-center ${COLORS[i]}`}
          >
            <span className="font-display text-[clamp(40px,5vw,60px)]">{m.value}</span>
            <span className="mt-2 text-[11px] font-bold uppercase tracking-widest">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
