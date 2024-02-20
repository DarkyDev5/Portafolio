"use client"
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface IThemeContext {
  theme: string;
  setTheme: (value: string) => void;
}

const defaultThemeContext: IThemeContext = {
  theme: 'light',
  setTheme: () => {},
};

const ThemeContext = createContext<IThemeContext>(defaultThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = window.localStorage.getItem('theme');
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
