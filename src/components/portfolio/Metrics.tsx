import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { METRICS } from "@/lib/portfolio-data";

function parseValue(raw: string): { num: number; suffix: string } {
  const match = raw.match(/^([\d.]+)(.*)$/);
  if (!match) return { num: 0, suffix: raw };
  return { num: parseFloat(match[1]), suffix: match[2] };
}

function AnimatedMetric({ value, label, accent }: { value: string; label: string; accent: boolean }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(reduce ? value : "0");
  const { num, suffix } = parseValue(value);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - t, 3);
          const current = num % 1 === 0
            ? Math.floor(ease * num)
            : Math.round(ease * num * 10) / 10;
          setDisplay(`${current}${suffix}`);
          if (t < 1) requestAnimationFrame(tick);
          else setDisplay(value);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [num, suffix, value, reduce]);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center justify-center px-4 py-10 text-center ${
        accent ? "bg-pop text-white" : "bg-[#111827] text-[#e2eaf5]"
      }`}
    >
      <span className="font-display text-[clamp(40px,5vw,60px)] tracking-tight">{display}</span>
      <span className="mt-2 text-[11px] font-bold uppercase tracking-widest opacity-70">
        {label}
      </span>
    </div>
  );
}

export function Metrics() {
  return (
    <section className="border-b border-[#1e2d45] bg-[#070e1b]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px p-px md:grid-cols-4">
        {METRICS.map((m, i) => (
          <AnimatedMetric key={m.label} value={m.value} label={m.label} accent={i % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
