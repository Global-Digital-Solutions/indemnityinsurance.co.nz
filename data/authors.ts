export interface Author {
  slug: string
  name: string
  title: string
  bio: string
  shortBio: string
  initials: string
  expertise: string[]
}

export const authors: Author[] = [
  {
    slug: 'sarah-thompson',
    name: 'Sarah Thompson',
    title: 'Insurance Content Specialist',
    bio: 'Sarah Thompson specialises in explaining complex insurance products to business owners and professionals. With a background in financial services communications, she covers topics ranging from public liability and employment practices to cyber insurance and management liability.',
    shortBio: 'Insurance content specialist covering business liability and professional indemnity.',
    initials: 'ST',
    expertise: ['Public Liability', 'Employment Practices Liability', 'Management Liability', 'Cyber Insurance', 'SME Insurance'],
  },
  {
    slug: 'james-whitfield',
    name: 'James Whitfield',
    title: 'Insurance Adviser, Cover4You',
    bio: 'James Whitfield is an insurance adviser at Cover4You with over 10 years of experience in professional liability and financial lines insurance. He works with professionals across accounting, engineering, financial services, healthcare, and construction on PI insurance structure, cover limits, and risk management.',
    shortBio: 'Insurance adviser specialising in professional indemnity and financial lines, with 10+ years of experience.',
    initials: 'JW',
    expertise: ['Professional Indemnity', 'Directors & Officers Liability', 'Financial Lines', 'Construction PI', 'Management Liability'],
  },
]
