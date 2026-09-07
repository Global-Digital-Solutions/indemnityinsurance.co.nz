import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'We make professional indemnity and liability insurance simpler to understand, and connect you with a local broker we know and have personally vetted.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/about/' },
}

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-brand-300 text-lg max-w-2xl">IndemnityInsurance.co.nz helps professionals understand and access the right professional indemnity and liability insurance for their specific needs.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="prose max-w-none space-y-8">
          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Do</h2>
            <p className="text-slate-700 leading-relaxed mb-4">IndemnityInsurance.co.nz exists to make a confusing corner of insurance simpler, and to put someone in your corner who knows it properly. We connect you with a local broker who understands what indemnity insurance actually asks of your profession. Every broker we work with is one we know personally and have vetted ourselves before we will send anyone to them. We cover professional indemnity, public liability, management liability and statutory liability. We provide educational content about coverage types, profession-specific requirements, regulatory obligations and the published minimum limits that actually apply — then connect you with NZ-licensed insurance advisers who can provide personalised advice and market comparisons.</p>
            <p className="text-slate-700 leading-relaxed">We are not a licensed insurer or financial adviser. The advisers we connect you with are independently licensed under the Financial Markets Conduct Act 2013 and regulated by the Financial Markets Authority (FMA).</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Whose Side We Are On</h2>
            <p className="text-slate-700 leading-relaxed mb-4">Yours. That sounds like the sort of thing every website says, so here is what it actually means in practice.</p>
            <ul className="space-y-3 text-slate-700 mb-4">
              <li><strong className="text-slate-900">We will tell you when you do not need cover.</strong> A great deal of what is published about indemnity insurance claims that professions are required to hold it when no rule says any such thing. We have documented where that is wrong, profession by profession, and the brokers we work with will say the same thing to your face.</li>
              <li><strong className="text-slate-900">Every requirement on this site carries a source.</strong> The statute, the regulator, or the body&rsquo;s own published rules — linked, so you can check us. Where we could not find a source, we say so on the page instead of filling the gap.</li>
              <li><strong className="text-slate-900">We publish our own mistakes.</strong> When we get something wrong we correct it and log it publicly, at <a href="/how-we-source-this-site/" className="text-brand-700 hover:underline">how we source this site</a>.</li>
              <li><strong className="text-slate-900">We do not publish prices we cannot stand behind.</strong> Nobody in this market publishes real premium data, so we do not pretend to have any.</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Brokers We Work With</h2>
            <p className="text-slate-700 leading-relaxed mb-4">A small number, chosen deliberately. They specialise in professional and management liability, they are local, and we have met every one of them before sending anyone their way. The test we apply is simple: would we be happy for a friend to ring them? If someone talks in jargon, pushes cover a client does not need, or is hard to get hold of when something goes wrong, they are no use to you and we will not refer to them.</p>
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
