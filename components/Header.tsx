'use client'

import { useState } from 'react'
import Link from 'next/link'

const coverageLinks = [
  { label: 'Professional Indemnity', href: '/coverage/professional-indemnity/' },
  { label: 'Public Liability', href: '/coverage/public-liability/' },
  { label: 'Statutory Liability', href: '/coverage/statutory-liability/' },
  { label: "Employers' Liability", href: '/coverage/employers-liability/' },
  { label: "Directors' & Officers'", href: '/coverage/directors-officers/' },
  { label: 'Management Liability', href: '/coverage/management-liability/' },
  { label: 'Run-off Cover', href: '/coverage/run-off-cover/' },
]

const professionLinks = [
  { label: 'Accountants', href: '/professions/accountants/' },
  { label: 'Architects & Engineers', href: '/professions/architects-engineers/' },
  { label: 'IT Consultants', href: '/professions/it-consultants/' },
  { label: 'Financial Advisers', href: '/professions/financial-advisers/' },
  { label: 'Real Estate Agents', href: '/professions/real-estate-agents/' },
  { label: 'Consultants', href: '/professions/consultants/' },
  { label: 'Healthcare', href: '/professions/healthcare/' },
  { label: 'Mortgage Brokers', href: '/professions/mortgage-brokers/' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [coverageOpen, setCoverageOpen] = useState(false)
  const [professionsOpen, setProfessionsOpen] = useState(false)

  return (
    <header className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-white font-extrabold text-lg">
              Indemnity<span className="text-orange-500">Insurance</span>
            </span>
            <span className="text-gray-400 text-sm hidden sm:inline">.co.nz</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">

            {/* Coverage dropdown */}
            <div className="relative"
              onMouseEnter={() => setCoverageOpen(true)}
              onMouseLeave={() => setCoverageOpen(false)}>
              <button className="text-gray-300 hover:text-white text-sm font-medium flex items-center gap-1 py-2">
                Coverage
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {coverageOpen && (
                <div className="absolute top-full left-0 w-64 bg-gray-800 border border-gray-700 rounded-xl shadow-xl py-2 z-50">
                  {coverageLinks.map(c => (
                    <Link key={c.href} href={c.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                      {c.label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-700 mt-2 pt-2">
                    <Link href="/coverage/" className="block px-4 py-2 text-sm text-orange-400 hover:text-orange-300 font-medium">
                      All Coverage Types →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Professions dropdown */}
            <div className="relative"
              onMouseEnter={() => setProfessionsOpen(true)}
              onMouseLeave={() => setProfessionsOpen(false)}>
              <button className="text-gray-300 hover:text-white text-sm font-medium flex items-center gap-1 py-2">
                By Profession
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {professionsOpen && (
                <div className="absolute top-full left-0 w-56 bg-gray-800 border border-gray-700 rounded-xl shadow-xl py-2 z-50">
                  {professionLinks.map(p => (
                    <Link key={p.href} href={p.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                      {p.label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-700 mt-2 pt-2">
                    <Link href="/professions/" className="block px-4 py-2 text-sm text-orange-400 hover:text-orange-300 font-medium">
                      All Professions →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/compare/" className="text-gray-300 hover:text-white text-sm font-medium">Compare</Link>
            <Link href="/blog/" className="text-gray-300 hover:text-white text-sm font-medium">Resources</Link>
            <Link href="/faq/" className="text-gray-300 hover:text-white text-sm font-medium">FAQs</Link>
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-1.5 text-gray-400 text-xs font-medium border border-gray-700 rounded-lg px-3 py-1.5">
              <span className="text-green-400">✓</span> Licensed Advisers
            </span>
            <Link href="/contact/"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors">
              Get a Quote
            </Link>
            <button
              className="lg:hidden text-gray-300 hover:text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-gray-800 border-t border-gray-700 px-4 py-4 space-y-2">
          <div>
            <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Coverage Types</p>
            {coverageLinks.map(c => (
              <Link key={c.href} href={c.href}
                className="block py-1.5 text-sm text-gray-300 hover:text-white"
                onClick={() => setMobileOpen(false)}>
                {c.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-700 pt-2">
            <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">By Profession</p>
            {professionLinks.map(p => (
              <Link key={p.href} href={p.href}
                className="block py-1.5 text-sm text-gray-300 hover:text-white"
                onClick={() => setMobileOpen(false)}>
                {p.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-700 pt-2 space-y-1">
            {[
              { href: '/compare/', label: 'Compare Providers' },
              { href: '/blog/', label: 'Resources' },
              { href: '/faq/', label: 'FAQs' },
              { href: '/about/', label: 'About' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="block py-1.5 text-sm text-gray-300 hover:text-white"
                onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-700 pt-3">
            <Link href="/contact/"
              className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-2.5 rounded-lg text-center transition-colors"
              onClick={() => setMobileOpen(false)}>
              Get a Quote →
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
