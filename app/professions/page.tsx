import Link from 'next/link'
import { professionTypes } from '../../data/profession-types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PI Insurance By Profession | IndemnityInsurance.co.nz',
  description: 'Professional indemnity insurance guidance by profession — accountants, architects, engineers, IT consultants, financial advisers, real estate agents and more in NZ.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/professions/' },
}

export default function ProfessionsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&auto=format&fit=crop&q=80')", backgroundSize: 'cover', backgroundPosition: 'center top', opacity: 0.45 }} />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-gray-900/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Cover by Profession
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Insurance Tailored to<br />
              <span className="text-orange-400">Your Profession</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Every profession carries different risks. Select yours below for guidance on mandatory cover requirements, typical costs, and the policy terms that matter most to your work.
            </p>
          </div>
        </div>
      </div>

      {/* Profession cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {professionTypes.map(pt => (
            <Link key={pt.slug} href={`/professions/${pt.slug}/`}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-orange-300 transition-all">
              <div className="h-40 overflow-hidden">
                <img src={pt.image} alt={pt.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <h2 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-orange-600 transition">{pt.name}</h2>
                <p className="text-xs text-orange-600 font-semibold mb-2">{pt.avgCost}</p>
                <p className="text-xs text-slate-600 line-clamp-2">{pt.shortDesc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}
