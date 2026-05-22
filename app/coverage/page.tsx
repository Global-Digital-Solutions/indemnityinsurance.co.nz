import Link from 'next/link'
import { coverageTypes } from '../../data/coverage-types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coverage Types | Professional & Liability Insurance NZ',
  description: 'Explore professional indemnity, public liability, management liability, statutory liability, D&O and run-off cover options for NZ businesses.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/coverage/' },
}

export default function CoveragePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Coverage Types</h1>
          <p className="text-brand-300 text-lg max-w-2xl">Professional indemnity, public liability, management liability, statutory liability, D&O and run-off cover — for professionals and businesses.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverageTypes.map(ct => (
            <Link key={ct.slug} href={`/coverage/${ct.slug}/`}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-brand-300 transition-all">
              <div className="h-40 overflow-hidden">
                <img src={ct.image} alt={ct.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl flex-shrink-0">{ct.icon}</span>
                  <div>
                    <h2 className="font-bold text-slate-900 group-hover:text-brand-700 transition">{ct.name}</h2>
                    <div className="text-xs font-bold text-brand-600 mt-0.5">{ct.avgCost}</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{ct.shortDesc}</p>
                <div className="mt-4 text-sm font-bold text-brand-700">Learn More →</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-brand-900 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-extrabold mb-3">Not Sure Which Cover You Need?</h2>
          <p className="text-brand-300 mb-6">Our licensed advisers will assess your specific risk profile and recommend the right coverage — at no cost to you.</p>
          <Link href="/contact/" className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
            Get Expert Advice →
          </Link>
        </div>
      </div>
    </div>
  )
}
