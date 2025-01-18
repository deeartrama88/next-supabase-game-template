import Image from 'next/image';
import { Box, ButtonBase } from '@mui/material';
import { Boost } from '@/types/game/boosts';

const SLOT_SIZE = 30;

type Props = {
  boost: Boost;
  onClick: (boost: Boost) => void;
};

const MissionBoostAvatar = ({ boost, onClick }: Props) => {
  return (
    <ButtonBase sx={{ color: 'white', borderRadius: '50%' }} onClick={() => onClick(boost)}>
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
            src={boost.image_url}
            alt={'boost image'}
            fill
            priority
            sizes={`(max-width: 425px) ${SLOT_SIZE}px, ${SLOT_SIZE}px`}
          />
        </Box>
      </Box>
    </ButtonBase>
  );
};

export default MissionBoostAvatar;
