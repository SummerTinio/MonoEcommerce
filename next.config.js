// "with Transpile Modules"
const withTranspileModules = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
  '@mui/icons-material', // If @mui/icons-material is being used
]);

/** @type {import('next').NextConfig} */
module.exports = withTranspileModules({
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  /**
   *
   * webpack config for resolving aliases
   * maps styled engine to styled-engine-sc (specifically for styled components)
   */
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    };
    return config;
  },
});
