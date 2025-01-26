'use client';

import { store } from '@/store';
import { ReactNode } from 'react';
import { MUIThemeProvider } from './theme-provider';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { NearContext, Wallet } from '@/wallets/near';
import { NetworkId } from '@/wallets/config';
import { useState, useEffect } from 'react';

const wallet = new Wallet({ networkId: NetworkId, createAccessKeyFor: '' });

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [signedAccountId, setSignedAccountId] = useState('');

  useEffect(() => {
    wallet.startUp(setSignedAccountId);
  }, []);

  return (
    <NearContext.Provider value={{ wallet, signedAccountId }}>
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
    </NearContext.Provider>
  );
}
