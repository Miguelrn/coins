import React, { createContext, useContext, useState, useMemo, useEffect, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './muiThemes';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem('theme');
    return stored === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  const muiTheme = useMemo(() => (theme === 'light' ? lightTheme : darkTheme), [theme]);
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={muiTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}