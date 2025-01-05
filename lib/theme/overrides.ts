'use client';

import { Components, Theme } from '@mui/material/styles';
import { colors } from './colors';

export const navigationOverrides: Components<Theme> = {
  MuiBottomNavigation: {
    styleOverrides: {
      root: {
        backgroundColor: colors.background.default,
      },
    },
  },
  MuiBottomNavigationAction: {
    styleOverrides: {
      root: {
        color: colors.text.secondary,
        '&.Mui-selected': {
          color: colors.green.main,
          '& .MuiSvgIcon-root': {
            color: colors.green.main,
          },
        },
      },
    },
  },
};
