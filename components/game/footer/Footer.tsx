'use client';

import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import ExploreIcon from '@mui/icons-material/Explore';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BuildIcon from '@mui/icons-material/Build';
import { colors } from '@/lib/theme/colors';

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: React.SyntheticEvent, newPath: string) => {
    router.push(newPath);
  };

  return (
    <Box
      sx={{
        borderTop: `1px solid ${colors.background.paper}`,
      }}
    >
      <BottomNavigation value={pathname} onChange={handleChange}>
        <BottomNavigationAction label="Missions" icon={<ExploreIcon />} value="/missions" />
        <BottomNavigationAction
          label="Wallet"
          icon={<AccountBalanceWalletIcon />}
          value="/wallet"
        />
        <BottomNavigationAction label="Player" icon={<PersonIcon />} value="/player" />
        <BottomNavigationAction label="Shop" icon={<StorefrontIcon />} value="/shop" />
        <BottomNavigationAction label="Skills" icon={<BuildIcon />} value="/skills" />
      </BottomNavigation>
    </Box>
  );
}
