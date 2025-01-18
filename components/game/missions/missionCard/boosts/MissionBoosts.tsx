import { Box } from '@mui/material';
import { Boost } from '@/types/game/boosts';
import MissionBoostAvatar from './MissionBoostAvatar';
import MissionBoostAddButton from './MissionBoostAddButton';
import { useMissionCard } from '../MissionCardContext';

const MissionBoosts = () => {
  const { mission } = useMissionCard();
  const boosts = mission?.boosts || [];

  const onClick = (boost: Boost) => {
    console.log(boost);
  };

  if (boosts.length === 0) {
    // layout for add button
    return <MissionBoostAddButton size="40px" />;
  }

  if (boosts.length === 1) {
    // layout for 1 hero + add button
    return (
      <Box display={'flex'} alignItems={'center'} width={'60px'}>
        <MissionBoostAvatar boost={boosts[0]} onClick={onClick} />
        <MissionBoostAddButton size="25px" />
      </Box>
    );
  }

  const firstTwoBoostsToShow = boosts?.slice(0, 2);

  // layout for 2 heros + add button
  return (
    <Box width={'90px'} display={'flex'} alignItems={'center'}>
      <Box position={'relative'} right={'-20px'}>
        <MissionBoostAvatar boost={firstTwoBoostsToShow[0]} onClick={onClick} />
      </Box>
      <Box position={'relative'} left={'-40px'}>
        <MissionBoostAvatar boost={firstTwoBoostsToShow[1]} onClick={onClick} />
      </Box>
      <Box position={'relative'} left={'-24px'}>
        <MissionBoostAddButton size="25px" />
      </Box>
    </Box>
  );
};

export default MissionBoosts;
