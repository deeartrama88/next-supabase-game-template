import { Box } from '@mui/material';
import NavigationButton from './NavigationButton';

export default function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '56px',
        display: 'flex',
        justifyContent: 'center',
        backgroundSize: '100%',
        backgroundImage: `url(/images/footer_bg.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
      }}
    >
      <Box
        sx={{
          gap: '25px',
          width: '320px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundSize: 'cover',
          backgroundImage: `url(/images/footer_main.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <NavigationButton href="/missions" image="/images/battle.png" />
        <NavigationButton href="/wallet" image="/images/wallet.png" />
        <NavigationButton href="/squad" image="/images/squad.png" />
        <NavigationButton href="/talents" image="/images/talents.png" />
        <NavigationButton href="/shop" image="/images/shop.png" />
      </Box>
    </Box>
  );
}
