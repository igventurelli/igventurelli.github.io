const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//           {
//             protocol: 'https',
//             hostname: 'cdn-images-1.medium.com'
//           },
//         ],
//     },
// }
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn-images-1.medium.com'
        },
      ],
  },
};

module.exports = withContentlayer(nextConfig)