'use client';

import { ReactNode } from 'react';
import { MUIThemeProvider } from './theme-provider';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ReduxProvider store={store}>
      <NextThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <MUIThemeProvider>
          {/* Add other providers here */}
          {children}
        </MUIThemeProvider>
      </NextThemeProvider>
    </ReduxProvider>
  );
} 