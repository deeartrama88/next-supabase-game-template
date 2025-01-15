import { Mission } from '@/types/game/mission';
import { Box, LinearProgress } from '@mui/material';

type Props = {
  mission: Mission;
};

const MissionRewards = ({ mission }: Props) => {
  return (
    <Box
      sx={{
        height: '20px',
        backgroundSize: '100% 100%',
        backgroundImage: `url(/images/mission_reward_bar.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 -3px',
      }}
    >
      {/* <LinearProgress variant="determinate" value={mission.health} /> */}
    </Box>
  );
};

export default MissionRewards;
