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
            className={`flex h-12 w-12 shrink-0 items-center justify-center border ${
              invert
                ? "border-pop bg-pop text-white"
                : "border-[#1e2d45] bg-[#111827] text-[#e2eaf5]"
            } font-display text-xl`}
          >
            {index}
          </span>
        )}
        {eyebrow && (
          <span className="text-xs font-bold uppercase tracking-widest text-[#7890a8]">
            {eyebrow}
          </span>
        )}
      </div>
      <h2 className="font-display mt-4 text-5xl uppercase leading-[0.95] tracking-tight md:text-7xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#7890a8]">{description}</p>
      )}
    </Reveal>
  );
}
