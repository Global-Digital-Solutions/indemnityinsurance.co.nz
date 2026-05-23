import Link from 'next/link'
import QuoteForm from '../components/QuoteForm'
import { coverageTypes } from '../data/coverage-types'
import { professionTypes } from '../data/profession-types'
import { blogPosts } from '../data/blog-posts'
import { faqs } from '../data/faqs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Indemnity Insurance NZ | Professional & Liability Insurance Specialists',
  description: 'Compare professional indemnity and liability insurance in New Zealand. Expert guidance for consultants, accountants, engineers, IT professionals and more from NZ-licensed advisers.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/' },
}

const stats = [
  { value: '$85/mo', label: 'Average PI premium (BizCover FY24)' },
  { value: '$1M', label: 'Most popular cover level in NZ' },
  { value: '11', label: 'Cover levels — $250K to $10M+' },
  { value: 'Fast', label: 'Quick adviser response' },
]

export default function HomePage() {
  const featuredPosts = blogPosts.slice(0, 3)
  const featuredFaqs = faqs.slice(0, 5)

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-brand-900 text-white overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&auto=format&fit=crop&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.7 }} />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/75 via-gray-900/45 to-gray-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                Need to Protect Your Business?
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Indemnity Insurance That Covers You,<br />
                <span className="text-orange-400">Your Work & Your Reputation</span>
              </h1>
              <p className="text-gray-300 text-xl leading-relaxed mb-4 max-w-xl font-medium">
                For less than you think.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xl">
                One claim from a client — a missed deadline, a disputed report, a costly piece of advice — can threaten everything you've built. Licensed NZ advisers compare the market and find the right cover for your profession, your budget, and your peace of mind.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact/"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-lg">
                  Get a Quote →
                </Link>
                <Link href="/professional-indemnity-insurance/"
                  className="inline-block bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                  What Does PI Cover?
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Cover from $85/month', 'No Obligation', 'Quick Response', 'Multiple Insurers Compared'].map(pill => (
                  <span key={pill} className="text-xs text-gray-300 bg-gray-800/70 px-3 py-1 rounded-full border border-gray-700">✓ {pill}</span>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex lg:justify-end">
              <div className="w-[320px]">
                <QuoteForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-brand-800 border-b border-brand-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-extrabold text-gold-400">{s.value}</div>
                <div className="text-xs text-brand-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coverage types */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">What We Cover</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Coverage Types We Advise On</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From professional indemnity to management liability — find the right cover for your profession and risk profile.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {coverageTypes.map(ct => (
              <Link key={ct.slug} href={`/coverage/${ct.slug}/`}
                className="group relative bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-orange-500/60 hover:bg-gray-750 transition-all duration-200 overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/5 rounded-bl-full group-hover:bg-orange-500/10 transition-colors" />
                <div className="w-12 h-12 bg-orange-500/15 border border-orange-500/20 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-orange-500/25 transition-colors">
                  {ct.icon}
                </div>
                <h3 className="font-bold text-white text-sm mb-2 leading-snug group-hover:text-orange-400 transition-colors">{ct.name}</h3>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-3 mb-4">{ct.shortDesc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-orange-400">{ct.avgCost}</span>
                  <span className="text-gray-600 group-hover:text-orange-400 transition-colors text-sm">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Professions */}
      <div className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Your Profession</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Find Cover for Your Profession</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Every profession has different exposure. Find guidance tailored to your specific role — including mandatory requirements, typical costs and the risks that matter most.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {professionTypes.map(pt => (
              <Link key={pt.slug} href={`/professions/${pt.slug}/`}
                className="group flex items-start gap-4 bg-gray-800 border border-gray-700 rounded-2xl p-5 hover:border-orange-500/60 hover:bg-gray-800 transition-all duration-200">
                <div className="w-11 h-11 bg-orange-500/15 border border-orange-500/20 rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-orange-500/25 transition-colors">
                  {pt.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-white text-sm mb-1 group-hover:text-orange-400 transition-colors leading-snug">{pt.name}</h3>
                  <p className="text-xs text-orange-400 font-semibold mb-1">{pt.avgCost}</p>
                  <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">View cover options →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-16 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">How It Works</h2>
            <p className="text-brand-300 max-w-xl mx-auto">Getting the right professional indemnity cover is straightforward when you work with a specialist adviser.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: '01', title: 'Tell Us About Your Work', desc: 'Complete the quick quote form — profession, cover type and level needed. Takes 2 minutes.' },
              { n: '02', title: 'Adviser Reviews Your Needs', desc: 'A licensed insurance adviser assesses your risk profile and coverage requirements.' },
              { n: '03', title: 'Market Comparison', desc: 'Multiple insurers are approached — QBE, Dual, BHSI, Vero, AIG — to find the best fit.' },
              { n: '04', title: 'Get Your Quote', desc: 'Receive a personalised quote quickly. No obligation, no pressure.' },
            ].map(step => (
              <div key={step.n} className="text-center">
                <div className="w-14 h-14 rounded-full bg-brand-700 border-2 border-brand-500 flex items-center justify-center text-gold-400 font-extrabold text-lg mx-auto mb-4">{step.n}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{step.title}</h3>
                <p className="text-brand-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact/"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-lg">
              Get Started — Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">Guides & Resources</h2>
              <p className="text-slate-600 mt-1">Expert guidance on professional indemnity and liability insurance in NZ.</p>
            </div>
            <Link href="/blog/" className="text-brand-700 font-bold text-sm hover:text-brand-800">All Guides →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}/`}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
                <div className="h-44 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold text-brand-700 uppercase tracking-wide">{post.category}</span>
                  <h3 className="font-bold text-slate-900 mt-1 mb-2 text-sm leading-snug group-hover:text-brand-700 transition">{post.title}</h3>
                  <p className="text-xs text-slate-600 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-3 text-xs text-slate-500">{post.readTime}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Quick answers to common questions about professional indemnity insurance in New Zealand.</p>
          </div>
          <div className="space-y-3">
            {featuredFaqs.map((faq, i) => (
              <details key={i} className="border border-slate-200 rounded-xl p-5 cursor-pointer hover:bg-slate-50">
                <summary className="font-semibold text-slate-900 text-sm flex items-center justify-between">
                  <span>{faq.q}</span>
                  <span className="text-brand-600 ml-4 flex-shrink-0">+</span>
                </summary>
                <div className="mt-4 text-slate-700 text-sm leading-relaxed pt-3 border-t border-slate-200">{faq.a}</div>
              </details>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/faq/" className="text-brand-700 font-bold text-sm hover:text-brand-800">View All FAQs →</Link>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 bg-gradient-to-br from-brand-900 to-brand-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Get Covered?</h2>
          <p className="text-brand-300 text-lg mb-8">Licensed advisers compare the market and get back to you quickly — at no cost to you.</p>
          <Link href="/contact/"
            className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-extrabold px-10 py-4 rounded-2xl transition-colors shadow-xl text-lg">
            Get a Quote →
          </Link>
          <p className="text-brand-500 text-xs mt-4">No spam. No obligation. NZ-based advisers only.</p>
        </div>
      </div>
    </div>
  )
}
