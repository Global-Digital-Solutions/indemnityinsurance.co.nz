import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How We Source This Site',
  description: 'Our editorial standard: every requirement on this site cites a primary source, and we say so plainly where no source exists. Includes a log of what we corrected and why.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/how-we-source-this-site/' },
  robots: { index: true, follow: true },
}

const requirements = [
  { who: 'REINZ member agencies', what: 'PI covering the business and all individuals engaged in it, minimum $1M', source: 'REINZ Code of Agency Practice, Principle 19', date: 'November 2024', kind: 'Membership body' },
  { who: 'REINZ individual members', what: 'Ensure they or their employer carries PI to the Code of Agency Practice level', source: 'REINZ Code of Individual Membership, Principle 12', date: 'November 2024', kind: 'Membership body' },
  { who: 'ADNZ self-employed Professional members', what: 'PI, minimum $250,000', source: 'ADNZ Professional membership application form', date: 'Undated', kind: 'Membership body' },
  { who: 'Engineering firms issuing a producer statement', what: 'Firm states it holds PI of at least $200,000. Engineering NZ notes the value is standard and unrelated to construction costs', source: 'Engineering New Zealand', date: 'Undated', kind: 'Project convention' },
  { who: 'CA ANZ members in public practice in NZ', what: 'Current and appropriate PI to hold a Certificate of Public Practice. Required unless fees are under $13,000 p.a. and services are offered in your own name', source: 'CA ANZ Certificate of Public Practice', date: '—', kind: 'Membership body' },
  { who: 'CPA Australia members providing public accounting services in NZ', what: 'Must hold PI. Also applies to honorary, pro-bono and voluntary services', source: 'CPA Australia, Practising in New Zealand', date: '—', kind: 'Membership body' },
]

const anchors = [
  { who: 'Law practices', what: 'The greater of $1.2m per practice or $900k per partner', note: 'The NZ Law Society\u2019s published standard. Holding cover is not compulsory for New Zealand lawyers \u2014 the Law Society consulted in March 2026 on whether to make it so.' },
  { who: 'NZ Society of Conveyancers', what: '$1.2m', note: 'A published limit for the conveyancing regime. We have not been able to read the rule that sets it, so treat it as an anchor rather than as a requirement we can source to a document.' },
]

const negatives = [
  { who: 'Financial advice providers (FAPs)', detail: 'PI is not among the FMA’s seven standard conditions for a full FAP licence. The FMA consulted on adding it on 17 June 2020 and confirmed on 6 November 2020 that it had decided not to. It is not in the Code of Professional Conduct, and there is no PI disclosure obligation.' },
  { who: 'Real estate agents', detail: 'The Real Estate Authority requires nothing. The Professional Conduct and Client Care Rules 2012 contain no occurrence of "insurance" or "indemnity". Trust account obligations are audit obligations, not insurance ones.' },
  { who: 'Registered architects', detail: 'The Registered Architects Act 2005 contains no insurance provisions. The Rules 2006 mention PI once, at rule 50, as a permissive item in agreed terms of appointment. There is no Architects Act 2022.' },
  { who: 'Engineers', detail: 'Engineering New Zealand requires PI for neither membership nor CPEng registration. The Chartered Professional Engineers of New Zealand Rules (No 2) 2002 contain no occurrence of "indemnity" or "insurance".' },
  { who: 'Nurses', detail: 'The Nursing Council does not require PI for an annual practising certificate. The College of Nurses Aotearoa provides indemnity as a member benefit — the opposite of a requirement.' },
  { who: 'Social workers', detail: 'The Social Workers Registration Board practising certificate does not require PI.' },
  { who: 'Midwives', detail: 'NZ College of Midwives indemnity is an automatic benefit of membership, not a condition of it. Access Agreements are a third-party contractual requirement.' },
]

const unknowns = [
  'The New Zealand minimum PI limit for CA ANZ members. It sits in Part IV of the NZICA Rules, which is not publicly readable. The $2m figure circulating online comes from the Australian Professional Standards Scheme and we have found nothing applying it to New Zealand.',
  'Whether the New Zealand Institute of Architects requires PI of member practices. Its rules are not published and its membership pages are silent.',
  'Whether professional indemnity cover is mandatory under the Health Practitioners Competence Assurance Act 2003. We could not read the statute and will not assert it either way.',
  'Whether a Design-class Licensed Building Practitioner doing residential design will be caught by the forthcoming requirement. MBIE states the details are yet to be developed.',
  'What professional indemnity insurance typically costs in New Zealand, beyond the one government estimate for design professionals. No New Zealand insurer or professional body publishes rate tables.',
]

const corrections = [
  'We stated that professional indemnity was a condition of an FMA FAP licence. The opposite is true, and the FMA decided it deliberately in November 2020.',
  'We cited an "Architects Act 2022". No such statute exists.',
  'We stated that the Real Estate Authority requires agents to hold PI. It does not. REINZ does, as a voluntary membership condition.',
  'We stated that Engineering New Zealand requires PI for membership and CPEng. It requires neither.',
  'We described the November 2025 building reform as covering licensed building practitioners on site, building consent authorities, developers and builders, as taking effect from 2026, and as carrying an expected $1M to $2M minimum limit. It covers design professionals only, expressly not builders, no minimum has been proposed, and MBIE expects it to take effect in 2028.',
  'We stated that statutory liability policies pay Health and Safety at Work Act fines where legally permissible. Sections 29 and 30 of the Health and Safety at Work Act 2015 make such an indemnity of no effect and make entering into one an offence.',
  'We described the six-year limitation period as running from substantial completion under the Building Act 2004, and the ten-year period as a latent defects period. The six years is section 11 of the Limitation Act 2010 running from the act or omission, with a three-year late knowledge extension under section 14, and section 393 of the Building Act 2004 is an absolute ten-year longstop that also runs from the act or omission.',
  'We published around 230 premium figures, most of them per-month ranges by profession, sourced from a comparison site rather than from New Zealand market data. All have been removed.',
]

