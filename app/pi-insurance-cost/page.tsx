import Link from 'next/link'
import QuoteForm from '../../components/QuoteForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Does PI Insurance Cost in NZ? What Is Actually Published',
  description: 'No NZ insurer publishes PI rate tables. Here is the only official cost figure that exists, the published minimum limits that apply, and what really sets your premium.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/pi-insurance-cost/' },
}

export default function PiInsuranceCostPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">PI Insurance Cost — 2026 Guide</h1>
          <p className="text-brand-300 text-lg max-w-2xl">Most sites answer this with numbers nobody can source. Here is what is actually published in New Zealand, what is not, and the factors that genuinely set your premium.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">The only official NZ cost figure</h2>
              <p className="text-slate-500 text-sm mb-4">Source: NZ Government, Beehive factsheet, 24 November 2025, and Cabinet paper, 18 November 2025</p>
              <div className="bg-brand-50 border border-brand-200 rounded-xl p-5 mb-6 text-center">
                <div className="text-5xl font-extrabold text-brand-700">$1,500–$3,000</div>
                <div className="text-brand-600 text-sm font-semibold mt-1">Per person, per year — what the Government states PI typically costs architects, often covered by the firm</div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">That is the only figure a New Zealand government body has published, and it was produced to support a policy decision on the building reforms rather than measured from the market. No methodology is attached to it, and it covers design professionals only. Do not stretch it to other professions.</p>
              <p className="text-slate-700 leading-relaxed mb-4">Beyond that, there is no public New Zealand premium dataset. PI here is broker-distributed and individually underwritten, and neither of the two main New Zealand underwriters publishes rate tables. Professional bodies do not publish premiums either. The New Zealand Law Society consulted in March 2026 on making PI compulsory for lawyers and could not put a price in its own consultation document.</p>
              <p className="text-slate-700 leading-relaxed">So when a website tells you your profession pays a specific amount per month, that figure did not come from New Zealand data. We used to publish figures like that on this page. We have removed them.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Published minimum limits in New Zealand</h2>
              <p className="text-slate-600 text-sm mb-4">Your limit is the biggest single driver of your premium, and for most professionals it is set for you. These are the minimums we can actually source. Note the source of each obligation — regulator, membership body or contract — because they carry very different consequences.</p>
              <div className="space-y-3">
                {[
                  { prof: 'REINZ member agencies', range: '$1M', reason: 'REINZ Code of Agency Practice, Principle 19 (Nov 2024). Membership body, not the REA — the Real Estate Authority requires nothing.' },
                  { prof: 'Law practices', range: '$1.2m / $900k', reason: 'The NZ Law Society published standard, quoted here as an anchor. Holding cover is not compulsory for NZ lawyers — the Law Society consulted in March 2026 on whether to make it so.' },
                  { prof: 'NZ Society of Conveyancers', range: '$1.2m', reason: 'A published limit for the conveyancing regime, quoted as an anchor. We have not read the rule that sets it.' },
                  { prof: 'ADNZ self-employed Professional members', range: '$250,000', reason: 'ADNZ membership condition. Applies to self-employed members, not all members.' },
                  { prof: 'Engineering firms issuing a producer statement', range: '$200,000', reason: 'Engineering NZ notes this value is standard and unrelated to construction costs. Not a membership or CPEng requirement.' },
                  { prof: 'CA ANZ Certificate of Public Practice', range: 'Not published', reason: 'Appropriate cover is required, but the NZ minimum sits in Part IV of the NZICA Rules, which is not publicly readable. The $2m figure circulating online is Australian.' },
                  { prof: 'Financial advice providers (FAPs)', range: 'None', reason: 'Not an FMA licence condition. The FMA consulted on adding one in June 2020 and decided against it in November 2020.' },
                  { prof: 'Registered architects', range: 'None', reason: 'The Registered Architects Act 2005 contains no insurance provisions. There is no Architects Act 2022.' },
                  { prof: 'Engineers (CPEng / Engineering NZ)', range: 'None', reason: 'Neither membership nor CPEng registration requires PI.' },
                  { prof: 'Building design professionals, from 2028', range: 'Not yet set', reason: 'The Building Amendment Bill is before select committee, submissions close 15 Nov 2026, and MBIE proposes no minimum limit. Expected to take effect 2028.' },
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
                  { factor: 'Limit of indemnity', impact: 'The single biggest lever. A higher limit costs more, but for most professionals a contract sets it' },
                  { factor: 'Excess / deductible', impact: 'A higher excess reduces premium. The Law Society standard is that excess should not exceed the greater of 1% of the limit or $20,000' },
                  { factor: 'Claims history', impact: 'Prior PI claims significantly increase premiums' },
                  { factor: 'Number of staff', impact: 'More people providing professional services = higher premium' },
                  { factor: 'Client type', impact: 'Government/enterprise clients increase exposure and cost' },
                  { factor: 'Retroactive date', impact: 'PI is claims-made, so how far back prior acts are covered is a real price lever — and the thing most often lost when switching insurer' },
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
              <p className="text-green-800 text-sm">Yes — professional indemnity insurance premiums are a deductible business expense under the Income Tax Act 2007, whether you trade as a sole trader, partnership, company or trust. The deduction is at your own marginal or company rate, so what it saves you depends on your circumstances rather than on any figure we could publish here.</p>
            </div>
          </div>

          <div className="space-y-6">
            <QuoteForm variant="compact" />
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">Related Guides</h3>
              <ul className="space-y-2">
                {[
                  ['/coverage/professional-indemnity/', 'What Is PI Insurance?'],
                  ['/indemnity-insurance-for-contractors/', 'Contractor Guide'],
                  ['/coverage/run-off-cover/', 'Run-off Cover'],
                  ['/compare/', 'How to Compare Policies'],
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
