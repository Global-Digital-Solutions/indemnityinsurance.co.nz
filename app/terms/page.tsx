import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | IndemnityInsurance.co.nz',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/terms/' },
}

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-2">Terms of Use</h1>
          <p className="text-brand-300">Last updated: 22 May 2026</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white rounded-xl border border-slate-200 p-8 prose max-w-none text-slate-700 space-y-6">
          <p>By using IndemnityInsurance.co.nz you agree to these Terms of Use. Please read them carefully.</p>
          <h2 className="text-xl font-bold text-slate-900">Information Service</h2>
          <p>IndemnityInsurance.co.nz provides general information about professional indemnity and liability insurance in New Zealand. The content on this site is for educational purposes only and does not constitute financial advice.</p>
          <h2 className="text-xl font-bold text-slate-900">No Financial Advice</h2>
          <p>We are not a licensed financial adviser or insurer. Nothing on this website constitutes a recommendation, offer or financial advice to any person. You should seek independent professional advice before making any insurance or financial decision.</p>
          <h2 className="text-xl font-bold text-slate-900">Referral Service</h2>
          <p>When you submit a quote request, your information is referred to a licensed NZ insurance adviser. We do not control the advice, quotes or recommendations provided by referred advisers.</p>
          <h2 className="text-xl font-bold text-slate-900">Accuracy of Information</h2>
          <p>We make reasonable efforts to keep information current and accurate, but make no warranty as to its completeness or accuracy. Insurance products, pricing and regulatory requirements change frequently.</p>
          <h2 className="text-xl font-bold text-slate-900">Contact</h2>
          <p>Questions: hello@cover4you.co.nz</p>
        </div>
      </div>
    </div>
  )
}
