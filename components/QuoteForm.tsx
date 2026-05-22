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
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left — value proposition */}
            <div className="flex-1 text-white">
              <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Specialist Broker Matching
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                Get Your Indemnity Insurance Quote
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Tell us about your profession and cover needs. A licensed NZ insurance adviser will compare the market and contact you within one business day.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: '🛡️', text: 'Multiple insurers compared — QBE, Dual, BHSI, Vero, AIG' },
                  { icon: '✅', text: 'Licensed NZ insurance advisers — FMCA regulated' },
                  { icon: '⚡', text: 'Quote within one business day' },
                  { icon: '💰', text: 'No fee, no obligation' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3 bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-gray-400 text-xs leading-relaxed">
                  <strong className="text-gray-200">How it works:</strong> Our referral service is funded by a fee from the broker — not by you. All advisers in our network are licensed under the Financial Markets Conduct Act 2013.
                </p>
              </div>
            </div>

            {/* Right — form card */}
            <div className="w-full lg:w-[420px] lg:flex-shrink-0">
              <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8">
                <h3 className="text-xl font-extrabold text-white mb-6">Your Quote Request</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Your Profession</label>
                    <select name="profession" value={form.profession} onChange={handleChange} required
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500">
                      <option value="">Select your profession...</option>
                      {professionOptions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Cover Type Needed</label>
                    <select name="coverType" value={form.coverType} onChange={handleChange} required
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500">
                      <option value="">Select cover type...</option>
                      {coverOptions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Cover Level</label>
                    <select name="coverLevel" value={form.coverLevel} onChange={handleChange} required
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500">
                      <option value="">Select cover level...</option>
                      {coverLevelOptions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required
                      placeholder="Your name"
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 placeholder-gray-500" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required
                      placeholder="you@example.com"
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 placeholder-gray-500" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
                      placeholder="021 123 4567"
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 placeholder-gray-500" />
                  </div>

                  {error && <p className="text-red-400 text-sm bg-red-900/20 border border-red-500/30 rounded-lg px-3 py-2">{error}</p>}

                  <button type="submit" disabled={loading}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-800 text-white font-bold py-3 rounded-lg transition-colors text-sm shadow-lg">
                    {loading ? 'Submitting...' : 'Get a Quote →'}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting you agree to be contacted by a licensed NZ insurance adviser. No spam, no obligation.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Compact sidebar variant
  return (
    <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6">
      <h3 className="text-lg font-bold text-white mb-1">Get a Quote</h3>
      <p className="text-gray-400 text-xs mb-4">Licensed NZ advisers compare the market for you.</p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1">Profession</label>
          <select name="profession" value={form.profession} onChange={handleChange} required
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500">
            <option value="">Select profession...</option>
            {professionOptions.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1">Cover Type</label>
          <select name="coverType" value={form.coverType} onChange={handleChange} required
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500">
            <option value="">Select cover type...</option>
            {coverOptions.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1">Full Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required
            placeholder="Your name"
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 placeholder-gray-500" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required
            placeholder="you@example.com"
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 placeholder-gray-500" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1">Phone</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
            placeholder="021 123 4567"
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 placeholder-gray-500" />
        </div>

        {error && <p className="text-red-400 text-xs bg-red-900/20 border border-red-500/30 rounded px-3 py-2">{error}</p>}

        <button type="submit" disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-800 text-white font-bold py-2.5 rounded-lg transition-colors text-sm">
          {loading ? 'Submitting...' : 'Get a Quote →'}
        </button>
      </form>

      <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
        {['Licensed Advisers', 'No Obligation', '1 Business Day', 'NZ Based'].map(pill => (
          <span key={pill} className="text-xs text-gray-400 bg-gray-700 px-2 py-0.5 rounded-full border border-gray-600">✓ {pill}</span>
        ))}
      </div>
    </div>
  )
}
