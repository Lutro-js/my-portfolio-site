/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // 静的サイトエクスポートを有効化
    images: {
      unoptimized: true, // Next.jsの画像最適化を無効化
    },
  };
  
  module.exports = nextConfig;
  