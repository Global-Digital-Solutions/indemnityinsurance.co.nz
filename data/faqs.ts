export interface FAQ {
  q: string
  a: string
  category?: string
}

export const faqs: FAQ[] = [
  {
    q: 'What is professional indemnity insurance and do I need it?',
    a: "Professional indemnity (PI) insurance protects you if a client claims your professional advice or services caused them a financial loss. It covers your legal defence costs and any compensation awarded — regardless of whether the claim is justified. If you provide professional advice, expertise or specialised services in New Zealand, PI insurance is essential. Very few New Zealanders are legally required to hold it, which is the opposite of what most websites say. No statute requires PI of financial advisers, real estate agents, architects, engineers, nurses or social workers. Where a requirement does exist it usually comes from a membership body or a client contract rather than from a regulator: REINZ member agencies must hold a minimum of $1M, self-employed ADNZ Professional members $250,000, and a CA ANZ Certificate of Public Practice requires appropriate cover. Check which of the three applies to you, because they carry very different consequences.",
    category: 'Basics',
  },
  {
    q: 'What is the difference between "claims-made" and "occurrence" PI insurance?',
    a: "PI insurance in New Zealand operates almost universally on a 'claims-made' basis. This means the policy that responds to a claim is the one active when the claim is made — not when the work was done. This is why it is important to maintain continuous PI insurance and why run-off cover is needed when you retire or stop practising. Occurrence-based policies (which respond based on when the incident happened) are rare in the NZ PI market.",
    category: 'Basics',
  },
  {
    q: 'How much does professional indemnity insurance cost in New Zealand?',
    a: "Nobody in New Zealand publishes a reliable answer, and we would rather tell you that than invent one. PI here is broker-distributed and individually underwritten, and neither of the two main NZ underwriters publishes rate tables. The only official cost guidance we can find is the Government's estimate, published in November 2025 to support the building reforms, that PI for architects typically costs between $1,500 and $3,000 per person each year, often covered by the firm. Treat that as a policy estimate with no methodology attached. What actually sets your premium is your fee income, the limit of indemnity, the work you do, your claims history, your excess and your retroactive date. PI premiums are deductible as a business expense.",
    category: 'Cost',
  },
  {
    q: 'What is a retroactive date and why does it matter?',
    a: "Your retroactive date is the earliest date from which past work is covered under your current PI policy. As long as your work was done after the retroactive date and the claim is made during the policy period, you are covered. If you switch insurers, always ensure your new policy maintains the same retroactive date — otherwise historical work may be left exposed. Keep your retroactive date the same from policy inception onwards.",
    category: 'Basics',
  },
  {
    q: 'Do I need run-off cover when I retire or close my business?',
    a: "Yes — strongly recommended. Because PI insurance is claims-made, if you let your policy lapse after retiring, any future claims from past work will not be covered. Run-off cover (also called tail cover) extends your protection after you stop practising. It is commonly offered in multi-year blocks. We have removed the pricing multiples we used to publish here because no New Zealand source supports them — run-off is negotiated at the point of purchase and varies with the insurer, the period and the book of work. Ask for run-off terms in writing at renewal, while you still have leverage, rather than at the point you stop trading. For building work the relevant horizon is section 393 of the Building Act 2004, which imposes an absolute ten-year longstop on civil proceedings, running from the act or omission.",
    category: 'Cover',
  },
  {
    q: 'Is PI insurance required for NZ financial advisers?',
    a: "No, and this is the most common misconception in the New Zealand advice market. PI is not among the FMA's seven standard conditions for a full FAP licence — those are record keeping, internal complaints process, regulatory returns, outsourcing, business continuity and technology systems, ongoing requirements, and notification of material changes. The FMA consulted on adding a PI condition on 17 June 2020 and confirmed on 6 November 2020 that it had decided not to include it. The Code of Professional Conduct does not require it either, and there is no obligation to disclose whether you hold it. What is true is that many product providers require PI cover under agency or distribution agreements, which is a contractual requirement from your counterparty rather than a regulatory one.",
    category: 'Regulatory',
  },
  {
    q: 'What is the difference between PI insurance and public liability?',
    a: "Professional indemnity (PI) covers financial loss suffered by a client due to your professional advice errors. Public liability (PL) covers bodily injury or property damage caused to third parties by your business activities. They cover fundamentally different risks — most professionals need both. PI alone does not cover a client who trips in your office; PL alone does not cover a client who suffers financial loss from your advice.",
    category: 'Basics',
  },
  {
    q: 'What is management liability insurance?',
    a: "Management liability insurance bundles several covers into one policy: Directors' and Officers' (D&O) liability, Employment Practices Liability (EPL), Statutory Liability, and Crime/Employee Dishonesty. It is designed for SMEs and growing businesses that need comprehensive management protection without separate policies for each risk. These covers are commonly bundled, but whether a bundle costs less than separate policies depends on how the individual components are underwritten for your business. We have removed the percentage saving we used to publish here because no New Zealand source supports it.",
    category: 'Cover',
  },
  {
    q: 'Does ACC cover all professional liability claims for healthcare practitioners?',
    a: "No. ACC covers personal injury caused by accident or treatment injury in New Zealand, but it does not cover all healthcare-related claims. Claims arising from advice, informed consent failures, or circumstances where ACC declines cover are not covered by ACC. Professional indemnity or medical indemnity cover can respond to these gaps, and to the legal costs of a Health and Disability Commissioner investigation, subject to the wording. One thing to know before you shop: medical indemnity in New Zealand is generally bought directly from a medical indemnity provider or through a professional body scheme rather than through a broker, and it is not cover we can arrange.",
    category: 'Cover',
  },
  {
    q: 'How do I choose the right level of PI cover?',
    a: "Start with whatever is actually imposed on you, then work up. Client and government contracts are the most common source of a minimum limit, and for most professionals the contract sets the answer. A smaller number of membership bodies set one: REINZ requires member agencies to hold at least $1M, self-employed ADNZ Professional members at least $250,000, and an engineering firm issuing a producer statement represents that it holds at least $200,000. The FMA sets none, and the REA sets none. Beyond any imposed minimum, the question is the size of the loss a client could suffer by relying on your work, which is rarely related to your fee. Also check whether defence costs sit inside or on top of the limit, and whether the limit is per claim or in the aggregate.",
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
    a: "Statutory liability insurance covers legal defence costs and representation arising from unintentional breaches of New Zealand legislation such as the Fair Trading Act, Employment Relations Act and Resource Management Act. It does not pay Health and Safety at Work Act fines, and no policy can: sections 29 and 30 of the Health and Safety at Work Act 2015 make an indemnity for an HSWA fine of no effect and make entering into one an offence. What the policy can respond to is the cost of defending you, representation during an investigation, and reparation orders, which are compensatory rather than punitive. For other statutes, whether a penalty is insurable depends on the statute and the wording, so do not assume it. Any NZ business that employs people or operates in a regulated industry should consider statutory liability insurance — particularly those in construction, healthcare, food production, or environmental sectors.",
    category: 'Cover',
  },
]
