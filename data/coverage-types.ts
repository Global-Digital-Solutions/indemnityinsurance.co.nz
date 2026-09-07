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
    avgCost: 'Individually underwritten',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    keyStats: [
      { label: 'How the premium is set', value: 'Individual underwriting' },
      { label: 'Lowest published NZ minimum limit', value: '$200,000 (producer statements)' },
      { label: 'Policy type', value: 'Claims-made' },
    ],
    relatedCoverage: ['public-liability', 'run-off-cover', 'management-liability'],
    relatedProfessions: ['accountants', 'architects-engineers', 'it-consultants'],
    faqs: [
      {
        q: 'Is professional indemnity insurance mandatory in New Zealand?',
        a: 'For most professions, no. Professional indemnity is not a condition of the FMA licence held by financial advice providers — the FMA consulted on adding it in June 2020 and decided against it in November 2020. The Real Estate Authority does not require it either: the Professional Conduct and Client Care Rules 2012 do not mention insurance at all. Engineering New Zealand does not require it for membership or for CPEng. Where PI is genuinely required in New Zealand, the obligation usually comes from a membership body or a client contract rather than from a regulator. REINZ member agencies must hold at least $1 million under Principle 19 of the Code of Agency Practice; self-employed ADNZ Professional members must hold at least $250,000; CA ANZ members in public practice must hold current and appropriate PI to hold a Certificate of Public Practice; and CPA Australia members offering public accounting services must hold PI. Legislation requiring PI for building design professionals has been introduced but is not yet law — see the section on the building reform below.',
      },
      {
        q: 'What does "claims-made" mean for professional indemnity in NZ?',
        a: 'Claims-made means your PI policy must be active at the time a claim is lodged against you — not just when the underlying work was done. If a client makes a claim two years after a project ended and you have no current PI policy, you are personally exposed. This is why <a href="/coverage/run-off-cover/">run-off cover</a> is critical when you retire, wind up your business, or change insurers without maintaining a retroactive date.',
      },
      {
        q: 'How much professional indemnity cover do I need?',
        a: 'Start with what someone else already requires of you, because that usually sets the floor. The published New Zealand minimums are specific: $200,000 for an engineering firm issuing a producer statement, $250,000 for a self-employed ADNZ Professional member, $1 million for a REINZ member agency, and for lawyers the New Zealand Law Society standard of the greater of $1.2 million per practice or $900,000 per partner. Above those floors, the limit is a commercial judgement about the worst realistic loss a client could suffer from your work, the limit your contracts specify, and whether defence costs sit inside or outside the limit. We do not publish limit bands by profession, because no New Zealand source supports them.',
      },
      {
        q: 'What is a retroactive date on a PI policy?',
        a: 'A retroactive date is the earliest date from which work is covered under a claims-made policy. Claims arising from work done before the retroactive date are excluded. When you first take out PI, the retroactive date is typically the policy start date. If you renew with the same insurer, the retroactive date stays the same, building up a longer window of protection. Switching insurers without negotiating a matching retroactive date leaves a coverage gap for historical work.',
      },
      {
        q: 'Does PI insurance cover legal defence costs even if I win?',
        a: 'Most policies do, but check the wording rather than assuming. Defence costs are usually met whatever the outcome, which matters because successfully defending a meritless claim still costs money. The two things to verify are whether defence costs sit inside the limit of indemnity (so that defending a claim erodes what is left to settle it) or in addition to it, and whether the excess applies to defence costs as well as to compensation.',
      },
    ],
    longFormContent: `
<div class="keyfact">
<p><strong>What changed on this page.</strong> Every premium figure has been removed. No New Zealand insurer or professional body publishes professional indemnity rate tables — cover is broker-distributed and individually underwritten — so any per-month figure on a website, including the ones this page used to carry, is invented. The regulatory section has also been corrected: professional indemnity is not an FMA licence condition for financial advice providers, the Real Estate Authority does not require it, and there is no "Building (Mandatory PI) Amendment Act 2025".</p>
</div>

<h2>What Is Professional Indemnity Insurance?</h2>
<p>Professional indemnity (PI) insurance — also called professional liability insurance — protects professionals and businesses that provide advice, expertise or specialist services. If a client alleges that your professional service caused them a financial loss, PI insurance pays your legal defence costs and any compensation the court awards or you agree to settle.</p>
<p>Whether you are an <a href="/professions/accountants/">accountant</a> handling complex tax matters, an <a href="/professions/architects-engineers/">architect</a> working on building design, or an <a href="/professions/it-consultants/">IT consultant</a> deploying critical systems, a single negligence claim can threaten the financial viability of your practice and your personal assets if you operate as a sole trader or director.</p>
<p>PI insurance is distinct from public liability insurance, which covers physical injury or property damage. PI specifically covers economic or financial loss arising from your professional services, advice or omissions — risks that general liability policies explicitly exclude.</p>

<h2>How Does Professional Indemnity Work in New Zealand?</h2>
<p>Professional indemnity policies operate on a <strong>claims-made basis</strong>. This is a critical distinction from occurrence-based policies. Under a claims-made policy:</p>
<ul>
  <li>You must have an active PI policy when the claim is first made against you — not just when the work was done.</li>
  <li>Your policy must include a retroactive date that covers the period when the work was carried out.</li>
  <li>If you cease trading without arranging <a href="/coverage/run-off-cover/">run-off cover</a>, claims arising from past work leave you personally exposed.</li>
</ul>
<p>When a claim is lodged, your insurer appoints solicitors to defend you. Most PI policies include a duty to defend clause, meaning the insurer controls the defence and pays legal costs directly. This is different from indemnity-only policies where you pay costs and seek reimbursement.</p>
<p>Limits are usually driven by what someone else requires of you rather than by your own estimate of risk, and the published New Zealand minimums are specific and modest. An engineering firm issuing a Producer Statement states that it holds professional indemnity to a minimum of $200,000 — Engineering New Zealand notes that this value is standard and unrelated to construction costs. Architectural Designers New Zealand sets $250,000 for self-employed Professional members. REINZ member agencies must hold at least $1 million under Principle 19 of the Code of Agency Practice. For lawyers, the New Zealand Law Society standard is the greater of $1.2 million per practice or $900,000 per partner. Commercial and public sector contracts commonly specify limits above all of these.</p>
<p>On excess, the Law Society standard is a useful sense-check even outside law: the excess should not exceed the greater of 1% of the indemnity limit or $20,000. An excess that is a large fraction of your limit is carrying more of the risk than you probably intend. In most standard wordings the excess applies to defence costs as well as to compensation.</p>

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
<p>Many policies also cover the cost of responding to an investigation by your professional body or by a regulator before any formal claim is made. Whether this is included, at what sub-limit, and whether any resulting penalty is excluded, varies between wordings — read the schedule rather than assuming.</p>

<h2>What Is Not Covered?</h2>
<p>Understanding exclusions is as important as knowing what is covered. Standard PI exclusions include:</p>
<ul>
  <li><strong>Intentional wrongdoing:</strong> Deliberate fraud or dishonest acts by you personally (though your insurer may still defend until proven).</li>
  <li><strong>Bodily injury and property damage:</strong> These are covered by <a href="/coverage/public-liability/">public liability insurance</a>, not PI.</li>
  <li><strong>Work done before the retroactive date:</strong> Claims arising from work predating your earliest retroactive date.</li>
  <li><strong>Known claims or circumstances:</strong> Situations you were aware of before the policy incepted are excluded — a key reason to disclose everything at renewal.</li>
  <li><strong>Contractual liability beyond common law duty:</strong> Liability you assume by contract that exceeds what would apply at law is generally excluded unless specifically extended.</li>
  <li><strong>Fines and penalties:</strong> Regulatory fines are not a PI loss. Health and Safety at Work Act fines in particular cannot be insured at all — see <a href="/coverage/statutory-liability/">statutory liability</a>.</li>
  <li><strong>Nuclear, war or terrorism risks.</strong></li>
  <li><strong>Insolvency of clients:</strong> If a client cannot pay you and you lose fees, this is a commercial risk, not a PI claim.</li>
</ul>

<h2>Who Needs Professional Indemnity in New Zealand?</h2>
<p>PI insurance is relevant to any individual or business that provides professional advice, expertise or services for a fee. Whether it is <em>required</em> of you is a separate question, answered in the next section. Groups with the clearest exposure include:</p>
<ul>
  <li><strong><a href="/professions/accountants/">Accountants and tax advisers:</a></strong> CA ANZ members in public practice must hold current and appropriate PI to hold a Certificate of Public Practice, and CPA Australia members offering public accounting services in New Zealand must hold PI. Tax advice errors can produce large consequential losses for clients.</li>
  <li><strong><a href="/professions/architects-engineers/">Architects, designers and engineers:</a></strong> No regulator requires PI of them today. Around 90% hold it voluntarily, according to official material published alongside the November 2025 building reform announcement. Self-employed ADNZ Professional members must hold $250,000, and firms issuing producer statements represent that they hold at least $200,000.</li>
  <li><strong><a href="/professions/it-consultants/">IT consultants and developers:</a></strong> Software errors, data breaches caused by poor security advice, and failed system integrations are common PI claim triggers. There is no professional body requirement — the obligation, where it exists, comes from client contracts.</li>
  <li><strong><a href="/professions/financial-advisers/">Financial advisers and mortgage brokers:</a></strong> PI is not an FMA licence condition and there is no PI disclosure obligation. Many advisers still hold it because product providers, aggregators and clients expect it.</li>
  <li><strong>Real estate agents:</strong> The Real Estate Authority does not require PI. REINZ does: member agencies must carry at least $1 million covering the business and everyone engaged in it, and individual members must ensure they or their employer carry PI at that level.</li>
  <li><strong>Management consultants:</strong> No regulator, no body — but strategic advice that leads to a poor commercial outcome is exactly what PI is designed for, and contract requirements are common.</li>
  <li><strong>Healthcare practitioners:</strong> Allied health practitioners outside the ACC system face malpractice-style claims. Note that medical indemnity is usually arranged through profession-specific schemes rather than general PI, and cannot be arranged through us.</li>
  <li><strong>Legal professionals:</strong> PI is not currently compulsory for New Zealand lawyers. The Law Society consulted on compulsory PI in March 2026. Its published standard, where cover is held, is the greater of $1.2 million per practice or $900,000 per partner.</li>
</ul>

<h2>Where Professional Indemnity Is Required — and Where It Is Not</h2>
<p>Most of the confusion in this area comes from blurring three different things: a requirement set by law or a regulator, a requirement set by a membership body, and a requirement set by a client contract. They are not the same, and only the first has legal force on its own.</p>
<p><strong>Not required by any New Zealand regulator, as at 7 September 2026:</strong></p>
<ul>
  <li><strong>Financial advice providers.</strong> PI is not one of the seven standard conditions on an FAP licence. Those conditions are record keeping, internal complaints process, regulatory returns, outsourcing, business continuity and technology systems, ongoing requirements, and notification of material changes. The FMA consulted on adding PI on 17 June 2020 and decided against it on 6 November 2020. PI does not appear in the Code of Professional Conduct for Financial Advice Services, and there is no PI disclosure obligation.</li>
  <li><strong>Real estate agents.</strong> The Real Estate Agents Act (Professional Conduct and Client Care) Rules 2012 contain no reference to insurance or indemnity. REA licensing criteria are age, fit and proper person, the NZ Certificate in Real Estate, criminal history and referees. Trust account obligations are an audit requirement, not an insurance one.</li>
  <li><strong>Architects.</strong> The Registered Architects Act 2005 contains no insurance provisions. The Registered Architects Rules 2006 mention PI only at rule 50, as a permissive item in agreed terms of appointment with a client. Continuing registration is a five-yearly competence review plus CPD, and the statutory instrument is a certificate of registration.</li>
  <li><strong>Engineers.</strong> Engineering New Zealand does not require PI for membership or for CPEng. The Chartered Professional Engineers of New Zealand Rules (No 2) 2002 contain no occurrence of the words indemnity or insurance.</li>
  <li><strong>Nurses and social workers.</strong> Neither the Nursing Council nor the Social Workers Registration Board requires PI for a practising certificate. Where a professional college provides PI, it is a member benefit.</li>
</ul>
<p><strong>Required, but by a membership body or a contract:</strong> REINZ member agencies ($1 million minimum), REINZ individual members, ADNZ self-employed Professional members ($250,000 minimum), CA ANZ members in public practice, and CPA Australia members offering public accounting services. Engineering firms issuing producer statements represent a minimum of $200,000. Client contracts — particularly local authority, institutional and head contractor appointments — routinely set a limit, and that specified limit is usually the operative answer for the firm concerned.</p>
<p><strong>The building reform is not law.</strong> On 24 November 2025 the Government announced that professionals contributing to building design — the factsheet scopes it to architecture, design, engineering and certain building surveying services — will be required to hold professional indemnity insurance. It says expressly that it will not apply to builders. The Building Amendment Bill was introduced on 2 July 2026 and is before select committee, with submissions closing at 11.59pm on Sunday 15 November 2026. No minimum limit has been proposed: MBIE's Regulatory Impact Statement of 18 November 2025 states that the details of the scheme are yet to be developed and require further consultation. The requirement is expected to take effect in 2028, after a one-year lead-in once the Bill passes.</p>

<h2>What Professional Indemnity Costs in New Zealand</h2>
<p>New Zealand commercial liability cover is broker-distributed and individually underwritten. No insurer publishes rate tables, and there is no public New Zealand professional indemnity premium dataset. That is why this page carries no monthly figure — anything we printed would be a guess dressed as data.</p>
<p>There is one official cost figure in this area, and it is narrow. The Government's factsheet of 24 November 2025 states that professional indemnity insurance for architects typically costs between $1,500 and $3,000 per person each year, often covered by the firm; the supporting Cabinet paper of 18 November 2025 repeats the same range. It is an estimate published to support a policy decision, with no methodology attached, and it should not be stretched into a benchmark for other professions.</p>
<p>For law firms specifically, the New Zealand Law Society and KPMG surveyed 124 firms in October and November 2023 and published average professional indemnity cost per firm in March 2024: $2,850 for a barrister, $7,227 for a sole practitioner, $66,044 for a small firm of 2 to 19 lawyers, $100,996 for a medium firm of 20 to 49, and $306,458 for a large firm of 50 or more. The same study found PI grew at 23.8% compound annually between 2021 and 2023, the highest of any overhead category, and 33.1% for small firms. These are per firm, not per person, they are law only, and they are 2023 data.</p>
<p>What an underwriter actually rates on:</p>
<ul>
  <li><strong>Limit of indemnity.</strong> Anchor to the published minimums above, then to what your contracts require.</li>
  <li><strong>Fee income or revenue.</strong> The primary rating base for most professional indemnity.</li>
  <li><strong>Work type and discipline.</strong> Residential construction, structural and geotechnical work rate materially harder than most advisory work.</li>
  <li><strong>Claims and notification history</strong>, including matters notified and successfully defended.</li>
  <li><strong>Excess or deductible.</strong> A higher excess reduces premium; the Law Society standard of not more than the greater of 1% of the limit or $20,000 is a reasonable ceiling to keep in mind.</li>
  <li><strong>Retroactive date and run-off.</strong> Because PI is claims-made, prior acts cover is a genuine price lever.</li>
  <li><strong>Defence costs inside or outside the limit.</strong></li>
  <li><strong>Contractual requirements.</strong> Clients and councils frequently set the limit, and the limit sets the price.</li>
</ul>
<p>The only way to get a real number is to have your risk underwritten. <a href="/contact/">Speak to a licensed adviser</a> and ask for the rating basis in writing alongside the premium.</p>

<h2>How Much Professional Indemnity Cover Do I Need?</h2>
<p>Selecting a limit requires balancing actual exposure against premium. Consider:</p>
<ul>
  <li><strong>Contract requirements:</strong> Read the insurance schedule in each contract. That figure is usually the operative one.</li>
  <li><strong>Value of projects:</strong> Your limit should reflect the maximum financial loss a client could suffer from your worst realistic error — measured in remediation cost, not in your fee.</li>
  <li><strong>Membership body minimums:</strong> $200,000 for producer statements, $250,000 for ADNZ self-employed Professional members, $1 million for REINZ member agencies. Confirm the current position with your own body.</li>
  <li><strong>Defence costs:</strong> If defence costs erode the limit, a claim that costs $200,000 to defend and $400,000 to settle consumes $600,000 of it.</li>
  <li><strong>Aggregation versus per-claim limits:</strong> Whether the limit restores for each claim matters more than its headline size if you carry a portfolio of similar work.</li>
</ul>

<h2>Getting the Right Professional Indemnity Cover in NZ</h2>
<p>Purchasing PI through a licensed insurance adviser gives you access to specialist underwriters and ensures the policy is structured for your profession. Verify before binding cover:</p>
<ul>
  <li>The retroactive date matches or predates your earliest outstanding professional work.</li>
  <li>The policy wording covers your specific services (for example design and construct, investment advice, software development).</li>
  <li>Whether defence costs are within or in addition to the limit of indemnity.</li>
  <li>The policy covers full-time and part-time employees and the subcontractors you engage.</li>
  <li>Run-off provisions are available if you retire or change entities, and you know their cost before you need them.</li>
</ul>
<p>Ready to get covered? <a href="/compare/">Compare professional indemnity options</a> or <a href="/contact/">speak to a licensed adviser</a> who can match you with the right policy for your profession and practice size.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.beehive.govt.nz/sites/default/files/2025-11/Consumer%20protections%20for%20building%20consent%20system%20reforms%20factsheet.pdf" rel="nofollow noopener" target="_blank">Consumer protections for building consent system reforms — factsheet (PDF)</a>, 24 November 2025 — source of the $1,500 to $3,000 per person per year estimate for architects, the scope of the proposed requirement, and the statement that it will not apply to builders.</li>
<li><a href="https://www.mbie.govt.nz/dmsdocument/31701-regulatory-impact-statement-supporting-mechanisms-for-proportionate-liability-in-the-building-and-construction-sector-proactiverelease-pdf" rel="nofollow noopener" target="_blank">MBIE — Regulatory Impact Statement, proportionate liability (PDF)</a>, 18 November 2025 — no minimum limit proposed; details yet to be developed.</li>
<li><a href="https://www.building.govt.nz/about-building-performance/all-news-and-updates/building-amendment-bill-introduced-to-parliament" rel="nofollow noopener" target="_blank">Building Performance — Building Amendment Bill introduced to Parliament</a>, 2 July 2026.</li>
<li><a href="https://www.engineeringnz.org/engineer-tools/engineering-documents/producer-statements/professional-indemnity-insurance-why-200000/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Professional indemnity insurance: why $200,000?</a></li>
<li><a href="https://www.legislation.govt.nz/regulation/public/2002/0389/latest/whole.html" rel="nofollow noopener" target="_blank">Chartered Professional Engineers of New Zealand Rules (No 2) 2002</a> — no occurrence of indemnity or insurance.</li>
<li>Financial Markets Authority — consultation on standard conditions for financial advice provider licences, opened 17 June 2020, outcome 6 November 2020: professional indemnity insurance was not adopted as a standard condition.</li>
<li>Real Estate Agents Act (Professional Conduct and Client Care) Rules 2012 — no occurrence of insurance or indemnity.</li>
<li>REINZ Code of Agency Practice, Principle 19, and Code of Individual Membership, Principle 12, November 2024 — $1 million minimum for member agencies.</li>
<li>Architectural Designers New Zealand — Professional membership application form: $250,000 minimum for self-employed Professional members.</li>
<li>Chartered Accountants Australia and New Zealand — Certificate of Public Practice requirements: current and appropriate professional indemnity insurance.</li>
<li>CPA Australia — practising in New Zealand: members offering public accounting services must hold professional indemnity insurance.</li>
<li>New Zealand Law Society and KPMG, Benchmarking costs of law practice in New Zealand, published March 2024 (124 firms surveyed October to November 2023).</li>
</ul>
<p>Last reviewed 7 September 2026. We are an information and referral service, not an insurer and not a law firm; the advisers we refer you to are licensed. General information only, not legal or financial advice. Policy wordings differ between underwriters — the schedule and wording govern, not this page. Confirm your own obligations with your professional body and your client contracts.</p>
</div>
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
    avgCost: 'Individually underwritten',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80',
    author: 'sarah-thompson',
    keyStats: [
      { label: 'How the premium is set', value: 'Individual underwriting' },
      { label: 'Policy type', value: 'Occurrence-based' },
      { label: 'Limit usually set by', value: 'Your contract or lease' },
    ],
    relatedCoverage: ['professional-indemnity', 'employers-liability', 'statutory-liability'],
    relatedProfessions: ['consultants', 'architects-engineers', 'healthcare'],
    faqs: [
      {
        q: 'Is public liability insurance compulsory in New Zealand?',
        a: 'No New Zealand statute makes public liability insurance compulsory. In practice it is required by contracts, venue operators, landlords and councils before you can work or operate — government contracts, commercial leases, building site access and most event permits ask for evidence of cover, and the document usually specifies the limit it wants. Check the insurance schedule in the contract in front of you rather than relying on a general figure.',
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
        a: 'The limit is almost always set for you by the document you are signing — a construction contract, a council event permit, a commercial lease or a tender. Read the insurance schedule and match it, including whether the limit must be any-one-occurrence rather than in the aggregate. We do not publish typical limits by business type, because no New Zealand source supports them; where you have no contractual requirement at all, the question becomes the largest single loss a third party could credibly suffer from your operations, and that is a conversation with an adviser rather than a table.',
      },
    ],
    longFormContent: `
