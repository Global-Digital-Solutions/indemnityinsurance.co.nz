import Link from 'next/link'
import { blogPosts } from '../../data/blog-posts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PI Insurance Blog & Guides | IndemnityInsurance.co.nz',
  description: 'Expert guides on professional indemnity insurance in New Zealand — costs, cover types, regulatory requirements and profession-specific advice.',
  alternates: { canonical: 'https://www.indemnityinsurance.co.nz/blog/' },
}

export default function BlogPage() {
  const categories = Array.from(new Set(blogPosts.map(p => p.category)))

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Guides & Resources</h1>
          <p className="text-brand-300 text-lg max-w-2xl">Expert guidance on professional indemnity and liability insurance.</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map(cat => (
              <span key={cat} className="text-xs bg-brand-800 text-brand-300 px-3 py-1 rounded-full border border-brand-700">{cat}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}/`}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-brand-300 transition-all">
              <div className="h-44 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-brand-700 uppercase tracking-wide">{post.category}</span>
                  <span className="text-slate-400 text-xs">·</span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                <h2 className="font-bold text-slate-900 text-sm leading-snug mb-2 group-hover:text-brand-700 transition line-clamp-2">{post.title}</h2>
                <p className="text-xs text-slate-600 line-clamp-2">{post.excerpt}</p>
                <div className="mt-3 text-xs text-slate-500">{new Date(post.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
