import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>Theme Toggle App</h1>
      <p>
        The current theme is <strong>{theme} </strong>
      </p>
      <button onClick={toggleTheme} >Toggle Theme </button>
    </div>
  );
};

export default ThemeToggle;