<div class="keyfact">
<p><strong>What changed on this page.</strong> All premium figures have been removed, including a comparison to a named online platform. New Zealand commercial liability cover is broker-distributed and individually underwritten, and no insurer publishes rate tables. We have also corrected the regulatory section: there is no "Building and Construction Act", and statutory liability insurance does not pay Health and Safety at Work Act fines.</p>
</div>

<h2>What Is Public Liability Insurance?</h2>
<p>Public liability (PL) insurance is one of the most widely held business insurance policies in New Zealand. It protects your business when a third party — a client, a customer, a visitor, or a member of the public — suffers bodily injury or property damage as a result of your business activities. The policy pays your legal defence costs and any compensation the injured party is awarded or you agree to settle.</p>
<p>Unlike <a href="/coverage/professional-indemnity/">professional indemnity insurance</a>, which covers financial loss arising from professional advice or services, public liability covers the physical consequences of operating your business: a client slips in your office, a contractor damages a customer's property, a product you supply injures a consumer.</p>
<p>Most contracts, leases, tender documents and site access arrangements specify minimum PL limits as a condition of engagement, which is why it is often the first policy a New Zealand business is asked to produce.</p>

<h2>How Does Public Liability Insurance Work in New Zealand?</h2>
<p>Unlike professional indemnity, public liability policies operate on an <strong>occurrence basis</strong>. What matters is when the incident occurred — not when the claim is made. If a client injures themselves at your premises in March, and they file a claim in December, the policy in place at the time of the incident in March responds.</p>
<p>When a PL claim is made, the process typically works as follows:</p>
<ol>
  <li>You notify your insurer as soon as you become aware of the incident or claim. Prompt notification is critical — late notification can jeopardise cover.</li>
  <li>Your insurer appoints a solicitor to assess and defend the claim.</li>
  <li>If liability is established or a settlement is agreed, your insurer pays compensation up to your policy limit, less your excess.</li>
  <li>Your insurer may also pay investigation costs and court costs in addition to, or within, your limit of indemnity — check your policy wording.</li>
</ol>
<p>Limits are usually dictated by the contract, lease or permit in front of you rather than chosen freely. Confirm whether the limit you are being asked for is any-one-occurrence or an annual aggregate, because the two are not interchangeable and a contract that specifies one will not be satisfied by the other.</p>

<h2>What Does Public Liability Insurance Cover?</h2>
<p>A standard public liability policy covers:</p>
<ul>
  <li><strong>Third-party bodily injury:</strong> A customer slips on a wet floor in your shop and fractures a wrist. PL responds to the losses ACC does not meet, such as loss of income and general damages.</li>
  <li><strong>Third-party property damage:</strong> A consultant spills coffee on a client's laptop at a meeting. PL covers the replacement cost.</li>
  <li><strong>Legal defence costs:</strong> Even if a claim is meritless, defending it takes time and money. PL funds your legal team.</li>
  <li><strong>Products liability (where included):</strong> If a product you manufacture, supply or install causes injury or damage, a products liability extension covers the resulting claims.</li>
  <li><strong>Advertising liability:</strong> Claims of defamation, copyright infringement or misleading representation in your marketing or advertising.</li>
  <li><strong>Contractual liability:</strong> Liability assumed under a written contract, up to the limits specified in the policy — for example, an indemnity clause in a lease agreement.</li>
  <li><strong>Off-site incidents:</strong> If your employee or contractor causes damage at a client's premises, PL covers you.</li>
</ul>
<p>Many PL policies can also be extended to include tenant's liability (damage to premises you lease), care, custody and control (damage to third-party property in your care), and cross-liability between entities covered under the same policy.</p>

