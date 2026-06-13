import { PROFILE } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="font-display select-none border-b-4 border-ink py-6 text-center text-[clamp(48px,13vw,180px)] uppercase leading-[0.9] tracking-tighter">
          Builds&nbsp;Worlds<span className="text-pop">.</span>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-ink/60 md:text-left">
            © {new Date().getFullYear()} Builds Worlds Studio · Hermosa, Bataan · Philippines
          </p>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
            <a
              href="/work"
              className="underline decoration-pop decoration-2 underline-offset-4 hover:text-pop"
            >
              Work
            </a>
            <a
              href="/about"
              className="underline decoration-ink decoration-2 underline-offset-4 hover:text-pop"
            >
              About
            </a>
            <a
              href="/blog"
              className="underline decoration-ink decoration-2 underline-offset-4 hover:text-pop"
            >
              Blog
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-ink/30 decoration-2 underline-offset-4 hover:text-pop"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="underline decoration-ink/30 decoration-2 underline-offset-4 hover:text-pop"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
