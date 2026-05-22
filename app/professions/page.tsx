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
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">PI Insurance By Profession</h1>
          <p className="text-brand-300 text-lg max-w-2xl">Tailored professional indemnity insurance guidance for your specific profession — including mandatory requirements, average costs and key risks.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {professionTypes.map(pt => (
            <Link key={pt.slug} href={`/professions/${pt.slug}/`}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-brand-300 transition-all">
              <div className="h-36 overflow-hidden">
                <img src={pt.image} alt={pt.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <span className="text-3xl mb-2 block">{pt.icon}</span>
                <h2 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-brand-700 transition">{pt.name}</h2>
                <p className="text-xs text-brand-600 font-semibold">{pt.avgCost}</p>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2">{pt.shortDesc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