<h2>What Is Not Covered by Public Liability?</h2>
<p>Key exclusions to be aware of in public liability policies include:</p>
<ul>
  <li><strong>Employee injuries:</strong> Covered by ACC and, for non-ACC claims, <a href="/coverage/employers-liability/">employers' liability insurance</a>.</li>
  <li><strong>Professional advice or services:</strong> Financial loss from bad advice is a PI claim, not a PL claim.</li>
  <li><strong>Your own property damage:</strong> PL only covers damage to third-party property — your own business property is covered under a separate material damage or business contents policy.</li>
  <li><strong>Motor vehicles:</strong> Vehicle accidents on public roads are covered by motor insurance, not PL (though vehicle use on private property may be included).</li>
  <li><strong>Intentional or criminal acts.</strong></li>
  <li><strong>Fines and penalties:</strong> A regulatory fine is not a third-party claim. Health and Safety at Work Act fines cannot be insured by any policy — see <a href="/coverage/statutory-liability/">statutory liability</a> for what can and cannot be covered.</li>
  <li><strong>Contractual penalties:</strong> Liquidated damages or penalty clauses in contracts are not covered under standard PL.</li>
  <li><strong>Pollution:</strong> Most policies exclude gradual pollution events unless a specific environmental liability extension is added.</li>
</ul>

<h2>Who Needs Public Liability Insurance in New Zealand?</h2>
<p>Virtually every New Zealand business that interacts with clients, customers, or the public benefits from PL insurance. High-priority categories include:</p>
<ul>
  <li><strong>Consultants and advisers:</strong> If you visit client sites, attend meetings, or host clients at your office, physical injury risk is real.</li>
  <li><strong>Contractors and tradespeople:</strong> Construction contracts almost universally require PL cover. Damage to a client's property during works — a cracked floor, a broken pipe — is a daily hazard.</li>
  <li><strong>Retailers and hospitality businesses:</strong> High foot traffic creates significant slip and fall exposure.</li>
  <li><strong>Event organisers:</strong> Venue hire agreements, local council event permits, and sponsorship contracts typically require PL cover as a condition of approval.</li>
  <li><strong><a href="/professions/healthcare/">Healthcare and wellness practitioners:</a></strong> Injury and property damage at your clinic are covered under PL — professional errors are covered under PI.</li>
  <li><strong>Fitness trainers and coaches:</strong> If a client injures themselves during a session at your facility, or you damage equipment at a third-party gym, PL responds.</li>
  <li><strong>IT consultants:</strong> On-site work at client premises creates property damage exposure. See our <a href="/professions/it-consultants/">IT consultants insurance guide</a> for more.</li>
</ul>

<h2>What Public Liability Costs in New Zealand</h2>
<p>We do not publish a monthly figure for public liability, and neither does anyone with data behind them. New Zealand commercial liability cover is broker-distributed and individually underwritten. The two main New Zealand liability underwriters publish no pricing at all, and there is no public New Zealand liability premium dataset to average. This page previously quoted a figure attributed to an online platform; it has been removed.</p>
<p>What an underwriter rates on:</p>
<ul>
  <li><strong>Industry and activity.</strong> A management consultant and a roofer present entirely different physical risks, and insurers classify and rate accordingly.</li>
  <li><strong>Turnover.</strong> The usual rating base — more activity means more third-party contact.</li>
  <li><strong>Limit of indemnity</strong>, and whether it is any-one-occurrence or aggregate.</li>
  <li><strong>Premises and public access.</strong> A retail floor with high foot traffic is a different risk from a home office.</li>
  <li><strong>Claims history.</strong></li>
  <li><strong>Headcount and subcontractors</strong>, including who is working on client sites and under whose direction.</li>
  <li><strong>Extensions required</strong> — products liability, tenants liability, care custody and control each change the price.</li>
  <li><strong>Excess.</strong></li>
</ul>
<p>The only way to get a real number is to have the risk underwritten. <a href="/contact/">Ask a licensed adviser</a> for a quote and for the rating basis in writing.</p>

<h2>How Much Public Liability Cover Do I Need?</h2>
<p>In practice, the limit is set by whoever is asking you for evidence of cover. Work through it in this order:</p>
<ul>
  <li><strong>Read the contract, lease or permit.</strong> If it specifies a limit, that is your answer, and it is the one you will be audited against.</li>
  <li><strong>Check the basis.</strong> Any-one-occurrence versus aggregate, and whether defence costs sit inside or outside the limit.</li>
  <li><strong>Then consider your own worst realistic loss.</strong> The largest single third-party injury or damage event your operations could credibly cause, not an average.</li>
  <li><strong>Check for multiple requirements.</strong> If you work for several principals, the highest limit any of them specifies is the practical floor.</li>
</ul>
<p>We have removed the limit bands this page used to carry. They were presented as market norms without any source behind them.</p>

<h2>The NZ Regulatory Context for Public Liability</h2>
<p>No single New Zealand statute mandates public liability insurance. Several regimes shape the exposure and the contractual demand for it:</p>
<ul>
  <li><strong>Health and Safety at Work Act 2015 (HSWA):</strong> WorkSafe NZ can investigate incidents on your premises, and regulatory action can run in parallel with a civil claim. Public liability responds to the civil claim. It does not respond to the regulatory outcome — and note that sections 29 and 30 of HSWA make an indemnity for an HSWA fine of no effect, and make entering into one an offence. No policy pays those fines.</li>
  <li><strong>Building Act 2004 and construction contracts:</strong> There is no "Building and Construction Act". Head contracts and subcontracts under standard New Zealand construction forms commonly specify public liability limits; the obligation is contractual, not statutory.</li>
  <li><strong>Local authority contracting:</strong> Council tenders, licences and event permits routinely specify a public liability limit as a condition of approval. The figure varies by council and by event — read the permit.</li>
  <li><strong>Consumer Guarantees Act 1993 and Fair Trading Act 1986:</strong> Suppliers and retailers carry obligations to consumers that create product liability exposure. Public liability with a products liability extension is the relevant cover.</li>
</ul>

<h2>Getting the Right Public Liability Cover in NZ</h2>
<p>When purchasing PL insurance, work with a licensed insurance adviser to ensure your policy:</p>
<ul>
  <li>Includes the specific extensions you need (products liability, tenants liability, care custody and control).</li>
  <li>Has an any-one-occurrence limit that matches what your contracts actually require.</li>
  <li>Covers all entities that need protection (parent company, subsidiaries, joint ventures).</li>
  <li>Does not exclude your specific industry activities or products.</li>
</ul>
<p>Many advisers can bundle PL with <a href="/coverage/professional-indemnity/">professional indemnity</a> and <a href="/coverage/employers-liability/">employers' liability</a> in a single business package, simplifying renewal. <a href="/compare/">Compare your options</a> or <a href="/contact/">request a quote</a> from a licensed adviser.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.legislation.govt.nz/act/public/2015/0070/latest/whole.html" rel="nofollow noopener" target="_blank">Health and Safety at Work Act 2015</a> — sections 29 and 30 (insurance against fines is of no effect, and entering into such an indemnity is an offence).</li>
<li><a href="https://www.legislation.govt.nz/act/public/2004/0072/latest/whole.html" rel="nofollow noopener" target="_blank">Building Act 2004</a>.</li>
<li><a href="https://www.legislation.govt.nz/act/public/1993/0091/latest/whole.html" rel="nofollow noopener" target="_blank">Consumer Guarantees Act 1993</a>.</li>
<li><a href="https://www.legislation.govt.nz/act/public/1986/0121/latest/whole.html" rel="nofollow noopener" target="_blank">Fair Trading Act 1986</a>.</li>
</ul>
<p>Last reviewed 7 September 2026. We are an information and referral service, not an insurer and not a law firm; the advisers we refer you to are licensed. General information only, not legal or financial advice. Policy wordings differ between underwriters — the schedule and wording govern, not this page. No New Zealand insurer publishes public liability rate tables; any premium figure you see online is an estimate, not data.</p>
</div>
    `.trim(),
  },
  {
    slug: 'statutory-liability',
    name: 'Statutory Liability Insurance',
    icon: '⚖️',
    shortDesc: 'Covers legal defence costs, representation at regulatory investigations and reparation orders. It does not pay Health and Safety at Work Act fines — no policy can.',
    description: 'Statutory liability insurance covers the cost of defending your business against allegations that it has breached New Zealand legislation — the Health and Safety at Work Act, Resource Management Act, Fair Trading Act, Employment Relations Act and others. It pays legal defence costs, the cost of being represented at a regulatory investigation, and reparation orders, which are compensatory rather than punitive. It does not pay fines under the Health and Safety at Work Act: sections 29 and 30 of that Act make an indemnity for an HSWA fine of no effect, and make entering into one an offence.',
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
      'Representation at WorkSafe and regulator interviews',
      'Reparation orders (compensatory, not fines)',
      'Health and Safety at Work Act defence costs',
      'Employment Relations Act proceedings',
      'Fair Trading Act investigations',
      'Resource Management Act proceedings',
      'Food Act and licensing investigations',
    ],
    avgCost: 'Individually underwritten',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    keyStats: [
      { label: 'How the premium is set', value: 'Individual underwriting' },
      { label: 'HSWA fines', value: 'Cannot be insured (ss 29 and 30)' },
      { label: 'What the policy pays', value: 'Defence costs and reparation' },
    ],
    relatedCoverage: ['employers-liability', 'management-liability', 'directors-officers'],
    relatedProfessions: ['architects-engineers', 'healthcare', 'consultants'],
    faqs: [
      {
        q: 'Can a statutory liability policy pay my Health and Safety at Work Act fine?',
        a: 'No. Section 29 of the Health and Safety at Work Act 2015 provides that an insurance policy or other arrangement is of no effect to the extent that it purports to indemnify a person for their liability to pay a fine or infringement fee under that Act. Section 30 goes further and makes it an offence to enter into, provide, or take the benefit of such an arrangement. This page previously said that fines were covered "where legally permissible" — that was wrong, and it has been corrected. What a statutory liability policy genuinely does is fund your legal defence, pay for representation at the investigation stage, and cover reparation ordered by the court, which is compensation to a victim rather than a penalty. Whether a penalty under any other statute can be insured depends on that statute and on the policy wording — do not assume it can.',
      },
      {
        q: 'Does statutory liability cover reparation orders?',
        a: 'Usually yes, and this is one of the most valuable parts of the cover. Reparation is compensation ordered in favour of the person harmed, not a punishment imposed on the defendant, so it does not fall within the insurance prohibition that applies to Health and Safety at Work Act fines. Reparation orders following a serious workplace incident can be substantial, and they are payable in addition to any fine. Confirm the position in your own wording and check the sub-limit that applies.',
      },
      {
        q: 'Does statutory liability cover Employment Court proceedings?',
        a: 'Employment Relations Act breaches — including matters before the Employment Relations Authority and the Employment Court — are typically within the scope of statutory liability wordings in New Zealand, principally for defence costs and representation. Compensation payable to an employee under an ERA determination more often falls under an <a href="/coverage/employers-liability/">employers\' liability policy</a>, so the two are usually arranged together. Check which policy in your programme answers which part of an employment claim before you need to rely on it.',
      },
      {
        q: 'Is statutory liability the same as regulatory liability?',
        a: "In the New Zealand market, 'statutory liability' and 'regulatory liability' are often used interchangeably. Both refer to cover for defence costs and representation arising from regulatory investigations and prosecutions under New Zealand statutes. Some insurers use 'regulatory liability' to describe a broader cover that extends to overseas regulatory actions — relevant for businesses operating in Australia or other jurisdictions. Neither term changes the position on Health and Safety at Work Act fines, which cannot be insured under any label.",
      },
      {
        q: 'Do I need statutory liability if I already have management liability insurance?',
        a: 'Statutory liability is usually included as a section within a <a href="/coverage/management-liability/">management liability</a> policy, so if you have management liability cover you probably already have it. Check the schedule for two things: which statutes are listed, and what sub-limit applies to the statutory liability section within the bundle. That sub-limit is often well below the overall policy aggregate. If it is not enough for the defence cost of a serious investigation, a standalone statutory liability policy or a higher sub-limit can be arranged.',
      },
    ],
    longFormContent: `
<div class="keyfact">
<p><strong>The most important correction on this site.</strong> This page previously said that statutory liability insurance pays court-ordered fines and pecuniary penalties "where legally permissible". For the Health and Safety at Work Act 2015, that is wrong. Section 29 makes an insurance policy of no effect to the extent it purports to indemnify a person for an HSWA fine or infringement fee, and section 30 makes it an offence to enter into, provide or take the benefit of such an arrangement. No New Zealand policy pays an HSWA fine. What statutory liability genuinely covers is defence costs, representation at investigations, and reparation orders — which are compensatory, not punitive. Every premium figure has also been removed from this page.</p>
</div>

