/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'indemnityinsurance.co.nz' }],
        destination: 'https://www.indemnityinsurance.co.nz/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
