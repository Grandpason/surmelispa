/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/adana-masaj',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
