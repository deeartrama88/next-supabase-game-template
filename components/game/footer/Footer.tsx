'use client';

import { Box } from '@mui/material';
import { colors } from '@/lib/theme-provider';

const Footer = () => {
  return (
    <Box p={1} borderTop={'1px solid'} borderColor={colors.background.paper}>
      Footer
    </Box>
  );
};

export default Footer;
