'use client';

import { store } from '@/store';
import { ReactNode } from 'react';
import { MUIThemeProvider } from './theme-provider';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

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
