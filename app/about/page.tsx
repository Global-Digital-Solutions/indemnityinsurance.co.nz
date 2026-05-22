import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | IndemnityInsurance.co.nz',
  description: 'IndemnityInsurance.co.nz is a professional indemnity and liability insurance information and referral service for NZ professionals.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/about/' },
}

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-brand-300 text-lg max-w-2xl">IndemnityInsurance.co.nz helps NZ professionals understand and access the right professional indemnity and liability insurance for their specific needs.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="prose max-w-none space-y-8">
          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Do</h2>
            <p className="text-slate-700 leading-relaxed mb-4">IndemnityInsurance.co.nz is an information and referral service for New Zealand professionals seeking professional indemnity, public liability, management liability and statutory liability insurance. We provide educational content about coverage types, profession-specific requirements, regulatory obligations and cost benchmarks — then connect you with NZ-licensed insurance advisers who can provide personalised advice and market comparisons.</p>
            <p className="text-slate-700 leading-relaxed">We are not a licensed insurer or financial adviser. The advisers we connect you with are independently licensed under the Financial Markets Conduct Act 2013 and regulated by the Financial Markets Authority (FMA).</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Referral Network</h2>
            <p className="text-slate-700 leading-relaxed mb-4">We refer enquiries to licensed NZ insurance advisers who specialise in professional liability and management liability insurance. These advisers access the NZ professional lines market on your behalf, including insurers such as QBE, Dual, BHSI, Vero and AIG.</p>
            <p className="text-slate-700 leading-relaxed">All referred advisers hold Financial Advice Provider (FAP) licences from the FMA and are required to provide you with a disclosure statement before providing personalised financial advice.</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Coverage Focus</h2>
            <ul className="space-y-3 text-slate-700">
              {[
                'Professional Indemnity (PI) Insurance',
                'Public Liability Insurance',
                'Management Liability Insurance (D&O, EPL, Statutory Liability, Crime)',
                "Directors' & Officers' Liability",
                'Statutory Liability Insurance',
                "Employers' Liability Insurance",
                'Run-off Cover (Tail Cover)',
              ].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-brand-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-50 rounded-xl border border-brand-200 p-8">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">Contact Us</h2>
            <p className="text-brand-800 mb-2">For general enquiries: <a href="mailto:hello@cover4you.co.nz" className="font-bold text-brand-700 hover:underline">hello@cover4you.co.nz</a></p>
            <p className="text-brand-700 text-sm">New Zealand based. Business hours Monday–Friday 9am–5pm NZST.</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/contact/" className="inline-block bg-brand-700 hover:bg-brand-800 text-white font-bold px-8 py-3 rounded-xl transition-colors">
            Get a Quote →
          </Link>
        </div>
      </div>
    </div>
  )
}
