/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com',
      'media.istockphoto.com',
      'firebasestorage.googleapis.com'
    ],
  },
  reactStrictMode: false,
}

module.exports = nextConfig
