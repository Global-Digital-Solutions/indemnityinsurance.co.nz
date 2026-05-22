import Link from 'next/link'
import QuoteForm from '../../components/QuoteForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Statutory Liability Insurance NZ 2026 — Fines, Penalties & Prosecution',
  description: 'Statutory liability insurance covers NZ businesses and directors for defence costs and reparations from prosecution under NZ statutes including H&S Act, RMA and Companies Act.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/statutory-liability-insurance/' },
}

export default function StatutoryLiabilityPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Statutory Liability Insurance</h1>
          <p className="text-brand-300 text-lg max-w-2xl">Statutory liability insurance protects businesses and directors against defence costs and reparations arising from prosecution under legislation — from health &amp; safety to environmental law.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What Is Statutory Liability Insurance?</h2>
              <p className="text-slate-700 leading-relaxed mb-4">Statutory liability insurance covers businesses and their directors and officers for defence costs and reparation orders arising from unintentional breaches of New Zealand statutes. It does not cover fines or penalties (which are not insurable under NZ law), but it does cover the significant cost of mounting a legal defence and any court-ordered reparations to affected parties.</p>
              <p className="text-slate-700 leading-relaxed mb-4">New Zealand legislation has become increasingly punitive for businesses. WorkSafe NZ prosecutions under the Health and Safety at Work Act 2015 can result in fines up to $3M for companies and $600,000 for individuals. Even where a business is not convicted, the cost of defending a prosecution can exceed $500,000.</p>
              <p className="text-slate-700 leading-relaxed">Statutory liability cover is often included as part of a Management Liability policy, or can be purchased as a standalone cover. It is essential for any business with physical operations or regulatory obligations.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Key NZ Statutes Covered</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { statute: 'Health and Safety at Work Act 2015', risk: 'Worker injury/death; WorkSafe prosecutions up to $3M fine for companies' },
                  { statute: 'Resource Management Act 1991', risk: 'Environmental harm, consent breaches; prosecution by councils or MfE' },
                  { statute: 'Companies Act 1993', risk: 'Director duties breaches; prosecution by Registrar of Companies' },
                  { statute: 'Fair Trading Act 1986', risk: 'Misleading conduct, false representations; Commerce Commission action' },
                  { statute: 'Employment Relations Act 2000', risk: 'Employment breaches; Employment Court and MBIE investigations' },
                  { statute: 'Privacy Act 2020', risk: 'Data breaches; Privacy Commissioner investigations and compliance orders' },
                  { statute: 'Building Act 2004', risk: 'Building consent breaches; council prosecutions for unsafe buildings' },
                  { statute: 'Food Act 2014', risk: 'Food safety breaches; MPI prosecutions; business closure risk' },
                ].map(item => (
                  <div key={item.statute} className="border border-slate-200 rounded-lg p-4">
                    <div className="font-bold text-slate-900 text-sm">{item.statute}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.risk}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What Statutory Liability Covers vs Excludes</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-green-700 mb-3 text-sm">Typically Covered</h3>
                  <ul className="space-y-2">
                    {[
                      'Legal defence costs for prosecutions',
                      'Court-ordered reparations to third parties',
                      'Investigation costs (pre-prosecution stage)',
                      'Expert witness and specialist fees',
                      'Appeals costs if conviction is appealed',
                      'Director and employee defence costs',
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-green-600 font-bold mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-red-600 mb-3 text-sm">Not Covered</h3>
                  <ul className="space-y-2">
                    {[
                      'Fines and penalties (not insurable in NZ)',
                      'Deliberate, intentional or criminal breaches',
                      'Infringement notices (minor regulatory breaches)',
                      'Civil claims (separate public/PI liability cover)',
                      'Prior known breaches at policy inception',
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-red-500 font-bold mt-0.5">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl border border-amber-200 p-6">
              <h3 className="font-bold text-amber-900 mb-2">Health & Safety: The Biggest Statutory Liability Risk for NZ Businesses</h3>
              <p className="text-amber-800 text-sm leading-relaxed">Since the Health and Safety at Work Act 2015 replaced the old Health and Safety in Employment Act, WorkSafe NZ has significantly increased prosecution activity. In FY2024, WorkSafe issued $28.7M in fines across 161 prosecutions. The average legal defence cost for a contested prosecution exceeds $150,000 — before any reparation order. Statutory liability insurance is not optional for any business with physical operations or employees.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Who Needs Statutory Liability Insurance?</h2>
              <div className="space-y-3">
                {[
                  'Any business with employees (H&S Act exposure)',
                  'Businesses operating on physical premises (customers, contractors on site)',
                  'Food and beverage businesses (Food Act, Sale and Supply of Alcohol Act)',
                  'Construction and trades businesses (Building Act, H&S Act)',
                  'Environmental and primary sector businesses (RMA, Fisheries Act)',
                  'Directors and officers of any company (Companies Act, FMC Act)',
                  'Healthcare businesses and practitioners (multiple regulatory regimes)',
                  'Any business handling significant customer data (Privacy Act 2020)',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="text-brand-600 font-bold mt-0.5">→</span>
                    <span>{item}</span>
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
                  ['/coverage/employers-liability/', 'Employers\' Liability'],
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
