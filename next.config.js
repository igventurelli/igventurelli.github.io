const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
// const nextConfig = {}
const nextConfig = {
    assetPrefix: '/igventurelli/',
    output: 'export',
    reactStrictMode: true,
};

module.exports = withContentlayer(nextConfig)