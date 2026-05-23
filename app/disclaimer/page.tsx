import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer | IndemnityInsurance.co.nz',
  description: 'Important disclaimer for IndemnityInsurance.co.nz — general information notice, referral service disclosure, regulatory status and accuracy of information.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/disclaimer/' },
  robots: { index: true, follow: true },
}

export default function DisclaimerPage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <div className="bg-gray-900 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Disclaimer</span>
          </nav>
          <h1 className="text-4xl font-extrabold mb-3">Disclaimer</h1>
          <p className="text-gray-300 text-lg max-w-2xl">Important information about how this website operates and the nature of the information provided.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Prominent warning */}
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 mb-10 flex items-start gap-4">
          <span className="text-amber-600 text-2xl flex-shrink-0">⚠</span>
          <div>
            <p className="font-bold text-amber-900 mb-1">General Information Only — Not Financial Advice</p>
            <p className="text-amber-800 text-sm leading-relaxed">
              IndemnityInsurance.co.nz provides general information about professional indemnity and liability insurance in New Zealand. This information does not constitute personalised financial advice. Always read the policy wording and obtain advice from a licensed insurance adviser before purchasing any insurance product.
            </p>
          </div>
        </div>

        <div className="space-y-10 text-slate-700">

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Not Financial Advice</h2>
            <p className="leading-relaxed">
              The information on this website is general in nature and is provided for informational and educational purposes only. It does not take into account your individual circumstances, financial situation, profession, or specific insurance requirements, and therefore does not constitute personalised financial advice within the meaning of the Financial Markets Conduct Act 2013 (FMCA).
            </p>
            <p className="leading-relaxed mt-3">
              Professional indemnity and liability insurance products, coverage terms, exclusions, and premiums vary significantly between providers and individual policies. Before purchasing any insurance product you should carefully read the relevant policy wording and Product Disclosure Statement (PDS), and seek independent advice from a licensed insurance adviser or broker authorised under the FMCA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How This Website Operates</h2>
            <p className="leading-relaxed">
              IndemnityInsurance.co.nz is an information and referral service. We are not an insurance underwriter, licensed insurer, or policy issuer. We collect enquiries from professionals and businesses seeking professional indemnity and liability insurance and refer those enquiries to licensed insurance advisers and brokers who are authorised under the Financial Markets Conduct Act 2013.
            </p>
            <p className="leading-relaxed mt-3">
              Our service is free to use. We may receive a referral fee or commission from insurance providers when a policy is taken out following a referral from this website. This does not increase the cost of any policy to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Regulatory Status</h2>
            <p className="leading-relaxed">
              IndemnityInsurance.co.nz is not regulated under the Financial Markets Conduct Act 2013 as a financial advice provider. The insurance advisers and brokers to whom we refer your enquiry hold their own licences and authorisations as required by the FMCA and are regulated by the Financial Markets Authority (FMA).
            </p>
            <p className="leading-relaxed mt-3">
              Where financial advice is provided in connection with a referral, it is provided by the licensed adviser to whom your enquiry is directed — not by IndemnityInsurance.co.nz directly. Referred advisers are responsible for the personalised advice, quotes, and recommendations they make to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Accuracy of Information</h2>
            <p className="leading-relaxed">
              We make every effort to ensure that the information on this website — including coverage descriptions, premium estimates, and insurer comparisons — is accurate and up to date. However, insurance products, pricing, policy terms, and regulatory requirements change frequently and without notice.
            </p>
            <p className="leading-relaxed mt-3">
              All premium ranges and cost estimates published on this site are indicative only, based on publicly available information and market data at the time of publication. They should not be relied upon as definitive quotes or coverage guarantees. Actual premiums and policy terms will be confirmed by the relevant insurer or broker following assessment of your specific circumstances.
            </p>
            <p className="leading-relaxed mt-3">
              If any insurer, provider, or industry participant believes any information on this site is inaccurate, outdated, or misleading, we encourage them to contact us at{' '}
              <a href="mailto:hello@cover4you.co.nz" className="text-orange-600 hover:underline font-semibold">hello@cover4you.co.nz</a> and we will review the information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Coverage Comparisons</h2>
            <p className="leading-relaxed">
              Coverage comparisons and provider information published on this site are prepared using publicly available policy documents, Product Disclosure Statements, and information published by insurers on their own websites. They reflect our assessment as at the date of publication and are made in good faith.
            </p>
            <p className="leading-relaxed mt-3">
              Comparisons are not exhaustive — individual policies may contain conditions, endorsements, sub-limits, or exclusions not reflected in summary comparisons. Always obtain and read the full policy wording before making a purchasing decision. Cover levels, excesses, and eligibility criteria differ between insurers and professional categories.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Links and Content</h2>
            <p className="leading-relaxed">
              This website may contain links to third-party websites, including those of insurers, government agencies, and industry bodies. These links are provided for convenience only. We have no control over the content of third-party websites and accept no responsibility for the accuracy, completeness, or currency of information on external sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by law, IndemnityInsurance.co.nz excludes all liability for any loss or damage arising from your reliance on information contained on this website, or from the services provided by insurance advisers to whom we refer your enquiry. This includes, without limitation, any loss arising from purchasing or not purchasing an insurance policy based on information provided here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Governing Law</h2>
            <p className="leading-relaxed">
              This disclaimer is governed by the laws of New Zealand. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of New Zealand.
            </p>
            <p className="leading-relaxed mt-4">
              See also our{' '}
              <Link href="/privacy/" className="text-orange-600 hover:underline font-semibold">Privacy Policy</Link>{' '}
              and{' '}
              <Link href="/terms/" className="text-orange-600 hover:underline font-semibold">Terms of Use</Link>.
            </p>
          </section>

          <div className="text-sm text-slate-500 border-t border-slate-200 pt-6">
            Last updated: May 2026. Questions about this disclaimer? Contact us at{' '}
            <a href="mailto:hello@cover4you.co.nz" className="text-orange-600 hover:underline">hello@cover4you.co.nz</a>.
          </div>

        </div>
      </div>
    </div>
  )
}
