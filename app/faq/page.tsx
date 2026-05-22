import Link from 'next/link'
import { faqs } from '../../data/faqs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PI Insurance FAQs | IndemnityInsurance.co.nz',
  description: 'Frequently asked questions about professional indemnity insurance in New Zealand — costs, cover types, regulatory requirements and how to get covered.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/faq/' },
}

export default function FaqPage() {
  const categories = Array.from(new Set(faqs.map(f => f.category).filter(Boolean)))

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Frequently Asked Questions</h1>
          <p className="text-brand-300 text-lg">Common questions about professional indemnity and liability insurance in New Zealand.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categories.map(cat => (
          <div key={cat} className="mb-10">
            <h2 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">{cat}</h2>
            <div className="space-y-3">
              {faqs.filter(f => f.category === cat).map((faq, i) => (
                <details key={i} className="bg-white border border-slate-200 rounded-xl p-5 cursor-pointer hover:bg-slate-50">
                  <summary className="font-semibold text-slate-900 flex items-center justify-between text-sm">
                    <span>{faq.q}</span>
                    <span className="text-brand-600 text-lg flex-shrink-0 ml-4">+</span>
                  </summary>
                  <div className="mt-4 text-slate-700 text-sm leading-relaxed pt-3 border-t border-slate-200">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-brand-900 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-extrabold mb-3">Have More Questions?</h2>
          <p className="text-brand-300 mb-6">Our licensed advisers can answer your specific questions about PI insurance for your profession.</p>
          <Link href="/contact/" className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
            Speak to an Adviser →
          </Link>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  )
}
