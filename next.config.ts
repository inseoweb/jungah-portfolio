import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ 빌드할 때 ESLint 에러 무시
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
