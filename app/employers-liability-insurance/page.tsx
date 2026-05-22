import Link from 'next/link'
import QuoteForm from '../../components/QuoteForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Employers Liability Insurance NZ 2026 — Staff Injury & Claims',
  description: 'Employers liability insurance NZ fills ACC gaps and covers legal costs from employee claims not covered by ACC — including stress, harassment, disease and loss of earnings claims.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/employers-liability-insurance/' },
}

export default function EmployersLiabilityPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Employers Liability Insurance NZ</h1>
          <p className="text-brand-300 text-lg max-w-2xl">Employers liability insurance covers NZ businesses for employee claims that fall outside ACC — including stress, harassment, occupational disease and claims above ACC entitlements.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Does ACC Cover Everything?</h2>
              <p className="text-slate-700 leading-relaxed mb-4">New Zealand&apos;s ACC scheme provides a no-fault compensation system for personal injury caused by accident. However, ACC does not cover everything — and its coverage has significant limits that leave NZ employers exposed to claims they may not have anticipated.</p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
                <h3 className="font-bold text-amber-900 text-sm mb-2">ACC Gaps That Employers Liability Fills</h3>
                <ul className="space-y-1">
                  {[
                    'Work-related mental injury (stress, anxiety, PTSD — ACC covers physical injury only)',
                    'Gradual process injuries with disputed causation',
                    'Occupational disease claims from long-term exposure',
                    'Claims for loss of earnings above ACC&apos;s 80% compensation cap',
                    'Legal costs defending Employment Court or ERA claims',
                    'Damages claims from employees who sue despite ACC entitlement',
                    'Contractor injuries where employment relationship is disputed',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-amber-800">
                      <span className="font-bold mt-0.5">→</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-slate-700 leading-relaxed">Employers liability insurance bridges these ACC gaps and provides cover for legal defence costs and damages from employee claims — including those brought to the Employment Relations Authority, Employment Court, or High Court.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What Employers Liability Insurance Covers</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { covered: true, item: 'Work-related stress and psychiatric injury claims' },
                  { covered: true, item: 'Occupational disease (noise-induced hearing loss, RSI, respiratory)' },
                  { covered: true, item: 'Gradual process injuries (manual handling, repetitive strain)' },
                  { covered: true, item: 'Legal defence costs for Employment Court proceedings' },
                  { covered: true, item: 'Damages not covered or rejected by ACC' },
                  { covered: true, item: 'Contractor and labour-hire worker claims' },
                  { covered: false, item: 'Injuries fully covered and accepted by ACC' },
                  { covered: false, item: 'Unjustified dismissal or unfair treatment claims (need EPL cover)' },
                  { covered: false, item: 'Intentional harm or deliberate injury by employer' },
                  { covered: false, item: 'Fines and penalties under H&S legislation' },
                ].map(item => (
                  <div key={item.item} className="flex items-start gap-2 text-sm">
                    <span className={`mt-0.5 font-bold flex-shrink-0 ${item.covered ? 'text-green-600' : 'text-red-500'}`}>
                      {item.covered ? '✓' : '✗'}
                    </span>
                    <span className="text-slate-700">{item.item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Employers Liability vs Employment Practices Liability</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-900 text-white">
                      <th className="text-left px-4 py-3">Cover Type</th>
                      <th className="text-left px-4 py-3">What It Covers</th>
                      <th className="text-left px-4 py-3">Common Claims</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-4 py-3 border-b border-slate-100 font-semibold text-brand-700">Employers Liability</td>
                      <td className="px-4 py-3 border-b border-slate-100 text-slate-700">Physical or psychiatric injury from work</td>
                      <td className="px-4 py-3 border-b border-slate-100 text-slate-600">Stress injury, occupational disease, ACC-gap claims</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 py-3 border-b border-slate-100 font-semibold text-brand-700">Employment Practices Liability (EPL)</td>
                      <td className="px-4 py-3 border-b border-slate-100 text-slate-700">Wrongful employment acts: dismissal, discrimination, harassment</td>
                      <td className="px-4 py-3 border-b border-slate-100 text-slate-600">Unjustified dismissal, sexual harassment, bullying at work</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 border-b border-slate-100 font-semibold text-brand-700">Statutory Liability</td>
                      <td className="px-4 py-3 border-b border-slate-100 text-slate-700">Defence costs for statutory prosecution</td>
                      <td className="px-4 py-3 border-b border-slate-100 text-slate-600">WorkSafe prosecution, H&S Act breach, regulatory investigation</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 py-3 font-semibold text-brand-700">Management Liability</td>
                      <td className="px-4 py-3 text-slate-700">Combines EL + EPL + SL + D&O in one policy</td>
                      <td className="px-4 py-3 text-slate-600">Broad employee and management risk cover in one package</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-3">Many NZ businesses purchase a Management Liability policy that combines all of these covers under a single limit and one premium.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Cost of Employers Liability Insurance NZ</h2>
              <p className="text-slate-700 leading-relaxed mb-4">Employers liability is usually bundled into a Management Liability policy. Standalone employers liability cover typically costs:</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { size: 'Small business (1–5 staff)', cost: '$600–$1,200/year', note: 'Office-based, low physical risk' },
                  { size: 'Medium business (6–20 staff)', cost: '$1,200–$3,000/year', note: 'Mix of physical and office-based work' },
                  { size: 'Larger business (20+ staff)', cost: '$3,000+/year', note: 'Depends on industry and risk profile' },
                ].map(item => (
                  <div key={item.size} className="border border-slate-200 rounded-lg p-4 text-center">
                    <div className="font-bold text-slate-900 text-sm mb-1">{item.size}</div>
                    <div className="text-brand-700 font-extrabold text-lg mb-1">{item.cost}</div>
                    <div className="text-xs text-slate-500">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="space-y-6">
            <QuoteForm variant="compact" />
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">Related Cover</h3>
              <ul className="space-y-2">
                {[
                  ['/coverage/management-liability/', 'Management Liability'],
                  ['/statutory-liability-insurance/', 'Statutory Liability'],
                  ['/coverage/directors-officers/', 'Directors & Officers'],
                  ['/coverage/public-liability/', 'Public Liability'],
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
