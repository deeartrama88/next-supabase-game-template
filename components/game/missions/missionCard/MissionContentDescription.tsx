import { Typography } from '@mui/material';
import { useMissionCard } from './MissionCardContext';

export default function MissionContentDescription() {
  const { mission } = useMissionCard();

  return (
    <Typography
      variant="body1"
      sx={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        padding: '4px 8px',
      }}
    >
      {mission.description}
    </Typography>
  );
}
