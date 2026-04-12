"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {}
  return null;
}

const ThemeContext = createContext<{
  resolvedTheme: Theme;
  setTheme: (t: Theme) => void;
}>({ resolvedTheme: "light", setTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [resolvedTheme, setResolved] = useState<Theme>("light");

  useEffect(() => {
    const initial = getStoredTheme() ?? getSystemTheme();
    setResolved(initial);

    // Keep in sync with OS changes when no manual preference is set
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (!getStoredTheme()) setResolved(getSystemTheme());
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  function setTheme(theme: Theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
    setResolved(theme);
  }

  return (
    <ThemeContext.Provider value={{ resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
