import Image from 'next/image';
import { Box } from '@mui/material';
import { Hero } from '@/types/game/heroes';

const SLOT_SIZE = 30;

type Props = {
  hero: Hero;
};

const MissionHeroAvatar = ({ hero }: Props) => {
  return (
    <Box
      sx={{
        backgroundSize: '100% 100%',
        backgroundImage: `url(/images/portrait_frame.png)`,
        backgroundRepeat: 'no-repeat',
        padding: '6px',
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
  );
};

export default MissionHeroAvatar;
