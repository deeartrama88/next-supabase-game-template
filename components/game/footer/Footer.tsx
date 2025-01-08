import { Box } from '@mui/material';
import NavigationButton from './NavigationButton';

export default function Footer() {
  return (
    <Box
      sx={{
        height: '21vw',
        display: 'flex',
        padding: '0 10px',
        maxHeight: '88px',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundSize: '100% auto',
        backgroundImage: `url(/images/footer.png)`,
      }}
    >
      <NavigationButton href="/missions" image="/images/navigation/battle.png" />
      <NavigationButton href="/wallet" image="/images/navigation/wallet.png" />
      <NavigationButton href="/squad" image="/images/navigation/squad.png" />
      <NavigationButton href="/talents" image="/images/navigation/talents.png" />
      <NavigationButton href="/shop" image="/images/navigation/shop.png" />
    </Box>
  );
}