export default function HowWeSourceThisSitePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-gray-900 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">How We Source This Site</span>
          </nav>
          <h1 className="text-4xl font-extrabold mb-3">How We Source This Site</h1>
          <p className="text-gray-300 text-lg max-w-2xl">Most of what is published about indemnity insurance in New Zealand is wrong about who actually has to hold it. Here is our standard, what we can source, and what we got wrong ourselves.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-slate-700">

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The standard</h2>
          <p className="leading-relaxed mb-4">Every requirement stated on this site cites a primary source — the statute, the regulator, or the professional body&rsquo;s own published rules. Where we cannot find a primary source, we say so on the page rather than filling the gap with something plausible.</p>
          <p className="leading-relaxed mb-4">Three rules follow from that, and they are the reason this site reads differently from others:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong className="text-slate-900">We name the source of every obligation.</strong> A requirement imposed by a regulator, by a membership body you joined voluntarily, and by a client contract are three different things with three different consequences. Almost every error we found came from blurring them.</li>
            <li><strong className="text-slate-900">We do not publish premium figures we cannot source.</strong> Professional indemnity in New Zealand is broker-distributed and individually underwritten. No insurer publishes rate tables, and there is no public premium dataset. Any per-month figure on any website is invented, including the ones this site used to carry.</li>
            <li><strong className="text-slate-900">We date anything that can change.</strong> A Bill before select committee, a consultation, a rule under review — each is stamped with when we last checked it.</li>
          </ul>
          <p className="leading-relaxed">We match your needs to a local broker partner. We are not a law firm or a compliance adviser. Everything here is general information, not legal or financial advice. Your policy schedule and wording govern, not any web page.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">What is actually required in New Zealand</h2>
          <p className="text-sm text-slate-600 mb-5">Note the right-hand column. None of these are legal requirements.</p>
          <div className="space-y-3">
            {requirements.map(r => (
              <div key={r.who} className="bg-white border border-slate-200 rounded-lg p-4">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div className="font-bold text-slate-900 text-sm">{r.who}</div>
                  <div className="text-xs font-semibold text-orange-600 flex-shrink-0">{r.kind}</div>
                </div>
                <div className="text-sm text-slate-700 mb-1">{r.what}</div>
                <div className="text-xs text-slate-500">{r.source}{r.date !== '—' ? ' — ' + r.date : ''}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Published limits we use as anchors</h2>
          <p className="text-sm text-slate-600 mb-5">These are published figures we quote to give a sense of scale when explaining limits. They are not requirements we can source to a rule, and we do not present them as such.</p>
          <div className="space-y-3">
            {anchors.map(a => (
              <div key={a.who} className="bg-white border border-slate-200 rounded-lg p-4">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div className="font-bold text-slate-900 text-sm">{a.who}</div>
                  <div className="text-sm font-bold text-brand-700 flex-shrink-0">{a.what}</div>
                </div>
                <div className="text-xs text-slate-500">{a.note}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">What is not required, despite what you may have read</h2>
          <p className="text-sm text-slate-600 mb-5">These verified negatives are the most commonly misstated facts in the New Zealand market.</p>
          <div className="space-y-3">
            {negatives.map(n => (
              <div key={n.who} className="bg-white border border-slate-200 rounded-lg p-4">
                <div className="font-bold text-slate-900 text-sm mb-1">{n.who}</div>
                <div className="text-sm text-slate-700">{n.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">What we could not establish</h2>
          <p className="text-sm text-slate-600 mb-5">We would rather show you the edge of what we know than write past it.</p>
          <ul className="list-disc list-inside space-y-3 bg-white border border-slate-200 rounded-lg p-6">
            {unknowns.map(u => <li key={u} className="text-sm leading-relaxed">{u}</li>)}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">What we corrected, and when</h2>
          <p className="text-sm text-slate-600 mb-5">On 7 September 2026 we reviewed every page against primary sources. These are the material errors we found in our own published content and fixed.</p>
          <ul className="list-disc list-inside space-y-3 bg-white border border-slate-200 rounded-lg p-6">
            {corrections.map(c => <li key={c} className="text-sm leading-relaxed">{c}</li>)}
          </ul>
          <p className="text-sm text-slate-600 mt-5">If you find something on this site you believe is wrong, tell us and we will check it against the source and correct it. That is the whole standard.</p>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Sources we rely on</h2>
          <ul className="space-y-2 text-sm">
            {[
              ['https://www.legislation.govt.nz/', 'legislation.govt.nz — New Zealand statutes and regulations'],
              ['https://www.fma.govt.nz/', 'Financial Markets Authority — FAP licensing and standard conditions'],
              ['https://www.rea.govt.nz/', 'Real Estate Authority — licensing criteria and conduct rules'],
              ['https://www.nzrab.nz/', 'New Zealand Registered Architects Board'],
              ['https://www.engineeringnz.org/', 'Engineering New Zealand'],
              ['https://www.mbie.govt.nz/', 'MBIE — regulatory impact statements and Cabinet papers'],
              ['https://www.building.govt.nz/', 'Building Performance — Building Amendment Bill progress'],
              ['https://www.beehive.govt.nz/', 'Beehive — ministerial announcements and factsheets'],
              ['https://www.lawsociety.org.nz/', 'New Zealand Law Society'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} rel="nofollow noopener" target="_blank" className="text-brand-700 hover:underline">{label}</a>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  )
}
