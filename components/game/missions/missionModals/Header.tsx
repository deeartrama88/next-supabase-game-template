import { Box, ButtonBase, DialogTitle } from '@mui/material';
import Image from 'next/image';

type Props = {
  title: string;
  onClose: () => void;
};

const Header = ({ title, onClose }: Props) => {
  return (
    <DialogTitle
      sx={{
        m: 0,
        display: 'flex',
        padding: '8px',
        fontSize: '16px',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      component={'h6'}
    >
      {title}
      <ButtonBase onClick={onClose}>
        <Image
          src="/images/close_window_button.png"
          alt="Close"
          width={24}
          height={24}
          sizes="24px"
        />
      </ButtonBase>
    </DialogTitle>
  );
};

export default Header;
