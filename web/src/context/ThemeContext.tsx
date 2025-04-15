"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { Theme, ThemeContextType } from "@/types/Theme";
import { useLoading } from "./LoadingDataContext";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getUserThemePreference(): "light" | "dark" {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }

  return "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("none");
  const { defineLoading } = useLoading();
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme;
    if (saved) {
      setTheme(saved);
      setTimeout(() => {
        defineLoading(false);
      }, 1000);
    } else {
      setTheme(getUserThemePreference());
      setTimeout(() => {
        defineLoading(false);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (theme !== "none") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within theme provider");
  return context;
};
