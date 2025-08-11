"use client";

import useDarkMode from "@/hooks/useDarkMode";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
    >
      Toggle {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}
