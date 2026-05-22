import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | IndemnityInsurance.co.nz',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/privacy/' },
}

export default function PrivacyPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-2">Privacy Policy</h1>
          <p className="text-brand-300">Last updated: 22 May 2026</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white rounded-xl border border-slate-200 p-8 prose max-w-none text-slate-700 space-y-6">
          <p>IndemnityInsurance.co.nz (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your personal information in accordance with the Privacy Act 2020 (NZ).</p>
          <h2 className="text-xl font-bold text-slate-900">Information We Collect</h2>
          <p>We collect personal information you provide through our quote request forms, including: name, email address, phone number, profession, and cover requirements. We may also collect device and usage information through analytics tools.</p>
          <h2 className="text-xl font-bold text-slate-900">How We Use Your Information</h2>
          <p>We use your information to: refer your enquiry to a licensed NZ insurance adviser, respond to your questions, and improve our service. We do not sell your personal information to third parties.</p>
          <h2 className="text-xl font-bold text-slate-900">Disclosure to Third Parties</h2>
          <p>Your enquiry information is shared with our network of licensed NZ insurance advisers for the purpose of providing you with a quote. These advisers are bound by their own privacy obligations under the Privacy Act 2020 and the Financial Markets Conduct Act 2013.</p>
          <h2 className="text-xl font-bold text-slate-900">Access and Correction</h2>
          <p>You have the right to access and correct personal information we hold about you. Contact us at hello@cover4you.co.nz to make a request.</p>
          <h2 className="text-xl font-bold text-slate-900">Contact</h2>
          <p>Privacy enquiries: hello@cover4you.co.nz</p>
        </div>
      </div>
    </div>
  )
}
