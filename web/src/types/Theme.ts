export type Theme = "light" | "dark" | "none";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
