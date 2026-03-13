import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const themes = ["", "darkPink", "devMode"];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // cycle themes
  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
