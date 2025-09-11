/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Ensure modern JSX runtime is used
  },
  experimental: {
    forceSwcTransforms: true
  }
};

export default nextConfig;
