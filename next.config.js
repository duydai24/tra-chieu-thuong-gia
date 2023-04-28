const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
  // Đoạn mã của bạn ở đây
  useFileSystemPublicRoutes: true,
  compress: false,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  reactStrictMode: true,
};

module.exports = withPlugins([
  withImages,
], nextConfig);
