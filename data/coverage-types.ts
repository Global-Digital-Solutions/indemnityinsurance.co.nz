export interface CoverageType {
  slug: string
  name: string
  icon: string
  shortDesc: string
  description: string
  whoNeeds: string[]
  whatCovers: string[]
  avgCost: string
  image: string
  author: string
  longFormContent: string
  faqs: { q: string; a: string }[]
  keyStats: { label: string; value: string }[]
  relatedCoverage: string[]
  relatedProfessions: string[]
}

export const coverageTypes: CoverageType[] = [
  {
    slug: 'professional-indemnity',
    name: 'Professional Indemnity Insurance',
    icon: '🛡️',
    shortDesc: 'Protects professionals against claims of negligence, errors or omissions in the advice and services they provide.',
    description: 'Professional indemnity (PI) insurance covers you if a client suffers a financial loss because of a mistake, oversight or alleged negligence in the professional services you provide. It pays your legal defence costs and any resulting compensation, protecting your personal assets and business reputation.',
    whoNeeds: [
      'Accountants, bookkeepers and tax advisers',
      'Architects, engineers and designers',
      'IT consultants and software developers',
      'Financial advisers and mortgage brokers',
      'Real estate agents and property managers',
      'Management consultants and business coaches',
      'Healthcare practitioners and allied health',
      'Legal professionals and paralegals',
    ],
    whatCovers: [
      'Negligence claims from clients',
      'Errors and omissions in professional services',
      'Breach of professional duty',
      'Legal defence costs (including investigations)',
      'Court-awarded compensation and settlements',
      'Dishonest or fraudulent acts by employees',
      'Loss of documents or data',
      'Intellectual property infringement claims',
    ],
    avgCost: 'From $85/month',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    keyStats: [
      { label: 'Average monthly cost', value: 'From $85/month' },
      { label: 'Most popular limit', value: '$1 million' },
      { label: 'Policy type', value: 'Claims-made' },
    ],
    relatedCoverage: ['public-liability', 'run-off-cover', 'management-liability'],
    relatedProfessions: ['accountants', 'architects-engineers', 'it-consultants'],
    faqs: [
      {
        q: 'Is professional indemnity insurance mandatory in New Zealand?',
        a: 'PI insurance is mandatory for certain professions under New Zealand law. Financial advisers licensed under the Financial Markets Conduct Act 2013 must hold PI cover as a condition of their licence. From November 2025, mandatory PI for the construction sector has been phased in. Many professional bodies — including NZICA, NZIQS and NZIA — require PI as a condition of membership. Even where it is not strictly required by law, most commercial contracts and government tenders specify minimum PI limits.',
      },
      {
        q: 'What does "claims-made" mean for professional indemnity in NZ?',
        a: 'Claims-made means your PI policy must be active at the time a claim is lodged against you — not just when the underlying work was done. If a client makes a claim two years after a project ended and you have no current PI policy, you are personally exposed. This is why <a href="/coverage/run-off-cover/">run-off cover</a> is critical when you retire, wind up your business, or change insurers without maintaining a retroactive date.',
      },
      {
        q: 'How much professional indemnity cover do I need?',
        a: 'The right limit depends on your profession, client contracts and the value of work you handle. A $1 million limit is the most common starting point for NZ professionals and satisfies most contract requirements. Accountants, architects and financial advisers dealing with high-value engagements often carry $2 million to $5 million. DUAL NZ offers capacity up to $20 million for complex risks. Always check what limits are specified in your client contracts before selecting a limit.',
      },
      {
        q: 'What is a retroactive date on a PI policy?',
        a: 'A retroactive date is the earliest date from which work is covered under a claims-made policy. Claims arising from work done before the retroactive date are excluded. When you first take out PI, the retroactive date is typically the policy start date. If you renew with the same insurer, the retroactive date stays the same, building up a longer window of protection. Switching insurers without negotiating a matching retroactive date leaves a coverage gap for historical work.',
      },
      {
        q: 'Does PI insurance cover legal defence costs even if I win?',
        a: 'Yes. One of the most valuable features of professional indemnity insurance is that it covers your legal defence costs regardless of the outcome. Even successfully defending a meritless claim can cost tens of thousands of dollars in legal fees. The policy responds from the first dollar of defence costs, so you are not required to pay costs out of pocket and claim reimbursement later.',
      },
    ],
    longFormContent: `
<h2>What Is Professional Indemnity Insurance?</h2>
<p>Professional indemnity (PI) insurance — also called professional liability insurance — protects professionals and businesses that provide advice, expertise or specialist services. If a client alleges that your professional service caused them a financial loss, PI insurance pays your legal defence costs and any compensation the court awards or you agree to settle.</p>
<p>In New Zealand, PI insurance is a cornerstone of professional risk management. Whether you are an <a href="/professions/accountants/">accountant</a> handling complex tax matters, an <a href="/professions/architects-engineers/">architect</a> certifying building designs, or an <a href="/professions/it-consultants/">IT consultant</a> deploying critical systems, a single negligence claim can threaten the financial viability of your practice and your personal assets if you operate as a sole trader or director.</p>
<p>PI insurance is distinct from public liability insurance, which covers physical injury or property damage. PI specifically covers economic or financial loss arising from your professional services, advice or omissions — risks that general liability policies explicitly exclude.</p>

<h2>How Does Professional Indemnity Work in New Zealand?</h2>
<p>Professional indemnity policies operate on a <strong>claims-made basis</strong>. This is a critical distinction from occurrence-based policies. Under a claims-made policy:</p>
<ul>
  <li>You must have an active PI policy when the claim is first made against you — not just when the work was done.</li>
  <li>Your policy must include a retroactive date that covers the period when the work was carried out.</li>
  <li>If you cease trading without arranging <a href="/coverage/run-off-cover/">run-off cover</a>, claims arising from past work leave you personally exposed.</li>
</ul>
<p>When a claim is lodged, your insurer appoints solicitors to defend you. Most PI policies include a duty to defend clause, meaning the insurer controls the defence and pays legal costs directly. This is different from indemnity-only policies where you pay costs and seek reimbursement.</p>
<p>Typical policy limits in New Zealand range from $250,000 to $20 million. Excess (your contribution per claim) ranges from $500 for sole traders up to $25,000 or more for large firms. The excess applies to both defence costs and compensation in most standard policy wordings.</p>
<p>DUAL NZ — one of New Zealand's specialist professional liability underwriters — offers five PI policy wordings tailored to: Accountants, Consultants, Design &amp; Engineers, Financial Services, and Real Estate. This specialisation means policy wordings are tightly aligned with the specific risks of each profession rather than generic catch-all coverage.</p>

<h2>What Does Professional Indemnity Cover?</h2>
<p>A standard professional indemnity policy covers:</p>
<ul>
  <li><strong>Negligence:</strong> A structural engineer specifies the wrong load-bearing capacity and a floor fails — the client claims for repair costs and business interruption.</li>
  <li><strong>Errors and omissions:</strong> An accountant misses a tax election deadline, costing the client a significant tax refund opportunity.</li>
  <li><strong>Breach of professional duty:</strong> A financial adviser recommends an investment without conducting adequate due diligence, resulting in client loss.</li>
  <li><strong>Misleading advice:</strong> An IT consultant recommends software that fails to integrate with the client's systems, causing the client to spend significantly more on remediation.</li>
  <li><strong>Loss of documents or data:</strong> Client files — paper or electronic — are lost, damaged or corrupted in your care.</li>
  <li><strong>Intellectual property infringement:</strong> Your work inadvertently copies protected material, and the rights holder sues you and your client.</li>
  <li><strong>Defamation:</strong> Content you produce or advice you provide contains statements about a third party that are alleged to be defamatory.</li>
  <li><strong>Employee dishonesty:</strong> A staff member fraudulently alters advice or misrepresents professional findings to a client.</li>
</ul>
<p>Most policies also cover the cost of investigations by professional bodies (such as NZICA, NZIA or the Financial Markets Authority) even before a formal claim is made. This is a valuable feature given increasing regulatory scrutiny across all professions.</p>

<h2>What Is Not Covered?</h2>
<p>Understanding exclusions is as important as knowing what is covered. Standard PI exclusions include:</p>
<ul>
  <li><strong>Intentional wrongdoing:</strong> Deliberate fraud or dishonest acts by you personally (though your insurer may still defend until proven).</li>
  <li><strong>Bodily injury and property damage:</strong> These are covered by <a href="/coverage/public-liability/">public liability insurance</a>, not PI.</li>
  <li><strong>Work done before the retroactive date:</strong> Claims arising from work predating your earliest retroactive date.</li>
  <li><strong>Known claims or circumstances:</strong> Situations you were aware of before the policy incepted are excluded — a key reason to disclose everything at renewal.</li>
  <li><strong>Contractual liability beyond common law duty:</strong> Liability you assume by contract that exceeds what would apply at law is generally excluded unless specifically extended.</li>
  <li><strong>Nuclear, war or terrorism risks.</strong></li>
  <li><strong>Insolvency of clients:</strong> If a client cannot pay you and you lose fees, this is a commercial risk, not a PI claim.</li>
</ul>

<h2>Who Needs Professional Indemnity in New Zealand?</h2>
<p>PI insurance is essential for any individual or business that provides professional advice, expertise, or services for a fee. In New Zealand, that includes:</p>
<ul>
  <li><strong><a href="/professions/accountants/">Accountants and tax advisers:</a></strong> NZICA members are required to hold PI cover. Tax advice errors can result in significant IRD penalties for clients.</li>
  <li><strong><a href="/professions/architects-engineers/">Architects and engineers:</a></strong> Mandatory PI for the construction sector has been progressively introduced from November 2025. The NZ Institute of Architects requires PI as a membership condition.</li>
  <li><strong><a href="/professions/it-consultants/">IT consultants and developers:</a></strong> Software errors, data breaches caused by poor security advice, and failed system integrations are common PI claim triggers.</li>
  <li><strong><a href="/professions/financial-advisers/">Financial advisers and mortgage brokers:</a></strong> Required under the Financial Markets Conduct Act 2013 (FMCA). The FMA actively monitors compliance.</li>
  <li><strong>Real estate agents:</strong> The REA requires PI as a condition of licence, and property valuation errors generate frequent claims.</li>
  <li><strong>Management consultants:</strong> Strategic advice that leads to poor outcomes — restructuring, market entry failures — can generate large claims.</li>
  <li><strong>Healthcare practitioners:</strong> Allied health, psychologists and specialists outside the ACC system face malpractice-style claims from dissatisfied patients.</li>
  <li><strong>Legal professionals:</strong> Solicitors are required by the NZLS to hold PI cover. Even low-value errors can generate disproportionate legal costs.</li>
</ul>

<h2>How Much Does Professional Indemnity Insurance Cost in NZ?</h2>
<p>PI premiums in New Zealand typically start from around $85 per month for a sole trader in a lower-risk profession with a $1 million limit. Costs vary significantly based on:</p>
<ul>
  <li><strong>Profession and risk profile:</strong> Financial advisers, lawyers and engineers typically pay more than marketing consultants or business coaches.</li>
  <li><strong>Annual fee revenue:</strong> Premiums scale with the volume of professional services you provide — a higher turnover means a larger claims exposure.</li>
  <li><strong>Policy limit:</strong> A $1 million limit will cost materially less than a $5 million limit.</li>
  <li><strong>Excess level:</strong> Accepting a higher excess (e.g., $5,000 vs $1,000) reduces your premium.</li>
  <li><strong>Claims history:</strong> Prior claims — even those that were successfully defended — increase your premium and may require additional disclosure.</li>
  <li><strong>Nature of clients:</strong> Working with large corporates, government agencies or high-net-worth individuals increases the potential loss exposure.</li>
</ul>
<p>As a rough guide, a New Zealand sole trader accountant with $200,000 revenue carrying $1 million PI cover can expect to pay $1,000–$1,800 per year. A mid-size IT consultancy billing $2 million annually might pay $8,000–$15,000 per year for $2 million in cover. See our <a href="/pi-insurance-cost/">full PI cost guide</a> for detailed breakdowns by profession.</p>

<h2>How Much Professional Indemnity Cover Do I Need?</h2>
<p>Selecting the right PI limit requires balancing your actual risk exposure against premium cost. Consider:</p>
<ul>
  <li><strong>Contract requirements:</strong> Most commercial contracts specify a minimum PI limit — commonly $1 million, with government and corporate clients often requiring $2 million or more.</li>
  <li><strong>Value of projects:</strong> Your limit should reflect the maximum financial loss a client could suffer from your worst-case error. If you manage $5 million investment portfolios, a $1 million limit may be inadequate.</li>
  <li><strong>Profession body minimums:</strong> NZICA, NZIA and the REA specify minimum limits. Check your professional body's current requirements.</li>
  <li><strong>Legal costs:</strong> Remember that defence costs typically erode your limit in NZ policies. A claim that costs $200,000 to defend and $400,000 to settle consumes $600,000 of your limit.</li>
  <li><strong>Aggregation vs per-claim limits:</strong> Understand whether your limit is aggregate (applying to all claims in the year) or per-claim. Most SME policies are aggregate.</li>
</ul>

<h2>NZ Regulatory Requirements for Professional Indemnity</h2>
<p>Several New Zealand statutes and regulators either mandate PI or make it effectively essential:</p>
<ul>
  <li><strong>Financial Markets Conduct Act 2013 (FMCA):</strong> Financial Advice Providers (FAPs) and their advisers must hold PI insurance as a condition of their licence. The FMA specifies minimum standards.</li>
  <li><strong>Real Estate Agents Act 2008:</strong> The Real Estate Authority (REA) requires all licensed agents to hold PI cover.</li>
  <li><strong>Building (Mandatory PI) Amendment Act 2025:</strong> From November 2025, specified building practitioners must carry minimum PI cover. This is a significant regulatory change affecting the entire construction and engineering sector.</li>
  <li><strong>Companies Act 1993:</strong> Does not mandate PI, but directors face personal liability for certain breaches — PI cover alongside <a href="/coverage/directors-officers/">D&amp;O insurance</a> is considered best practice.</li>
  <li><strong>Privacy Act 2020:</strong> The Privacy Commissioner can investigate and issue compliance notices. Professionals handling personal data face regulatory exposure that PI can partially address.</li>
</ul>

<h2>Getting the Right Professional Indemnity Cover in NZ</h2>
<p>Purchasing PI insurance through a licensed insurance adviser gives you access to specialist underwriters — including DUAL NZ, QBE and BHSI — and ensures the policy is correctly structured for your profession. Key things to verify before binding cover:</p>
<ul>
  <li>The retroactive date matches or predates your earliest outstanding professional work.</li>
  <li>The policy wording covers your specific services (e.g., design-and-construct, investment advice, software development).</li>
  <li>Defence costs are included within or in addition to the limit of indemnity.</li>
  <li>The policy covers full-time and part-time employees and subcontractors you engage.</li>
  <li>Run-off provisions are available if you retire or change entities.</li>
</ul>
<p>Ready to get covered? <a href="/compare/">Compare professional indemnity options</a> or <a href="/contact/">speak to a licensed adviser</a> who can match you with the right policy for your profession and practice size.</p>
    `.trim(),
  },
  {
    slug: 'public-liability',
    name: 'Public Liability Insurance',
    icon: '🏢',
    shortDesc: 'Covers claims for third-party bodily injury or property damage arising from your business activities.',
    description: 'Public liability insurance protects your business if a client, visitor or member of the public is injured or their property is damaged as a result of your business operations. It covers legal defence costs and compensation payments, and is often required by contracts and clients before you can start work.',
    whoNeeds: [
      'Consultants and advisers visiting client sites',
      'Contractors and subcontractors',
      'Event organisers and hospitality businesses',
      'Retailers and service businesses',
      'Healthcare and wellness practitioners',
      'Fitness trainers and coaches',
      'Tradespeople and builders',
      'Any business interacting with the public',
    ],
    whatCovers: [
      'Third-party bodily injury claims',
      'Third-party property damage claims',
      'Legal defence costs',
      'Court-awarded damages and settlements',
      'Products liability (where included)',
      'On-site and off-site incidents',
      'Advertising liability',
      'Contractual liability (within limits)',
    ],
    avgCost: 'From $55/month',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80',
    author: 'sarah-thompson',
    keyStats: [
      { label: 'Average monthly cost', value: 'From $55/month' },
      { label: 'Most common limit', value: '$2 million' },
      { label: 'BizCover average', value: 'From $30/month' },
    ],
    relatedCoverage: ['professional-indemnity', 'employers-liability', 'statutory-liability'],
    relatedProfessions: ['consultants', 'architects-engineers', 'healthcare'],
    faqs: [
      {
        q: 'Is public liability insurance compulsory in New Zealand?',
        a: 'Public liability is not universally mandated by NZ law, but it is required by many contracts, venue operators, and councils before you can work or operate. Government contracts, commercial leases, building site access, and most event permits require evidence of PL cover — typically a minimum of $2 million. In practice, operating a business without PL cover is a significant financial risk that most advisers recommend against regardless of legal requirements.',
      },
      {
        q: 'Does ACC cover public liability claims in New Zealand?',
        a: "ACC covers the medical treatment and rehabilitation costs of personal injury by accident in New Zealand. However, ACC does not cover: property damage claims, pain and suffering compensation, or legal costs of defending a claim. If a client trips at your premises and suffers a serious injury, ACC covers their treatment — but they can still sue you for loss of income, property damage and other consequential losses that exceed ACC's scope. Public liability insurance covers these gaps.",
      },
      {
        q: 'What is the difference between public liability and professional indemnity?',
        a: 'Public liability covers physical risks — someone trips, falls, or has their property damaged because of your business activities. <a href="/coverage/professional-indemnity/">Professional indemnity</a> covers economic or financial risks — a client loses money because of a mistake in your professional advice or services. Most professionals need both: PL for day-to-day physical risk, PI for professional risk. Some policies offer combined PL and PI cover, which can simplify administration.',
      },
      {
        q: 'Does public liability cover my employees?',
        a: "No. Public liability covers claims made by third parties (clients, visitors, members of the public) — not your employees. Work-related injuries to employees are handled through ACC and, for non-ACC claims, through <a href='/coverage/employers-liability/'>employers' liability insurance</a>. If you are concerned about coverage for both your staff and the public, a combined management liability or business package policy may be more efficient.",
      },
      {
        q: 'How much public liability insurance do I need for NZ contracts?',
        a: 'Most commercial contracts require a minimum of $1 million PL, with government, construction and infrastructure contracts typically requiring $5 million to $20 million. Sole traders and small consultancies typically start at $2 million — this satisfies most contract requirements at a reasonable premium. Always check the insurance schedule in your contracts before selecting a limit, and ensure your policy has an any-one-occurrence limit that matches the contract requirement.',
      },
    ],
    longFormContent: `
<h2>What Is Public Liability Insurance?</h2>
<p>Public liability (PL) insurance is one of the most widely held business insurance policies in New Zealand. It protects your business when a third party — a client, a customer, a visitor, or a member of the public — suffers bodily injury or property damage as a result of your business activities. The policy pays your legal defence costs and any compensation the injured party is awarded or you agree to settle.</p>
<p>Unlike <a href="/coverage/professional-indemnity/">professional indemnity insurance</a>, which covers financial loss arising from professional advice or services, public liability covers the physical consequences of operating your business: a client slips in your office, a contractor damages a customer's property, a product you supply injures a consumer.</p>
<p>In New Zealand's commercial environment, public liability is as close to a baseline business requirement as any insurance policy. Most contracts, leases, tender documents, and site access arrangements specify minimum PL limits as a condition of engagement.</p>

<h2>How Does Public Liability Insurance Work in New Zealand?</h2>
<p>Unlike professional indemnity, public liability policies operate on an <strong>occurrence basis</strong>. This means that what matters is when the incident occurred — not when the claim is made. If a client injures themselves at your premises in March, and they file a claim in December, your policy in place at the time of the incident in March responds.</p>
<p>When a PL claim is made, the process typically works as follows:</p>
<ol>
  <li>You notify your insurer as soon as you become aware of the incident or claim (prompt notification is critical — late notification can jeopardise cover).</li>
  <li>Your insurer appoints a solicitor to assess and defend the claim.</li>
  <li>If liability is established or a settlement is agreed, your insurer pays compensation up to your policy limit, less your excess.</li>
  <li>Your insurer may also pay investigation costs and court costs in addition to, or within, your limit of indemnity — check your policy wording.</li>
</ol>
<p>Policy limits typically range from $1 million to $20 million in New Zealand, with $2 million being the most common choice for small and medium businesses. Annual premiums for most small businesses start from around $600–$700 per year, though they vary significantly based on your industry, turnover and claims history.</p>

<h2>What Does Public Liability Insurance Cover?</h2>
<p>A standard public liability policy covers:</p>
<ul>
  <li><strong>Third-party bodily injury:</strong> A customer slips on a wet floor in your shop and fractures a wrist. PL pays their medical costs (beyond ACC), lost income and general damages.</li>
  <li><strong>Third-party property damage:</strong> A consultant spills coffee on a client's laptop at a meeting. PL covers the replacement cost.</li>
  <li><strong>Legal defence costs:</strong> Even if a claim is meritless, defending it takes time and money. PL funds your legal team.</li>
  <li><strong>Products liability (where included):</strong> If a product you manufacture, supply or install causes injury or damage, products liability extension covers the resulting claims.</li>
  <li><strong>Advertising liability:</strong> Claims of defamation, copyright infringement or misleading representation in your marketing or advertising.</li>
  <li><strong>Contractual liability:</strong> Liability assumed under a written contract, up to the limits specified in the policy — for example, an indemnity clause in a lease agreement.</li>
  <li><strong>Off-site incidents:</strong> If your employee or contractor causes damage at a client's premises, PL covers you.</li>
</ul>
<p>Many PL policies can also be extended to include: tenant's liability (damage to premises you lease), care, custody and control (damage to third-party property in your care), and cross-liability between entities covered under the same policy.</p>

<h2>What Is Not Covered by Public Liability?</h2>
<p>Key exclusions to be aware of in public liability policies include:</p>
<ul>
  <li><strong>Employee injuries:</strong> Covered by ACC and, for non-ACC claims, <a href="/coverage/employers-liability/">employers' liability insurance</a>.</li>
  <li><strong>Professional advice or services:</strong> Financial loss from bad advice is a PI claim, not a PL claim.</li>
  <li><strong>Your own property damage:</strong> PL only covers damage to third-party property — your own business property is covered under a separate material damage or business contents policy.</li>
  <li><strong>Motor vehicles:</strong> Vehicle accidents on public roads are covered by motor insurance, not PL (though vehicle use on private property may be included).</li>
  <li><strong>Intentional or criminal acts.</strong></li>
  <li><strong>Contractual penalties:</strong> Liquidated damages or penalty clauses in contracts are not covered under standard PL.</li>
  <li><strong>Pollution:</strong> Most policies exclude gradual pollution events unless a specific environmental liability extension is added.</li>
</ul>

<h2>Who Needs Public Liability Insurance in New Zealand?</h2>
<p>Virtually every New Zealand business that interacts with clients, customers, or the public benefits from PL insurance. High-priority categories include:</p>
<ul>
  <li><strong>Consultants and advisers:</strong> If you visit client sites, attend meetings, or host clients at your office, physical injury risk is real. Even a minor incident can generate a costly claim.</li>
  <li><strong>Contractors and tradespeople:</strong> Construction contracts almost universally require PL cover. Damage to a client's property during works — a cracked floor, a broken pipe — is a daily hazard.</li>
  <li><strong>Retailers and hospitality businesses:</strong> High foot traffic creates significant slip-and-fall exposure. Cafes, restaurants and shops face some of the highest per-premises claim frequencies.</li>
  <li><strong>Event organisers:</strong> Venue hire agreements, local council event permits, and sponsorship contracts all typically require PL cover as a condition of approval.</li>
  <li><strong><a href="/professions/healthcare/">Healthcare and wellness practitioners:</a></strong> Treatment-related injuries and property damage at your clinic are covered under PL — professional errors are covered under PI.</li>
  <li><strong>Fitness trainers and coaches:</strong> If a client injures themselves during a session at your facility, or you damage equipment at a third-party gym, PL responds.</li>
  <li><strong>IT consultants:</strong> On-site work at client premises creates property damage exposure. See our <a href="/professions/it-consultants/">IT consultants insurance guide</a> for more.</li>
</ul>

<h2>How Much Does Public Liability Insurance Cost in NZ?</h2>
<p>Public liability premiums in New Zealand are generally among the most affordable business insurance costs. BizCover NZ — one of the leading online platforms — quotes an average PL premium starting from around $30 per month for low-risk sole traders. Actual costs depend heavily on:</p>
<ul>
  <li><strong>Industry and risk category:</strong> A management consultant faces very different physical risks than a roofer. Insurers classify each industry and price accordingly.</li>
  <li><strong>Annual turnover:</strong> Higher revenue typically means more client interactions and greater aggregate exposure.</li>
  <li><strong>Policy limit:</strong> Moving from $1 million to $5 million cover increases premium, but not proportionally — the marginal cost of higher limits is generally efficient.</li>
  <li><strong>Premises type:</strong> Retail premises with high foot traffic pay more than home-based office operations.</li>
  <li><strong>Claims history:</strong> Prior PL claims increase your premium at renewal. Maintaining a clean claims record is valuable.</li>
  <li><strong>Number of employees:</strong> More staff means more exposure — more people working on client sites, more driving, more opportunity for incidents.</li>
</ul>
<p>Indicative costs: a sole trader consultant with $300,000 turnover and $2 million PL cover might pay $700–$1,200 per year. A hospitality business with $2 million turnover and high foot traffic might pay $3,000–$6,000 per year. See our <a href="/pi-insurance-cost/">cost guide</a> for profession-specific data.</p>

<h2>How Much Public Liability Cover Do I Need?</h2>
<p>The right PL limit is driven by three factors: your contract requirements, your risk exposure, and cost efficiency. Guidance for businesses:</p>
<ul>
  <li><strong>$1 million:</strong> Minimum for most commercial contracts. Suitable for very low-risk sole traders with limited public interaction.</li>
  <li><strong>$2 million:</strong> The most common choice for small and medium businesses. Satisfies the majority of commercial lease and contract requirements.</li>
  <li><strong>$5 million:</strong> Required by many government contracts, large construction projects, and councils. Also appropriate for higher-risk industries.</li>
  <li><strong>$10 million+:</strong> Infrastructure projects, major event management, or businesses with very large scale operations. Premiums remain relatively efficient at this level.</li>
</ul>
<p>Note that some commercial leases specify that the tenant must maintain a minimum PL limit — check your lease before selecting cover.</p>

<h2>NZ Regulatory Requirements for Public Liability</h2>
<p>While there is no single NZ statute that universally mandates public liability insurance, multiple regulatory and contractual contexts effectively require it:</p>
<ul>
  <li><strong>Health and Safety at Work Act 2015 (HSWA):</strong> WorkSafe NZ can investigate incidents on your premises. If a third party is injured, regulatory action can run in parallel with a civil claim. PL insurance covers the civil claim; <a href="/coverage/statutory-liability/">statutory liability insurance</a> covers regulatory fines and investigation costs.</li>
  <li><strong>Building and Construction Act:</strong> Principal contractors and subcontractors working under construction contracts must typically maintain specified PL limits.</li>
  <li><strong>Local Government contracting:</strong> Council tenders and event permits routinely specify $5 million–$10 million PL as a minimum.</li>
  <li><strong>Consumer Guarantees Act 1993:</strong> Suppliers and retailers have statutory obligations to consumers that create product liability exposure — PL with a products liability extension is the relevant cover.</li>
</ul>

<h2>Getting the Right Public Liability Cover in NZ</h2>
<p>When purchasing PL insurance, work with a licensed insurance adviser to ensure your policy:</p>
<ul>
  <li>Includes the specific extensions you need (products liability, tenants liability, care custody and control).</li>
  <li>Has an adequate any-one-occurrence limit that matches your worst-case risk scenario.</li>
  <li>Covers all entities that need protection (parent company, subsidiaries, joint ventures).</li>
  <li>Does not exclude your specific industry activities or products.</li>
</ul>
<p>Many advisers can bundle PL with <a href="/coverage/professional-indemnity/">professional indemnity</a> and <a href="/coverage/employers-liability/">employers' liability</a> in a single business package, simplifying renewal and often reducing overall cost. <a href="/compare/">Compare your options</a> or <a href="/contact/">request a quote</a> from a licensed adviser today.</p>
    `.trim(),
  },
  {
    slug: 'statutory-liability',
    name: 'Statutory Liability Insurance',
    icon: '⚖️',
    shortDesc: 'Covers fines, penalties and legal defence costs from unintentional breaches of New Zealand legislation.',
    description: 'Statutory liability insurance protects your business and its directors against fines, penalties and investigation costs arising from unintentional breaches of New Zealand statutes such as the Health and Safety at Work Act, Resource Management Act, Fair Trading Act and Employment Relations Act. It is increasingly important as regulatory enforcement intensifies across all sectors.',
    whoNeeds: [
      'Business owners and company directors',
      'HR managers and payroll professionals',
      'Health and safety officers',
      'Construction and contracting companies',
      'Healthcare and aged care operators',
      'Food and hospitality businesses',
      'Environmental and land management businesses',
      'Any registered business or employer',
    ],
    whatCovers: [
      'Legal defence costs for regulatory investigations',
      'Fines and pecuniary penalties (where insurable)',
      'Health and Safety at Work Act breaches',
      'Employment Relations Act breaches',
      'Fair Trading Act and Consumer Guarantees Act',
      'Resource Management Act penalties',
      'Food Act and licensing breaches',
      'Building Act and trade licensing breaches',
    ],
    avgCost: 'From $40/month',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    keyStats: [
      { label: 'Average monthly cost', value: 'From $40/month' },
      { label: 'Max HSWA fine (organisation)', value: '$3 million' },
      { label: 'Max HSWA fine (individual)', value: '$300,000' },
    ],
    relatedCoverage: ['employers-liability', 'management-liability', 'directors-officers'],
    relatedProfessions: ['architects-engineers', 'healthcare', 'consultants'],
    faqs: [
      {
        q: 'Can insurance pay NZ fines and penalties?',
        a: "Yes, but only unintentional breaches. In New Zealand, statutory liability insurance can pay regulatory fines and pecuniary penalties arising from unintentional breaches of specified statutes. It cannot cover fines for deliberate wrongdoing — courts consider it contrary to public policy to insure intentional illegal acts. The legal defence costs component is the most consistently covered element, and even if the fine itself is not insurable in a particular case, having your legal costs covered can be enormously valuable.",
      },
      {
        q: 'What is the maximum fine under the Health and Safety at Work Act?',
        a: 'Under the Health and Safety at Work Act 2015 (HSWA), the maximum financial penalty is $3 million for an organisation found guilty of a category 1 offence (conduct that exposes individuals to risk of death or serious injury). For individuals, the maximum is $300,000 and/or up to five years imprisonment. WorkSafe NZ has increased prosecution rates significantly since 2016, and average fines in serious cases regularly exceed $300,000 for organisations.',
      },
      {
        q: 'Does statutory liability cover Employment Court proceedings?',
        a: 'Yes. Employment Relations Act breaches — including claims before the Employment Relations Authority (ERA) and Employment Court — are typically covered under statutory liability policies in New Zealand. This includes employer breaches of good faith obligations, minimum wage compliance failures, and unlawful dismissal proceedings. However, compensation payable to employees under an ERA determination may fall under an <a href="/coverage/employers-liability/">employers\' liability policy</a> rather than statutory liability — the two often work together.',
      },
      {
        q: 'Is statutory liability the same as regulatory liability?',
        a: "In the NZ insurance market, 'statutory liability' and 'regulatory liability' are often used interchangeably. Both refer to insurance covering fines, penalties and defence costs arising from regulatory investigations and prosecutions under New Zealand statutes. Some insurers use 'regulatory liability' to describe a broader cover that extends to overseas regulatory actions — relevant for businesses operating in Australia or other jurisdictions.",
      },
      {
        q: 'Do I need statutory liability if I already have management liability insurance?',
        a: 'Statutory liability is almost always included as a component within a <a href="/coverage/management-liability/">management liability</a> policy, so if you have management liability cover, you likely already have statutory liability protection. Check your policy schedule to confirm the specific statutes listed and the sublimit applying to statutory liability within the bundle. If you need higher statutory liability limits than the bundle provides, a standalone statutory liability policy can be arranged.',
      },
    ],
    longFormContent: `
<h2>What Is Statutory Liability Insurance?</h2>
<p>Statutory liability insurance covers the costs — including legal defence costs and, where legally permissible, fines and pecuniary penalties — arising from unintentional breaches of New Zealand legislation. As WorkSafe NZ, the Commerce Commission, and other regulators have intensified enforcement, the financial exposure from regulatory breaches has grown dramatically, making statutory liability insurance an increasingly essential component of business risk management.</p>
<p>New Zealand has a complex and expanding regulatory environment. Employers, directors, and business owners face obligations under dozens of statutes — from the Health and Safety at Work Act 2015 to the Privacy Act 2020, the Fair Trading Act 1986 and the Employment Relations Act 2000. A momentary lapse in compliance, or an employee acting contrary to policy, can trigger a regulatory investigation that costs hundreds of thousands of dollars to defend, even if no wrongdoing is ultimately established.</p>

<h2>How Does Statutory Liability Work in New Zealand?</h2>
<p>Statutory liability policies cover your business when a regulatory body investigates, prosecutes, or imposes a penalty for an alleged breach of a covered statute. The policy typically responds in two stages:</p>
<ol>
  <li><strong>Investigation stage:</strong> Your insurer funds your legal defence from the moment a regulatory authority (WorkSafe, Commerce Commission, IRD, FMA, ERA) commences an investigation — before any formal charges or findings.</li>
  <li><strong>Prosecution and penalty stage:</strong> If the regulatory body proceeds to prosecution, the insurer continues to fund your defence. Where a fine or pecuniary penalty is imposed and it is legally permissible to insure it (i.e., it arose from an unintentional breach), the insurer pays the penalty up to the policy limit.</li>
</ol>
<p>Most NZ statutory liability policies cover multiple statutes, with common coverage including: Health and Safety at Work Act 2015, Employment Relations Act 2000, Fair Trading Act 1986, Consumer Guarantees Act 1993, Resource Management Act 1991, Food Act 2014, and Building Act 2004. The exact list varies by insurer and policy wording — check the schedule carefully.</p>
<p>Limits of indemnity typically range from $250,000 to $5 million, with $1 million being the most common for SMEs. Excess levels are generally low — $1,000 to $5,000 — reflecting the regulatory investigation trigger point.</p>

<h2>What Does Statutory Liability Cover?</h2>
<p>A comprehensive statutory liability policy covers:</p>
<ul>
  <li><strong>Legal defence costs:</strong> Solicitor, barrister and specialist regulatory counsel fees from the first notification of an investigation. This is the most consistently covered element across all policies.</li>
  <li><strong>Fines and pecuniary penalties:</strong> Regulatory fines imposed after an unintentional breach, where legally insurable. Intentional acts are excluded as a matter of public policy.</li>
  <li><strong>Health and Safety at Work Act breaches:</strong> WorkSafe NZ investigations and prosecutions are among the most costly regulatory events NZ businesses face. The HSWA introduced dramatically higher penalties when it replaced the HSE Act in 2016.</li>
  <li><strong>Employment Relations Act breaches:</strong> ERA and Employment Court proceedings for minimum wage violations, unlawful dismissal, good faith breaches, or unlawful employment agreements.</li>
  <li><strong>Fair Trading Act and Consumer Guarantees Act:</strong> Commerce Commission investigations into misleading trading conduct, pricing issues, or product/service guarantee failures.</li>
  <li><strong>Resource Management Act:</strong> Regional council and Environment Court proceedings for resource consent breaches, discharge offences, or environmental violations.</li>
  <li><strong>Food Act and Licensing Acts:</strong> Ministry for Primary Industries or local authority investigations into food safety, licensing, or compliance failures.</li>
  <li><strong>Investigation costs:</strong> Costs of responding to a regulatory information request, providing documents, and attending interviews — often significant before any formal charge is laid.</li>
</ul>

<h2>What Is Not Covered by Statutory Liability?</h2>
<p>Key exclusions include:</p>
<ul>
  <li><strong>Intentional breaches:</strong> If you knowingly violated a statute, the policy does not cover resulting penalties. Courts and insurers will not allow insurance to provide a shield for deliberate wrongdoing.</li>
  <li><strong>Criminal fines:</strong> Most policies exclude fines imposed under criminal law provisions (as opposed to civil or regulatory pecuniary penalties).</li>
  <li><strong>Known breaches at inception:</strong> If you were already aware of a regulatory investigation or breach before taking out the policy, it is excluded.</li>
  <li><strong>Tax obligations:</strong> IRD penalties for tax avoidance, late filing, or GST errors are generally excluded from statutory liability — these are treated as a commercial and financial risk.</li>
  <li><strong>Employment claims beyond regulatory proceedings:</strong> Compensation payments to employees from ERA or Employment Court determinations may fall outside statutory liability and require an <a href="/coverage/employers-liability/">employers' liability policy</a>.</li>
  <li><strong>Environmental remediation costs:</strong> The cost of cleaning up pollution or restoring damaged environments is typically excluded from statutory liability (requiring a separate environmental liability policy).</li>
</ul>

<h2>Who Needs Statutory Liability Insurance in New Zealand?</h2>
<p>Any business that employs people, operates physical premises, sells products or services, or handles environmental matters needs statutory liability protection. High-priority sectors include:</p>
<ul>
  <li><strong>Construction and engineering:</strong> WorkSafe NZ actively monitors construction sites and prosecutes under HSWA for serious incidents. Average fines in fatal construction incidents now regularly exceed $500,000. <a href="/professions/architects-engineers/">Architects and engineers</a> face both HSWA exposure and Building Act licensing risks.</li>
  <li><strong>Healthcare and aged care:</strong> Regulated by the Health and Disability Commissioner and subject to both HSWA and Privacy Act obligations. Investigation costs in healthcare regulatory matters can be substantial.</li>
  <li><strong>Hospitality and food businesses:</strong> Food Act compliance, licensing conditions, and Fair Trading Act obligations create multiple regulatory exposure points. A food safety investigation by the council or MPI can be extremely disruptive and costly.</li>
  <li><strong>HR-intensive businesses:</strong> Any employer with a large workforce faces Employment Relations Act exposure — minimum wage compliance (especially for complex roster arrangements), holiday pay calculations, and good faith obligations are frequent investigation triggers.</li>
  <li><strong>Importers and retailers:</strong> Commerce Commission enforcement of the Fair Trading Act and Consumer Guarantees Act has increased significantly. Pricing representation, product claims, and consumer rights are high-activity enforcement areas.</li>
  <li><strong>Environmental businesses:</strong> Farmers, quarrying operations, and land developers face RMA exposure from resource consent breaches and discharge events.</li>
</ul>

<h2>How Much Does Statutory Liability Insurance Cost in NZ?</h2>
<p>Statutory liability is one of the more affordable specialty covers available, largely because it is almost always bundled within a <a href="/coverage/management-liability/">management liability</a> policy. When purchased standalone or as an addition to a business package, indicative costs include:</p>
<ul>
  <li>Sole trader or micro-business: $40–$80 per month for $1 million cover.</li>
  <li>SME with 5–20 employees: $80–$200 per month for $2 million cover.</li>
  <li>Larger business (50+ staff, higher risk): $300–$600 per month for $2–$5 million cover.</li>
</ul>
<p>Premium factors include: industry sector, number of employees, turnover, past regulatory history, and the specific statutes for which coverage is sought. Construction and healthcare businesses typically pay more than office-based businesses due to HSWA exposure. See our <a href="/pi-insurance-cost/">insurance cost guide</a> for detailed comparisons.</p>

<h2>How Much Statutory Liability Cover Do I Need?</h2>
<p>Sizing your statutory liability limit requires thinking about the worst credible regulatory scenario for your business:</p>
<ul>
  <li><strong>$1 million:</strong> Appropriate for most SMEs. Covers the legal defence and penalty costs of a typical regulatory investigation and prosecution.</li>
  <li><strong>$2 million:</strong> Suitable for larger employers, construction businesses, and those with significant HSWA exposure where a serious incident could trigger a $1 million+ fine.</li>
  <li><strong>$5 million:</strong> For large organisations, healthcare providers with multiple sites, or businesses with complex environmental or food safety obligations.</li>
</ul>
<p>Remember that defence costs can be substantial even without a final penalty — an 18-month WorkSafe investigation involving multiple barristers can cost $300,000–$500,000 before the outcome is known. Your limit should reflect the potential defence cost as well as the potential fine.</p>

<h2>NZ Regulatory Requirements for Statutory Liability</h2>
<p>There is no NZ statute that mandates the purchase of statutory liability insurance. However, the regulatory framework itself creates the exposures that make this cover essential:</p>
<ul>
  <li><strong>Health and Safety at Work Act 2015 (HSWA):</strong> Category 1 offences (reckless conduct) carry up to $3 million for organisations and $300,000 + imprisonment for individuals. Category 2 (failure to comply with duty) carries up to $1.5 million for organisations. WorkSafe NZ has been significantly more active in prosecution since 2016.</li>
  <li><strong>Employment Relations Act 2000:</strong> The ERA can order compensation, reinstatement, and penalties. Legal costs in contested ERA proceedings routinely reach $50,000–$200,000.</li>
  <li><strong>Privacy Act 2020:</strong> The Office of the Privacy Commissioner can investigate data breaches and issue compliance notices. While fines under the Privacy Act are relatively modest, investigation defence costs and reputational management costs can be significant.</li>
  <li><strong>Fair Trading Act 1986:</strong> Commerce Commission can seek pecuniary penalties of up to $200,000 for individuals and $600,000 for corporations per breach.</li>
</ul>

<h2>Getting the Right Statutory Liability Cover in NZ</h2>
<p>When arranging statutory liability cover, work with a licensed insurance adviser to:</p>
<ul>
  <li>Confirm all relevant statutes are listed in the policy schedule — not just a generic "as required by law" clause.</li>
  <li>Ensure defence costs are covered from the investigation stage, not just after formal charges are laid.</li>
  <li>Understand whether fines are covered within or in addition to the limit of indemnity.</li>
  <li>Consider whether a standalone policy or a <a href="/coverage/management-liability/">management liability bundle</a> better suits your business structure and budget.</li>
</ul>
<p><a href="/compare/">Compare statutory liability options</a> or <a href="/contact/">speak to a licensed adviser</a> about the right structure for your business.</p>
    `.trim(),
  },
  {
    slug: 'employers-liability',
    name: "Employers' Liability Insurance",
    icon: '👷',
    shortDesc: "Covers claims from employees who suffer injury, illness or financial loss not covered by ACC.",
    description: "Employers' liability insurance fills the gap left by ACC (Accident Compensation Corporation) by covering employment-related claims that fall outside ACC's scope. This includes psychological injury claims, unfair dismissal, wrongful termination, discrimination, harassment, and other workplace-related causes of action that can result in significant legal costs and compensation awards.",
    whoNeeds: [
      'All businesses with employees or contractors',
      'Companies undergoing restructuring or redundancies',
      'HR-intensive businesses (retail, hospitality)',
      'Professional services firms with large teams',
      'Healthcare and aged care employers',
      'Construction businesses with site crews',
      'Any employer managing performance issues',
      'Businesses in high-stress work environments',
    ],
    whatCovers: [
      'Psychological injury not covered by ACC',
      'Unfair dismissal and wrongful termination claims',
      'Workplace discrimination and harassment',
      'Breach of employment agreement claims',
      'Employment Relations Authority proceedings',
      'Legal defence and representation costs',
      'Compensation awards and settlements',
      'Reinstatement costs and remediation orders',
    ],
    avgCost: 'From $50/month',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&auto=format&fit=crop&q=80',
    author: 'sarah-thompson',
    keyStats: [
      { label: 'Average monthly cost', value: 'From $50/month' },
      { label: 'ERA median award', value: '$10,000–$25,000' },
      { label: 'Average legal cost per ERA case', value: '$30,000–$100,000' },
    ],
    relatedCoverage: ['statutory-liability', 'management-liability', 'directors-officers'],
    relatedProfessions: ['consultants', 'healthcare', 'financial-advisers'],
    faqs: [
      {
        q: "Does ACC cover all employee injuries in New Zealand?",
        a: "ACC covers the medical treatment and rehabilitation costs of physical personal injury by accident. However, ACC does not cover: workplace stress and psychological injury claims unless they result from a physical injury, unfair dismissal, harassment, discrimination, wrongful termination, or breach of employment agreement. These non-ACC employment claims can result in significant ERA awards and legal costs — exactly what employers' liability insurance is designed to cover.",
      },
      {
        q: "What is the Employment Relations Authority and how much can it award?",
        a: "The Employment Relations Authority (ERA) is a New Zealand quasi-judicial body that resolves employment relationship problems. It can award: compensation for humiliation, loss of dignity, and injury to feelings (commonly $10,000–$25,000, but up to $50,000+), lost wages, reinstatement, and penalties for breaches of employment agreements. ERA proceedings are increasingly common, and even successfully defending a claim typically costs $30,000–$80,000 in legal fees. Employers' liability insurance covers both defence costs and ERA-ordered compensation.",
      },
      {
        q: "Does employers' liability cover independent contractors?",
        a: "Standard employers' liability policies cover your direct employees. Coverage for independent contractors varies by policy — some insurers extend protection to labour-only contractors who work exclusively for you and whose conduct you direct (i.e., those who may be treated as employees under the Employment Relations Act). If you engage contractors who could be misclassified as employees, discuss this explicitly with your insurer or adviser to ensure the policy covers potential claims from them.",
      },
      {
        q: "What's the difference between employers' liability and employment practices liability?",
        a: "In the New Zealand market, these terms are often used interchangeably, but there is a distinction in some policy wordings. 'Employers' liability' in NZ typically focuses on physical injury and work-related illness not covered by ACC. 'Employment practices liability' (EPL) tends to have a broader scope covering discrimination, harassment, wrongful termination, and related claims. Most <a href='/coverage/management-liability/'>management liability</a> bundles include employment practices liability as a specific module — check whether the policy you are considering uses one or both terms and what each covers.",
      },
      {
        q: "How does a restructuring or redundancy affect employers' liability risk?",
        a: "Redundancy and restructuring events are high-risk periods for employment claims. The Employment Relations Act imposes strict procedural requirements for genuine redundancy — failure to follow proper process (consultation, consideration of alternatives, selection criteria) frequently results in ERA claims for unjustified dismissal. Employers' liability or employment practices liability insurance covers legal defence costs and compensation awards arising from these claims. If a restructuring is planned, notify your insurer in advance — some policies include this as a material change in risk.",
      },
    ],
    longFormContent: `
<h2>What Is Employers' Liability Insurance?</h2>
<p>Employers' liability (EL) insurance — sometimes called employment practices liability (EPL) — covers your business against claims made by employees or former employees for workplace-related injury, illness, discrimination, harassment, unfair dismissal, or breach of employment obligations that fall outside the scope of ACC.</p>
<p>New Zealand's ACC scheme is a no-fault accident compensation system that covers the medical costs of physical personal injury by accident. It is a significant protection for employers — and employees — but it has important gaps. ACC does not cover: psychological injury claims arising from workplace stress, bullying or harassment; unfair dismissal and wrongful termination; discrimination on prohibited grounds (race, sex, age, disability); or breach of employment agreement. These non-ACC claims are increasingly common and increasingly costly to defend and resolve.</p>
<p>For any business with employees — from a two-person consultancy to a 500-person healthcare provider — employers' liability insurance is an essential component of the business insurance portfolio alongside <a href="/coverage/statutory-liability/">statutory liability</a> and <a href="/coverage/public-liability/">public liability</a>.</p>

<h2>How Does Employers' Liability Work in New Zealand?</h2>
<p>When a current or former employee makes a claim — lodging a grievance with the Employment Relations Authority, filing a Human Rights Commission complaint, or commencing proceedings in the Employment Court — your employers' liability insurer responds in two ways:</p>
<ol>
  <li><strong>Defence costs:</strong> The insurer funds your legal representation from the time the claim is made. Employment proceedings can involve multiple hearings over 12–18 months. Legal costs of $50,000–$100,000 are not unusual in contested ERA matters.</li>
  <li><strong>Compensation awards:</strong> If the ERA or Employment Court orders compensation — for lost wages, humiliation, injury to feelings, or reinstatement costs — the insurer pays the award up to the policy limit, less your excess.</li>
</ol>
<p>Most employers' liability policies operate on a <strong>claims-made basis</strong>. The policy in force when the claim is made (not when the employment relationship ended) must respond. This is particularly important for claims arising from redundancies or dismissals that may surface months or years later.</p>
<p>Policy limits in New Zealand typically range from $250,000 to $5 million per claim or aggregate. Excesses are usually modest ($1,000–$5,000), reflecting the reality that even minor employment disputes generate significant legal costs from the outset.</p>

<h2>What Does Employers' Liability Cover?</h2>
<p>A comprehensive employers' liability or employment practices liability policy covers:</p>
<ul>
  <li><strong>Unjustified dismissal claims:</strong> The ERA deals with hundreds of unjustified dismissal claims each year. Claims arising from performance management, restructuring, redundancy, or conduct dismissal where proper process was not followed are among the most common triggers.</li>
  <li><strong>Workplace discrimination:</strong> Claims under the Human Rights Act 1993 for discrimination on grounds of race, sex, age, disability, religious belief, marital status, political opinion, or sexual orientation.</li>
  <li><strong>Harassment and bullying:</strong> Workplace bullying and sexual harassment claims — whether in physical workplaces or remote working environments — can result in significant ERA awards and Employment Court compensation.</li>
  <li><strong>Psychological injury:</strong> Stress, anxiety, depression and other psychological injuries arising from workplace events that are not covered by ACC (where there is no physical accident trigger).</li>
  <li><strong>Breach of employment agreement:</strong> Claims for unpaid wages, holiday pay, sick leave, or failure to follow employment agreement terms.</li>
  <li><strong>Wrongful termination:</strong> Claims that a dismissal was procedurally defective or substantively unjustified under the Employment Relations Act.</li>
  <li><strong>Legal defence costs:</strong> All legal costs from the point of notification — including barrister fees, mediation costs, and representation at ERA investigations.</li>
  <li><strong>Remediation and reinstatement:</strong> If an ERA determination orders reinstatement and the employer declines, compensation in lieu of reinstatement is covered.</li>
</ul>

<h2>What Is Not Covered?</h2>
<p>Standard exclusions in employers' liability policies include:</p>
<ul>
  <li><strong>Physical injury covered by ACC:</strong> Workplace accidents causing physical injury are an ACC matter. Employers' liability covers non-ACC employment claims.</li>
  <li><strong>Deliberate wrongdoing:</strong> If discrimination or harassment was deliberately perpetrated by a director or senior officer and they knew it was wrongful, the policy will not indemnify the perpetrator (though it may still cover defence costs until the conduct is proven).</li>
  <li><strong>Known circumstances:</strong> Pre-existing claims or grievances notified before the policy inception are excluded.</li>
  <li><strong>Contractual wage obligations:</strong> Unpaid salary or wages due under a contract are a commercial debt, not an insured claim — unless they form part of a broader employment relationship claim.</li>
  <li><strong>Redundancy payments:</strong> Statutory redundancy pay is a legal obligation, not a claim under this policy — though legal costs arising from a dispute about the adequacy of a redundancy process are covered.</li>
</ul>

<h2>Who Needs Employers' Liability Insurance in New Zealand?</h2>
<p>Any business with employees needs employers' liability protection. The exposure is universal — even the best-run workplaces face employment claims. Key risk profiles include:</p>
<ul>
  <li><strong>All employers:</strong> The Employment Relations Act applies to all employers regardless of size. A sole director of a two-person company faces the same ERA jurisdiction as a 1,000-employee corporation.</li>
  <li><strong>Businesses undergoing restructuring or redundancy:</strong> The ERA receives a significant volume of claims arising from redundancy processes where the employer failed to properly consult, consider alternatives, or apply fair selection criteria.</li>
  <li><strong>HR-intensive businesses:</strong> Retail, hospitality and healthcare businesses with large casual or shift workforces face high claims frequency — complex rostering, holiday pay calculations and performance management all create risk.</li>
  <li><strong><a href="/professions/healthcare/">Healthcare and aged care employers:</a></strong> High-stress environments, emotionally demanding work, and workforce shortages create significant psychological injury and workplace conduct risks.</li>
  <li><strong>Professional services firms:</strong> Partnership transitions, partnership disputes, and performance management of high-earning professionals can generate significant claims.</li>
  <li><strong>Construction businesses:</strong> Site-based workforces, subcontractor relationships, and HSWA obligations intersect with employment law in complex ways that create layered risk.</li>
</ul>

<h2>How Much Does Employers' Liability Insurance Cost in NZ?</h2>
<p>Employers' liability insurance is typically available as a component of a <a href="/coverage/management-liability/">management liability bundle</a> or as a standalone policy. Indicative costs:</p>
<ul>
  <li>Small business (1–5 employees): $50–$100 per month standalone, often included in management liability bundles from $120/month.</li>
  <li>Medium business (10–50 employees): $120–$300 per month, depending on industry and claims history.</li>
  <li>Larger business (50+ employees) or high-risk sector: $300–$800+ per month.</li>
</ul>
<p>Key premium factors: number of employees, industry sector (healthcare and hospitality pay more), annual payroll, past employment claims, and the sophistication of your HR processes (robust employment agreements, documented performance management, and EAP programmes can positively influence premiums).</p>
<p>Given that a single contested ERA matter can cost $50,000–$150,000 in legal fees alone — before any award — the premium-to-risk ratio for employers' liability is compelling. See our <a href="/pi-insurance-cost/">cost guide</a> for profession-specific data.</p>

<h2>How Much Cover Do I Need?</h2>
<p>Sizing your employers' liability limit should reflect your worst-case scenario:</p>
<ul>
  <li><strong>$500,000:</strong> Minimum for sole traders and micro-businesses with 1–2 employees. Covers a single contested ERA matter plus a modest award.</li>
  <li><strong>$1 million:</strong> Suitable for most SMEs with up to 20 employees. Covers legal costs plus an ERA or Employment Court award in a serious case.</li>
  <li><strong>$2 million+:</strong> Appropriate for larger employers, multi-site businesses, healthcare providers, or businesses undergoing significant restructuring. Consider that class actions or simultaneous claims from multiple employees are possible.</li>
</ul>

<h2>NZ Regulatory Requirements for Employers' Liability</h2>
<p>Several NZ laws create the regulatory context for employers' liability insurance:</p>
<ul>
  <li><strong>Employment Relations Act 2000:</strong> Establishes the ERA and Employment Court jurisdiction, mandates good faith obligations, and sets the procedural requirements for dismissal. This is the most frequent trigger for employers' liability claims.</li>
  <li><strong>Human Rights Act 1993:</strong> The Human Rights Commission can investigate and conciliate discrimination complaints. Unresolved complaints proceed to the Human Rights Review Tribunal, which can award compensation.</li>
  <li><strong>Health and Safety at Work Act 2015 (HSWA):</strong> Psychological harm is a recognised health risk under HSWA. Employers have obligations to manage psychosocial hazards — failure to do so can trigger both WorkSafe prosecution (covered by <a href="/coverage/statutory-liability/">statutory liability</a>) and employee civil claims.</li>
  <li><strong>Privacy Act 2020:</strong> Mishandling of employee personal information — including during investigations — can generate Privacy Commissioner complaints alongside ERA claims.</li>
</ul>

<h2>Getting the Right Employers' Liability Cover in NZ</h2>
<p>When arranging cover, work with a licensed adviser to ensure:</p>
<ul>
  <li>The policy covers claims-made by both current and former employees (some policies restrict to current employees).</li>
  <li>Psychological injury claims are explicitly included — not just physical injury or discrimination claims.</li>
  <li>The insurer has experience with NZ employment law and can appoint specialist employment solicitors.</li>
  <li>The policy responds from the date of the ERA investigation or grievance lodgement — not just formal ERA proceedings.</li>
</ul>
<p>Most businesses benefit from combining employers' liability with <a href="/coverage/statutory-liability/">statutory liability</a>, <a href="/coverage/directors-officers/">D&amp;O insurance</a>, and public liability in a management liability bundle for comprehensive protection and simplified renewal. <a href="/compare/">Compare your options</a> or <a href="/contact/">get a quote</a> from a licensed adviser.</p>
    `.trim(),
  },
  {
    slug: 'directors-officers',
    name: "Directors' & Officers' Liability",
    icon: '👔',
    shortDesc: 'Protects company directors and officers from personal liability for decisions made in their management roles.',
    description: "Directors' and officers' (D&O) liability insurance protects the personal assets of directors, officers and managers if they are personally sued for alleged wrongful acts in managing the company. Claims can come from shareholders, creditors, employees, regulators, and third parties. D&O covers legal defence costs and damages, ensuring your leadership team can make decisions without fear of personal financial ruin.",
    whoNeeds: [
      'Company directors and board members',
      'Chief executives and senior management',
      'Non-executive and independent directors',
      'Trustees of trusts and incorporated societies',
      'Startup founders and board advisers',
      'Managers of SMEs and family companies',
      'Directors of subsidiaries and joint ventures',
      'Charity and NFP board members',
    ],
    whatCovers: [
      'Shareholder and investor claims',
      'Regulatory investigations and prosecutions',
      'Wrongful acts in management roles',
      'Employment practices claims against directors',
      'Insolvency-related claims from creditors',
      'Breach of director duties under the Companies Act',
      'Legal defence costs and representation',
      'Court-awarded damages and settlements',
    ],
    avgCost: 'From $90/month',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    keyStats: [
      { label: 'Average monthly cost', value: 'From $90/month' },
      { label: 'Companies Act personal liability', value: 'Unlimited' },
      { label: 'FMA maximum penalty (individual)', value: '$1 million' },
    ],
    relatedCoverage: ['management-liability', 'statutory-liability', 'professional-indemnity'],
    relatedProfessions: ['financial-advisers', 'accountants', 'consultants'],
    faqs: [
      {
        q: "Can a company director be personally sued in New Zealand?",
        a: "Yes. New Zealand's Companies Act 1993 creates significant personal liability for directors. Directors can be personally liable for: insolvent trading (allowing the company to incur debts when it cannot pay them), breach of fiduciary duty, fraudulent or reckless trading, and failure to meet specific statutory obligations. The FMA can pursue individual directors for financial markets law breaches. WorkSafe NZ can prosecute individual directors personally under HSWA. D&O insurance protects a director's personal assets in these situations.",
      },
      {
        q: "Does D&O insurance cover me personally, or just the company?",
        a: "D&O insurance is fundamentally personal cover for the individual director or officer. Standard NZ D&O policies have three coverage sections: Side A (covers the individual directly when the company cannot or will not indemnify them), Side B (reimburses the company when it has indemnified a director), and Side C (covers the company entity itself for certain securities claims). The most important section for individual directors is Side A — it protects your personal assets even if the company is insolvent or refuses to pay.",
      },
      {
        q: "Are charity trustees and incorporated society board members covered?",
        a: "Yes. D&O insurance is available for — and strongly recommended for — trustees of charitable trusts and board members of incorporated societies in New Zealand. The Charities Act 2005 and Incorporated Societies Act 2022 impose governance obligations that, if breached, can result in personal liability. Volunteer board members often assume they are protected by their volunteer status, but this does not eliminate personal liability under NZ law. Many charities now require board members to maintain D&O cover as a condition of appointment.",
      },
      {
        q: "What is a 'wrongful act' under a D&O policy?",
        a: "In NZ D&O policy wordings, a 'wrongful act' typically means any actual or alleged act, error, omission, neglect, breach of duty, breach of trust, misleading statement, or breach of warranty of authority committed by a director or officer in their management capacity. This is intentionally broad — it does not require proof of wrongdoing, only that a claim is made alleging a wrongful act. The insurer will defend you whether or not the allegation is ultimately proven.",
      },
      {
        q: "Does D&O cover insolvency-related claims from liquidators?",
        a: "This depends on the specific policy wording and the nature of the claim. If a liquidator sues directors for insolvent trading under section 135 of the Companies Act, D&O policies will typically defend the claim and pay compensation if liability is established — unless the deliberate dishonesty exclusion applies. Some NZ D&O policies include specific insolvency extensions. If your company is in financial difficulty, it is important to notify your D&O insurer immediately — late notification can affect coverage.",
      },
    ],
    longFormContent: `
<h2>What Is Directors' & Officers' Liability Insurance?</h2>
<p>Directors' and officers' (D&O) liability insurance protects the personal assets of directors, officers, and senior managers who face claims alleging wrongful acts in the management of their organisation. In New Zealand, where company directors carry significant personal liability under the Companies Act 1993, the Financial Markets Conduct Act 2013, and the Health and Safety at Work Act 2015, D&O insurance is essential for anyone in a governance or management role.</p>
<p>Unlike professional indemnity insurance (which protects against claims arising from professional services to clients), D&O covers the decisions and actions taken in running and governing a company. Claims can come from a wide range of parties: shareholders, creditors, employees, regulators, competitors, customers, and joint venture partners. Even non-executive directors who had no day-to-day management involvement can be sued personally for board-level decisions.</p>
<p>The risk is real and growing. New Zealand's Financial Markets Authority (FMA) has significantly expanded enforcement activity against company directors. WorkSafe NZ actively prosecutes individual directors for HSWA breaches. And in insolvency situations, liquidators regularly investigate director conduct and pursue personal claims where they identify grounds for liability.</p>

<h2>How Does D&O Insurance Work in New Zealand?</h2>
<p>D&O policies typically have three coverage sections (referred to as "sides"):</p>
<ul>
  <li><strong>Side A — Individual director protection:</strong> Pays directly to the director when the company cannot or will not indemnify them. This is the most critical coverage for personal asset protection. Side A responds when the company is insolvent, when the company refuses to indemnify (due to a governance conflict), or when indemnification would be unlawful.</li>
  <li><strong>Side B — Company reimbursement:</strong> Reimburses the company when it has paid defence costs or damages on behalf of a director. Many NZ company constitutions include a board indemnification clause — Side B allows the company to extend protection without bearing the full financial burden.</li>
  <li><strong>Side C — Entity coverage:</strong> Covers the company itself for certain securities claims (e.g., securities disclosure breaches). More relevant for listed companies and those with sophisticated investors.</li>
</ul>
<p>D&O policies operate on a <strong>claims-made basis</strong>. The policy in force when the claim is first made must respond. This means coverage continuity is vital — gaps in D&O coverage leave directors personally exposed for the period of the gap, even years after leaving the board. Most D&O policies include extended reporting period (ERP) provisions allowing notification of claims discovered shortly after the policy expires.</p>

<h2>What Does D&O Insurance Cover?</h2>
<p>A comprehensive D&O policy responds to claims for:</p>
<ul>
  <li><strong>Breach of director duties under the Companies Act 1993:</strong> Sections 131–138 of the Companies Act impose duties of care, diligence, and good faith on directors. Breach of these duties — including insolvent trading under section 135 — can result in liquidator claims and personal liability.</li>
  <li><strong>Shareholder and investor claims:</strong> Shareholders who allege that directors misled them, breached their duty of good faith, or caused the company to act in a manner oppressive to shareholder interests can sue directors personally.</li>
  <li><strong>Regulatory investigations:</strong> FMA investigations for FMCA breaches (misleading conduct, insider trading, continuous disclosure failures) carry significant defence costs and can result in court orders for personal payment of penalties up to $1 million per individual.</li>
  <li><strong>WorkSafe HSWA prosecutions:</strong> Directors are personally liable under HSWA for failures in their governance role relating to workplace safety. Maximum personal fine: $300,000 plus potential imprisonment.</li>
  <li><strong>Creditor claims in insolvency:</strong> Creditors of an insolvent company can — through the liquidator — pursue directors personally for insolvent trading, reckless trading, or fraudulent trading. D&O defends these claims and pays compensation where liability is established (absent the fraud exclusion).</li>
  <li><strong>Employment claims against directors:</strong> Harassment, discrimination, or workplace conduct claims naming a director personally — especially as a decision-maker in a dismissal or restructuring — are covered.</li>
  <li><strong>Cyber liability (where extended):</strong> Some NZ D&O policies include or offer an extension for cyber-related governance failures — for example, a shareholder claim that the board failed to implement adequate cybersecurity governance leading to a data breach.</li>
</ul>

<h2>What Is Not Covered?</h2>
<p>Key D&O exclusions include:</p>
<ul>
  <li><strong>Deliberate fraud or dishonesty:</strong> If a director is proven to have acted fraudulently or dishonestly, the policy will not indemnify them. However, most NZ D&O policies will still fund the defence until the conduct is proven — allowing the insurer to separate innocent and dishonest directors in the same matter.</li>
  <li><strong>Personal profit:</strong> Gains illegally obtained by a director — insider trading profits, diverted business opportunities — are excluded.</li>
  <li><strong>Bodily injury and property damage:</strong> Covered under public liability.</li>
  <li><strong>Known claims at inception:</strong> Claims you were aware of before the policy was taken out are excluded.</li>
  <li><strong>Criminal fines and penalties:</strong> Most D&O policies exclude criminal fines, though civil regulatory penalties — where insurable — are typically covered. <a href="/coverage/statutory-liability/">Statutory liability insurance</a> is the appropriate vehicle for regulatory fines.</li>
</ul>

<h2>Who Needs D&O Insurance in New Zealand?</h2>
<p>D&O insurance is relevant for any individual holding a governance or management position in a NZ entity:</p>
<ul>
  <li><strong>Company directors and board members:</strong> Any director of a NZ-registered company faces personal liability under the Companies Act 1993. This includes sole directors of family companies and SMEs — the personal liability exposure is the same as for a listed company director.</li>
  <li><strong>Senior managers and officers:</strong> CEO, CFO, COO and other senior officers make decisions that can be challenged. Employment decisions, capital allocation, and compliance failures can all generate claims naming officers as well as directors.</li>
  <li><strong>Non-executive and independent directors:</strong> INDs often believe their advisory role limits their liability. It does not. They are equally subject to the Companies Act duties and can be personally sued for board decisions they participated in.</li>
  <li><strong>Startup founders:</strong> Founders who accept investor capital — particularly VC or angel investment — take on shareholder accountability. Investor disputes are a common D&O trigger in the NZ startup ecosystem.</li>
  <li><strong>Trustees and charity board members:</strong> Trustees of charitable trusts and board members of incorporated societies have governance obligations under the Charities Act 2005 and the Incorporated Societies Act 2022. Volunteer status does not remove personal liability.</li>
  <li><strong><a href="/professions/financial-advisers/">Financial advisers</a> in management roles:</strong> FAPs with complex governance structures where directors or managers make strategic compliance decisions face both FMCA licensing exposure and D&O exposure simultaneously.</li>
</ul>

<h2>How Much Does D&O Insurance Cost in NZ?</h2>
<p>D&O premiums in New Zealand start from around $90 per month for a small private company with simple governance. Key pricing factors:</p>
<ul>
  <li><strong>Company size and turnover:</strong> Larger companies with higher revenues have greater financial stakes in governance decisions, attracting higher premiums.</li>
  <li><strong>Industry:</strong> Financial services, healthcare, and construction companies pay more due to regulatory exposure. Technology startups with investor capital also attract higher premiums.</li>
  <li><strong>Number of directors and officers:</strong> More insured individuals means more potential claims sources.</li>
  <li><strong>Financial health:</strong> Companies with stressed balance sheets or recent audit qualifications pay more — they present higher insolvency-related claim risk.</li>
  <li><strong>Listed vs private:</strong> Listed companies (NZX) pay significantly more than private companies due to securities law exposure, mandatory disclosure obligations, and activist shareholder risk.</li>
  <li><strong>Claims history:</strong> Prior D&O claims or known disputes materially increase premiums.</li>
</ul>
<p>Indicative costs: a private SME with 2–3 directors and $2 million turnover might pay $1,200–$2,000 per year for $1 million D&O cover. A mid-size company with $20 million turnover and a board of six might pay $8,000–$15,000 per year for $5 million in cover. See our <a href="/pi-insurance-cost/">cost guide</a> for detailed benchmarks.</p>

<h2>How Much D&O Cover Do I Need?</h2>
<p>Limit selection should reflect your worst-case claim scenario. Guidance for companies:</p>
<ul>
  <li><strong>$1 million:</strong> Minimum for small private companies with limited shareholder and creditor exposure. Covers legal costs and a modest award in a typical ERA or Companies Act matter.</li>
  <li><strong>$2 million–$5 million:</strong> Appropriate for mid-size companies, those with investor capital, or those in regulated industries. Covers complex multi-party claims or an FMA investigation plus resulting civil proceedings.</li>
  <li><strong>$10 million+:</strong> Required for listed companies, large private companies, or those with sophisticated investors and significant regulatory exposure.</li>
</ul>

<h2>NZ Regulatory Requirements for D&O Cover</h2>
<p>D&O insurance is not universally mandated by NZ law, but multiple regulatory frameworks create the exposures that make it effectively essential:</p>
<ul>
  <li><strong>Companies Act 1993:</strong> Creates personal director liability for insolvent trading, reckless trading, and breach of director duties. Sections 135 and 136 are the most frequently litigated.</li>
  <li><strong>Financial Markets Conduct Act 2013 (FMCA):</strong> Directors of FMC reporting entities (issuers, licensed providers) face personal liability for misleading disclosure, insider trading, and market manipulation. Individual penalty: up to $1 million per breach.</li>
  <li><strong>Health and Safety at Work Act 2015 (HSWA):</strong> Directors and officers who "exercise significant influence" over company HSWA matters face personal prosecution. Maximum fine: $300,000 + potential imprisonment.</li>
  <li><strong>Incorporated Societies Act 2022:</strong> New governance requirements for incorporated societies create officer liability exposure that did not exist under the previous 1908 Act.</li>
</ul>

<h2>Getting the Right D&O Cover in NZ</h2>
<p>When arranging D&O insurance, work with a licensed insurance adviser to confirm:</p>
<ul>
  <li>Side A, Side B and Side C coverage are all present (not just Side B).</li>
  <li>The definition of "wrongful act" is broad enough to cover your governance activities.</li>
  <li>Regulatory investigations by the FMA, WorkSafe, Commerce Commission and Charities Services are all covered.</li>
  <li>Prior and pending litigation exclusions are negotiated appropriately.</li>
  <li>Run-off cover or extended reporting period provisions are available for departing directors.</li>
</ul>
<p>Consider combining D&O with <a href="/coverage/management-liability/">management liability</a> for a more comprehensive bundle. <a href="/compare/">Compare D&O options</a> or <a href="/contact/">speak to a licensed adviser</a> today.</p>
    `.trim(),
  },
  {
    slug: 'management-liability',
    name: 'Management Liability Insurance',
    icon: '📋',
    shortDesc: 'A bundled policy combining D&O, employment practices, crime and statutory liability for comprehensive management protection.',
    description: "Management liability insurance bundles several key liability covers into one policy, typically including Directors' & Officers' liability, Employment Practices Liability, Crime (employee dishonesty), Statutory Liability, and sometimes Cyber Liability. It is designed for SMEs and growing businesses that need broad management protection without the complexity of managing multiple policies.",
    whoNeeds: [
      'SMEs with directors, managers and employees',
      'Growing businesses with complex HR structures',
      'Companies handling customer funds or data',
      'Professional services firms with partners',
      'Construction and contracting businesses',
      'Healthcare and allied health practices',
      'Retail and hospitality operators',
      'Any business seeking bundled liability cover',
    ],
    whatCovers: [
      "Directors' and Officers' liability (D&O)",
      'Employment practices liability (EPL)',
      'Crime and employee dishonesty',
      'Statutory liability coverage',
      'Entity investigations cover',
      'Crisis management costs',
      'Legal defence across all bundled covers',
      'Cyber liability (optional add-on)',
    ],
    avgCost: 'From $120/month',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80',
    author: 'sarah-thompson',
    keyStats: [
      { label: 'Average monthly cost', value: 'From $120/month' },
      { label: 'Policies bundled', value: '4–6 covers in one' },
      { label: 'Typical saving vs separate', value: '15–30% premium saving' },
    ],
    relatedCoverage: ['directors-officers', 'employers-liability', 'statutory-liability'],
    relatedProfessions: ['consultants', 'accountants', 'financial-advisers'],
    faqs: [
      {
        q: 'What is typically included in a management liability policy in NZ?',
        a: "A standard management liability policy bundles: Directors' & Officers' liability (D&O), Employment Practices Liability (EPL), Crime (employee dishonesty and theft), and Statutory Liability. Many insurers also offer optional extensions for: Cyber Liability, Fiduciary Liability, and Tax Investigation costs. The exact bundle varies by insurer — DUAL NZ, QBE and Vero each have their own management liability products with different default inclusions and optional extensions.",
      },
      {
        q: 'Is management liability the same as D&O insurance?',
        a: "No. <a href='/coverage/directors-officers/'>D&O insurance</a> is one component within a management liability policy. A standalone D&O policy covers directors and officers personally for wrongful management acts. A management liability policy bundles D&O with employment practices liability, crime, and statutory liability — providing much broader protection for both individuals and the company entity. For most SMEs, a management liability bundle is more efficient and better-value than purchasing D&O alone.",
      },
      {
        q: 'Does management liability cover employee theft and fraud?',
        a: 'Yes. The crime or employee dishonesty component of a management liability policy covers theft of money, property, or securities by employees or directors. It also covers forgery, computer fraud (fraudulent electronic funds transfer), and theft by third parties in some policy wordings. Coverage limits and conditions vary — most NZ policies require discovery of the theft within the policy period and notification within a specified time after discovery.',
      },
      {
        q: 'Can I get a single management liability policy for multiple related companies?',
        a: 'Yes. Many insurers offer management liability cover on a group basis for parent companies and their subsidiaries. This can be more efficient than separate policies for each entity, and ensures consistent coverage across the group. If your business has an evolving structure — subsidiaries being acquired, joint ventures, or new entities being established — confirm with your insurer how the policy responds to changes in the group structure during the policy period.',
      },
      {
        q: 'How does management liability respond in an insolvency?',
        a: "In a company insolvency, liquidators investigate director conduct and may pursue claims for insolvent trading, preferential transactions, or breach of duties. The D&O component of a management liability policy covers directors' personal defence costs and compensation in these claims. Critically, Side A coverage (direct payment to the director) is most important in insolvency because the company cannot indemnify directors once it is insolvent. Check that your management liability policy includes robust Side A protection.",
      },
    ],
    longFormContent: `
<h2>What Is Management Liability Insurance?</h2>
<p>Management liability insurance is a bundled policy that combines several interconnected covers into a single, streamlined solution for New Zealand businesses. Rather than managing separate policies for directors' and officers' liability, employment practices, employee crime, and statutory liability, a management liability policy provides all of these covers under one roof — with one premium, one renewal date, and one insurer relationship.</p>
<p>For SMEs and growing businesses, management liability is often the most cost-effective and administratively efficient way to achieve comprehensive management protection. A management liability policy typically costs 15–30% less than purchasing the equivalent component covers separately, and eliminates the risk of gaps in coverage that can arise when multiple policies are managed independently.</p>
<p>The standard NZ management liability bundle includes: <a href="/coverage/directors-officers/">Directors' &amp; Officers' (D&amp;O) liability</a>, Employment Practices Liability (EPL), Crime (employee dishonesty and theft), and <a href="/coverage/statutory-liability/">Statutory Liability</a>. Optional extensions often include Cyber Liability, Fiduciary Liability, and Tax Investigation costs.</p>

<h2>How Does Management Liability Work in New Zealand?</h2>
<p>Management liability policies in New Zealand operate on a <strong>claims-made basis</strong> for most coverage sections (D&amp;O, EPL) and on a <strong>discovery basis</strong> for the crime section. This means:</p>
<ul>
  <li><strong>D&amp;O and EPL claims:</strong> The policy in place when the claim is made must respond. Continuous coverage without gaps is essential.</li>
  <li><strong>Crime/dishonesty claims:</strong> Discovered losses must be reported within the policy period (or within a specified discovery window after the end of the period). A theft that occurred three years ago but is discovered today triggers the current policy's crime section.</li>
</ul>
<p>Each coverage section within the policy has its own sublimit, which may be lower than the overall policy aggregate. For example, a policy with a $2 million aggregate might have D&amp;O sublimited at $2 million, EPL at $1 million, Crime at $500,000, and Statutory Liability at $1 million. Understanding these sublimits — and ensuring they are adequate for your specific risks — is critical when selecting a management liability policy.</p>
<p>When a claim arises that triggers one or more sections, you notify your insurer. The insurer appoints specialist solicitors relevant to the type of claim (employment lawyers for an ERA matter, corporate solicitors for a Companies Act director claim). This specialist panel network is one of the significant practical advantages of management liability — you get access to the insurer's preferred firms at negotiated rates.</p>

<h2>What Does Management Liability Cover?</h2>
<p>A comprehensive NZ management liability policy covers:</p>
<ul>
  <li><strong>Directors' and Officers' Liability (D&amp;O):</strong> Personal protection for directors, officers and senior managers against claims for wrongful acts in their management roles — from shareholder claims to FMA investigations to Companies Act insolvent trading claims. Covers legal defence costs, settlements and court awards. See our full <a href="/coverage/directors-officers/">D&amp;O guide</a> for detail.</li>
  <li><strong>Employment Practices Liability (EPL):</strong> Covers claims by current or former employees for unfair dismissal, workplace discrimination, harassment, bullying, breach of employment agreement, and psychological injury. The ERA receives hundreds of claims annually — EPL ensures legal costs and awards are covered. Full detail at our <a href="/coverage/employers-liability/">employers' liability guide</a>.</li>
  <li><strong>Crime and Employee Dishonesty:</strong> Covers loss of money, property or securities through theft, fraud or forgery by employees or directors. Also typically covers computer fraud (fraudulent EFT instructions), forgery of cheques or other instruments, and theft by third parties accessing your systems. This is increasingly relevant as electronic funds transfer fraud rises.</li>
  <li><strong>Statutory Liability:</strong> Covers legal defence costs and (where insurable) fines and penalties from unintentional breaches of NZ legislation — HSWA, Employment Relations Act, Fair Trading Act, RMA and others. Detailed coverage explained in our <a href="/coverage/statutory-liability/">statutory liability guide</a>.</li>
  <li><strong>Entity Investigation Coverage:</strong> Covers the company's legal costs when a regulatory authority investigates the company entity itself (rather than an individual director) — for example, an FMA investigation into the company's financial advice practices or a WorkSafe investigation into a workplace safety system failure.</li>
  <li><strong>Crisis Management Costs:</strong> Some management liability policies include a crisis management extension covering the costs of PR consultants, communications specialists, and crisis response planning following a covered event — a board investigation, a media-covered ERA case, or a regulatory action.</li>
  <li><strong>Cyber Liability (optional):</strong> Coverage for data breach response costs, regulatory fines under the Privacy Act 2020, and third-party claims arising from a cyber incident. This can be added as an extension or purchased as a standalone cyber policy.</li>
</ul>

<h2>What Is Not Covered?</h2>
<p>Standard exclusions across a management liability bundle include:</p>
<ul>
  <li><strong>Intentional wrongdoing and fraud:</strong> Deliberate dishonest acts by directors or officers (though defence until proven is typically maintained for all covered persons).</li>
  <li><strong>Bodily injury and property damage:</strong> Covered by <a href="/coverage/public-liability/">public liability insurance</a>.</li>
  <li><strong>Professional services errors:</strong> Covered by <a href="/coverage/professional-indemnity/">professional indemnity insurance</a>.</li>
  <li><strong>Known circumstances at inception.</strong></li>
  <li><strong>Criminal fines and penalties.</strong></li>
  <li><strong>Contractual liability beyond what exists at law.</strong></li>
  <li><strong>Pollution and environmental remediation costs.</strong></li>
</ul>

<h2>Who Needs Management Liability Insurance in New Zealand?</h2>
<p>Management liability insurance suits any business that has directors or officers, employs people, handles money or data, and operates in a regulated environment. Priority segments include:</p>
<ul>
  <li><strong>SMEs with directors and employees:</strong> The combined exposure from Companies Act director liability, employment law, employee fraud, and regulatory compliance makes management liability the most efficient single solution for most SMEs.</li>
  <li><strong>Growing businesses:</strong> As businesses scale from sole traders to companies with boards and management teams, management liability becomes increasingly necessary. The window of highest risk is often during rapid growth when governance structures are still developing.</li>
  <li><strong>Professional services firms:</strong> <a href="/professions/accountants/">Accounting</a> practices, <a href="/professions/financial-advisers/">financial advice</a> firms, and <a href="/professions/consultants/">management consultancies</a> have complex liability profiles. Management liability provides a base layer of protection that works alongside PI insurance.</li>
  <li><strong>Construction and contracting:</strong> HSWA exposure, subcontractor management, and complex contractual relationships create significant statutory, D&amp;O and employment risk. Management liability is increasingly seen as standard for NZ construction firms.</li>
  <li><strong>Healthcare and aged care:</strong> High-stress workforces, regulatory oversight by multiple bodies, and significant employment claims exposure make management liability essential for healthcare operators.</li>
  <li><strong>Retail and hospitality:</strong> Large casual and shift workforces with complex roster arrangements, minimum wage compliance requirements, and high claims frequency from employment matters.</li>
</ul>

<h2>How Much Does Management Liability Insurance Cost in NZ?</h2>
<p>Management liability bundles in New Zealand start from around $120 per month for a small company with 2–5 directors and employees. Key cost drivers include:</p>
<ul>
  <li><strong>Company size and turnover:</strong> Revenue is the primary rating factor across most sections — it correlates with exposure across D&amp;O, EPL, and crime.</li>
  <li><strong>Number of employees:</strong> EPL exposure scales with headcount. More employees means more potential claimants.</li>
  <li><strong>Industry:</strong> Healthcare, construction, and financial services pay more than low-risk office-based businesses.</li>
  <li><strong>Claims history:</strong> Prior claims across any of the bundled sections increase renewal premiums.</li>
  <li><strong>Coverage limits and sublimits selected:</strong> Higher limits across D&amp;O, EPL and crime all increase premium.</li>
  <li><strong>Optional extensions added:</strong> Cyber liability, fiduciary liability, and tax investigation extensions all add to premium but significantly expand protection.</li>
</ul>
<p>Indicative costs: a 10-person professional services firm with $2 million turnover might pay $1,800–$3,000 per year for a comprehensive management liability bundle. A 50-person construction company might pay $6,000–$12,000 per year. The premium saving versus separate policies is typically 15–30%. See our <a href="/pi-insurance-cost/">cost guide</a> for benchmarks.</p>

<h2>How Much Cover Do I Need?</h2>
<p>Selecting management liability limits requires assessing the worst-case scenario across each coverage section:</p>
<ul>
  <li><strong>D&amp;O sublimit:</strong> Should reflect the potential cost of a serious Companies Act or FMA matter — typically $1 million–$5 million for NZ SMEs.</li>
  <li><strong>EPL sublimit:</strong> Should cover the cost of defending and losing a serious ERA matter — typically $500,000–$2 million.</li>
  <li><strong>Crime sublimit:</strong> Should reflect your maximum exposure to employee theft — cash handling, EFT authority, and system access levels all influence this.</li>
  <li><strong>Statutory liability sublimit:</strong> Should reflect a realistic HSWA or Employment Relations Act prosecution defence cost plus potential fine — typically $500,000–$2 million.</li>
</ul>

<h2>NZ Regulatory Context for Management Liability</h2>
<p>Multiple NZ regulatory frameworks make management liability insurance necessary rather than optional:</p>
<ul>
  <li><strong>Companies Act 1993:</strong> Director liability for insolvent trading and breach of duties.</li>
  <li><strong>Employment Relations Act 2000:</strong> ERA jurisdiction over all employment relationships.</li>
  <li><strong>Health and Safety at Work Act 2015:</strong> Personal director liability for HSWA governance failures.</li>
  <li><strong>Financial Markets Conduct Act 2013:</strong> FMA director and officer liability for regulated entity failures.</li>
  <li><strong>Privacy Act 2020:</strong> Data breach response requirements and Privacy Commissioner jurisdiction.</li>
</ul>

<h2>Getting the Right Management Liability Cover in NZ</h2>
<p>When purchasing management liability, work with a licensed insurance adviser to:</p>
<ul>
  <li>Map your business's specific risk profile across D&amp;O, EPL, crime and statutory liability.</li>
  <li>Confirm sublimits are adequate for each section — not just the aggregate limit.</li>
  <li>Review the insurer's panel solicitor network for employment and corporate law specialists.</li>
  <li>Ensure group company structures are correctly scheduled in the policy.</li>
  <li>Consider adding cyber liability if your business handles customer data or relies on electronic payments.</li>
</ul>
<p><a href="/compare/">Compare management liability options</a> or <a href="/contact/">request a quote</a> from a licensed insurance adviser today.</p>
    `.trim(),
  },
  {
    slug: 'run-off-cover',
    name: 'Run-off Cover Insurance',
    icon: '🔄',
    shortDesc: 'Extends your professional indemnity cover after you cease trading, retire or sell your business.',
    description: "Professional indemnity insurance operates on a 'claims-made' basis, meaning you must have a policy active when a claim is made — not just when the work was done. Run-off cover (also called tail cover) protects you after you stop practising, retire, wind up your business, or transfer your professional liability to a new entity. Without it, claims arising from past work could leave you personally exposed.",
    whoNeeds: [
      'Retiring professionals and sole practitioners',
      'Businesses winding up or being sold',
      'Professionals moving to employed roles',
      'Consultants taking a career break',
      'Anyone whose PI policy is not being renewed',
      'Businesses transferring operations to new entities',
      'Accountants and lawyers closing their practices',
      'Architects and engineers retiring from practice',
    ],
    whatCovers: [
      'Claims arising from work done before cover ceased',
      'Retroactive date protection for past services',
      'Legal defence costs for historical claims',
      'Court-awarded compensation for past errors',
      'Typically covers 1–7 years of past work',
      'Unlimited retroactive cover (with some insurers)',
      'Transfers of professional liability',
      'Estate protection for deceased practitioners',
    ],
    avgCost: 'From $60/month',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    keyStats: [
      { label: 'Average monthly cost', value: 'From $60/month' },
      { label: 'Typical run-off period', value: '2–7 years' },
      { label: 'Limitation period (NZ)', value: 'Up to 15 years' },
    ],
    relatedCoverage: ['professional-indemnity', 'directors-officers', 'management-liability'],
    relatedProfessions: ['accountants', 'architects-engineers', 'financial-advisers'],
    faqs: [
      {
        q: 'What is the difference between run-off cover and an extended reporting period (ERP)?',
        a: "Run-off cover is a standalone policy — or continuation of an existing policy — purchased specifically to cover claims arising after you stop practising, with no new work being generated. An extended reporting period (ERP) is a provision within some PI policies that allows you to report claims discovered after the policy expires for a defined period (commonly 30–90 days, or up to 12 months). ERP provisions are short-term extensions within a single policy; run-off cover is a longer-term solution designed for permanent cessation of professional activities.",
      },
      {
        q: 'How long do I need run-off cover for?',
        a: "The NZ Limitation Act 2010 provides for a 6-year general limitation period from the date of the act or omission, and a 15-year longstop period from the date of the act. In practice, professional negligence claims in NZ are most commonly made within 3–5 years of the services being provided — but the 15-year longstop means exposure persists for much longer. Most advisers recommend a minimum of 6 years' run-off cover. For <a href='/professions/architects-engineers/'>architects and engineers</a>, where latent defects in buildings can surface many years after completion, the full 15 years of cover is sometimes recommended.",
      },
      {
        q: 'Is run-off cover required when I sell my business?',
        a: "When you sell a professional services business, the purchasing entity typically takes on the ongoing PI policy. However, claims arising from work done while you personally owned and operated the business may be your personal liability — not the new owner's. A run-off policy in your name protects you against historical claims that surface after the sale. Sale and purchase agreements should always specify who is responsible for historical PI claims and whether run-off cover is required as a condition of completion.",
      },
      {
        q: 'What happens to PI cover when a professional dies?',
        a: "Most NZ PI policies include estate protection provisions — the policy continues to cover the deceased professional's estate for claims arising from their professional work, typically for a defined run-off period (commonly 3–5 years). If the deceased was a sole practitioner, the estate should notify the insurer promptly and arrange formal run-off cover if the policy was not automatically continuing. Executors and administrators should check the PI policy immediately when dealing with a deceased professional's estate.",
      },
      {
        q: 'Can I get run-off cover from a different insurer than my existing PI?',
        a: "Yes, though it is generally simpler and cheaper to arrange run-off cover with your existing PI insurer. Your existing insurer already knows your risk profile and practice history, making underwriting faster and pricing more accurate. If your existing insurer does not offer run-off cover, or if pricing is uncompetitive, a licensed insurance adviser can arrange run-off cover with a specialist insurer. The key is to ensure the run-off policy's retroactive date matches your original PI policy's inception date, covering your entire professional career.",
      },
    ],
    longFormContent: `
<h2>What Is Run-off Cover Insurance?</h2>
<p>Run-off cover — also called tail cover or cessation cover — is a type of professional indemnity insurance that protects you after you stop providing professional services. Because <a href="/coverage/professional-indemnity/">professional indemnity insurance</a> in New Zealand operates on a claims-made basis, you need an active policy when a claim is made against you, regardless of when the underlying work was done. When you retire, wind up your business, sell your practice, or move to an employed role where PI is provided by your employer, your existing PI policy ceases — and any claims arising from past work could leave you personally exposed without run-off cover.</p>
<p>The risk is not theoretical. A structural engineer who retires today could face a claim three years from now when a defect in a building they designed in 2020 surfaces. An accountant who closes their practice might receive a claim for a tax advice error from five years ago. A financial adviser who joins a large firm where the firm provides PI might face a personal claim arising from advice given while in private practice. In each case, only run-off cover bridges the gap between the end of active practice and the end of legal exposure.</p>

<h2>How Does Run-off Cover Work in New Zealand?</h2>
<p>Run-off cover operates as an extension of the claims-made principle. When you purchase run-off cover, the policy:</p>
<ul>
  <li>Takes effect from the date your active PI policy ceases.</li>
  <li>Maintains the original retroactive date from your active policy history — ensuring claims arising from all work done during your career are covered.</li>
  <li>Responds to claims made against you during the run-off period for professional services provided before the cessation date.</li>
  <li>Covers legal defence costs and compensation payments, just as an active PI policy would.</li>
</ul>
<p>Run-off cover periods vary. Policies are available for 1 year, 2 years, 3 years, 5 years, 7 years, and in some cases indefinitely (though ongoing premium is required). The appropriate period depends on the nature of your work and the statutes of limitations that apply.</p>
<p>Under New Zealand's Limitation Act 2010, the standard limitation period for professional negligence claims is 6 years from the date of the act or omission, with a 15-year longstop period. This means that in theory, a claim could be made against you up to 15 years after you cease practice — though in practice, most claims surface within 3–5 years. Most advisers recommend a minimum of 6 years' run-off cover as a baseline.</p>
<p>Run-off premiums are typically calculated as a percentage of your last annual PI premium — commonly 150–300% of the annual premium for a multi-year run-off arrangement paid as a single lump sum, or a reduced annual premium for each year of run-off cover maintained.</p>

<h2>What Does Run-off Cover Cover?</h2>
<p>Run-off cover provides identical protection to an active PI policy, but applied retrospectively to past professional services. Key coverage elements:</p>
<ul>
  <li><strong>Claims from past professional work:</strong> Any claim arising from professional services you provided before the cessation date — whether last week or ten years ago (subject to the retroactive date on your original policy).</li>
  <li><strong>Legal defence costs:</strong> Solicitor and barrister fees, court costs, expert witness fees, and investigation costs from the first notification of a claim. Defence costs can be enormous — even successfully defending a claim might cost $50,000–$200,000.</li>
  <li><strong>Court-awarded damages and settlements:</strong> If the court finds in favour of the claimant, or if you settle, the insurer pays compensation up to the policy limit.</li>
  <li><strong>Retroactive date protection:</strong> Claims arising from work done back to your original retroactive date are covered — ensuring your entire professional career is protected, not just recent years.</li>
  <li><strong>Regulatory investigations:</strong> Investigations by professional bodies (NZICA, NZIA, REA, FMA) into your past work, even after you have ceased practice.</li>
  <li><strong>Estate protection:</strong> If you die during the run-off period, most policies continue to protect your estate for claims arising from your professional work.</li>
</ul>

<h2>What Is Not Covered by Run-off Cover?</h2>
<p>Key exclusions include:</p>
<ul>
  <li><strong>New professional work:</strong> If you recommence providing professional services after obtaining run-off cover, the run-off policy will not cover work done after its inception date. You would need a new active PI policy for any new services.</li>
  <li><strong>Known claims at inception:</strong> Circumstances or claims you were already aware of when the run-off cover commenced are excluded. This is critical — if you know of a potential claim before your active policy expires, report it to the active policy insurer before the policy ends.</li>
  <li><strong>Work done before your original retroactive date.</strong></li>
  <li><strong>Intentional wrongdoing or fraud.</strong></li>
  <li><strong>Bodily injury and property damage:</strong> These require separate public liability run-off arrangements where relevant.</li>
</ul>

<h2>Who Needs Run-off Cover in New Zealand?</h2>
<p>Run-off cover is needed by any professional who ceases active practice while remaining exposed to claims from past work. Priority groups include:</p>
<ul>
  <li><strong>Retiring professionals:</strong> Accountants, lawyers, architects, engineers, financial advisers and healthcare practitioners all face extended exposure after retirement. The longer the career, the more years of past work that remain within limitation periods.</li>
  <li><strong>Business sellers:</strong> When selling a professional services business, the seller typically retains liability for work done before settlement. Run-off cover in the seller's name protects against post-sale claims from pre-sale work.</li>
  <li><strong>Professionals moving to employment:</strong> A consultant moving from private practice to an in-house or employed role where their new employer provides PI coverage needs run-off cover for their previous practice period.</li>
  <li><strong>Businesses winding up:</strong> Directors of companies that are wound up or liquidated face ongoing personal exposure for professional services provided by the company. Run-off cover in the company's name (or the director's personal name) protects against this.</li>
  <li><strong>Consultants taking a career break:</strong> If you intend to return to practice after a break, some PI policies offer automatic reinstatement; others require a new policy. During any gap in active cover, run-off cover for the prior period is essential.</li>
  <li><strong><a href="/professions/accountants/">Accountants</a> and lawyers:</strong> NZICA and NZLS require PI cover for practising members. When a member retires or has their practising certificate cancelled, run-off cover is strongly recommended to protect against past-work claims.</li>
  <li><strong><a href="/professions/architects-engineers/">Architects and engineers:</a></strong> Construction defects can have very long latency periods — a building design error may not manifest for 5–10 years. The construction sector's long claim tail makes run-off cover particularly important for retiring building professionals.</li>
  <li><strong><a href="/professions/financial-advisers/">Financial advisers:</a></strong> Investment advice claims often surface when markets move — a client who received advice during a bull market may only become aware of losses and potential grounds for a claim when circumstances change, potentially years later.</li>
</ul>

<h2>How Much Does Run-off Cover Cost in NZ?</h2>
<p>Run-off cover premiums typically reflect a percentage of the last active PI annual premium:</p>
<ul>
  <li><strong>One-year run-off:</strong> Commonly 75–100% of the annual premium.</li>
  <li><strong>Two-year run-off:</strong> Commonly 125–175% of the annual premium (total for two years).</li>
  <li><strong>Five-year run-off:</strong> Commonly 175–250% of the annual premium (lump sum or annual instalments).</li>
  <li><strong>Seven-year or indefinite run-off:</strong> Pricing varies significantly by insurer and profession — obtain quotes from multiple specialist insurers.</li>
</ul>
<p>For a sole trader accountant paying $1,500/year in active PI premiums, a five-year run-off policy might cost $3,000–$4,000 as a single premium. For a mid-size engineering consultancy paying $15,000/year in active PI, a five-year run-off might cost $25,000–$40,000. Given the potential magnitude of construction or financial advice claims, this is typically cost-effective protection. See our <a href="/pi-insurance-cost/">cost guide</a> for more.</p>

<h2>How Much Run-off Cover Do I Need?</h2>
<p>Selecting run-off cover limits and periods requires careful consideration:</p>
<ul>
  <li><strong>Limit:</strong> Match or exceed the limit you maintained during active practice. Claims arising from historical work can be just as large as current-year claims — a retired engineer may face a claim as large as any they faced in active practice.</li>
  <li><strong>Period:</strong> At minimum, 6 years (matching the general NZ limitation period). For construction professionals, healthcare practitioners, and financial advisers, consider 10–15 years to address the full longstop period.</li>
  <li><strong>Retroactive date:</strong> Must extend back to the beginning of your professional career (or the earliest date from which you have continuous claims-made coverage) to ensure full protection.</li>
</ul>

<h2>NZ Regulatory Requirements for Run-off Cover</h2>
<p>Several NZ professional bodies and regulatory frameworks address run-off cover requirements:</p>
<ul>
  <li><strong>Financial Markets Conduct Act 2013 (FMCA):</strong> FAP licence conditions may require ongoing PI cover for a period after cessation of licence. Check FMA licence conditions for run-off obligations.</li>
  <li><strong>Real Estate Agents Act 2008:</strong> The REA may specify run-off requirements for retiring agents — check current REA standards.</li>
  <li><strong>NZICA:</strong> The Institute's PI requirements for members include guidance on run-off cover for retiring members — though they do not universally mandate it.</li>
  <li><strong>Limitation Act 2010:</strong> Sets the legal framework within which claims can be made. The 15-year longstop period is the definitive guide to maximum run-off exposure.</li>
</ul>

<h2>Getting the Right Run-off Cover in NZ</h2>
<p>When arranging run-off cover, act before your active PI policy expires — some insurers will not offer run-off cover if there has been any gap in coverage. Work with a licensed insurance adviser to:</p>
<ul>
  <li>Obtain run-off quotes from your existing insurer and at least one specialist alternative.</li>
  <li>Confirm the retroactive date on the run-off policy matches your entire career history.</li>
  <li>Report any known potential claims to your active policy insurer before the policy expires.</li>
  <li>Consider whether a lump-sum or annual payment structure is more appropriate for your financial position.</li>
  <li>Review whether any professional body obligations require run-off cover as a condition of retiring from membership.</li>
</ul>
<p>Don't leave it until the last moment. The best time to arrange run-off cover is alongside your last active PI renewal — when your practice history is current and your insurer knows your risk profile well. <a href="/compare/">Compare run-off cover options</a> or <a href="/contact/">speak to a licensed adviser</a> about protecting your professional legacy.</p>
    `.trim(),
  },
]
