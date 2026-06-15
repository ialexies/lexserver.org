import { useState } from "react";
import { Sun, Moon } from "lucide-react";

function useTheme() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return { dark, toggle };
}

export function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="border border-border bg-surface p-2 text-ink transition-colors hover:bg-surface-raised"
    >
      {dark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
