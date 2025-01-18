import Image from 'next/image';
import { Box, ButtonBase } from '@mui/material';
import { Hero } from '@/types/game/heroes';
import { useDispatch } from 'react-redux';
import { useMissionCard } from '../MissionCardContext';

const SLOT_SIZE = 30;

type Props = {
  hero: Hero;
};

const MissionHeroAvatar = ({ hero }: Props) => {
  const dispatch = useDispatch();
  const { mission } = useMissionCard();

  return (
    <ButtonBase
      sx={{ color: 'white', borderRadius: '50%' }}
      onClick={() => dispatch.missions.setSelectHeroModal({ open: true, missionId: mission?.id })}
    >
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
            src={
              hero.avatar_url ||
              'https://phkxwnwoxlxflfoblewc.supabase.co/storage/v1/object/public/heroes/no_avatar.png'
            }
            alt={'hero avatar'}
            fill
            priority
            sizes={`(max-width: 425px) ${SLOT_SIZE}px, ${SLOT_SIZE}px`}
          />
        </Box>
      </Box>
    </ButtonBase>
  );
};

export default MissionHeroAvatar;
