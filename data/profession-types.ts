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
  author: string
  longFormContent: string
  keyStats: { label: string; value: string }[]
  mandatoryRequirements: string[]
  recommendedCover: { type: string; minLimit: string; notes: string }[]
  relatedCoverage: string[]
}

export const professionTypes: ProfessionType[] = [
  {
    slug: 'accountants',
    name: 'Accountants & Bookkeepers',
    icon: '📊',
    shortDesc: 'Professional indemnity insurance for accountants, tax agents and bookkeepers in New Zealand.',
    description: "Accountants and bookkeepers carry real exposure to professional indemnity claims. A miscalculated tax return, an error in financial statements or a missed filing deadline can leave a client with a loss they will look to recover from you. Whether you have to hold PI depends on your membership, not on any New Zealand statute. CA ANZ members in public practice must hold current and appropriate professional indemnity insurance to hold a Certificate of Public Practice, and CPA Australia members offering public accounting services here must hold it too. Neither body publishes a New Zealand minimum limit, so this page does not state one.",
    avgCost: 'Set by fee income and limit',
    coverageNeeded: [
      'Professional Indemnity (a condition of a CA ANZ Certificate of Public Practice, not of any statute)',
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
      { q: 'Is PI insurance mandatory for NZ accountants?', a: "Not by law. No New Zealand statute requires an accountant, tax agent or bookkeeper to hold professional indemnity insurance. The requirement, where you have one, comes from your membership body. CA ANZ requires members in public practice to hold current and appropriate professional indemnity insurance in order to hold a Certificate of Public Practice, and you need that certificate unless your fees are under $13,000 a year and the services are offered in your own name. CPA Australia requires members offering public accounting services in New Zealand to hold PI, including for honorary, pro bono and voluntary work. If you belong to neither body, the only party that can require cover of you is your client." },
      { q: 'What level of PI cover do NZ accountants need?', a: "There is no published New Zealand minimum. CA ANZ requires cover that is current and appropriate, but the New Zealand requirement sits in Part IV of the NZICA Rules, which is not publicly readable, so we will not put a figure on it — ask CA ANZ directly. The $2 million and cover-category figures that circulate come from the Australian Professional Standards Scheme and do not apply here. CPA Australia publishes no New Zealand dollar minimum either. In practice the limit is set by your client contracts and by what your fee income and work type support." },
      { q: 'Does PI insurance cover bookkeepers?', a: "Yes — bookkeepers who provide professional services, prepare financial records or process payroll face the same exposure to claims as accountants. If an error in your books leads to a client's financial loss, you could face a claim. No New Zealand body requires a bookkeeper who is not a CA ANZ or CPA Australia member to hold cover, so if you carry it, it is because you chose to or because a client asked for it." },
      { q: 'What is a retroactive date and why does it matter for accountants?', a: "Because PI insurance is claims-made, a retroactive date determines how far back in time the covered work extends. If you switch insurers, your new policy should match or pre-date the retroactive date of your old policy — otherwise gaps in cover can leave you exposed to claims from work done years earlier. Always check this when renewing or switching." },
      { q: 'Does PI cover IRD audits or investigations?', a: "PI insurance typically covers your legal costs in defending claims made by clients, including situations where IRD penalties arose from your error. It does not usually cover your own regulatory investigations or fines imposed on your firm directly — statutory liability or regulatory investigation cover may be needed for that. Read your own wording; policies differ between underwriters." },
      { q: 'Can I get PI insurance if I work from home as a sole trader?', a: "Yes. Cover is available for sole-trader accountants and bookkeepers working from home. We do not publish a starting price, because there is nothing to base one on: New Zealand PI is broker-distributed and individually underwritten, and no insurer here publishes rate tables. What we can tell you is what the underwriter rates on — fee income, the services you provide, the limit you need, your excess, your retroactive date and your claims history. You should also consider whether a home-based office needs public liability cover if clients visit." },
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    keyStats: [
      { label: 'Required by New Zealand law', value: 'No' },
      { label: 'Required for a CA ANZ Certificate of Public Practice', value: 'Yes' },
      { label: 'Published NZ minimum limit', value: 'None — the CA ANZ NZ rules are not public' },
    ],
    mandatoryRequirements: [
      'Membership body: CA ANZ members in public practice in New Zealand must hold current and appropriate PI to hold a Certificate of Public Practice',
      'Membership body: you need a Certificate of Public Practice unless your fees are under $13,000 a year and services are offered in your own name',
      'Membership body: CPA Australia members offering public accounting services in New Zealand must hold PI, including for honorary, pro bono and voluntary services',
      'Law: no New Zealand statute requires an accountant, tax agent or bookkeeper to hold PI',
      'Client contract: engagement terms, lender panels and government procurement commonly specify a limit — that figure, not a professional standard, is usually what sets your cover',
    ],
    recommendedCover: [
      { type: 'Professional Indemnity', minLimit: 'Not published', notes: 'CA ANZ requires current and appropriate cover for a Certificate of Public Practice but publishes no New Zealand dollar minimum. Ask CA ANZ, then check what your client contracts require.' },
      { type: 'Public Liability', minLimit: 'Set by contract', notes: 'No statutory or membership minimum. Landlords and clients whose premises you visit commonly specify a figure.' },
      { type: 'Cyber Liability', minLimit: 'Set by contract', notes: 'No statutory or membership minimum. Relevant because you hold client financial records and banking data.' },
      { type: "Employers' Liability", minLimit: 'Set by contract', notes: 'No statutory or membership minimum. Sits alongside ACC, which covers work injury.' },
    ],
    relatedCoverage: ['professional-indemnity', 'public-liability', 'employers-liability', 'run-off-cover'],
    longFormContent: `
<div class="keyfact">
<p><strong>Where the obligation actually comes from.</strong> No New Zealand statute requires an accountant or bookkeeper to hold professional indemnity insurance. CA ANZ requires it of members in public practice as a condition of holding a Certificate of Public Practice, and CPA Australia requires it of members offering public accounting services here. Neither body publishes a New Zealand minimum limit, so this page does not state one.</p>
</div>

<h2>Why Accountants &amp; Bookkeepers Need Professional Indemnity Insurance</h2>
<p>Accountants and bookkeepers sit at the heart of their clients' financial lives. You calculate tax obligations, prepare financial statements, process payroll, advise on GST compliance, and help clients make decisions that can determine the success or failure of their businesses. That trusted position carries enormous professional responsibility — and genuine financial exposure if something goes wrong.</p>
<p>A miscalculated tax return that leaves a client facing IRD penalties. A set of financial statements that contained an error a bank relied upon to approve a loan. A missed filing deadline that triggered a late payment penalty. These are not hypothetical scenarios — they are the everyday reality of professional indemnity claims against NZ accountants and bookkeepers. Even where you have done everything correctly, defending a claim costs money, time, and reputational capital that most small accounting firms cannot easily absorb.</p>
<p><a href="/coverage/professional-indemnity/">Professional indemnity insurance</a> is the financial safety net that lets you practise with confidence. It covers your legal defence costs and any compensation awarded if a client claims that your professional error, omission, or breach of duty caused them financial loss. Without it, a single significant claim could threaten everything you have built.</p>
<p>The accounting sector is also experiencing rising client expectations and increasing regulatory complexity. Changes to trust tax rules, the introduction of the Residential Property Withholding Tax, evolving GST rules for online services, and ongoing amendments to the Income Tax Act all create opportunities for error — and client expectations that you will absorb the consequences when things go wrong.</p>

<h2>Who Requires PI of an Accountant, and Who Does Not</h2>
<p>The most useful thing to know is that the requirement is not statutory. No New Zealand Act makes professional indemnity insurance a condition of practising as an accountant, a tax agent or a bookkeeper. Three quite different sources can create an obligation, and they are worth keeping apart.</p>
<p><strong>Your membership body.</strong> CA ANZ requires members in public practice in New Zealand to hold current and appropriate professional indemnity insurance in order to hold a Certificate of Public Practice. You need that certificate unless your fees are under $13,000 a year and the services are offered in your own name. CPA Australia states that members offering public accounting services in New Zealand must hold professional indemnity insurance, and applies that to honorary, pro bono and voluntary services as well. Both are membership conditions. Neither is law.</p>
<p><strong>What we will not tell you.</strong> The minimum limit CA ANZ sets for New Zealand members sits in Part IV of the NZICA Rules, which is not publicly readable. The $2 million and cover-category figures you may have seen quoted are Australian, from the Professional Standards Scheme, and do not carry across the Tasman. We could find no PI requirement in ATAINZ published membership criteria either. If another page states the New Zealand number, ask it where the number came from.</p>
<p><strong>Your clients.</strong> For most practices this is the real requirement. Engagement terms, lender panels and government procurement routinely specify a limit, and that specified figure is what sets your cover, not any professional standard.</p>
<p><strong>Everything else is risk, not requirement.</strong> The Privacy Act 2020 obligations that come with holding client financial data are real, and a breach can produce both a regulatory response and a client claim. That is a reason to consider cover. It is not a rule that says you must hold it.</p>

<h2>Common PI Claims Against Accountants</h2>
<p>Understanding the types of claims that arise helps you appreciate what PI insurance is actually protecting you from. The most common professional indemnity claims against accountants include:</p>
<ul>
<li><strong>Tax return errors:</strong> Incorrect income calculations, missed deductions, errors in depreciation treatment, or failure to apply available tax credits — resulting in clients paying more tax than necessary or facing IRD penalties.</li>
<li><strong>GST miscalculations:</strong> GST errors are among the most frequent accounting claims. A misclassification of exempt versus taxable supplies, or an error in a GST return, can result in significant underpayments or overpayments that clients hold you responsible for.</li>
<li><strong>Missed filing deadlines:</strong> IRD imposes late filing and late payment penalties. If your firm missed a deadline that resulted in your client incurring penalties they would not otherwise have faced, you may be liable for those costs.</li>
<li><strong>Incorrect financial statements:</strong> Financial statements that contain material errors — whether through miscalculation, wrong accounting treatment, or failure to apply NZ GAAP — can affect lending decisions, business valuations, or shareholder distributions. The consequences for clients can be significant.</li>
<li><strong>Business structure advice:</strong> Accountants increasingly provide advice on trusts, company structures, and business reorganisations. If the structure you recommended turns out to be tax-inefficient, legally problematic, or simply wrong for the client's circumstances, you face a claim.</li>
<li><strong>Payroll errors:</strong> Incorrect PAYE calculations, holiday pay errors under the Holidays Act, KiwiSaver contribution mistakes — payroll errors can result in significant claims, particularly from employment disputes.</li>
</ul>
<p>It is worth noting that PI claims can arise even where you have not actually made a mistake. If a client suffers a loss and believes you were responsible, they may make a claim that you must defend. The legal costs of defending an unfounded claim can be just as damaging as the cost of settling a legitimate one.</p>

<h2>What Cover Do Accountants Need?</h2>
<p><a href="/coverage/professional-indemnity/">Professional indemnity insurance</a> is the core cover for any accountant or bookkeeper. It covers claims arising from professional errors, omissions, and breaches of professional duty in the services you provide. This is the cover CA ANZ requires for a Certificate of Public Practice, and the cover most client contracts ask you to evidence.</p>
<p>Beyond PI, most accounting firms should also consider:</p>
<ul>
<li><strong><a href="/coverage/public-liability/">Public liability insurance:</a></strong> Covers claims for property damage or personal injury arising from your business activities. Essential if clients visit your premises or you visit client sites.</li>
<li><strong>Cyber liability insurance:</strong> Accountants handle some of the most sensitive financial data of any profession. A data breach affecting client records can trigger Privacy Act obligations, client claims, and significant remediation costs. Cyber cover is increasingly essential.</li>
<li><strong><a href="/coverage/employers-liability/">Employers' liability insurance:</a></strong> Required if you employ staff or engage contractors on a regular basis.</li>
<li><strong><a href="/coverage/run-off-cover/">Run-off cover:</a></strong> Critically important when you retire, close your practice, or sell your firm. Because PI is claims-made, once your policy lapses, you are unprotected against claims from past work. Run-off cover extends protection for the tail period after you cease practice.</li>
</ul>

<h2>What PI Costs an Accountant</h2>
<p>We have removed the monthly premium range this page used to publish. It had no source. New Zealand professional indemnity is broker-distributed and individually underwritten, no insurer here publishes rate tables, and neither CA ANZ nor CPA Australia publishes premium data. The only official New Zealand cost figures that exist belong to other professions entirely — a government estimate for architects, and a New Zealand Law Society benchmarking survey of law firms — and neither transfers to accounting.</p>
<p>What we can tell you is what an underwriter actually rates on:</p>
<ul>
<li><strong>Limit of indemnity.</strong> The largest single lever, and usually decided for you by your client contracts.</li>
<li><strong>Annual fee income.</strong> The primary rating base for accounting PI.</li>
<li><strong>Services provided.</strong> Compliance and bookkeeping work is looked at differently from investment, valuation, trustee or business structure advice. We describe that qualitatively because nobody publishes the loadings.</li>
<li><strong>Claims and notification history</strong>, including circumstances you have notified that have not become claims.</li>
<li><strong>Excess.</strong> A higher deductible reduces premium and increases what you carry yourself.</li>
<li><strong>Retroactive date and run-off.</strong> PI is claims-made, so prior acts cover is a genuine price lever.</li>
<li><strong>Whether defence costs sit inside or outside the limit.</strong></li>
</ul>
<p>The only honest way to get a number is a quote. Our <a href="/pi-insurance-cost/">cost guide</a> works through the same rating factors in more detail.</p>

<h2>How Much Cover Do You Need?</h2>
<p>We are not going to publish a table of recommended limits by firm size, because no New Zealand source for one exists in accounting. Set the limit from things you can actually check:</p>
<ul>
<li><strong>What your client contracts require.</strong> Read the engagement terms and any lender or agency panel conditions. This is usually the binding number.</li>
<li><strong>What CA ANZ requires of you.</strong> Ask CA ANZ what its New Zealand rules require at your fee income level. It is not published, and we will not guess it.</li>
<li><strong>The size of the decisions your work supports.</strong> A set of financial statements relied on for a lending or sale decision can carry an exposure far larger than the fee that produced it.</li>
<li><strong>Whether defence costs erode the limit.</strong> A limit that also has to fund your defence is smaller than it looks.</li>
</ul>
<p>For a sense of scale, the published minimums that do exist elsewhere in New Zealand run from $200,000 for an engineering firm issuing a producer statement, through $250,000 for self-employed ADNZ Professional members and $1 million for REINZ member agencies, to $1.2 million for a law practice. None of those is an accounting standard, but they show the range New Zealand bodies actually set when they set one.</p>

<h2>Key Considerations When Choosing a PI Policy</h2>
<p>Not all PI policies are equal. When comparing options, pay close attention to:</p>
<ul>
<li><strong>Retroactive date:</strong> PI is <a href="/blog/claims-made-vs-occurrence-pi-insurance-nz/">claims-made insurance</a>, meaning the policy in force when a claim is made covers it — regardless of when the work was done. The retroactive date determines how far back your covered work extends. Protect your retroactive date when switching insurers.</li>
<li><strong>Definition of professional services:</strong> Ensure the policy covers all the services you actually provide — tax, advisory, business valuation, trustee services. Gaps in the defined services can leave you unprotected.</li>
<li><strong>Run-off provisions:</strong> What happens to your cover if you retire or close the firm? Check whether your policy includes automatic run-off or whether you need to purchase separate <a href="/coverage/run-off-cover/">run-off cover</a>.</li>
<li><strong>Excess/deductible:</strong> Most PI policies for accountants carry an excess. Make sure you understand the amount and can absorb it if a claim arises.</li>
<li><strong>Insurer strength and claims handling:</strong> Consider the financial strength of the insurer and how it handles claims. We do not publish a panel list here — the right market depends on your work, and it is a conversation to have with your adviser.</li>
</ul>

<h2>Getting Quoted — What Information You Need</h2>
<p>To get an accurate PI quote for your accounting or bookkeeping practice, you will typically need to provide:</p>
<ul>
<li>Your annual gross fee income (current and projected)</li>
<li>A description of the services you provide (tax, audit, advisory, bookkeeping, payroll, etc.)</li>
<li>The number of principals and professional staff</li>
<li>Your CA ANZ or CPA Australia membership details, and whether you hold a Certificate of Public Practice</li>
<li>Any prior PI claims in the last five years</li>
<li>The cover limit you require</li>
<li>Your current insurer and policy expiry date (if renewing)</li>
</ul>
<p>Ready to get a quote? <a href="/contact/">Contact our team</a> and we will connect you with a licensed insurance adviser who can <a href="/compare/">compare PI options</a> for your practice.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.charteredaccountantsanz.com/member-services/certificate-of-public-practice" rel="nofollow noopener" target="_blank">CA ANZ — Certificate of Public Practice</a></li>
<li><a href="https://www.cpaaustralia.com.au/become-a-cpa/public-practice/practising-in-new-zealand" rel="nofollow noopener" target="_blank">CPA Australia — Practising in New Zealand</a></li>
<li><a href="https://www.lawsociety.org.nz/professional-practice/practising-well/benchmarking-costs-of-law-practice-in-new-zealand/" rel="nofollow noopener" target="_blank">NZ Law Society and KPMG — Benchmarking costs of law practice in New Zealand</a>, March 2024. Cited only as the one published New Zealand PI cost dataset. It covers law firms, not accountants.</li>
<li><a href="https://www.legislation.govt.nz/act/public/2010/0110/latest/whole.html" rel="nofollow noopener" target="_blank">Limitation Act 2010</a>, sections 11 and 14</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal or financial advice. We are an information and referral service, not an insurer; the advisers we refer you to are licensed. Confirm your own obligations with CA ANZ or CPA Australia and with your client contracts. Policy wordings differ between underwriters — your schedule and wording govern, not this page.</p>
</div>
`,
  },
  {
    slug: 'architects-engineers',
    name: 'Architects & Engineers',
    icon: '📐',
    shortDesc: 'PI and liability insurance for architects, engineers, designers and construction consultants in NZ.',
    description: "Architects and engineers carry some of the largest professional indemnity exposures of any profession. A design error can produce remediation costs that bear no relation to the fee that generated them, and section 393 of the Building Act 2004 leaves you exposed for up to ten years from the act or omission. What surprises many practices is that registration itself does not require cover: the Registered Architects Act 2005 contains no insurance provisions, and Engineering New Zealand requires PI neither for membership nor for CPEng. The requirements that do exist come from ADNZ, from producer statements and from client contracts. A statutory requirement for design professionals sits in the Building Amendment Bill and is expected to take effect in 2028.",
    avgCost: 'Set by fee income and limit',
    coverageNeeded: [
      'Professional Indemnity (not required for registration; required by ADNZ of self-employed Professional members, and by most client contracts)',
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
      { q: 'Is PI insurance mandatory for NZ architects?', a: "No. Registration under the Registered Architects Act 2005 does not require it, and neither the Act nor the Registered Architects Rules 2006 impose it — rule 50 mentions professional indemnity only as something your agreed terms of appointment with a client may include. There is no Architects Act 2022; this page previously said there was, and that was wrong. Engineering New Zealand does not require PI for membership or for CPEng either. Real requirements come from elsewhere: ADNZ requires a minimum of $250,000 from self-employed Professional members, a firm issuing a producer statement represents that it holds at least $200,000, and your client contracts set a limit of their own. A statutory requirement for design professionals sits in the Building Amendment Bill, introduced 2 July 2026 and expected to take effect in 2028. It is not law yet." },
      { q: 'What happens if an architectural error causes a structural defect?', a: "If your design error results in a structural defect, the building owner can make a claim against your business and, depending on the circumstances, against you. PI insurance covers your legal defence costs and any compensation awarded. In multi-party construction disputes New Zealand still applies joint and several liability, which is why a design consultant can be pursued for a loss much larger than their share of the work." },
      { q: 'Do subcontractors and specialist engineers need PI?', a: "No one requires it of them by law. Structural, geotechnical and building services consultants all carry professional liability, and a client or head contractor can pursue you directly for your part of a professional error, so the practical answer is that the exposure exists whether or not anyone mandates cover. If you issue producer statements, note the $200,000 minimum your firm is representing it holds when it does so." },
      { q: 'What is the difference between PI and construction liability insurance?', a: "PI covers professional errors in your design, advice or specifications. Public liability covers physical damage or injury arising from your business activities on or near a site. Architects and engineers generally need both — PI for the professional work, public liability for the physical exposure. Neither covers contractual penalties or project delays on their own." },
      { q: 'How long do I need to keep PI insurance after completing a project?', a: "Longer than most people assume, and the dates that matter run from the act or omission rather than from practical completion. The ordinary limitation period is six years under section 11 of the Limitation Act 2010, with a three-year late knowledge extension under section 14. Section 393 of the Building Act 2004 then imposes an absolute ten-year longstop on civil proceedings relating to building work. Because PI is claims-made, you need a policy in force when the claim is made, so run-off cover on retirement or wind-up has to outlast those periods — and your retroactive date has to reach back over the work itself." },
      { q: 'Does PI cover BIM modelling errors or specification software failures?', a: "Modern PI policies for architects and engineers generally respond to errors in professional work delivered using BIM, CAD or specification tools, because the professional judgement being examined is yours rather than the software. Wordings differ between underwriters, so check that the definition of professional services in your own policy recognises the services you actually provide, including digital design and project management." },
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    keyStats: [
      { label: 'Required for registration or CPEng', value: 'No' },
      { label: 'ADNZ self-employed Professional members', value: 'PI, minimum $250,000' },
      { label: 'Producer statement convention', value: 'PI, minimum $200,000' },
      { label: 'Government cost estimate, architects', value: '$1,500–$3,000 per person a year' },
    ],
    mandatoryRequirements: [
      'Law: the Registered Architects Act 2005 governs registration and the use of the title architect. It contains no insurance provisions, and there is no Architects Act 2022',
      'Law: the Registered Architects Rules 2006 mention PI once, at rule 50, as a permissive item in agreed terms of appointment — not an obligation to hold cover',
      'Membership body: Engineering New Zealand requires PI neither for membership nor for Chartered Professional Engineer status',
      'Membership body: ADNZ requires self-employed Professional members to hold PI with a minimum of $250,000',
      'Convention: a firm issuing a producer statement represents that it holds PI to a minimum of $200,000. Engineering New Zealand notes the figure is standard and unrelated to construction costs',
      'Client contract: for most practices this is the real requirement, and the limit specified in the appointment is what sets your cover',
      'Proposed law: the Building Amendment Bill, introduced 2 July 2026, would require design professionals to hold PI. Not law, no minimum limit proposed, expected to take effect in 2028',
      'Not a PI rule: Health and Safety at Work Act 2015 designer duties are a safety obligation and a reason to consider statutory liability cover',
    ],
    recommendedCover: [
      { type: 'Professional Indemnity — ADNZ members', minLimit: '$250,000', notes: 'ADNZ minimum for self-employed Professional members. A membership condition. It does not apply to NZRAB registration or to Engineering NZ membership.' },
      { type: 'Professional Indemnity — producer statements', minLimit: '$200,000', notes: 'What the issuing engineering firm represents it holds. Engineering New Zealand notes the figure is standard and unrelated to construction costs.' },
      { type: 'Professional Indemnity — client contracts', minLimit: 'Set by contract', notes: 'Usually higher than either published minimum, and the figure that actually binds you. Read the appointment before you buy the cover.' },
      { type: 'Public Liability', minLimit: 'Set by contract', notes: 'No statutory minimum. Construction contracts and councils commonly specify one for site attendance.' },
      { type: 'Statutory Liability', minLimit: 'Set by contract', notes: 'Covers defence costs and representation for unintentional regulatory breaches. It does not pay Health and Safety at Work Act fines — sections 29 and 30 of that Act make such an indemnity of no effect.' },
      { type: "Employers' Liability", minLimit: 'Set by contract', notes: 'No statutory minimum. Sits alongside ACC, which covers work injury.' },
    ],
    relatedCoverage: ['professional-indemnity', 'public-liability', 'statutory-liability', 'employers-liability', 'run-off-cover'],
    longFormContent: `
<div class="keyfact">
<p><strong>Three corrections to what this page used to say.</strong> There is no Architects Act 2022 and no Architects Licensing Board — architect registration is governed by the <strong>Registered Architects Act 2005</strong> and administered by the New Zealand Registered Architects Board. Registration does not require professional indemnity insurance, and neither does Engineering New Zealand membership or CPEng. And the mandatory PI requirement announced in November 2025 is not in force: it sits in the Building Amendment Bill and is expected to take effect in <strong>2028</strong>.</p>
</div>

<h2>Why Architects &amp; Engineers Need Professional Indemnity Insurance</h2>
<p>Few professions carry the physical consequences of professional error quite like architecture and engineering. When an accountant makes a mistake, the harm is financial. When an architect or engineer makes a mistake, the harm can be structural — a building that fails, a bridge that is unsafe, a residential development with defects that make it uninhabitable. The consequences are measured not just in dollars but in people's safety and livelihoods.</p>
<p>New Zealand's building and construction sector has been through a long period of scrutiny — the leaky buildings crisis, the Canterbury earthquakes, and continuing questions about construction quality. That history sits behind current underwriting appetite for design work. It has not, so far, produced a legal requirement to insure: around 90% of designers and engineers hold professional indemnity cover voluntarily, according to the official material behind the 2025 building reform announcement.</p>
<p>The November 2025 announcement is real, but it is not law. The Building Amendment Bill, introduced on 2 July 2026, would require professionals contributing to building design — the factsheet names architecture, design, engineering and certain building surveying services — to hold professional indemnity insurance. It is before select committee, submissions close at 11.59pm on Sunday 15 November 2026, and the requirement is expected to take effect in 2028 after a one-year lead-in once the Bill passes. The factsheet says expressly that it will not apply to builders. No minimum limit has been proposed.</p>
<p><a href="/coverage/professional-indemnity/">Professional indemnity insurance</a> for architects and engineers covers the professional work you perform: designs, specifications, calculations, inspections, project management advice, and certification. If your professional error results in a construction defect, client loss, or third-party claim, PI insurance covers your legal defence costs and any compensation awarded.</p>

<h2>What Registration Requires, and What It Does Not</h2>
<p>This is the part most pages get wrong, so we will be precise.</p>
<p><strong>Registered Architects Act 2005.</strong> This is the Act that governs architect registration, administered by the New Zealand Registered Architects Board. It contains no insurance provisions at all. The Registered Architects Rules 2006 mention professional indemnity exactly once, at rule 50, as one of the things your agreed terms of appointment with a client may include — a permissive item on a checklist, not an obligation to carry cover. Continuing registration turns on a five-yearly competence review plus CPD. The statutory instrument is a certificate of registration, not an annual practising certificate, which matters when a contract asks you to produce one.</p>
<p><strong>Engineering New Zealand.</strong> Neither membership nor Chartered Professional Engineer status requires PI. CPEng turns on a Washington Accord accredited qualification or equivalent, a competence assessment, the Code of Ethical Conduct, and reassessment at least every six years. The Chartered Professional Engineers of New Zealand Rules (No 2) 2002 contain no reference to insurance or indemnity.</p>
<p><strong>Producer statements.</strong> Here a real figure exists. Engineering New Zealand states that a firm issuing a producer statement represents that it holds professional indemnity insurance to a minimum of <strong>$200,000</strong>, and notes that this value is standard and unrelated to construction costs. It is a convention attached to the document, not a licensing rule.</p>
<p><strong>Architectural Designers New Zealand.</strong> ADNZ requires its self-employed Professional members — sole operators, directors, shareholders, partners — to hold PI with a minimum of <strong>$250,000</strong>, stated on its Professional membership application form. Note the scope: the requirement attaches to self-employed members, not to every member.</p>
<p><strong>NZIA.</strong> We are not going to tell you whether the New Zealand Institute of Architects requires PI. Its rules are not published and its membership pages are silent on insurance. Ask NZIA directly.</p>
<p><strong>Your client contracts.</strong> For most practices this is the actual requirement. Councils, institutional clients, developers and larger commercial clients specify a limit in the appointment, and that specified limit is what sets your cover.</p>
<p><strong>The Building Amendment Bill.</strong> Introduced 2 July 2026, before select committee, submissions closing 15 November 2026. It would require design professionals to hold PI, is expected to commence in 2028, and proposes no minimum limit — MBIE Regulatory Impact Statement of 18 November 2025 says the details of the scheme are yet to be developed and require further consultation. Law firm commentary reads the amendments as not requiring licensed building practitioners to carry insurance, and whether a Design-class LBP doing residential design will be caught is genuinely unresolved. We will update this page when the select committee reports.</p>
<p><strong>Health and Safety at Work Act 2015.</strong> As a designer you hold duties as a PCBU to ensure your design does not create risks during construction, use or demolition. That is a safety obligation, and a reason to look at statutory liability cover. It is not a PI requirement, and this page previously implied that it was.</p>

<h2>Common PI Claims Against Architects &amp; Engineers</h2>
<p>The claims landscape for architects and engineers reflects the high-value, long-tail nature of construction projects:</p>
<ul>
<li><strong>Structural design errors:</strong> Calculation errors in beam sizing, foundation design, or load distribution can result in structural failures that cost millions to remediate. These claims may not emerge until years after practical completion.</li>
<li><strong>Weathertightness failures:</strong> NZ's leaky building legacy continues to generate claims. Architects who specified or approved cladding systems, flashings, or joinery details that subsequently failed face significant exposure.</li>
<li><strong>Specification errors:</strong> Specifying the wrong grade of steel, incorrect concrete mix, or non-compliant material can result in costly remediation and project delays.</li>
<li><strong>Building consent and code compliance failures:</strong> If your design does not comply with the Building Code and a building consent is refused or a code compliance certificate is withheld, clients face delays and additional costs they may seek to recover from you.</li>
<li><strong>Project management and superintendence errors:</strong> Architects acting as contract superintendent can face claims for certifying work that was defective, under-certifying progress claims, or failing to identify non-compliant construction.</li>
<li><strong>Geotechnical and site assessment failures:</strong> Engineers who assess ground conditions and make recommendations on foundations face serious exposure if soil investigations prove insufficient or foundation design fails to account for actual site conditions.</li>
</ul>

<h2>What Cover Do Architects &amp; Engineers Need?</h2>
<p><a href="/coverage/professional-indemnity/">Professional indemnity insurance</a> is the primary cover for design professionals. Beyond PI, the following covers should be considered:</p>
<ul>
<li><strong><a href="/coverage/public-liability/">Public liability insurance:</a></strong> Covers bodily injury or property damage arising from your business activities. Essential for any site attendance. Construction contracts commonly specify a limit; read the one you are signing rather than assuming a market standard.</li>
<li><strong><a href="/coverage/statutory-liability/">Statutory liability insurance:</a></strong> Covers defence costs and representation for unintentional breaches of legislation such as the Building Act 2004 and resource consent conditions. It does not pay Health and Safety at Work Act fines, and no policy can — sections 29 and 30 of that Act make such an indemnity of no effect and make entering into one an offence.</li>
<li><strong><a href="/coverage/employers-liability/">Employers' liability insurance:</a></strong> Required if you employ professional staff, graduates, or site observers. Complements ACC cover for workplace injury claims.</li>
<li><strong><a href="/coverage/run-off-cover/">Run-off cover:</a></strong> Important when retiring or winding up. Claims relating to building work can be brought up to the absolute ten-year longstop in section 393 of the Building Act 2004, running from the act or omission. No official document sets a required run-off duration, so how long you buy is a commercial decision — make it against those dates rather than against a rule of thumb.</li>
</ul>

<h2>What PI Costs an Architect or Engineer</h2>
<p>One New Zealand figure is citable and we are going to use only it. The Government states that professional indemnity insurance for architects typically costs between <strong>$1,500 and $3,000 per person each year</strong>, often covered by the firm. The range appears in the Beehive factsheet of 24 November 2025 and in the Cabinet paper of 18 November 2025. Treat it as what it is: a government estimate published to support a policy decision, with no methodology attached. It is not a quote, it is framed around architects rather than every discipline on this page, and it will not match every practice.</p>
<p>This page previously published a monthly premium range and a worked example for a practice with $300,000 of fee income. Neither had a source and both have been removed. No New Zealand insurer, professional body or official source publishes premium tables for this market — cover is broker-distributed and individually underwritten. One further piece of official context: around 90% of designers and engineers already hold PI cover voluntarily.</p>
<p>What actually moves your premium:</p>
<ul>
<li><strong>Limit of indemnity.</strong> Usually set for you by the appointment you sign.</li>
<li><strong>Fee income.</strong> The primary rating base.</li>
<li><strong>Work type and discipline.</strong> Residential construction, structural and geotechnical work rate materially harder. We describe that qualitatively because no one publishes the loadings.</li>
<li><strong>Claims and notification history</strong>, including notified circumstances that never became claims.</li>
<li><strong>Excess.</strong> A higher deductible reduces premium and increases what you carry yourself.</li>
<li><strong>Retroactive date and run-off.</strong> With a ten-year longstop behind you, prior acts cover is a genuine price lever.</li>
<li><strong>Whether defence costs sit inside or outside the limit.</strong></li>
</ul>
<p>Our <a href="/pi-insurance-cost/">cost guide</a> works through the same factors. The only way to a number is a quote.</p>

<h2>How Much Cover Do You Need?</h2>
<p>No New Zealand law sets a minimum for design work, and the Building Amendment Bill proposes none. Law firm commentary makes the obvious point that, absent a legislative minimum, it is likely the insurers will have the final say. Two published minimums exist, and both are lower than people expect:</p>
<ul>
<li><strong>$200,000</strong> — what an engineering firm represents it holds when it issues a producer statement. Engineering New Zealand notes the figure is standard and unrelated to construction costs.</li>
<li><strong>$250,000</strong> — the ADNZ minimum for self-employed Professional members.</li>
</ul>
<p>In practice the figure in your client contract will be higher than either, and that is the figure that binds you. Set your limit from the appointments you actually sign, from the exposure your work creates rather than the fee it earns, and with attention to whether defence costs erode the limit. We are not going to publish a table of recommended limits by project value, because there is no New Zealand source for one.</p>

<h2>Key Considerations When Choosing a PI Policy</h2>
<ul>
<li><strong>Retroactive date:</strong> Building defect claims emerge years after construction. <a href="/blog/claims-made-vs-occurrence-pi-insurance-nz/">Claims-made PI insurance</a> requires a policy in force when the claim is made, with a retroactive date that covers the original work. Protect your retroactive date carefully.</li>
<li><strong>Run-off provisions:</strong> The dates that matter run from the act or omission, not from practical completion — six years under section 11 of the Limitation Act 2010, extendable by three years for late knowledge under section 14, with an absolute ten-year longstop on building work under section 393 of the Building Act 2004. Your <a href="/coverage/run-off-cover/">run-off cover</a> has to outlast those periods, and no official document sets a required duration, so this is a commercial decision to make before you need it.</li>
<li><strong>Scope of covered services:</strong> Ensure the policy covers all your professional activities: design, specification, contract administration, project management, and any specialist services such as building consent preparation or energy assessments.</li>
<li><strong>Joint and several liability, for now:</strong> New Zealand currently applies joint and several liability in multi-party construction disputes, which is why a design consultant can be pursued for far more than their share of a loss. A move to proportionate liability is part of the same building reform package announced in November 2025 and is not in force. Do not set your limit on the assumption that it is.</li>
<li><strong>Insurer expertise:</strong> PI for design professionals is a specialist market with a small number of participants. We do not publish a panel list here — which markets suit your discipline and claims history is a conversation to have with your adviser.</li>
</ul>

<h2>Getting Quoted — What Information You Need</h2>
<p>To obtain a PI quote for your architecture or engineering practice, prepare the following:</p>
<ul>
<li>Annual gross fee income for the current and previous two years</li>
<li>Description of the types of projects you work on (residential, commercial, industrial, infrastructure)</li>
<li>Typical project values</li>
<li>Services provided (design only, contract administration, project management, etc.)</li>
<li>LBP licence class, CPEng status, or NZRAB registration details</li>
<li>Number of principals and professional staff</li>
<li>Any prior claims or circumstances in the last five years</li>
<li>Required cover limit (check your contracts)</li>
</ul>
<p><a href="/contact/">Contact us</a> to be connected with a licensed insurance adviser who can <a href="/compare/">compare PI options</a> for design professionals.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.legislation.govt.nz/act/public/2005/0038/latest/whole.html" rel="nofollow noopener" target="_blank">Registered Architects Act 2005</a></li>
<li><a href="https://www.legislation.govt.nz/regulation/public/2006/0161/latest/whole.html" rel="nofollow noopener" target="_blank">Registered Architects Rules 2006</a>, rule 50</li>
<li><a href="https://www.nzrab.nz/c/Ongoing-Requirements" rel="nofollow noopener" target="_blank">NZRAB — Ongoing requirements for registration</a></li>
<li><a href="https://www.engineeringnz.org/join-us/cpeng/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Chartered Professional Engineer</a></li>
<li><a href="https://www.legislation.govt.nz/regulation/public/2002/0389/latest/whole.html" rel="nofollow noopener" target="_blank">Chartered Professional Engineers of New Zealand Rules (No 2) 2002</a></li>
<li><a href="https://www.engineeringnz.org/engineer-tools/engineering-documents/producer-statements/professional-indemnity-insurance-why-200000/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Professional indemnity insurance: why $200,000?</a></li>
<li><a href="https://adnz.org.nz/professional" rel="nofollow noopener" target="_blank">ADNZ — Professional membership</a></li>
<li><a href="https://www.beehive.govt.nz/sites/default/files/2025-11/Consumer%20protections%20for%20building%20consent%20system%20reforms%20factsheet.pdf" rel="nofollow noopener" target="_blank">Consumer protections for building consent system reforms — factsheet (PDF)</a>, 24 November 2025</li>
<li><a href="https://www.mbie.govt.nz/dmsdocument/31701-regulatory-impact-statement-supporting-mechanisms-for-proportionate-liability-in-the-building-and-construction-sector-proactiverelease-pdf" rel="nofollow noopener" target="_blank">MBIE — Regulatory Impact Statement, proportionate liability (PDF)</a>, 18 November 2025</li>
<li><a href="https://www.building.govt.nz/about-building-performance/all-news-and-updates/building-amendment-bill-introduced-to-parliament" rel="nofollow noopener" target="_blank">Building Performance — Building Amendment Bill introduced to Parliament</a>, 2 July 2026</li>
<li><a href="https://www.legislation.govt.nz/act/public/2004/0072/latest/DLM309340.html" rel="nofollow noopener" target="_blank">Building Act 2004, section 393</a></li>
<li><a href="https://www.legislation.govt.nz/act/public/2010/0110/latest/whole.html" rel="nofollow noopener" target="_blank">Limitation Act 2010</a>, sections 11 and 14</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal or financial advice. We are an information and referral service, not an insurer; the advisers we refer you to are licensed. Confirm your own obligations with NZRAB, Engineering New Zealand, your membership body and your client contracts.</p>
</div>
`,
  },
  {
    slug: 'it-consultants',
    name: 'IT Consultants & Developers',
    icon: '💻',
    shortDesc: 'Professional indemnity and cyber liability insurance for IT professionals, software developers and technology consultants.',
    description: "IT consultants and software developers face a liability that is routinely larger than the fee: a system outage, a data loss or a security failure can cost a client far more than the project that caused it. Nothing in New Zealand law requires you to hold professional indemnity cover, and no membership body we could find requires it either. The requirement, when you have one, is contractual — it comes from the client agreement you sign, and that agreement also sets the limit.",
    avgCost: 'Set by fee income and limit',
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
      { q: 'Do freelance developers need PI insurance?', a: "No law requires it, and we could find no New Zealand membership body that requires it of IT professionals. In practice the requirement usually arrives in a client contract: enterprise and public sector agreements commonly specify a professional indemnity limit and ask you to evidence it before work starts. Read the contract, because the limit it names is the one that binds you. We do not publish a starting premium for freelancers — New Zealand PI is broker-distributed and individually underwritten, and no insurer here publishes rates." },
      { q: 'What is the difference between PI and cyber insurance for IT professionals?', a: "PI covers claims arising from professional errors, omissions or negligence in the services you provide. Cyber insurance covers first-party costs — your own breach, data recovery, notification, business interruption — and third-party claims from others affected by it. They answer different questions, and IT professionals commonly hold both. Wordings differ, so check where one ends and the other begins in your own policies." },
      { q: 'Does PI cover claims from open source or third-party components?', a: "It depends on the policy and the circumstances. If a client suffers loss because of a vulnerability in a third-party component you selected, integrated or failed to patch in systems you managed, you may face a claim, and PI generally responds to your legal defence costs and any compensation subject to the policy terms. The definition of professional services in your wording is what decides it." },
      { q: 'Does PI insurance cover project delays and cost overruns?', a: "PI responds to claims arising from your professional negligence, which can include project management failures that cause significant delay or overrun. Pure commercial disputes about price or scope, where no negligence is alleged, are typically not covered. That distinction matters more than any figure on the schedule." },
      { q: 'What PI limits do government agencies require for IT contractors?', a: "We are not going to publish a number. This page previously stated limits of $1 million to $5 million for New Zealand government IT contracts, and we could not source those figures to any published procurement document. Limits are set contract by contract. Ask the agency or read the panel terms — the figure in your own agreement is the only one that matters, and it will also drive your premium." },
      { q: 'Is intellectual property infringement covered under PI insurance?', a: "Many PI policies for IT professionals include cover for unintentional intellectual property infringement — for example where code you delivered incorporates third-party IP without a proper licence and the client is sued as a result. Deliberate infringement is not covered. Check the IP provisions in your own wording, because this is one of the clauses that varies most between underwriters." },
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80',
    author: 'sarah-thompson',
    keyStats: [
      { label: 'Required by New Zealand law', value: 'No' },
      { label: 'Required by a membership body', value: 'None that we could find' },
      { label: 'Usual source of the requirement', value: 'Your client contract' },
      { label: 'Published NZ premium data', value: 'None exists' },
    ],
    mandatoryRequirements: [
      'Law: no New Zealand statute requires an IT consultant, developer or managed services provider to hold PI',
      'Membership body: we could find no New Zealand IT membership body that makes PI a condition of membership. This page previously said ISANZ encouraged it; that claim was not sourced and has been removed',
      'Client contract: this is the real requirement for most IT firms. Enterprise, agency and panel agreements commonly specify a limit and ask for a certificate of currency',
      'Not a PI rule: the Privacy Act 2020 creates breach obligations if you handle personal information. That is a reason to consider PI and cyber cover, not a rule that you must hold either',
    ],
    recommendedCover: [
      { type: 'Professional Indemnity', minLimit: 'Set by contract', notes: 'No statutory or membership minimum in New Zealand. The limit named in your client agreement is the one that binds you.' },
      { type: 'Cyber Liability', minLimit: 'Set by contract', notes: 'No statutory minimum. Relevant to any firm accessing or managing client data or systems, and increasingly specified in contracts alongside PI.' },
      { type: 'Public Liability', minLimit: 'Set by contract', notes: 'No statutory minimum. Commonly required for site access at client premises.' },
      { type: "Employers' Liability", minLimit: 'Set by contract', notes: 'No statutory minimum. Sits alongside ACC, which covers work injury.' },
    ],
    relatedCoverage: ['professional-indemnity', 'public-liability', 'employers-liability', 'run-off-cover'],
    longFormContent: `
<div class="keyfact">
<p><strong>Nobody in New Zealand requires this of you by law.</strong> There is no statute and, as far as we can find, no membership body that makes professional indemnity insurance a condition of working in IT here. The requirement almost always arrives in a client contract — and that contract, not a regulator or a professional standard, is what sets your limit. This page previously quoted government procurement minimums in dollars; those figures were not sourced and have been removed.</p>
</div>

<h2>Why IT Consultants &amp; Developers Need Professional Indemnity Insurance</h2>
<p>Technology underpins virtually every modern business. When technology fails, businesses lose revenue, customer trust, and sometimes irreplaceable data. As the IT professional who designed, built, or maintained the system that failed, you can be held professionally responsible for those losses — even when the failure arose from factors partly outside your control.</p>
<p>Consider a few realistic scenarios facing IT professionals:</p>
<ul>
<li>A custom software application you built for a local retailer crashes during a peak sales period, resulting in $200,000 in lost sales. The client claims the bug was introduced in your last update.</li>
<li>You implemented a cloud migration for a professional services firm. A misconfigured access policy exposes client data. The firm faces Privacy Act obligations, client claims, and significant remediation costs — and holds you responsible.</li>
<li>A cybersecurity consultancy engagement you conducted failed to identify a critical vulnerability. Three months later, the client is breached. They claim your assessment was negligent.</li>
</ul>
<p>In each case, <a href="/coverage/professional-indemnity/">professional indemnity insurance</a> steps in to cover your legal defence costs and any compensation awarded — protecting you from claims that could otherwise be financially devastating. For IT professionals, the scale of potential claims frequently dwarfs the value of the original contract.</p>

<h2>Who Requires PI of an IT Consultant</h2>
<p>Short answer: your clients, and nobody else.</p>
<p><strong>No statute.</strong> Unlike some regulated professions, there is no New Zealand law that makes professional indemnity insurance a condition of providing IT services. Nothing about the work is licensed in that sense.</p>
<p><strong>No membership body requirement we could verify.</strong> This page used to say that ISANZ members were encouraged to hold PI. We could not source that, so it is gone. If a New Zealand IT body does impose a PI condition on its members, tell us and we will publish it with the citation.</p>
<p><strong>Client contracts.</strong> This is where the obligation actually lives. Enterprise agreements, agency contracts and panel arrangements commonly require a professional indemnity policy and a certificate of currency, and they name the limit. We are not going to tell you what New Zealand government agencies require, because we could not find a published figure to cite — read the panel terms or ask the agency, and note that the contractual limit will be one of the largest drivers of your premium.</p>
<p><strong>The Privacy Act 2020 is not a PI rule.</strong> If you handle, store or process personal information for clients, a breach can trigger notification obligations, an inquiry from the Privacy Commissioner and claims from the people affected. That is a reason to look hard at cyber and PI cover. It is not a legal requirement to hold either, and pages that present it as one are blurring two different things.</p>

<h2>Common PI Claims Against IT Consultants</h2>
<p>The claims that arise against IT professionals are increasingly sophisticated and expensive:</p>
<ul>
<li><strong>Software defects and system failures:</strong> Bugs in custom software, integration errors, or platform failures that cause system downtime are the most frequent source of PI claims against developers. Clients claim lost revenue, additional costs, and reputational damage.</li>
<li><strong>Data loss and corruption:</strong> Errors in database management, backup systems, or data migration can result in the permanent loss of critical business data. These claims can be extremely expensive to quantify and settle.</li>
<li><strong>Cybersecurity failures:</strong> IT consultants engaged to implement or assess security controls can face claims if a subsequent breach reveals that their work was inadequate. The rise of ransomware and sophisticated phishing attacks has made this a rapidly growing claim category.</li>
<li><strong>Project delays and budget overruns:</strong> Where a project management failure causes significant delay and cost overrun beyond reasonable variation, clients may allege professional negligence. The distinction between commercial dispute and professional negligence matters enormously for PI coverage.</li>
<li><strong>Intellectual property infringement:</strong> If code you developed incorporates third-party IP without proper licencing, your client may face an IP claim and turn to you for indemnification.</li>
<li><strong>Privacy and data breach claims:</strong> Consultants who implement systems that subsequently cause privacy breaches can face both regulatory and civil claims. Privacy Act 2020 has strengthened the framework for these claims.</li>
</ul>

<h2>What Cover Do IT Consultants Need?</h2>
<p><a href="/coverage/professional-indemnity/">Professional indemnity insurance</a> and cyber liability insurance work as a complementary pair for IT professionals — and advisers strongly recommend holding both:</p>
<ul>
<li><strong>PI insurance:</strong> Covers claims from clients arising from professional errors, omissions, or negligence in your services. This is your primary protection against the scenarios described above.</li>
<li><strong>Cyber liability insurance:</strong> Covers your own costs if your business suffers a cyberattack or data breach — including forensic investigation, notification costs, ransom payments (if covered), business interruption, and third-party claims from those affected by your breach. As an IT professional, your own systems and data may be high-value targets.</li>
<li><strong><a href="/coverage/public-liability/">Public liability insurance:</a></strong> Required if you attend client premises or provide on-site services. Covers bodily injury or property damage arising from your activities.</li>
<li><strong><a href="/coverage/employers-liability/">Employers' liability insurance:</a></strong> Essential if you employ developers, QA testers, or project managers.</li>
</ul>

<h2>What PI Costs an IT Consultant</h2>
<p>We have removed the monthly ranges and the worked examples this page used to carry. They were not sourced. There is no public New Zealand professional indemnity premium dataset: cover is broker-distributed and individually underwritten, the main New Zealand PI underwriters publish no pricing, and the only official cost figures that exist in this country relate to architects and to law firms. Neither transfers to technology work.</p>
<p>What an underwriter actually rates on:</p>
<ul>
<li><strong>Limit of indemnity</strong>, which your client contract usually decides.</li>
<li><strong>Annual revenue</strong>, the primary rating base.</li>
<li><strong>What you actually do.</strong> Custom development, security consulting and managed services are looked at differently from staff augmentation or training. Qualitative, because nobody publishes the loadings.</li>
<li><strong>Client sector and data sensitivity.</strong> Health, financial and government data raises the stakes of a failure.</li>
<li><strong>Claims and notification history.</strong></li>
<li><strong>Excess</strong>, and whether defence costs sit inside or outside the limit.</li>
<li><strong>Retroactive date</strong>, since PI is claims-made and prior acts cover is a real price lever.</li>
</ul>
<p>Our <a href="/pi-insurance-cost/">cost guide</a> covers the same ground. A quote is the only way to a number.</p>

<h2>How Much Cover Do You Need?</h2>
<p>Start with the contract. In IT the limit is nearly always a contractual number rather than a professional one, and there is no New Zealand minimum for us to point you at. Three checks are worth more than any recommended table:</p>
<ul>
<li><strong>What each client agreement specifies</strong>, including panel terms you signed years ago. The highest figure across your live contracts is your practical floor.</li>
<li><strong>The scale of loss your work can cause</strong>, which for systems work is usually the client revenue that depends on the system, not the value of your engagement.</li>
<li><strong>Whether defence costs erode the limit.</strong> Technology disputes are expensive to defend even when you win.</li>
</ul>
<p>For a sense of what New Zealand bodies set when they do set a number, the published minimums elsewhere run from $200,000 for an engineering firm issuing a producer statement to $1.2 million for a law practice. None of them applies to IT, but they are real figures, which is more than can be said for the limits that circulate for this sector.</p>

<h2>Key Considerations When Choosing a PI Policy</h2>
<ul>
<li><strong>Retroactive date:</strong> <a href="/blog/claims-made-vs-occurrence-pi-insurance-nz/">Claims-made PI</a> means a policy must be in force when the claim is made. A retroactive date set too recently may leave you unprotected for work done in prior years.</li>
<li><strong>Definition of professional services:</strong> Ensure the policy covers all your activities: software development, cybersecurity, cloud services, IT project management, managed services. Gaps can leave you unprotected.</li>
<li><strong>Technology-specific extensions:</strong> Look for policies with IT-specific endorsements covering: network security liability, media liability, and technology errors and omissions.</li>
<li><strong>Cyber liability integration:</strong> Some policies combine PI and cyber in a single technology professional liability form. This can simplify coverage and reduce the risk of gaps between separate policies.</li>
<li><strong><a href="/coverage/run-off-cover/">Run-off cover:</a></strong> Important when you close a contract or wind down your consultancy — claims can arise months or years after a project is complete.</li>
</ul>

<h2>Getting Quoted — What Information You Need</h2>
<p>To get a PI quote for your IT consultancy or development practice, prepare:</p>
<ul>
<li>Annual gross revenue and number of staff or contractors</li>
<li>Description of the IT services you provide</li>
<li>Types of clients you work with (government, enterprise, SME, healthcare, finance)</li>
<li>Types of data you access or manage (personal data, financial data, health records)</li>
<li>Any existing PI or cyber insurance details</li>
<li>Prior claims history</li>
<li>Specific contract PI requirements if known</li>
</ul>
<p><a href="/contact/">Contact our team</a> to be connected with a licensed insurance adviser who can <a href="/compare/">compare PI and cyber options</a> for technology businesses.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.legislation.govt.nz/act/public/2010/0110/latest/whole.html" rel="nofollow noopener" target="_blank">Limitation Act 2010</a>, sections 11 and 14 — the six-year period and the three-year late knowledge extension that set how long your exposure runs</li>
<li><a href="https://www.lawsociety.org.nz/professional-practice/practising-well/benchmarking-costs-of-law-practice-in-new-zealand/" rel="nofollow noopener" target="_blank">NZ Law Society and KPMG — Benchmarking costs of law practice in New Zealand</a>, March 2024. The only published New Zealand PI cost dataset we are aware of, and it covers law firms.</li>
</ul>
<p>There is no New Zealand regulator or membership body PI requirement for IT consultants for us to cite, because as far as we can establish none exists. If you know of one, tell us and we will publish it with the source. Last reviewed 7 September 2026. General information only, not legal or financial advice. We are an information and referral service, not an insurer; the advisers we refer you to are licensed.</p>
</div>
`,
  },
  {
    slug: 'financial-advisers',
    name: 'Financial Advisers',
    icon: '💰',
    shortDesc: 'Professional indemnity insurance for financial advisers, mortgage brokers and investment advisers under FMCA.',
    description: "Financial advisers giving regulated advice to retail clients operate under the Financial Markets Conduct Act 2013 and a Financial Advice Provider licence. Professional indemnity insurance is not one of the conditions of that licence. The FMA consulted on adding a PI condition in June 2020 and decided against it in November 2020, and PI appears nowhere in the Code of Professional Conduct. The exposure is real all the same: advice claims turn on whether what you recommended suited the client, and they tend to surface years after the advice was given.",
    avgCost: 'Set by fee income and limit',
    coverageNeeded: [
      'Professional Indemnity (not an FMA licence condition — a commercial decision, or a dealer group or client requirement)',
      'Public Liability',
      'Cyber Liability (for client data)',
      "Employers' Liability (for practices with staff)",
    ],
    keyRisks: [
      'Investment advice leading to client losses',
      'Mortgage advice errors or missed product options',
      'Insurance advice failures (wrong product recommended)',
      'Regulatory breaches and FMA investigations',
      'Breach of the FMCA or the Code of Professional Conduct',
      'Client data breaches and privacy failures',
    ],
    faqs: [
      { q: 'Is PI insurance mandatory for NZ financial advisers?', a: "No. Professional indemnity insurance is not a condition of an FMA financial advice provider licence. The seven standard conditions cover record keeping, an internal complaints process, regulatory returns, outsourcing, business continuity and technology systems, ongoing requirements, and notification of material changes. None of them is insurance. The FMA consulted on adding a PI condition on 17 June 2020 and announced on 6 November 2020 that it had decided not to. PI is not in the Code of Professional Conduct for Financial Advice Services either, and there is no obligation to disclose whether you hold it. This page previously said PI was a licence condition. That was wrong, and it has been corrected." },
      { q: 'What level of PI cover does a financial adviser need?', a: "No regulator sets a level, because no regulator requires the cover. We are not going to publish a market range in its place. The limit is a commercial judgement: what a dealer group or FAP requires of you in writing, what your client agreements specify, the size of the portfolios or sums insured your advice moves, and whether defence costs erode your limit. Discuss it with an adviser who can see your actual book." },
      { q: 'Does PI insurance cover FMA investigations?', a: "Many PI policies respond to investigation costs and legal representation in regulatory proceedings, including FMA investigations, but this is one of the most variable parts of the market. Some wordings engage only once formal action is taken, some cover the earlier inquiry stage, and treatment of fines differs and depends on what is insurable at law. Read your own schedule and wording." },
      { q: 'What happens if a client loses money following my advice?', a: "A loss alone does not create liability — markets fall, and that is a normal outcome. A PI claim requires the client to allege that your advice was negligent or that you breached a professional duty. PI insurance covers your legal defence costs and any compensation awarded if such a claim proceeds." },
      { q: 'Do financial advisers need cyber insurance as well as PI?', a: "They are different covers answering different problems. You hold sensitive client financial data, and a breach can trigger Privacy Act 2020 obligations, notification costs and claims from the people affected — first-party exposure that a PI policy is not designed to meet. Neither cover is required of you by the FMA. Both are commercial decisions." },
      { q: 'What is run-off cover and why does it matter for financial advisers?', a: "Run-off cover maintains PI protection after you cease practice or your licence ends. Because PI is claims-made, the policy that responds is the one in force when the claim is made, not the one in force when you gave the advice. Once cover lapses you are exposed for past advice — and under the Limitation Act 2010 a claim can be brought up to six years from the act or omission, extended by up to three more years where the claimant only later knew of it. Sort your run-off before you need it." },
    ],
    image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    keyStats: [
      { label: 'PI a condition of an FMA FAP licence', value: 'No' },
      { label: 'FMA standard conditions', value: 'Seven — none require insurance' },
      { label: 'FMA consultation on adding PI', value: 'Decided against, 6 November 2020' },
      { label: 'PI in the Code of Professional Conduct', value: 'Not mentioned' },
    ],
    mandatoryRequirements: [
      'None imposed by the regulator. PI is not a condition of an FMA financial advice provider licence',
      'The seven standard conditions are record keeping, internal complaints process, regulatory returns, outsourcing, business continuity and technology systems, ongoing requirements, and notification of material changes',
      'The FMA consulted on adding a PI condition on 17 June 2020 and decided against it on 6 November 2020',
      'Code: the Code of Professional Conduct for Financial Advice Services does not require PI, and there is no obligation to disclose whether you hold it',
      'Commercial: dealer groups, and the FAPs that advisers operate under, commonly impose a PI requirement of their own. That is a contract between you and them — ask for the clause in writing',
      'Client contract: wholesale and institutional clients sometimes specify a limit in the engagement',
    ],
    recommendedCover: [
      { type: 'Professional Indemnity', minLimit: 'No regulatory minimum', notes: 'The FMA sets no PI condition and therefore no limit. Any figure you must meet comes from your dealer group, the FAP you operate under, or a client contract.' },
      { type: 'Public Liability', minLimit: 'Set by contract', notes: 'No statutory minimum. Landlords and venues commonly specify a figure if clients or seminar attendees visit.' },
      { type: 'Cyber Liability', minLimit: 'Set by contract', notes: 'No statutory minimum. First-party breach costs sit here rather than under PI.' },
      { type: "Employers' Liability", minLimit: 'Set by contract', notes: 'No statutory minimum. Sits alongside ACC, which covers work injury.' },
    ],
    relatedCoverage: ['professional-indemnity', 'public-liability', 'employers-liability', 'run-off-cover', 'management-liability'],
    longFormContent: `
<div class="keyfact">
<p><strong>PI is not an FMA licence condition.</strong> The seven standard conditions on a full financial advice provider licence are record keeping, an internal complaints process, regulatory returns, outsourcing, business continuity and technology systems, ongoing requirements, and notification of material changes. Insurance is not among them. The FMA consulted on adding professional indemnity on 17 June 2020 and <strong>decided against it on 6 November 2020</strong>. It is not in the Code of Professional Conduct either, and you do not have to disclose whether you hold it. This page used to say PI was mandatory under the FMCA. That was wrong.</p>
</div>

<h2>Why Financial Advisers Need Professional Indemnity Insurance</h2>
<p>The relationship between a financial adviser and their client is built on trust. Clients share their financial goals, risk appetite, and life savings with you — and act on your recommendations in ways that can profoundly affect their financial security. When advice leads to an outcome the client did not expect, and when the client believes your advice was negligent or unsuitable, a professional indemnity claim is a very real possibility.</p>
<p>NZ financial advisers face a demanding regulatory environment under the Financial Markets Conduct Act 2013. The FAP licensing regime, the Code of Professional Conduct for Financial Advice Services, and ongoing FMA monitoring create a framework where professional standards are clearly defined and expected to be met. This same framework sets the context for PI claims — when a client or regulator alleges that standards were not met, you need PI insurance to fund your defence and cover any compensation.</p>
<p>The financial advice sector has also seen a significant increase in client expectations in recent years. Clients who experience investment losses during market downturns, or who feel they received advice that did not account for their full circumstances, are increasingly willing to make formal complaints and PI claims. For New Zealand financial advisers, <a href="/coverage/professional-indemnity/">professional indemnity insurance</a> is not a regulatory requirement at all. That makes it a commercial decision, which is a different conversation and a more honest one.</p>

<h2>What the Licence Actually Requires</h2>
<p>The regulatory position is the opposite of what most insurance pages state, so here it is in detail.</p>
<p><strong>The FMCA and the FAP licence.</strong> Anyone giving regulated financial advice to retail clients must do so under a Financial Advice Provider licence, either their own or one they are engaged under. That much is correct. What follows from it is not: the FMA attaches seven standard conditions to a full FAP licence, and they are record keeping, an internal complaints process, regulatory returns, outsourcing, business continuity and technology systems, ongoing requirements, and notification of material changes. Professional indemnity insurance is not one of them.</p>
<p><strong>The FMA considered requiring it, and said no.</strong> On 17 June 2020 the FMA consulted on standard conditions for full FAP licences, and the consultation put a professional indemnity insurance condition on the table. On 6 November 2020, when it released the final standard conditions, the FMA announced that it had decided not to impose one. That decision has not been reversed.</p>
<p><strong>The Code does not require it either.</strong> The Code of Professional Conduct for Financial Advice Services sets standards of ethical behaviour, conduct, client care, competence, knowledge and skill. It says nothing about holding insurance. Nor is there a disclosure obligation attached to PI: the disclosure regulations do not require you to tell clients whether you are insured.</p>
<p><strong>Where a requirement can still come from.</strong> Two places, and both are contractual. If you operate under another entity's FAP licence, or belong to a dealer group, that agreement may require you to hold PI at a stated limit — get the clause in writing, because it is enforceable against you in a way the licence conditions are not. And wholesale or institutional clients sometimes specify a limit in the engagement.</p>
<p><strong>Why hold it anyway.</strong> Because the cost of defending an advice complaint does not depend on whether anyone required you to insure it. Suitability claims are argued over the file you kept at the time, they arrive long after the advice, and legal costs accrue whether or not the allegation is sound.</p>

<h2>Common PI Claims Against Financial Advisers</h2>
<p>Understanding what triggers PI claims helps financial advisers manage their professional risk:</p>
<ul>
<li><strong>Unsuitable investment recommendations:</strong> The most common category of PI claim. If a client alleges that an investment recommendation was unsuitable for their risk profile, time horizon, or financial circumstances, and they suffered a loss, you may face a claim — regardless of market conditions.</li>
<li><strong>Portfolio management errors:</strong> Discretionary investment managers face claims for failure to rebalance, failure to manage risk, or trading errors. Non-discretionary advisers can face claims for failing to recommend timely adjustments.</li>
<li><strong>Insurance advice failures:</strong> Advising clients to hold, surrender, or switch insurance policies creates professional liability. If a client is underinsured or uninsured following your advice, and suffers an uninsured loss, a claim can follow.</li>
<li><strong>KiwiSaver advice:</strong> With most New Zealanders having KiwiSaver balances, advice about fund selection, contribution rates, and withdrawal strategies is increasingly a source of PI exposure.</li>
<li><strong>Failure to disclose conflicts of interest:</strong> Under the Code and FMCA, advisers must disclose commissions and conflicts of interest. Failure to do so can result in both regulatory action and PI claims.</li>
<li><strong>FMA investigation costs:</strong> Even where no PI compensation is ultimately paid, the cost of responding to an FMA investigation — including legal representation and document production — can be significant. PI policies typically cover these investigation costs.</li>
</ul>

<h2>What Cover Do Financial Advisers Need?</h2>
<p><a href="/coverage/professional-indemnity/">Professional indemnity insurance</a> is the core cover for an advice business, though nothing in the licensing regime mandates it. Beyond PI:</p>
<ul>
<li><strong><a href="/coverage/public-liability/">Public liability insurance:</a></strong> Required if clients visit your office for advice meetings or you conduct seminars and events. Covers bodily injury and property damage claims.</li>
<li><strong>Cyber liability insurance:</strong> Financial advisers hold extremely sensitive client data — investment records, bank account details, identification documents. A data breach can trigger Privacy Act obligations and client claims. Cyber cover is strongly recommended.</li>
<li><strong><a href="/coverage/management-liability/">Management liability insurance:</a></strong> For larger advice businesses, management liability cover provides protection against employment disputes, directors and officers claims, and other business management risks beyond PI.</li>
<li><strong><a href="/coverage/employers-liability/">Employers' liability insurance:</a></strong> For practices with employed advisers, paraplanners, or administrative staff.</li>
<li><strong><a href="/coverage/run-off-cover/">Run-off cover:</a></strong> Critical on retirement or licence surrender. Financial advice claims can arise years after the advice was given — particularly for investment and insurance advice given at life stage transitions.</li>
</ul>

<h2>What PI Costs a Financial Adviser</h2>
<p>The monthly range and the worked examples that used to sit here had no source, and they have been removed. There is no public New Zealand professional indemnity premium dataset. Cover is broker-distributed and individually underwritten, the main New Zealand PI underwriters publish no pricing, and no industry body publishes premiums for advice businesses. The only official New Zealand cost figures that exist anywhere relate to architects and to law firms, and neither has anything to say about financial advice.</p>
<p>What an underwriter actually rates on:</p>
<ul>
<li><strong>Limit of indemnity</strong>, usually set by a dealer group or client requirement rather than by you.</li>
<li><strong>Revenue, and funds under management or advice</strong> where relevant.</li>
<li><strong>Advice categories.</strong> Investment, KiwiSaver, insurance and mortgage advice are looked at differently, and a mixed book is generally rated on its hardest element. Qualitative, because nobody publishes the loadings.</li>
<li><strong>Client profile</strong>, retail or wholesale.</li>
<li><strong>Claims, complaints and regulatory history</strong>, including matters notified but not yet claims.</li>
<li><strong>Excess</strong>, and whether defence costs sit inside or outside the limit.</li>
<li><strong>Retroactive date and run-off.</strong> Advice claims arrive late, so prior acts cover is a genuine price lever.</li>
</ul>
<p>Our <a href="/pi-insurance-cost/">cost guide</a> works through the same factors. A quote is the only way to a number.</p>

<h2>How Much Cover Do You Need?</h2>
<p>There is no regulatory answer, because there is no regulatory requirement. Anyone quoting you a standard adviser limit is quoting market habit, not a rule. Work from what you can verify:</p>
<ul>
<li><strong>What your dealer group or licensing FAP requires in writing.</strong> This is usually the binding number.</li>
<li><strong>What your client agreements specify</strong>, particularly wholesale and institutional ones.</li>
<li><strong>The size of the decisions your advice moves.</strong> A single portfolio or a single sum insured can dwarf your annual revenue.</li>
<li><strong>Whether defence costs erode the limit</strong>, since advice disputes are document-heavy and expensive to run.</li>
<li><strong>Aggregate or per claim.</strong> A book of similar advice can produce related claims in the same policy period.</li>
</ul>
<p>For a sense of what New Zealand regulators and bodies set when they do set a number, the published minimums elsewhere run from $200,000 for an engineering firm issuing a producer statement to $1.2 million for a law practice, which is the Law Society's published standard rather than a legal requirement. Financial advice has no equivalent figure at all.</p>

<h2>Key Considerations When Choosing a PI Policy</h2>
<ul>
<li><strong>Retroactive date:</strong> <a href="/blog/claims-made-vs-occurrence-pi-insurance-nz/">Claims-made PI</a> requires a policy in force when the claim is made. Protect your retroactive date carefully — investment advice claims can arise years after the advice was given.</li>
<li><strong>Definition of covered services:</strong> Ensure the policy covers all regulated financial advice you provide: investment, KiwiSaver, insurance, mortgage advice. Confirm whether estate planning, budgeting, or non-regulated advice is included.</li>
<li><strong>FMA investigation coverage:</strong> Confirm that the policy covers investigation costs, including FMA regulatory proceedings, from the outset — not just once formal action is taken.</li>
<li><strong>Excess structure:</strong> Understand your deductible and whether it applies per claim or per policy period.</li>
<li><strong>Insurer credentials:</strong> Financial services PI is a specialist market. We do not publish a panel list here — which markets suit your advice categories and claims history is a conversation to have with your adviser.</li>
</ul>

<h2>Getting Quoted — What Information You Need</h2>
<p>To obtain a PI quote for your financial advice practice, prepare:</p>
<ul>
<li>Annual gross revenue and funds under management (if investment adviser)</li>
<li>FAP licence number and dealer group arrangements</li>
<li>Regulated financial advice categories you provide</li>
<li>Number of employed or contracted advisers</li>
<li>Client profile (retail/wholesale, HNW/mass market)</li>
<li>Prior PI claims or FMA regulatory actions in the last five years</li>
<li>Required cover limit and any dealer group minimum requirements</li>
</ul>
<p><a href="/contact/">Contact our team</a> to be connected with a licensed insurance adviser who can <a href="/compare/">compare PI options</a> for advice businesses.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.fma.govt.nz/assets/Licensing-guides/Standard-Conditions-for-full-FAP-licences.pdf" rel="nofollow noopener" target="_blank">FMA — Standard conditions for full FAP licences (PDF)</a></li>
<li><a href="https://www.fma.govt.nz/assets/Consultations/Consultation-standard-conditions-FAP-full-licensing.pdf" rel="nofollow noopener" target="_blank">FMA — Consultation: standard conditions for full FAP licensing (PDF)</a>, 17 June 2020</li>
<li><a href="https://www.fma.govt.nz/news/all-releases/media-releases/fma-releases-standard-conditions-for-licensing-of-financial-advice/" rel="nofollow noopener" target="_blank">FMA — Standard conditions released for licensing of financial advice</a>, 6 November 2020</li>
<li><a href="https://financialadvicecode.govt.nz/wp-content/uploads/2025/10/financial-advice-code-of-conduct-2025.pdf" rel="nofollow noopener" target="_blank">Code of Professional Conduct for Financial Advice Services (PDF)</a>, in force 1 November 2025</li>
<li><a href="https://www.mbie.govt.nz/business-and-employment/business/financial-markets-regulation/regulation-of-financial-advice/regulations-to-support-the-financial-services-legislation-amendment-act/disclosure-requirements/" rel="nofollow noopener" target="_blank">MBIE — Financial advice disclosure requirements</a></li>
<li><a href="https://www.legislation.govt.nz/act/public/2010/0110/latest/whole.html" rel="nofollow noopener" target="_blank">Limitation Act 2010</a>, sections 11 and 14</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal or financial advice. We are an information and referral service, not an insurer; the advisers we refer you to are licensed. Confirm your own obligations with the FMA and with your dealer group or licensing FAP.</p>
</div>
`,
  },
  {
    slug: 'real-estate-agents',
    name: 'Real Estate Agents',
    icon: '🏠',
    shortDesc: 'Professional indemnity and liability insurance for licensed real estate agents and property managers in NZ.',
    description: "Licensed real estate agents work under the Real Estate Agents Act 2008 and are regulated by the Real Estate Authority — which does not require professional indemnity insurance. The requirement that does exist belongs to REINZ: under its Code of Agency Practice, member agencies must hold PI covering the business and all individuals engaged in it, with a minimum of $1 million. Trust account obligations are audit obligations, not insurance ones. Given the transaction values involved, disclosure and misrepresentation claims are the ones that hurt.",
    avgCost: 'Set by fee income and limit',
    coverageNeeded: [
      'Professional Indemnity (a REINZ membership condition at a $1M minimum — the REA does not require it)',
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
      { q: 'Is PI insurance required for NZ real estate agents?', a: "Not by the regulator. The Real Estate Authority does not require it: the Professional Conduct and Client Care Rules 2012 contain no reference to insurance or indemnity, and REA licensing turns on your age, being a fit and proper person, the New Zealand Certificate in Real Estate, criminal history and referees. The requirement comes from REINZ. Under the REINZ Code of Agency Practice of November 2024, Principle 19, member agencies must hold professional indemnity insurance covering the business and all individuals engaged in it, with a minimum of $1 million. Under the Code of Individual Membership, Principle 12, individual members must ensure that they or their employer carries PI to that level. If your agency is not a REINZ member, no regulator or membership body requires you to hold it." },
      { q: 'What claims do real estate agents face?', a: "Misrepresentation about a property or a LIM report, failure to disclose known defects, disputes over agency agreements, and errors in rental property management such as unpaid rent or maintenance failures. Complaints to the REA are a separate track from a civil claim, and whether your policy funds your defence in REA disciplinary proceedings depends on the wording — check that specifically rather than assuming it." },
      { q: 'Do property managers need separate PI insurance?', a: "Nothing in the REA regime requires a property manager to hold PI. The obligations that can apply are the REINZ Code of Agency Practice, if the business is a REINZ member agency, and whatever the landlord or client contract specifies. If you manage properties independently rather than inside an agency, do not assume a principal policy covers you — many do not extend to contractors, and property management is often excluded from a sales-focused PI wording unless it is endorsed." },
      { q: 'What is the REA and how does it affect my PI obligations?', a: "The Real Estate Authority regulates licensed agents under the Real Estate Agents Act 2008. It can investigate complaints, and its Complaints Assessment Committees and the Tribunal can censure, fine, and suspend or cancel a licence. What it does not do is require insurance — there is no PI condition on an REA licence, and trust account obligations under the Real Estate Agents (Audit) Regulations 2009 are audit obligations, not insurance ones. Defending REA proceedings still costs money, so check whether your policy responds to them." },
      { q: 'Are auction-related claims covered by PI insurance?', a: "Claims arising from professional errors in the conduct of an auction — misrepresenting a reserve, failing to disclose known issues to bidders, or errors in auction documentation — are generally within the scope of a real estate PI policy. The specific circumstances and your wording decide it." },
      { q: "Does my employer's PI policy cover me as an individual agent?", a: "Often, but confirm it rather than assume. The REINZ Code of Agency Practice requires a member agency policy to cover the business and all individuals engaged in it, which is a useful thing to point at when you ask. Sole licensees, branch managers and anyone operating with some independence should see the schedule for themselves, and contractors in particular should check whether the definition of insured reaches them." },
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80',
    author: 'sarah-thompson',
    keyStats: [
      { label: 'REA licensing requirement', value: 'No PI requirement' },
      { label: 'REINZ member agencies', value: 'PI, minimum $1,000,000' },
      { label: 'REINZ individual members', value: 'You or your employer must carry it' },
      { label: 'Trust account obligation', value: 'Audit, not insurance' },
    ],
    mandatoryRequirements: [
      'Law: the Real Estate Agents Act 2008 requires a current REA licence to do agency work. It does not require PI',
      'Law: the Professional Conduct and Client Care Rules 2012 contain no reference to insurance or indemnity. REA licensing criteria are age, fit and proper person, the NZ Certificate in Real Estate, criminal history and referees',
      'Law: trust account obligations under the Real Estate Agents (Audit) Regulations 2009 are audit obligations. No PI and no fidelity insurance is required with them',
      'Membership body: REINZ Code of Agency Practice, Principle 19 — member agencies must hold PI covering the business and all individuals engaged in it, minimum $1 million',
      'Membership body: REINZ Code of Individual Membership, Principle 12 — individual members must ensure they or their employer carries PI to that level',
      'Client contract: vendors, landlords, franchisors and referral partners sometimes set their own requirements',
    ],
    recommendedCover: [
      { type: 'Professional Indemnity', minLimit: '$1,000,000 (REINZ)', notes: 'The REINZ Code of Agency Practice minimum for member agencies, covering the business and all individuals engaged in it. A membership condition, not an REA licensing requirement.' },
      { type: 'Public Liability', minLimit: 'Set by contract', notes: 'No statutory minimum. Relevant to open homes, inspections and client meetings; landlords and vendors sometimes specify a figure.' },
      { type: 'Statutory Liability', minLimit: 'Set by contract', notes: 'Covers defence costs and representation for unintentional regulatory breaches; HSWA fines cannot be insured. Check whether REA disciplinary proceedings sit here or under your PI.' },
      { type: "Employers' Liability", minLimit: 'Set by contract', notes: 'No statutory minimum. Sits alongside ACC, which covers work injury.' },
    ],
    relatedCoverage: ['professional-indemnity', 'public-liability', 'statutory-liability', 'employers-liability', 'run-off-cover'],
    longFormContent: `
<div class="keyfact">
<p><strong>The REA does not require PI. REINZ does.</strong> The Professional Conduct and Client Care Rules 2012 contain no reference to insurance or indemnity, and trust account obligations are audit obligations under the Real Estate Agents (Audit) Regulations 2009 — not insurance ones. The real requirement is the <strong>REINZ Code of Agency Practice, Principle 19</strong>: member agencies must hold professional indemnity insurance covering the business and all individuals engaged in it, with a <strong>minimum of $1 million</strong>. This page previously attributed the requirement to the REA as well. That was wrong.</p>
</div>

<h2>Why Real Estate Agents Need Professional Indemnity Insurance</h2>
<p>Real estate transactions are among the largest financial decisions most New Zealanders make. When a buyer pays $800,000 for a house with undisclosed defects, or a vendor is told their property is worth $200,000 less than it would have achieved with proper marketing, the financial and emotional consequences are significant — and they often look for someone to blame.</p>
<p>As a licensed real estate agent or property manager, you sit in the middle of high-value transactions where expectations are high, information asymmetries are real, and the consequences of professional error can be enormous. Property values have fluctuated significantly in recent years, creating particular tension when vendors feel their property was undersold, or buyers feel they were misled about market conditions.</p>
<p><a href="/coverage/professional-indemnity/">Professional indemnity insurance</a> protects you from the financial consequences of claims arising from professional errors, omissions, misrepresentation, and breach of professional duty in your real estate services. It covers your legal defence costs and any compensation awarded — protecting your licence, your business, and your personal financial position.</p>
<p>PI insurance is not just about the large, dramatic cases. It is about the day-to-day professional risks that every agent carries: the marketing brochure that overstated a bedroom count, the LIM report you failed to draw to a buyer's attention, the agency agreement dispute where the vendor claims you did not meet your obligations. These are the claims that drive the real estate PI market in New Zealand.</p>

<h2>Who Requires PI of a Real Estate Agent</h2>
<p>Two regimes get confused here constantly, so keep them apart.</p>
<p><strong>The Real Estate Authority: licensing, and no insurance requirement.</strong> Everyone doing real estate agency work must hold a current REA licence under the Real Estate Agents Act 2008, in one of three categories — agent, branch manager or salesperson. The licensing criteria are your age, being a fit and proper person, the New Zealand Certificate in Real Estate, criminal history and referees. Insurance is not among them. The Professional Conduct and Client Care Rules 2012, which set your conduct obligations, do not mention insurance or indemnity anywhere. Trust account obligations are, likewise, audit obligations under the Real Estate Agents (Audit) Regulations 2009: an annual audit, not a policy.</p>
<p><strong>REINZ: the requirement that actually exists.</strong> The REINZ Code of Agency Practice of November 2024 states at Principle 19 that member agencies must hold professional indemnity insurance covering the business and all individuals engaged in it, to a minimum of <strong>$1 million</strong>. The Code of Individual Membership adds, at Principle 12, that individual members must ensure that they or their employer carries PI to the level the Code of Agency Practice requires. This is a condition of membership. It binds REINZ members and nobody else.</p>
<p><strong>The REA can still make your life expensive.</strong> The REA investigates complaints from vendors, buyers, landlords and tenants. Complaints Assessment Committees and the Tribunal can censure, fine, and suspend or cancel a licence, and defending those proceedings takes legal representation. Whether your policy funds that defence is a wording question — ask it directly, because a policy written for civil claims does not automatically respond to a disciplinary process.</p>
<p><strong>Property management.</strong> We are not going to predict what future regulation of property management will require, because nothing is in force to describe. Today the obligations that can apply are the REINZ Code, where the business is a member agency, and whatever the landlord or client contract says.</p>

<h2>Common PI Claims Against Real Estate Agents</h2>
<p>The claims landscape for real estate agents reflects the high-stakes nature of property transactions:</p>
<ul>
<li><strong>Misrepresentation in property marketing:</strong> Overstating features, misrepresenting consented floor area, incorrect CV information, or marketing a property as having features it does not — all common claim triggers. Even innocent misrepresentation can result in significant PI claims.</li>
<li><strong>Failure to disclose defects:</strong> Agents who were aware (or should have been aware) of significant property defects — weathertightness issues, piling problems, building consent issues — and failed to disclose them to buyers face serious exposure. The post-sale discovery of undisclosed defects is one of the most common real estate claim scenarios in NZ.</li>
<li><strong>LIM report and council record failures:</strong> Agents who fail to obtain or adequately review LIM reports, or fail to draw significant LIM issues to buyers' attention, face claims when buyers discover problems that the LIM would have revealed.</li>
<li><strong>Underquoting:</strong> Agents who advise vendors that their property is worth less than it is — whether to secure a quick sale, favour a connected buyer, or for any other reason — face vendor claims for the difference in sale price.</li>
<li><strong>Property management errors:</strong> Failing to collect rent, approving unsuitable tenants without adequate screening, failing to arrange necessary maintenance, incorrectly managing bond deposits, and breaching the Residential Tenancies Act are all common property management PI claim triggers.</li>
<li><strong>Breach of agency agreement:</strong> Disputes about exclusive listing conditions, commission entitlements, and the scope of marketing obligations can result in PI claims even where property management is not involved.</li>
</ul>

<h2>What Cover Do Real Estate Agents Need?</h2>
<p>Real estate agents should consider the following cover package:</p>
<ul>
<li><strong><a href="/coverage/professional-indemnity/">Professional indemnity insurance:</a></strong> The core cover. Protects against claims arising from professional errors, misrepresentation, disclosure failures, and breach of professional duty.</li>
<li><strong><a href="/coverage/public-liability/">Public liability insurance:</a></strong> Essential for conducting open homes, property inspections, and client meetings. Covers bodily injury or property damage claims arising from your business activities — for example, a visitor injured at an open home you were running.</li>
<li><strong><a href="/coverage/statutory-liability/">Statutory liability insurance:</a></strong> Covers defence costs and representation for unintentional breaches of legislation such as the Real Estate Agents Act, Residential Tenancies Act and Fair Trading Act. Whether a penalty is insurable depends on the statute and the wording, so do not assume it.</li>
<li><strong><a href="/coverage/employers-liability/">Employers' liability insurance:</a></strong> Required for agencies with employed salespeople, property managers, and administrative staff.</li>
</ul>

<h2>What PI Costs a Real Estate Agency</h2>
<p>The monthly ranges and the agency-size examples that used to sit here were not sourced, and they have been removed. No New Zealand insurer, REINZ, or the REA publishes premium data for this sector. Cover is broker-distributed and individually underwritten. The only official New Zealand PI cost figures in existence relate to architects and to law firms, and neither has anything to say about real estate.</p>
<p>What an underwriter actually rates on:</p>
<ul>
<li><strong>Limit of indemnity.</strong> For a REINZ member agency the floor is set for you at $1 million, and going above it is a judgement about your transaction values.</li>
<li><strong>Commission income</strong>, the primary rating base.</li>
<li><strong>Whether you do property management as well as sales.</strong> It is a different exposure and often a separate section or endorsement.</li>
<li><strong>Number of licensees engaged in the business</strong>, since the policy has to cover all of them.</li>
<li><strong>Claims, complaints and REA proceedings history.</strong></li>
<li><strong>Excess</strong>, and whether defence costs sit inside or outside the limit.</li>
<li><strong>Retroactive date and run-off</strong>, because disclosure claims surface after settlement.</li>
</ul>
<p>Our <a href="/pi-insurance-cost/">cost guide</a> works through the same factors. A quote is the only way to a number.</p>

<h2>How Much Cover Do You Need?</h2>
<p>There is one published New Zealand figure and it is the REINZ one: <strong>$1 million</strong>, covering the agency and all individuals engaged in it. That is a floor for member agencies, not a recommendation, and we are not going to invent a table of higher limits by market, because no source for one exists.</p>
<p>Set your own limit from things you can check:</p>
<ul>
<li><strong>Your typical transaction values.</strong> A single undisclosed defect claim on a high-value property can approach the limit on its own.</li>
<li><strong>Whether the limit is per claim or in the aggregate</strong>, which matters for an agency with many licensees.</li>
<li><strong>Whether defence costs erode it.</strong></li>
<li><strong>Whether property management is inside the same limit</strong> as your sales exposure.</li>
</ul>

<h2>Key Considerations When Choosing a PI Policy</h2>
<ul>
<li><strong>Retroactive date:</strong> Disclosure claims can arise months or years after settlement. <a href="/blog/claims-made-vs-occurrence-pi-insurance-nz/">Claims-made PI</a> requires a policy in force at the time the claim is made. Protect your retroactive date.</li>
<li><strong>Coverage for REA proceedings:</strong> Ensure your policy covers legal representation in REA complaint investigations and Tribunal proceedings — not just civil claims.</li>
<li><strong>Property management endorsement:</strong> If you provide property management services, confirm that these are explicitly covered. Some PI policies for real estate agents exclude property management unless specifically endorsed.</li>
<li><strong>Group versus individual cover:</strong> If your agency holds a group PI policy, confirm that your individual activities are covered, particularly if you hold your own licence or operate with some independence.</li>
<li><strong><a href="/coverage/run-off-cover/">Run-off cover:</a></strong> When you retire or leave the industry, run-off cover maintains PI protection for claims arising from past work.</li>
</ul>

<h2>Getting Quoted — What Information You Need</h2>
<p>To get a PI quote for your real estate business, prepare:</p>
<ul>
<li>Annual commission income (for the current and previous two years)</li>
<li>REA licence details (agent, branch manager, salesperson)</li>
<li>REINZ membership details</li>
<li>Services provided: sales, property management, or both</li>
<li>Number of employed salespeople and property managers</li>
<li>Geographic markets you operate in</li>
<li>Prior REA proceedings or PI claims in the last five years</li>
<li>Required cover limit</li>
</ul>
<p><a href="/contact/">Contact our team</a> to be connected with a licensed adviser who can <a href="/compare/">compare PI options</a> for real estate businesses.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.reinz.co.nz/common/Uploaded%20files/REINZ/Website/2024/Codes%20of%20Practice/REINZ%20Code%20of%20Agency%20Practice%20Nov%202024.pdf" rel="nofollow noopener" target="_blank">REINZ — Code of Agency Practice (PDF)</a>, November 2024, Principle 19</li>
<li><a href="https://www.reinz.co.nz/common/Uploaded%20files/REINZ/Website/2024/Codes%20of%20Practice/REINZ%20Code%20of%20Individual%20Membership%20Nov%202024.pdf" rel="nofollow noopener" target="_blank">REINZ — Code of Individual Membership (PDF)</a>, November 2024, Principle 12</li>
<li><a href="https://www.rea.govt.nz/assets/Uploads/Resources/Guides/Code-of-conduct.pdf" rel="nofollow noopener" target="_blank">REA — Professional Conduct and Client Care Rules 2012 (PDF)</a></li>
<li><a href="https://www.rea.govt.nz/real-estate-professionals/apply-for-your-licence/required-criteria-and-qualifications-to-work-in-real-estate/" rel="nofollow noopener" target="_blank">REA — Required criteria and qualifications</a></li>
<li><a href="https://www.rea.govt.nz/real-estate-professionals/obligations/trust-account/" rel="nofollow noopener" target="_blank">REA — Trust account obligations</a></li>
<li><a href="https://www.legislation.govt.nz/act/public/2010/0110/latest/whole.html" rel="nofollow noopener" target="_blank">Limitation Act 2010</a>, sections 11 and 14</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal or financial advice. We are an information and referral service, not an insurer; the advisers we refer you to are licensed. Confirm your own obligations with REINZ and with the agency whose licence you work under.</p>
</div>
`,
  },
  {
    slug: 'consultants',
    name: 'Management Consultants',
    icon: '📈',
    shortDesc: 'Professional indemnity insurance for management consultants, business advisers and strategy professionals in NZ.',
    description: "Management consultants and business advisers carry professional liability for the recommendations, analyses and programmes they deliver. If a client acts on your advice and loses money, they can pursue you for it. Nothing in New Zealand law requires you to hold professional indemnity insurance, and we could find no New Zealand membership body that requires it either. The requirement, when you have one, sits in your client contract — and that contract also sets the limit.",
    avgCost: 'Set by fee income and limit',
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
      { q: 'Do management consultants need PI insurance?', a: "No law requires it, and we could find no New Zealand membership body that makes it a condition. What creates the obligation in practice is the client contract: enterprise, agency and panel agreements commonly require professional indemnity cover and ask you to evidence it. The exposure is there regardless of who requires it — clients who act on your recommendations and lose money can pursue you for the loss." },
      { q: 'What does PI insurance cover for consultants?', a: "Your legal defence costs and any compensation awarded if a client claims your advice, analysis or project management caused them financial loss. Most wordings also respond to unintentional breach of confidentiality and unintentional intellectual property infringement, though those clauses vary between underwriters more than any other part of the policy." },
      { q: 'How much PI cover does a management consultant need?', a: "There is no New Zealand minimum for us to point you at. The number that binds you is the one in your client contracts, so read the highest one across your live engagements and start there. Then think about the scale of the decisions your work supports, whether the limit is per claim or in the aggregate, and whether defence costs erode it. We have removed the recommended limits this page used to publish, because they were market habit rather than a sourced requirement." },
      { q: 'Is PI insurance required for government consulting contracts?', a: "Frequently, yes — but as a term of the contract, not as a rule of law, and we are not going to state the limits. This page previously quoted $1 million to $2 million for New Zealand government consulting contracts, and we could not source that to any published procurement document. Read the panel terms or ask the agency, and note that whatever limit they specify will be one of the main drivers of your premium." },
      { q: 'Are freelance consultants and sole traders covered?', a: "Yes, cover is available for sole traders and freelancers. We no longer publish a starting monthly price, because there is nothing to base one on: New Zealand PI is broker-distributed and individually underwritten, and no insurer here publishes rate tables. Review your limit as your clients get larger, since the contractual figure tends to rise with them." },
      { q: 'Does PI cover confidentiality breaches?', a: "Most PI policies for consultants respond to claims arising from an unintentional breach of confidentiality — for example where one client's information found its way into a deliverable for another. Deliberate breaches are not covered. If you work across competing businesses in the same sector, read this clause in your own wording rather than relying on a general statement." },
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80',
    author: 'sarah-thompson',
    keyStats: [
      { label: 'Required by New Zealand law', value: 'No' },
      { label: 'Required by a membership body', value: 'None that we could verify' },
      { label: 'Usual source of the requirement', value: 'Your client contract' },
      { label: 'Published NZ premium data', value: 'None exists' },
    ],
    mandatoryRequirements: [
      'Law: no New Zealand statute requires a management consultant or business adviser to hold PI',
      'Membership body: we could not verify a PI requirement from any New Zealand management consulting body. This page previously said NZIM, IMC and ICMCI encouraged cover; that was not sourced and has been removed',
      'Client contract: this is the real requirement for most consultancies. Enterprise, public sector and panel agreements commonly specify a limit and ask for a certificate of currency',
      'Not a PI rule: Privacy Act 2020 obligations apply if you handle personal information. They are a reason to consider cover, not a requirement to hold it',
    ],
    recommendedCover: [
      { type: 'Professional Indemnity', minLimit: 'Set by contract', notes: 'No statutory or membership minimum in New Zealand. The limit named in your client agreement is the one that binds you.' },
      { type: 'Public Liability', minLimit: 'Set by contract', notes: 'No statutory minimum. Commonly required for client site access, workshops and off-site events.' },
      { type: 'Cyber Liability', minLimit: 'Set by contract', notes: 'No statutory minimum. Relevant where you hold client data or access client systems.' },
      { type: "Employers' Liability", minLimit: 'Set by contract', notes: 'No statutory minimum. Sits alongside ACC, which covers work injury.' },
    ],
    relatedCoverage: ['professional-indemnity', 'public-liability', 'employers-liability', 'management-liability', 'run-off-cover'],
    longFormContent: `
<div class="keyfact">
<p><strong>No regulator and no membership body requires this of you.</strong> There is no New Zealand statute making professional indemnity insurance a condition of consulting, and we could not verify a PI requirement from any New Zealand management consulting body. The obligation, when it exists, comes from the client contract you sign — and that contract sets the limit too. This page previously quoted government procurement minimums in dollars; those figures were not sourced and have been removed.</p>
</div>

<h2>Why Management Consultants Need Professional Indemnity Insurance</h2>
<p>Management consultants are hired to solve problems and create value. Clients engage you because they trust your expertise and expect your recommendations to improve their business. When those recommendations do not deliver the expected results — or when something goes wrong during implementation — clients sometimes look for someone to hold responsible.</p>
<p>The value of management consulting advice can be enormous, but so can the potential downside of advice that proves incorrect. A restructuring recommendation that results in significant redundancy costs and business disruption. A market analysis that underpinned an acquisition at the wrong price. A change management programme that led to key staff departures. A financial model that contained an error that affected an investment decision. Each of these scenarios is a potential PI claim against a management consultant.</p>
<p><a href="/coverage/professional-indemnity/">Professional indemnity insurance</a> covers the legal and financial consequences of these claims. It funds your defence when a client alleges your professional advice caused them a financial loss, and covers any compensation awarded. For management consultants in New Zealand — where business advisory work is increasingly professionalised and client expectations are high — PI insurance is an essential business protection.</p>
<p>There is a commercial reason as well as a risk one. Enterprise and public sector clients commonly make professional indemnity cover a term of the contract and ask to see a certificate before work starts, so the practical effect for many consultancies is that the cover decides which engagements are open to them.</p>

<h2>Who Requires PI of a Management Consultant</h2>
<p>Your clients. That is the whole list, as far as we can verify.</p>
<p><strong>No statute.</strong> Management consulting is not a licensed occupation in New Zealand and no Act makes insurance a condition of doing it.</p>
<p><strong>No membership body requirement we could verify.</strong> This page used to say that NZIM, the Institute of Management Consultants and ICMCI encouraged members to hold PI. We could not source those statements, so they are gone. If one of these bodies does impose a PI condition, tell us and we will publish it with a citation.</p>
<p><strong>Client contracts, which is where it actually bites.</strong> Enterprise agreements, government and health sector panels and one-off engagement letters commonly require professional indemnity cover, a stated limit and a certificate of currency. We previously published specific dollar minimums for New Zealand government consulting contracts and for health sector panels. We could not source either, so both have been removed. Read the terms you are actually being asked to sign — that limit is what binds you, and it will drive your premium.</p>
<p><strong>The Privacy Act 2020 is not a PI rule.</strong> Consultants handle commercially sensitive and personal information, and a breach can bring a Privacy Commissioner inquiry and client claims. That is a reason to think about cyber and PI cover. It is not a legal requirement to hold either.</p>

<h2>Common PI Claims Against Management Consultants</h2>
<p>The claims landscape for management consultants reflects the broad range of work they do:</p>
<ul>
<li><strong>Strategic advice failures:</strong> A market entry strategy, business model recommendation, or strategic plan that proves fundamentally flawed can result in significant client losses. Clients who acted on your recommendation and suffered the consequences may claim that your advice was negligent.</li>
<li><strong>Financial modelling errors:</strong> Incorrect assumptions, calculation errors, or presentation of financial projections that a client relied upon for a capital decision — acquisition, investment, major capex — are a significant source of PI claims.</li>
<li><strong>M&A advisory failures:</strong> Consultants who advise on business acquisitions face serious exposure if due diligence misses significant issues, if valuation advice proves incorrect, or if post-acquisition integration advice fails to identify integration risks.</li>
<li><strong>Project management failures:</strong> As consultants increasingly take on project management roles alongside advisory functions, they face project delivery risk. Cost overruns, delays, or failure to meet project objectives can trigger PI claims.</li>
<li><strong>Change management claims:</strong> Organisational change programmes that result in significant staff turnover, productivity loss, or cultural damage can result in clients claiming that the consultant's change management advice was negligent.</li>
<li><strong>Confidentiality breaches:</strong> Using one client's commercially sensitive information — even inadvertently — in work for another client is a serious PI risk for consultants who work across competing businesses.</li>
</ul>

<h2>What Cover Do Management Consultants Need?</h2>
<p><a href="/coverage/professional-indemnity/">Professional indemnity insurance</a> is the core cover for any management consultant. Beyond PI:</p>
<ul>
<li><strong><a href="/coverage/public-liability/">Public liability insurance:</a></strong> Required if you attend client premises, conduct workshops, facilitate off-site events, or use client facilities. Covers bodily injury and property damage claims arising from your business activities.</li>
<li><strong>Cyber liability insurance:</strong> Increasingly important as consultants handle client data in digital environments, access client systems, or deliver work through digital platforms. A data breach can trigger both regulatory and client claims.</li>
<li><strong><a href="/coverage/management-liability/">Management liability insurance:</a></strong> For consulting firm principals and directors, management liability provides protection against employment practices claims, directors and officers liability, and company governance risks beyond pure professional advice.</li>
<li><strong><a href="/coverage/employers-liability/">Employers' liability insurance:</a></strong> Required if you employ analysts, project managers, or support staff.</li>
<li><strong><a href="/coverage/run-off-cover/">Run-off cover:</a></strong> Important when concluding a major engagement or winding down a practice — claims can arise months or years after a project is complete.</li>
</ul>

<h2>What PI Costs a Management Consultant</h2>
<p>The monthly ranges and the worked examples that used to sit here had no source, and they have been removed — including the claim that consulting is one of the cheaper professions for PI, which was based on the same missing data. There is no public New Zealand professional indemnity premium dataset. Cover is broker-distributed and individually underwritten, and the only official New Zealand cost figures that exist relate to architects and to law firms.</p>
<p>What an underwriter actually rates on:</p>
<ul>
<li><strong>Limit of indemnity</strong>, usually decided by your client contracts.</li>
<li><strong>Annual fee income</strong>, the primary rating base.</li>
<li><strong>What the work is.</strong> Strategy and organisational advice, financial modelling, M&amp;A support and technology implementation are looked at differently. Qualitative, because nobody publishes the loadings.</li>
<li><strong>Client sectors</strong>, and the size of the decisions your work supports.</li>
<li><strong>Claims and notification history.</strong></li>
<li><strong>Excess</strong>, and whether defence costs sit inside or outside the limit.</li>
<li><strong>Retroactive date and run-off</strong>, since strategy and transaction work produces late claims.</li>
</ul>
<p>Our <a href="/pi-insurance-cost/">cost guide</a> works through the same factors. A quote is the only way to a number.</p>

<h2>How Much Cover Do You Need?</h2>
<p>We have removed the recommended limits by engagement type that used to appear here. They were market habit presented as guidance, and New Zealand publishes no minimum for consulting. Work from what you can verify:</p>
<ul>
<li><strong>The highest limit across your live client contracts.</strong> That is your practical floor.</li>
<li><strong>The scale of the decision your advice supports</strong>, which is usually unrelated to your fee.</li>
<li><strong>Per claim or aggregate</strong>, particularly if you deliver similar advice to many clients.</li>
<li><strong>Whether defence costs erode the limit.</strong> Consulting disputes are argued over documents and are expensive to defend even when you are right.</li>
</ul>
<p>For a sense of what New Zealand bodies set when they set a number at all, the published minimums elsewhere run from $200,000 for an engineering firm issuing a producer statement to $1.2 million for a law practice. None applies to consulting, but they are real figures.</p>

<h2>Key Considerations When Choosing a PI Policy</h2>
<ul>
<li><strong>Retroactive date:</strong> <a href="/blog/claims-made-vs-occurrence-pi-insurance-nz/">Claims-made PI</a> requires a policy in force when the claim is made. Consulting claims can arise long after a project is complete — particularly for strategy and M&A work where the consequences play out over years.</li>
<li><strong>Definition of professional services:</strong> Ensure the policy covers the full breadth of your consulting work: strategy, financial modelling, project management, change management, facilitation, and any specialist advisory services.</li>
<li><strong>Confidentiality and IP provisions:</strong> Check that the policy covers unintentional confidentiality breaches and IP infringement — these are genuine risks for consultants who work across multiple clients in overlapping sectors.</li>
<li><strong>Cyber extensions:</strong> Some policies include basic cyber cover. Understand what is and is not included, and whether a separate cyber policy is needed.</li>
<li><strong><a href="/coverage/run-off-cover/">Run-off cover:</a></strong> Confirm what happens to your coverage when you conclude a major engagement or wind down your practice.</li>
</ul>

<h2>Getting Quoted — What Information You Need</h2>
<p>To get a PI quote for your consulting practice, prepare:</p>
<ul>
<li>Annual gross fee income for current and previous two years</li>
<li>Description of consulting services provided</li>
<li>Types of clients (government, private sector, not-for-profit)</li>
<li>Typical project values and scope</li>
<li>Number of principals and professional staff</li>
<li>Prior PI claims in the last five years</li>
<li>Required cover limit (check government and enterprise contract requirements)</li>
</ul>
<p><a href="/contact/">Contact our team</a> to be connected with a licensed insurance adviser who can <a href="/compare/">compare PI options</a> for consulting practices.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.legislation.govt.nz/act/public/2010/0110/latest/whole.html" rel="nofollow noopener" target="_blank">Limitation Act 2010</a>, sections 11 and 14 — the six-year period and the three-year late knowledge extension that set how long your exposure runs</li>
<li><a href="https://www.lawsociety.org.nz/professional-practice/practising-well/benchmarking-costs-of-law-practice-in-new-zealand/" rel="nofollow noopener" target="_blank">NZ Law Society and KPMG — Benchmarking costs of law practice in New Zealand</a>, March 2024. The only published New Zealand PI cost dataset we are aware of, and it covers law firms rather than consultants.</li>
</ul>
<p>There is no New Zealand regulator or membership body PI requirement for management consultants for us to cite, because as far as we can establish none exists. If you know of one, tell us and we will publish it with the source. Last reviewed 7 September 2026. General information only, not legal or financial advice. We are an information and referral service, not an insurer; the advisers we refer you to are licensed.</p>
</div>
`,
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & Allied Health',
    icon: '🏥',
    shortDesc: 'Professional indemnity and liability insurance for GPs, specialists, nurses, physios and allied health practitioners in NZ.',
    description: "Healthcare and allied health practitioners carry serious professional exposure, and the New Zealand position on cover is more mixed than most pages admit. ACC handles most patient injury claims, but not claims about advice, informed consent or circumstances where ACC declines. On the requirement side we will only tell you what we can source: the Nursing Council does not require PI for an annual practising certificate, the Social Workers Registration Board does not require it for a practising certificate, and College of Nurses Aotearoa and NZ College of Midwives cover comes as a member benefit rather than an obligation. For other authorities, ask your own — we are not going to assert a requirement we cannot read.",
    avgCost: 'Set by fee income and limit',
    coverageNeeded: [
      'Professional Indemnity or medical indemnity (requirements differ by authority — check yours)',
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
      { q: 'Does ACC cover all healthcare claims in NZ?', a: "No. ACC covers personal injury caused by accident in New Zealand, including treatment injury, and that removes most personal injury litigation from the picture. It does not answer everything: claims about advice a patient acted on, informed consent, situations where ACC declines cover, and complaints that are about conduct rather than injury all sit outside it. Professional indemnity cover is aimed at that remaining territory and at the cost of defending complaints." },
      { q: 'Is PI insurance mandatory for NZ healthcare practitioners?', a: "It depends entirely on your authority, and we are only going to state what we can source. The Nursing Council does not require professional indemnity insurance for an annual practising certificate — the requirements are continuing competence, annual renewal and the fee. The Social Workers Registration Board does not require it for a practising certificate either. College of Nurses Aotearoa membership includes PI as a benefit, not a requirement, and NZ College of Midwives membership does the same. Whether the Health Practitioners Competence Assurance Act 2003 imposes any insurance requirement is something we could not verify, so we will not assert it in either direction. This page previously listed a string of registration bodies as requiring PI. Those claims were not sourced and have been removed. Ask your own responsible authority and get the answer in writing." },
      { q: 'What does a Health and Disability Commissioner investigation involve?', a: "A complaint about a health or disability service can be assessed, investigated, referred for resolution, or referred to the Director of Proceedings. In practice you may need legal representation across several stages, and that cost arrives whether or not the complaint is ultimately upheld. Some indemnity arrangements fund that representation from the complaint stage and some only once formal action begins — check yours specifically rather than assuming." },
      { q: 'Do private practice healthcare providers need more cover than employed practitioners?', a: "Usually, but do not assume anything about your employment indemnity — read it. Employers commonly indemnify practitioners for work done in the course of that employment, and just as commonly that indemnity stops at the boundary of private work, locum work, telehealth done outside the role, and anything you do after you leave. Private practice exposure is your own, and so is the run-off for it." },
      { q: 'What is the difference between medical indemnity and PI insurance?', a: "Membership-based medical indemnity is generally discretionary: the organisation decides whether to assist with a given matter. An insurance policy is contractual — the insurer responds if the claim falls within the terms. Both exist in New Zealand and practitioners hold both. Note that we cannot arrange medical indemnity or professional body member schemes: those come directly from the scheme, and this page is here to help you understand the landscape rather than to sell you into it." },
      { q: 'Do telehealth and online consultations change my cover?', a: "They can. Consultations delivered remotely raise questions about jurisdiction if the patient is outside New Zealand, about documentation standards, and about technology failure during a consultation. Check that your policy or scheme recognises telehealth explicitly rather than assuming it falls under general practice." },
    ],
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    keyStats: [
      { label: 'Nursing Council APC', value: 'No PI requirement' },
      { label: 'SWRB practising certificate', value: 'No PI requirement' },
      { label: 'HPCAA 2003 position', value: 'We could not verify it — ask your authority' },
      { label: 'NZMII scheme prices', value: '$565–$600 a year private sector and GPEP RMOs; $1,621.50 SMOs' },
    ],
    mandatoryRequirements: [
      'Nursing Council of New Zealand: an annual practising certificate does not require PI. The requirements are continuing competence, annual renewal and the fee (NZ$32.50 to $130.00)',
      'College of Nurses Aotearoa: professional indemnity comes with membership as a benefit, not as a condition',
      'Social Workers Registration Board: a practising certificate does not require PI. Annual renewal, the Code of Conduct, CPD and an online competence and fitness declaration are the requirements, expiring 30 June',
      'NZ College of Midwives: PI is an automatic benefit of membership. Where an employer requires an Access Agreement holder to maintain it, that is a contractual requirement from the employer, not a registration one',
      'Health Practitioners Competence Assurance Act 2003: we could not read the statute to verify whether it imposes any insurance requirement, so we do not assert one either way. Ask your responsible authority',
      'Client and employer contracts: employment agreements, access agreements and contracts with funders are where most healthcare insurance obligations actually come from',
    ],
    recommendedCover: [
      { type: 'Professional Indemnity', minLimit: 'Ask your authority', notes: 'We could not verify a published minimum limit for any New Zealand health registration authority, so we do not state one. Get the requirement from your own authority in writing, then check your employment or access agreement.' },
      { type: 'Medical indemnity (scheme)', minLimit: 'Set by the scheme', notes: 'Group scheme medical indemnity is arranged directly with the scheme. We cannot arrange it, and it is not the same product as general professional indemnity insurance.' },
      { type: 'Public Liability', minLimit: 'Set by contract', notes: 'No statutory minimum. Relevant to any clinic premises, home visits or community-based practice.' },
      { type: 'Statutory Liability', minLimit: 'Set by contract', notes: 'Covers defence costs and representation for unintentional regulatory breaches; HSWA fines cannot be insured. Check whether disciplinary and HDC representation sits here or under your indemnity.' },
      { type: "Employers' Liability", minLimit: 'Set by contract', notes: 'No statutory minimum. Sits alongside ACC, which covers work injury.' },
    ],
    relatedCoverage: ['professional-indemnity', 'public-liability', 'statutory-liability', 'employers-liability', 'run-off-cover'],
    longFormContent: `
<div class="keyfact">
<p><strong>We are not going to tell you that your registration requires PI.</strong> This page used to list the Medical Council, Nursing Council, Physiotherapy Board, Psychologists Board, Pharmacy Council and Dental Council as requiring professional indemnity cover. Those claims were not sourced and have been removed. What we can source: the <strong>Nursing Council does not require PI</strong> for an annual practising certificate, and the <strong>Social Workers Registration Board does not require it</strong> for a practising certificate. College of Nurses Aotearoa and NZ College of Midwives provide cover as a membership benefit, not as a condition. Whether the Health Practitioners Competence Assurance Act 2003 imposes anything is something we could not verify, so we assert nothing about it. Ask your own authority, and get the answer in writing.</p>
</div>

<h2>Why Healthcare &amp; Allied Health Practitioners Need Professional Indemnity Insurance</h2>
<p>Healthcare professionals in New Zealand operate in a unique liability environment. The ACC scheme means that most patient injury claims for physical harm are channelled through ACC rather than civil litigation. This is a genuine advantage compared to countries like the US or UK where medical malpractice litigation is a major financial risk. However, the ACC system does not eliminate all professional liability for healthcare practitioners — and understanding the gaps is critical.</p>
<p>ACC covers treatment injury — physical injury caused by treatment. It does not cover claims arising from:</p>
<ul>
<li>Professional advice that a patient followed with adverse consequences</li>
<li>Informed consent failures where the patient claims they would not have proceeded with treatment had they been properly informed</li>
<li>Misdiagnosis or delayed diagnosis, where ACC declines the claim</li>
<li>Psychological harm arising from treatment experiences</li>
<li>Cases where ACC declines cover and the patient seeks alternative recourse</li>
</ul>
<p><a href="/coverage/professional-indemnity/">Professional indemnity insurance</a> fills the gap. It covers the legal defence costs and compensation awards that arise from claims in the territory outside ACC. For private practice practitioners, independent allied health professionals, and clinic operators, this gap is real and significant.</p>
<p>Beyond civil claims, healthcare practitioners face investigation by the Health and Disability Commissioner (HDC), professional disciplinary proceedings before registration bodies, and increasing patient expectations fuelled by access to online health information. PI insurance covers your legal representation costs across all of these proceedings.</p>

<h2>Who Requires Cover, and Who Does Not</h2>
<p>Healthcare is the sector where insurance pages are least careful, so here is what we can and cannot verify.</p>
<p><strong>Verified negatives.</strong> The Nursing Council does not require professional indemnity insurance for an annual practising certificate; the requirements are continuing competence, annual renewal and the fee, which runs from NZ$32.50 to $130.00. The Social Workers Registration Board does not require PI for a practising certificate either — annual renewal, the Code of Conduct, CPD and an online competence and fitness declaration, expiring 30 June. Where cover does come with membership, it is usually a benefit rather than an obligation: College of Nurses Aotearoa provides PI to members, and NZ College of Midwives membership includes it automatically.</p>
<p><strong>What we could not verify, and will not assert.</strong> Whether the Health Practitioners Competence Assurance Act 2003 imposes an insurance requirement. Whether the Midwifery Council attaches one to an annual practising certificate. Whether ANZASW does. In each case the source was unreadable or silent, and the honest answer is that we do not know. A page that tells you confidently either way is guessing.</p>
<p><strong>Contracts, which is where healthcare obligations usually live.</strong> Employment agreements, access agreements and funder contracts are the documents that most often require a practitioner to hold and maintain cover. Where a midwife with an access agreement is required to maintain indemnity, for example, that is the employer requiring it under a contract — not the registration regime.</p>
<p><strong>The Health and Disability Commissioner.</strong> The HDC assesses and investigates complaints about health and disability services and can refer matters to the Director of Proceedings. Nothing in that process requires you to be insured. It is simply the process whose defence costs most practitioners are insuring against.</p>
<p><strong>What we cannot arrange.</strong> Medical indemnity and professional body member schemes come directly from the scheme or organisation. Those products are not ours to refer you into, so treat this page as an explanation of the landscape rather than a route into a scheme.</p>

<h2>Common PI Claims Against Healthcare Practitioners</h2>
<p>The claims landscape for healthcare practitioners is shaped by the ACC system and the HDC complaints framework:</p>
<ul>
<li><strong>Informed consent failures:</strong> The leading source of non-ACC professional liability claims against medical practitioners. If a patient alleges they were not properly informed about treatment risks and would not have proceeded had they been, a claim can follow — even if the treatment outcome itself was within normal parameters.</li>
<li><strong>Misdiagnosis and delayed diagnosis:</strong> ACC covers some treatment injury scenarios, but misdiagnosis claims — particularly where ACC declines or where the claim involves non-physical harm — create PI exposure. Delayed cancer diagnoses, missed mental health diagnoses, and incorrect referral decisions are common scenarios.</li>
<li><strong>Treatment beyond scope:</strong> Allied health practitioners who provide services outside their scope of registration or training face heightened PI claims exposure. Physiotherapists who provide manual therapy for conditions outside their competence, or psychologists who practise outside their area of training, are examples.</li>
<li><strong>Prescription and medication errors:</strong> GPs, nurse practitioners, and pharmacists face PI exposure for prescription errors — incorrect doses, drug interactions not identified, or prescribing for contraindicated conditions.</li>
<li><strong>Health record and privacy breaches:</strong> Inappropriate disclosure of health information, inadequate record security, and breaches of the Health Information Privacy Code can trigger both HDC complaints and patient claims.</li>
<li><strong>HDC investigations — cost of defence:</strong> Even where an HDC investigation ultimately finds no breach of the Code of Rights, the legal costs of responding to a complaint — including record production, expert reports, and legal representation — can be significant. PI insurance covers these costs.</li>
</ul>

<h2>What Cover Do Healthcare Practitioners Need?</h2>
<p><a href="/coverage/professional-indemnity/">Professional indemnity insurance</a> is the core requirement. The right cover package for a healthcare practitioner includes:</p>
<ul>
<li><strong>PI insurance:</strong> Covers claims arising from professional errors, omissions, informed consent failures, and scope of practice issues. Essential for all registered practitioners in private practice.</li>
<li><strong><a href="/coverage/public-liability/">Public liability insurance:</a></strong> Required for any clinic operation. Covers bodily injury and property damage claims from patients, visitors, and members of the public on your premises.</li>
<li><strong><a href="/coverage/statutory-liability/">Statutory liability insurance:</a></strong> Covers defence costs and representation for unintentional breaches of legislation. It does not pay Health and Safety at Work Act fines — sections 29 and 30 of that Act make such an indemnity of no effect — so for clinic operators the value is in the cost of defending an investigation, not in the penalty.</li>
<li><strong><a href="/coverage/employers-liability/">Employers' liability insurance:</a></strong> Required for any practice with employed nursing, allied health, reception, or administrative staff.</li>
<li><strong>Cyber liability insurance:</strong> Essential for practices managing electronic health records. A cyberattack on a healthcare practice can expose highly sensitive patient data and trigger significant response obligations under the Privacy Act and Health Information Privacy Code.</li>
<li><strong><a href="/coverage/run-off-cover/">Run-off cover:</a></strong> Critical on retirement. Healthcare PI claims — particularly informed consent and treatment outcome claims — can arise years after treatment. A suitable run-off period protects you after you cease practising.</li>
</ul>

<h2>What Cover Costs in Healthcare</h2>
<p>The per-specialty monthly ranges this page used to publish had no source and have been removed. There is no public New Zealand professional indemnity premium dataset, and no health authority or college publishes one.</p>
<p>One set of New Zealand figures is genuinely published, and it is scheme pricing rather than general PI. NZMII publishes prices for its medical indemnity scheme: <strong>$565 to $600 a year</strong> for private sector doctors and GPEP resident medical officers, and <strong>$1,621.50 a year</strong> for senior doctors and senior medical officers, with Health NZ hospital resident medical officers covered at no personal cost. Two caveats matter. That is group scheme medical indemnity, not general professional indemnity insurance, and it is not a product we can arrange for you.</p>
<p>For professional indemnity insurance proper, what an underwriter rates on:</p>
<ul>
<li><strong>Scope of practice and procedures performed.</strong> The single biggest factor, and the reason a blanket healthcare price would be meaningless.</li>
<li><strong>Private practice income</strong>, and patient volumes.</li>
<li><strong>Limit of indemnity</strong>, and whether defence costs sit inside or outside it.</li>
<li><strong>Claims, complaints and disciplinary history.</strong></li>
<li><strong>Excess.</strong></li>
<li><strong>Retroactive date and run-off</strong>, which matter more here than in most professions because complaints arrive late.</li>
</ul>
<p>Our <a href="/pi-insurance-cost/">cost guide</a> works through the same factors.</p>

<h2>How Much Cover Do You Need?</h2>
<p>We have removed the recommended limits by specialty that used to appear here. We could not verify a published minimum limit from any New Zealand health registration authority, and inventing one would be worse than saying so. Work from what you can actually establish:</p>
<ul>
<li><strong>What your authority requires</strong>, obtained from the authority itself and in writing.</li>
<li><strong>What your employment or access agreement requires</strong>, which for many practitioners is the only binding document.</li>
<li><strong>Whether your indemnity is discretionary or contractual</strong>, since that determines whether cover is a decision someone makes or a right you hold.</li>
<li><strong>Whether defence costs erode the limit</strong>, in a field where defending a complaint is often the main cost.</li>
<li><strong>Run-off.</strong> Complaints about treatment and consent arrive years later, and cover that ends when you retire ends at the wrong moment.</li>
</ul>

<h2>Key Considerations When Choosing a PI Policy</h2>
<ul>
<li><strong>ACC exclusions:</strong> Understand exactly what ACC covers and does not cover for your practice type. Your PI policy must fill the gaps — ensure it is designed to do so.</li>
<li><strong>HDC and disciplinary proceedings coverage:</strong> Confirm that your policy covers legal representation in HDC investigations and registration body disciplinary proceedings from the complaint stage, not only after formal action is initiated.</li>
<li><strong>Retroactive date:</strong> Healthcare claims — particularly informed consent and chronic condition management claims — can arise years after treatment. <a href="/blog/claims-made-vs-occurrence-pi-insurance-nz/">Claims-made PI</a> requires continuous coverage with a retroactive date that covers past work.</li>
<li><strong>Scope of services covered:</strong> Telehealth, home visits, group therapy, and aesthetic procedures may not be automatically included. Check that all your services are covered.</li>
<li><strong>Run-off provisions:</strong> Plan run-off well before you stop practising. No New Zealand authority publishes a required duration, so work from the limitation position instead: six years from the act or omission under section 11 of the Limitation Act 2010, with up to three more years where the claimant only later knew of the matter under section 14.</li>
</ul>

<h2>Getting Quoted — What Information You Need</h2>
<p>To get a PI quote for your healthcare practice, prepare:</p>
<ul>
<li>Your professional registration details and registration body</li>
<li>Specialty and scope of practice</li>
<li>Annual private practice income</li>
<li>Number and types of patients treated per year</li>
<li>Procedures performed (if relevant)</li>
<li>Whether you provide telehealth services</li>
<li>Number of employed or contracted staff</li>
<li>Prior HDC complaints or PI claims in the last five years</li>
<li>Required cover limit and any registration body minimum requirements</li>
</ul>
<p><a href="/contact/">Contact our team</a> to be connected with a licensed insurance adviser. Note that medical indemnity and professional body member schemes cannot be arranged through us — for those, go directly to the scheme.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.nursingcouncil.org.nz/Public/Nursing/Annual_practising_certificate/NCNZ/nursing-section/Annual_practising_certificate.aspx" rel="nofollow noopener" target="_blank">Nursing Council of New Zealand — Annual practising certificate</a></li>
<li><a href="https://swrb.govt.nz/for-social-workers/practising-certificate/" rel="nofollow noopener" target="_blank">Social Workers Registration Board — Practising certificate</a></li>
<li><a href="https://www.midwife.org.nz/midwives/membership/" rel="nofollow noopener" target="_blank">NZ College of Midwives — Membership</a></li>
<li><a href="https://www.hdc.org.nz/making-a-complaint/what-happens-to-my-complaint/" rel="nofollow noopener" target="_blank">Health and Disability Commissioner — What happens to my complaint</a></li>
<li>NZMII — published medical indemnity scheme prices (fact sheet, undated, referencing the 2025 HDC report)</li>
<li><a href="https://www.legislation.govt.nz/act/public/2010/0110/latest/whole.html" rel="nofollow noopener" target="_blank">Limitation Act 2010</a>, sections 11 and 14</li>
</ul>
<p>We could not verify the position of several health registration authorities on professional indemnity, including under the Health Practitioners Competence Assurance Act 2003, and we have said so on the page rather than filling the gap. Last reviewed 7 September 2026. General information only, not legal, financial or clinical advice. We are an information and referral service, not an insurer, and we cannot arrange medical indemnity or professional body member schemes.</p>
</div>
`,
  },
  {
    slug: 'mortgage-brokers',
    name: 'Mortgage Brokers',
    icon: '🏦',
    shortDesc: 'Professional indemnity insurance for mortgage advisers and home loan brokers regulated under FMCA in New Zealand.',
    description: "Mortgage advisers giving regulated advice work under the Financial Markets Conduct Act 2013 and a Financial Advice Provider licence. Professional indemnity insurance is not a condition of that licence — the FMA consulted on adding one in June 2020 and decided against it in November 2020. What creates a requirement in practice is the group or FAP you operate under, and sometimes a client agreement. The exposure is real either way: claims turn on suitability and affordability, and they tend to surface when a borrower runs into trouble years after the loan was placed.",
    avgCost: 'Set by fee income and limit',
    coverageNeeded: [
      'Professional Indemnity (not an FMA licence condition — usually a group or FAP requirement)',
      'Public Liability',
      'Cyber Liability (for client financial data)',
      "Employers' Liability (for brokerages with staff)",
    ],
    keyRisks: [
      'Unsuitable loan product recommendations',
      'Incorrect affordability or serviceability assessment',
      'FMA regulatory investigations',
      'Disputes about affordability and responsible lending expectations',
      'Client data breaches',
      'Client verification and record-keeping failures',
    ],
    faqs: [
      { q: 'Is PI insurance required for mortgage brokers in NZ?', a: "No. Professional indemnity insurance is not a condition of an FMA financial advice provider licence. The seven standard conditions are record keeping, an internal complaints process, regulatory returns, outsourcing, business continuity and technology systems, ongoing requirements, and notification of material changes. The FMA consulted on adding a PI condition on 17 June 2020 and announced on 6 November 2020 that it had decided against it, and PI does not appear in the Code of Professional Conduct either. This page previously said PI was a licence condition. That was wrong. Where a requirement does exist for a mortgage adviser, it comes from the group or FAP you operate under — get that clause in writing." },
      { q: 'What claims do mortgage brokers face?', a: "Allegations that the loan or structure recommended did not suit the client, that affordability was not properly assessed, that commission or conflicts were not disclosed, or that a refinance cost the client more than it saved. The common thread is that the complaint is made years later, against the file you kept at the time." },
      { q: 'How much PI cover does a mortgage broker need?', a: "No regulator sets a level, because no regulator requires the cover. We have removed the limits this page used to recommend, since they were market habit rather than a sourced requirement. The figure that binds you is the one your group or FAP agreement specifies. Beyond that, think about the size of the lending your advice moves, whether the limit is per claim or in the aggregate, and whether defence costs erode it." },
      { q: 'Does PI insurance cover responsible lending complaints?', a: "PI responds to claims of professional negligence, which can include a failure to take reasonable care in assessing what a client could service. Fines and penalties imposed on you directly are a different question and are usually addressed by statutory liability cover, where they are insurable at all. Your obligations under the CCCFA and the AML rules sit outside insurance entirely — that is a compliance conversation, not a policy one." },
      { q: 'Are first home buyer claims a particular risk for mortgage brokers?', a: "They are the classic retail advice scenario: an inexperienced client, a large sum, and a decision that is hard to unwind. Complaints about loan structure, KiwiSaver first home withdrawals and missed eligibility for support schemes all follow the same pattern — the client acts, circumstances change, and the file is examined afterwards." },
      { q: 'What is run-off cover and when do mortgage brokers need it?', a: "Run-off maintains cover after you stop advising, whether that is retirement, a sale or a licence ending. PI is claims-made: the policy that responds is the one in force when the claim is made, not the one in force when the advice was given. Under the Limitation Act 2010 a claim can be brought up to six years from the act or omission, with a further three years available where the claimant only later knew of it. Arrange run-off before you exit, not after." },
    ],
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    keyStats: [
      { label: 'PI a condition of an FMA FAP licence', value: 'No' },
      { label: 'FMA standard conditions', value: 'Seven — none require insurance' },
      { label: 'FMA consultation on adding PI', value: 'Decided against, 6 November 2020' },
      { label: 'Usual source of the requirement', value: 'Your group or FAP agreement' },
    ],
    mandatoryRequirements: [
      'None imposed by the regulator. PI is not a condition of an FMA financial advice provider licence',
      'Law: a FAP licence, your own or one you are engaged under, is required to give regulated mortgage advice to retail clients. Insurance is not part of it',
      'The FMA consulted on adding a PI condition on 17 June 2020 and decided against it on 6 November 2020',
      'Code: the Code of Professional Conduct for Financial Advice Services does not require PI, and there is no obligation to disclose whether you hold it',
      'Commercial: the group, aggregator or FAP you operate under commonly requires PI at a stated limit. That is a contract between you and them — ask for it in writing',
      'Outside insurance entirely: your CCCFA and AML obligations are compliance matters. This page previously presented them as PI drivers; they are not',
    ],
    recommendedCover: [
      { type: 'Professional Indemnity', minLimit: 'No regulatory minimum', notes: 'The FMA sets no PI condition and therefore no limit. Any figure you must meet comes from your group or FAP agreement, or from a client contract.' },
      { type: 'Public Liability', minLimit: 'Set by contract', notes: 'No statutory minimum. Relevant if clients visit your office or you meet them at their premises.' },
      { type: 'Cyber Liability', minLimit: 'Set by contract', notes: 'No statutory minimum. You hold payslips, bank statements and identity documents, and those are first-party breach costs rather than PI ones.' },
      { type: "Employers' Liability", minLimit: 'Set by contract', notes: 'No statutory minimum. Sits alongside ACC, which covers work injury.' },
    ],
    relatedCoverage: ['professional-indemnity', 'public-liability', 'employers-liability', 'run-off-cover', 'management-liability'],
    longFormContent: `
<div class="keyfact">
<p><strong>PI is not an FMA licence condition for mortgage advisers.</strong> The seven standard conditions on a full financial advice provider licence are record keeping, an internal complaints process, regulatory returns, outsourcing, business continuity and technology systems, ongoing requirements, and notification of material changes. Insurance is not among them. The FMA consulted on adding professional indemnity on 17 June 2020 and <strong>decided against it on 6 November 2020</strong>. This page previously said cover was a FAP licence condition and that you could not operate legally without it. That was wrong. Where a requirement exists, it comes from the group or FAP you operate under.</p>
</div>

<h2>Why Mortgage Brokers Need Professional Indemnity Insurance</h2>
<p>Buying a home is the most significant financial decision most New Zealanders will ever make. When they engage a mortgage broker or home loan adviser, they place enormous trust in the professional guidance they receive. The home loan product you recommend, the lender you place them with, and the advice you give on structure, fixing, and repayment will shape their financial position for years or decades to come.</p>
<p>When that advice proves unsuitable — or when a client experiences financial hardship and looks back at their lending decisions — the mortgage broker is often in the firing line. This exposure has increased in recent years as interest rates rose sharply from historic lows, placing borrowers who fixed at low rates into higher-rate environments at rollover. Clients who feel they were not properly advised about fixing strategies, or who find themselves with a loan structure that does not suit their circumstances, may make a professional claim.</p>
<p>Mortgage advisers are regulated under the Financial Markets Conduct Act 2013, and holding a Financial Advice Provider licence — or operating under one — is a legal requirement for anyone giving regulated mortgage advice to retail clients. Professional indemnity insurance is not part of that licence. It is a commercial decision, and often a requirement of the group or FAP whose licence you work under, which is a different thing from a regulatory rule and worth keeping straight.</p>
<p><a href="/coverage/professional-indemnity/">Professional indemnity insurance</a> covers your legal defence costs and any compensation awarded if a client alleges your professional advice caused them financial loss. Given the size of the lending a single piece of advice can move, the potential scale of a claim has very little to do with the commission the deal earned.</p>

<h2>What the Rules Actually Require</h2>
<p>The regulatory position for mortgage advice is the same as for the rest of financial advice, and it is the opposite of what most insurance pages say.</p>
<p><strong>The FMCA and the FAP licence.</strong> Giving regulated financial advice, including mortgage advice, to retail clients requires a Financial Advice Provider licence — your own or one you are engaged under. The FMA attaches seven standard conditions to a full FAP licence: record keeping, an internal complaints process, regulatory returns, outsourcing, business continuity and technology systems, ongoing requirements, and notification of material changes. Professional indemnity insurance is not one of them.</p>
<p><strong>The FMA considered requiring it, and said no.</strong> The June 2020 consultation on standard conditions put a PI condition on the table. On 6 November 2020, releasing the final standard conditions, the FMA said it had decided not to impose one. That has not changed.</p>
<p><strong>The Code does not require it either.</strong> The Code of Professional Conduct for Financial Advice Services sets standards for ethical behaviour, conduct and client care, and for competence, knowledge and skill. It says nothing about insurance, and no disclosure obligation attaches to it.</p>
<p><strong>Where the requirement really comes from.</strong> The group, aggregator or FAP you operate under. Those agreements commonly require you to hold PI at a stated limit and to keep it current, and unlike the licence conditions, that obligation is enforceable against you by the counterparty. Read the clause and keep a copy.</p>
<p><strong>What is not a PI requirement.</strong> The Credit Contracts and Consumer Finance Act 2003 and the AML rules create compliance obligations that this page previously presented as reasons PI was mandatory. They are not insurance requirements. Handle them with your compliance adviser, and treat your PI limit as a separate decision.</p>

<h2>Common PI Claims Against Mortgage Brokers</h2>
<p>The claims that arise against mortgage advisers are directly linked to the lending decisions they facilitate:</p>
<ul>
<li><strong>Unsuitable loan product recommendations:</strong> Placing a client in a floating rate mortgage when a fixed rate would have been more appropriate for their circumstances, or vice versa. Recommending an interest-only structure to a client without adequately explaining the consequences. These are among the most common mortgage adviser claim scenarios.</li>
<li><strong>Affordability assessment failures:</strong> Advising a client that a loan is affordable when it is not — or failing to identify that the client cannot service the loan under stress scenarios — can result in clients experiencing financial hardship and making claims against the adviser who placed them.</li>
<li><strong>Failure to disclose conflicts of interest:</strong> Mortgage advisers receive commissions from lenders. Under FMCA and the Code, these must be disclosed. Failure to disclose, or placing a client with a higher-commission lender when a better-suited product was available elsewhere, creates serious PI exposure.</li>
<li><strong>First home buyer claims:</strong> First home buyers are retail clients who are often inexperienced with financial products. Claims about incorrect KiwiSaver first home withdrawal advice, missed First Home Loan or First Home Grant eligibility, or failure to identify suitable products are increasing in frequency.</li>
<li><strong>Refinancing advice errors:</strong> Advising a client to refinance in circumstances where the costs of refinancing outweigh the benefits, or where a better outcome could have been achieved with the existing lender, can result in claims for the net financial harm suffered.</li>
<li><strong>FMA investigation costs:</strong> Even where no compensation is ultimately paid, the cost of responding to an FMA investigation or complaint — including legal representation and documentation — can be substantial. PI insurance covers these costs.</li>
</ul>

<h2>What Cover Do Mortgage Brokers Need?</h2>
<p><a href="/coverage/professional-indemnity/">Professional indemnity insurance</a> is the mandated core cover for mortgage advisers. Beyond PI:</p>
<ul>
<li><strong><a href="/coverage/public-liability/">Public liability insurance:</a></strong> Required for office-based client meetings and any situation where clients visit your premises. Covers bodily injury and property damage claims.</li>
<li><strong>Cyber liability insurance:</strong> Mortgage advisers handle highly sensitive client financial data: payslips, bank statements, tax returns, identification documents, and credit information. A data breach can trigger Privacy Act obligations and significant client claims. Cyber cover is strongly recommended.</li>
<li><strong><a href="/coverage/statutory-liability/">Statutory liability insurance:</a></strong> Covers defence costs and representation for unintentional CCCFA breaches and other regulatory failures. Whether a penalty is insurable depends on the statute and the wording, so do not assume it.</li>
<li><strong><a href="/coverage/management-liability/">Management liability insurance:</a></strong> For brokerage principals and directors, management liability provides protection against employment practices claims and business governance risks.</li>
<li><strong><a href="/coverage/employers-liability/">Employers' liability insurance:</a></strong> Required for brokerages with employed advisers, processing staff, or administrative personnel.</li>
<li><strong><a href="/coverage/run-off-cover/">Run-off cover:</a></strong> Critical on retirement or licence surrender. Mortgage advice claims — particularly those relating to long-term loan decisions — can arise years after the advice was given.</li>
</ul>

<h2>What PI Costs a Mortgage Adviser</h2>
<p>The monthly range and the worked examples that used to sit here had no source and have been removed, including the claim that mortgage advice sits at the higher end of the financial advice market. There is no public New Zealand professional indemnity premium dataset. Cover is broker-distributed and individually underwritten, and the only official New Zealand cost figures that exist relate to architects and to law firms.</p>
<p>What an underwriter actually rates on:</p>
<ul>
<li><strong>Limit of indemnity</strong>, usually set by your group or FAP agreement.</li>
<li><strong>Commission income</strong>, the primary rating base.</li>
<li><strong>What you write.</strong> Residential lending is looked at differently from commercial and development lending. Qualitative, because nobody publishes the loadings.</li>
<li><strong>Number of advisers under the policy.</strong></li>
<li><strong>Claims, complaints and regulatory history.</strong></li>
<li><strong>Excess</strong>, and whether defence costs sit inside or outside the limit.</li>
<li><strong>Retroactive date and run-off</strong>, because lending complaints arrive late.</li>
</ul>
<p>Our <a href="/pi-insurance-cost/">cost guide</a> works through the same factors. A quote is the only way to a number.</p>

<h2>How Much Cover Do You Need?</h2>
<p>No regulator sets a limit, because no regulator requires the cover. We have removed the recommended limits this page used to publish. Work from what you can verify:</p>
<ul>
<li><strong>What your group or FAP agreement requires in writing.</strong> This is the binding number for most advisers.</li>
<li><strong>The size of the lending your advice moves</strong>, which is unrelated to the commission it earns.</li>
<li><strong>Per claim or aggregate</strong>, which matters if a single practice or process produces several related complaints.</li>
<li><strong>Whether defence costs erode the limit.</strong></li>
<li><strong>How far back your retroactive date reaches</strong>, including advice given at a previous business.</li>
</ul>

<h2>Key Considerations When Choosing a PI Policy</h2>
<ul>
<li><strong>Retroactive date:</strong> <a href="/blog/claims-made-vs-occurrence-pi-insurance-nz/">Claims-made PI</a> requires a policy in force when the claim is made. Mortgage advice claims can arise years after the loan was placed — particularly where clients experience long-term financial hardship. Protect your retroactive date.</li>
<li><strong>Group and FAP requirements:</strong> Your licence conditions do not require insurance, but your group or FAP agreement probably does. Check the policy against that clause — the limit, the scope of advice covered and any requirement to notify the group of a claim.</li>
<li><strong>Commission disclosure coverage:</strong> Check that the policy covers claims arising from allegations of inadequate commission disclosure or conflicts of interest.</li>
<li><strong>FMA investigation coverage:</strong> Confirm that the policy covers legal representation from the point of an FMA inquiry — not only after formal proceedings are initiated.</li>
<li><strong><a href="/coverage/run-off-cover/">Run-off cover:</a></strong> Mortgage advice claims have a long tail. Plan your run-off cover arrangements well before retirement or licence surrender.</li>
</ul>

<h2>Getting Quoted — What Information You Need</h2>
<p>To get a PI quote for your mortgage advisory practice, prepare:</p>
<ul>
<li>Annual commission income for the current and previous two years</li>
<li>FAP licence number and dealer group arrangements (if applicable)</li>
<li>Types of mortgage advice provided (residential, commercial, development, KiwiSaver)</li>
<li>Loan volumes and typical loan sizes</li>
<li>Number of employed advisers and support staff</li>
<li>Prior PI claims or FMA regulatory actions in the last five years</li>
<li>Required cover limit and any FAP compliance requirements</li>
</ul>
<p><a href="/contact/">Contact our team</a> to be connected with a licensed insurance adviser who can <a href="/compare/">compare PI options</a> for mortgage advice businesses.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.fma.govt.nz/assets/Licensing-guides/Standard-Conditions-for-full-FAP-licences.pdf" rel="nofollow noopener" target="_blank">FMA — Standard conditions for full FAP licences (PDF)</a></li>
<li><a href="https://www.fma.govt.nz/assets/Consultations/Consultation-standard-conditions-FAP-full-licensing.pdf" rel="nofollow noopener" target="_blank">FMA — Consultation: standard conditions for full FAP licensing (PDF)</a>, 17 June 2020</li>
<li><a href="https://www.fma.govt.nz/news/all-releases/media-releases/fma-releases-standard-conditions-for-licensing-of-financial-advice/" rel="nofollow noopener" target="_blank">FMA — Standard conditions released for licensing of financial advice</a>, 6 November 2020</li>
<li><a href="https://financialadvicecode.govt.nz/wp-content/uploads/2025/10/financial-advice-code-of-conduct-2025.pdf" rel="nofollow noopener" target="_blank">Code of Professional Conduct for Financial Advice Services (PDF)</a>, in force 1 November 2025</li>
<li><a href="https://www.fma.govt.nz/assets/Information-sheets/Classes-of-financial-advice-service-for-full-FAP-licences.pdf" rel="nofollow noopener" target="_blank">FMA — Classes of financial advice service for full FAP licences (PDF)</a></li>
<li><a href="https://www.legislation.govt.nz/act/public/2010/0110/latest/whole.html" rel="nofollow noopener" target="_blank">Limitation Act 2010</a>, sections 11 and 14</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal or financial advice. We are an information and referral service, not an insurer; the advisers we refer you to are licensed. Confirm your own obligations with the FMA and with the group or FAP whose licence you work under.</p>
</div>
`,
  },
]
