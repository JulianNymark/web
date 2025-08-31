"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ThemeIcon } from "@navikt/aksel-icons";
import { Button, Tooltip } from "@navikt/ds-react";

function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    // Return button without dynamic content
    return (
      <Button
        variant="tertiary-neutral"
        icon={<ThemeIcon aria-hidden />}
        aria-label="Endre tema" // Static label during SSR
      />
    );
  }

  return (
    <Tooltip
      content={
        resolvedTheme === "dark"
          ? "Endre til lyst tema"
          : "Endre til mørkt tema"
      }
    >
      <Button
        variant="tertiary-neutral"
        icon={<ThemeIcon aria-hidden />}
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        aria-label={
          resolvedTheme === "dark"
            ? "Endre til lyst tema"
            : "Endre til mørkt tema"
        }
      />
    </Tooltip>
  );
}

export { ThemeButton };
