"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark" | "system";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (t: Theme) => void;
}>({ theme: "dark", setTheme: () => {} });

function resolveIsDark(theme: Theme): boolean {
  if (typeof window === "undefined") return theme !== "light";
  if (theme === "dark") return true;
  if (theme === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyThemeToDocument(theme: Theme) {
  const root = document.documentElement;
  const isDark = resolveIsDark(theme);
  root.classList.toggle("dark", isDark);
  root.style.colorScheme = isDark ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("rux-theme") as Theme | null;
    const initial: Theme =
      stored === "light" || stored === "dark" || stored === "system" ? stored : "dark";
    setThemeState(initial);
    applyThemeToDocument(initial);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    applyThemeToDocument(theme);

    if (theme !== "system") return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyThemeToDocument("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme, ready]);

  const setTheme = useCallback((t: Theme) => {
    localStorage.setItem("rux-theme", t);
    setThemeState(t);
    applyThemeToDocument(t);
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
