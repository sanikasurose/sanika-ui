import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    
    // load saved theme from localStorage
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "";
    });

    // apply theme + save to localStorage
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme); 
    }, [theme]); 

    return (
        <ThemeContext.Provider value={{ theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
