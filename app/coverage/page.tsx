import Link from 'next/link'
import PriceTag from '../../components/PriceTag'
import { coverageTypes } from '../../data/coverage-types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coverage Types | Professional & Liability Insurance NZ',
  description: 'Explore professional indemnity, public liability, management liability, statutory liability, D&O and run-off cover options for NZ businesses.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/coverage/' },
}

export default function CoveragePage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&auto=format&fit=crop&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.45 }} />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-gray-900/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              What We Cover
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              The Right Cover<br />
              <span className="text-orange-400">for Your Business</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              From professional indemnity to management liability — explore every coverage type we advise on and find the policy that matches your risk profile.
            </p>
          </div>
        </div>
      </div>

      {/* Coverage cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverageTypes.map(ct => (
            <Link key={ct.slug} href={`/coverage/${ct.slug}/`}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-orange-300 transition-all">
              <div className="h-44 overflow-hidden">
                <img src={ct.image} alt={ct.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h2 className="font-bold text-slate-900 group-hover:text-orange-600 transition mb-1">{ct.name}</h2>
                <PriceTag price={ct.avgCost} className="text-xs font-bold text-orange-600 mb-3 block" />
                <p className="text-sm text-slate-600 leading-relaxed">{ct.shortDesc}</p>
                <div className="mt-4 text-sm font-bold text-orange-600">Learn More →</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-gray-900 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-extrabold mb-3">Not Sure Which Cover You Need?</h2>
          <p className="text-gray-400 mb-6">Our licensed advisers will assess your specific risk profile and recommend the right coverage — at no cost to you.</p>
          <Link href="/contact/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
            Get Expert Advice →
          </Link>
        </div>
      </div>
    </div>
  )
}