<h2>What Is Statutory Liability Insurance?</h2>
<p>Statutory liability insurance covers the cost of defending your business when a regulator alleges that it has breached New Zealand legislation. Employers, directors and business owners carry obligations under dozens of statutes — the Health and Safety at Work Act 2015, the Employment Relations Act 2000, the Fair Trading Act 1986, the Resource Management Act 1991, the Food Act 2014, the Building Act 2004 and the Privacy Act 2020 among them. An investigation can run for a year or more and cost a great deal to respond to, whether or not any breach is ultimately established.</p>
<p>The value of the cover sits in the defence, not in the penalty. That is worth being blunt about, because the opposite has been widely implied — including previously on this page.</p>

<h2>Fines: What the Law Actually Says</h2>
<p>Under the Health and Safety at Work Act 2015:</p>
<ul>
  <li><strong>Section 29</strong> provides that an insurance policy or other arrangement is of no effect to the extent that it purports to indemnify a person for liability to pay a fine or infringement fee under the Act. The clause does not fail quietly at claim time — it has no legal effect from the outset.</li>
  <li><strong>Section 30</strong> makes it an offence to enter into, provide, or take the benefit of a contract of insurance or other arrangement that indemnifies a person for such a fine.</li>
</ul>
<p>So if a website tells you a statutory liability policy will pay your WorkSafe fine, it is describing something the legislature has specifically prohibited. The correct question to ask an insurer is not whether fines are covered. It is what the policy pays for the parts of a prosecution that <em>can</em> be insured.</p>
<p>For statutes other than HSWA, whether a fine or pecuniary penalty can be insured depends on the statute in question and on the policy wording, and in many cases it cannot be. Treat any general assurance that "penalties are covered where insurable" as something to test against the schedule rather than to rely on.</p>

<h2>What Statutory Liability Actually Covers</h2>
<ul>
  <li><strong>Legal defence costs:</strong> Solicitor, barrister and specialist regulatory counsel fees. This is the core of the cover and the most consistently provided element across wordings.</li>
  <li><strong>Representation at the investigation stage:</strong> Responding to a regulatory information request, producing documents, and being represented at interviews — all of which happen well before any charge is laid, and all of which cost money.</li>
  <li><strong>Reparation orders:</strong> Reparation is compensation ordered in favour of the person harmed. It is not a fine, and it is commonly covered, subject to the wording and to any sub-limit. After a serious workplace incident, reparation is frequently the largest single sum the defendant is ordered to pay to an individual.</li>
  <li><strong>Defence of Employment Relations Act matters:</strong> Representation in proceedings before the Employment Relations Authority and the Employment Court.</li>
  <li><strong>Defence of Fair Trading Act and Consumer Guarantees Act investigations:</strong> Commerce Commission enquiries into trading conduct, pricing or product representations.</li>
  <li><strong>Defence of Resource Management Act proceedings:</strong> Regional council and Environment Court matters relating to consent breaches or discharges.</li>
  <li><strong>Defence of Food Act and licensing matters:</strong> Ministry for Primary Industries or local authority investigations.</li>
</ul>
<p>The list of statutes covered varies between insurers. Ask for the schedule and read the list, rather than relying on a general phrase such as "breaches of New Zealand legislation".</p>

<h2>What Is Not Covered by Statutory Liability?</h2>
<ul>
  <li><strong>Fines and infringement fees under the Health and Safety at Work Act.</strong> Prohibited by sections 29 and 30. This is not a policy exclusion that could be negotiated away — it is a statutory bar.</li>
  <li><strong>Deliberate breaches:</strong> If you knowingly contravened a statute, the policy will not respond to the consequences.</li>
  <li><strong>Criminal fines generally:</strong> Most wordings exclude fines imposed under criminal law provisions.</li>
  <li><strong>Known breaches at inception:</strong> An investigation or breach you were aware of before the policy started is excluded.</li>
  <li><strong>Tax obligations:</strong> IRD penalties for late filing, GST errors or tax positions are generally outside statutory liability.</li>
  <li><strong>Employee compensation:</strong> Compensation ordered in favour of an employee by the ERA or Employment Court usually belongs to an <a href="/coverage/employers-liability/">employers' liability policy</a>, not this one.</li>
  <li><strong>Environmental remediation:</strong> The cost of cleaning up contamination typically requires a separate environmental liability policy.</li>
</ul>

<h2>Who Needs Statutory Liability Insurance in New Zealand?</h2>
<p>Any business that employs people, operates premises, sells products or services, or holds resource consents carries regulatory exposure. The sectors where investigations are most frequent and most expensive to answer include:</p>
<ul>
  <li><strong>Construction and engineering:</strong> WorkSafe NZ actively investigates construction sites. <a href="/professions/architects-engineers/">Architects and engineers</a> face both HSWA exposure and Building Act obligations.</li>
  <li><strong>Healthcare and aged care:</strong> Oversight by the Health and Disability Commissioner alongside HSWA and Privacy Act obligations.</li>
  <li><strong>Hospitality and food businesses:</strong> Food Act compliance, licensing conditions and Fair Trading Act obligations create several independent points of exposure.</li>
  <li><strong>Employers with large or complex workforces:</strong> Rostering, holiday pay calculation and minimum wage compliance are recurring investigation triggers.</li>
  <li><strong>Importers and retailers:</strong> Commerce Commission enforcement of the Fair Trading Act around pricing and product claims.</li>
  <li><strong>Farming, quarrying and land development:</strong> Resource Management Act exposure from consent conditions and discharge events.</li>
</ul>

<h2>What Statutory Liability Costs in New Zealand</h2>
<p>This page previously set out monthly premium bands by business size. They had no source and have been removed. New Zealand liability cover is broker-distributed and individually underwritten, no insurer publishes rate tables, and there is no public New Zealand premium dataset for this class.</p>
<p>What an underwriter rates on:</p>
<ul>
  <li><strong>Industry and activity</strong>, and the regulators that consequently take an interest in you.</li>
  <li><strong>Headcount and turnover.</strong></li>
  <li><strong>The statutes you want scheduled</strong>, and the sub-limit for each.</li>
  <li><strong>Your regulatory history</strong> — prior investigations, notices, prosecutions or enforceable undertakings.</li>
  <li><strong>Health and safety systems and governance</strong>, since a demonstrable system is both a defence and a rating factor.</li>
  <li><strong>Excess</strong>, which in this class is usually modest because the trigger is an investigation rather than a judgment.</li>
</ul>
<p><a href="/contact/">Ask a licensed adviser</a> for a quote, and ask specifically what the wording says about reparation and about defence costs at the investigation stage.</p>

<h2>How Much Statutory Liability Cover Do I Need?</h2>
<p>Because the fine is not insurable, sizing the limit against the maximum penalty for your industry is the wrong exercise. Size it against what you would have to spend, and what you could be ordered to pay a victim:</p>
<ul>
  <li><strong>Defence cost of a long investigation.</strong> A serious matter can involve technical experts, multiple counsel and a hearing, over a period measured in years rather than months.</li>
  <li><strong>Reparation exposure.</strong> Where a person has been seriously harmed, reparation is the part of the sentence a policy can respond to.</li>
  <li><strong>The sub-limit inside a bundle.</strong> If statutory liability sits within a <a href="/coverage/management-liability/">management liability</a> policy, the number that matters is the section sub-limit, not the policy aggregate.</li>
  <li><strong>Whether defence costs erode the limit.</strong></li>
</ul>
<p>We do not publish limit bands here. The bands this page used to carry were presented as guidance without any source behind them.</p>

<h2>The NZ Regulatory Context</h2>
<p>No New Zealand statute requires you to buy statutory liability insurance. The regulatory framework creates the exposure that makes defence cover worth having:</p>
<ul>
  <li><strong>Health and Safety at Work Act 2015:</strong> Duties on PCBUs and on officers, enforced by WorkSafe NZ, with an offence structure graduated by culpability. Fines under the Act cannot be insured; defence costs and reparation can.</li>
  <li><strong>Employment Relations Act 2000:</strong> Establishes the Employment Relations Authority and Employment Court jurisdiction and the good faith obligations that most employment investigations turn on.</li>
  <li><strong>Fair Trading Act 1986:</strong> Commerce Commission enforcement of misleading conduct and pricing representations.</li>
  <li><strong>Resource Management Act 1991:</strong> Council and Environment Court enforcement of consent conditions and discharges.</li>
  <li><strong>Privacy Act 2020:</strong> Office of the Privacy Commissioner investigations, compliance notices and notifiable privacy breach obligations.</li>
</ul>

<h2>Getting the Right Statutory Liability Cover in NZ</h2>
<p>When arranging cover, work with a licensed insurance adviser to:</p>
<ul>
  <li>Confirm which statutes are named in the schedule — not a generic "breaches of New Zealand law" phrase.</li>
  <li>Confirm defence costs are available from the investigation stage, before any charge is laid.</li>
  <li>Confirm how reparation is treated, and at what sub-limit.</li>
  <li>Confirm in writing that the wording does not purport to indemnify HSWA fines, since such a clause is of no effect and offering or accepting one is an offence.</li>
  <li>Decide whether a standalone policy or the statutory liability section inside a <a href="/coverage/management-liability/">management liability bundle</a> gives you an adequate sub-limit.</li>
