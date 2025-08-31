//// ThemeWrapper.tsx ////
"use client";

import { Theme } from "@navikt/ds-react";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

export const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render Theme component until mounted to avoid hydration mismatch
  if (!mounted) {
    // Return placeholder with same structure but no theme
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  const navTheme = resolvedTheme === "dark" ? "dark" : "light";
  return <Theme theme={navTheme}>{children}</Theme>;
};
