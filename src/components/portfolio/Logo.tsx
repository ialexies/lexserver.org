// Source artwork and usage rules: brand/README.md
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="29 29 198 198" aria-hidden="true" focusable="false" className={className}>
      <path
        className="fill-accent"
        d="M122 108A14 14 0 0 1 108 122L36.21 122A6 6 0 0 1 30.22 115.58A92 92 0 0 1 115.58 30.22A6 6 0 0 1 122 36.21Z"
      />
      <path
        fill="#ff6b4a"
        d="M133.31 76A46.69 46.69 0 1 0 226.69 76A46.69 46.69 0 1 0 133.31 76Z"
      />
      <path
        className="fill-accent"
        d="M44 134H108A14 14 0 0 1 122 148V212A14 14 0 0 1 108 226H44A14 14 0 0 1 30 212V148A14 14 0 0 1 44 134Z"
      />
      <path
        className="fill-accent"
        d="M134 148A14 14 0 0 1 148 134L219.79 134A6 6 0 0 1 225.78 140.42A92 92 0 0 1 140.42 225.78A6 6 0 0 1 134 219.79Z"
      />
    </svg>
  );
}

export function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const mark = size === "sm" ? "h-6 w-6" : "h-7 w-7";
  const text = size === "sm" ? "text-[15px]" : "text-[17px]";
  return (
    <a
      href="/"
      className={`inline-flex min-h-11 items-center gap-2.5 font-semibold tracking-[-0.01em] text-fg ${text}`}
    >
      <LogoMark className={`${mark} shrink-0`} />
      Lexserver
    </a>
  );
}
