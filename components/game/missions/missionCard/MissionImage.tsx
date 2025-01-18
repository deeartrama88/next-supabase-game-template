'use client';

import { Box } from '@mui/material';
import Image from 'next/image';
import { useMissionCard } from './MissionCardContext';

export default function MissionImage() {
  const { mission } = useMissionCard();

  return (
    <Box position="relative" height={150}>
      <Image
        src={mission.image_url}
        alt="Mission"
        fill
        style={{ objectFit: 'cover' }}
        sizes="800px"
      />
    </Box>
  );
}
