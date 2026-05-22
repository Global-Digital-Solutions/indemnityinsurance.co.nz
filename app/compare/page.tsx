import Link from 'next/link'
import { providers } from '../../data/providers'
import QuoteForm from '../../components/QuoteForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compare PI Insurance Providers NZ | IndemnityInsurance.co.nz',
  description: 'Compare professional indemnity insurance providers in New Zealand — QBE, Dual, BHSI, Vero, AIG. Find the right insurer for your profession and risk profile.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/compare/' },
}

const comparisonData = [
  { feature: 'Cover limits available', values: ['$250K–$20M+', '$250K–$20M+', 'Up to $20M+', '$250K–$10M', '$1M–$20M+'] },
  { feature: 'Defence costs', values: ['Inside or outside limit', 'Inside or outside limit', 'Outside limit', 'Inside limit', 'Outside limit (some products)'] },
  { feature: 'Run-off cover', values: ['Available', 'Available', 'Available', 'Available', 'Available'] },
  { feature: 'NZ claims team', values: ['✓', '✓', '✓', '✓', '✓'] },
  { feature: 'Best for', values: ['Complex professions', 'IT & tech', 'Engineering & large accounts', 'SME management liability', 'Financial services PI'] },
]

export default function ComparePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Compare PI Insurance Providers</h1>
          <p className="text-brand-300 text-lg max-w-2xl">Professional indemnity insurance in NZ is provided by a small number of specialist insurers. Here is how the key players compare — and how a licensed adviser can access the best terms for you.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Provider cards */}
            <div className="space-y-5">
              {providers.map(p => (
                <div key={p.name} className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl flex-shrink-0">{p.logo}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                        <h2 className="font-bold text-slate-900">{p.name}</h2>
                        {p.nzPresence && <span className="text-xs bg-green-100 text-green-700 font-bold px-2.5 py-0.5 rounded-full border border-green-200">NZ Present</span>}
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{p.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {p.coverageTypes.map(ct => (
                          <span key={ct} className="text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded border border-brand-200">{ct}</span>
                        ))}
                      </div>
                      <ul className="space-y-1">
                        {p.strengths.map(s => (
                          <li key={s} className="text-xs text-slate-600 flex items-center gap-2">
                            <span className="text-brand-600">✓</span> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison table */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="bg-brand-900 px-6 py-4">
                <h2 className="text-white font-bold">Policy Feature Comparison</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200 min-w-[150px]">Feature</th>
                      {providers.map(p => (
                        <th key={p.name} className="text-center px-4 py-3 font-semibold text-slate-700 border-b border-slate-200 min-w-[130px]">{p.name.split(' ')[0]}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-4 py-3 font-medium text-slate-700 border-b border-slate-100">{row.feature}</td>
                        {row.values.map((val, j) => (
                          <td key={j} className="px-4 py-3 text-center text-slate-600 border-b border-slate-100 text-xs">{val}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl border border-amber-200 p-6">
              <p className="text-amber-900 text-sm leading-relaxed">
                <strong>Important:</strong> Policy features and pricing vary significantly between insurers and depend on your specific profession, revenue, claims history and risk profile. The comparison above is indicative only. A licensed NZ insurance adviser can provide a personalised comparison for your specific situation and negotiate better terms than are available directly.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <QuoteForm variant="compact" />
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">Why Use an Adviser?</h3>
              <ul className="space-y-2">
                {[
                  'Access to all major PI insurers in NZ',
                  'Policy wording comparison — not just price',
                  'Negotiation of retroactive dates and excesses',
                  'Ongoing claims support and advocacy',
                  'Annual renewal comparison and benchmarking',
                ].map(item => (
                  <li key={item} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="text-brand-600 mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
