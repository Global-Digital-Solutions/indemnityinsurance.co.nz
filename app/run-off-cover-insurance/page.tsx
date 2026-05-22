import Link from 'next/link'
import QuoteForm from '../../components/QuoteForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Run-Off Cover Insurance NZ 2026 — PI Tail Cover for Retiring Professionals',
  description: 'Run-off cover (tail cover) extends your professional indemnity protection after you stop practising. Essential for NZ professionals retiring, selling up or changing careers.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/run-off-cover-insurance/' },
}

export default function RunOffCoverPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Run-Off Cover Insurance NZ</h1>
          <p className="text-brand-300 text-lg max-w-2xl">Run-off cover (also called tail cover) extends your professional indemnity insurance after you stop practising — protecting you from claims arising from past work when you no longer hold an active PI policy.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Run-Off Cover Is Essential</h2>
              <p className="text-slate-700 leading-relaxed mb-4">Professional indemnity insurance operates on a <strong>claims-made</strong> basis. This means the policy that responds to a claim is the one that is active <em>when the claim is made</em> — not when the work was done. This distinction is critical.</p>
              <p className="text-slate-700 leading-relaxed mb-4">If you retire, sell your practice, take a permanent employment role, or otherwise stop practising, your PI policy will lapse. From that moment, any future claim arising from your past professional work — even work done years ago — will have no active policy to respond to. You are personally exposed to the full cost of the claim.</p>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-bold text-red-900 text-sm mb-2">The Run-Off Risk in Practice</h3>
                <p className="text-red-800 text-sm">An accountant retires in 2024. In 2026, a former client discovers an error in their 2022 financial statements. The accountant&apos;s PI policy lapsed in 2024 — so there is no active policy to respond to the claim. Without run-off cover purchased at retirement, the accountant faces the claim personally. Legal defence costs alone can exceed $100,000.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Who Needs Run-Off Cover?</h2>
              <div className="space-y-3">
                {[
                  { who: 'Retiring Professionals', detail: 'Anyone winding down a professional practice — accountants, engineers, consultants, advisers, architects, lawyers' },
                  { who: 'Professionals Taking Employment', detail: 'Sole traders or partners moving from self-employment to employed roles — your employer\'s PI covers future work, not your past practice' },
                  { who: 'Business Sellers', detail: 'Selling your practice? The buyer\'s PI covers their future work. Past work under your ownership needs run-off cover purchased by you' },
                  { who: 'Contractors Returning to Permanent Employment', detail: 'IT contractors, management consultants and other professionals taking permanent roles after contracting' },
                  { who: 'Professionals Changing Careers', detail: 'Moving out of a regulated profession entirely — e.g., a financial adviser becoming a business owner in a different sector' },
                  { who: 'Deceased Estates', detail: 'Run-off cover can be purchased for the estate of a deceased professional where their past work may generate future claims' },
                ].map(item => (
                  <div key={item.who} className="border border-slate-200 rounded-lg p-4">
                    <div className="font-bold text-slate-900 text-sm">{item.who}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">How Long Should Run-Off Cover Last?</h2>
              <p className="text-slate-700 leading-relaxed mb-4">Limitation periods under the Limitation Act 2010 generally allow 6 years from the date a claim is discoverable. However, for some professional services — particularly construction, engineering, and advice relating to long-term financial structures — the exposure can extend well beyond 6 years.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-900 text-white">
                      <th className="text-left px-4 py-3">Profession</th>
                      <th className="text-center px-4 py-3">Recommended Run-Off Period</th>
                      <th className="text-left px-4 py-3">Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Architects & Engineers', '7–10 years', 'Building Act defect claims; long discovery periods'],
                      ['Accountants & Tax Advisers', '6 years', 'Standard NZ limitation period'],
                      ['Financial Advisers', '6–7 years', 'Investment advice consequences unfold over time'],
                      ['Lawyers & Solicitors', '6 years', 'Standard limitation period'],
                      ['IT Consultants', '3–6 years', 'Shorter discovery period; system failures usually apparent quickly'],
                      ['Management Consultants', '3–6 years', 'Depends on nature and scale of advice given'],
                      ['Healthcare Practitioners', '6–10 years', 'Medical claim discovery can be delayed significantly'],
                    ].map(([prof, period, reason], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-4 py-3 text-slate-700 border-b border-slate-100">{prof}</td>
                        <td className="px-4 py-3 text-center font-semibold text-brand-700 border-b border-slate-100">{period}</td>
                        <td className="px-4 py-3 text-slate-600 text-xs border-b border-slate-100">{reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Run-Off Cover Cost NZ</h2>
              <p className="text-slate-700 leading-relaxed mb-4">Run-off cover premiums are typically expressed as a multiple of the final year&apos;s annual premium. The longer the run-off period, the higher the cost:</p>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                {[
                  { period: '1 year run-off', cost: '~75% of annual premium', note: 'Short-term projects only' },
                  { period: '3 year run-off', cost: '~150% of annual premium', note: 'Minimum recommended for most professions' },
                  { period: '6 year run-off', cost: '~200–250% of annual premium', note: 'Standard recommended period' },
                ].map(item => (
                  <div key={item.period} className="border border-slate-200 rounded-lg p-4 text-center">
                    <div className="font-bold text-slate-900 text-sm mb-1">{item.period}</div>
                    <div className="text-brand-700 font-extrabold text-base mb-1">{item.cost}</div>
                    <div className="text-xs text-slate-500">{item.note}</div>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 text-sm">Some insurers offer a one-off &quot;extended reporting period&quot; endorsement purchased at the time of policy cancellation. Others require a separate run-off policy. Your insurance adviser can recommend the most cost-effective structure for your situation.</p>
            </div>

            <div className="bg-green-50 rounded-xl border border-green-200 p-6">
              <h3 className="font-bold text-green-900 mb-2">Negotiate Run-Off Terms Before You Need Them</h3>
              <p className="text-green-800 text-sm">The best time to negotiate run-off cover terms is when your existing PI policy is up for renewal — not at the point of retirement or departure. Some insurers include automatic run-off provisions in their base policy wordings. Ask your adviser to check your current policy wording for any built-in run-off provisions before purchasing separate cover.</p>
            </div>

          </div>

          <div className="space-y-6">
            <QuoteForm variant="compact" />
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">Related Guides</h3>
              <ul className="space-y-2">
                {[
                  ['/professional-indemnity-insurance/', 'What Is PI Insurance?'],
                  ['/pi-insurance-cost/', 'PI Insurance Costs'],
                  ['/coverage/run-off-cover/', 'Run-off Cover Details'],
                  ['/indemnity-insurance-for-contractors/', 'Contractor Guide'],
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
