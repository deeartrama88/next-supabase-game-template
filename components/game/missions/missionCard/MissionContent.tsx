import { Box, Stack } from '@mui/material';
import MissionHeros from './heros/MissionHeros';
import MissionBoosts from './boosts/MissionBoosts';

import MissionButton from './MissionButton';
import MissionProgress from './MissionProgress';
import MissionContentDescription from './MissionContentDescription';

const MissionContent = () => {
  return (
    <Box
      sx={{
        backgroundSize: 'cover',
        backgroundImage: `url(/images/mission_bg.png)`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <MissionContentDescription />
      <Stack direction="row" gap={1}>
        <Box flex={1} alignItems={'center'} display={'flex'} justifyContent={'center'}>
          <MissionHeros />
        </Box>
        <Box flex={1} alignItems={'center'} display={'flex'} justifyContent={'center'}>
          <MissionButton />
        </Box>
        <Box flex={1} alignItems={'center'} display={'flex'} justifyContent={'center'}>
          <MissionBoosts />
        </Box>
      </Stack>
      <MissionProgress />
    </Box>
  );
};

export default MissionContent;
