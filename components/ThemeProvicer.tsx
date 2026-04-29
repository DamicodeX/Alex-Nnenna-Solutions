"use client";

import * as React from "react";

type Theme = "light" | "dark";

type ThemeProviderProps = React.PropsWithChildren<{
  attribute?: string;
  defaultTheme?: Theme | "system";
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}>;

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

function applyTheme(theme: Theme, disableTransitionOnChange: boolean) {
  const root = document.documentElement;

  if (disableTransitionOnChange) {
    root.classList.add("theme-transition-off");
    window.setTimeout(() => root.classList.remove("theme-transition-off"), 0);
  }

  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const getInitialTheme = React.useCallback((): Theme => {
    if (typeof window === "undefined") {
      return defaultTheme === "dark" ? "dark" : "light";
    }

    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    if (defaultTheme === "system" && enableSystem) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    return defaultTheme === "dark" ? "dark" : "light";
  }, [defaultTheme, enableSystem]);

  const [theme, setThemeState] = React.useState<Theme>(() => getInitialTheme());

  React.useEffect(() => {
    applyTheme(theme, disableTransitionOnChange);
    window.localStorage.setItem("theme", theme);
  }, [disableTransitionOnChange, theme]);

  React.useEffect(() => {
    if (!enableSystem || defaultTheme !== "system") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setThemeState(mediaQuery.matches ? "dark" : "light");

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [defaultTheme, enableSystem]);

  const value = React.useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme: theme,
      setTheme: (nextTheme) => setThemeState(nextTheme),
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}