import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

/** Shared layout pieces. Every page is built from these so spacing and type stay identical. */

export const btnPrimary =
  "inline-flex items-center justify-center gap-1.5 rounded-md bg-accent px-[18px] py-2.5 text-[15px] font-medium text-accent-fg transition-[filter] hover:brightness-110";
export const btnSecondary =
  "inline-flex items-center justify-center gap-1.5 rounded-md border border-line px-[18px] py-2.5 text-[15px] font-medium text-fg transition-colors hover:border-fg/40";
export const textLink =
  "font-medium text-fg underline decoration-line decoration-1 underline-offset-4 transition-colors hover:decoration-fg";
export const accentLink = "font-medium text-accent underline-offset-4 hover:underline";
export const label = "font-mono text-xs tracking-[0.02em] text-muted";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function Container({
  children,
  className = "",
  narrow = false,
}: {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full ${narrow ? "max-w-[728px]" : "max-w-[1168px]"} px-4 md:px-6 ${className}`}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
  narrow = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-line py-16 md:py-24 ${className}`}>
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}

export function SectionHeader({
  title,
  intro,
  action,
}: {
  title: string;
  intro?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-2xl">
        <h2 className="text-[26px] font-medium leading-tight tracking-[-0.015em] md:text-[28px]">
          {title}
        </h2>
        {intro && <p className="mt-2 text-base leading-relaxed text-muted">{intro}</p>}
      </div>
      {action}
    </div>
  );
}

/** The top of every page except the homepage. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="pb-12 pt-14 md:pb-16 md:pt-20">
      <Container>
        {eyebrow && <p className={label}>{eyebrow}</p>}
        <h1 className="mt-3 max-w-[20ch] text-[30px] font-medium leading-[1.12] tracking-[-0.02em] md:text-[40px]">
          {title}
        </h1>
        {intro && <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-muted">{intro}</p>}
        {children}
      </Container>
    </header>
  );
}

/** A screenshot in a simple frame. */
export function Shot({
  src,
  alt,
  width,
  height,
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`h-auto w-full rounded-lg border border-line bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.12)] ${className}`}
    />
  );
}

/** Closing call to action used at the bottom of inner pages. */
export function ClosingCta({
  title = "Have a project in mind?",
  body = "Tell us what you're working on. A few lines is enough to start.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-t border-line py-16 md:py-20">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-[24px] font-medium leading-tight tracking-[-0.015em]">{title}</h2>
            <p className="mt-2 text-muted">{body}</p>
          </div>
          <a href="/#contact" className={btnPrimary}>
            Start a project
          </a>
        </div>
      </Container>
    </section>
  );
}
