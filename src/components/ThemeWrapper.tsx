"use client";

import { useTheme } from "@/components/theme";
import { ReactNode, useEffect } from "react";

export const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(resolvedTheme);
  }, [resolvedTheme]);

  return <>{children}</>;
};
