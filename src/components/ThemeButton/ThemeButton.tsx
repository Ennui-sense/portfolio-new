import "./ThemeButton.scss";

import { useState } from "react";

import MoonIcon from "~/assets/icons/moon.svg?react";
import SunIcon from "~/assets/icons/sun.svg?react";
import {
  applyTheme,
  getPreferredTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from "~/utils/theme";

const getNextTheme = (theme: Theme): Theme =>
  theme === "light" ? "dark" : "light";

const ThemeButton = () => {
  const [theme, setTheme] = useState<Theme>(getPreferredTheme);
  const nextTheme = getNextTheme(theme);
  const Icon = theme === "light" ? MoonIcon : SunIcon;

  const handleClick = () => {
    setTheme(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  };

  return (
    <button
      type="button"
      className="theme-button"
      aria-label={`Включить ${nextTheme === "dark" ? "темную" : "светлую"} тему`}
      aria-pressed={theme === "dark"}
      onClick={handleClick}
    >
      <Icon aria-hidden="true" />
    </button>
  );
};

export default ThemeButton;
