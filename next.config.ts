import type { NextConfig } from 'next';

// supabase image url example
// https://phkxwnwoxlxflfoblewc.supabase.co/storage/v1/object/public/missions/mission_1.png
// https://phkxwnwoxlxflfoblewc.supabase.co/storage/v1/object/public/heroes/atlas.png

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'phkxwnwoxlxflfoblewc.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
