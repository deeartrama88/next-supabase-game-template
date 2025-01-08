import Image from 'next/image';
import { Boost } from '@/types/game/boosts';
import { Box, Stack } from '@mui/material';

const SLOT_SIZE = 40;

type Props = {
  boosts: Boost[];
};

export default function MissionBoosts({ boosts }: Props) {
  return (
    <Stack direction="row" spacing={1} sx={{ mb: 2 }} alignItems="center">
      {boosts?.map((boost) => (
        <Box key={boost.id} width={`${SLOT_SIZE}px`} height={`${SLOT_SIZE}px`} position="relative">
          <Image
            src={boost.image_url}
            alt={'boost image'}
            fill
            priority
            sizes={`(max-width: 425px) ${SLOT_SIZE}px, ${SLOT_SIZE}px`}
          />
        </Box>
      ))}
    </Stack>
  );
}
