import { useEffect, useState } from "react";

/**
 * YouTube embed behind a poster. Without `autoplay`, no YouTube code loads until the visitor
 * presses play. With it, the poster is the server-rendered image and the muted player replaces it
 * once the page has loaded, unless the visitor prefers reduced motion.
 */
export function VideoEmbed({
  videoId,
  poster,
  title,
  caption,
  durationLabel,
  autoplay = false,
  eager = false,
}: {
  videoId: string;
  poster: string;
  title: string;
  caption: string;
  durationLabel: string;
  autoplay?: boolean;
  eager?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!autoplay || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = () => {
      setMuted(true);
      setPlaying(true);
    };
    if (document.readyState === "complete") {
      start();
      return;
    }
    window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, [autoplay]);

  return (
    <figure>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-line bg-surface">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1${muted ? "&mute=1" : ""}`}
            title={title}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            onClick={() => {
              setMuted(false);
              setPlaying(true);
            }}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 h-full w-full"
          >
            <img
              src={poster}
              alt=""
              width={1280}
              height={720}
              loading={eager ? "eager" : "lazy"}
              fetchPriority={eager ? "high" : undefined}
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-fg shadow-lg transition-[filter] group-hover:brightness-110">
              <svg
                viewBox="0 0 24 24"
                width="26"
                height="26"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[14px] text-muted">
        <span>
          {caption} · {durationLabel}
        </span>
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-fg underline decoration-line underline-offset-4 hover:decoration-fg"
        >
          Watch on YouTube ↗
        </a>
      </figcaption>
    </figure>
  );
}
