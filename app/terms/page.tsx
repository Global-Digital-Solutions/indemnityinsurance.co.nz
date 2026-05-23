import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | IndemnityInsurance.co.nz',
  description: 'Terms of use for IndemnityInsurance.co.nz — conditions governing use of our professional indemnity insurance information and referral service.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/terms/' },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <div className="bg-gray-900 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Terms of Use</span>
          </nav>
          <h1 className="text-4xl font-extrabold mb-3">Terms of Use</h1>
          <p className="text-gray-300 text-lg max-w-2xl">Please read these terms carefully before using IndemnityInsurance.co.nz.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="bg-slate-100 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="text-slate-700 font-semibold text-sm">Last updated: May 2026</p>
        </div>

        <div className="space-y-10 text-slate-700">

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using IndemnityInsurance.co.nz you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website or service. These terms apply to all visitors, users, and others who access or use the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Nature of Service</h2>
            <p className="leading-relaxed">
              IndemnityInsurance.co.nz is an information and referral service for professional indemnity and liability insurance in New Zealand. We provide general information to help professionals and businesses understand their insurance options and connect with licensed insurance advisers.
            </p>
            <p className="leading-relaxed mt-3">
              We are not an insurer, underwriter, or licensed financial advice provider. The information on this website is for general educational purposes only and does not constitute personalised financial advice. Nothing on this website constitutes a recommendation, offer, or financial advice to any person within the meaning of the Financial Markets Conduct Act 2013.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Referral Service</h2>
            <p className="leading-relaxed">
              When you submit a quote request through this website, your information is referred to a licensed NZ insurance adviser or broker. We do not control the advice, quotes, or recommendations provided by referred advisers. Referred advisers are independently responsible for the financial advice they provide to you under the FMCA.
            </p>
            <p className="leading-relaxed mt-3">
              Our referral service is free to use. We may receive a referral fee or commission from insurance providers when a policy is taken out following a referral from this website. This does not affect the cost of any policy to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Accuracy of Information</h2>
            <p className="leading-relaxed">
              We make reasonable efforts to ensure that information on this website — including coverage descriptions, premium estimates, and insurer comparisons — is accurate and current. However, insurance products, pricing, and regulatory requirements change frequently.
            </p>
            <p className="leading-relaxed mt-3">
              All premium ranges and cost estimates are indicative only and should not be relied upon as definitive quotes. Actual premiums and policy terms will be confirmed by the relevant insurer or adviser following assessment of your specific circumstances. We make no warranty as to the accuracy, completeness, or currency of information on this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. User Responsibilities</h2>
            <p className="leading-relaxed mb-3">By using this website you agree to:</p>
            <ul className="space-y-1 ml-4">
              {[
                'Provide accurate and truthful information in any quote request or enquiry',
                'Not use the website for any unlawful, fraudulent, or misleading purpose',
                'Not attempt to gain unauthorised access to any part of our systems',
                'Not interfere with the operation of the website or service',
                'Comply with all applicable New Zealand laws and regulations',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on this website — including text, graphics, logos, data, and page layouts — is the property of IndemnityInsurance.co.nz or its content contributors and is protected by copyright law. You may not reproduce, distribute, or republish content from this website without our written permission.
            </p>
            <p className="leading-relaxed mt-3">
              Permission is granted to temporarily view materials on this website for personal, non-commercial use only. This does not transfer any title or ownership of the materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Third-Party Websites</h2>
            <p className="leading-relaxed">
              This website may contain links to third-party websites including those of insurers, government agencies, and industry bodies. These links are provided for convenience only. We are not responsible for the content, accuracy, or practices of external sites and accept no liability for any loss arising from your use of linked third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by law, IndemnityInsurance.co.nz excludes all liability for any direct, indirect, incidental, or consequential loss or damage arising from your use of this website or reliance on information contained here. This includes any loss arising from purchasing or not purchasing an insurance product based on information on this site, or from the services of referred advisers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Indemnification</h2>
            <p className="leading-relaxed">
              You agree to indemnify and hold harmless IndemnityInsurance.co.nz, its operators, and associates from any claims, damages, or expenses (including legal costs) arising from your use of the website, your breach of these terms, or any false or misleading information you provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Modifications</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms of Use at any time. Changes take effect immediately upon posting to this page. Your continued use of the website following any modification constitutes your acceptance of the updated terms. We may also modify, suspend, or discontinue the website or service at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms of Use are governed by and construed in accordance with the laws of New Zealand. Any disputes arising from use of this website shall be subject to the exclusive jurisdiction of the courts of New Zealand.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contact</h2>
            <p className="leading-relaxed mb-4">For questions about these Terms of Use:</p>
            <div className="bg-slate-100 border border-slate-200 rounded-xl p-6">
              <p className="text-slate-800 font-semibold mb-1">IndemnityInsurance.co.nz</p>
              <p className="text-slate-600 text-sm">Operated by Cover4You</p>
              <p className="text-slate-600 text-sm mt-2">Email: <a href="mailto:hello@cover4you.co.nz" className="text-orange-600 hover:underline font-semibold">hello@cover4you.co.nz</a></p>
            </div>
          </section>

          <div className="text-sm text-slate-500 border-t border-slate-200 pt-6">
            See also our{' '}
            <Link href="/disclaimer/" className="text-orange-600 hover:underline">Disclaimer</Link>{' '}
            and{' '}
            <Link href="/privacy/" className="text-orange-600 hover:underline">Privacy Policy</Link>.
          </div>

        </div>
      </div>
    </div>
  )
}
