'use client';

import { Box, Card, Stack, Typography, IconButton, LinearProgress } from '@mui/material';
import { colors } from '@/lib/theme/colors';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';
import { Mission } from '@/types/game/mission';

interface Props {
  mission: Mission;
}

const SLOT_SIZE = 40;

export default function MissionCard({ mission }: Props) {
  return (
    <Card>
      <Box sx={{ position: 'relative', height: 150 }}>
        <Image
          src={mission.image_url}
          alt={mission.description}
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>

      <Box sx={{ p: 2 }}>
        <Typography variant="body1">{mission.description}</Typography>

        <Stack direction="row" spacing={1} sx={{ mb: 2 }} alignItems="center">
          {mission.heroes?.map((hero) => (
            <Box key={hero.id}>
              <Image src={hero.avatar_url} alt={hero.name} width={SLOT_SIZE} height={SLOT_SIZE} />
            </Box>
          ))}
        </Stack>

        <LinearProgress
          variant="determinate"
          value={mission.health}
          sx={{
            height: 8,
            borderRadius: 4,
            bgcolor: colors.background.default,
            '& .MuiLinearProgress-bar': {
              bgcolor: colors.green.main,
            },
          }}
        />
      </Box>
    </Card>
  );
}
