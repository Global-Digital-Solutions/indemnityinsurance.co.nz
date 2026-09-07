import type { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog-posts'
import { coverageTypes } from '@/data/coverage-types'
import { professionTypes } from '@/data/profession-types'
import { landingPages } from '@/data/landing-pages'

const SITE = 'https://www.indemnityinsurance.co.nz'

/**
 * The sitemap used to be a static file in public/, generated once on
 * 2026-05-23. Every one of its 64 URLs carried that same hardcoded lastmod,
 * so from Google's side nothing on this site had changed since May — and
 * Search Console shows it read the sitemap once, on 28 May, and never came
 * back. 6 of 64 pages are indexed.
 *
 * Generating it here means the dates are real: a blog post carries its own
 * publication date, and everything else moves when the site is rebuilt. That
 * gives the crawler an honest reason to return.
 *
 * /thank-you/ is deliberately absent — robots.txt disallows it, and listing a
 * disallowed URL in a sitemap is a contradiction crawlers report as an error.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const built = new Date()

  const core: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: built, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE}/coverage/`, lastModified: built, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/professions/`, lastModified: built, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/compare/`, lastModified: built, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/pi-insurance-cost/`, lastModified: built, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/indemnity-insurance-for-contractors/`, lastModified: built, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/contact/`, lastModified: built, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/blog/`, lastModified: built, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE}/faq/`, lastModified: built, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/about/`, lastModified: built, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${SITE}/privacy/`, lastModified: built, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE}/terms/`, lastModified: built, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE}/disclaimer/`, lastModified: built, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const coverage: MetadataRoute.Sitemap = coverageTypes.map(c => ({
    url: `${SITE}/coverage/${c.slug}/`,
    lastModified: built,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const professions: MetadataRoute.Sitemap = professionTypes.map(p => ({
    url: `${SITE}/professions/${p.slug}/`,
    lastModified: built,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const landing: MetadataRoute.Sitemap = landingPages.map(l => ({
    url: `${SITE}/${l.slug}/`,
    lastModified: built,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const posts: MetadataRoute.Sitemap = blogPosts.map(b => ({
    url: `${SITE}/blog/${b.slug}/`,
    lastModified: new Date(b.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...core, ...coverage, ...professions, ...landing, ...posts]
}
