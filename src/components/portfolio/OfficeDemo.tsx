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
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-line bg-surface sm:aspect-[16/10] lg:aspect-video">
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
          loading="lazy"
        />
      </div>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[14px] text-muted">
        <span>Live, simulated demo</span>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-fg underline decoration-line underline-offset-4 hover:decoration-fg"
        >
          Open full screen ↗
        </a>
      </figcaption>
    </figure>
  );
}
