'use client';

import { Box } from '@mui/material';
import Image from 'next/image';

type Props = {
  imageUrl: string;
};

export default function MissionImage({ imageUrl }: Props) {
  return (
    <Box sx={{ position: 'relative', height: 100 }}>
      <Image
        src={imageUrl}
        alt={'mission image'}
        fill
        sizes="(max-width: 425px) 100vw, 50vw"
        priority
        style={{ objectFit: 'cover' }}
      />
    </Box>
  );
}
