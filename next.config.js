
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  //basePath: '/apps',

  useFileSystemPublicRoutes: true,

  compress: false,
  poweredByHeader: false,

  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  }
  //reactStrictMode: true,

};

module.exports = withPlugins([

], nextConfig);