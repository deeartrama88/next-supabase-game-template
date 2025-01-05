'use client';

import { Box } from '@mui/material';
import { colors } from '@/lib/theme/colors';

const Header = () => {
  return (
    <Box p={1} borderBottom={'1px solid'} borderColor={colors.background.paper}>
      Header
    </Box>
  );
};

export default Header;
