import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '/**', // allow all images under this domain
        },
        {
          protocol: 'https',
          hostname: 'encrypted-tbn0.gstatic.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn01.alison-static.net',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'www.theopencollege.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'www.profoundresource.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
          pathname: '/**',
        },
      ],
    },
};

export default nextConfig;
