import { withPayload } from '@payloadcms/next/withPayload';
import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import type { Configuration } from 'webpack';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Your Next.js config here
//   experimental: {
//     reactCompiler: false,
//   },
// };

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        // port: '',
        // pathname: '/account123/**',
        // search: '',
      },
    ],
  },

  // webpack(config: Configuration) {
  //   // Remove the default SVG loader
  //   const fileLoaderRule = config.module?.rules?.find(
  //     (rule) =>
  //       typeof rule === 'object' &&
  //       rule?.test instanceof RegExp &&
  //       rule.test.test('.svg')
  //   );
  //   if (fileLoaderRule && typeof fileLoaderRule === 'object') {
  //     fileLoaderRule.exclude = /\.svg$/i;
  //   }

  //   // Add SVGR loader
  //   config.module?.rules?.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: ['@svgr/webpack'],
  //   });

  //   return config;
  // },
};

const withNextIntl = createNextIntlPlugin();

// Make sure you wrap your `nextConfig`
// with the `withPayload` plugin
export default withNextIntl(withPayload(nextConfig));
