'use client';

import { Box } from '@mui/material';
import { Mission } from '@/types/game/mission';
import MissionImage from './MissionImage';
import MissionContent from './MissionContent';
import MissionRewards from './MissionRewards';
import MissionFrameImages from './MissionFrameImages';
import MissionImageDivider from './MissionImageDivider';
import { MissionCardProvider } from './MissionCardContext';

interface Props {
  mission: Mission;
}

export default function MissionCard({ mission }: Props) {
  return (
    <MissionCardProvider mission={mission}>
      <Box position="relative">
        <MissionImage />
        <MissionImageDivider />
        <MissionContent />
        <MissionRewards />
        <MissionFrameImages />
      </Box>
    </MissionCardProvider>
  );
}
