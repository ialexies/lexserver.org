import { PROFILE } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="bg-[#070e1b]">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="font-display select-none border-b border-[#1e2d45] py-6 text-center text-[clamp(36px,8vw,120px)] uppercase leading-[0.9] tracking-tighter text-[#e2eaf5]/10">
          Builds&nbsp;Worlds<span className="text-pop">.</span>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#7890a8] md:text-left">
            © {new Date().getFullYear()} Builds Worlds Studio · Hermosa, Bataan · Philippines
          </p>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
            <a href="/work" className="text-[#7890a8] underline decoration-pop decoration-2 underline-offset-4 hover:text-pop">
              Work
            </a>
            <a href="/about" className="text-[#7890a8] underline decoration-[#1e2d45] decoration-2 underline-offset-4 hover:text-pop">
              About
            </a>
            <a href="/blog" className="text-[#7890a8] underline decoration-[#1e2d45] decoration-2 underline-offset-4 hover:text-pop">
              Blog
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[#7890a8] underline decoration-[#1e2d45] decoration-2 underline-offset-4 hover:text-pop"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-[#7890a8] underline decoration-[#1e2d45] decoration-2 underline-offset-4 hover:text-pop"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
