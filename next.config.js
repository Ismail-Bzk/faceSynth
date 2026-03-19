const createNextIntlPlugin = require('next-intl/plugin');

// Link `next-intl` to the request config used by the App Router
// (see https://next-intl.dev/docs/getting-started/app-router).
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Optimisation des images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = withNextIntl(nextConfig);
