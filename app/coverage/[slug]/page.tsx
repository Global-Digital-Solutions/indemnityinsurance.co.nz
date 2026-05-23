import { notFound } from 'next/navigation'
import Link from 'next/link'
import { coverageTypes } from '../../../data/coverage-types'
import QuoteForm from '../../../components/QuoteForm'
import PriceTag from '../../../components/PriceTag'
import { SITE } from '../../../data/site'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return coverageTypes.map(ct => ({ slug: ct.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const ct = coverageTypes.find(c => c.slug === slug)
  if (!ct) return {}
  return {
    title: `${ct.name} NZ | IndemnityInsurance.co.nz`,
    description: ct.shortDesc,
    alternates: { canonical: `https://www.indemnityinsurance.co.nz/coverage/${slug}/` },
    openGraph: {
      title: `${ct.name} NZ | IndemnityInsurance.co.nz`,
      description: ct.shortDesc,
      url: `https://www.indemnityinsurance.co.nz/coverage/${slug}/`,
      images: [{ url: ct.image, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${ct.name} NZ`,
      description: ct.shortDesc,
      images: [ct.image],
    },
  }
}

export default async function CoverageTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const ct = coverageTypes.find(c => c.slug === slug)
  if (!ct) notFound()

  const related = coverageTypes.filter(c => c.slug !== slug).slice(0, 3)

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="relative text-white py-14"
        style={{ backgroundImage: `linear-gradient(to bottom right, rgba(17,24,39,0.88) 0%, rgba(31,41,55,0.65) 60%, rgba(17,24,39,0.92) 100%), url('${ct.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/coverage/" className="text-brand-300 hover:text-white text-sm font-semibold mb-4 inline-block">← All Coverage Types</Link>
          <div className="flex items-start gap-4">
            <span className="text-5xl">{ct.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3">{ct.name}</h1>
              <p className="text-brand-200 text-lg max-w-2xl">{ct.shortDesc}</p>
              <div className="mt-4">
                <PriceTag price={ct.avgCost} className="inline-block bg-gold-500/20 border border-gold-400/40 text-gold-400 text-sm font-bold px-3 py-1 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About {ct.name}</h2>
              <p className="text-slate-700 leading-relaxed">{ct.description}</p>
            </div>

            {/* Who needs / What covers */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Who Needs This Cover</h3>
                <ul className="space-y-3">
                  {ct.whoNeeds.map(item => (
                    <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                      <span className="text-brand-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">What&apos;s Covered</h3>
                <ul className="space-y-3">
                  {ct.whatCovers.map(item => (
                    <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                      <span className="text-brand-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Related */}
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Related Coverage Types</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map(r => (
                  <Link key={r.slug} href={`/coverage/${r.slug}/`}
                    className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:bg-brand-50 hover:border-brand-300 transition">
                    <span className="text-2xl">{r.icon}</span>
                    <div>
                      <p className="font-semibold text-slate-900 text-xs">{r.name}</p>
                      <p className="text-xs text-brand-600">Learn more →</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Profession links */}
            <div className="bg-brand-50 rounded-xl p-8 border border-brand-200">
              <h3 className="text-xl font-bold text-brand-900 mb-2">See Coverage By Profession</h3>
              <p className="text-brand-700 text-sm mb-4">Get tailored guidance for your specific profession — including mandatory requirements and cost benchmarks.</p>
              <Link href="/professions/" className="inline-block bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors">
                View All Professions →
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <QuoteForm variant="compact" />
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  ['/professional-indemnity-insurance/', 'PI Insurance Guide'],
                  ['/pi-insurance-cost/', 'PI Insurance Cost'],
                  ['/indemnity-insurance-for-contractors/', 'Contractor Guide'],
                  ['/compare/', 'Compare Providers'],
                  ['/faq/', 'FAQs'],
                ].map(([href, label]) => (
                  <li key={href}><Link href={href} className="text-sm text-brand-700 hover:text-brand-800 hover:underline">{label} →</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `${ct.name} — ${SITE.name}`,
        description: ct.description,
        provider: { '@type': 'InsuranceAgency', name: SITE.name, url: SITE.domain },
        areaServed: { '@type': 'Country', name: 'New Zealand' },
        url: `https://www.indemnityinsurance.co.nz/coverage/${ct.slug}/`,
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.indemnityinsurance.co.nz/' },
          { '@type': 'ListItem', position: 2, name: 'Coverage Types', item: 'https://www.indemnityinsurance.co.nz/coverage/' },
          { '@type': 'ListItem', position: 3, name: ct.name, item: `https://www.indemnityinsurance.co.nz/coverage/${ct.slug}/` },
        ],
      })}} />
    </div>
  )
}
