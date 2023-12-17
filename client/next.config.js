/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: ''
      },
    ],
  },
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/api",
        destination: "http://localhost:8000/api",
      },
    ];
  }
}

module.exports = nextConfig
