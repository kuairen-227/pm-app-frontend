"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // hydration mismatch回避
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative inline-flex h-10 w-10 items-center justify-center
        rounded-md border bg-background
        transition-colors hover:bg-accent
      "
      aria-label="Toggle theme"
    >
      <Sun
        className="
          h-5 w-5 transition-all
          dark:rotate-90 dark:scale-0
        "
      />
      <Moon
        className="
          absolute h-5 w-5 transition-all
          rotate-90 scale-0
          dark:rotate-0 dark:scale-100
        "
      />
    </button>
  );
}
