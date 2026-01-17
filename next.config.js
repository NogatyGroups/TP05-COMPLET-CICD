/** @type {import('next').NextConfig} */
const nextConfig = {
  /**experimental: {
    appDir: true,
  }, */
  serverExternalPackages : ['jsonpath'],

};


module.exports = nextConfig;


// next.config.js
module.exports = {
  env: {
    NEXT_PUBLIC_ENVIRONMENT_KEY: process.env.NEXT_PUBLIC_ENVIRONMENT_KEY,
  },
};

