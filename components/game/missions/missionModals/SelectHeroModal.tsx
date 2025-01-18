'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Stack,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShieldIcon from '@mui/icons-material/Shield';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { colors } from '@/lib/theme/colors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '@/store';
import MissionButton from '../missionCard/MissionButton';
import Header from './Header';
import { Hero } from '@/types/game/heroes';
import { Mission } from '@/types/game/mission';

type Props = {
  heroes: Hero[];
  missions: Mission[];
};

export default function SelectHeroModal({ heroes, missions }: Props) {
  const { open, missionId } = useSelector((state: RootState) => state.missions.selectHeroModal);
  const mission = missions?.find((mission) => mission.id === missionId);

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch.missions.setSelectHeroModal({ open: false, missionId: null });
  };

  const onSave = (hero: any) => {
    dispatch.missions.addHeroToMission({ missionId, heroId: hero.id });
    onClose();
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
      <Header title="Select Hero" onClose={onClose} />

      <DialogContent dividers>
        <List sx={{ pt: 0 }}>
          {heroes?.map((hero) => (
            <ListItem
              key={hero.id}
              sx={{
                mb: 1,
                borderRadius: 1,
                bgcolor: colors.background.default,
                '&:hover': {
                  bgcolor: `${colors.background.default}80`,
                },
                cursor: 'pointer',
              }}
              onClick={() => onSave(hero)}
            >
              <ListItemAvatar>
                <Avatar src={hero.avatar_url} sx={{ width: 56, height: 56, mr: 1 }} />
              </ListItemAvatar>
              <Stack direction="row" spacing={2} alignItems="center">
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <LocalFireDepartmentIcon sx={{ color: colors.orange.main }} />
                  <Typography variant="body2">{hero.damage}</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <FavoriteIcon sx={{ color: colors.red.main }} />
                  <Typography variant="body2">{hero.health}</Typography>
                </Stack>
              </Stack>
            </ListItem>
          ))}
        </List>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <MissionButton onClick={onClose} text="Cancel" />
        <MissionButton onClick={onSave} text="Save" />
      </DialogActions>
    </Dialog>
  );
}
