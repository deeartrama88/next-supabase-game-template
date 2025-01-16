import { Box, Stack } from '@mui/material';
import { Mission } from '@/types/game/mission';
import MissionHeros from './MissionHeros';
import MissionBoosts from './MissionBoosts';
import MissionButton from './MissionButton';
import MissionProgress from './MissionProgress';
import MissionContentDescription from './MissionContentDescription';

type Props = {
  mission: Mission;
};

const MissionContent = ({ mission }: Props) => {
  return (
    <Box
      sx={{
        backgroundSize: 'cover',
        backgroundImage: `url(/images/mission_bg.png)`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <MissionContentDescription description={mission.description} />
      <Stack direction="row" gap={1}>
        <Box flex={1} alignItems={'center'} display={'flex'} justifyContent={'center'}>
          <MissionHeros heroes={mission.heroes} />
        </Box>
        <Box flex={1} alignItems={'center'} display={'flex'} justifyContent={'center'}>
          <MissionButton />
        </Box>
        <Box flex={1} alignItems={'center'} display={'flex'} justifyContent={'center'}>
          <MissionBoosts boosts={mission.boosts} />
        </Box>
      </Stack>
      <MissionProgress health={mission.health} />
    </Box>
  );
};

export default MissionContent;
