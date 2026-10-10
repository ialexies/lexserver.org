export function OfficeDemo({
  src,
  poster,
  posterAlt,
}: {
  src: string;
  poster: string;
  posterAlt: string;
}) {
  return (
    <figure>
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-surface sm:aspect-[16/10] lg:aspect-video">
        <img
          src={poster}
          alt={posterAlt}
          width={1200}
          height={675}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <iframe
          src={src}
          title="AI Office simulated demo"
          className="absolute inset-0 h-full w-full"
          sandbox="allow-scripts allow-same-origin"
          referrerPolicy="no-referrer"
          allow="fullscreen"
        />
      </div>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[12px] font-bold uppercase tracking-widest text-muted-foreground">
        <span>Live · simulated demo</span>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline decoration-border decoration-2 underline-offset-4 hover:text-pop"
        >
          Open full screen →
        </a>
      </figcaption>
    </figure>
  );
}