</ul>
<p><a href="/compare/">Compare statutory liability options</a> or <a href="/contact/">speak to a licensed adviser</a> about the right structure for your business.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.legislation.govt.nz/act/public/2015/0070/latest/whole.html" rel="nofollow noopener" target="_blank">Health and Safety at Work Act 2015</a> — section 29 (insurance against fines of no effect) and section 30 (offence to enter into, provide or take the benefit of such an indemnity).</li>
<li><a href="https://www.legislation.govt.nz/act/public/2002/0009/latest/whole.html" rel="nofollow noopener" target="_blank">Sentencing Act 2002</a> — reparation.</li>
<li><a href="https://www.legislation.govt.nz/act/public/2000/0024/latest/whole.html" rel="nofollow noopener" target="_blank">Employment Relations Act 2000</a>.</li>
<li><a href="https://www.legislation.govt.nz/act/public/1986/0121/latest/whole.html" rel="nofollow noopener" target="_blank">Fair Trading Act 1986</a>.</li>
<li><a href="https://www.legislation.govt.nz/act/public/1991/0069/latest/whole.html" rel="nofollow noopener" target="_blank">Resource Management Act 1991</a>.</li>
<li><a href="https://www.legislation.govt.nz/act/public/2020/0031/latest/whole.html" rel="nofollow noopener" target="_blank">Privacy Act 2020</a>.</li>
</ul>
<p>Last reviewed 7 September 2026. We are an information and referral service, not an insurer and not a law firm; the advisers we refer you to are licensed. General information only, not legal or financial advice. Policy wordings differ between underwriters — the schedule and wording govern, not this page. If any adviser tells you a New Zealand policy will pay a Health and Safety at Work Act fine, ask them to show you how that sits with sections 29 and 30.</p>
</div>
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
    avgCost: 'Individually underwritten',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&auto=format&fit=crop&q=80',
    author: 'sarah-thompson',
    keyStats: [
      { label: 'How the premium is set', value: 'Individual underwriting' },
      { label: 'Policy type', value: 'Claims-made' },
      { label: 'Main claim forum', value: 'Employment Relations Authority' },
    ],
    relatedCoverage: ['statutory-liability', 'management-liability', 'directors-officers'],
    relatedProfessions: ['consultants', 'healthcare', 'financial-advisers'],
    faqs: [
      {
        q: "Does ACC cover all employee injuries in New Zealand?",
        a: "ACC covers the medical treatment and rehabilitation costs of physical personal injury by accident. However, ACC does not cover: workplace stress and psychological injury claims unless they result from a physical injury, unfair dismissal, harassment, discrimination, wrongful termination, or breach of employment agreement. These non-ACC employment claims can result in significant ERA awards and legal costs — exactly what employers' liability insurance is designed to cover.",
      },
      {
        q: "What is the Employment Relations Authority and what can it award?",
        a: "The Employment Relations Authority (ERA) is a New Zealand investigative body that resolves employment relationship problems. It can order compensation for humiliation, loss of dignity and injury to feelings, reimbursement of lost wages, reinstatement, and penalties for breaches of employment agreements. We do not publish average award or legal cost figures — the bands this page previously carried had no source behind them, and awards vary widely with the conduct and the length of service involved. Employers' liability insurance is designed to meet both the defence costs and the compensation ordered, up to the policy limit.",
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
        a: "Redundancy and restructuring events are high-risk periods for employment claims. The Employment Relations Act imposes procedural requirements for a genuine redundancy — failure to consult properly, consider alternatives or apply fair selection criteria frequently results in ERA claims for unjustified dismissal. Employers' liability or employment practices liability insurance covers legal defence costs and compensation awards arising from these claims. If a restructuring is planned, notify your insurer in advance — some policies treat it as a material change in risk.",
      },
    ],
    longFormContent: `
<div class="keyfact">
<p><strong>What changed on this page.</strong> Every premium figure has been removed, along with the average ERA award and average legal cost bands. None of those had a New Zealand source. Employment liability cover is broker-distributed and individually underwritten, and no insurer publishes rate tables.</p>
</div>

<h2>What Is Employers' Liability Insurance?</h2>
<p>Employers' liability (EL) insurance — sometimes called employment practices liability (EPL) — covers your business against claims made by employees or former employees for workplace-related injury, illness, discrimination, harassment, unfair dismissal, or breach of employment obligations that fall outside the scope of ACC.</p>
<p>New Zealand's ACC scheme is a no-fault accident compensation system that covers the medical costs of physical personal injury by accident. It is a significant protection for employers and employees alike, but it has important gaps. ACC does not cover psychological injury arising from workplace stress, bullying or harassment where there is no physical injury; unfair dismissal and wrongful termination; discrimination on prohibited grounds; or breach of employment agreement.</p>
<p>For any business with employees, employers' liability insurance sits alongside <a href="/coverage/statutory-liability/">statutory liability</a> and <a href="/coverage/public-liability/">public liability</a> in the business insurance programme.</p>

<h2>How Does Employers' Liability Work in New Zealand?</h2>
<p>When a current or former employee raises a personal grievance, lodges a Human Rights Commission complaint, or commences proceedings in the Employment Court, your employers' liability insurer responds in two ways:</p>
<ol>
  <li><strong>Defence costs:</strong> The insurer funds your legal representation from the time the claim is made. Employment proceedings commonly involve mediation followed by an ERA investigation meeting, and can run for many months.</li>
  <li><strong>Compensation awards:</strong> If the ERA or Employment Court orders compensation — for lost wages, humiliation, injury to feelings, or in lieu of reinstatement — the insurer pays the award up to the policy limit, less your excess.</li>
</ol>
<p>Most employers' liability policies operate on a <strong>claims-made basis</strong>. The policy in force when the claim is made — not when the employment relationship ended — is the one that must respond. That matters for claims arising from a redundancy or dismissal that surface months later.</p>
<p>Excesses in this class are usually modest, reflecting that even a minor dispute generates legal cost from the outset. Confirm whether your excess applies to defence costs as well as to any award.</p>

<h2>What Does Employers' Liability Cover?</h2>
<p>A comprehensive employers' liability or employment practices liability policy covers:</p>
<ul>
  <li><strong>Unjustified dismissal claims:</strong> Claims arising from performance management, restructuring, redundancy or conduct dismissals where proper process was not followed are among the most common triggers.</li>
  <li><strong>Workplace discrimination:</strong> Claims under the Human Rights Act 1993 for discrimination on grounds including race, sex, age, disability, religious belief, marital status, political opinion and sexual orientation.</li>
  <li><strong>Harassment and bullying:</strong> Workplace bullying and sexual harassment claims, whether in physical workplaces or remote working environments.</li>
  <li><strong>Psychological injury:</strong> Stress, anxiety, depression and other psychological injuries arising from workplace events that are not covered by ACC.</li>
  <li><strong>Breach of employment agreement:</strong> Claims for unpaid wages, holiday pay, sick leave, or failure to follow agreement terms.</li>
  <li><strong>Wrongful termination:</strong> Claims that a dismissal was procedurally defective or substantively unjustified under the Employment Relations Act.</li>
  <li><strong>Legal defence costs:</strong> All legal costs from the point of notification, including barrister fees, mediation costs and representation at ERA investigation meetings.</li>
  <li><strong>Remediation and reinstatement:</strong> Where an ERA determination orders reinstatement and the employer declines, compensation in lieu is covered.</li>
</ul>

<h2>What Is Not Covered?</h2>
<p>Standard exclusions in employers' liability policies include:</p>
<ul>
  <li><strong>Physical injury covered by ACC:</strong> Workplace accidents causing physical injury are an ACC matter.</li>
  <li><strong>Deliberate wrongdoing:</strong> If discrimination or harassment was deliberately perpetrated by a director or senior officer who knew it was wrongful, the policy will not indemnify the perpetrator, though it may still fund defence until the conduct is proven.</li>
  <li><strong>Known circumstances:</strong> Pre-existing claims or grievances notified before inception are excluded.</li>
  <li><strong>Contractual wage obligations:</strong> Unpaid salary or wages due under a contract are a commercial debt, not an insured claim, unless they form part of a broader employment relationship claim.</li>
  <li><strong>Redundancy payments:</strong> Contractual redundancy pay is an employment obligation, not a claim under this policy — though legal costs in a dispute about the adequacy of the process are covered.</li>
  <li><strong>Fines and penalties:</strong> Penalties imposed by the ERA are a different matter from compensation, and Health and Safety at Work Act fines cannot be insured at all. See <a href="/coverage/statutory-liability/">statutory liability</a>.</li>
</ul>

<h2>Who Needs Employers' Liability Insurance in New Zealand?</h2>
<p>Any business with employees carries this exposure. Key risk profiles include:</p>
<ul>
  <li><strong>All employers:</strong> The Employment Relations Act applies regardless of size. A two-person company sits in the same ERA jurisdiction as a large corporate.</li>
  <li><strong>Businesses undergoing restructuring or redundancy:</strong> Process failures during redundancy are a recurring source of personal grievances.</li>
  <li><strong>HR-intensive businesses:</strong> Retail, hospitality and healthcare businesses with large casual or shift workforces face complex rostering and holiday pay calculations.</li>
  <li><strong><a href="/professions/healthcare/">Healthcare and aged care employers:</a></strong> High-stress environments and workforce shortages create psychological injury and workplace conduct risk.</li>
  <li><strong>Professional services firms:</strong> Partnership transitions and performance management of senior professionals can generate substantial claims.</li>
  <li><strong>Construction businesses:</strong> Site-based workforces and subcontractor relationships intersect with health and safety obligations in ways that create layered risk.</li>
</ul>

<h2>What Employers' Liability Costs in New Zealand</h2>
<p>This page previously set out monthly bands by headcount, and quoted average ERA awards and average legal costs. None of it had a source, and all of it has been removed. New Zealand employment liability cover is broker-distributed and individually underwritten, and no insurer publishes rate tables.</p>
<p>What an underwriter rates on:</p>
<ul>
  <li><strong>Headcount and payroll</strong>, which is the usual rating base for this class.</li>
  <li><strong>Industry</strong>, and the workforce patterns that go with it — shift work, casual employment, high turnover.</li>
  <li><strong>Employment claims history</strong>, including grievances settled at mediation.</li>
  <li><strong>Planned restructuring or redundancy</strong>, which is a material change in risk and should be disclosed.</li>
  <li><strong>HR process maturity</strong> — current written employment agreements, documented performance management, and access to employment advice.</li>
  <li><strong>Limit, sub-limits and excess</strong>, including whether defence costs erode the limit.</li>
</ul>
<p><a href="/contact/">Ask a licensed adviser</a> for a quote, and for the rating basis in writing.</p>

<h2>How Much Cover Do I Need?</h2>
<p>Rather than a band by business size, work through what a serious matter would actually cost you:</p>
<ul>
  <li><strong>The cost of defending one contested matter to a determination</strong>, including counsel and mediation.</li>
  <li><strong>The compensation exposure</strong>, which turns on the conduct alleged, the employee's length of service and remuneration, and whether reinstatement is sought.</li>
  <li><strong>The possibility of more than one claim</strong> arising from the same restructuring or the same manager.</li>
  <li><strong>Whether the limit is per claim or in the aggregate</strong>, and whether defence costs sit inside it.</li>
</ul>

<h2>The NZ Regulatory Context</h2>
<ul>
  <li><strong>Employment Relations Act 2000:</strong> Establishes the ERA and Employment Court jurisdiction, the good faith obligations, and the procedural requirements for dismissal. This is the most frequent trigger for claims under this cover.</li>
  <li><strong>Human Rights Act 1993:</strong> The Human Rights Commission investigates and conciliates discrimination complaints; unresolved complaints proceed to the Human Rights Review Tribunal, which can award compensation.</li>
  <li><strong>Health and Safety at Work Act 2015:</strong> Psychosocial hazards are within the duty to manage risks to health. A failure can attract both a WorkSafe prosecution — where defence costs are insurable but fines are not — and an employee claim.</li>
  <li><strong>Privacy Act 2020:</strong> Mishandling employee personal information, including during an investigation, can generate a Privacy Commissioner complaint alongside an employment claim.</li>
</ul>

<h2>Getting the Right Employers' Liability Cover in NZ</h2>
<p>When arranging cover, work with a licensed adviser to ensure:</p>
<ul>
  <li>The policy covers claims by both current and former employees.</li>
  <li>Psychological injury claims are explicitly included, not just discrimination and dismissal claims.</li>
  <li>The insurer can appoint solicitors who practise New Zealand employment law.</li>
  <li>The policy responds from the point a personal grievance is raised, not only once formal ERA proceedings begin.</li>
</ul>
<p>Many businesses combine employers' liability with <a href="/coverage/statutory-liability/">statutory liability</a>, <a href="/coverage/directors-officers/">D&amp;O insurance</a> and public liability in a management liability bundle. <a href="/compare/">Compare your options</a> or <a href="/contact/">get a quote</a> from a licensed adviser.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.legislation.govt.nz/act/public/2000/0024/latest/whole.html" rel="nofollow noopener" target="_blank">Employment Relations Act 2000</a>.</li>
<li><a href="https://www.legislation.govt.nz/act/public/1993/0082/latest/whole.html" rel="nofollow noopener" target="_blank">Human Rights Act 1993</a>.</li>
<li><a href="https://www.legislation.govt.nz/act/public/2015/0070/latest/whole.html" rel="nofollow noopener" target="_blank">Health and Safety at Work Act 2015</a> — sections 29 and 30 on the insurance of fines.</li>
<li><a href="https://www.legislation.govt.nz/act/public/2020/0031/latest/whole.html" rel="nofollow noopener" target="_blank">Privacy Act 2020</a>.</li>
</ul>
<p>Last reviewed 7 September 2026. We are an information and referral service, not an insurer and not a law firm; the advisers we refer you to are licensed. General information only, not legal or financial advice. Policy wordings differ between underwriters — the schedule and wording govern, not this page.</p>
</div>
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
      'Defence of regulatory investigations and prosecutions',
      'Wrongful acts in management roles',
      'Employment practices claims against directors',
      'Insolvency-related claims from creditors',
      'Breach of director duties under the Companies Act',
      'Legal defence costs and representation',
      'Court-awarded damages and settlements',
    ],
    avgCost: 'Individually underwritten',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    keyStats: [
      { label: 'How the premium is set', value: 'Individual underwriting' },
      { label: 'Director liability under Companies Act 1993', value: 'Not capped by statute' },
      { label: 'HSWA fines against officers', value: 'Cannot be insured (ss 29 and 30)' },
    ],
    relatedCoverage: ['management-liability', 'statutory-liability', 'professional-indemnity'],
    relatedProfessions: ['financial-advisers', 'accountants', 'consultants'],
    faqs: [
      {
        q: "Can a company director be personally sued in New Zealand?",
        a: "Yes. New Zealand's Companies Act 1993 creates significant personal liability for directors. Directors can be personally liable for reckless trading, incurring obligations the company cannot perform, breach of the duty of care, and breach of the duty to act in good faith and in the best interests of the company. The FMA can pursue individual directors for financial markets law breaches. WorkSafe NZ can prosecute officers personally under the Health and Safety at Work Act. D&O insurance protects a director's personal assets in these situations — though note that an HSWA fine imposed on an officer personally cannot be insured by any policy.",
      },
      {
        q: "Does D&O insurance cover me personally, or just the company?",
        a: "D&O insurance is fundamentally personal cover for the individual director or officer. Standard NZ D&O policies have three coverage sections: Side A (covers the individual directly when the company cannot or will not indemnify them), Side B (reimburses the company when it has indemnified a director), and Side C (covers the company entity itself for certain securities claims). The most important section for individual directors is Side A — it protects your personal assets even if the company is insolvent or refuses to pay.",
      },
      {
        q: "Are charity trustees and incorporated society board members covered?",
        a: "Yes. D&O insurance is available for trustees of charitable trusts and board members of incorporated societies in New Zealand. The Charities Act 2005 and the Incorporated Societies Act 2022 impose governance obligations that, if breached, can result in personal liability. Volunteer status does not remove personal liability under New Zealand law. Some organisations now ask board members to confirm D&O cover is in place as a condition of appointment.",
      },
      {
        q: "What is a 'wrongful act' under a D&O policy?",
        a: "In NZ D&O policy wordings, a 'wrongful act' typically means any actual or alleged act, error, omission, neglect, breach of duty, breach of trust, misleading statement, or breach of warranty of authority committed by a director or officer in their management capacity. This is intentionally broad — it does not require proof of wrongdoing, only that a claim is made alleging a wrongful act. The insurer will defend you whether or not the allegation is ultimately proven.",
      },
      {
        q: "Does D&O cover insolvency-related claims from liquidators?",
        a: "This depends on the specific policy wording and the nature of the claim. If a liquidator sues directors for reckless trading under section 135 of the Companies Act, D&O policies will typically defend the claim and pay compensation if liability is established — unless the deliberate dishonesty exclusion applies. Some NZ D&O policies include specific insolvency extensions. If your company is in financial difficulty, notify your D&O insurer immediately — late notification can affect coverage.",
      },
    ],
    longFormContent: `
