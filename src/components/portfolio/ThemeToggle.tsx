import { useState } from "react";
import { Sun, Moon } from "lucide-react";

function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // storage blocked: the choice lasts for this page view only
    }
  }

  return { dark, toggle };
}

export function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-md p-2 text-muted transition-colors hover:text-fg"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
