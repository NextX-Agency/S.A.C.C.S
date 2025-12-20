/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Power the Next.js App Router
  experimental: {
    // Server Actions for serverless operations
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  
  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Add your allowed image domains here
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      // },
    ],
  },
  
  // Compression
  compress: true,
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