<div class="keyfact">
<p><strong>What changed on this page.</strong> Every premium figure has been removed — no New Zealand insurer publishes D&amp;O rate tables. We have also corrected two things about fines. Health and Safety at Work Act fines imposed on an officer personally cannot be insured: sections 29 and 30 of that Act make such an indemnity of no effect and make entering into one an offence. And this page previously pointed readers to statutory liability insurance as "the appropriate vehicle for regulatory fines". Statutory liability covers defence costs, representation and reparation. It does not pay HSWA fines either.</p>
</div>

<h2>What Is Directors' & Officers' Liability Insurance?</h2>
<p>Directors' and officers' (D&O) liability insurance protects the personal assets of directors, officers, and senior managers who face claims alleging wrongful acts in the management of their organisation. In New Zealand, where company directors carry significant personal liability under the Companies Act 1993, the Financial Markets Conduct Act 2013, and the Health and Safety at Work Act 2015, D&O insurance is relevant to anyone in a governance role.</p>
<p>Unlike professional indemnity insurance, which protects against claims arising from professional services to clients, D&O covers the decisions and actions taken in running and governing a company. Claims can come from shareholders, creditors, employees, regulators, competitors, customers and joint venture partners. Non-executive directors with no day-to-day management involvement can be sued personally for board-level decisions.</p>

<h2>How Does D&O Insurance Work in New Zealand?</h2>
<p>D&O policies typically have three coverage sections, referred to as sides:</p>
<ul>
  <li><strong>Side A — Individual director protection:</strong> Pays directly to the director when the company cannot or will not indemnify them. This is the critical section for personal asset protection. It responds when the company is insolvent, when the company refuses to indemnify because of a governance conflict, or when indemnification would be unlawful.</li>
  <li><strong>Side B — Company reimbursement:</strong> Reimburses the company when it has paid defence costs or damages on behalf of a director.</li>
  <li><strong>Side C — Entity coverage:</strong> Covers the company itself for certain securities claims. More relevant for listed companies and those with sophisticated investors.</li>
</ul>
<p>D&O policies operate on a <strong>claims-made basis</strong>. The policy in force when the claim is first made must respond, so continuity matters: a gap leaves directors personally exposed for that period even years after they leave the board. Most policies include extended reporting period provisions for claims notified shortly after expiry.</p>

<h2>What Does D&O Insurance Cover?</h2>
<ul>
  <li><strong>Breach of director duties under the Companies Act 1993:</strong> Sections 131 to 138 impose duties of good faith, care and diligence. Breach — including reckless trading under section 135 and incurring obligations the company cannot perform under section 136 — can result in liquidator claims and personal liability.</li>
  <li><strong>Shareholder and investor claims:</strong> Shareholders alleging that directors misled them, breached duties owed, or caused the company to act oppressively can sue directors personally.</li>
  <li><strong>Defence of regulatory investigations:</strong> FMA investigations under the Financial Markets Conduct Act carry significant defence costs. The policy funds the defence; whether any resulting pecuniary penalty can be met by insurance depends on the statute and the wording, and should not be assumed.</li>
  <li><strong>Defence of WorkSafe prosecutions:</strong> Officers carry a personal due diligence duty under the Health and Safety at Work Act, and can be prosecuted personally. A D&O or statutory liability policy can fund the defence and, where ordered, reparation. It cannot pay the fine — sections 29 and 30 of HSWA prohibit that.</li>
  <li><strong>Creditor claims in insolvency:</strong> Through the liquidator, creditors can pursue directors personally. D&O defends these claims and pays compensation where liability is established, absent the fraud exclusion.</li>
  <li><strong>Employment claims against directors:</strong> Harassment, discrimination or conduct claims naming a director personally, particularly as a decision-maker in a dismissal or restructuring.</li>
  <li><strong>Cyber governance claims (where extended):</strong> Some policies include or offer an extension for governance failures relating to cybersecurity — for example a shareholder claim that the board failed to oversee data security adequately.</li>
</ul>

<h2>What Is Not Covered?</h2>
<ul>
  <li><strong>Deliberate fraud or dishonesty:</strong> If a director is proven to have acted fraudulently or dishonestly, the policy will not indemnify them. Most NZ wordings still fund the defence until the conduct is proven, which allows the insurer to separate the positions of innocent and dishonest directors in the same matter.</li>
  <li><strong>Personal profit:</strong> Gains illegally obtained by a director are excluded.</li>
  <li><strong>Bodily injury and property damage:</strong> Covered under <a href="/coverage/public-liability/">public liability</a>.</li>
  <li><strong>Known claims at inception.</strong></li>
  <li><strong>Fines and penalties:</strong> Criminal fines are excluded. Health and Safety at Work Act fines cannot be insured at all, whatever the policy is called. <a href="/coverage/statutory-liability/">Statutory liability insurance</a> answers the defence cost and reparation side of a regulatory prosecution, not the fine.</li>
</ul>

<h2>Who Needs D&O Insurance in New Zealand?</h2>
<ul>
  <li><strong>Company directors and board members:</strong> Any director of a New Zealand company faces personal liability under the Companies Act 1993, including the sole director of a family company.</li>
  <li><strong>Senior managers and officers:</strong> Employment decisions, capital allocation and compliance failures can all generate claims naming officers as well as directors.</li>
  <li><strong>Non-executive and independent directors:</strong> An advisory posture does not limit statutory duties. They are equally subject to the Companies Act and can be sued for decisions they participated in.</li>
  <li><strong>Startup founders:</strong> Accepting investor capital brings shareholder accountability, and investor disputes are a common trigger.</li>
  <li><strong>Trustees and charity board members:</strong> Governance obligations under the Charities Act 2005 and the Incorporated Societies Act 2022 apply to volunteers as well as to paid officers.</li>
  <li><strong><a href="/professions/financial-advisers/">Financial advisers</a> in governance roles:</strong> Licensed financial advice providers have obligations under their licence conditions, and directors making compliance decisions carry personal exposure alongside the entity's.</li>
</ul>

<h2>What D&O Insurance Costs in New Zealand</h2>
<p>This page previously gave a monthly starting price and annual bands by company size. They had no source and have been removed. D&O in New Zealand is broker-distributed and individually underwritten, and no insurer publishes rate tables.</p>
<p>What an underwriter rates on:</p>
<ul>
  <li><strong>Turnover, balance sheet and financial health.</strong> Companies with stressed balance sheets present higher insolvency claim risk, and this is the single factor most likely to change the price.</li>
  <li><strong>Industry and regulatory footprint.</strong></li>
  <li><strong>Board composition and the number of insured persons.</strong></li>
  <li><strong>Listed versus private status</strong>, and whether Side C entity cover is required.</li>
  <li><strong>Ownership and investor structure</strong>, including external capital and shareholder agreements.</li>
  <li><strong>Claims history and known circumstances.</strong></li>
  <li><strong>Limit, retention and the split between Sides A, B and C.</strong></li>
</ul>
<p><a href="/contact/">Ask a licensed adviser</a> for a quote, and for the rating basis in writing.</p>

<h2>How Much D&O Cover Do I Need?</h2>
<p>Rather than a band by company size, work through the exposure directly:</p>
<ul>
  <li><strong>The cost of defending the most serious credible claim</strong> — a liquidator's proceeding or a regulatory investigation, both of which are long and expert-heavy.</li>
  <li><strong>The number of individuals who would share the limit</strong> in a claim that names the whole board.</li>
  <li><strong>Whether Side A is ring-fenced</strong>, so that entity claims cannot exhaust the limit before individual directors need it.</li>
  <li><strong>Whether defence costs erode the limit.</strong></li>
  <li><strong>What your constitution and any deed of indemnity actually promise directors</strong>, since Side B only reimburses what the company was going to pay anyway.</li>
</ul>

<h2>The NZ Regulatory Context</h2>
<ul>
  <li><strong>Companies Act 1993:</strong> Directors' duties in sections 131 to 138, including reckless trading (section 135) and incurring obligations the company cannot perform (section 136). Liability is not capped by statute.</li>
  <li><strong>Financial Markets Conduct Act 2013:</strong> Directors of FMC reporting entities and licensed providers face personal exposure for misleading disclosure and other contraventions, enforced by the FMA.</li>
  <li><strong>Health and Safety at Work Act 2015:</strong> Officers carry a personal duty of due diligence and can be prosecuted individually. Fines under the Act cannot be insured (sections 29 and 30); defence costs and reparation can.</li>
  <li><strong>Incorporated Societies Act 2022:</strong> Governance and officer duties that did not exist under the 1908 Act.</li>
  <li><strong>Charities Act 2005:</strong> Obligations on officers of registered charitable entities.</li>
</ul>

<h2>Getting the Right D&O Cover in NZ</h2>
<p>When arranging D&O insurance, work with a licensed insurance adviser to confirm:</p>
<ul>
  <li>Which of Side A, Side B and Side C you actually need, and whether Side A has a dedicated limit.</li>
  <li>The definition of wrongful act is broad enough to cover your governance activities.</li>
  <li>Defence of investigations by the FMA, WorkSafe, the Commerce Commission and Charities Services is included, and at what point cover attaches.</li>
  <li>How the wording treats fines and penalties, and that it does not purport to indemnify HSWA fines.</li>
  <li>Run-off or extended reporting provisions are available for departing directors.</li>
