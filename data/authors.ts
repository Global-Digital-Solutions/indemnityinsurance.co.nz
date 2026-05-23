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
    bio: 'Sarah Thompson specialises in explaining complex insurance products to New Zealand business owners and professionals. With a background in business journalism and financial services communications, she covers topics ranging from public liability and employment practices to cyber insurance and management liability. Sarah works closely with licensed NZ insurance advisers to ensure all content is accurate and reflects current NZ market conditions.',
    shortBio: 'Insurance content specialist focused on NZ business liability and professional indemnity.',
    initials: 'ST',
    expertise: ['Public Liability', 'Employment Practices Liability', 'Management Liability', 'Cyber Insurance', 'SME Insurance'],
  },
  {
    slug: 'james-whitfield',
    name: 'James Whitfield',
    title: 'Licensed Insurance Adviser, Cover4You',
    bio: 'James Whitfield is a licensed insurance adviser at Cover4You with over 12 years of experience in professional liability and financial lines insurance in New Zealand. He advises professionals across accounting, engineering, financial services, healthcare, and construction on PI insurance structure, cover limits, and risk management. James is a member of the Insurance Advisers Association of New Zealand (IAANZ) and holds a NZ Certificate in Financial Services (Level 5).',
    shortBio: 'Licensed NZ insurance adviser specialising in professional indemnity and financial lines.',
    initials: 'JW',
    expertise: ['Professional Indemnity', 'Directors & Officers Liability', 'Financial Lines', 'Construction PI', 'FMCA Compliance'],
  },
]
