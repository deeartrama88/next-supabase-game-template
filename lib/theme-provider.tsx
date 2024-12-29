'use client';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';

export const colors = {
  background: {
    default: '#222831',
    paper: '#31363F',
  },
  blue: {
    main: '#677D6A',
    light: '#D6BD98',
    dark: '#3E3232',
  },
  brown: {
    main: '#A78295',
    light: '#3F2E3E',
    dark: '#331D2C',
  },
  orange: {
    main: '#e67e22',
    light: '#f39c12',
    dark: '#d35400',
  },
  red: {
    main: '#e74c3c',
    light: '#ff6b6b',
    dark: '#c0392b',
  },
  yellow: {
    main: '#f1c40f',
    light: '#fdcb6e',
    dark: '#f39c12',
  },
  lightBlue: {
    main: '#3498db',
    light: '#74b9ff',
    dark: '#2980b9',
  },
  green: {
    main: '#9EC8B9',
    light: '#5C8374',
    dark: '#092635',
  },
  text: {
    primary: '#EFE1D1',
    secondary: '#A87C7C',
    disabled: '#B0A4A4',
  },
} as const;

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: colors.background,
    primary: {
      main: colors.green.main,
      light: colors.green.light,
      dark: colors.green.dark,
      contrastText: colors.text.primary,
    },
    secondary: {
      main: colors.orange.main,
      light: colors.orange.light,
      dark: colors.orange.dark,
      contrastText: colors.text.primary,
    },
    error: {
      main: colors.red.main,
      light: colors.red.light,
      dark: colors.red.dark,
    },
    warning: {
      main: colors.yellow.main,
      light: colors.yellow.light,
      dark: colors.yellow.dark,
    },
    info: {
      main: colors.lightBlue.main,
      light: colors.lightBlue.light,
      dark: colors.lightBlue.dark,
    },
    success: {
      main: colors.green.main,
      light: colors.green.light,
      dark: colors.green.dark,
    },
    text: colors.text,
    divider: `${colors.text.primary}1f`,
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export function MUIThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
