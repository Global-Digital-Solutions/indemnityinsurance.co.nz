import Link from 'next/link'
import QuoteForm from '../../components/QuoteForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Compare Professional Indemnity Policies in NZ',
  description: 'A practical guide to reading PI quotes: defence costs inside or outside the limit, per claim versus aggregate, retroactive dates, run-off, excess and sub-limits — and why NZ PI cannot be price-compared online.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/compare/' },
}

const clauses = [
  {
    n: '01',
    title: 'Defence costs — inside or in addition to the limit',
    body: 'If defence costs sit inside the limit, every dollar of legal spend reduces what is left to settle with. If they sit in addition to the limit, the full limit stays available for damages. This matters most on a multi-party construction claim, where you are one of several parties joined to the same proceeding and the argument about who is responsible for what runs for years before anyone gets near a settlement figure. Costs like that can consume a modest limit before liability is even determined.',
    ask: 'Are defence costs payable in addition to the limit of indemnity, or within it?',
  },
  {
    n: '02',
    title: 'Per claim versus aggregate',
    body: 'A limit expressed "any one claim" resets for each separate claim. A limit expressed "in the aggregate" is the most the policy will pay for the whole period, however many claims arrive. Two quotes showing the same number can mean very different things. Watch for the middle position too — any one claim, with an aggregate cap, or an aggregate that applies to certain extensions only.',
    ask: 'Is the limit any one claim, in the aggregate, or any one claim with an aggregate cap? Does it reinstate?',
  },
  {
    n: '03',
    title: 'The retroactive date',
    body: 'PI is claims-made, so the policy that responds is the one in force when the claim is made, not the one in force when you did the work. The retroactive date is the line before which past work is not covered at all. When you switch insurer, the new policy must pick up your prior acts back to the same date, or you lose cover for everything you did before it — work that can still be claimed on for years. In New Zealand the primary limitation period is six years from the act or omission under section 11 of the Limitation Act 2010, extendable by three years from late knowledge under section 14, with an absolute ten-year longstop on civil proceedings about building work under section 393 of the Building Act 2004. Those periods run from the act or omission, not from completion.',
    ask: 'Does this quote match my existing retroactive date, and is it guaranteed at renewal or re-set each year?',
  },
  {
    n: '04',
    title: 'What triggers the policy — claims and circumstances',
    body: 'Notifying a claim means telling the insurer that a demand or proceeding has been made against you. Notifying a circumstance means telling them about something that might give rise to one — a project going wrong, an angry email, a design being questioned — before any claim exists. A circumstance properly notified during the period is usually treated as attaching to that policy, so a claim arising from it later is still covered even though you have since changed insurer or the cover has lapsed. Policies differ on how they word the test: "may give rise to", "likely to give rise to", and similar phrases set different thresholds.',
    ask: 'What is the circumstance wording, and does a notified circumstance attach to this policy period for good?',
  },
  {
    n: '05',
    title: 'The definition of "professional services"',
    body: 'This is the clause that decides whether a claim is in or out. Some definitions name your discipline; some describe the activities of the insured business; some are drafted to the proposal form and cover only what you declared. If you have added a service line — project management, expert witness work, training, software, acting as a director of a client, supplying a product rather than advice — check the definition reaches it. A wide limit over a narrow definition is not much use.',
    ask: 'Read the definition against a list of everything you actually bill for. Anything not covered by it is uninsured.',
  },
  {
    n: '06',
    title: 'Sub-consultants, employees and who counts as insured',
    body: 'Most policies cover your vicarious liability for sub-consultants you engage — your liability for their work — but not the sub-consultant themselves. That is not the same as them carrying their own cover, and if they do not, their share of a claim can land back on you. Check who the insured persons are: the entity, past and present principals and partners, employees and contract staff acting in that capacity, and whether estates and legal personal representatives are included. Check whether a predecessor entity or a related trading name is named.',
    ask: 'Who exactly is an insured person, and does cover for sub-consultants extend beyond vicarious liability?',
  },
  {
    n: '07',
    title: 'Run-off terms',
    body: 'Because cover is claims-made, stopping cover ends your protection for past work even though the exposure continues for years. Run-off is the extension that keeps a policy responding after you cease practising, sell, or wind up. Negotiate it at renewal while you are a live client with a clean file and choices in front of you — not on the day you close, when you have one insurer, no leverage and no time. Ask whether run-off is a right on stated terms or is offered at the insurer\'s discretion, how long it runs, and how it is priced.',
    ask: 'Is run-off guaranteed on defined terms, for how many years, and at what basis of premium?',
  },
  {
    n: '08',
    title: 'The excess, and whether it applies to defence costs',
    body: 'An excess that applies only to damages behaves very differently from one that applies to defence costs as well, because most PI claims generate legal spend long before they generate a settlement — and many are defended successfully, meaning defence costs are the entire claim. The useful benchmark to hold a quote against is the New Zealand Law Society standard for the profession it regulates: the excess should not exceed the greater of 1% of the indemnity limit or $20,000. That is a legal-profession standard rather than a market rule, but it gives you a number to argue from.',
    ask: 'Does the excess apply to defence costs, and how does it compare to 1% of the limit or $20,000, whichever is greater?',
  },
  {
    n: '09',
    title: 'Regulatory investigations and disciplinary defence costs',
    body: 'Cover for the cost of responding to a regulator, a professional body or a disciplinary tribunal is usually a sub-limit sitting well below the main limit, and it usually covers the cost of defending only. Fines and penalties themselves are frequently excluded. Under the Health and Safety at Work Act 2015, fines cannot be insured at all: section 29 makes it unlawful to insure against a fine imposed under that Act, and section 30 extends that to indemnity arrangements. Any quote implying a health and safety fine is covered is wrong on the law.',
    ask: 'What is the investigation sub-limit, does it sit inside or outside the main limit, and what is excluded from it?',
  },
]

