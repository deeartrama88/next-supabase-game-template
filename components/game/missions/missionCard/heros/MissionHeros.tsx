'use client';

import { Box } from '@mui/material';
import MissionHeroAvatar from './MissionHeroAvatar';
import MissionAddHerosButton from './MissionAddHerosButton';
import { useMissionCard } from '../MissionCardContext';

const MissionHeros = () => {
  const { mission } = useMissionCard();
  const heroes = mission?.heroes || [];

  if (heroes.length === 0) {
    // layout for add button
    return <MissionAddHerosButton size="40px" />;
  }

  if (heroes.length === 1) {
    // layout for 1 hero + add button
    return (
      <Box display={'flex'} alignItems={'center'} width={'60px'}>
        <MissionHeroAvatar hero={heroes[0]} />
        <Box>
          <MissionAddHerosButton />
        </Box>
      </Box>
    );
  }

  const firstTwoHerosToShow = heroes?.slice(0, 2);

  // layout for 2 heros + add button
  return (
    <Box width={'90px'} display={'flex'} alignItems={'center'}>
      <Box position={'relative'} right={'-20px'}>
        <MissionHeroAvatar hero={firstTwoHerosToShow[0]} />
      </Box>
      <Box position={'relative'} left={'-40px'}>
        <MissionHeroAvatar hero={firstTwoHerosToShow[1]} />
      </Box>
      <Box position={'relative'} left={'-24px'}>
        <MissionAddHerosButton />
      </Box>
    </Box>
  );
};

export default MissionHeros;
