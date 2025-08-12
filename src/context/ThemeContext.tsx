'use client';
import { createContext, useEffect, useState } from 'react';

type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme =
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');
    root.classList.toggle('dark', initialTheme === 'dark');
    setTheme(initialTheme as 'light' | 'dark');
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';
    // ? if I want to handle more style I have to use like this
    // if (isDark) {
    //   root.classList.remove('dark');
    //   root.classList.add('light');
    // } else {
    //   root.classList.add('dark');
    //   root.classList.remove('light');
    // }
    root.classList.toggle('dark', !isDark);
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
