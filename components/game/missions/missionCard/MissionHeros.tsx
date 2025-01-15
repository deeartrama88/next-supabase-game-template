'use client';

import Image from 'next/image';
import { Hero } from '@/types/game/heroes';
import { Box, Stack } from '@mui/material';

const SLOT_SIZE = 40;

type Props = {
  heroes: Hero[];
};

export default function MissionHeros({ heroes }: Props) {
  return (
    <Stack direction="row" spacing={1}>
      {heroes?.map((hero) => (
        <Box
          key={hero.id}
          sx={{
            backgroundSize: '100% 100%',
            backgroundImage: `url(/images/portrait_frame.png)`,
            backgroundRepeat: 'no-repeat',
            padding: '8px',
          }}
        >
          <Box
            width={`${SLOT_SIZE}px`}
            height={`${SLOT_SIZE}px`}
            position="relative"
            borderRadius="20px"
            overflow="hidden"
          >
            <Image
              src={hero.avatar_url}
              alt={'hero avatar'}
              fill
              priority
              sizes={`(max-width: 425px) ${SLOT_SIZE}px, ${SLOT_SIZE}px`}
            />
          </Box>
        </Box>
      ))}
    </Stack>
  );
}
