import { colors } from '@/lib/theme/colors';
import { Stack, Typography } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Hero } from '@/types/game/heroes';
type Props = {
  hero: Hero;
};

const HeroItemStats = ({ hero }: Props) => {
  return (
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
  );
};

export default HeroItemStats;
