import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quote Request Received | IndemnityInsurance.co.nz',
  description: 'Your PI insurance quote request has been received. A licensed NZ adviser will be in touch within one business day.',
  robots: { index: false },
}

export default function ThankYouPage() {
  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-12">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Quote Request Received</h1>
          <p className="text-slate-600 text-lg mb-6">Thank you for your enquiry. A licensed NZ insurance adviser will review your requirements and be in touch within one business day.</p>
          <div className="bg-brand-50 rounded-xl border border-brand-200 p-5 mb-8">
            <h2 className="font-bold text-brand-900 mb-2">What to Expect</h2>
            <ul className="text-brand-800 text-sm space-y-1 text-left">
              <li>✓ Adviser reviews your profession and cover requirements</li>
              <li>✓ Multiple insurers approached on your behalf</li>
              <li>✓ Personalised quote delivered to your email</li>
              <li>✓ No obligation to proceed — no hard sell</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="bg-brand-700 hover:bg-brand-800 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm">
              Back to Home
            </Link>
            <Link href="/blog/" className="border border-slate-300 hover:border-brand-300 text-slate-700 font-bold px-6 py-2.5 rounded-xl transition-colors text-sm">
              Read Our Guides
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
