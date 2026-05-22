export interface Provider {
  name: string
  description: string
  strengths: string[]
  coverageTypes: string[]
  logo: string
  website: string
  nzPresence: boolean
}

export const providers: Provider[] = [
  {
    name: 'QBE Insurance',
    description: 'One of the leading PI and liability insurers in the NZ market, QBE provides professional indemnity, public liability, management liability and statutory liability products through licensed brokers and advisers.',
    strengths: [
      'Strong NZ PI market presence',
      'Broad coverage for complex professions',
      'Experienced claims team',
      'Flexible cover limits to $20M+',
    ],
    coverageTypes: ['Professional Indemnity', 'Public Liability', 'Management Liability', "D&O", 'Statutory Liability'],
    logo: '🔵',
    website: 'https://www.qbe.com/nz',
    nzPresence: true,
  },
  {
    name: 'Dual NZ',
    description: 'Dual (a Howden Group company) is a specialist professional lines and management liability underwriter active in the NZ market, known for innovative policy wordings and capacity for harder-to-place risks.',
    strengths: [
      'Specialist professional lines underwriter',
      'Innovative policy wordings',
      'Strong for IT and tech professionals',
      'Competitive pricing for emerging professions',
    ],
    coverageTypes: ['Professional Indemnity', 'Cyber Liability', 'Management Liability', "D&O", "Employers' Liability"],
    logo: '🟢',
    website: 'https://www.dualgroup.com/nz',
    nzPresence: true,
  },
  {
    name: 'BHSI (Berkshire Hathaway)',
    description: 'Berkshire Hathaway Specialty Insurance (BHSI) is a leading global insurer with a growing NZ presence. Known for financial strength and broad professional lines capacity.',
    strengths: [
      'Outstanding financial security (A++ AM Best)',
      'Broad professional lines capacity',
      'Strong for engineering and construction PI',
      'Competitive for high-value accounts',
    ],
    coverageTypes: ['Professional Indemnity', 'Management Liability', "D&O", 'Statutory Liability', 'Cyber Liability'],
    logo: '🟠',
    website: 'https://www.bhspecialty.com',
    nzPresence: true,
  },
  {
    name: 'Vero Insurance',
    description: 'Vero (part of Suncorp Group) provides professional liability and management liability products in New Zealand, with a focus on SMEs and mid-market businesses.',
    strengths: [
      'Well-established NZ insurer',
      'Competitive for SME management liability',
      'Accessible through broad adviser network',
      'Strong local claims support',
    ],
    coverageTypes: ['Management Liability', 'Public Liability', 'Statutory Liability', "D&O"],
    logo: '🔴',
    website: 'https://www.vero.co.nz',
    nzPresence: true,
  },
  {
    name: 'AIG New Zealand',
    description: 'AIG is a global leader in financial lines and professional liability insurance, offering PI, D&O and management liability products in New Zealand for mid-market and large clients.',
    strengths: [
      'Global financial lines leader',
      'Strong for complex and high-limit PI',
      'Experienced in financial services PI',
      'Broad management liability products',
    ],
    coverageTypes: ['Professional Indemnity', 'Management Liability', "D&O", "Employers' Liability", 'Cyber Liability'],
    logo: '🟣',
    website: 'https://www.aig.co.nz',
    nzPresence: true,
  },
]
