export interface ProfessionType {
  slug: string
  name: string
  icon: string
  shortDesc: string
  description: string
  avgCost: string
  coverageNeeded: string[]
  keyRisks: string[]
  faqs: { q: string; a: string }[]
  image: string
}

export const professionTypes: ProfessionType[] = [
  {
    slug: 'accountants',
    name: 'Accountants & Bookkeepers',
    icon: '📊',
    shortDesc: 'Professional indemnity insurance for accountants, tax agents and bookkeepers in New Zealand.',
    description: "Accountants and bookkeepers carry significant exposure to professional indemnity claims. A miscalculated tax return, an error in financial statements, or missed filing deadlines can result in clients suffering serious financial losses — and holding you liable. NZ accountants face an average PI insurance cost of around $75/month, with most opting for $1M cover. Membership of Chartered Accountants Australia and New Zealand (CAANZ) typically requires mandatory PI insurance as a condition of practising.",
    avgCost: '$75–$120/month',
    coverageNeeded: [
      'Professional Indemnity (mandatory for CAANZ members)',
      'Public Liability',
      'Cyber Liability (for client data handling)',
      "Employers' Liability (if you have staff)",
    ],
    keyRisks: [
      'Tax return errors leading to IRD penalties for clients',
      'Incorrect financial statements affecting lending decisions',
      'Missed filing deadlines and compliance failures',
      'GST and payroll tax miscalculations',
      'Data breaches affecting client financial records',
      'Advice on business structure or investments',
    ],
    faqs: [
      { q: 'Is PI insurance mandatory for NZ accountants?', a: "CAANZ membership requires professional indemnity insurance as a practising condition. Even non-members are strongly advised to hold PI cover, as clients increasingly request it before engagement. Most professional liability claims against accountants arise from tax errors, missed deadlines, and incorrect financial advice." },
      { q: 'What level of PI cover do NZ accountants need?', a: "Most NZ accountants choose between $500,000 and $2 million in cover. The right level depends on your client base, the size of transactions you advise on, and any contractual requirements. CAANZ provides minimum cover guidelines for members. BizCover data shows $1M is the most popular level for NZ accountants." },
      { q: 'Does PI insurance cover bookkeepers?', a: "Yes — bookkeepers who provide professional services, prepare financial records, or process payroll face the same exposure to claims as accountants. If an error in your books leads to a client's financial loss, you could face a claim. PI insurance is strongly recommended even for sole-trader bookkeepers." },
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=80',
  },
  {
    slug: 'architects-engineers',
    name: 'Architects & Engineers',
    icon: '📐',
    shortDesc: 'PI and liability insurance for architects, engineers, designers and construction consultants in NZ.',
    description: "Architects and engineers carry some of the highest professional indemnity exposures of any profession. Errors in design, incorrect specifications, or structural miscalculations can result in multi-million dollar construction defects, personal injury, and catastrophic property damage. NZ architects average around $160/month for PI insurance, reflecting the high-value nature of claims in this sector. Following the government's November 2025 announcement of mandatory PI requirements for the construction sector, cover is now increasingly non-negotiable.",
    avgCost: '$160–$300/month',
    coverageNeeded: [
      'Professional Indemnity (mandatory for licensed practitioners)',
      'Public Liability',
      'Statutory Liability',
      "Employers' Liability (if employing staff or contractors)",
    ],
    keyRisks: [
      'Structural design errors and defects',
      'Incorrect specifications leading to construction failures',
      'Delays causing financial loss to clients',
      'Building consent and code compliance issues',
      'Health and safety failures on site',
      'Environmental non-compliance',
    ],
    faqs: [
      { q: 'Is PI insurance mandatory for NZ architects?', a: "Licensed building practitioners (LBPs) and architects registered under the Architects Act 2022 face strong professional obligations around PI insurance. The government's November 2025 announcement introduced mandatory home warranty and PI requirements for the construction sector. Most professional bodies and client contracts require minimum cover levels." },
      { q: 'What happens if an architectural error causes a structural defect?', a: "If your design error results in a structural defect, the building owner can make a claim against you personally and your business. PI insurance covers your legal defence costs and any compensation awarded, protecting your personal assets and continuing business viability. Claims in this sector can reach millions of dollars." },
      { q: 'Do subcontractors and specialist engineers need PI?', a: "Yes. Structural engineers, geotechnical engineers, MEP (mechanical, electrical, plumbing) consultants, and other specialist advisers all carry professional liability. Even if you are a subcontractor, a client or head contractor can sue you directly for your portion of any professional error." },
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&auto=format&fit=crop&q=80',
  },
  {
    slug: 'it-consultants',
    name: 'IT Consultants & Developers',
    icon: '💻',
    shortDesc: 'Professional indemnity and cyber liability insurance for IT professionals, software developers and technology consultants.',
    description: "IT consultants and software developers face unique professional liability risks: a system outage, data breach, or software error can cost clients far more than the original project fee. Claims can cover lost revenue, emergency response costs, regulatory penalties, and reputational damage. NZ IT consultants average around $80–$100/month for combined PI and cyber liability cover. Contracts with enterprise clients and government agencies increasingly require specific minimum PI limits.",
    avgCost: '$80–$150/month',
    coverageNeeded: [
      'Professional Indemnity',
      'Cyber Liability',
      'Public Liability',
      "Employers' Liability (if employing staff or contractors)",
    ],
    keyRisks: [
      'Software errors causing business disruption or data loss',
      'System downtime and outage claims',
      'Data breaches and privacy violations',
      'Cybersecurity failures',
      'Project delays and cost overruns',
      'Intellectual property infringement',
    ],
    faqs: [
      { q: 'Do freelance developers need PI insurance?', a: "Yes — even freelancers can face significant PI claims if their code causes a client's system to fail, results in data loss, or leads to a security breach. Many enterprise and government clients require minimum PI cover ($1M or more) before engaging contractors. Cover can start from around $60–$80/month for sole traders." },
      { q: 'What is the difference between PI and cyber insurance for IT professionals?', a: "PI covers claims arising from professional errors, omissions, or negligence in the services you provide. Cyber insurance covers first-party costs (your own system breach, data recovery, notification costs) and third-party claims from others affected by your breach. IT professionals benefit most from having both covers." },
      { q: 'Does PI cover claims from open source or third-party components?', a: "It depends on the policy and circumstances. If a client suffers loss because of a vulnerability in a third-party component you selected, integrated, or failed to patch in the systems you managed, you may face a claim. PI insurance covers your legal defence costs and compensation in such scenarios, subject to policy terms." },
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80',
  },
  {
    slug: 'financial-advisers',
    name: 'Financial Advisers',
    icon: '💰',
    shortDesc: 'Professional indemnity insurance for financial advisers, mortgage brokers and investment advisers under FMCA.',
    description: "NZ financial advisers are regulated under the Financial Markets Conduct Act (FMCA) 2013 and must hold a Financial Advice Provider (FAP) licence. FAP licence conditions include holding professional indemnity insurance at adequate levels relative to the advice you give. Financial advisers who provide investment, mortgage or insurance advice face serious exposure to client claims — especially where clients allege they suffered losses based on your recommendations.",
    avgCost: '$100–$200/month',
    coverageNeeded: [
      'Professional Indemnity (FMCA licence condition)',
      'Public Liability',
      'Cyber Liability (for client data)',
      "Employers' Liability (for practices with staff)",
    ],
    keyRisks: [
      'Investment advice leading to client losses',
      'Mortgage advice errors or missed product options',
      'Insurance advice failures (wrong product recommended)',
      'Regulatory breaches and FMA investigations',
      'Breach of FMCA or Code of Professional Conduct',
      'Client data breaches and privacy failures',
    ],
    faqs: [
      { q: 'Is PI insurance mandatory for NZ financial advisers?', a: "Yes. FAP licence conditions under the Financial Markets Conduct Act 2013 require financial advice providers to hold professional indemnity insurance. The FMA assesses your PI arrangements as part of the licensing and monitoring process. Failure to maintain adequate PI cover can result in licence conditions being imposed or revoked." },
      { q: 'What level of PI cover does a financial adviser need?', a: "The FMA does not prescribe a fixed minimum, but expects PI insurance to be appropriate for the nature and scale of your advice. Most NZ financial advisers carry between $1M and $5M in PI cover. Your insurer and compliance adviser can help you determine the right level for your practice." },
      { q: 'Does PI insurance cover FMA investigations?', a: "Most PI policies cover investigation costs and legal representation in regulatory proceedings, including FMA investigations. However, policies vary — some cover only the investigation stage, while others also cover resulting fines (where legally insurable). Always check your policy schedule carefully." },
    ],
    image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=1200&auto=format&fit=crop&q=80',
  },
  {
    slug: 'real-estate-agents',
    name: 'Real Estate Agents',
    icon: '🏠',
    shortDesc: 'Professional indemnity and liability insurance for licensed real estate agents and property managers in NZ.',
    description: "Real estate agents and property managers are licensed under the Real Estate Agents Act 2008 and regulated by the Real Estate Authority (REA). PI insurance is required as a condition of REINZ membership and is expected by the REA as part of professional practice standards. Given the high transaction values involved in NZ property, even a small percentage error can result in substantial claims. Claims commonly arise from disclosure failures, misrepresentation, and property management disputes.",
    avgCost: '$90–$160/month',
    coverageNeeded: [
      'Professional Indemnity (REA/REINZ requirement)',
      'Public Liability',
      "Employers' Liability (for agencies with staff)",
      'Statutory Liability',
    ],
    keyRisks: [
      'Misrepresentation in property marketing',
      'Failure to disclose known defects',
      'Underquoting or overquoting valuations',
      'Property management errors (unpaid rent, maintenance)',
      'Breach of agency agreement',
      'REA disciplinary proceedings',
    ],
    faqs: [
      { q: 'Is PI insurance required for NZ real estate agents?', a: "Yes. REINZ membership conditions require professional indemnity insurance, and the REA expects agents to carry appropriate PI cover as part of their professional obligations. Most agencies carry group policies covering all licensed agents, but individual agents and sole operators should verify their coverage." },
      { q: 'What claims do real estate agents face?', a: "Common claims include misrepresentation about property features or LIM reports, failure to disclose known defects, disputes over agency agreements, and rental property management errors such as unpaid rent or maintenance failures. REA disciplinary proceedings can also trigger policy coverage for legal defence costs." },
      { q: 'Do property managers need separate PI insurance?', a: "Property managers who provide professional property management services should hold PI insurance, whether they operate within a real estate agency or independently. Unbundled property management services are increasingly common, and independent property managers may not be covered under a principal's policy." },
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80',
  },
  {
    slug: 'consultants',
    name: 'Management Consultants',
    icon: '📈',
    shortDesc: 'Professional indemnity insurance for management consultants, business advisers and strategy professionals in NZ.',
    description: "Management consultants and business advisers carry professional liability for the recommendations, strategies and analyses they provide. If a client acts on your advice and suffers financial loss — whether from a failed restructure, flawed market analysis, or incorrect financial modelling — they can hold you liable. NZ management consultants average around $65/month for PI cover, with costs rising significantly for those advising on large capital projects or M&A transactions.",
    avgCost: '$65–$130/month',
    coverageNeeded: [
      'Professional Indemnity',
      'Public Liability',
      'Cyber Liability (for client data and systems)',
      "Employers' Liability (if employing staff)",
    ],
    keyRisks: [
      'Flawed strategic recommendations causing financial loss',
      'Market analysis errors affecting business decisions',
      'Project management failures and cost overruns',
      'M&A advisory errors',
      'Change management failures',
      'Confidential client information disclosure',
    ],
    faqs: [
      { q: 'Do management consultants need PI insurance?', a: "Yes — any consultant providing professional advice, analysis or project management services faces professional liability. Clients who suffer financial loss because of your recommendations can make a claim. Many enterprise and government clients require minimum PI cover ($1M or more) in their contracts." },
      { q: 'What does PI insurance cover for consultants?', a: "PI insurance covers your legal defence costs and any compensation awarded if a client claims your advice, analysis or project management caused them a financial loss. It also covers claims of breach of confidentiality, intellectual property infringement, and errors in deliverables." },
      { q: 'How much PI cover does a management consultant need?', a: "Most NZ management consultants carry between $500,000 and $2M in PI cover. If you advise on large capital projects, M&A, or government contracts, you may need $5M or more. The right level depends on the scale of your clients and the financial exposure your recommendations create." },
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & Allied Health',
    icon: '🏥',
    shortDesc: 'Professional indemnity and liability insurance for GPs, specialists, nurses, physios and allied health practitioners in NZ.',
    description: "Healthcare professionals carry some of the most serious professional liability exposures of any sector. While ACC covers most patient injury claims in NZ, it does not cover all scenarios — particularly claims arising from advice, informed consent failures, or treatment decisions. Allied health practitioners including physiotherapists, occupational therapists, dietitians, and psychologists face growing PI claim exposure as patient expectations rise. Professional bodies and registration requirements increasingly mandate PI insurance.",
    avgCost: '$100–$250/month',
    coverageNeeded: [
      'Professional Indemnity (mandatory for most registrations)',
      'Public Liability',
      'Statutory Liability (for clinic operators)',
      "Employers' Liability (for practices with staff)",
    ],
    keyRisks: [
      'Treatment errors not covered by ACC',
      'Informed consent failures',
      'Misdiagnosis or delayed diagnosis claims',
      'Prescription errors',
      'Privacy and health information breaches',
      'Health and Disability Commissioner investigations',
    ],
    faqs: [
      { q: 'Does ACC cover all healthcare claims in NZ?', a: "ACC covers personal injury caused by accident in NZ, including some treatment injury. However, ACC does not cover all healthcare-related claims — particularly those arising from advice, informed consent failures, or circumstances where ACC declines cover. PI insurance provides protection for gaps that ACC does not cover." },
      { q: 'Is PI insurance mandatory for NZ healthcare practitioners?', a: "Most healthcare professional registration bodies in NZ — including the Medical Council, Nursing Council, Physiotherapy Board, and Psychologists Board — require practitioners to hold appropriate PI insurance. Some indemnity cover is arranged through professional bodies, but individual practitioners should verify their coverage." },
      { q: 'What does a Health and Disability Commissioner investigation cover?', a: "If a complaint is made to the HDC about your practice, you will need legal representation throughout the investigation process. PI insurance typically covers your legal defence costs during HDC investigations, reducing the personal financial burden of navigating the process." },
    ],
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1200&auto=format&fit=crop&q=80',
  },
  {
    slug: 'mortgage-brokers',
    name: 'Mortgage Brokers',
    icon: '🏦',
    shortDesc: 'Professional indemnity insurance for mortgage advisers and home loan brokers regulated under FMCA in New Zealand.',
    description: "Mortgage brokers and home loan advisers are regulated under the Financial Markets Conduct Act and must hold a Financial Advice Provider (FAP) licence. PI insurance is a FAP licence condition. Mortgage brokers face claims when clients allege they were placed in an unsuitable loan product, received incorrect advice about affordability, or experienced financial harm from a refinancing recommendation. In an environment of rising interest rates and changing lending standards, the exposure for mortgage advisers is significant.",
    avgCost: '$115–$200/month',
    coverageNeeded: [
      'Professional Indemnity (FMCA FAP licence condition)',
      'Public Liability',
      'Cyber Liability (for client financial data)',
      "Employers' Liability (for brokerages with staff)",
    ],
    keyRisks: [
      'Unsuitable loan product recommendations',
      'Incorrect affordability or serviceability assessment',
      'FMA regulatory investigations',
      'Breach of CCCFA responsible lending obligations',
      'Client data breaches',
      'Anti-money laundering compliance failures',
    ],
    faqs: [
      { q: 'Is PI insurance required for mortgage brokers in NZ?', a: "Yes. FAP licence conditions under the FMCA require mortgage advisers to hold professional indemnity insurance. The FMA assesses PI arrangements as part of its licensing and ongoing monitoring of financial advice providers. Inadequate PI cover can jeopardise your FAP licence." },
      { q: 'What claims do mortgage brokers face?', a: "Common claims include placing clients in unsuitable loan products, failing to disclose broker commission conflicts, errors in affordability assessments, and advice that results in clients entering loan arrangements they cannot service. CCCFA responsible lending obligations also create regulatory risk." },
      { q: 'How much PI cover does a mortgage broker need?', a: "Most NZ mortgage brokers carry between $1M and $3M in PI cover. The right amount depends on the volume and value of loans you advise on, your client base, and any FAP licence conditions. Your compliance adviser or FAP licence supervisor can help determine appropriate cover levels." },
    ],
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&auto=format&fit=crop&q=80',
  },
]
