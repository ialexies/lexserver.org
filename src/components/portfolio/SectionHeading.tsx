import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  invert = false,
}: {
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  invert?: boolean;
}) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-center gap-4">
        {index && (
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center border-2 ${
              invert
                ? "border-paper bg-paper text-ink"
                : "border-ink bg-ink text-paper"
            } font-display text-xl`}
          >
            {index}
          </span>
        )}
        {eyebrow && (
          <span className="text-xs font-bold uppercase tracking-widest opacity-60">
            {eyebrow}
          </span>
        )}
      </div>
      <h2 className="font-display mt-4 text-5xl uppercase leading-[0.95] md:text-7xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
