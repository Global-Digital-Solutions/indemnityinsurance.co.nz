import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Indemnity Insurance NZ | Professional & Liability Insurance Specialists',
    template: '%s | IndemnityInsurance.co.nz',
  },
  description: 'Professional indemnity and liability insurance for NZ professionals. Compare PI, public liability, management liability and statutory liability. Expert guidance from NZ-licensed advisers.',
  metadataBase: new URL('https://www.indemnityinsurance.co.nz'),
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://www.indemnityinsurance.co.nz',
    siteName: 'IndemnityInsurance.co.nz',
    title: 'Indemnity Insurance NZ | Professional & Liability Insurance Specialists',
    description: 'Compare professional indemnity and liability insurance in New Zealand. Expert guidance for consultants, accountants, engineers, IT professionals and more.',
    images: [{
      url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&auto=format&fit=crop&q=80',
      width: 1200,
      height: 630,
      alt: 'Professional Indemnity Insurance New Zealand',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indemnity Insurance NZ | Professional & Liability Insurance Specialists',
    description: 'Compare professional indemnity and liability insurance in NZ. Licensed advisers. Quote within one business day.',
    images: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&auto=format&fit=crop&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: 'https://www.indemnityinsurance.co.nz',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'IndemnityInsurance.co.nz',
    url: 'https://www.indemnityinsurance.co.nz',
    description: 'Professional indemnity and liability insurance referral service for NZ professionals. We connect businesses with NZ-licensed insurance advisers.',
    address: { '@type': 'PostalAddress', addressCountry: 'NZ' },
    contactPoint: { '@type': 'ContactPoint', email: 'hello@cover4you.co.nz', contactType: 'Customer Service' },
    areaServed: { '@type': 'Country', name: 'New Zealand' },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://www.indemnityinsurance.co.nz',
    name: 'IndemnityInsurance.co.nz',
    description: 'Professional indemnity and liability insurance specialists for New Zealand professionals and businesses.',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: 'https://www.indemnityinsurance.co.nz/search?q={search_term_string}' },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang="en-NZ">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="bg-white text-slate-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