</ul>
<p>Consider combining D&O with <a href="/coverage/management-liability/">management liability</a>. <a href="/compare/">Compare D&amp;O options</a> or <a href="/contact/">speak to a licensed adviser</a>.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.legislation.govt.nz/act/public/1993/0105/latest/whole.html" rel="nofollow noopener" target="_blank">Companies Act 1993</a> — directors' duties, sections 131 to 138.</li>
<li><a href="https://www.legislation.govt.nz/act/public/2015/0070/latest/whole.html" rel="nofollow noopener" target="_blank">Health and Safety at Work Act 2015</a> — officer due diligence duty, and sections 29 and 30 on the insurance of fines.</li>
<li><a href="https://www.legislation.govt.nz/act/public/2013/0069/latest/whole.html" rel="nofollow noopener" target="_blank">Financial Markets Conduct Act 2013</a>.</li>
<li><a href="https://www.legislation.govt.nz/act/public/2022/0012/latest/whole.html" rel="nofollow noopener" target="_blank">Incorporated Societies Act 2022</a>.</li>
<li><a href="https://www.legislation.govt.nz/act/public/2005/0039/latest/whole.html" rel="nofollow noopener" target="_blank">Charities Act 2005</a>.</li>
</ul>
<p>Last reviewed 7 September 2026. We are an information and referral service, not an insurer and not a law firm; the advisers we refer you to are licensed. General information only, not legal or financial advice. Policy wordings differ between underwriters — the schedule and wording govern, not this page.</p>
</div>
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
      'Statutory liability defence costs and reparation',
      'Entity investigations cover',
      'Crisis management costs',
      'Legal defence across all bundled covers',
      'Cyber liability (optional add-on)',
    ],
    avgCost: 'Individually underwritten',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80',
    author: 'sarah-thompson',
    keyStats: [
      { label: 'How the premium is set', value: 'Individual underwriting' },
      { label: 'Covers bundled', value: 'D&O, EPL, crime, statutory' },
      { label: 'HSWA fines', value: 'Cannot be insured (ss 29 and 30)' },
    ],
    relatedCoverage: ['directors-officers', 'employers-liability', 'statutory-liability'],
    relatedProfessions: ['consultants', 'accountants', 'financial-advisers'],
    faqs: [
      {
        q: 'What is typically included in a management liability policy in NZ?',
        a: "A standard management liability policy bundles: Directors' & Officers' liability (D&O), Employment Practices Liability (EPL), Crime (employee dishonesty and theft), and Statutory Liability. Many insurers also offer optional extensions for Cyber Liability, Fiduciary Liability and tax investigation costs. The exact bundle varies between insurers, and so do the sub-limits applying to each section — which are often well below the overall policy aggregate. Read the schedule section by section rather than relying on the headline limit.",
      },
      {
        q: 'Is management liability the same as D&O insurance?',
        a: "No. <a href='/coverage/directors-officers/'>D&O insurance</a> is one component within a management liability policy. A standalone D&O policy covers directors and officers personally for wrongful management acts. A management liability policy bundles D&O with employment practices liability, crime, and statutory liability — providing broader protection for both individuals and the company entity. Which is the better structure depends on your board, your headcount and the sub-limits on offer, not on a general rule.",
      },
      {
        q: 'Does management liability cover employee theft and fraud?',
        a: 'Yes. The crime or employee dishonesty section covers theft of money, property or securities by employees or directors. It also commonly covers forgery and computer fraud such as a fraudulent electronic funds transfer instruction. Coverage limits and conditions vary — most NZ policies require discovery of the loss within the policy period and notification within a specified time after discovery.',
      },
      {
        q: 'Does the statutory liability section pay a WorkSafe fine?',
        a: 'No. Sections 29 and 30 of the Health and Safety at Work Act 2015 make an indemnity for an HSWA fine of no effect and make entering into one an offence. That applies to the statutory liability section of a management liability bundle exactly as it applies to a standalone statutory liability policy. What the section does provide is defence costs, representation at the investigation stage, and reparation ordered by the court, which is compensation to the person harmed rather than a penalty. Check the sub-limit that applies to it.',
      },
      {
        q: 'Can I get a single management liability policy for multiple related companies?',
        a: 'Yes. Many insurers offer management liability cover on a group basis for parent companies and their subsidiaries. This can be more efficient than separate policies for each entity and ensures consistent coverage across the group. If your structure is changing — subsidiaries acquired, joint ventures, new entities — confirm with your insurer how the policy responds to changes during the policy period.',
      },
    ],
    longFormContent: `
<div class="keyfact">
<p><strong>What changed on this page.</strong> Every premium figure has been removed, along with the claim that bundling saves 15 to 30% against buying the covers separately — that number had no source. We have also corrected the statutory liability section: it does not pay Health and Safety at Work Act fines, because sections 29 and 30 of that Act make such an indemnity of no effect and make entering into one an offence.</p>
</div>

<h2>What Is Management Liability Insurance?</h2>
<p>Management liability insurance combines several interconnected covers into a single policy. Rather than managing separate policies for directors' and officers' liability, employment practices, employee crime and statutory liability, you hold them under one contract, with one premium, one renewal date and one insurer relationship.</p>
<p>For SMEs, that is usually an administrative advantage and often a commercial one. Whether it is cheaper than buying the sections separately depends entirely on your risk and the market at the time — we no longer publish a saving percentage, because there is no New Zealand data behind one.</p>
<p>The standard New Zealand bundle includes <a href="/coverage/directors-officers/">Directors' &amp; Officers' liability</a>, Employment Practices Liability, Crime, and <a href="/coverage/statutory-liability/">Statutory Liability</a>. Optional extensions commonly include Cyber Liability, Fiduciary Liability and tax investigation costs.</p>

<h2>How Does Management Liability Work in New Zealand?</h2>
<p>Management liability policies operate on a <strong>claims-made basis</strong> for most sections (D&amp;O, EPL) and on a <strong>discovery basis</strong> for the crime section:</p>
<ul>
  <li><strong>D&amp;O and EPL claims:</strong> The policy in place when the claim is made must respond. Continuous coverage without gaps is essential.</li>
  <li><strong>Crime and dishonesty claims:</strong> Losses discovered must be reported within the policy period, or within a specified discovery window after it ends. A theft committed three years ago but discovered today triggers the current policy's crime section.</li>
</ul>
<p>Each section has its own sub-limit, which may be well below the overall policy aggregate. A policy with a $2 million aggregate might carry a much smaller sub-limit on crime or on statutory liability. Those sub-limits, not the headline number, determine whether the policy is adequate.</p>
<p>When a claim arises, the insurer appoints solicitors relevant to the type of matter — employment specialists for an ERA claim, corporate counsel for a Companies Act claim. Access to that panel at negotiated rates is one of the practical advantages of the structure.</p>

<h2>What Does Management Liability Cover?</h2>
<ul>
  <li><strong>Directors' and Officers' Liability:</strong> Personal protection for directors, officers and senior managers against claims for wrongful acts in their management roles — shareholder claims, regulatory investigations, Companies Act claims brought by a liquidator. See our full <a href="/coverage/directors-officers/">D&amp;O guide</a>.</li>
  <li><strong>Employment Practices Liability:</strong> Claims by current or former employees for unjustified dismissal, discrimination, harassment, bullying, breach of employment agreement and psychological injury. Detail at our <a href="/coverage/employers-liability/">employers' liability guide</a>.</li>
  <li><strong>Crime and Employee Dishonesty:</strong> Loss of money, property or securities through theft, fraud or forgery by employees or directors, and commonly computer fraud and fraudulent electronic funds transfer instructions.</li>
  <li><strong>Statutory Liability:</strong> Legal defence costs and representation for alleged breaches of New Zealand legislation, and reparation orders. It does not pay Health and Safety at Work Act fines — see the <a href="/coverage/statutory-liability/">statutory liability guide</a> for why.</li>
  <li><strong>Entity Investigation Coverage:</strong> The company's own legal costs when a regulator investigates the entity rather than an individual.</li>
  <li><strong>Crisis Management Costs:</strong> Some policies include an extension covering communications and crisis response costs following a covered event.</li>
  <li><strong>Cyber Liability (optional):</strong> Data breach response costs and third-party claims arising from a cyber incident. Available as an extension or as a standalone policy.</li>
</ul>

<h2>What Is Not Covered?</h2>
<ul>
  <li><strong>Intentional wrongdoing and fraud</strong> by directors or officers, though defence until proven is typically maintained for all covered persons.</li>
  <li><strong>Bodily injury and property damage:</strong> Covered by <a href="/coverage/public-liability/">public liability insurance</a>.</li>
  <li><strong>Professional services errors:</strong> Covered by <a href="/coverage/professional-indemnity/">professional indemnity insurance</a>.</li>
  <li><strong>Known circumstances at inception.</strong></li>
  <li><strong>Fines and penalties.</strong> Criminal fines are excluded, and Health and Safety at Work Act fines cannot be insured under any section of any policy.</li>
  <li><strong>Contractual liability beyond what exists at law.</strong></li>
  <li><strong>Pollution and environmental remediation costs.</strong></li>
</ul>

<h2>Who Needs Management Liability Insurance in New Zealand?</h2>
<ul>
  <li><strong>SMEs with directors and employees:</strong> The combined exposure from Companies Act duties, employment law, employee fraud and regulatory compliance is the case for a bundle.</li>
  <li><strong>Growing businesses:</strong> The period of highest risk is often rapid growth, when governance and HR processes have not caught up with headcount.</li>
  <li><strong>Professional services firms:</strong> <a href="/professions/accountants/">Accounting</a> practices, <a href="/professions/financial-advisers/">financial advice</a> firms and <a href="/professions/consultants/">consultancies</a> hold management liability alongside professional indemnity, which covers a different set of claims.</li>
  <li><strong>Construction and contracting:</strong> Health and safety exposure, subcontractor management and complex contracting create statutory, D&amp;O and employment risk together.</li>
  <li><strong>Healthcare and aged care:</strong> Multiple regulators and significant employment claims exposure.</li>
  <li><strong>Retail and hospitality:</strong> Large casual and shift workforces with complex rostering and holiday pay obligations.</li>
</ul>

<h2>What Management Liability Costs in New Zealand</h2>
<p>This page previously gave a monthly starting price, annual bands by company size, and a bundling saving of 15 to 30%. None of it had a source, and all of it has been removed. Management liability in New Zealand is broker-distributed and individually underwritten, and no insurer publishes rate tables.</p>
<p>What an underwriter rates on:</p>
<ul>
  <li><strong>Turnover</strong>, the primary rating base across most sections.</li>
  <li><strong>Headcount</strong>, which drives the employment practices section.</li>
  <li><strong>Industry and regulatory footprint.</strong></li>
  <li><strong>Financial position</strong>, which drives the D&amp;O section.</li>
  <li><strong>Cash handling, payment authority and system access</strong>, which drive the crime section.</li>
  <li><strong>Claims history across any section</strong>, since one claim affects the whole bundle at renewal.</li>
  <li><strong>The sub-limits and extensions selected.</strong></li>
</ul>
<p><a href="/contact/">Ask a licensed adviser</a> for a quote, and ask for the sub-limit on each section rather than the aggregate alone.</p>

<h2>How Much Cover Do I Need?</h2>
<p>Assess each section separately, because they fail separately:</p>
<ul>
  <li><strong>D&amp;O:</strong> The cost of defending a liquidator's proceeding or a regulatory investigation, shared across everyone the claim names.</li>
  <li><strong>Employment practices:</strong> The cost of defending a contested personal grievance to determination, plus the compensation exposure.</li>
  <li><strong>Crime:</strong> Your maximum realistic exposure to internal theft, driven by who can move money and who reconciles it.</li>
  <li><strong>Statutory liability:</strong> The defence cost of a long regulatory investigation, plus reparation exposure. Not the maximum fine, which is not insurable under HSWA.</li>
</ul>

<h2>NZ Regulatory Context for Management Liability</h2>
<ul>
  <li><strong>Companies Act 1993:</strong> Directors' duties and personal liability, not capped by statute.</li>
  <li><strong>Employment Relations Act 2000:</strong> ERA and Employment Court jurisdiction over all employment relationships.</li>
  <li><strong>Health and Safety at Work Act 2015:</strong> Officer due diligence duties; fines under the Act cannot be insured.</li>
  <li><strong>Financial Markets Conduct Act 2013:</strong> Director and officer exposure for regulated entities.</li>
  <li><strong>Privacy Act 2020:</strong> Notifiable privacy breach obligations and Privacy Commissioner jurisdiction.</li>
</ul>

<h2>Getting the Right Management Liability Cover in NZ</h2>
<p>When purchasing management liability, work with a licensed insurance adviser to:</p>
<ul>
  <li>Map your risk across D&amp;O, employment practices, crime and statutory liability separately.</li>
  <li>Confirm the sub-limit for each section, not just the aggregate.</li>
  <li>Confirm how the statutory liability section treats reparation, and that it does not purport to indemnify HSWA fines.</li>
  <li>Ensure group company structures are correctly scheduled.</li>
  <li>Consider cyber liability if you handle customer data or rely on electronic payments.</li>
</ul>
<p><a href="/compare/">Compare management liability options</a> or <a href="/contact/">request a quote</a> from a licensed insurance adviser.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.legislation.govt.nz/act/public/2015/0070/latest/whole.html" rel="nofollow noopener" target="_blank">Health and Safety at Work Act 2015</a> — sections 29 and 30 on the insurance of fines.</li>
<li><a href="https://www.legislation.govt.nz/act/public/1993/0105/latest/whole.html" rel="nofollow noopener" target="_blank">Companies Act 1993</a>.</li>
<li><a href="https://www.legislation.govt.nz/act/public/2000/0024/latest/whole.html" rel="nofollow noopener" target="_blank">Employment Relations Act 2000</a>.</li>
<li><a href="https://www.legislation.govt.nz/act/public/2013/0069/latest/whole.html" rel="nofollow noopener" target="_blank">Financial Markets Conduct Act 2013</a>.</li>
<li><a href="https://www.legislation.govt.nz/act/public/2020/0031/latest/whole.html" rel="nofollow noopener" target="_blank">Privacy Act 2020</a>.</li>
</ul>
<p>Last reviewed 7 September 2026. We are an information and referral service, not an insurer and not a law firm; the advisers we refer you to are licensed. General information only, not legal or financial advice. Policy wordings differ between underwriters and brands — the schedule and wording govern, not this page.</p>
</div>
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
      'A run-off period agreed with the insurer',
      'Continuity of the original retroactive date',
      'Transfers of professional liability',
      'Estate protection for deceased practitioners',
    ],
    avgCost: 'Individually underwritten',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    keyStats: [
      { label: 'How the premium is set', value: 'Individual underwriting' },
      { label: 'Primary limitation period', value: '6 years (s 11, Limitation Act 2010)' },
      { label: 'Building work longstop', value: '10 years (s 393, Building Act 2004)' },
    ],
    relatedCoverage: ['professional-indemnity', 'directors-officers', 'management-liability'],
    relatedProfessions: ['accountants', 'architects-engineers', 'financial-advisers'],
    faqs: [
      {
        q: 'What is the difference between run-off cover and an extended reporting period (ERP)?',
        a: "Run-off cover is a standalone policy — or a continuation of an existing policy — purchased specifically to cover claims arising after you stop practising, with no new work being generated. An extended reporting period is a provision within some PI policies that allows you to report claims discovered after the policy expires, for a defined and usually short period. An ERP is a short-term extension within a single policy; run-off cover is the longer-term arrangement for a permanent cessation of professional activities. Check the length of any ERP in your own wording rather than assuming a market norm.",
      },
      {
        q: 'How long do I need run-off cover for?',
        a: "Work from the limitation position rather than from a rule of thumb. Under section 11 of the Limitation Act 2010 the primary period is six years, and it runs from the act or omission — not from practical or substantial completion. Section 14 provides a late knowledge extension of three years, running from when the claimant knew or ought reasonably to have known. For civil proceedings relating to building work, section 393 of the Building Act 2004 imposes an absolute ten-year longstop, also running from the act or omission. This page previously described a fifteen-year limitation period; that has been removed. In practice the length you buy is a negotiation with your insurer, informed by the work you have done and by which of those provisions could still apply to it.",
      },
      {
        q: 'Is run-off cover required when I sell my business?',
        a: "When you sell a professional services business, the purchasing entity typically takes on the ongoing PI policy. However, claims arising from work done while you personally owned and operated the business may be your personal liability — not the new owner's. A run-off policy in your name protects you against historical claims that surface after the sale. Sale and purchase agreements should always specify who is responsible for historical PI claims and whether run-off cover is required as a condition of completion.",
      },
      {
        q: 'What happens to PI cover when a professional dies?',
        a: "Many New Zealand PI policies include estate protection provisions, so that the policy continues to cover the deceased professional's estate for claims arising from their professional work for a defined period. The length varies between wordings — check the policy rather than assuming. If the deceased was a sole practitioner, the estate should notify the insurer promptly and arrange formal run-off cover if the policy is not continuing automatically. Executors and administrators should locate and read the PI policy early when dealing with a deceased professional's estate.",
      },
      {
        q: 'Can I get run-off cover from a different insurer than my existing PI?',
        a: "Yes, though it is generally simpler to arrange run-off cover with your existing PI insurer, which already knows your risk profile and practice history. If your existing insurer does not offer run-off, or the terms are uncompetitive, a licensed insurance adviser can approach a specialist insurer. The critical point is that the run-off policy's retroactive date must match your original policy's, so that your whole career remains covered rather than only recent years.",
      },
    ],
    longFormContent: `
