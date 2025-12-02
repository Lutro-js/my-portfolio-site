/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true, // Next.jsの画像最適化を無効化
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
  
  module.exports = nextConfig;
  