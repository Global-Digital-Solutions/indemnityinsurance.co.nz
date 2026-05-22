import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer | IndemnityInsurance.co.nz',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/disclaimer/' },
}

export default function DisclaimerPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-2">Disclaimer</h1>
          <p className="text-brand-300">Last updated: 22 May 2026</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white rounded-xl border border-slate-200 p-8 prose max-w-none text-slate-700 space-y-6">
          <h2 className="text-xl font-bold text-slate-900">General Information Only</h2>
          <p>The content on IndemnityInsurance.co.nz is provided for general informational purposes only. It does not constitute financial advice, legal advice, or a recommendation to purchase any insurance product.</p>
          <h2 className="text-xl font-bold text-slate-900">Not a Licensed Financial Adviser or Insurer</h2>
          <p>IndemnityInsurance.co.nz is not a licensed financial adviser, insurer, or underwriter. We are an information and referral service. The insurance advisers we refer you to are independently licensed under the Financial Markets Conduct Act 2013 and regulated by the Financial Markets Authority (FMA). These advisers are responsible for the personalised financial advice they provide to you.</p>
          <h2 className="text-xl font-bold text-slate-900">Accuracy of Information</h2>
          <p>While we make reasonable efforts to ensure information on this site is accurate and up to date, we make no representation or warranty as to its accuracy, completeness or currency. Insurance products, pricing, policy terms and regulatory requirements change frequently. Always verify information with a licensed insurance adviser before making any decision.</p>
          <h2 className="text-xl font-bold text-slate-900">No Liability</h2>
          <p>To the maximum extent permitted by law, IndemnityInsurance.co.nz accepts no liability for any loss or damage arising from reliance on the information on this website or the services provided by referred insurance advisers.</p>
          <h2 className="text-xl font-bold text-slate-900">Regulatory Status</h2>
          <p>IndemnityInsurance.co.nz is not regulated under the Financial Markets Conduct Act 2013 as a financial advice provider. The advisers we refer you to are regulated under FMCA and must comply with the Code of Professional Conduct for Financial Advice Services.</p>
          <h2 className="text-xl font-bold text-slate-900">Contact</h2>
          <p>Questions about this disclaimer: hello@cover4you.co.nz</p>
        </div>
      </div>
    </div>
  )
}
