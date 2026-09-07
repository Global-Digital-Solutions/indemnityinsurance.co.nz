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
      // Four topics each existed at two URLs — a standalone page and a
      // /coverage/ entry with the same H1 and the same subject. On a domain
      // with this little authority, splitting the strongest topical signals
      // across duplicate URLs is expensive. The /coverage/ entries carry
      // roughly twice the copy, so they are canonical and the standalones
      // redirect into them. Verified 7 Sep 2026 against the SE Ranking audit,
      // which flagged the duplicate H1s.
      { source: '/professional-indemnity-insurance', destination: '/coverage/professional-indemnity/', permanent: true },
      { source: '/statutory-liability-insurance',    destination: '/coverage/statutory-liability/',    permanent: true },
      { source: '/employers-liability-insurance',    destination: '/coverage/employers-liability/',    permanent: true },
      { source: '/run-off-cover-insurance',          destination: '/coverage/run-off-cover/',          permanent: true },
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
