import { notFound } from 'next/navigation'
import Link from 'next/link'
import { professionTypes } from '../../../data/profession-types'
import QuoteForm from '../../../components/QuoteForm'
import PriceTag from '../../../components/PriceTag'
import { SITE } from '../../../data/site'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return professionTypes.map(pt => ({ slug: pt.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const pt = professionTypes.find(p => p.slug === slug)
  if (!pt) return {}
  return {
    title: `${pt.name} Insurance NZ | IndemnityInsurance.co.nz`,
    description: pt.shortDesc,
    alternates: { canonical: `https://www.indemnityinsurance.co.nz/professions/${slug}/` },
    openGraph: {
      title: `${pt.name} Insurance NZ`,
      description: pt.shortDesc,
      url: `https://www.indemnityinsurance.co.nz/professions/${slug}/`,
      images: [{ url: pt.image, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${pt.name} Insurance NZ`,
      description: pt.shortDesc,
      images: [pt.image],
    },
  }
}

export default async function ProfessionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pt = professionTypes.find(p => p.slug === slug)
  if (!pt) notFound()

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="relative text-white py-14"
        style={{ backgroundImage: `linear-gradient(to bottom right, rgba(17,24,39,0.88) 0%, rgba(31,41,55,0.65) 60%, rgba(17,24,39,0.92) 100%), url('${pt.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/professions/" className="text-brand-300 hover:text-white text-sm font-semibold mb-4 inline-block">← All Professions</Link>
          <div className="flex items-start gap-4">
            <span className="text-5xl">{pt.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3">{pt.name}</h1>
              <p className="text-brand-200 text-lg max-w-2xl">{pt.shortDesc}</p>
              <div className="mt-4">
                <PriceTag price={pt.avgCost} className="inline-block bg-gold-500/20 border border-gold-400/40 text-gold-400 text-sm font-bold px-3 py-1 rounded-full" />
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
              <h2 className="text-2xl font-bold text-slate-900 mb-4">PI Insurance for {pt.name}</h2>
              <p className="text-slate-700 leading-relaxed">{pt.description}</p>
            </div>

            {/* Coverage needed + Key risks */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Coverage You Need</h3>
                <ul className="space-y-3">
                  {pt.coverageNeeded.map(item => (
                    <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                      <span className="text-brand-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Key Professional Risks</h3>
                <ul className="space-y-3">
                  {pt.keyRisks.map(item => (
                    <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                      <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">!</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQs */}
            {pt.faqs.length > 0 && (
              <div className="bg-white rounded-xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {pt.faqs.map((faq, i) => (
                    <details key={i} className="border border-slate-200 rounded-lg p-4 cursor-pointer hover:bg-slate-50">
                      <summary className="font-semibold text-slate-900 flex items-center justify-between text-sm">
                        <span>{faq.q}</span>
                        <span className="text-brand-600 text-lg flex-shrink-0 ml-4">+</span>
                      </summary>
                      <div className="mt-4 text-slate-700 text-sm leading-relaxed pt-3 border-t border-slate-200">{faq.a}</div>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <QuoteForm variant="compact" />
            <div className="bg-brand-900 rounded-xl p-6 text-white">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-bold text-lg mb-2">Cover Check</h3>
              <p className="text-brand-300 text-sm mb-4">Not sure if your current policy covers all your activities? A licensed adviser can review your existing PI cover.</p>
              <Link href="/contact/" className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-bold py-2 px-5 rounded-lg text-sm transition-colors">
                Request a Review →
              </Link>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">Explore Coverage Types</h3>
              <ul className="space-y-2">
                {[
                  ['/coverage/professional-indemnity/', 'Professional Indemnity'],
                  ['/coverage/public-liability/', 'Public Liability'],
                  ['/coverage/management-liability/', 'Management Liability'],
                  ['/coverage/statutory-liability/', 'Statutory Liability'],
                  ['/coverage/run-off-cover/', 'Run-off Cover'],
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
        name: `PI Insurance for ${pt.name} — ${SITE.name}`,
        description: pt.shortDesc,
        provider: { '@type': 'InsuranceAgency', name: SITE.name, url: SITE.domain },
        areaServed: { '@type': 'Country', name: 'New Zealand' },
        url: `https://www.indemnityinsurance.co.nz/professions/${pt.slug}/`,
      })}} />
      {pt.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: pt.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        })}} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.indemnityinsurance.co.nz/' },
          { '@type': 'ListItem', position: 2, name: 'Professions', item: 'https://www.indemnityinsurance.co.nz/professions/' },
          { '@type': 'ListItem', position: 3, name: pt.name, item: `https://www.indemnityinsurance.co.nz/professions/${pt.slug}/` },
        ],
      })}} />
    </div>
  )
}
