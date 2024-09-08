// ThemeContext.js
import React, { createContext, useState } from 'react';
import { lightTheme, darkTheme } from '../utils/theme';

const ThemeContext = createContext(lightTheme); // Default to light theme

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
