import { Box } from '@mui/material';

const MissionFrameImages = () => {
  return (
    <>
      {/* main frame top bg image */}
      <Box
        sx={{
          top: '-3px',
          left: '-5px',
          width: '103%',
          height: '12px',
          position: 'absolute',
          backgroundSize: '100% 100%',
          backgroundImage: 'url(/images/mission_frame_top.png)',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* main frame left side bg image */}
      <Box
        sx={{
          top: '7px',
          left: '-4px',
          width: '12px',
          height: '88%',
          position: 'absolute',
          backgroundSize: '100% 100%',
          backgroundImage: 'url(/images/mission_frame_side_1.png)',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* main frame right side bg image */}
      <Box
        sx={{
          top: '7px',
          right: '-4px',
          width: '12px',
          height: '88%',
          position: 'absolute',
          backgroundSize: '100% 100%',
          backgroundImage: 'url(/images/mission_frame_side_2.png)',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </>
  );
};

export default MissionFrameImages;
