/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    register: true,
    skipWaiting: true,
    cacheOnFrontEndNav: true,
});

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'localhost',
                port: '3000',
            },
        ],
    },
    reactStrictMode: false,
};

module.exports = withPWA(nextConfig);
