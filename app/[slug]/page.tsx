import { notFound } from 'next/navigation'
import Link from 'next/link'
import { landingPages } from '../../data/landing-pages'
import QuoteForm from '../../components/QuoteForm'
import { SITE } from '../../data/site'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return landingPages.map(lp => ({ slug: lp.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const lp = landingPages.find(p => p.slug === slug)
  if (!lp) return {}
  return {
    title: lp.metaTitle,
    description: lp.metaDescription,
    alternates: { canonical: `https://www.indemnityinsurance.co.nz/${slug}/` },
    openGraph: {
      title: lp.title,
      description: lp.metaDescription,
      url: `https://www.indemnityinsurance.co.nz/${slug}/`,
      images: [{ url: lp.image, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: lp.title,
      description: lp.metaDescription,
      images: [lp.image],
    },
  }
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const lp = landingPages.find(p => p.slug === slug)
  if (!lp) notFound()

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="relative text-white py-16"
        style={{ backgroundImage: `linear-gradient(to bottom right, rgba(17,24,39,0.90) 0%, rgba(31,41,55,0.65) 60%, rgba(17,24,39,0.93) 100%), url('${lp.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-brand-300 hover:text-white text-sm font-semibold mb-4 inline-block">← Home</Link>
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">{lp.h1}</h1>
              <p className="text-brand-200 text-lg max-w-2xl leading-relaxed">{lp.heroContent}</p>
            </div>
            <div className="lg:pt-2">
              <QuoteForm variant="compact" />
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-brand-800 text-brand-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-6 text-xs font-semibold">
          <span>✓ NZ-Licensed Advisers</span>
          <span>✓ Claims-Made PI Specialists</span>
          <span>✓ Quote Within 1 Business Day</span>
          <span>✓ No-Obligation Advice</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">

            {/* Excerpt / intro */}
            <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r-xl p-6">
              <p className="text-brand-900 text-lg font-medium leading-relaxed">{lp.excerpt}</p>
            </div>

            {/* Main body content */}
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <div className="prose-indemnity" dangerouslySetInnerHTML={{ __html: lp.bodyContent }} />
            </div>

            {/* FAQs */}
            {lp.faqs && lp.faqs.length > 0 && (
              <div className="bg-white rounded-xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {lp.faqs.map((faq, i) => (
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

            {/* Coverage types */}
            {lp.relatedCoverage && lp.relatedCoverage.length > 0 && (
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Related Coverage Types</h3>
                <div className="flex flex-wrap gap-3">
                  {lp.relatedCoverage.map(slug => (
                    <Link key={slug} href={`/coverage/${slug}/`}
                      className="text-sm bg-brand-50 border border-brand-200 text-brand-700 hover:bg-brand-100 px-4 py-2 rounded-lg font-medium transition-colors">
                      {slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} →
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Professions */}
            {lp.relatedProfessions && lp.relatedProfessions.length > 0 && (
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Coverage by Profession</h3>
                <div className="flex flex-wrap gap-3">
                  {lp.relatedProfessions.map(slug => (
                    <Link key={slug} href={`/professions/${slug}/`}
                      className="text-sm bg-slate-50 border border-slate-200 text-slate-700 hover:bg-brand-50 hover:border-brand-300 px-4 py-2 rounded-lg font-medium transition-colors">
                      {slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} →
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <QuoteForm variant="compact" />

            {/* Why use an adviser */}
            <div className="bg-brand-900 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">Why Use a Licensed Adviser?</h3>
              <div className="space-y-3 text-brand-200 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-gold-400 font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>Access to multiple NZ PI insurers — QBE, DUAL, BHSI, Vero and more</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold-400 font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>Policies reviewed against your actual contract obligations</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold-400 font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>Mandatory PI requirements confirmed for your profession</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold-400 font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>No extra cost — adviser fees are paid by the insurer</span>
                </div>
              </div>
            </div>

            {/* Cover check */}
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <div className="text-2xl mb-3">📋</div>
              <h3 className="font-bold text-slate-900 mb-2">Cover Check</h3>
              <p className="text-slate-600 text-sm mb-4">Not sure if your current policy covers all your activities? A licensed adviser can review your existing PI cover.</p>
              <Link href="/contact/" className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-bold py-2 px-5 rounded-lg text-sm transition-colors">
                Request a Review →
              </Link>
            </div>

            {/* Coverage links */}
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

      {/* Bottom CTA */}
      <div className="bg-brand-900 text-white py-14 mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Get Your PI Insurance Quote Today</h2>
          <p className="text-brand-300 text-lg mb-8">Licensed NZ advisers compare policies from multiple insurers and advise on the right cover for your profession and contract obligations.</p>
          <Link href="/contact/" className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-extrabold py-4 px-10 rounded-xl text-lg transition-colors shadow-lg">
            Get My Free Quote →
          </Link>
          <p className="text-brand-400 text-sm mt-4">No obligation · Quote within 1 business day · hello@cover4you.co.nz</p>
        </div>
      </div>

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: lp.title,
        description: lp.metaDescription,
        provider: { '@type': 'InsuranceAgency', name: SITE.name, url: SITE.domain },
        areaServed: { '@type': 'Country', name: 'New Zealand' },
        url: `https://www.indemnityinsurance.co.nz/${lp.slug}/`,
      })}} />
      {lp.faqs && lp.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: lp.faqs.map(faq => ({
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
          { '@type': 'ListItem', position: 2, name: lp.h1, item: `https://www.indemnityinsurance.co.nz/${lp.slug}/` },
        ],
      })}} />
    </div>
  )
}
