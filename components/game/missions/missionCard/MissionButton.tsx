import { Box, Button } from '@mui/material';

const MissionButton = () => {
  return (
    <Box
      sx={{
        backgroundSize: '100% 100%',
        backgroundImage: `url(/images/button_base.png)`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Button size="small">Start</Button>
    </Box>
  );
};

export default MissionButton;
