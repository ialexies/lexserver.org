import { PROFILE } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="font-display select-none border-b-4 border-ink py-6 text-center text-[clamp(48px,13vw,180px)] uppercase leading-[0.9] tracking-tighter">
          Builds&nbsp;Worlds<span className="text-pop">.</span>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Builds Worlds Studio · Hermosa, Bataan PH
          </p>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
            <a
              href="/about"
              className="underline decoration-acid decoration-4 underline-offset-4"
            >
              About
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-pop decoration-4 underline-offset-4"
            >
              GitHub
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="underline decoration-ink decoration-4 underline-offset-4"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
