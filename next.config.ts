import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Production WordPress domain
      {
        protocol: 'https',
        hostname: 'rwua.com.np',
        port: '',
        pathname: '/**',
      },
      // Local development fallback
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/nextjs_project/**',
      },
      // Allow all HTTPS images (for flexibility)
      {
        protocol: 'https',
        hostname: '**',
      },
      // Allow all HTTP images (for development)
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    // Add image optimization settings
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  // Remove hardcoded env vars - use .env.local instead
  experimental: {
    // Server actions are enabled by default in Next.js 14+
  },
  // Add headers for CORS if needed
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ];
  },
};

export default nextConfig;