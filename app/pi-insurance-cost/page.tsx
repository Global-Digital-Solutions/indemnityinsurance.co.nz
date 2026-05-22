import Link from 'next/link'
import QuoteForm from '../../components/QuoteForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PI Insurance Cost NZ 2026 — How Much Does It Cost?',
  description: 'Professional indemnity insurance costs in NZ range from $65–$300/month depending on profession, cover level and business size. Full breakdown and cost calculator guide.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/pi-insurance-cost/' },
}

export default function PiInsuranceCostPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">PI Insurance Cost — 2026 Guide</h1>
          <p className="text-brand-300 text-lg max-w-2xl">How much does professional indemnity insurance cost? A full breakdown by profession, cover level and the factors that affect your premium.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Average PI Insurance Cost in NZ</h2>
              <p className="text-slate-500 text-sm mb-4">Source: BizCover NZ FY2024 data, 4,000+ NZ businesses</p>
              <div className="bg-brand-50 border border-brand-200 rounded-xl p-5 mb-6 text-center">
                <div className="text-5xl font-extrabold text-brand-700">$85–$86</div>
                <div className="text-brand-600 text-sm font-semibold mt-1">Average monthly PI insurance premium for NZ small businesses</div>
              </div>
              <p className="text-slate-700 leading-relaxed">The NZ professional indemnity insurance market serves professionals from sole traders to large firms. The average premium across all professions is approximately $85–$86 per month, but the range is wide — from $50/month for low-risk marketing consultants to $300+/month for high-risk engineering firms.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">PI Insurance Cost By Profession (2026)</h2>
              <div className="space-y-3">
                {[
                  { prof: 'Architects & Engineers', range: '$160–$300/mo', reason: 'High-value construction defect claims; long limitation period' },
                  { prof: 'Mortgage Brokers', range: '$115–$200/mo', reason: 'FMCA regulatory risk; high transaction values' },
                  { prof: 'Recruitment Consultants', range: '$115–$160/mo', reason: 'Wrong-hire and misrepresentation exposure' },
                  { prof: 'Financial Advisers', range: '$100–$200/mo', reason: 'FMCA mandatory; investment loss exposure' },
                  { prof: 'IT Consultants', range: '$80–$150/mo', reason: 'System failure, data breach and outage risk' },
                  { prof: 'Real Estate Agents', range: '$90–$160/mo', reason: 'Misrepresentation and disclosure failures' },
                  { prof: 'Management Consultants', range: '$65–$130/mo', reason: 'Financial loss from strategic advice' },
                  { prof: 'Accountants', range: '$75–$120/mo', reason: 'Tax errors, incorrect financial statements' },
                  { prof: 'Marketers / PR / Comms', range: '$65–$100/mo', reason: 'Lower average claim values' },
                  { prof: 'Bookkeepers', range: '$60–$90/mo', reason: 'Similar to accountants; lower claim values' },
                ].map(item => (
                  <div key={item.prof} className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg">
                    <div className="flex-1">
                      <div className="font-bold text-slate-900 text-sm">{item.prof}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{item.reason}</div>
                    </div>
                    <div className="text-brand-700 font-bold text-sm flex-shrink-0">{item.range}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What Affects PI Insurance Cost?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { factor: 'Profession / risk profile', impact: 'Higher-risk professions pay significantly more' },
                  { factor: 'Annual revenue', impact: 'Higher revenue = larger potential claims = higher premium' },
                  { factor: 'Cover level', impact: '$1M costs roughly 20-35% more than $500K cover' },
                  { factor: 'Excess/deductible', impact: 'Higher excess reduces premium; check if excess applies to defence costs' },
                  { factor: 'Claims history', impact: 'Prior PI claims significantly increase premiums' },
                  { factor: 'Number of staff', impact: 'More people providing professional services = higher premium' },
                  { factor: 'Client type', impact: 'Government/enterprise clients increase exposure and cost' },
                  { factor: 'Scope of services', impact: 'Broader covered activities = higher premium' },
                ].map(item => (
                  <div key={item.factor} className="border border-slate-200 rounded-lg p-4">
                    <div className="font-bold text-slate-900 text-sm">{item.factor}</div>
                    <div className="text-xs text-slate-600 mt-1">{item.impact}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 rounded-xl border border-green-200 p-6">
              <h3 className="font-bold text-green-900 mb-2">Is PI Insurance Tax Deductible?</h3>
              <p className="text-green-800 text-sm">Yes — professional indemnity insurance premiums are a fully deductible business expense under the Income Tax Act 2007. For a sole trader on the 33% marginal rate, a $1,200/year PI premium costs only $804 after tax.</p>
            </div>
          </div>

          <div className="space-y-6">
            <QuoteForm variant="compact" />
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">Related Guides</h3>
              <ul className="space-y-2">
                {[
                  ['/professional-indemnity-insurance/', 'What Is PI Insurance?'],
                  ['/indemnity-insurance-for-contractors/', 'Contractor Guide'],
                  ['/coverage/run-off-cover/', 'Run-off Cover'],
                  ['/compare/', 'Compare Providers'],
                ].map(([href, label]) => (
                  <li key={href}><Link href={href} className="text-sm text-brand-700 hover:text-brand-800 hover:underline">{label} →</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
