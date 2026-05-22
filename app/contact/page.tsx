import QuoteForm from '../../components/QuoteForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get a PI Insurance Quote | IndemnityInsurance.co.nz',
  description: 'Request a professional indemnity insurance quote from NZ-licensed advisers. We compare QBE, Dual, BHSI, Vero and AIG for you. Quote within one business day.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/contact/' },
}

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <QuoteForm variant="full" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-8">What Happens Next?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { n: '1', title: 'Adviser Reviews Your Needs', desc: 'A licensed NZ insurance adviser reviews your profession, cover type and level needed.' },
            { n: '2', title: 'Market Comparison', desc: 'Multiple insurers are approached — QBE, Dual, BHSI, Vero, AIG — to find the best fit.' },
            { n: '3', title: 'Quote Delivered', desc: 'You receive a personalised quote within one business day with clear pricing and cover details.' },
            { n: '4', title: 'Placement & Ongoing Support', desc: 'Your adviser handles placement and remains your contact for renewals, claims and mid-term changes.' },
          ].map(step => (
            <div key={step.n} className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col items-start">
              <span className="w-9 h-9 rounded-full bg-brand-700 text-white font-bold text-sm flex items-center justify-center mb-4 flex-shrink-0">{step.n}</span>
              <h3 className="font-bold text-slate-900 text-sm mb-1">{step.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Contact Directly</h3>
            <p className="text-slate-600 text-sm">Email us at <a href="mailto:hello@cover4you.co.nz" className="text-brand-700 font-semibold">hello@cover4you.co.nz</a> for general enquiries or to discuss your requirements before submitting a quote request.</p>
          </div>
          <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
            <h3 className="font-bold text-blue-900 mb-2">Financial Advice Disclosure</h3>
            <p className="text-blue-800 text-xs leading-relaxed">IndemnityInsurance.co.nz is an information and referral service. The insurance advisers we refer you to are independently licensed under the Financial Markets Conduct Act 2013. They will provide you with a disclosure statement before providing personalised advice.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
