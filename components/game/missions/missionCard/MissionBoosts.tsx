import Image from 'next/image';
import { Boost } from '@/types/game/boosts';
import { Box, Stack } from '@mui/material';

const SLOT_SIZE = 30;

type Props = {
  boosts: Boost[];
};

export default function MissionBoosts({ boosts }: Props) {
  return (
    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
      {boosts?.map((boost) => (
        <Box
          key={boost.id}
          sx={{
            padding: '4px',
            backgroundSize: '100% 100%',
            backgroundImage: `url(/images/booster_frame.png)`,
            backgroundRepeat: 'no-repeat',
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
              src={boost.image_url}
              alt={'boost image'}
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
