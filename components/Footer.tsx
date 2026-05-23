import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-white font-extrabold text-lg">
                Indemnity<span className="text-orange-500">Insurance</span>
              </span>
              <span className="text-gray-500 text-sm">.co.nz</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4 max-w-xs">
              Professional indemnity and liability insurance guidance for NZ professionals. We connect you with licensed insurance advisers who compare the market on your behalf.
            </p>
            <p className="text-xs text-gray-500">
              <Link href="mailto:hello@cover4you.co.nz" className="hover:text-gray-300">hello@cover4you.co.nz</Link>
            </p>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3">Coverage</h4>
            <ul className="space-y-2">
              {[
                ['Professional Indemnity', '/coverage/professional-indemnity/'],
                ['Public Liability', '/coverage/public-liability/'],
                ['Statutory Liability', '/coverage/statutory-liability/'],
                ["Employers' Liability", '/coverage/employers-liability/'],
                ['D&O Liability', '/coverage/directors-officers/'],
                ['Management Liability', '/coverage/management-liability/'],
                ['Run-off Cover', '/coverage/run-off-cover/'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-sm hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Professions */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3">By Profession</h4>
            <ul className="space-y-2">
              {[
                ['Accountants', '/professions/accountants/'],
                ['Architects & Engineers', '/professions/architects-engineers/'],
                ['IT Consultants', '/professions/it-consultants/'],
                ['Financial Advisers', '/professions/financial-advisers/'],
                ['Real Estate Agents', '/professions/real-estate-agents/'],
                ['Consultants', '/professions/consultants/'],
                ['Healthcare', '/professions/healthcare/'],
                ['Mortgage Brokers', '/professions/mortgage-brokers/'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-sm hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3">Resources</h4>
            <ul className="space-y-2">
              {[
                ['Get a Quote', '/contact/'],
                ['Compare Providers', '/compare/'],
                ['PI Insurance Guide', '/professional-indemnity-insurance/'],
                ['PI Insurance Cost', '/pi-insurance-cost/'],
                ['Contractor Guide', '/indemnity-insurance-for-contractors/'],
                ['Resources', '/blog/'],
                ['FAQs', '/faq/'],
                ['About Us', '/about/'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-sm hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4">
            <Link href="/privacy/" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms/" className="hover:text-gray-300">Terms of Use</Link>
            <Link href="/disclaimer/" className="hover:text-gray-300">Disclaimer</Link>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed max-w-4xl">
            <strong className="text-gray-400">Disclaimer:</strong> IndemnityInsurance.co.nz is an information and referral service. We are not a licensed insurer or financial adviser. The insurance advisers we refer you to are independently licensed under the Financial Markets Conduct Act 2013. Insurance products are subject to policy terms, conditions and exclusions. Coverage information on this site is general in nature and does not constitute financial advice. Please read your policy document carefully.
          </p>
          <p className="text-xs text-gray-600 mt-3">
            © {new Date().getFullYear()} IndemnityInsurance.co.nz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
