'use client';

import { colors } from '@/lib/theme/colors';
import { Box, LinearProgress } from '@mui/material';

type Props = {
  health: number;
};

export default function MissionProgress({ health }: Props) {
  return (
    <Box
      sx={{
        height: '15px',
        backgroundSize: '100% 100%',
        backgroundImage: `url(/images/mission_progress_bar.png)`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* <LinearProgress variant="determinate" value={health} /> */}
    </Box>
  );
}
