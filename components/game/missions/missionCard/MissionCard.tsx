'use client';

import { Box, Card, Stack, Typography } from '@mui/material';

import { Mission } from '@/types/game/mission';

import MissionImage from './MissionImage';
import MissionHeros from './MissionHeros';
import MissionBoosts from './MissionBoosts';
import MissionProgress from './MissionProgress';

interface Props {
  mission: Mission;
}

export default function MissionCard({ mission }: Props) {
  return (
    <Card>
      <MissionImage imageUrl={mission.image_url} />

      <Box sx={{ p: 2 }}>
        <Typography variant="body1">{mission.description}</Typography>

        <Stack direction="row" gap={1}>
          <Box flex={1}>
            <MissionHeros heroes={mission.heroes} />
          </Box>
          <Box flex={1}>
            <MissionBoosts boosts={mission.boosts} />
          </Box>
        </Stack>

        <MissionProgress health={mission.health} />
      </Box>
    </Card>
  );
}
