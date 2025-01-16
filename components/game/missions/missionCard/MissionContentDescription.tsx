import { Box, Stack, Button, Popover, Typography } from '@mui/material';
import { useState } from 'react';

type Props = {
  description: string;
};

const MissionContentDescription = ({ description }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Stack direction="row" alignItems={'center'} padding={'0 12px'}>
      <Box
        flex={1}
        sx={{
          display: '-webkit-box',
          overflow: 'hidden',
          wordBreak: 'break-all',
          textOverflow: 'ellipsis',
          WebkitLineClamp: 1,
          WebkitBoxOrient: 'vertical',
        }}
      >
        <Typography variant="body2">{description}</Typography>
      </Box>

      <Button aria-describedby={id} variant="text" size="small" onClick={handleClick}>
        see more
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box p={2}>
          <Typography variant="body2">{description}</Typography>
        </Box>
      </Popover>
    </Stack>
  );
};

export default MissionContentDescription;
