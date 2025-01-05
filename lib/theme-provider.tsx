'use client';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';
import { navigationOverrides } from './theme/overrides';
import { colors } from './theme/colors';

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
    ...navigationOverrides,
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
