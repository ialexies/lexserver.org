import { PROFILE } from "@/lib/portfolio-data";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/indexwise/", label: "Indexwise" },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1168px] flex-col gap-6 px-4 py-10 md:flex-row md:items-start md:justify-between md:px-6">
        <div className="grid gap-1">
          <a href="/" className="text-[15px] font-semibold text-fg">
            Lexserver<span className="text-accent">.</span>
          </a>
          <p className="text-[14px] text-muted">
            © {new Date().getFullYear()} Lexserver · Hermosa, Bataan, Philippines
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-muted">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${PROFILE.email}`} className="transition-colors hover:text-fg">
              Email
            </a>
          </li>
          <li>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-fg"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
