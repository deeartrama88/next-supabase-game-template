import { colors } from '@/lib/theme/colors';
import { Box, ButtonBase, Typography, CircularProgress } from '@mui/material';

type Props = {
  text: string | React.ReactNode;
  icon: React.ReactNode;
  loading: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
};

const HeroActionButton = ({ text, icon, loading, onClick, disabled }: Props) => {
  const bgcolor = disabled ? colors.background.actionBgDisabled : colors.background.actionBg;
  const iconBgColor = disabled
    ? colors.background.actionBgDisabled
    : colors.background.actionIconBg;

  return (
    <ButtonBase onClick={onClick} disabled={disabled}>
      <Box display="flex" gap={1} alignItems="center" sx={{ bgcolor }}>
        <Box sx={{ bgcolor: iconBgColor, borderRadius: 1, display: 'flex', alignItems: 'center' }}>
          {loading ? <CircularProgress size={24} /> : icon}
        </Box>
        <Box pr={1}>
          <Typography variant="body2">{text}</Typography>
        </Box>
      </Box>
    </ButtonBase>
  );
};

export default HeroActionButton;
