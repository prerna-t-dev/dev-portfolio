/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
// Set to true when using a custom domain (configured in GitHub Settings)
const useCustomDomain = process.env.USE_CUSTOM_DOMAIN === 'true';

const nextConfig = {
  trailingSlash: true, 
  output: 'export',
  // Remove basePath when using custom domain
  basePath: (isProd && !useCustomDomain) ? '/dev-portfolio' : '',
  assetPrefix: (isProd && !useCustomDomain) ? '/dev-portfolio/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
