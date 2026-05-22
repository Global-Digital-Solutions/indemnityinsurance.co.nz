import Link from 'next/link'
import QuoteForm from '../../components/QuoteForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Indemnity Insurance for Contractors NZ 2026 — Sole Traders & Freelancers',
  description: 'Professional indemnity insurance for NZ contractors, sole traders and freelancers. From $65/month. Covers IT contractors, consultants, engineers and all professional contractors.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/indemnity-insurance-for-contractors/' },
}

export default function ContractorsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Indemnity Insurance for Contractors NZ</h1>
          <p className="text-brand-300 text-lg max-w-2xl">PI insurance for New Zealand contractors, sole traders and freelancers — what you need, how much it costs, and how to get covered fast.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Do Contractors Need PI Insurance?</h2>
              <p className="text-slate-700 leading-relaxed mb-4">If you provide professional advice, services or expertise to clients under contract, you are personally exposed to claims that your work caused them financial loss. Unlike permanent employees, contractors have no employer shield — you carry the risk directly.</p>
              <p className="text-slate-700 leading-relaxed mb-4">Most enterprise and government clients in New Zealand now require contractors to hold professional indemnity (PI) insurance as a condition of engagement. Common contract requirements are $1M–$2M per claim.</p>
              <p className="text-slate-700 leading-relaxed">Even where it is not contractually mandated, PI insurance is strongly recommended for any contractor whose work could result in a client suffering a financial loss if something goes wrong.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">PI Insurance for Common Contractor Types</h2>
              <div className="space-y-3">
                {[
                  {
                    type: 'IT Contractors & Developers',
                    risks: 'System failures, data loss, project delays, security vulnerabilities, missed deliverables',
                    cost: '$80–$150/mo',
                  },
                  {
                    type: 'Management & Business Consultants',
                    risks: 'Strategic advice that causes financial loss, project management errors, cost overruns',
                    cost: '$65–$130/mo',
                  },
                  {
                    type: 'Engineers & Architects',
                    risks: 'Design errors, specification failures, construction defects, long limitation periods',
                    cost: '$160–$300/mo',
                  },
                  {
                    type: 'Accountants & Bookkeepers',
                    risks: 'Tax filing errors, incorrect accounts, late filings, CAANZ practising requirement',
                    cost: '$60–$120/mo',
                  },
                  {
                    type: 'Marketing & PR Contractors',
                    risks: 'Campaign failure, IP infringement, misleading material, reputational claims',
                    cost: '$65–$100/mo',
                  },
                  {
                    type: 'Recruitment & HR Consultants',
                    risks: 'Wrong hire recommendations, misrepresentation, employment advice errors',
                    cost: '$115–$160/mo',
                  },
                  {
                    type: 'Healthcare & Allied Health',
                    risks: 'Professional negligence, patient harm, regulatory investigation costs',
                    cost: '$100–$250/mo',
                  },
                  {
                    type: 'Financial Services Contractors',
                    risks: 'FMCA mandatory for FAPs; investment advice errors, disclosure failures',
                    cost: '$100–$200/mo',
                  },
                ].map(item => (
                  <div key={item.type} className="border border-slate-200 rounded-lg p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="font-bold text-slate-900 text-sm">{item.type}</div>
                        <div className="text-xs text-slate-500 mt-1">{item.risks}</div>
                      </div>
                      <div className="text-brand-700 font-bold text-sm flex-shrink-0">{item.cost}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">Costs based on BizCover NZ FY2024 data. Actual premiums vary by revenue, claims history and cover level.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What PI Insurance Covers for Contractors</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { covered: true, item: 'Legal defence costs if a client sues you' },
                  { covered: true, item: 'Compensation and damages awarded against you' },
                  { covered: true, item: 'Errors and omissions in your professional work' },
                  { covered: true, item: 'Claims arising from negligent advice or services' },
                  { covered: true, item: 'Intellectual property infringement claims' },
                  { covered: true, item: 'Breach of confidentiality claims' },
                  { covered: false, item: 'Bodily injury or property damage (need Public Liability)' },
                  { covered: false, item: 'Deliberate wrongful acts or criminal conduct' },
                  { covered: false, item: 'Insolvency of your client (a receivable, not insurable)' },
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
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contractor-Specific PI Considerations</h2>
              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Claims-Made Basis</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">PI insurance operates on a claims-made basis — the policy active when the claim is made responds, not the policy active when you did the work. This means you need continuous cover. If you let your policy lapse between contracts, you are exposed to claims from past work.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Retroactive Date</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">Your policy will have a retroactive date — the earliest date from which prior work is covered. When switching insurers, always check the retroactive date is matched or backdated, otherwise prior work may fall into a gap.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Run-Off Cover</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">If you stop contracting (retire, take a permanent role, change careers), you still need PI cover for several years. Claims can arise years after the work was done. Run-off cover (also called tail cover) extends your protection after you stop practising.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">GST Registration</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">GST-registered contractors can claim the GST portion of their PI premium. The net cost is the premium minus GST input tax credit — typically 15% off the gross premium.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl border border-green-200 p-6">
              <h3 className="font-bold text-green-900 mb-2">Tax Deductibility for Contractors</h3>
              <p className="text-green-800 text-sm">PI insurance premiums are a fully deductible business expense under the Income Tax Act 2007. For a sole trader earning over $70,000 (33% marginal rate), a $1,500/year premium effectively costs only $1,005 after tax. The after-tax cost of protection is often less than the excess on a single claim.</p>
            </div>

          </div>

          <div className="space-y-6">
            <QuoteForm variant="compact" />
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">Related Guides</h3>
              <ul className="space-y-2">
                {[
                  ['/pi-insurance-cost/', 'PI Insurance Cost NZ'],
                  ['/professional-indemnity-insurance/', 'What Is PI Insurance?'],
                  ['/coverage/run-off-cover/', 'Run-off Cover Guide'],
                  ['/professions/it-consultants/', 'IT Contractor Guide'],
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
