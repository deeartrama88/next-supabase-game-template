import { Box, Button, ButtonProps } from '@mui/material';

type Props = ButtonProps & {
  text?: string;
};

const MissionButton = ({ text, ...buttonProps }: Props) => {
  return (
    <Box
      sx={{
        width: '100px',
        height: '42px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: '100% 100%',
        backgroundImage: `url(/images/button_base.png)`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Button size="small" {...buttonProps} sx={{ width: '100%' }}>
        {text || 'Start'}
      </Button>
    </Box>
  );
};

export default MissionButton;
