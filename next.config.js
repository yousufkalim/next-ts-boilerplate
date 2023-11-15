/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ['page.ts', 'page.tsx'],
  webpack(config, { isServer, buildId, dev }) {
    // Run custom scripts
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    // Import `svg` files as React components
    config.module.rules.push({
      test: /\.svg$/,
      resourceQuery: { not: [/url/] },
      use: [{ loader: '@svgr/webpack', options: { svgo: false } }],
    });

    // Import videos, models, hdrs, and fonts
    config.module.rules.push({
      test: /\.(mp4|hdr|glb|woff|woff2)$/i,
      type: 'asset/resource',
    });

    // Force url import with `?url`
    config.module.rules.push({
      resourceQuery: /url/,
      type: 'asset/resource',
    });

    // Change build file names to update the cache
    if (!dev && config.output.filename.startsWith('static')) {
      config.output.filename = config.output.filename.replace('[name]', `[name]-${buildId}`);
      config.output.chunkFilename = config.output.chunkFilename.replace(
        '[name]',
        `[name]-${buildId}`,
      );
    }

    return config;
  },
  generateBuildId: async () => {
    const timestamp = Math.floor(Date.now() / 1000);
    return `build-${timestamp}`;
  },
};

module.exports = nextConfig;
