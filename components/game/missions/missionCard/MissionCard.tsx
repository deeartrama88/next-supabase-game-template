'use client';

import { Box } from '@mui/material';
import { Mission } from '@/types/game/mission';
import MissionImage from './MissionImage';
import MissionContent from './MissionContent';
import MissionRewards from './MissionRewards';
import MissionFrameImages from './MissionFrameImages';
import MissionImageDivider from './MissionImageDivider';

interface Props {
  mission: Mission;
}

export default function MissionCard({ mission }: Props) {
  return (
    <Box position="relative">
      <MissionImage imageUrl={mission.image_url} />
      <MissionImageDivider />
      <MissionContent mission={mission} />
      <MissionRewards mission={mission} />
      <MissionFrameImages />
    </Box>
  );
}
