import { Box } from '@mui/material';
import { useMissionCard } from './MissionCardContext';

export default function MissionRewards() {
  const { mission } = useMissionCard();

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
}
