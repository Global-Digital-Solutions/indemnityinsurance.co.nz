'use client'

import { useState } from 'react'
import Link from 'next/link'

const nav = [
  {
    label: 'Coverage',
    href: '/coverage/',
    children: [
      { label: 'Professional Indemnity', href: '/coverage/professional-indemnity/' },
      { label: 'Public Liability', href: '/coverage/public-liability/' },
      { label: 'Statutory Liability', href: '/coverage/statutory-liability/' },
      { label: "Employers' Liability", href: '/coverage/employers-liability/' },
      { label: "Directors' & Officers'", href: '/coverage/directors-officers/' },
      { label: 'Management Liability', href: '/coverage/management-liability/' },
      { label: 'Run-off Cover', href: '/coverage/run-off-cover/' },
    ],
  },
  {
    label: 'By Profession',
    href: '/professions/',
    children: [
      { label: 'Accountants', href: '/professions/accountants/' },
      { label: 'Architects & Engineers', href: '/professions/architects-engineers/' },
      { label: 'IT Consultants', href: '/professions/it-consultants/' },
      { label: 'Financial Advisers', href: '/professions/financial-advisers/' },
      { label: 'Real Estate Agents', href: '/professions/real-estate-agents/' },
      { label: 'Consultants', href: '/professions/consultants/' },
      { label: 'Healthcare', href: '/professions/healthcare/' },
      { label: 'Mortgage Brokers', href: '/professions/mortgage-brokers/' },
    ],
  },
  { label: 'Compare', href: '/compare/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'About', href: '/about/' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="bg-brand-900 border-b border-brand-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-extrabold text-sm">PI</span>
            </div>
            <div className="leading-tight hidden sm:block">
              <div className="text-white font-extrabold text-sm">IndemnityInsurance</div>
              <div className="text-brand-400 text-xs font-medium">.co.nz</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map(item => (
              <div key={item.label} className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}>
                <Link href={item.href}
                  className="flex items-center gap-1 text-brand-200 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-brand-800 transition-colors">
                  {item.label}
                  {item.children && <span className="text-brand-400 text-xs">▾</span>}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1 w-56 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-200 py-2">
                      {item.children.map(child => (
                        <Link key={child.href} href={child.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:text-brand-700 hover:bg-brand-50 transition-colors">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact/"
              className="bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-brand-300 hover:text-white p-2 rounded-lg">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-950 border-t border-brand-800 px-4 py-4 space-y-1">
          {nav.map(item => (
            <div key={item.label}>
              <Link href={item.href}
                className="block text-brand-200 hover:text-white text-sm font-semibold py-2 px-3 rounded-lg hover:bg-brand-800"
                onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 space-y-0.5">
                  {item.children.map(child => (
                    <Link key={child.href} href={child.href}
                      className="block text-brand-400 hover:text-white text-xs py-1.5 px-3 rounded hover:bg-brand-800"
                      onClick={() => setMobileOpen(false)}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-3">
            <Link href="/contact/"
              className="block w-full text-center bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}>
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
