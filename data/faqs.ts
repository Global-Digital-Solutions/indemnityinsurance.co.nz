export interface FAQ {
  q: string
  a: string
  category?: string
}

export const faqs: FAQ[] = [
  {
    q: 'What is professional indemnity insurance and do I need it?',
    a: "Professional indemnity (PI) insurance protects you if a client claims your professional advice or services caused them a financial loss. It covers your legal defence costs and any compensation awarded — regardless of whether the claim is justified. If you provide professional advice, expertise or specialised services in New Zealand, PI insurance is essential. It is legally required for financial advisers (FMCA), accountants (CAANZ), real estate agents (REA/REINZ), architects (Architects Act 2022), lawyers, and many healthcare practitioners.",
    category: 'Basics',
  },
  {
    q: 'What is the difference between "claims-made" and "occurrence" PI insurance?',
    a: "PI insurance in New Zealand operates almost universally on a 'claims-made' basis. This means the policy that responds to a claim is the one active when the claim is made — not when the work was done. This is why it is important to maintain continuous PI insurance and why run-off cover is needed when you retire or stop practising. Occurrence-based policies (which respond based on when the incident happened) are rare in the NZ PI market.",
    category: 'Basics',
  },
  {
    q: 'How much does professional indemnity insurance cost in New Zealand?',
    a: "The average PI insurance premium for NZ professionals is approximately $85–$86 per month (BizCover FY2024 data, 4,000+ NZ businesses). However, costs vary by profession: architects and engineers pay ~$160/month, mortgage brokers ~$115/month, accountants ~$75/month, and marketers ~$65/month. Cover levels from $250,000 to $10M+ are available. PI insurance premiums are fully tax deductible as a business expense.",
    category: 'Cost',
  },
  {
    q: 'What is a retroactive date and why does it matter?',
    a: "Your retroactive date is the earliest date from which past work is covered under your current PI policy. As long as your work was done after the retroactive date and the claim is made during the policy period, you are covered. If you switch insurers, always ensure your new policy maintains the same retroactive date — otherwise historical work may be left exposed. Keep your retroactive date the same from policy inception onwards.",
    category: 'Basics',
  },
  {
    q: 'Do I need run-off cover when I retire or close my business?',
    a: "Yes — strongly recommended. Because PI insurance is claims-made, if you let your policy lapse after retiring, any future claims from past work will not be covered. Run-off cover (also called tail cover) extends your protection after you stop practising. It is available for 1, 3, 5 or 7 years, and typically costs 1.5–2x your last annual premium for 3-year cover. For architects and engineers, 6–7 years is recommended due to long construction limitation periods.",
    category: 'Cover',
  },
  {
    q: 'Is PI insurance required for NZ financial advisers?',
    a: "Yes. Financial advice providers (FAPs) must hold PI insurance as a condition of their FAP licence under the Financial Markets Conduct Act (FMCA). The FMA assesses whether your PI arrangements are adequate for your advice activities and client base during licensing and monitoring reviews. Inadequate PI cover can jeopardise your FAP licence.",
    category: 'Regulatory',
  },
  {
    q: 'What is the difference between PI insurance and public liability?',
    a: "Professional indemnity (PI) covers financial loss suffered by a client due to your professional advice errors. Public liability (PL) covers bodily injury or property damage caused to third parties by your business activities. They cover fundamentally different risks — most professionals need both. PI alone does not cover a client who trips in your office; PL alone does not cover a client who suffers financial loss from your advice.",
    category: 'Basics',
  },
  {
    q: 'What is management liability insurance?',
    a: "Management liability insurance bundles several covers into one policy: Directors' and Officers' (D&O) liability, Employment Practices Liability (EPL), Statutory Liability, and Crime/Employee Dishonesty. It is designed for SMEs and growing businesses that need comprehensive management protection without separate policies for each risk. For most NZ SMEs, a management liability policy is more cost-effective than purchasing each cover separately.",
    category: 'Cover',
  },
  {
    q: 'Does ACC cover all professional liability claims for healthcare practitioners?',
    a: "No. ACC covers personal injury caused by accident or treatment injury in New Zealand, but it does not cover all healthcare-related claims. Claims arising from advice, informed consent failures, or circumstances where ACC declines cover are not covered by ACC. PI insurance covers these gaps, as well as the legal costs of Health and Disability Commissioner (HDC) investigations — which can be significant regardless of outcome.",
    category: 'Cover',
  },
  {
    q: 'How do I choose the right level of PI cover?',
    a: "Consider: (1) Contract requirements — many clients and government contracts specify minimum PI limits; (2) Professional body requirements — CAANZ, FMA, REA and others may set minimums; (3) The scale of your clients' reliance on your advice — if you advise on multi-million dollar transactions, you need commensurate cover; (4) Your annual revenue — some insurers use revenue-based minimums. Most NZ small businesses start at $1M cover; professionals in engineering, finance and law often need $2M–$5M+.",
    category: 'Cost',
  },
  {
    q: 'Can I get PI insurance as a sole trader or freelancer?',
    a: "Yes — PI insurance is available for sole traders, freelancers and self-employed contractors, not just companies. In fact, sole traders have greater personal exposure than company directors because there is no corporate liability shield. As a sole trader, a claim can be enforced against your personal assets including property, savings and vehicles. PI insurance is particularly important for sole-trader professionals.",
    category: 'Basics',
  },
  {
    q: 'Does PI insurance cover employee mistakes as well as my own?',
    a: "Yes — most PI policies cover claims arising from the professional services of all employees and contractors working under your direction or on your behalf. However, it is important to check the policy definition of 'insured persons' to confirm this. Some policies require you to list specific staff or have annual revenue declarations that include employees' work.",
    category: 'Cover',
  },
  {
    q: 'What should I do if a client threatens to make a claim?',
    a: "Notify your insurer as soon as you become aware of any circumstance that might give rise to a claim — even before a formal claim is made. Most PI policies require timely notification of circumstances. Do not make any admissions of liability or attempt to settle the matter yourself without involving your insurer. Your insurer will appoint experienced legal counsel to manage the situation.",
    category: 'Claims',
  },
  {
    q: 'Is professional indemnity insurance tax deductible in NZ?',
    a: "Yes. PI insurance premiums are a legitimate business expense and are fully tax deductible for NZ businesses and self-employed professionals under the Income Tax Act 2007. This applies whether you are a sole trader, partnership, company or trust. The deduction reduces the effective cost of PI insurance significantly.",
    category: 'Cost',
  },
  {
    q: 'What is statutory liability insurance and who needs it?',
    a: "Statutory liability insurance covers your business and directors against legal defence costs and fines arising from unintentional breaches of NZ legislation, including the Health and Safety at Work Act, Fair Trading Act, Employment Relations Act, and Resource Management Act. Any NZ business that employs people or operates in a regulated industry should consider statutory liability insurance — particularly those in construction, healthcare, food production, or environmental sectors.",
    category: 'Cover',
  },
]
