import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = window.localStorage.getItem("theme") as Theme | null;
      if (storedTheme) {
        return storedTheme;
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add("theme-transition");
    
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    
    localStorage.setItem("theme", theme);

    const timeout = window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 350);

    return () => window.clearTimeout(timeout);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