const limitAnchors = [
  { who: 'REINZ member agencies', limit: '$1M minimum', source: 'REINZ Code of Agency Practice, Principle 19, November 2024. Cover for the business and all individuals engaged in it. A membership body requirement — the Real Estate Authority requires no PI at all.' },
  { who: 'Law practices', limit: '$1.2m per practice or $900k per partner', source: 'New Zealand Law Society standard, whichever is the greater. Not currently compulsory; the Law Society consulted on making it so in March 2026.' },
  { who: 'NZ Society of Conveyancers', limit: '$1.2m', source: 'Membership body requirement.' },
  { who: 'ADNZ self-employed Professional members', limit: '$250,000 minimum', source: 'ADNZ membership condition, applying to self-employed Professional members rather than all members.' },
  { who: 'Engineering firms issuing a producer statement', limit: '$200,000 minimum', source: 'Producer statement convention. Engineering New Zealand notes the figure is standard and unrelated to construction costs. Not a membership or CPEng requirement.' },
  { who: 'CA ANZ Certificate of Public Practice', limit: 'Required, amount not published', source: 'Members in public practice must hold current and appropriate PI. The New Zealand minimum sits in Part IV of the NZICA Rules, which is not publicly readable — any $2m figure you see quoted is the Australian scheme number.' },
  { who: 'Building design professionals, proposed', limit: 'No minimum proposed', source: 'The Building Amendment Bill was introduced on 2 July 2026 and is before select committee; submissions close 15 November 2026. MBIE states the scheme details are yet to be developed. Expected to take effect in 2028. Not law.' },
]

