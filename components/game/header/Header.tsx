'use client';

import { Box } from '@mui/material';
import { colors } from '@/lib/theme/colors';

const Header = () => {
  return (
    <Box
      sx={{
        height: '60px',
        backgroundImage: 'url(/images/header.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        padding: '18px',
        textAlign: 'center',
      }}
    >
      Header
    </Box>
  );
};

export default Header;
