'use client';

import { Dialog, DialogContent, DialogActions, List } from '@mui/material';
import HeroItem from './HeroItem';
import { colors } from '@/lib/theme/colors';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import MissionButton from '../missionCard/MissionButton';
import Header from './Header';
import { Hero } from '@/types/game/heroes';

type Props = {
  heroes: Hero[];
  onClick: (hero: Hero, missionId: string, action: string) => void;
};

export default function SelectHeroModal({ heroes, onClick }: Props) {
  const { open, missionId } = useSelector((state: RootState) => state.missions.selectHeroModal);

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch.missions.setSelectHeroModal({ open: false, missionId: null });
  };

  const handleClick = (hero: Hero, action: string) => {
    onClick(hero, missionId || '', action);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: colors.background.paper,
          borderRadius: '4px',
          backgroundImage: 'none',
        },
      }}
    >
      <Header title="Select Hero for the mission" onClose={onClose} />

      <DialogContent dividers>
        <List sx={{ pt: 0 }}>
          {heroes?.map((hero) => <HeroItem hero={hero} key={hero.id} onClick={handleClick} />)}
        </List>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <MissionButton onClick={onClose} text="Cancel" />
      </DialogActions>
    </Dialog>
  );
}
