import { notFound } from 'next/navigation'
import Link from 'next/link'
import { coverageTypes } from '../../../data/coverage-types'
import { authors } from '../../../data/authors'
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
  const author = authors.find(a => a.slug === ct.author)

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="relative text-white py-14"
        style={{ backgroundImage: `linear-gradient(to bottom right, rgba(17,24,39,0.88) 0%, rgba(31,41,55,0.65) 60%, rgba(17,24,39,0.92) 100%), url('${ct.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/coverage/" className="text-brand-300 hover:text-white text-sm font-semibold mb-4 inline-block">← All Coverage Types</Link>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">{ct.name}</h1>
            <p className="text-brand-200 text-lg max-w-2xl">{ct.shortDesc}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <PriceTag price={ct.avgCost} className="inline-block bg-gold-500/20 border border-gold-400/40 text-gold-400 text-sm font-bold px-3 py-1 rounded-full" />
              {author && <span className="text-brand-300 text-sm">by {author.name}</span>}
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

            {/* Long-form content */}
            {ct.longFormContent && (
              <div className="bg-white rounded-xl p-8 border border-slate-200">
                <div className="prose-indemnity" dangerouslySetInnerHTML={{ __html: ct.longFormContent }} />
              </div>
            )}

            {/* FAQs */}
            {ct.faqs && ct.faqs.length > 0 && (
              <div className="bg-white rounded-xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {ct.faqs.map((faq, i) => (
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

            {/* Related coverage */}
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

            {/* Profession CTA */}
            <div className="bg-brand-50 rounded-xl p-8 border border-brand-200">
              <h3 className="text-xl font-bold text-brand-900 mb-2">See Coverage By Profession</h3>
              <p className="text-brand-700 text-sm mb-4">Get tailored guidance for your specific profession — including mandatory requirements and cost benchmarks.</p>
              <Link href="/professions/" className="inline-block bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors">
                View All Professions →
              </Link>
            </div>

            {/* Author card */}
            {author && (
              <div className="bg-white rounded-xl border border-slate-200 p-6 flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">{author.initials}</div>
                <div>
                  <div className="font-bold text-slate-900">{author.name}</div>
                  <div className="text-brand-700 text-sm font-medium mb-2">{author.title}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{author.shortBio}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {author.expertise.slice(0, 3).map(e => (
                      <span key={e} className="text-xs bg-brand-50 text-brand-700 border border-brand-200 px-2 py-0.5 rounded-full">{e}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <QuoteForm variant="compact" />

            {/* Key stats */}
            {ct.keyStats && ct.keyStats.length > 0 && (
              <div className="bg-brand-900 rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-4">Key Facts</h3>
                <div className="space-y-4">
                  {ct.keyStats.map(stat => (
                    <div key={stat.label} className="border-b border-brand-700 pb-3 last:border-0 last:pb-0">
                      <div className="text-brand-300 text-xs mb-1">{stat.label}</div>
                      <div className="text-white font-bold">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Cover review */}
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <div className="text-2xl mb-3">📋</div>
              <h3 className="font-bold text-slate-900 mb-2">Cover Review</h3>
              <p className="text-slate-600 text-sm mb-4">Not sure if your current policy covers all your activities? A licensed adviser can review your existing cover.</p>
              <Link href="/contact/" className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-bold py-2 px-5 rounded-lg text-sm transition-colors">
                Request a Review →
              </Link>
            </div>

            {/* Coverage nav */}
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">All Coverage Types</h3>
              <ul className="space-y-2">
                {[
                  ['/coverage/professional-indemnity/', 'Professional Indemnity'],
                  ['/coverage/public-liability/', 'Public Liability'],
                  ['/coverage/management-liability/', 'Management Liability'],
                  ['/coverage/statutory-liability/', 'Statutory Liability'],
                  ['/coverage/run-off-cover/', 'Run-off Cover'],
                  ['/coverage/employers-liability/', "Employers' Liability"],
                  ['/coverage/directors-officers/', "Directors' & Officers'"],
                ].filter(([href]) => href !== `/coverage/${ct.slug}/`).map(([href, label]) => (
                  <li key={href}><Link href={href} className="text-sm text-brand-700 hover:text-brand-800 hover:underline">{label} →</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `${ct.name} — ${SITE.name}`,
        description: ct.description,
        provider: { '@type': 'InsuranceAgency', name: SITE.name, url: SITE.domain },
        areaServed: { '@type': 'Country', name: 'New Zealand' },
        url: `https://www.indemnityinsurance.co.nz/coverage/${ct.slug}/`,
      })}} />
      {ct.faqs && ct.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: ct.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        })}} />
      )}
      {author && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: `${ct.name} — NZ Guide`,
          description: ct.shortDesc,
          url: `https://www.indemnityinsurance.co.nz/coverage/${ct.slug}/`,
          author: { '@type': 'Person', name: author.name, jobTitle: author.title, worksFor: { '@type': 'Organization', name: SITE.name } },
          publisher: { '@type': 'Organization', name: SITE.name, url: SITE.domain },
          dateModified: '2026-05-23',
        })}} />
      )}
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
