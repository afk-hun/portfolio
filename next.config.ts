import { withPayload } from "@payloadcms/next/withPayload";
import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

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
};

const withNextIntl = createNextIntlPlugin();

// Make sure you wrap your `nextConfig`
// with the `withPayload` plugin
export default withNextIntl(withPayload(nextConfig));
