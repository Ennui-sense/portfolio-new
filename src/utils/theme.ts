export const THEME_STORAGE_KEY = "portfolio-theme";

export type Theme = "light" | "dark";

const DARK_THEME_MEDIA = "(prefers-color-scheme: dark)";

export const isTheme = (value: string | null): value is Theme =>
  value === "light" || value === "dark";

export const getPreferredTheme = (): Theme => {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (isTheme(savedTheme)) {
    return savedTheme;
  }

  return window.matchMedia(DARK_THEME_MEDIA).matches ? "dark" : "light";
};

export const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
};
