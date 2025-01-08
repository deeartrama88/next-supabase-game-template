'use client';

import { colors } from '@/lib/theme/colors';
import { LinearProgress } from '@mui/material';

type Props = {
  health: number;
};

export default function MissionProgress({ health }: Props) {
  return (
    <LinearProgress
      variant="determinate"
      value={health}
      sx={{
        height: 8,
        borderRadius: 4,
        bgcolor: colors.background.default,
        '& .MuiLinearProgress-bar': {
          bgcolor: colors.green.main,
        },
      }}
    />
  );
}
