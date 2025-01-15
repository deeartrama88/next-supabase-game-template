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
                height="100dvh"
                display="flex"
                bgcolor={colors.background.default}
                overflow={'hidden'}
                position="relative"
                flexDirection="column"
              >
                {/* main frame left side bg image */}
                <Box
                  sx={{
                    left: '-4px',
                    width: '24px',
                    height: '100dvh',
                    position: 'absolute',
                    backgroundSize: '100% 100%',
                    backgroundImage: 'url(/images/main-frame_side_1.png)',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
                {/* main frame right side bg image */}
                <Box
                  sx={{
                    right: '-3px',
                    width: '24px',
                    height: '100dvh',
                    position: 'absolute',
                    backgroundSize: '100% 100%',
                    backgroundImage: 'url(/images/main-frame_side_2.png)',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
                {/* header */}
                <Header />

                {/* main content */}
                <Box flex={1} overflow={'auto'} px={2}>
                  {children}
                </Box>

                {/* footer */}
                <Footer />
              </Box>
            </Box>
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