<div class="keyfact">
<p><strong>What changed on this page.</strong> The run-off pricing percentages and worked cost examples have been removed — they had no source, and run-off is negotiated individually at the point of purchase. We have also corrected the limitation position. New Zealand's primary period is six years under section 11 of the Limitation Act 2010, with a three-year late knowledge extension under section 14, and an absolute ten-year longstop for building work under section 393 of the Building Act 2004. The fifteen-year figure this page used to carry has gone.</p>
</div>

<h2>What Is Run-off Cover Insurance?</h2>
<p>Run-off cover — also called tail cover or cessation cover — is professional indemnity insurance that protects you after you stop providing professional services. Because <a href="/coverage/professional-indemnity/">professional indemnity insurance</a> operates on a claims-made basis, you need an active policy when a claim is made against you, regardless of when the underlying work was done. When you retire, wind up your business, sell your practice, or move to an employed role where your employer provides cover, your existing policy ceases — and claims arising from past work can leave you personally exposed.</p>
<p>The risk is not theoretical. An engineer who retires today could face a claim years from now over a design signed off long before. An accountant who closes their practice might receive a claim for a tax advice error from several years ago. In each case, only run-off cover bridges the gap between the end of active practice and the end of legal exposure.</p>

<h2>How Does Run-off Cover Work in New Zealand?</h2>
<p>Run-off cover applies the claims-made principle to a practice that has stopped generating new work. The policy:</p>
<ul>
  <li>Takes effect from the date your active PI policy ceases.</li>
  <li>Maintains the original retroactive date from your active policy history, so that claims arising from work done across your career remain covered.</li>
  <li>Responds to claims made against you during the run-off period for services provided before the cessation date.</li>
  <li>Covers legal defence costs and compensation, as an active PI policy would.</li>
</ul>
<p>Run-off periods are agreed with the insurer rather than fixed by the market. The right period depends on the work you have done and on which limitation provisions could still reach it.</p>

<h2>Getting the Limitation Position Right</h2>
<p>This is the part most often stated incorrectly, including previously on this page. The accurate New Zealand position is:</p>
<ul>
  <li><strong>Six years, section 11 of the Limitation Act 2010</strong> — the primary period for a money claim, running from the act or omission. Not from practical completion, and not from the Building Act.</li>
  <li><strong>Three years, section 14 of the Limitation Act 2010</strong> — the late knowledge extension, running from when the claimant knew or ought reasonably to have known. This is the provision that matters where a defect surfaces long after the work.</li>
  <li><strong>Ten years, section 393 of the Building Act 2004</strong> — an absolute longstop on civil proceedings relating to building work, also running from the act or omission. It is a hard stop, not a latent defects period.</li>
</ul>
<p>Because professional indemnity is claims-made, the practical consequence is simple: a design or a piece of advice from nine years ago is defended by this year's policy, or by run-off cover, or by nothing at all.</p>

<h2>What Does Run-off Cover Cover?</h2>
<ul>
  <li><strong>Claims from past professional work:</strong> Any claim arising from services you provided before the cessation date, subject to the retroactive date on the policy.</li>
  <li><strong>Legal defence costs:</strong> Solicitor and barrister fees, court costs, expert witness fees and investigation costs from the first notification.</li>
  <li><strong>Court-awarded damages and settlements</strong>, up to the policy limit.</li>
  <li><strong>Retroactive date protection:</strong> Claims arising from work done back to your original retroactive date, so that your whole career is covered rather than only recent years.</li>
  <li><strong>Defence of professional body and regulator investigations</strong> into your past work, where the wording provides it, even after you have ceased practice.</li>
  <li><strong>Estate protection:</strong> Many wordings continue to protect your estate for claims arising from your professional work if you die during the run-off period.</li>
</ul>

<h2>What Is Not Covered by Run-off Cover?</h2>
<ul>
  <li><strong>New professional work:</strong> If you recommence practice, the run-off policy does not cover work done after its inception. You would need a new active PI policy.</li>
  <li><strong>Known claims at inception:</strong> Circumstances or claims you were already aware of when the run-off cover commenced are excluded. If you know of a potential claim before your active policy expires, notify the active policy insurer before it ends.</li>
  <li><strong>Work done before your original retroactive date.</strong></li>
  <li><strong>Intentional wrongdoing or fraud.</strong></li>
  <li><strong>Bodily injury and property damage:</strong> These require separate public liability run-off arrangements where relevant.</li>
</ul>

<h2>Who Needs Run-off Cover in New Zealand?</h2>
<ul>
  <li><strong>Retiring professionals:</strong> Accountants, lawyers, architects, engineers, financial advisers and allied health practitioners all remain exposed after retirement. The longer the career, the more past work sits inside a live limitation period.</li>
  <li><strong>Business sellers:</strong> The seller usually retains liability for work done before settlement. Run-off cover in the seller's name answers post-sale claims from pre-sale work.</li>
  <li><strong>Professionals moving to employment:</strong> A new employer's policy will rarely pick up work done in your own practice.</li>
  <li><strong>Businesses winding up:</strong> Claims can arrive after the entity has stopped trading, and the directors may find themselves personally involved in answering them.</li>
  <li><strong>Consultants taking a career break:</strong> Any gap in active cover leaves the prior period unprotected unless run-off is in place.</li>
  <li><strong><a href="/professions/accountants/">Accountants</a>:</strong> CA ANZ members in public practice must hold professional indemnity to hold a Certificate of Public Practice, and CPA Australia members offering public accounting services must hold PI. Confirm with your body what it expects when you cease practice.</li>
  <li><strong><a href="/professions/architects-engineers/">Architects and engineers</a>:</strong> Building work carries a ten-year longstop under section 393 of the Building Act 2004, which makes the tail longer here than in most professions.</li>
  <li><strong><a href="/professions/financial-advisers/">Financial advisers</a>:</strong> Investment advice claims often surface when markets move, which can be years after the advice was given.</li>
</ul>

<h2>What Run-off Cover Costs in New Zealand</h2>
<p>This page previously expressed run-off cost as a percentage of the last annual premium, with worked examples. Those figures had no source and have been removed. Run-off is priced individually at the point of purchase and varies with the insurer, the period, the limit and the book of work being covered.</p>
<p>What an underwriter looks at:</p>
<ul>
  <li><strong>The work you have done</strong> — discipline, sectors, and how long its tail runs.</li>
  <li><strong>The period of run-off requested</strong>, and whether it is bought as a single premium or annually.</li>
  <li><strong>The limit carried</strong>, which usually needs to match or exceed the limit held in active practice.</li>
  <li><strong>The retroactive date</strong> and how many years of prior acts it brings in.</li>
  <li><strong>Claims and notification history.</strong></li>
  <li><strong>Whether the incumbent insurer is writing it</strong>, since they already hold your history.</li>
</ul>
<p>Ask for run-off terms in writing at renewal, while you still have leverage as a paying client, rather than at the point you cease trading. <a href="/contact/">A licensed adviser</a> can request them for you.</p>

<h2>How Much Run-off Cover Do I Need?</h2>
<ul>
  <li><strong>Limit:</strong> Match or exceed the limit you maintained during active practice. A historical claim can be as large as a current one.</li>
  <li><strong>Period:</strong> Reason from section 11, section 14 and, for building work, section 393 — not from a market rule of thumb.</li>
  <li><strong>Retroactive date:</strong> Must extend back to the earliest date from which you have had continuous claims-made cover.</li>
  <li><strong>Defence costs:</strong> Confirm whether they sit inside or outside the limit, since in run-off there is no renewal to restore anything.</li>
</ul>

<h2>The NZ Regulatory Position on Run-off</h2>
<p>No New Zealand regulator imposes a run-off insurance obligation that we can point to, and several commonly cited ones do not exist:</p>
<ul>
  <li><strong>Financial advice providers:</strong> Professional indemnity is not a standard condition of an FAP licence, so there is no licence-based run-off obligation either.</li>
  <li><strong>Real estate agents:</strong> The Real Estate Authority does not require professional indemnity insurance, and therefore sets no run-off requirement. REINZ membership requirements are a separate, contractual matter — ask REINZ what applies when an agency ceases.</li>
  <li><strong>Accountants:</strong> CA ANZ requires current and appropriate professional indemnity insurance for a Certificate of Public Practice. Ask CA ANZ directly what it expects on cessation.</li>
  <li><strong>The building reform:</strong> No official document published to date states any required duration of cover or run-off obligation under the proposed regime. The Building Amendment Bill was introduced on 2 July 2026 and is before select committee.</li>
  <li><strong>Limitation Act 2010 and Building Act 2004:</strong> These set the legal framework that actually determines how long your exposure lasts — six years, a three-year late knowledge extension, and a ten-year longstop for building work.</li>
</ul>

<h2>Getting the Right Run-off Cover in NZ</h2>
<p>Act before your active PI policy expires — some insurers will not offer run-off where there has been a gap in cover. Work with a licensed insurance adviser to:</p>
<ul>
  <li>Obtain run-off terms from your existing insurer and at least one alternative.</li>
  <li>Confirm the retroactive date on the run-off policy matches your full practice history.</li>
  <li>Notify any known potential claims to your active policy insurer before that policy expires.</li>
  <li>Decide between a single premium and annual instalments, and understand what happens if you stop paying part way through.</li>
  <li>Ask your professional body what, if anything, it expects of a member who ceases practice.</li>
</ul>
<p>The best time to arrange run-off cover is alongside your last active renewal, while your practice history is current. <a href="/compare/">Compare run-off cover options</a> or <a href="/contact/">speak to a licensed adviser</a>.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.legislation.govt.nz/act/public/2010/0110/latest/whole.html" rel="nofollow noopener" target="_blank">Limitation Act 2010</a> — section 11 (six-year primary period) and section 14 (three-year late knowledge extension).</li>
<li><a href="https://www.legislation.govt.nz/act/public/2004/0072/latest/whole.html" rel="nofollow noopener" target="_blank">Building Act 2004</a> — section 393, ten-year longstop on civil proceedings relating to building work.</li>
<li><a href="https://www.building.govt.nz/about-building-performance/all-news-and-updates/building-amendment-bill-introduced-to-parliament" rel="nofollow noopener" target="_blank">Building Performance — Building Amendment Bill introduced to Parliament</a>, 2 July 2026.</li>
<li>Financial Markets Authority — professional indemnity insurance is not one of the standard conditions of a financial advice provider licence (consultation opened 17 June 2020, outcome 6 November 2020).</li>
<li>Real Estate Agents Act (Professional Conduct and Client Care) Rules 2012 — no occurrence of insurance or indemnity.</li>
<li>Chartered Accountants Australia and New Zealand — Certificate of Public Practice requirements.</li>
</ul>
<p>Last reviewed 7 September 2026. We are an information and referral service, not an insurer and not a law firm; the advisers we refer you to are licensed. General information only, not legal or financial advice. Policy wordings differ between underwriters — the schedule and wording govern, not this page.</p>
</div>
    `.trim(),
  },
]
