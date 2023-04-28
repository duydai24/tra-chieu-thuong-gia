const nextConfig = {
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

module.exports = nextConfig;

