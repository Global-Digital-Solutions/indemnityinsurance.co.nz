'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

const professionOptions = [
  'Accountant / Bookkeeper',
  'Architect / Designer',
  'Engineer (Structural / Civil / Geotechnical)',
  'IT Consultant / Software Developer',
  'Financial Adviser / Mortgage Broker',
  'Real Estate Agent / Property Manager',
  'Management Consultant / Business Adviser',
  'Healthcare / Allied Health Practitioner',
  'Lawyer / Legal Professional',
  'Recruitment Consultant / HR Adviser',
  'Marketing / PR / Communications',
  'Company Director / Officer',
  'Other Professional',
]

const coverOptions = [
  'Professional Indemnity',
  'Public Liability',
  'Management Liability (D&O + EPL + Statutory)',
  "Directors' & Officers' Liability",
  'Statutory Liability',
  "Employers' Liability",
  'Run-off Cover',
  'Not Sure – Need Advice',
]

const coverLevelOptions = [
  '$500,000',
  '$1,000,000 (most popular)',
  '$2,000,000',
  '$5,000,000',
  '$10,000,000+',
  'Not Sure – Need Advice',
]

interface QuoteFormProps {
  variant?: 'compact' | 'full'
}

export default function QuoteForm({ variant = 'compact' }: QuoteFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    profession: '',
    coverType: '',
    coverLevel: '',
    name: '',
    email: '',
    phone: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: 'Professional Indemnity Insurance Quote — IndemnityInsurance.co.nz',
        }),
      })
      if (!res.ok) throw new Error('Submission failed')
      router.push('/thank-you/')
    } catch {
      setError('Something went wrong. Please try again or email us directly at hello@cover4you.co.nz.')
      setLoading(false)
    }
  }

  if (variant === 'full') {
    return (
      <section className="py-16 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <span className="inline-block bg-gold-500/20 border border-gold-400/40 text-gold-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Free Quote — No Obligation
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                Get Your Indemnity Insurance Quote
              </h2>
              <p className="text-brand-200 text-lg mb-8">
                Tell us about your profession and cover needs. A licensed NZ insurance adviser will compare the market and contact you within one business day.
              </p>
              <div className="space-y-4">
                {[
                  { icon: '🛡️', text: 'Multiple insurers compared — QBE, Dual, BHSI, Vero, AIG' },
                  { icon: '✅', text: 'Licensed NZ insurance advisers — FMCA regulated' },
                  { icon: '⚡', text: 'Quote within one business day' },
                  { icon: '💰', text: 'No fee, no obligation' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <span className="text-brand-200 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6">Your Quote Request</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Profession</label>
                  <select name="profession" value={form.profession} onChange={handleChange} required
                    className="w-full border border-slate-300 text-slate-900 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 bg-white">
                    <option value="">Select your profession...</option>
                    {professionOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Cover Type Needed</label>
                  <select name="coverType" value={form.coverType} onChange={handleChange} required
                    className="w-full border border-slate-300 text-slate-900 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 bg-white">
                    <option value="">Select cover type...</option>
                    {coverOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Cover Level</label>
                  <select name="coverLevel" value={form.coverLevel} onChange={handleChange} required
                    className="w-full border border-slate-300 text-slate-900 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 bg-white">
                    <option value="">Select cover level...</option>
                    {coverLevelOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required
                      placeholder="Your name"
                      className="w-full border border-slate-300 text-slate-900 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 placeholder-slate-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
                      placeholder="021 123 4567"
                      className="w-full border border-slate-300 text-slate-900 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 placeholder-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required
                    placeholder="you@example.com"
                    className="w-full border border-slate-300 text-slate-900 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 placeholder-slate-400" />
                </div>

                {error && <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}

                <button type="submit" disabled={loading}
                  className="w-full bg-brand-700 hover:bg-brand-800 disabled:bg-brand-400 text-white font-bold py-3 rounded-lg transition-colors text-sm shadow">
                  {loading ? 'Submitting...' : 'Get My Free Quote →'}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  By submitting you agree to be contacted by a licensed NZ insurance adviser. No spam, no obligation.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="bg-brand-900 rounded-2xl border border-brand-700 p-6">
      <div className="mb-4">
        <span className="inline-block bg-gold-500/20 border border-gold-400/40 text-gold-400 text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2">
          Free Quote
        </span>
        <h3 className="text-lg font-bold text-white">Get a Quote Today</h3>
        <p className="text-brand-300 text-xs mt-1">Licensed NZ advisers compare the market for you.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <div>
          <label className="block text-xs font-semibold text-brand-300 mb-1">Profession</label>
          <select name="profession" value={form.profession} onChange={handleChange} required
            className="w-full bg-brand-800 border border-brand-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400">
            <option value="">Select profession...</option>
            {professionOptions.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-300 mb-1">Cover Type</label>
          <select name="coverType" value={form.coverType} onChange={handleChange} required
            className="w-full bg-brand-800 border border-brand-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400">
            <option value="">Select cover type...</option>
            {coverOptions.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-300 mb-1">Full Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required
            placeholder="Your name"
            className="w-full bg-brand-800 border border-brand-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 placeholder-brand-500" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-300 mb-1">Email Address</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required
            placeholder="you@example.com"
            className="w-full bg-brand-800 border border-brand-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 placeholder-brand-500" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-300 mb-1">Phone</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
            placeholder="021 123 4567"
            className="w-full bg-brand-800 border border-brand-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 placeholder-brand-500" />
        </div>

        {error && <p className="text-red-400 text-xs bg-red-900/20 border border-red-500/30 rounded px-3 py-2">{error}</p>}

        <button type="submit" disabled={loading}
          className="w-full bg-gold-500 hover:bg-gold-600 disabled:bg-gold-800 text-white font-bold py-2.5 rounded-lg transition-colors text-sm">
          {loading ? 'Submitting...' : 'Get My Free Quote →'}
        </button>
      </form>

      <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
        {['Licensed Advisers', 'No Obligation', '1 Business Day', 'NZ Based'].map(pill => (
          <span key={pill} className="text-xs text-brand-400 bg-brand-800 px-2 py-0.5 rounded-full border border-brand-700">✓ {pill}</span>
        ))}
      </div>
    </div>
  )
}
