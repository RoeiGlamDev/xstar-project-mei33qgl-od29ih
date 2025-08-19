import { NextResponse } from 'next/server';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Replace with your image domains
    formats: ['image/avif', 'image/webp']
},
  experimental: {
    optimizeImages: true
},
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ]
},
    ];
  }
};

export default nextConfig;