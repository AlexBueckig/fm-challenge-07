import styled, { CreateStyled } from '@emotion/styled/macro';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import React, { createContext, FC, useContext, useEffect, useState } from 'react';

interface ThemeContext {
  dark: boolean;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContext | null>(null);

export interface Theme {
  background: string;
  color: string;
  elements: string;
}

const theme = {
  dark: { background: 'hsl(207, 26%, 17%)', color: 'hsl(0, 0%, 100%)', elements: 'hsl(209, 23%, 22%)' },
  light: { background: 'hsl(0, 0%, 98%)', color: 'hsl(200, 15%, 8%)', elements: 'hsl(0, 0%, 100%)' }
};

const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (!theme) throw new Error('useTheme needs to be wrapped inside a <ThemeProvider>!');

  return theme;
};

const useDarkModeEffect = () => {
  const [themeState, setThemeState] = useState(false);

  useEffect(() => {
    setThemeState(localStorage.getItem('DarkMode') === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('DarkMode', JSON.stringify(themeState));
  }, [themeState]);

  return { themeState, setThemeState };
};

const ThemeProvider: FC = ({ children }) => {
  const { themeState, setThemeState } = useDarkModeEffect();

  const toggle = () => {
    setThemeState(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ dark: themeState, toggle }}>
      <EmotionThemeProvider<Theme> theme={themeState ? theme.dark : theme.light}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

const customStyled = styled as CreateStyled<Theme>;

export { useTheme, ThemeProvider, customStyled as styled };
