/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  trailingSlash: true, 
  output: 'export',
  basePath: isProd ? '/dev-portfolio' : '',
  assetPrefix: isProd ? '/dev-portfolio/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
