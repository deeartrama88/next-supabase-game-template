'use client';

import { Avatar, Typography, ListItem, ListItemAvatar, Box } from '@mui/material';
import { colors } from '@/lib/theme/colors';
import { Hero } from '@/types/game/heroes';
import HeroItemStats from './HeroItemStats';
import HeroActions from './HeroActions';

type Props = {
  hero: Hero;
  onClick: (hero: Hero, action: string) => void;
};

const HeroItem = ({ hero, onClick }: Props) => {
  return (
    <Box mb={1}>
      <ListItem
        key={hero.id}
        sx={{
          borderRadius: 1,
          bgcolor: colors.background.default,
          cursor: 'pointer',
          alignItems: 'start',
        }}
      >
        <ListItemAvatar>
          <Avatar src={hero.avatar_url} sx={{ width: 56, height: 56, mr: 1 }} />
        </ListItemAvatar>
        <Box display="flex" flexDirection="column">
          <Typography variant="body1">{hero.name}</Typography>
          <HeroItemStats hero={hero} />
        </Box>
      </ListItem>
      <HeroActions hero={hero} onClick={onClick} />
    </Box>
  );
};

export default HeroItem;
