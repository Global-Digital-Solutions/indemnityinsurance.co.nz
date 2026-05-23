import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | IndemnityInsurance.co.nz',
  description: 'Privacy policy for IndemnityInsurance.co.nz — how we collect, use, and protect your personal information under the Privacy Act 2020.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/privacy/' },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <div className="bg-gray-900 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl font-extrabold mb-3">Privacy Policy</h1>
          <p className="text-gray-300 text-lg max-w-2xl">How IndemnityInsurance.co.nz collects, uses, and protects your personal information.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="bg-slate-100 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="text-slate-700 font-semibold text-sm">Last updated: May 2026</p>
        </div>

        <div className="space-y-10 text-slate-700">

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              IndemnityInsurance.co.nz (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your personal information in accordance with the Privacy Act 2020 (New Zealand). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our referral service.
            </p>
            <p className="leading-relaxed mt-3">
              Please read this Privacy Policy carefully. By using this website you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-bold text-slate-800 mb-2">2.1 Information You Provide Directly</h3>
            <p className="leading-relaxed mb-3">We collect information you provide when you submit a quote request or contact us. This includes:</p>
            <ul className="space-y-1 ml-4">
              {[
                'Name and contact details (email, phone)',
                'Profession, trade, or business type',
                'Cover level required and existing coverage details',
                'Business size, turnover, and number of employees',
                'Any other information you include in your enquiry',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-slate-800 mb-2 mt-6">2.2 Automatically Collected Information</h3>
            <p className="leading-relaxed">
              When you visit our website we may automatically collect certain technical information, including your IP address, browser type, pages visited, time spent on pages, and device information. This information is used to improve the website and understand how visitors use it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="space-y-1 ml-4">
              {[
                'Refer your enquiry to a licensed NZ insurance adviser or broker',
                'Respond to your questions and provide customer support',
                'Improve our website content and user experience',
                'Comply with legal and regulatory obligations',
                'Prevent fraud and maintain the security of our service',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed mt-4">
              We do not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Disclosure to Third Parties</h2>
            <h3 className="text-lg font-bold text-slate-800 mb-2">4.1 Licensed Insurance Advisers</h3>
            <p className="leading-relaxed">
              When you submit a quote request, your information is shared with our network of licensed NZ insurance advisers and brokers for the purpose of preparing a quote or responding to your enquiry. These advisers are bound by their own privacy obligations under the Privacy Act 2020 and the Financial Markets Conduct Act 2013.
            </p>

            <h3 className="text-lg font-bold text-slate-800 mb-2 mt-5">4.2 Service Providers</h3>
            <p className="leading-relaxed">
              We may share information with service providers who assist us in operating our website and managing enquiries (for example, email delivery and analytics services). These providers are contractually required to protect your information and may not use it for any other purpose.
            </p>

            <h3 className="text-lg font-bold text-slate-800 mb-2 mt-5">4.3 Legal Requirements</h3>
            <p className="leading-relaxed">
              We may disclose your information if required to do so by law, court order, or government authority, or where we believe in good faith that disclosure is necessary to protect our legal rights or the safety of any person.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, including satisfying any legal or regulatory requirements. Quote enquiry information is typically retained for up to 12 months. You may request deletion of your information at any time (see section 7).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, or disclosure. Form submissions are transmitted securely. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Privacy Rights</h2>
            <p className="leading-relaxed mb-3">Under the Privacy Act 2020 (New Zealand) you have the right to:</p>
            <ul className="space-y-1 ml-4">
              {[
                'Request access to the personal information we hold about you',
                'Request correction of inaccurate or outdated information',
                'Request deletion of your information (subject to legal retention requirements)',
                'Withdraw consent for the use of your information',
                'Lodge a complaint with the Office of the Privacy Commissioner',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed mt-4">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:hello@cover4you.co.nz" className="text-orange-600 hover:underline font-semibold">hello@cover4you.co.nz</a>. We will respond within 20 working days as required by the Privacy Act 2020.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Cookies</h2>
            <p className="leading-relaxed">
              Our website uses cookies to improve your experience and analyse site traffic. Essential cookies are required for the website to function. You can control cookie settings through your browser preferences, though disabling cookies may affect some site functionality. We do not use cookies for advertising targeting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated date at the top of this page will reflect when changes were last made. Your continued use of this website following any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Us</h2>
            <p className="leading-relaxed mb-4">For privacy enquiries, access requests, or complaints:</p>
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
            <Link href="/terms/" className="text-orange-600 hover:underline">Terms of Use</Link>.
          </div>

        </div>
      </div>
    </div>
  )
}
