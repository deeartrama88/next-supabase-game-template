import { ButtonBase, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';

type Props = {
  size?: string;
};

const MissionBoostAddButton = ({ size = '30px' }: Props) => {
  return (
    <ButtonBase sx={{ color: 'white' }}>
      <Box
        sx={{
          width: size,
          height: size,
          padding: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundSize: '100% 100%',
          backgroundImage: `url(/images/booster_frame.png)`,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <AddIcon sx={{ fontSize: '12px' }} />
      </Box>
    </ButtonBase>
  );
};

export default MissionBoostAddButton;
