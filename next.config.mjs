/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    poweredByHeader: false,
    compress: true,
    images: {
      formats: ['image/avif'],
      minimumCacheTTL: 60,
    },
    reactStrictMode: true,
    swcMinify: true,
  };
  
  export default nextConfig;