export default function ComparePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">How to Compare Professional Indemnity Policies</h1>
          <p className="text-brand-300 text-lg max-w-2xl">Two PI quotes at the same premium can be worth very different amounts when a claim arrives. This page sets out the clauses that actually differ, and the question to ask about each one before you sign anything.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Why there is no price comparison to show you</h2>
              <p className="text-slate-700 leading-relaxed mb-4">New Zealand professional indemnity is broker-distributed and individually underwritten. Cover comes from a small group of specialist insurers, managing general agents and overseas markets reached through brokers, and none of them publishes rate tables — because none of them rates PI from a table. Every risk is priced off a proposal form by an underwriter who has read it. That is why no site, including this one, can show you a live price comparison for this product.</p>
              <p className="text-slate-700 leading-relaxed mb-4">We also do not publish a panel list. Naming insurers implies a recommendation we are not in a position to make for every profession, and the right market for a geotechnical engineer is not the right market for a mortgage adviser or a counsellor.</p>
              <p className="text-slate-700 leading-relaxed">So the comparison that is available to you is not between advertised prices. It is between the terms of the quotes you actually receive — and those differ far more than the premiums do. Everything below is a place where they differ.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Nine clauses that decide what a policy is worth</h2>
              <p className="text-slate-600 text-sm mb-6">Take a quote and work down this list. None of it is visible from a premium figure, and most of it is negotiable while you are still deciding.</p>
              <div className="space-y-5">
                {clauses.map(c => (
                  <div key={c.n} className="border border-slate-200 rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <span className="text-brand-600 font-extrabold text-lg flex-shrink-0 leading-tight">{c.n}</span>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 mb-2">{c.title}</h3>
                        <p className="text-sm text-slate-700 leading-relaxed mb-3">{c.body}</p>
                        <div className="bg-brand-50 border border-brand-200 rounded-lg px-4 py-3">
                          <div className="text-xs font-bold text-brand-700 uppercase tracking-wide mb-1">Ask</div>
                          <p className="text-sm text-brand-900">{c.ask}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Where your limit actually comes from</h2>
              <p className="text-slate-600 text-sm mb-4">Before you compare limits, find out whether the number is yours to choose. For most professionals it is set by someone else. Check your client contracts first — consultancy agreements, council and government panel terms, and head contracts routinely specify a limit, and sometimes also require defence costs in addition to it, a named retroactive date, or run-off for a stated number of years after completion. That contract sets your floor. Only then look at the published membership minimums.</p>
              <div className="space-y-3">
                {limitAnchors.map(item => (
                  <div key={item.who} className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg">
                    <div className="flex-1">
                      <div className="font-bold text-slate-900 text-sm">{item.who}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{item.source}</div>
                    </div>
                    <div className="text-brand-700 font-bold text-sm flex-shrink-0 text-right max-w-[38%]">{item.limit}</div>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 text-sm mt-5">A published minimum is a floor for membership, not an assessment of your exposure. A $200,000 producer statement figure says nothing about the cost of remediating the building. Work out what a realistic worst case on your largest project looks like, and treat the minimum as the number you must not go below rather than the number to buy.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Comparing quotes side by side</h2>
              <p className="text-slate-700 leading-relaxed mb-4">Put the quotes in a column each and fill in the same rows for all of them: limit and whether it is any one claim or aggregate; whether defence costs are in addition to the limit; the excess and whether it bites on defence costs; the retroactive date; the professional services definition; the investigation sub-limit; run-off terms; and the exclusions that are specific to your discipline. Where a quote is silent, ask — a summary schedule is not the wording, and the wording governs.</p>
              <p className="text-slate-700 leading-relaxed mb-4">Then ask for the full policy wording of the two you are choosing between, not the brochure. Read the exclusions and the conditions, particularly anything about your duty to notify, your conduct of a defence, and whether you may admit liability or settle without consent. Those conditions are where cover is most often lost after a claim has already happened.</p>
              <p className="text-slate-700 leading-relaxed">Do this at renewal, every year, not only when you first buy. Your services change, your revenue changes, your contracts change, and insurers quietly change wordings between periods. The renewal invitation is also the moment you have the most leverage to fix the retroactive date and to lock in run-off terms.</p>
            </div>

            <div className="bg-amber-50 rounded-xl border border-amber-200 p-6">
              <h3 className="font-bold text-amber-900 mb-2">Before you rely on any of this</h3>
              <p className="text-amber-900 text-sm leading-relaxed">We are an information and referral service, not an insurer and not a law firm; the advisers we refer you to are licensed. This is general information, not legal or financial advice. Policy wordings differ between underwriters and between brands from the same underwriter, and your schedule and wording govern — not this page. Some cover cannot be arranged through us, medical indemnity and professional body member schemes in particular. Last reviewed 7 September 2026.</p>
            </div>
          </div>

          <div className="space-y-6">
            <QuoteForm variant="compact" />
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">Take to your renewal</h3>
              <ul className="space-y-2">
                {[
                  'Retroactive date matched, in writing',
                  'Defence costs in addition to the limit',
                  'Excess checked against 1% of limit or $20,000',
                  'Professional services definition read against what you bill for',
                  'Run-off terms agreed while you still have choices',
                  'Client contract limits confirmed before you set the limit',
                ].map(item => (
                  <li key={item} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="text-brand-600 mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">Related Guides</h3>
              <ul className="space-y-2">
                {[
                  ['/compare-professional-indemnity-insurance-nz/', 'Comparing PI cover in NZ'],
                  ['/pi-insurance-cost/', 'What PI insurance costs'],
                  ['/coverage/professional-indemnity/', 'What is PI insurance?'],
                  ['/coverage/run-off-cover/', 'Run-off cover'],
                  ['/how-we-source-this-site/', 'How we source this site'],
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
