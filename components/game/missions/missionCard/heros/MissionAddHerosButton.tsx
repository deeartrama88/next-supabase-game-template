import { ButtonBase, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useMissionCard } from '../MissionCardContext';

type Props = {
  size?: string;
};

const MissionAddHerosButton = ({ size = '30px' }: Props) => {
  const { mission } = useMissionCard();
  const dispatch = useDispatch();

  return (
    <ButtonBase
      sx={{ color: 'white', borderRadius: '50%' }}
      onClick={() => dispatch.missions.setSelectHeroModal({ open: true, missionId: mission?.id })}
    >
      <Box
        sx={{
          width: size,
          height: size,
          padding: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundSize: '100% 100%',
          backgroundImage: `url(/images/portrait_frame.png)`,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <AddIcon sx={{ fontSize: '12px' }} />
      </Box>
    </ButtonBase>
  );
};

export default MissionAddHerosButton;
