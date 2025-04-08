/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/dev-portfolio',
  assetPrefix: '/dev-portfolio/',
  images: {
    unoptimized: true, // <-- required for static export
  },
};

export default nextConfig;
