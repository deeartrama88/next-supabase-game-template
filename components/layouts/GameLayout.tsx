'use client';

import { Geist } from 'next/font/google';
import { AppProvider } from '@/lib/app-provider';
import { Box } from '@mui/material';
import { colors } from '@/lib/theme/colors';
import Header from '../game/header/Header';
import Footer from '../game/footer/Footer';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Next.js and Supabase Game Starter Kit',
  description: 'The template to build a game with Next.js and Supabase',
};

const geistSans = Geist({
  display: 'swap',
  subsets: ['latin'],
});

type Props = {
  children: React.ReactNode;
};

export default function GameLayout({ children }: Props) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body>
        <AppProvider>
          <main>
            <Box
              sx={{
                margin: '0 auto',
                maxWidth: '425px',
                background: colors.background.default,
              }}
            >
              <Box
                bgcolor={colors.background.default}
                height="100vh"
                overflow={'auto'}
                display="flex"
                flexDirection="column"
              >
                <Header />
                <Box flex={1} overflow={'auto'}>
                  {children}
                </Box>
                <Footer />
              </Box>
            </Box>
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
