/** @type {import('next').NextConfig} */
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig = {
  images: {
    domains: [], // Add the external domain here
  },
  experimental: {
    reactCompiler: false,
  },
};

export default withPayload(nextConfig);
