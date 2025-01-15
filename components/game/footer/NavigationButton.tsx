'use client';

import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';

import NextLink from 'next/link';
import Image from 'next/image';

type NavigationButtonProps = {
  href: string;
  image: string;
};
const NavigationButton = ({ href, image }: NavigationButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Box
      sx={{
        transition: 'transform 0.2s ease-in-out',
        transform: isActive ? 'scale(1.1)' : 'scale(1)',
      }}
    >
      <NextLink href={href}>
        <Image src={image} alt={image} width={30} height={30} priority />
      </NextLink>
    </Box>
  );
};

export default NavigationButton;
