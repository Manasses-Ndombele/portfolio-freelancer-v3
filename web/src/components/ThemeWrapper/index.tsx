"use client";
import { useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark", "none");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
}
