import { Box, Typography } from '@mui/material';
import { colors } from '@/lib/theme/colors';
import { Hero } from '@/types/game/heroes';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import HeroActionButton from './HeroActionButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

type Props = {
  hero: Hero;
  onClick: (hero: Hero, action: string) => void;
};

const HeroActions = ({ hero, onClick }: Props) => {
  const { heroActionLoading, missionId } = useSelector(
    (state: RootState) => state.missions.selectHeroModal
  );
  const isAppliedToTheMission = !!hero.active_mission_id;

  const showAddButton = hero.active_mission_id !== missionId;
  const showRemoveButton = hero.active_mission_id === missionId;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const actionType = isAppliedToTheMission ? 'deselect' : 'select';
    onClick(hero, actionType);
  };

  const isLoading = !!heroActionLoading;
  const isCurrentHeroLoading = heroActionLoading === hero.id;

  const isSelectedForAnotherMission =
    hero.active_mission_id && hero.active_mission_id !== missionId;

  if (isSelectedForAnotherMission) {
    return (
      <Box sx={{ bgcolor: colors.background.actionBg, padding: '0 4px' }}>
        <Typography variant="body2" color="text.secondary">
          selected for another mission
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        gap: 1,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'start',
        borderRadius: 1,
      }}
    >
      {showAddButton && (
        <HeroActionButton
          text={'Add'}
          icon={<AddIcon />}
          loading={isCurrentHeroLoading}
          onClick={handleClick}
          disabled={!!isLoading}
        />
      )}
      {showRemoveButton && (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <HeroActionButton
            text="Remove"
            icon={<RemoveIcon />}
            loading={isCurrentHeroLoading}
            onClick={handleClick}
            disabled={!!isLoading}
          />
        </Box>
      )}
    </Box>
  );
};

export default HeroActions;
