import { useEffect, useRef, useState } from "react";

/**
 * A self-hosted video that starts muted the first time it is mostly in view, so the file is not
 * fetched by visitors who never scroll to it. Browsers block unmuted autoplay, so a "Tap for sound"
 * button unmutes it. Reduced-motion visitors get the poster and controls.
 */
export function AutoplayVideo({
  src,
  poster,
  width,
  height,
}: {
  src: string;
  poster: string;
  width: number;
  height: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [soundOff, setSoundOff] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        video.muted = true;
        setSoundOff(true);
        video.play().catch(() => {});
      },
      { threshold: 0.5 },
    );
    observer.observe(video);
    const onVolume = () => {
      if (!video.muted) setSoundOff(false);
    };
    video.addEventListener("volumechange", onVolume);
    return () => {
      observer.disconnect();
      video.removeEventListener("volumechange", onVolume);
    };
  }, []);

  const unmute = () => {
    const video = ref.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1;
    setSoundOff(false);
  };

  return (
    <div className="relative">
      <video
        ref={ref}
        controls
        muted
        playsInline
        preload="none"
        poster={poster}
        width={width}
        height={height}
        className="aspect-video w-full rounded-lg border border-line bg-surface"
      >
        <source src={src} type="video/mp4" />
      </video>
      {soundOff && (
        <button
          type="button"
          onClick={unmute}
          className="absolute right-3 top-3 inline-flex min-h-11 items-center gap-2 rounded-full bg-black/75 px-4 text-[14px] font-medium text-white shadow-lg transition-colors hover:bg-black"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4Z" />
          </svg>
          Tap for sound
        </button>
      )}
    </div>
  );
}
