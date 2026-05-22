import Link from 'next/link'
import QuoteForm from '../../components/QuoteForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Indemnity Insurance NZ — Complete Guide 2026',
  description: 'Everything you need to know about professional indemnity insurance in New Zealand. Costs, coverage, mandatory requirements and how to get the right cover.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/professional-indemnity-insurance/' },
}

export default function PiInsurancePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Professional Indemnity Insurance NZ</h1>
          <p className="text-brand-300 text-lg max-w-2xl">A complete guide to professional indemnity (PI) insurance for New Zealand professionals — what it covers, who needs it, how much it costs, and how to get the right policy.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What Is Professional Indemnity Insurance?</h2>
              <p className="text-slate-700 leading-relaxed mb-4">Professional indemnity (PI) insurance — also called professional liability insurance or errors and omissions (E&O) insurance — protects professionals against financial loss from claims that their advice or services caused a client to suffer a financial loss. It covers your legal defence costs and any compensation or damages awarded, regardless of whether the claim against you is justified.</p>
              <p className="text-slate-700 leading-relaxed mb-4">In New Zealand, PI insurance operates on a &quot;claims-made&quot; basis. This means the policy that responds to a claim is the one that is active when the claim is made — not when the work was done. This makes continuous PI insurance essential for any practising professional.</p>
              <p className="text-slate-700 leading-relaxed">PI insurance is mandatory for financial advisers (FMCA FAP licence condition), accountants (CAANZ practising requirement), real estate agents (REINZ/REA standards), lawyers (Law Society practising certificate), architects (Architects Act 2022), and most healthcare practitioners. For all other professionals providing advice or expertise, PI insurance is strongly recommended and increasingly required by client contracts.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What Does PI Insurance Cover?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Negligence in professional services',
                  'Errors and omissions in advice',
                  'Breach of professional duty',
                  'Misrepresentation to clients',
                  'Intellectual property infringement',
                  'Breach of confidentiality',
                  'Loss or damage to client documents',
                  'Legal defence costs (even for unfounded claims)',
                  'Court-awarded compensation and settlements',
                  'Dishonest acts by employees',
                ].map(item => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-brand-600 mt-0.5 font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Average PI Insurance Costs in NZ (2026)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-900 text-white">
                      <th className="text-left px-4 py-3">Profession</th>
                      <th className="text-center px-4 py-3">Average Monthly Cost</th>
                      <th className="text-center px-4 py-3">Popular Cover Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Architects & Engineers', '$160–$300/mo', '$2M+'],
                      ['Mortgage Brokers', '$115–$200/mo', '$1M–$2M'],
                      ['Financial Advisers', '$100–$200/mo', '$1M–$2M'],
                      ['Accountants', '$75–$120/mo', '$1M'],
                      ['IT Consultants', '$80–$150/mo', '$1M'],
                      ['Real Estate Agents', '$90–$160/mo', '$1M'],
                      ['Management Consultants', '$65–$130/mo', '$1M'],
                      ['Marketers / PR', '$65–$100/mo', '$500K–$1M'],
                    ].map(([prof, cost, level], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-4 py-3 text-slate-700 border-b border-slate-100">{prof}</td>
                        <td className="px-4 py-3 text-center font-semibold text-brand-700 border-b border-slate-100">{cost}</td>
                        <td className="px-4 py-3 text-center text-slate-600 border-b border-slate-100">{level}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-3">Source: BizCover NZ FY2024 data (4,000+ NZ businesses). Costs are indicative and vary by revenue, claims history, and cover level.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Who Needs PI Insurance in NZ?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { prof: 'Financial Advisers', req: 'Mandatory — FMCA FAP licence condition' },
                  { prof: 'Accountants (CAANZ)', req: 'Mandatory — practising certificate condition' },
                  { prof: 'Real Estate Agents', req: 'Mandatory — REINZ/REA standards' },
                  { prof: 'Lawyers', req: 'Mandatory — Law Society practising certificate' },
                  { prof: 'Architects', req: 'Mandatory — Architects Act 2022' },
                  { prof: 'Healthcare Practitioners', req: 'Required by most registration boards' },
                  { prof: 'IT Consultants', req: 'Required by most enterprise/govt contracts' },
                  { prof: 'All Other Consultants', req: 'Strongly recommended; contractually required' },
                ].map(item => (
                  <div key={item.prof} className="border border-slate-200 rounded-lg p-4">
                    <div className="font-bold text-slate-900 text-sm">{item.prof}</div>
                    <div className="text-xs text-slate-600 mt-1">{item.req}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { title: 'PI Insurance Cost NZ', href: '/pi-insurance-cost/', desc: 'Detailed cost breakdown by profession, cover level and business size.' },
                { title: 'Contractor Guide', href: '/indemnity-insurance-for-contractors/', desc: 'PI insurance for independent contractors and sole-trader professionals.' },
                { title: 'Compare Providers', href: '/compare/', desc: 'Compare QBE, Dual, BHSI, Vero and AIG for NZ PI insurance.' },
              ].map(card => (
                <Link key={card.href} href={card.href}
                  className="bg-brand-50 border border-brand-200 rounded-xl p-5 hover:bg-brand-100 transition">
                  <h3 className="font-bold text-brand-900 text-sm mb-2">{card.title}</h3>
                  <p className="text-xs text-brand-700">{card.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <QuoteForm variant="compact" />
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">Profession Guides</h3>
              <ul className="space-y-2">
                {[
                  ['/professions/accountants/', 'Accountants & Bookkeepers'],
                  ['/professions/architects-engineers/', 'Architects & Engineers'],
                  ['/professions/it-consultants/', 'IT Consultants'],
                  ['/professions/financial-advisers/', 'Financial Advisers'],
                  ['/professions/real-estate-agents/', 'Real Estate Agents'],
                  ['/professions/mortgage-brokers/', 'Mortgage Brokers'],
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
