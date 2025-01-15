import { Box } from '@mui/material';

export default function MissionImageDivider() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '1px',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          top: '-5px',
          left: '0',
          width: '100%',
          height: '10px',
          position: 'absolute',
          backgroundSize: '100% 100%',
          backgroundImage: `url(/images/mission_frame_middle_line.png)`,
          backgroundRepeat: 'no-repeat',
        }}
      />
    </Box>
  );
}
