export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  metaTitle?: string
  metaDescription?: string
  content: string
  category: string
  date: string
  readTime: string
  image: string
  author: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-professional-indemnity-insurance-nz',
    title: 'What Is Professional Indemnity Insurance? A Plain-English Guide for NZ Professionals',
    excerpt: 'Professional indemnity insurance protects you if a client claims your professional advice or services caused them a financial loss. Here is everything you need to know.',
    metaTitle: 'What Is Professional Indemnity Insurance?',
    metaDescription: 'Professional indemnity insurance covers you when a client says your advice or services caused a financial loss. How it works for NZ professionals.',
    category: 'Guides',
    date: '2026-09-07',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80',
    author: 'sarah-thompson',
    content: `<h2>What Is Professional Indemnity Insurance?</h2>
<p>Professional indemnity (PI) insurance — also called professional liability insurance — protects you if a client suffers a financial loss and holds you responsible for it. It covers the cost of your legal defence, any compensation or damages awarded, and investigation costs — regardless of whether the claim against you is justified.</p>
<p>In New Zealand, PI insurance is increasingly essential for any professional who provides advice, expertise or specialised services. Whether you are an accountant, architect, IT consultant, financial adviser, real estate agent or management consultant, a single claim from a dissatisfied client can cost tens of thousands — or hundreds of thousands — of dollars in legal fees and compensation.</p>

<h2>How Does Professional Indemnity Insurance Work?</h2>
<p>PI insurance operates on a "claims-made" basis. This means the policy that responds to a claim is the one that is active at the time the claim is made — not the one that was in force when the work was done. This distinction is critical:</p>
<ul>
<li>You must have a PI policy active when a client makes a claim against you</li>
<li>If you stop practising and let your policy lapse, claims from past work may not be covered</li>
<li>Run-off cover (also called tail cover) is available to protect you after you retire or cease trading</li>
</ul>
<p>Most PI policies also include a retroactive date — the date from which past work is covered under the current policy. As long as the work was done after your retroactive date and the claim is made during the policy period, you should be covered.</p>

<h2>What Does PI Insurance Cover?</h2>
<p>A typical professional indemnity insurance policy covers:</p>
<ul>
<li><strong>Negligence:</strong> Claims that you failed to meet the expected standard of care in your profession</li>
<li><strong>Errors and omissions:</strong> Mistakes or oversights in the professional services you provided</li>
<li><strong>Breach of professional duty:</strong> Failing to meet the obligations your profession imposes</li>
<li><strong>Misrepresentation:</strong> Providing incorrect information that a client relied on to their detriment</li>
<li><strong>Intellectual property infringement:</strong> Unintentionally using another party's intellectual property</li>
<li><strong>Breach of confidentiality:</strong> Accidentally disclosing client information</li>
<li><strong>Defamation:</strong> Unintentional libel or slander in the course of professional activities</li>
<li><strong>Legal defence costs:</strong> Barrister, solicitor and court costs — even for unfounded claims</li>
</ul>

<h2>What Is Not Covered by PI Insurance?</h2>
<p>PI insurance is not all-encompassing. Common exclusions include:</p>
<ul>
<li>Deliberate or fraudulent acts by you or your business</li>
<li>Bodily injury or property damage (covered by public liability)</li>
<li>Employment disputes with your own staff (covered by employers' liability)</li>
<li>Known claims or incidents you were aware of before taking out the policy</li>
<li>Work done before your retroactive date (if your policy has one)</li>
<li>Business activities outside the scope defined in your policy</li>
</ul>

<h2>How Much Does PI Insurance Cost in New Zealand?</h2>
<p>No New Zealand insurer publishes premium tables for professional indemnity. Cover here is broker-distributed and individually underwritten, which means any per-month figure you see on a website is invented. This page used to carry a set of monthly averages by profession. They had no New Zealand source and they have been removed.</p>
<p>The only official New Zealand cost guidance that exists is the Government's estimate, published in November 2025 to support the building reform package, that professional indemnity insurance for architects typically costs between $1,500 and $3,000 per person each year, often covered by the firm. Treat it as what it is: a policy estimate for design professionals with no methodology attached. It is not a quote, and it does not travel to other professions.</p>
<p>What an underwriter actually rates on is the limit of indemnity you buy, your fee income or revenue, the type of work you do, your claims and notification history, the excess you accept, your retroactive date, and whether defence costs sit inside or outside the limit. Those are the levers worth discussing, and they are why two practices in the same profession can be priced very differently.</p>

<h2>How Much PI Cover Do I Need?</h2>
<p>No New Zealand regulator sets a general limit, so there is no single right answer. The most useful anchors are the minimums that specific regimes actually publish: $200,000 is the minimum professional indemnity an engineering firm represents that it holds when it issues a Producer Statement; $250,000 is the minimum Architectural Designers New Zealand requires of its self-employed Professional members; $1M is the minimum REINZ requires of member agencies; and the New Zealand Law Society standard is the greater of $1.2m per practice or $900k per partner. When choosing your own level, consider:</p>
<ul>
<li><strong>Contract requirements:</strong> for most practices this is the real driver. Clients, councils and procurement panels specify a limit in the appointment, and that specified limit is what you buy</li>
<li><strong>Membership body requirements:</strong> some membership bodies set a minimum, as above. These are conditions of membership, not conditions of a licence, and the two get confused constantly</li>
<li><strong>The size of decisions your advice influences:</strong> If your advice affects multi-million dollar transactions, you need commensurate cover</li>
<li><strong>Your annual revenue:</strong> Some insurers set minimum cover levels relative to turnover</li>
</ul>

<h2>Who Needs PI Insurance in New Zealand?</h2>
<p>Almost nobody is required to hold professional indemnity insurance by a New Zealand regulator. Where a requirement exists it usually comes from a membership body or a client contract, and this page previously blurred the three. The accurate position, profession by profession:</p>
<ul>
<li><strong>Financial advisers:</strong> not a licence condition. Professional indemnity is not among the seven standard conditions of a financial advice provider licence, and it is not in the Code of Professional Conduct. The FMA consulted on adding it in June 2020 and decided against it in November 2020. Many product providers require it under distribution agreements, which is a contract term, not a regulatory one</li>
<li><strong>Accountants:</strong> CA ANZ members in public practice in New Zealand must hold current and appropriate professional indemnity insurance to hold a Certificate of Public Practice. CPA Australia requires members offering public accounting services in New Zealand to hold cover. Neither publishes a New Zealand minimum limit</li>
<li><strong>Real estate agents:</strong> the Real Estate Authority does not require it. Licensing criteria and the Professional Conduct and Client Care Rules 2012 say nothing about insurance. REINZ member agencies must hold a minimum of $1M under Principle 19 of its Code of Agency Practice, and that is a membership obligation</li>
<li><strong>Architects and designers:</strong> registration under the Registered Architects Act 2005 does not require it. There is no "Architects Act 2022". Self-employed ADNZ Professional members must hold at least $250,000 as a membership condition. The mandatory requirement for building design professionals is in the Building Amendment Bill, which is before select committee and is expected to take effect in 2028</li>
<li><strong>Engineers:</strong> Engineering New Zealand does not require it for membership or for CPEng. A firm issuing a Producer Statement represents that it holds at least $200,000</li>
<li><strong>Lawyers:</strong> the New Zealand Law Society sets a cover standard of the greater of $1.2m per practice or $900k per partner, and consulted in March 2026 on whether professional indemnity should be made compulsory</li>
<li><strong>Healthcare practitioners:</strong> this varies by profession and is widely overstated. The Nursing Council does not require it for an annual practising certificate, and the Social Workers Registration Board does not require it for a practising certificate. Check your own regulator rather than assuming</li>
<li><strong>Everyone else:</strong> no regulator requires it. Client contracts frequently do, and the claim arrives whether or not anyone asked you to insure</li>
</ul>

<h2>Getting the Right PI Insurance in New Zealand</h2>
<p>PI insurance is a specialised product, and policy wordings vary significantly between insurers. Key things to look for include:</p>
<ul>
<li>The retroactive date and how historical work is covered</li>
<li>Whether your specific professional activities are covered (check the definition of "professional services")</li>
<li>The excess (deductible) amount and whether it applies to defence costs</li>
<li>Automatic reinstatement of the limit after a claim</li>
<li>Run-off cover provisions and cost</li>
</ul>
<p>Working with a licensed insurance adviser who specialises in professional liability can help you navigate the options and ensure you have the right protection for your practice.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.fma.govt.nz/assets/Licensing-guides/Standard-Conditions-for-full-FAP-licences.pdf" rel="nofollow noopener" target="_blank">FMA — Standard Conditions for full financial advice provider licences (PDF)</a>, November 2020</li>
<li><a href="https://www.rea.govt.nz/real-estate-professionals/apply-for-your-licence/required-criteria-and-qualifications-to-work-in-real-estate/" rel="nofollow noopener" target="_blank">REA — Required criteria and qualifications to work in real estate</a></li>
<li><a href="https://www.reinz.co.nz/common/Uploaded%20files/REINZ/Website/2024/Codes%20of%20Practice/REINZ%20Code%20of%20Agency%20Practice%20Nov%202024.pdf" rel="nofollow noopener" target="_blank">REINZ Code of Agency Practice (PDF)</a>, November 2024</li>
<li><a href="https://www.legislation.govt.nz/act/public/2005/0038/latest/whole.html" rel="nofollow noopener" target="_blank">Registered Architects Act 2005</a></li>
<li><a href="https://adnz.org.nz/professional" rel="nofollow noopener" target="_blank">ADNZ — Professional membership</a></li>
<li><a href="https://www.engineeringnz.org/engineer-tools/engineering-documents/producer-statements/professional-indemnity-insurance-why-200000/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Professional indemnity insurance: why $200,000?</a></li>
<li><a href="https://www.charteredaccountantsanz.com/member-services/certificate-of-public-practice" rel="nofollow noopener" target="_blank">CA ANZ — Certificate of Public Practice</a></li>
<li><a href="https://www.beehive.govt.nz/sites/default/files/2025-11/Consumer%20protections%20for%20building%20consent%20system%20reforms%20factsheet.pdf" rel="nofollow noopener" target="_blank">Consumer protections for building consent system reforms — factsheet (PDF)</a>, November 2025</li>
</ul>
<p>Last reviewed 7 September 2026. We are an information and referral service, not an insurer and not a law firm; the advisers we refer you to are licensed. General information only, not legal or financial advice. Policy wordings differ between underwriters, and your schedule and wording govern, not this page.</p>
</div>`,
  },
  {
    slug: 'pi-insurance-cost-nz-2026',
    title: 'What Professional Indemnity Insurance Costs in NZ — and Why Nobody Publishes a Price',
    excerpt: 'No New Zealand insurer publishes professional indemnity rates. Here is what an underwriter actually prices on, the published minimum limits that drive the number, and the only official cost figures that exist.',
    metaTitle: 'PI Insurance Cost NZ — What Drives the Price',
    metaDescription: 'NZ professional indemnity is broker-distributed and individually underwritten, so no rate tables exist. What underwriters rate on, and the only official NZ cost figures.',
    category: 'Cost',
    date: '2026-09-07',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=1200&auto=format&fit=crop&q=80',
    author: 'sarah-thompson',
    content: `<div class="keyfact">
<p><strong>There is no published price list for professional indemnity insurance in New Zealand.</strong> Cover is broker-distributed and individually underwritten, and no insurer publishes rate tables. This page previously carried a table of monthly premiums by profession, plus an average premium attributed to a third party's book of business. None of it was sourced to New Zealand data, so we have deleted the lot rather than dress it up. What follows is what an underwriter actually prices on, and the only official cost figures that exist.</p>
</div>

<h2>Why nobody can quote you a price on a web page</h2>
<p>Professional indemnity is not a rated commodity product like a motor policy. It is distributed through brokers and priced case by case by an underwriter who reads your proposal form. Two consultancies in the same discipline, with the same revenue, are routinely priced differently because of their claims history, the work they take on, and the limit their contracts oblige them to buy.</p>
<p>We went looking for a New Zealand premium dataset and there is not one. The main New Zealand professional indemnity underwriters publish no pricing. Engineering New Zealand, the New Zealand Institute of Architects, Architectural Designers New Zealand and Chartered Accountants Australia and New Zealand publish no premiums. The New Zealand Law Society's own March 2026 consultation on compulsory professional indemnity discusses cost increases at length and contains no dollar premium figures at all. Marsh's global insurance market index has no New Zealand breakout, because its Pacific region bundles New Zealand with Australia.</p>
<p>So when a website states that your profession pays a specific amount per month, that figure was not derived from New Zealand data. Being honest about that gap is more useful to you than a confident number that turns out to be an Australian average.</p>

<h2>What an underwriter actually rates on</h2>

<h3>The limit of indemnity</h3>
<p>The single biggest lever, and usually the one you have least control over, because a client contract sets it. It is worth knowing the limits that New Zealand regimes actually publish, because they are the only real anchors available:</p>
<ul>
<li><strong>$200,000</strong> — the minimum professional indemnity an engineering firm represents that it holds when it issues a Producer Statement. Engineering New Zealand notes that this value is standard and unrelated to construction costs.</li>
<li><strong>$250,000</strong> — the minimum Architectural Designers New Zealand requires of its self-employed Professional members.</li>
<li><strong>$1M</strong> — the minimum REINZ requires of member agencies under Principle 19 of its Code of Agency Practice, covering the business and all individuals engaged in it.</li>
<li><strong>$1.2m per practice or $900k per partner, whichever is greater</strong> — the New Zealand Law Society standard. The New Zealand Society of Conveyancers figure is $1.2m.</li>
</ul>
<p>Note what these are not. None of them is a regulator setting a general market standard, and none of them is a recommendation for your practice. They are the published minimums of particular regimes, and they are useful mainly as a floor to reason from.</p>

<h3>Fee income or revenue</h3>
<p>For most professional indemnity classes this is the primary rating base. The underwriter is estimating how much work you do and therefore how much exposure you generate, and fee income is the cleanest proxy available. It is also why a growth year usually produces a premium increase even with a clean claims record.</p>

<h3>Work type and discipline</h3>
<p>What you do matters more than what you are called. Residential construction work, structural engineering and geotechnical engineering rate materially harder than most professional services, because remediation cost bears no relationship to the fee that generated the exposure and because the claims history of that sector sits behind current underwriting appetite. We are not going to attach a percentage to that, because no published New Zealand data supports one.</p>

<h3>Claims and notification history</h3>
<p>Both matter, and notifications matter more than people expect. A circumstance notified but never turned into a claim still appears on your record and still gets underwritten. That is not a reason to withhold a notification, which would be far more expensive, but it is a reason to understand what your broker is putting on the form.</p>

<h3>The excess</h3>
<p>A higher excess reduces premium, with diminishing returns as it rises. There is one published New Zealand standard worth knowing: the Law Society's position that an excess should not exceed the greater of 1% of the indemnity limit or $20,000. That is a useful sanity check in any profession. If a quote is cheap because the excess is a number your business could not absorb in a bad month, it is not cheap.</p>

<h3>Retroactive date and run-off</h3>
<p>Professional indemnity is claims-made, so the policy that answers a claim is the one in force when the claim is made, not the one in force when you did the work. Prior-acts cover is therefore a genuine price lever: a policy with a retroactive date of today is cheaper than one reaching back over a decade of work, and it is also close to worthless if you have a decade of work behind you. Run-off cover, for when you retire, sell or wind up, is negotiated at the point of purchase and is worth asking about at renewal while you still have leverage.</p>

<h3>Defence costs inside or outside the limit</h3>
<p>Whether legal costs erode your limit or sit in addition to it changes both the price and the value of the policy. On a multi-party construction dispute, costs-inclusive limits erode quickly. This is one of the places where the cheaper quote is frequently the worse product.</p>

<h3>What your contracts require</h3>
<p>Clients, councils and procurement panels frequently specify the limit, and the specified limit sets the price. If you are pricing cover before you have read the appointment, you are guessing.</p>

<h2>The only official cost figures in New Zealand</h2>
<p>Two sources publish anything usable, and both come with caveats we are going to state rather than bury.</p>

<h3>The Government: $1,500 to $3,000 per person per year for design professionals</h3>
<p>The Beehive factsheet of 24 November 2025 supporting the building reform package states that professional indemnity insurance for architects typically costs between $1,500 and $3,000 per person each year, often covered by the firm. The Cabinet paper of 18 November 2025 gives the same range at paragraph 54, describing it as varying with the work undertaken.</p>
<p>The caveat is important. This is a government estimate published to support a policy decision, with no methodology attached. It is not survey data, it is not a quote, and it should not be stretched to cover professions outside building design.</p>

<h3>The New Zealand Law Society and KPMG: benchmarking law practice costs</h3>
<p>The Law Society's <em>Benchmarking costs of law practice in New Zealand</em> report, prepared with KPMG and published in March 2024, surveyed 124 firms in October and November 2023. It gives average professional indemnity cost per firm for 2023: <strong>$2,850</strong> for a barrister, <strong>$7,227</strong> for a sole practitioner, <strong>$66,044</strong> for a small firm of 2 to 19 lawyers, <strong>$100,996</strong> for a medium firm of 20 to 49, and <strong>$306,458</strong> for a large firm of 50 or more.</p>
<p>The report also found that professional indemnity grew at 23.8% compound annually between 2021 and 2023, the highest growth of any overhead category measured, and 33.1% for small firms.</p>
<p>Three caveats. These are law firms only, so they say nothing directly about any other profession. They are per firm, not per person, so the large-firm figure covers a great many lawyers. And they are 2023 data, published in 2024, in a category the same report shows was rising fast.</p>

<h2>What we are not going to tell you</h2>
<p>We are not going to give you a monthly figure for your profession, a percentage uplift for moving from $1M to $2M of cover, or a claim that premiums vary by a certain percentage between insurers. Those numbers appeared on this page before. None of them had a New Zealand source, and inventing a range is not more helpful than saying we do not know.</p>
<p>What we can tell you is that the shape of a professional indemnity quote is predictable even when the number is not, and that the factors above are the ones a broker will be working through with an underwriter on your behalf.</p>

<h2>Is PI insurance tax deductible?</h2>
<p>Professional indemnity premiums are a business expense incurred in earning income and are deductible for businesses and self-employed professionals in New Zealand. If your circumstances are unusual, confirm the treatment with your accountant rather than with an insurance broker.</p>

<h2>How to get a realistic number</h2>
<p>The only way to find out what your cover costs is to have a broker take your details to the market. To make that quick, have ready your fee income for the last financial year, a description of the services you actually provide, the limit and excess any client contract requires, your claims and notification history, and the retroactive date on your current policy if you have one.</p>
<p>If a quote comes back materially cheaper than the alternatives, check the limit, the excess, whether defence costs are inside or outside the limit, and the retroactive date before you treat it as a saving.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.beehive.govt.nz/sites/default/files/2025-11/Consumer%20protections%20for%20building%20consent%20system%20reforms%20factsheet.pdf" rel="nofollow noopener" target="_blank">Consumer protections for building consent system reforms — factsheet (PDF)</a>, 24 November 2025</li>
<li><a href="https://www.mbie.govt.nz/dmsdocument/31701-regulatory-impact-statement-supporting-mechanisms-for-proportionate-liability-in-the-building-and-construction-sector-proactiverelease-pdf" rel="nofollow noopener" target="_blank">MBIE — Regulatory Impact Statement, proportionate liability (PDF)</a>, 18 November 2025</li>
<li><a href="https://www.lawsociety.org.nz/professional-practice/practising-well/benchmarking-costs-of-law-practice-in-new-zealand/" rel="nofollow noopener" target="_blank">New Zealand Law Society and KPMG — Benchmarking costs of law practice in New Zealand</a>, March 2024</li>
<li><a href="https://www.engineeringnz.org/engineer-tools/engineering-documents/producer-statements/professional-indemnity-insurance-why-200000/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Professional indemnity insurance: why $200,000?</a></li>
<li><a href="https://adnz.org.nz/professional" rel="nofollow noopener" target="_blank">ADNZ — Professional membership</a></li>
<li><a href="https://www.reinz.co.nz/common/Uploaded%20files/REINZ/Website/2024/Codes%20of%20Practice/REINZ%20Code%20of%20Agency%20Practice%20Nov%202024.pdf" rel="nofollow noopener" target="_blank">REINZ Code of Agency Practice (PDF)</a>, November 2024</li>
</ul>
<p>Last reviewed 7 September 2026. We are an information and referral service, not an insurer; the advisers we refer you to are licensed. General information only, not legal, tax or financial advice. Any premium you are quoted depends on your own circumstances and on the underwriter's assessment of them.</p>
</div>`,
  },
  {
    slug: 'professional-indemnity-vs-public-liability-nz',
    title: 'Professional Indemnity vs Public Liability Insurance — What Is the Difference?',
    excerpt: 'Professional indemnity covers financial loss from professional advice errors. Public liability covers physical injury or property damage to third parties. Most professionals need both.',
    metaTitle: 'PI vs Public Liability: What Is the Difference?',
    metaDescription: 'Professional indemnity covers financial loss from advice errors; public liability covers injury or property damage. Why most professionals need both.',
    category: 'Guides',
    date: '2026-04-20',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80',
    author: 'sarah-thompson',
    content: `<h2>Professional Indemnity vs Public Liability — The Key Difference</h2>
<p>Professional indemnity (PI) and public liability (PL) are two distinct insurance products that cover different types of risk. Understanding the difference is essential for ensuring you have adequate protection.</p>

<h2>Professional Indemnity Insurance</h2>
<p>PI insurance covers claims arising from your professional advice, expertise or services. The key characteristic is that the harm suffered by a client is financial or economic in nature — not physical.</p>
<p>Examples of PI claims:</p>
<ul>
<li>An accountant prepares incorrect tax returns, resulting in a client paying IRD penalties</li>
<li>An engineer's design flaw causes a building to be non-compliant, requiring expensive remediation</li>
<li>An IT consultant's system implementation fails, causing weeks of business downtime</li>
<li>A financial adviser recommends an unsuitable investment product that loses value</li>
</ul>
<p>PI insurance covers: legal defence costs, compensation and damages, investigation costs, and settlements.</p>

<h2>Public Liability Insurance</h2>
<p>Public liability insurance covers claims arising from physical injury to a person or physical damage to property caused by your business activities. The harm is tangible and physical, not financial or economic.</p>
<p>Examples of PL claims:</p>
<ul>
<li>A client trips on a loose cable at your office and breaks their ankle</li>
<li>You accidentally knock over a client's expensive laptop during a meeting</li>
<li>A product you supplied causes a fire at a client's premises</li>
<li>A contractor working on your behalf damages a client's flooring</li>
</ul>
<p>PL insurance covers: third-party bodily injury compensation, third-party property damage, legal defence costs, and medical expenses.</p>

<h2>Why Most Professionals Need Both</h2>
<p>Professional indemnity and public liability cover different gaps — and most professional businesses need both policies. Here is why:</p>
<ul>
<li>PI alone does not cover a client who slips on a wet floor in your office</li>
<li>PL alone does not cover a client who suffers financial loss because of your professional advice</li>
<li>Many client contracts require both PI and PL before you can start work</li>
<li>Government contracts and procurement panels commonly mandate minimum levels of each cover</li>
</ul>

<h2>What About Management Liability?</h2>
<p>Management liability insurance is a bundled product that typically combines directors' and officers' liability, employment practices liability, statutory liability, and crime cover. It is a separate product from both PI and PL, and covers risks arising from how your business is managed — not what services you provide or physical interactions with clients.</p>

<h2>Getting Combined Cover</h2>
<p>Many insurers offer combined PI and PL packages, which simplifies administration and can provide cost savings compared to purchasing each cover separately. A licensed insurance adviser can help you structure the right combination of covers for your specific profession and risk profile.</p>`,
  },
  {
    slug: 'claims-made-vs-occurrence-pi-insurance-nz',
    title: 'Claims-Made vs Occurrence PI Insurance — Why the Difference Matters in NZ',
    excerpt: 'Professional indemnity insurance in NZ is almost always "claims-made". Understanding what this means — and why you need run-off cover — is critical for every professional.',
    metaTitle: 'Claims-Made vs Occurrence PI Cover in NZ',
    metaDescription: 'PI insurance in NZ is almost always claims-made. What that means for work you did years ago, why cover gaps appear, and where run-off cover fits in.',
    category: 'Guides',
    date: '2026-04-25',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    content: `<h2>What Is Claims-Made PI Insurance?</h2>
<p>Professional indemnity insurance in New Zealand operates almost universally on a "claims-made" basis. This means the policy that responds to a claim is the one that is active when the claim is first made against you — not the policy that was in force when you did the work.</p>

<h2>How Claims-Made Cover Works — An Example</h2>
<p>You are an accountant. In 2023, you prepared a client's tax return and made a significant error. The client does not discover the error until 2026 when an IRD audit reveals it. The client makes a claim against you in 2026.</p>
<p>Under a claims-made policy: the policy that responds is your 2026 PI policy — not the 2023 policy you had when you did the work. As long as you have maintained continuous PI insurance since 2023 (covering the retroactive date back to before the work was done), and your 2026 policy is active when the claim is made, you are covered.</p>
<p>If you had let your PI policy lapse between 2023 and 2026, the claim would not be covered — even though the error happened while you were insured.</p>

<h2>What Is a Retroactive Date?</h2>
<p>Your PI policy's retroactive date is the earliest date from which past work is covered under your current policy. It is typically the date you first took out PI insurance — and as long as you maintain continuous cover with the same insurer (or transfer it on renewal), your retroactive date will remain unchanged.</p>
<p>If you switch insurers without confirming that your retroactive date is maintained, you may end up with a gap in coverage for historical work. Always check the retroactive date on your new policy before cancelling your existing one.</p>

<h2>What Is Occurrence PI Insurance?</h2>
<p>Occurrence-based policies respond based on when the incident or error occurred, not when the claim is made. Occurrence PI is rare in New Zealand — most PI policies here are claims-made. However, some public liability and product liability policies are occurrence-based.</p>

<h2>Why You Need Run-Off Cover When You Stop Practising</h2>
<p>Because PI is claims-made, if you retire, close your business, or stop practising and let your PI policy lapse, any future claims arising from your past work will not be covered. This is where run-off cover (also called tail cover) becomes essential.</p>
<p>Run-off cover extends your claims-made protection into the future after you stop practising. Typically available for 1, 3, 5 or 7 years, it ensures that a claim made after you retire — but arising from work you did while practising — is still covered by your insurance.</p>

<h2>Who Needs Run-Off Cover?</h2>
<ul>
<li>Professionals retiring from practice</li>
<li>Business owners winding up or selling their business</li>
<li>Consultants moving into employed roles (and no longer needing their own PI)</li>
<li>Anyone whose current PI policy is not being renewed</li>
<li>Businesses transferring professional liability to a new entity</li>
</ul>

<h2>What Does Run-Off Cover Cost?</h2>
<p>We are not going to give you a multiple, because no New Zealand source publishes one. Run-off is negotiated at the point of purchase and varies with the insurer, the period you want, and the book of work being covered. The practical advice is to ask your current insurer for run-off terms in writing at a renewal, while you are still a customer and still have leverage, rather than at the point you cease trading.</p>

<h2>How Far Into the Future Should Run-Off Reach?</h2>
<p>Work backwards from the limitation law rather than from a rule of thumb:</p>
<ul>
<li>The primary limitation period is six years under section 11 of the Limitation Act 2010, running from the act or omission — not from when a project was completed.</li>
<li>Section 14 of the Limitation Act 2010 adds a late knowledge extension of three years, running from when the claimant knew or ought reasonably to have known.</li>
<li>For anything touching building work, section 393 of the Building Act 2004 imposes an absolute ten-year longstop on civil proceedings, also running from the act or omission.</li>
</ul>
<p>That is why a designer or engineer thinks about run-off differently from a marketing consultant: the tail on building work is a decade by statute.</p>`,
  },
  {
    slug: 'mandatory-pi-nz-construction-sector-2025',
    title: 'Mandatory PI Insurance for NZ Building Design — Where the Law Actually Stands',
    excerpt: 'The mandatory PI requirement is real, but it covers design professionals only, it is not law yet, and MBIE expects it to start in 2028. Here is the accurate position.',
    metaTitle: 'Mandatory PI Insurance NZ Construction — 2026 Status',
    metaDescription: 'The NZ mandatory PI requirement covers building design professionals, not builders. It is still a Bill before select committee and is expected to start in 2028.',
    category: 'Regulatory',
    date: '2026-09-07',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    content: `<div class="keyfact">
<p><strong>Status as at September 2026: not yet law.</strong> The mandatory professional indemnity requirement was announced on 24 November 2025 and sits in the Building Amendment Bill, introduced to Parliament on 2 July 2026. The Bill is before select committee and submissions close at 11.59pm on Sunday 15 November 2026. MBIE expects the changes to take effect in <strong>2028</strong>, after a one-year lead-in period once the Bill passes.</p>
</div>

<h2>What was actually announced</h2>
<p>On 24 November 2025 the Minister for Building and Construction, Hon Chris Penk, announced a building liability reform package with two consumer-protection limbs: mandatory home warranties for residential building work, and mandatory professional indemnity insurance for building design professionals.</p>
<p>The wording of the announcement matters, because it has been widely reported more loosely than it was made. The requirement is to have "professionals contributing to building design, such as architects and engineers, to hold professional indemnity insurance". It is a <strong>design</strong> obligation, not a construction-sector-wide one.</p>

<h2>Who the PI requirement actually covers — and who it does not</h2>
<p>The Government's own factsheet accompanying the announcement is explicit on scope. The requirement will apply only to professionals providing architecture, design, engineering and certain building surveying services. The same document states that it will not apply to builders.</p>
<p>So, taking the categories people most often ask us about:</p>
<ul>
<li><strong>Architects and building designers</strong> providing design services — in scope.</li>
<li><strong>Engineers</strong> providing engineering services on building work — in scope. Note that no published document subdivides this by discipline, so anyone telling you that structural is caught but mechanical is not is guessing.</li>
<li><strong>Certain building surveying services</strong> — in scope.</li>
<li><strong>Builders</strong> — expressly <strong>not</strong> in scope.</li>
<li><strong>Developers</strong> — not named in scope in any published document.</li>
<li><strong>Building consent authorities</strong> — not named in scope in any published document.</li>
<li><strong>Licensed building practitioners</strong> — the scope is drawn by <em>function</em> (design work), not by LBP licence class. Law firm Simpson Grierson's analysis of the Bill states that licensed building practitioners are not required to carry insurance under the proposed amendments. Whether a Design-class LBP doing residential design work is caught by the functional wording is genuinely unresolved, because the detail is deferred to regulations that do not yet exist. Anyone stating a definitive answer today is ahead of the law.</li>
</ul>

<h2>The home warranty limb</h2>
<p>The warranty requirement is the residential-specific half of the package. As announced, it covers new residential buildings and renovations of $100,000 and above, with a defect period of one year and a structural warranty of ten years. The announcement described the building threshold as three storeys and under; the Bill as introduced expresses it as up to 10 metres. If you are relying on the threshold, use the Bill wording and check it against the version before the House at the time you read this, because select committee can change it.</p>
<p>The Government has estimated the cost of warranties at around 0.5% of total build cost.</p>

<h2>What level of cover will be required?</h2>
<p>Nobody knows, and anyone publishing a figure is inventing it.</p>
<p>MBIE's Regulatory Impact Statement of 18 November 2025 proposes <strong>no minimum limit</strong>. Its own words on the scheme are that the details "are yet to be developed and require further consultation". Simpson Grierson's assessment is that in the absence of any legislative requirement for minimum cover, insurers are likely to have the final say.</p>
<p>The only dollar figures in the official record are these, and they are context rather than requirements:</p>
<ul>
<li><strong>$250,000</strong> — the existing PI minimum that Architectural Designers New Zealand requires of its self-employed Professional members. Cited in the official material as current practice, not as a proposed standard.</li>
<li><strong>$1,500 to $3,000 per person per year</strong> — what the Government states professional indemnity insurance typically costs for architects, often covered by the firm. This appears both in the Beehive factsheet and in the Cabinet paper of 18 November 2025.</li>
<li><strong>$200,000</strong> — separately, and unrelated to this reform, the minimum PI an engineering firm represents that it holds when it issues a Producer Statement. Engineering New Zealand notes this value is standard and unrelated to construction costs.</li>
</ul>
<p>We previously published an expectation on this page that minimum limits of $1M to $2M would apply. That figure appeared in no New Zealand government document and we have removed it.</p>

<h2>How long will cover need to be held?</h2>
<p>No official document states a required duration of cover or any run-off obligation. That detail sits with the regulations, which have not been drafted.</p>
<p>What is settled is the underlying limitation law, and it is worth getting right because it is routinely misstated:</p>
<ul>
<li>The primary limitation period is <strong>six years under section 11 of the Limitation Act 2010</strong> — not the Building Act — and it runs from the <strong>act or omission</strong>, not from practical or substantial completion.</li>
<li>There is a <strong>late knowledge</strong> extension of three years under section 14 of the Limitation Act 2010, running from the date the claimant knew or ought to have known. This is the provision that matters most for defects that surface years later.</li>
<li><strong>Section 393 of the Building Act 2004</strong> imposes an absolute ten-year longstop on civil proceedings relating to building work. It also runs from the act or omission, and it is a hard stop rather than a "latent defects period".</li>
</ul>
<p>The practical consequence is unchanged by the reform: because professional indemnity is written on a claims-made basis, a claim arriving years after a project completes is answered by the policy in force when the claim is made, not the one in force when the work was done. That is why run-off cover exists, and why a retroactive date is worth checking at every renewal.</p>

<h2>Should design professionals do anything now?</h2>
<p>There is no compliance deadline to meet yet, and we are not going to manufacture urgency where the Government's own timetable says 2028.</p>
<p>The realistic position is that most of the affected market is already insured. The official material records that around 90% of designers and engineers already hold professional indemnity cover voluntarily. If you are in that 90%, the sensible steps are unglamorous and would be worth doing regardless of any reform:</p>
<ul>
<li>Check your retroactive date covers the work you have actually done, including projects at previous firms.</li>
<li>Understand what happens to your cover if you retire, sell, or wind the practice up, given the ten-year longstop.</li>
<li>Check whether your policy responds to the design services you actually provide, including contract administration and observation work if you do it.</li>
<li>Watch the select committee stage rather than acting on a limit figure nobody has set.</li>
</ul>
<p>If you are in the remaining 10% and uninsured, the reform is a reason to fix that, but the ten-year longstop was already the reason.</p>

<h2>One open question we have not resolved</h2>
<p>Several outlets have reported that the Bill contains a power for the Government to temporarily suspend the warranty and, possibly, the insurance requirement. We have not read that clause and are not asserting it. It is flagged here because it bears directly on how firm the word "mandatory" turns out to be, and because we would rather show you the edge of what we have verified than write past it.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.beehive.govt.nz/release/building-reforms-deliver-consumer-protections" rel="nofollow noopener" target="_blank">Beehive — Building reforms deliver consumer protections</a>, 24 November 2025</li>
<li><a href="https://www.beehive.govt.nz/sites/default/files/2025-11/Consumer%20protections%20for%20building%20consent%20system%20reforms%20factsheet.pdf" rel="nofollow noopener" target="_blank">Consumer protections for building consent system reforms — factsheet (PDF)</a>, November 2025</li>
<li><a href="https://www.mbie.govt.nz/about/news/new-liability-rules-for-the-construction-sector-to-improve-consumer-protection" rel="nofollow noopener" target="_blank">MBIE — New liability rules for the construction sector</a>, 24 November 2025</li>
<li><a href="https://www.mbie.govt.nz/dmsdocument/31701-regulatory-impact-statement-supporting-mechanisms-for-proportionate-liability-in-the-building-and-construction-sector-proactiverelease-pdf" rel="nofollow noopener" target="_blank">MBIE — Regulatory Impact Statement, proportionate liability (PDF)</a>, 18 November 2025</li>
<li><a href="https://www.building.govt.nz/about-building-performance/all-news-and-updates/building-amendment-bill-introduced-to-parliament" rel="nofollow noopener" target="_blank">Building Performance — Building Amendment Bill introduced to Parliament</a>, 2 July 2026</li>
<li><a href="https://www.building.govt.nz/about-building-performance/all-news-and-updates/proportionate-liability-changes-coming-to-accountability-for-defective-work" rel="nofollow noopener" target="_blank">Building Performance — Proportionate liability: changes coming</a>, 2 July 2026</li>
<li><a href="https://www.engineeringnz.org/engineer-tools/engineering-documents/producer-statements/professional-indemnity-insurance-why-200000/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Professional indemnity insurance: why $200,000?</a></li>
</ul>
<p>Last reviewed 7 September 2026. This page describes a Bill before Parliament and will be out of date when it changes. We are not a law firm and this is general information, not legal or financial advice.</p>
</div>`,
  },
  {
    slug: 'fmca-pi-insurance-financial-advisers-nz',
    title: 'Is PI Insurance a FAP Licence Condition? No — and the FMA Decided That Deliberately',
    excerpt: 'Professional indemnity insurance is not a condition of a FAP licence in New Zealand. The FMA consulted on making it one in 2020 and decided against it. Here is what actually applies.',
    metaTitle: 'FAP Licence PI Insurance Requirements NZ',
    metaDescription: 'PI insurance is not an FMA standard condition for a FAP licence. The FMA consulted on it in June 2020 and decided against it in November 2020. What actually applies.',
    category: 'Regulatory',
    date: '2026-09-07',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    content: `<div class="keyfact">
<p><strong>Professional indemnity insurance is not a condition of a FAP licence in New Zealand.</strong> The FMA consulted on making it a standard condition in June 2020 and decided against it in November 2020. It is not among the seven standard conditions for a full financial advice provider licence, it is not in the Code of Professional Conduct, and there is no PI disclosure obligation. If you have been told otherwise, you have been told wrong — and it is a common enough error that we corrected this page in September 2026 after publishing the mistake ourselves.</p>
</div>

<h2>What the FAP standard conditions actually are</h2>
<p>Every full financial advice provider licence issued by the Financial Markets Authority carries the same seven standard conditions:</p>
<ol>
<li>Record keeping</li>
<li>Internal complaints process</li>
<li>Regulatory returns</li>
<li>Outsourcing</li>
<li>Business continuity and technology systems</li>
<li>Ongoing requirements</li>
<li>Notification of material changes</li>
</ol>
<p>The words "insurance" and "indemnity" do not appear anywhere in that document. The same seven conditions apply across Class 1, Class 2 and Class 3 licences — the classes describe how advice is delivered (sole adviser practice, through financial advisers, or including nominated representatives), not different condition sets.</p>

<h2>The FMA looked at this and said no</h2>
<p>This is the part most commentary misses, and it is the reason the myth is so persistent: the requirement nearly existed.</p>
<p>In its consultation paper of 17 June 2020, the FMA proposed a standard condition in almost exactly the terms people now assume are law — that a licensee "must have and maintain a level and scope of professional indemnity insurance that is adequate and appropriate". The proposal included a waiver mechanism conditional on disclosing the absence of cover.</p>
<p>On 6 November 2020, when it released the final standard conditions, the FMA confirmed it had decided not to include professional indemnity insurance as a standard condition. The proposal, and the disclosure-waiver mechanism attached to it, never took effect.</p>
<p>So the accurate statement is not "PI is not required and never was considered". It is that the regulator considered it, consulted on it, weighed the feedback on cost, consumer benefit and availability of cover, and chose not to impose it. Holding PI cover remains a decision for each provider to make on its own circumstances.</p>

<h2>Is it required anywhere else in the regime?</h2>
<h3>The FMC Act and Regulations</h3>
<p>There is no section to cite, and we are not going to invent one. What is on the record is that MBIE's Cabinet paper on financial markets licensing regulations proposed that "the holding of adequate insurance be specified as a <em>type</em> of condition that FMA may impose on licences". That is a discretionary power the regulator may use, not a blanket statutory obligation — and for FAPs the FMA chose not to use it.</p>
<p>The "ongoing requirements" standard condition points to sections 396 and 400 of the FMC Act, covering matters such as fit-and-proper directors and senior managers and the capability to effectively perform the service. No insurance element attaches to it.</p>

<h3>The Code of Professional Conduct</h3>
<p>No. Version 2 of the Code of Professional Conduct for Financial Advice Services came into force on 1 November 2025, replacing version 1. It sets nine standards across two parts — ethical behaviour, conduct and client care, then competence, knowledge and skill. The words "indemnity", "insurance" and "liability" do not appear in it.</p>

<h3>Disclosure</h3>
<p>There is no obligation to disclose anything about professional indemnity insurance. The prescribed disclosure categories are licensing status and duties, the nature and scope of advice including product limitations, fees and costs, commissions and conflicts of interest, complaints handling and dispute resolution, disciplinary history and certain convictions, and bankruptcy. Insurance is not among them.</p>
<p>The FMA's regulatory return questionnaire for Class 1 licensees does not ask about PI insurance either.</p>

<h2>So why do so many advisers hold it?</h2>
<p>Because it is frequently a commercial requirement, even though it is not a regulatory one — and that distinction is the whole point of this page.</p>
<p>The FMA itself noted in its 2020 consultation that many product providers already require those holding agency or distribution agreements to have access to professional indemnity insurance cover. That is a contract term between a provider and its distributors. It is imposed by the counterparty, not the regulator, it varies between providers, and the FMA's own wording was "many", not "all".</p>
<p>The other reason is the obvious one. A licence condition is not the only thing that can end a practice. An adviser sued over advice given five years ago faces the defence costs whether or not anyone required them to be insured, and the FMA declining to mandate cover says nothing about whether a claim would be affordable.</p>

<h2>What we are not going to tell you</h2>
<p>Several things that appeared on this page previously have been removed because we could not source them, and we would rather show the gap than fill it with something plausible:</p>
<ul>
<li><strong>Benchmark cover levels by adviser type.</strong> We previously published bands — $1M to $2M for sole traders, $2M to $5M for mortgage advice, $5M to $10M for investment advice with high net worth clients. No New Zealand regulator, professional body or published dataset supports those figures. They are gone.</li>
<li><strong>That Financial Advice New Zealand membership requires PI.</strong> Its Code of Ethics 2022 sets eight principles and contains no insurance or indemnity requirement. Its membership criteria pages were not publicly retrievable, so we cannot state either way.</li>
<li><strong>That failing to hold PI can cost you your licence.</strong> It cannot, because it is not a licence condition. Telling advisers otherwise is the error we are correcting.</li>
</ul>
<p>What genuinely does drive the cost and shape of an adviser's PI cover is the limit of indemnity, the advice types written, funds under advice or fee income, claims and notification history, the excess, and the retroactive date. Those are the levers worth a conversation. A number invented for a web page is not.</p>

<h2>Practical points that are still true</h2>
<p>None of the above changes the mechanics of the product itself:</p>
<ul>
<li><strong>PI is claims-made.</strong> The policy that responds is the one in force when the claim is made, not when the advice was given. Continuity matters more than price.</li>
<li><strong>Retroactive dates travel badly.</strong> If you move insurer, confirm in writing that the new policy picks up prior acts back far enough to cover advice already given. A gap between policy periods can leave historical advice unanswered.</li>
<li><strong>Regulatory investigation costs are a policy question, not a given.</strong> Many PI wordings contribute to the legal costs of responding to a regulatory investigation, but wordings differ and fines and penalties are frequently excluded — and some penalties are not insurable at all. Ask for the specific wording rather than accepting a general assurance.</li>
<li><strong>Authorised bodies need to check, not assume.</strong> If you operate under another entity's FAP licence, whether that entity's PI policy covers your activities is a question of that policy's wording. Get the answer in writing and check the level, rather than assuming a group arrangement extends to you.</li>
</ul>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.fma.govt.nz/assets/Licensing-guides/Standard-Conditions-for-full-FAP-licences.pdf" rel="nofollow noopener" target="_blank">FMA — Standard Conditions for full financial advice provider licences (PDF)</a>, November 2020</li>
<li><a href="https://www.fma.govt.nz/news/all-releases/media-releases/fma-releases-standard-conditions-for-licensing-of-financial-advice/" rel="nofollow noopener" target="_blank">FMA — FMA releases standard conditions for licensing of financial advice</a>, 6 November 2020</li>
<li><a href="https://www.fma.govt.nz/assets/Consultations/Consultation-standard-conditions-FAP-full-licensing.pdf" rel="nofollow noopener" target="_blank">FMA — Consultation: proposed standard conditions for FAP full licensing (PDF)</a>, 17 June 2020</li>
<li><a href="https://www.fma.govt.nz/assets/Information-sheets/Classes-of-financial-advice-service-for-full-FAP-licences.pdf" rel="nofollow noopener" target="_blank">FMA — Classes of financial advice service for full FAP licences (PDF)</a>, November 2020</li>
<li><a href="https://financialadvicecode.govt.nz/wp-content/uploads/2025/10/financial-advice-code-of-conduct-2025.pdf" rel="nofollow noopener" target="_blank">Code of Professional Conduct for Financial Advice Services 2025 (PDF)</a>, in force 1 November 2025</li>
<li><a href="https://www.mbie.govt.nz/business-and-employment/business/financial-markets-regulation/regulation-of-financial-advice/regulations-to-support-the-financial-services-legislation-amendment-act/disclosure-requirements/" rel="nofollow noopener" target="_blank">MBIE — Disclosure requirements</a></li>
<li><a href="https://www.mbie.govt.nz/assets/68c4548de4/cabinet-paper-financial-markets-conduct-regulations-paper4-licensing.pdf" rel="nofollow noopener" target="_blank">MBIE — Cabinet paper: Financial Markets Conduct Regulations, licensing (PDF)</a></li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal, regulatory or financial advice. We are an information and referral service, not a compliance adviser — check your own licence conditions with the FMA or your compliance provider.</p>
</div>`,
  },
  {
    slug: 'indemnity-insurance-for-contractors-nz',
    title: 'Indemnity Insurance for NZ Contractors — What You Need and When',
    excerpt: 'As an independent contractor or consultant in NZ, professional indemnity insurance protects you from client claims and is increasingly required by contracts.',
    metaTitle: 'Indemnity Insurance for NZ Contractors',
    metaDescription: 'Independent contractors in NZ carry personal liability for their own work. What PI insurance covers, and how contract requirements set your limit.',
    category: 'Guides',
    date: '2026-09-07',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80',
    author: 'sarah-thompson',
    content: `<h2>Why Contractors Need Professional Indemnity Insurance</h2>
<p>As an independent contractor providing professional services in New Zealand, you carry full personal liability for any errors, omissions or negligence in your work. Unlike an employee, you cannot rely on your client's insurance to protect you — and your personal assets (savings, property, vehicle) could be at risk if a client makes a claim against you.</p>
<p>Professional indemnity (PI) insurance is the key protection for independent contractors. It covers your legal defence costs and any compensation awarded if a client claims your work caused them a financial loss.</p>

<h2>When Do Contractors Need PI Insurance?</h2>
<p>You should strongly consider PI insurance if:</p>
<ul>
<li>You provide advice, analysis, reports or recommendations to clients</li>
<li>Your work affects financial, legal, health or safety decisions</li>
<li>A client contract requires you to hold PI cover</li>
<li>You work for government agencies or large corporates (often require $1M+ PI)</li>
<li>You handle client data or systems that could be compromised</li>
<li>You subcontract to other contractors on their behalf</li>
</ul>

<h2>Where Contract PI Requirements Come From</h2>
<p>For most contractors the limit is not a judgement call. It is written into the appointment by the client, and that specified limit is what you buy. Government agencies, councils, head contractors and large corporates routinely set one as a condition of being engaged or of joining a supplier panel. We are not going to publish a table of typical limits by sector, because the only honest answer is that it varies contract by contract and the document in front of you governs.</p>
<p>The few limits that are actually published in New Zealand are membership or convention minimums rather than contract norms, and they are worth knowing as anchors: $200,000 is what an engineering firm represents it holds when issuing a Producer Statement, $250,000 is the ADNZ minimum for self-employed Professional members, and $1M is the REINZ minimum for member agencies.</p>
<p>Two practical points. Read the insurance clause before you price the job, because a high limit costs money and the fee should reflect it. And check whether the clause also constrains your excess or requires cover to be maintained for a period after the contract ends, because both change what you need to buy.</p>
<p>If you do not have PI insurance at all, you may simply be excluded from tendering for this work.</p>

<h2>What Happens If a Contractor Does Not Have PI Insurance?</h2>
<p>Without PI insurance, a successful claim from a client could result in:</p>
<ul>
<li>A court judgment against you personally for damages and legal costs</li>
<li>Enforcement against your personal assets (bank accounts, property)</li>
<li>Bankruptcy in severe cases</li>
<li>Reputational damage that makes it difficult to win future contracts</li>
</ul>
<p>Even if a claim is unfounded, defending it without insurance can cost tens of thousands of dollars in legal fees alone.</p>

<h2>What Does Contractor PI Insurance Cost in NZ?</h2>
<p>No New Zealand insurer publishes premium tables for professional indemnity, so any per-month figure you see on a website is invented. This page used to carry one and it has been removed.</p>
<p>What an underwriter prices on is your fee income, the limit of indemnity your contracts require, the services your policy has to cover, your claims and notification history, the excess you accept, and your retroactive date. As an independent contractor you have more control over some of those than an employee ever would: the limit you agree to in a contract is a commercial negotiation, and so is the fee that pays for it.</p>
<p>Professional indemnity premiums are a deductible business expense.</p>

<h2>Getting PI Insurance as a Contractor</h2>
<p>Contractors can access PI insurance through a licensed insurance adviser who specialises in professional liability. This ensures your policy is correctly scoped for the activities you actually perform, and that the limit, excess and any run-off obligation in your contracts are met rather than assumed.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.engineeringnz.org/engineer-tools/engineering-documents/producer-statements/professional-indemnity-insurance-why-200000/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Professional indemnity insurance: why $200,000?</a></li>
<li><a href="https://adnz.org.nz/professional" rel="nofollow noopener" target="_blank">ADNZ — Professional membership</a></li>
<li><a href="https://www.reinz.co.nz/common/Uploaded%20files/REINZ/Website/2024/Codes%20of%20Practice/REINZ%20Code%20of%20Agency%20Practice%20Nov%202024.pdf" rel="nofollow noopener" target="_blank">REINZ Code of Agency Practice (PDF)</a>, November 2024</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal, tax or financial advice. Your own contract wording governs what cover you must hold.</p>
</div>`,
  },
  {
    slug: 'statutory-liability-nz-health-safety',
    title: 'Statutory Liability Insurance and the Health and Safety at Work Act — What NZ Businesses Need to Know',
    excerpt: 'With WorkSafe NZ increasing prosecutions under HSWA 2015, statutory liability insurance is more important than ever for NZ businesses and directors.',
    metaTitle: 'Statutory Liability Insurance and HSWA 2015',
    metaDescription: 'Statutory liability covers defence costs for unintentional breaches of NZ statutes. It cannot pay a fine under the Health and Safety at Work Act 2015.',
    category: 'Regulatory',
    date: '2026-09-07',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    content: `<h2>The Growing Risk of Health and Safety Prosecutions in NZ</h2>
<p>Since the Health and Safety at Work Act 2015 (HSWA) came into force, WorkSafe New Zealand has prosecuted businesses, directors and officers for workplace health and safety failures. The most serious offence tier, reckless conduct exposing a person to risk of death or serious injury, carries a maximum fine of $3 million for a body corporate and up to $600,000 or five years' imprisonment for an officer or an individual conducting a business.</p>
<div class="keyfact">
<p><strong>A statutory liability policy cannot pay a fine imposed under HSWA.</strong> Section 29 of the Act provides that a term of any contract of insurance or indemnity is of no effect to the extent that it purports to indemnify a person for their liability to pay a fine or infringement fee under that Act, and section 30 makes entering into such a contract an offence. Any page telling you that statutory liability cover pays your health and safety fine is wrong. What the cover is genuinely for is the cost of defending you, and the other exposures set out below.</p>
</div>
<p>Statutory liability insurance covers the legal costs of responding to and defending an alleged breach of legislation, and — for those statutes where fines are insurable, which HSWA is not — the fine itself where the breach was unintentional.</p>

<h2>What Is Statutory Liability Insurance?</h2>
<p>Statutory liability insurance covers your business and its directors and officers against the costs of defending — and in some cases paying — fines and penalties arising from unintentional breaches of statute. Key statutes covered typically include:</p>
<ul>
<li>Health and Safety at Work Act 2015</li>
<li>Resource Management Act 1991</li>
<li>Fair Trading Act 1986</li>
<li>Employment Relations Act 2000</li>
<li>Food Act 2014</li>
<li>Building Act 2004</li>
<li>Privacy Act 2020</li>
<li>Companies Act 1993</li>
</ul>

<h2>What Does Statutory Liability Cover in Practice?</h2>
<p>A statutory liability policy typically covers:</p>
<ul>
<li><strong>Legal defence costs:</strong> Representation by experienced regulatory defence lawyers throughout a WorkSafe investigation or prosecution</li>
<li><strong>Reparation:</strong> some policies contribute to reparation ordered in favour of a victim, which is a different thing from a fine. Whether yours does, and at what sub-limit, is a wording question — ask for the clause</li>
<li><strong>Fines, only where the statute allows it:</strong> fines under HSWA are expressly not insurable. Other statutes differ, and so do policy wordings. Never assume a fine is covered</li>
<li><strong>Investigation costs:</strong> Responding to information requests, WorkSafe notices, and Improvement and Prohibition Notices</li>
<li><strong>Appeals:</strong> Challenging adverse decisions or findings</li>
</ul>
<p>Deliberate, reckless or grossly negligent conduct is excluded, and penalties for it are not insurable in any event.</p>

<h2>Who Needs Statutory Liability Insurance?</h2>
<p>Any business that employs people or operates in a regulated environment should consider statutory liability insurance. It is particularly important for:</p>
<ul>
<li>Construction, manufacturing and industrial businesses</li>
<li>Healthcare and aged care operators</li>
<li>Food production and hospitality businesses</li>
<li>Environmental and resource management businesses</li>
<li>Any employer managing complex health and safety risks</li>
</ul>
<p>Directors and officers should note that under HSWA, they can be personally prosecuted as "officers" of a PCBU (person conducting a business or undertaking). This makes statutory liability insurance equally important for individuals in governance roles as for the business itself.</p>

<h2>What Does Statutory Liability Insurance Cost?</h2>
<p>No New Zealand insurer publishes premium tables for statutory liability or for management liability, so we have removed the monthly figures this page used to carry. They had no source.</p>
<p>Statutory liability is available standalone but is more commonly bought inside a management liability package alongside directors' and officers' cover, employment practices liability and crime. What an underwriter looks at is your industry, headcount, revenue, the regulatory environment you operate in, your prosecution and notification history, and the limit and excess you choose.</p>
<p>The more useful question than price is scope. Ask which statutes the wording actually names, whether defence costs sit inside or outside the limit, and what the sub-limit is for investigation costs, because a WorkSafe investigation generates legal fees long before anyone decides whether to prosecute.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.legislation.govt.nz/act/public/2015/0070/latest/DLM5976660.html" rel="nofollow noopener" target="_blank">Health and Safety at Work Act 2015</a> — sections 29 and 30 (insurance against fines unlawful), section 47 (reckless conduct)</li>
<li><a href="https://www.worksafe.govt.nz/laws-and-regulations/operational-policy-framework/prosecutions/" rel="nofollow noopener" target="_blank">WorkSafe New Zealand — Prosecutions</a></li>
</ul>
<p>Last reviewed 7 September 2026. We are an information and referral service, not a law firm. General information only, not legal advice. Whether a particular penalty is insurable depends on the statute and on your policy wording.</p>
</div>`,
  },
  {
    slug: 'directors-officers-nz-sme',
    title: "Directors' and Officers' Insurance for NZ SMEs — Do You Need It?",
    excerpt: "D&O insurance is not just for large companies. NZ SME directors face personal liability from shareholders, employees, creditors and regulators. Here's what you need to know.",
    metaTitle: "Directors' and Officers' Insurance for NZ SMEs",
    metaDescription: 'D&O insurance is not only for large companies. NZ SME directors face personal liability from shareholders, employees, creditors and regulators.',
    category: 'Coverage',
    date: '2026-09-07',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    content: `<h2>What Is Directors' and Officers' Insurance?</h2>
<p>Directors' and officers' (D&O) liability insurance protects the personal assets of directors, officers and managers if they are personally sued for alleged wrongful acts in managing a company. In New Zealand, company directors face significant personal liability under the Companies Act 1993 and a range of other statutes, including the Health and Safety at Work Act 2015, which allows an officer to be prosecuted personally.</p>

<h2>Why SME Directors Need D&O Insurance</h2>
<p>Many small and medium business owners mistakenly believe D&O insurance is only for large corporates and listed companies. In reality, the personal exposure for SME directors can be significant:</p>
<ul>
<li><strong>Shareholder claims:</strong> Even in private companies with only a few shareholders, disputes can lead to legal action against directors</li>
<li><strong>Creditor claims on insolvency:</strong> If your company becomes insolvent, creditors and liquidators can pursue directors personally for alleged breaches of duty</li>
<li><strong>Employee claims:</strong> Former employees can sue directors personally for employment decisions, restructuring, or redundancy handling</li>
<li><strong>Regulatory investigations:</strong> Commerce Commission, FMA, WorkSafe and other regulators can target directors personally</li>
<li><strong>Tax obligations:</strong> IRD can in some circumstances pursue directors personally for unpaid PAYE and GST</li>
</ul>

<h2>What Does D&O Insurance Cover for Directors?</h2>
<ul>
<li>Legal defence costs for claims against directors personally</li>
<li>Court-awarded damages and settlements</li>
<li>Regulatory investigation costs (including FMA, Commerce Commission)</li>
<li>Shareholder and investor claims</li>
<li>Creditor claims arising in insolvency</li>
<li>Employment practices claims against directors personally</li>
<li>Claims for breach of director duties under the Companies Act</li>
</ul>

<h2>D&O vs Management Liability Insurance</h2>
<p>Management liability insurance is a broader product that typically bundles D&O cover with employment practices liability (EPL), statutory liability, and crime (employee dishonesty) cover into a single policy. For most SMEs, a management liability policy provides better value than purchasing D&O alone.</p>

<h2>What Does D&O Insurance Cost for SMEs?</h2>
<p>No New Zealand insurer publishes rates for directors' and officers' or management liability cover, so the monthly figures this page used to carry have been removed. They were not sourced.</p>
<p>What an underwriter looks at is company size and revenue, industry, balance sheet, claims and investigation history, and whether there is a known dispute in the background. A company in the middle of a shareholder disagreement or a regulatory investigation is a different risk from one that is not, and cover for a known circumstance is generally not available at any price — which is the practical argument for arranging D&O before you think you need it rather than after.</p>

<h2>Getting Started with D&O Cover</h2>
<p>If you are a director or manager of a company — regardless of size — you should consider D&O insurance as a personal protection measure. A licensed insurance adviser can help you assess your exposure and select the right policy structure for your business.</p>`,
  },
  {
    slug: 'run-off-cover-retiring-nz-professionals',
    title: 'Run-off Cover for Retiring NZ Professionals — Why It Matters and How to Get It',
    excerpt: 'Retiring professionals who let their PI insurance lapse could face uninsured claims from past work. Run-off cover bridges this gap and protects your retirement.',
    metaTitle: 'Run-Off Cover for Retiring NZ Professionals',
    metaDescription: 'Let a PI policy lapse at retirement and claims from past work can be uninsured. How run-off cover closes that gap and how long to keep it in place.',
    category: 'Coverage',
    date: '2026-09-07',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    content: `<h2>What Is Run-Off Cover?</h2>
<p>Run-off cover (also called tail cover) is a form of professional indemnity insurance that protects you after you stop practising. Because PI insurance operates on a claims-made basis, you need active coverage at the time a claim is made — not just when the work was done. Without run-off cover, retiring professionals who let their PI lapse are exposed to uninsured claims from historical work.</p>

<h2>Who Needs Run-Off Cover?</h2>
<ul>
<li>Professionals retiring from active practice (accountants, lawyers, engineers, financial advisers)</li>
<li>Business owners closing or selling their practice</li>
<li>Consultants moving into full-time employed roles</li>
<li>Contractors whose client contracts have ended and who will not renew their PI</li>
<li>Professionals whose PI insurer withdraws from the market</li>
<li>Estate of a deceased professional (where claims may arise posthumously)</li>
</ul>

<h2>How Long Do You Need Run-Off Cover For?</h2>
<p>Work back from the limitation law rather than from a rule of thumb, because the law here is routinely misstated — including in the version of this page we published before September 2026.</p>
<ul>
<li>The primary limitation period is <strong>six years under section 11 of the Limitation Act 2010</strong>. It runs from the <strong>act or omission</strong>, not from the date the claimant discovered the loss and not from practical completion of a project.</li>
<li><strong>Section 14 of the Limitation Act 2010</strong> adds a <strong>late knowledge</strong> extension of three years, running from when the claimant knew or ought reasonably to have known. This is the provision that matters for errors that surface long after the work.</li>
<li>For anything touching building work, <strong>section 393 of the Building Act 2004</strong> imposes an absolute <strong>ten-year longstop</strong> on civil proceedings, also running from the act or omission. It is a hard stop rather than a "latent defects period".</li>
</ul>
<p>The practical consequence is that a designer or engineer thinks about run-off very differently from a bookkeeper: on building work the tail is a decade by statute. Decide the period you need against the work you have actually done, and get the price for it before you stop trading.</p>

<h2>What Does Run-Off Cover Cost?</h2>
<p>We previously published run-off pricing as a set of percentages of your last annual premium. That had no New Zealand source and has been removed, along with the worked example built on it.</p>
<p>Run-off is a one-off premium for a nominated period, negotiated at the point of purchase. It varies with the insurer, the length of the period, and the book of work being covered. The useful move is to ask your insurer for run-off terms in writing at a renewal, while you are still a paying customer, rather than in the month you close the practice.</p>

<h2>When Should You Arrange Run-Off Cover?</h2>
<p>Run-off cover should be arranged before your last PI policy expires. Your current insurer may offer run-off cover as an extension of your existing policy — this is often the simplest option as it maintains your retroactive date and policy history. If your insurer does not offer run-off, a licensed insurance adviser can source it from the specialist PI market.</p>

<h2>Run-Off Cover and Business Sales</h2>
<p>If you are selling your professional practice, the buyer's insurance will typically cover future work — but claims arising from pre-sale work will remain your responsibility. It is essential to arrange run-off cover to protect yourself from claims that may arise from work done before the sale. This is often negotiated as part of the business sale agreement.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.legislation.govt.nz/act/public/2010/0110/latest/whole.html" rel="nofollow noopener" target="_blank">Limitation Act 2010</a> — sections 11 and 14</li>
<li><a href="https://www.legislation.govt.nz/act/public/2004/0072/latest/DLM309340.html" rel="nofollow noopener" target="_blank">Building Act 2004, section 393</a> — ten-year longstop</li>
</ul>
<p>Last reviewed 7 September 2026. We are an information and referral service, not a law firm. General information only, not legal advice. Limitation questions on a specific matter need a lawyer.</p>
</div>`,
  },
  {
    slug: 'pi-insurance-nz-it-sector',
    title: 'Professional Indemnity Insurance for NZ IT Professionals — A Complete Guide',
    excerpt: 'System outages, data breaches and software errors can expose IT consultants to significant client claims. Here is how PI insurance protects the NZ tech sector.',
    metaTitle: 'PI Insurance for NZ IT Professionals',
    metaDescription: 'System outages, data breaches and software errors expose IT consultants to client claims. How PI insurance protects the NZ technology sector.',
    category: 'Coverage',
    date: '2026-09-07',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80',
    author: 'sarah-thompson',
    content: `<h2>Why IT Professionals Need PI Insurance</h2>
<p>IT consultants, software developers, data scientists, cybersecurity professionals and managed service providers carry unique professional liability risks. When a system fails, a data breach occurs, or a software implementation causes business disruption, the financial consequences for clients can be severe — and the IT professional can be held personally liable.</p>
<p>In New Zealand, PI insurance for IT professionals has become increasingly important as digital transformation projects grow in scale and the consequences of failure become more significant. Enterprise and public sector clients commonly set a minimum limit in the contract before engaging an IT supplier, and that figure varies from agreement to agreement rather than following any published standard.</p>

<h2>Common IT Professional Liability Claims</h2>
<ul>
<li><strong>System implementation failure:</strong> A new ERP or CRM system fails to work as specified, causing weeks of business disruption and data loss</li>
<li><strong>Software development errors:</strong> A bug in custom-developed software causes incorrect financial calculations or compliance failures</li>
<li><strong>Data breach from professional negligence:</strong> A security architecture flaw leads to a client data breach and regulatory penalties</li>
<li><strong>Project delays and cost overruns:</strong> Failure to deliver on time results in client losses from delayed product launches or regulatory non-compliance</li>
<li><strong>Intellectual property infringement:</strong> Code incorporating third-party IP without appropriate licensing</li>
<li><strong>Network outage:</strong> A network change causes extended downtime for a client's critical business systems</li>
</ul>

<h2>PI vs Cyber Insurance for IT Professionals</h2>
<p>PI insurance and cyber insurance are complementary but different products:</p>
<ul>
<li><strong>PI insurance</strong> covers your legal defence costs and compensation if a client claims your professional errors caused them a financial loss — including losses arising from a security failure you designed or managed</li>
<li><strong>Cyber insurance</strong> covers your own first-party costs if your business suffers a cyber incident (ransomware, data breach, business interruption) and third-party claims from parties affected by your breach</li>
</ul>
<p>For IT professionals, having both PI and cyber insurance provides the most comprehensive protection.</p>

<h2>How Much PI Insurance Does an IT Consultant Need?</h2>
<p>There is no New Zealand standard for this, and no regulator or industry body publishes one. This page previously carried a table of typical contract limits by sector. It was not sourced and has been removed.</p>
<p>In practice the limit is set by whoever is engaging you, so the honest process is to read the contract first and price the cover second. What sensibly informs the number when you do have a choice:</p>
<ul>
<li>The consequence of your worst realistic error on the largest engagement you are running, measured in the client's remediation and downtime cost rather than in your fee.</li>
<li>Whether the limit is per claim or in the aggregate, which is the difference between one bad project and one bad year.</li>
<li>Whether defence costs erode the limit. Technical disputes generate expert evidence, and expert evidence is expensive.</li>
<li>Whether your contracts cap your liability at all. A liability cap in the agreement is the cheapest risk control available to you and it is negotiated, not given.</li>
<li>Whether the same claim could engage both your PI and your cyber policy, and how the two wordings interact.</li>
</ul>

<h2>Getting IT Professional Indemnity Insurance</h2>
<p>PI insurance for IT professionals needs to be carefully scoped to ensure your specific activities are covered. Policy definitions of "professional services" vary, and some standard policies may not adequately cover managed services, cloud architecture, cybersecurity consulting, or AI/ML development. Working with a licensed insurance adviser who understands the tech sector helps ensure you get the right policy.</p>`,
  },
  {
    slug: 'management-liability-nz-what-is-included',
    title: 'Management Liability Insurance in NZ — What Is Included and Who Needs It?',
    excerpt: 'Management liability bundles D&O, employment practices, statutory liability and crime cover into one policy. Here is what each component covers and who needs it.',
    metaTitle: 'Management Liability Insurance in NZ',
    metaDescription: 'Management liability bundles D&O, employment practices, statutory liability and crime cover in one policy. What each part covers and who needs it.',
    category: 'Coverage',
    date: '2026-09-07',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&auto=format&fit=crop&q=80',
    author: 'sarah-thompson',
    content: `<h2>What Is Management Liability Insurance?</h2>
<p>Management liability insurance is a bundled policy designed for SMEs and medium-sized businesses. It combines several key liability covers into a single policy, providing comprehensive protection for the management of your business. The core components typically included are:</p>
<ul>
<li>Directors' and Officers' (D&O) Liability</li>
<li>Employment Practices Liability (EPL)</li>
<li>Statutory Liability</li>
<li>Crime / Employee Dishonesty</li>
<li>Entity Investigation Cover</li>
</ul>
<p>Optional add-ons often available include Cyber Liability and Superannuation Trustees' Liability.</p>

<h2>Directors' and Officers' Liability Component</h2>
<p>The D&O component protects directors and officers personally against claims for wrongful acts in their management roles. This includes shareholder claims, creditor claims in insolvency, regulatory investigations, and claims for breach of director duties under the Companies Act. Without D&O cover, directors' personal assets (home, savings, investments) are at risk.</p>

<h2>Employment Practices Liability (EPL) Component</h2>
<p>EPL covers claims from current or former employees for employment-related wrongful acts. These include:</p>
<ul>
<li>Unfair dismissal and wrongful termination</li>
<li>Workplace discrimination (age, gender, ethnicity, disability)</li>
<li>Sexual harassment and workplace bullying</li>
<li>Breach of employment agreement</li>
<li>Constructive dismissal claims</li>
<li>Personal grievance procedures at the Employment Relations Authority</li>
</ul>
<p>Employment claims are among the most common management liability claims in NZ, making EPL a critical component of any management liability policy.</p>

<h2>Statutory Liability Component</h2>
<p>The statutory liability component covers legal defence costs and representation arising from unintentional breaches of legislation such as the Fair Trading Act, Employment Relations Act, Resource Management Act and Privacy Act. It does not pay Health and Safety at Work Act fines: sections 29 and 30 of that Act make such an indemnity of no effect and make entering into one an offence. Whether a penalty under any other statute is insurable depends on that statute and on the wording.</p>

<h2>Crime / Employee Dishonesty Component</h2>
<p>The crime component covers losses sustained by your business from fraudulent or dishonest acts by employees or contractors. This includes employee theft, fraudulent financial reporting, forged documents, and computer fraud. In New Zealand, internal theft and fraud by employees remains a significant risk for SMEs.</p>

<h2>Who Should Have Management Liability Insurance?</h2>
<p>Management liability insurance is appropriate for any business that:</p>
<ul>
<li>Has directors, officers or managers making significant business decisions</li>
<li>Employs staff (EPL exposure)</li>
<li>Operates in a regulated industry</li>
<li>Handles customer or employee financial data</li>
<li>Is considering growth, restructuring or M&A activity</li>
</ul>
<p>For most SMEs, a management liability policy provides better value and more comprehensive coverage than purchasing D&O, EPL and statutory liability as separate policies.</p>

<h2>What Does Management Liability Insurance Cost?</h2>
<p>No New Zealand insurer publishes rates for management liability, so the monthly figure this page used to carry has been removed. It had no source.</p>
<p>Pricing follows company revenue, headcount, industry, claims and investigation history, and which components you include and at what limits. The component mix matters as much as the headline price: a cheap policy with a low sub-limit on statutory liability defence costs, or with employment practices cover excluded, is not the same product as a fuller one.</p>
<p>One thing worth knowing before you compare quotes on the statutory liability component: under sections 29 and 30 of the Health and Safety at Work Act 2015, no policy can indemnify you for a fine imposed under that Act. Defence costs are insurable, the fine is not.</p>`,
  },
  {
    slug: 'employment-practices-liability-nz',
    title: "Employment Practices Liability Insurance — Protecting NZ Employers from Workplace Claims",
    excerpt: "Personal grievances, unfair dismissal claims and workplace discrimination cases are rising in NZ. EPL insurance covers the legal costs and compensation of employment claims.",
    metaTitle: 'Employment Practices Liability Insurance NZ',
    metaDescription: 'Personal grievance, unfair dismissal and discrimination claims are rising in NZ. How EPL insurance covers the legal costs and compensation involved.',
    category: 'Coverage',
    date: '2026-05-17',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=80',
    author: 'sarah-thompson',
    content: `<h2>What Is Employment Practices Liability Insurance?</h2>
<p>Employment practices liability (EPL) insurance covers employers against claims from current, former or prospective employees for employment-related wrongful acts. EPL covers the legal defence costs and any compensation or settlements awarded through the Employment Relations Authority (ERA) or Employment Court.</p>

<h2>Why EPL Insurance Matters for Employers</h2>
<p>New Zealand's employment law framework — centred on the Employment Relations Act 2000 — provides strong protections for employees. The personal grievance process is accessible, relatively inexpensive for employees to use, and can result in significant awards for employers. Key trends driving EPL claims include:</p>
<ul>
<li>Rising personal grievance filings at the ERA</li>
<li>Increasing awareness of employee rights and legal processes</li>
<li>Growing focus on workplace psychological safety</li>
<li>Complex employment relationships including contractors and casual workers</li>
<li>Restructuring and redundancy disputes during economic downturns</li>
</ul>

<h2>What EPL Insurance Covers</h2>
<ul>
<li>Unfair dismissal and wrongful termination claims</li>
<li>Personal grievance proceedings at the ERA</li>
<li>Workplace discrimination (under the Human Rights Act 1993)</li>
<li>Sexual harassment and workplace bullying claims</li>
<li>Constructive dismissal claims</li>
<li>Breach of employment agreement</li>
<li>Failure to follow good faith obligations under the ERA</li>
<li>Remediation orders (reinstatement, compensation)</li>
</ul>

<h2>What EPL Insurance Does Not Cover</h2>
<ul>
<li>Deliberate or intentional wrongful acts</li>
<li>Claims you were aware of before taking out the policy</li>
<li>Workers' compensation and ACC claims</li>
<li>Contractual disputes unrelated to employment conditions</li>
<li>Class actions (coverage varies by policy)</li>
</ul>

<h2>The Cost of Uninsured Employment Claims</h2>
<p>An Employment Relations Authority matter can cost an employer $10,000–$50,000 in legal fees, even if ultimately successful. If the ERA or Employment Court rules against you, remediation orders can include lost wages, reinstatement, compensation for humiliation and distress, and legal costs awards. In serious cases, ERA compensation for humiliation and distress can reach $50,000 or more.</p>

<h2>EPL as Part of Management Liability</h2>
<p>For most businesses, EPL insurance is most cost-effective when purchased as part of a management liability policy bundling D&O, statutory liability and crime cover. Standalone EPL cover is available but is typically reserved for larger businesses with specific employment risk profiles. Talk to a licensed insurance adviser about the right structure for your business.</p>`,
  },
  {
    slug: 'indemnity-insurance-nz-accountants-guide',
    title: "A Practical Guide to PI Insurance for NZ Accountants and Bookkeepers",
    excerpt: "CA ANZ requires professional indemnity cover to hold a Certificate of Public Practice, but publishes no New Zealand minimum limit. The $2m figure often quoted is Australian. Here is what actually applies.",
    metaTitle: 'PI Insurance for NZ Accountants',
    metaDescription: 'CA ANZ members in public practice must hold PI to hold a Certificate of Public Practice. No NZ minimum limit is published, and the $2m figure quoted online is Australian.',
    category: 'Professions',
    date: '2026-09-07',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    content: `<h2>Why PI Insurance Is Essential for Accountants</h2>
<p>New Zealand accountants — including chartered accountants, tax agents, and bookkeepers — face significant professional liability for errors in the advice and services they provide. A missed filing deadline, incorrect tax calculation, or flawed financial statement can lead to IRD penalties, missed business opportunities, or incorrect lending decisions for clients — and those clients may hold you financially responsible.</p>

<div class="keyfact">
<p><strong>We had the CA ANZ position wrong on this page and have corrected it.</strong> The requirement attaches to members <em>in public practice</em> holding a Certificate of Public Practice, not to all members. And the tiered minimum limits this page used to publish — up to $2m by gross income — are <strong>Australian</strong> figures from the Professional Standards Scheme. They do not apply in New Zealand and they have been removed.</p>
</div>

<h2>What CA ANZ actually requires</h2>
<p>Chartered Accountants Australia and New Zealand requires a member in public practice in New Zealand to hold "current and appropriate professional indemnity insurance" in order to hold a Certificate of Public Practice. The words that matter are "current and appropriate": CA ANZ does not publish a New Zealand dollar minimum, and we are not going to invent one on its behalf.</p>
<p>You need a Certificate of Public Practice to offer public accounting services in your own name, unless your fees from those services are under <strong>$13,000 a year</strong>. That threshold, not your membership status on its own, is the practical trigger.</p>
<p>The detailed New Zealand requirement sits in Part IV of the NZICA Rules, which is not publicly readable. If you need the exact wording and any limit attached to it, ask CA ANZ directly rather than relying on any website, including this one.</p>

<h2>What CPA Australia requires</h2>
<p>CPA Australia states that members offering public accounting services must hold professional indemnity insurance, and that this applies to honorary, pro bono and voluntary services as well as paid work. No New Zealand dollar minimum is published there either.</p>

<h2>Bookkeepers, tax agents and everyone else</h2>
<p>If you are not a member of an accounting body, no New Zealand regulator requires you to hold professional indemnity insurance. That is not the same as saying you are not exposed. A bookkeeper who files a GST return incorrectly, or a tax agent who misses a provisional tax date, generates exactly the same client loss as a chartered accountant doing the same thing, and the client's lawyer will not be interested in which body you belong to.</p>
<p>We checked whether the Accountants and Tax Agents Institute of New Zealand imposes a professional indemnity requirement on its members. It is not mentioned in its published membership criteria, so we are not going to state that it does. Check with them if you are a member.</p>

<h2>Common PI Claims Against Accountants</h2>
<p>Based on claims experience in New Zealand and Australia, the most common PI claims against accountants involve:</p>
<ul>
<li>Tax return errors resulting in IRD penalties and use of money interest</li>
<li>Missed GST filing deadlines causing penalties</li>
<li>Incorrect financial statements used in loan applications (misrepresentation)</li>
<li>Failure to advise on tax planning opportunities</li>
<li>Errors in payroll and PAYE obligations</li>
<li>Incorrect advice on business structure and tax efficiency</li>
<li>Failure to advise on provisional tax obligations</li>
</ul>

<h2>What to Look for in an Accountants' PI Policy</h2>
<p>When reviewing PI policies for accountants, key provisions to check include:</p>
<ul>
<li><strong>Scope of covered services:</strong> Ensure tax, financial statements, bookkeeping, payroll and advisory services are all covered</li>
<li><strong>Retroactive date:</strong> Ensure historical work back to your start date is covered</li>
<li><strong>Run-off cover:</strong> Understand how run-off is handled if you retire or wind up your practice</li>
<li><strong>Excess:</strong> Understand whether the excess applies to defence costs as well as damages</li>
<li><strong>Claim notification:</strong> Understand what constitutes a "circumstance that may give rise to a claim" and when you must notify your insurer</li>
</ul>

<h2>What PI Insurance Costs Accountants</h2>
<p>No New Zealand insurer or accounting body publishes premium tables for accountants' professional indemnity. Cover is broker-distributed and individually underwritten, so the per-month figures this page used to carry were invented and have been removed.</p>
<p>What an underwriter actually prices on is your gross fee income, the mix of services you provide, the limit and excess you choose, your claims and notification history, and your retroactive date. Two things move the number more than most accountants expect: audit and insolvency work, which are rated differently from compliance and tax work, and any investment or financial advice element, which may not be covered by an accountants' wording at all without an endorsement.</p>

<h2>How Much Cover Should You Hold?</h2>
<p>There is no published New Zealand minimum for accountants, so the answer comes from your own exposure rather than from a table. The starting point is the largest single client loss your work could realistically cause — a tax position taken across several years, or financial statements relied on in a lending or sale transaction — measured against the client's loss rather than your fee. Then check whether any client contract or funder specifies a limit, because a specified limit settles the question.</p>
<p>When comparing quotes, check whether the limit is per claim or in the aggregate, and whether defence costs sit inside or outside it. An IRD dispute defended properly consumes a meaningful amount of a small limit before anyone has decided who was right.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.charteredaccountantsanz.com/member-services/certificate-of-public-practice" rel="nofollow noopener" target="_blank">CA ANZ — Certificate of Public Practice</a></li>
<li><a href="https://www.cpaaustralia.com.au/become-a-cpa/public-practice/practising-in-new-zealand" rel="nofollow noopener" target="_blank">CPA Australia — Practising in New Zealand</a></li>
</ul>
<p>Last reviewed 7 September 2026. We are an information and referral service, not an accounting body and not a law firm. General information only. Confirm your own obligations with CA ANZ, CPA Australia or your own body — the New Zealand rules are not fully published and we will not guess at them.</p>
</div>`,
  },
  {
    slug: 'pi-insurance-real-estate-nz-rea',
    title: 'PI Insurance for NZ Real Estate Agents — REA Does Not Require It, REINZ Does',
    excerpt: 'The Real Estate Authority does not require agents to hold professional indemnity insurance. REINZ membership does, at a minimum of $1M. Here is the difference and why it matters.',
    metaTitle: 'PI Insurance for NZ Real Estate Agents',
    metaDescription: 'The REA does not require real estate agents to hold PI insurance. REINZ membership requires a minimum of $1M. What applies to you, and what claims look like.',
    category: 'Professions',
    date: '2026-09-07',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80',
    author: 'sarah-thompson',
    content: `<div class="keyfact">
<p><strong>The Real Estate Authority does not require you to hold professional indemnity insurance. REINZ does.</strong> Licensing and membership are two different things, and almost every page on this subject blurs them. If you are a REINZ member agency the minimum is $1M. If you are licensed but not a REINZ member, no regulator is requiring you to hold anything. We had this wrong on this page until September 2026 and have corrected it.</p>
</div>

<h2>The regulatory position: licensing does not require PI</h2>
<p>Real estate agents in New Zealand are licensed under the Real Estate Agents Act 2008 and regulated by the Real Estate Authority. The REA's published licensing criteria are age, being a fit and proper person, the relevant NZ Certificate in Real Estate qualification, criminal history checks and referees. Professional indemnity insurance is not among them.</p>
<p>Nor does it appear in the conduct rules. The Real Estate Agents Act (Professional Conduct and Client Care) Rules 2012 — the code of conduct every licensee works under — contain no occurrence of the words "indemnity" or "insurance" anywhere in the document.</p>
<p>One honest limitation on this: we were unable to retrieve the text of the Real Estate Agents Act 2008 itself from legislation.govt.nz, which blocks automated access. Our statement above is based on the Rules and on the REA's own published licensing criteria, both of which we did read. If you need certainty on the Act itself, read it directly rather than relying on us.</p>

<h2>The membership position: REINZ requires $1M</h2>
<p>REINZ membership is voluntary. It is not a licence, and you can practise lawfully without it. But if you are a member, the obligation is real and specific.</p>
<p>Under Principle 19 of the REINZ Code of Agency Practice (November 2024), member businesses must carry professional indemnity insurance covering the business and all individuals engaged in its business, and a minimum level of <strong>$1M</strong> is required.</p>
<p>Principle 12 of the REINZ Code of Individual Membership (November 2024) carries this through to individuals: a member must ensure that either they, or the business they work for, carries PI to the level prescribed in the Code of Agency Practice.</p>
<p>So the practical answer for most licensees is that they are covered by their agency's group policy because the agency is a REINZ member — not because anyone's licence depends on it. If you are an independent agent or sole trader, or if your agency is not a REINZ member, nothing is arranging that cover on your behalf.</p>

<h2>Trust accounts: the obligation is audit, not insurance</h2>
<p>This is a second place the two get confused. Real estate trust account obligations under the Real Estate Agents (Audit) Regulations 2009 are audit obligations: an annual audit by a qualified auditor, examination at least three times a year, seven-year record retention, a ten-working-day holding period, and notification when auditors are appointed or change.</p>
<p>There is no professional indemnity requirement attached to trust accounts, and no fidelity or fidelity guarantee insurance requirement either. If someone has told you your trust account obliges you to insure, they have confused two separate regimes.</p>

<h2>What real estate PI claims actually look like</h2>
<p>The claims profile is unusual because agents sit between two parties who both have money at stake and who each have a different account of what was said. Common allegations:</p>
<ul>
<li><strong>Misrepresentation</strong> — incorrect information about a property's features, boundaries, floor area or the contents of a LIM.</li>
<li><strong>Failure to disclose</strong> — not passing on known defects, weathertightness history, consent or code compliance status.</li>
<li><strong>Marketing errors</strong> — incorrect size, chattels, or features in listings and campaign material.</li>
<li><strong>Price guidance disputes</strong> — allegations that a price indication was misleading.</li>
<li><strong>Agency agreement and commission disputes</strong> — errors in the agreement itself, or in how commission was calculated.</li>
<li><strong>Property management failures</strong> where the agency also manages — rent arrears handling, maintenance decisions, bond disputes.</li>
</ul>
<p>Most of these are allegations about information and communication rather than about competence in any technical sense, which is why file notes and written confirmations do more to prevent claims than anything an insurer sells.</p>

<h2>Complaints, the CAC and your policy</h2>
<p>If a complaint about your conduct is lodged with the REA, it can be investigated, referred to a Complaints Assessment Committee, and in serious cases referred to the Real Estate Agents Disciplinary Tribunal. This process runs whether or not anyone is claiming money from you.</p>
<p>Whether your PI policy contributes to your legal costs through that process is a question of the specific wording, and the honest answer is that it varies. Some wordings include a disciplinary or regulatory defence costs extension, often with its own sub-limit; some do not. Fines and penalties are commonly excluded, and some are not insurable in any event. Ask for the wording and the sub-limit rather than accepting a general assurance that "investigations are covered".</p>
<p>We previously published a figure here for what REA proceedings cost in legal fees. We could not source it and have removed it.</p>

<h2>How much cover, and who decides</h2>
<p>The only published minimum that applies to New Zealand real estate is REINZ's $1M for member agencies. Beyond that, nobody sets a figure for you, and we are not going to invent bands.</p>
<p>What sensibly moves the number:</p>
<ul>
<li>Whether you are relying on an agency group policy or arranging your own — and whether that group policy actually names you.</li>
<li>The transaction values you handle, since an allegation is usually pleaded as a proportion of a purchase price rather than of your commission.</li>
<li>Whether you also provide property management, which is a different activity and needs to be named in the policy rather than assumed into it.</li>
<li>Whether the policy is written per claim or in the aggregate, which is the difference between one bad year and one bad file.</li>
<li>Any requirement written into a franchise agreement or a client contract, which frequently sets a higher figure than REINZ does.</li>
</ul>

<h2>Independent agents and property managers</h2>
<p>If you have left an agency to operate independently, the group policy you were covered by does not follow you, and the claims-made basis of PI means it also may not answer a claim made after you leave about work you did while you were there. Ask your former agency what run-off arrangements exist and get the answer in writing before you need it.</p>
<p>Independent property managers operating outside a licensed agency sit outside the REA regime entirely and outside any REINZ agency policy. They handle client funds, sign tenancy agreements and engage tradespeople, all of which generate professional liability, and nothing is arranging cover for them by default.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.rea.govt.nz/real-estate-professionals/apply-for-your-licence/required-criteria-and-qualifications-to-work-in-real-estate/" rel="nofollow noopener" target="_blank">REA — Required criteria and qualifications to work in real estate</a></li>
<li><a href="https://www.rea.govt.nz/assets/Uploads/Resources/Guides/Code-of-conduct.pdf" rel="nofollow noopener" target="_blank">Real Estate Agents Act (Professional Conduct and Client Care) Rules 2012 (PDF)</a>, in force 8 April 2013</li>
<li><a href="https://www.rea.govt.nz/real-estate-professionals/obligations/trust-account/" rel="nofollow noopener" target="_blank">REA — Trust account obligations</a></li>
<li><a href="https://www.reinz.co.nz/common/Uploaded%20files/REINZ/Website/2024/Codes%20of%20Practice/REINZ%20Code%20of%20Agency%20Practice%20Nov%202024.pdf" rel="nofollow noopener" target="_blank">REINZ Code of Agency Practice (PDF)</a>, November 2024</li>
<li><a href="https://www.reinz.co.nz/common/Uploaded%20files/REINZ/Website/2024/Codes%20of%20Practice/REINZ%20Code%20of%20Individual%20Membership%20Nov%202024.pdf" rel="nofollow noopener" target="_blank">REINZ Code of Individual Membership (PDF)</a>, November 2024</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal or financial advice. Check your own obligations with the REA, REINZ and your agency.</p>
</div>`,
  },
  {
    slug: 'compare-pi-insurance-providers-nz',
    title: 'Comparing PI Insurance Providers in NZ — What to Look for Beyond Price',
    excerpt: 'PI insurance is not a commodity — policy wordings differ significantly. Here is how to compare professional indemnity insurers beyond just comparing premiums.',
    metaTitle: 'How to Compare PI Insurers in NZ',
    metaDescription: 'PI policy wordings differ far more than prices do. What to compare beyond premium: the professional services definition, retroactive date, defence costs and run-off.',
    category: 'Guides',
    date: '2026-09-07',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    content: `<h2>Why PI Insurance Is Not a Commodity</h2>
<p>Many professionals buy PI insurance on price, choosing the cheapest quote available. That approach can leave significant gaps, because differences in policy wording, exclusions and claims handling can make two policies at the same premium worth very different amounts when a claim arrives.</p>
<p>New Zealand professional indemnity capacity comes from a relatively small number of specialist insurers, some of them local and some writing through overseas markets. Cover is broker-distributed and individually underwritten, and no insurer publishes rate tables, which is precisely why comparing on price alone tells you so little. The clauses below are where the real differences sit.</p>

<h2>Key Policy Differences to Compare</h2>
<p><strong>Definition of "Professional Services"</strong></p>
<p>This is the most important clause in any PI policy. It determines what activities are covered. Some policies have narrow definitions that exclude advisory or consulting work that falls outside traditional professional activities. Check that your specific services — including new or emerging activities — are explicitly covered.</p>

<p><strong>Retroactive Date</strong></p>
<p>The retroactive date determines how far back your current policy covers past work. A policy with a recent retroactive date may leave historical work exposed. Always check this before switching insurers, and ensure continuity of your retroactive date when renewing.</p>

<p><strong>Defence Costs Inside or Outside the Limit</strong></p>
<p>Some policies pay defence costs from within your cover limit (eroding it with every dollar spent on legal fees). Others pay defence costs separately, outside the limit. "Costs outside the limit" is significantly more valuable — especially for complex claims with high legal costs.</p>

<p><strong>Automatic Reinstatement</strong></p>
<p>If a claim is made mid-year and erodes your cover limit, automatic reinstatement restores your limit for subsequent claims in the same policy year. Not all policies include this.</p>

<p><strong>Run-Off Provisions</strong></p>
<p>Understand how run-off cover is structured if you retire, sell or wind up your practice. Some insurers offer automatic run-off for a period; others require a separate run-off policy at additional cost.</p>

<p><strong>Innocent Non-Disclosure</strong></p>
<p>What happens if you accidentally failed to disclose something material when applying for the policy? Some policies protect "innocent" non-disclosure, meaning a policy is not voidable for inadvertent non-disclosure. Others are stricter.</p>

<h2>The Role of a Licensed Insurance Adviser</h2>
<p>Given the complexity of PI policy comparisons, working with a licensed insurance adviser who specialises in professional liability is strongly recommended. A specialist adviser can access multiple insurers, compare policy wordings (not just prices), and negotiate better terms for your specific profession and risk profile. For most professionals, the adviser's fee (if any) is more than offset by the value of finding appropriate, well-structured cover.</p>`,
  },
  {
    slug: 'indemnity-insurance-nz-healthcare-practitioners',
    title: "Professional Indemnity Insurance for NZ Healthcare Practitioners",
    excerpt: "Far fewer NZ health regulators require indemnity cover than most pages claim. The Nursing Council and the Social Workers Registration Board do not. Here is the accurate position, and where cover actually comes from.",
    metaTitle: 'PI Insurance for NZ Healthcare Practitioners',
    metaDescription: 'The Nursing Council and SWRB do not require indemnity insurance to practise. Where health practitioners actually get cover, and what a HDC complaint involves.',
    category: 'Professions',
    date: '2026-09-07',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    content: `<h2>PI Insurance for Healthcare Professionals in NZ</h2>
<p>New Zealand's healthcare professionals benefit from the ACC scheme, which covers most personal injury caused by accident or treatment injury. However, ACC does not cover all healthcare-related liability — and the Health and Disability Commissioner (HDC) investigation process can impose significant legal costs on practitioners regardless of ACC coverage.</p>
<p>Professional indemnity insurance for healthcare practitioners covers the gaps that ACC does not, including: advice-related claims, informed consent failures, HDC investigation costs, and civil claims from patients suffering non-accidental harm.</p>

<div class="keyfact">
<p><strong>This page previously stated that most health registration bodies require indemnity insurance. That was wrong and it has been corrected.</strong> The Nursing Council does not require it for an annual practising certificate. The Social Workers Registration Board does not require it for a practising certificate. For several other professions we could not verify the position from a primary source, so we now say so rather than assert one.</p>
</div>

<h2>Which Healthcare Professionals Are Actually Required to Hold Cover?</h2>
<p>The single most useful thing to understand here is the difference between three things that get run together: a requirement set by your responsible authority as a condition of practising, a benefit that comes automatically with membership of a professional body, and a requirement imposed on you by an employer or facility contract. Most of the "it is mandatory" claims online are describing the second or third and calling it the first.</p>
<p>What we were able to verify:</p>
<ul>
<li><strong>Nurses and nurse practitioners:</strong> the Nursing Council does <strong>not</strong> require professional indemnity insurance for an annual practising certificate. The requirements are continuing competence, annual renewal and the fee. Professional indemnity cover offered through the College of Nurses Aotearoa is a <strong>member benefit</strong>, not a condition of practising.</li>
<li><strong>Social workers:</strong> the Social Workers Registration Board does <strong>not</strong> require professional indemnity insurance for a practising certificate. Renewal turns on the Code of Conduct, CPD and an online competence and fitness declaration, and the certificate expires on 30 June.</li>
<li><strong>Midwives:</strong> professional indemnity cover through the New Zealand College of Midwives is an <strong>automatic benefit of membership</strong>, not a requirement. Separately, a midwife holding an Access Agreement with a hospital is generally required by that agreement to maintain cover — which is a contractual obligation owed to the facility, not a regulatory one.</li>
<li><strong>Doctors, physiotherapists, occupational therapists, psychologists, dietitians, chiropractors and osteopaths:</strong> we could not verify the position for these professions from a primary source, and we are not going to assert one in either direction. Ask your own responsible authority. In particular, we could not read the Health Practitioners Competence Assurance Act 2003 itself, so we make no claim about what that Act does or does not require.</li>
</ul>
<p>If a page tells you your Board mandates indemnity cover, ask it to point at the rule. That is the same test we now apply to ourselves.</p>

<h2>The Only Published New Zealand Medical Indemnity Prices</h2>
<p>New Zealand Medical Indemnity Insurance publishes scheme prices, and as far as we can tell they are the only indemnity prices published anywhere in New Zealand healthcare. On its fact sheet, which references the 2025 report from the Health and Disability Commissioner, the figures are <strong>$565 to $600 a year</strong> for private sector doctors and GPEP resident medical officers, <strong>$1,621.50 a year</strong> for senior medical officers, and no personal cost for Health New Zealand hospital resident medical officers.</p>
<p>Two things to say plainly about those numbers. They are group scheme medical indemnity prices, not general professional indemnity premiums, so they do not tell you what a private clinic or an allied health practice pays. And they are the exception: for every other health profession, no New Zealand insurer or body publishes a price at all, so any per-month figure you see quoted is invented.</p>

<h2>What a HDC Complaint Involves</h2>
<p>A complaint to the Health and Disability Commissioner triggers a formal process that can run for a long time and that requires you to respond in writing, usually with legal help, whether or not the Commissioner ultimately finds a breach of the Code of Health and Disability Services Consumers' Rights. If the Commissioner refers a matter to the Director of Proceedings, it can proceed to the Human Rights Review Tribunal.</p>
<p>We previously published dollar ranges for what this costs practitioners in legal fees. We could not source them and they have been removed. What matters more for your cover decision is a wording question: whether your policy contributes to legal costs at the investigation stage, before any civil claim exists, and at what sub-limit. Many indemnity arrangements do, but it is an extension rather than a given, so ask for the clause.</p>

<h2>What Does Healthcare PI Insurance Cover?</h2>
<p>A comprehensive healthcare PI policy covers:</p>
<ul>
<li>HDC investigation costs and legal representation</li>
<li>Civil claims not covered by ACC</li>
<li>Informed consent failure claims</li>
<li>Misdiagnosis or delayed diagnosis claims</li>
<li>Treatment advice errors</li>
<li>Prescription and medication errors</li>
<li>Privacy Act and health information breaches</li>
<li>Professional registration body investigations</li>
</ul>

<h2>Group vs Individual Cover for Healthcare Practitioners</h2>
<p>Many health professionals are covered through a professional association scheme or an employer's arrangement. That is usually sensible and often cheaper than anything arranged individually. The gaps to check are consistent:</p>
<ul>
<li>Whether the scheme covers work you do <strong>outside</strong> the employment or membership it attaches to — private consulting, telehealth, expert witness work, teaching, or a second practice.</li>
<li>Whether it covers you as an <strong>employer or clinic owner</strong>, which is a different exposure from your own clinical practice and usually needs its own arrangement alongside public liability and statutory liability.</li>
<li>What happens when you leave. Scheme cover generally ends with the membership or the job, and indemnity written on a claims-made basis will not answer a later complaint about earlier work unless run-off is arranged.</li>
<li>Whether the scheme responds to a regulatory or HDC process as well as to a civil claim.</li>
</ul>
<p>One disclosure we owe you here: medical indemnity and professional body member schemes generally cannot be arranged through an insurance broker. Where your cover sits in one of those schemes, the people to ask are the scheme itself and your professional body. Where you have exposure outside it — clinic ownership, private practice, allied services — that is where a broker can help.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.nursingcouncil.org.nz/Public/Nursing/Annual_practising_certificate/NCNZ/nursing-section/Annual_practising_certificate.aspx" rel="nofollow noopener" target="_blank">Nursing Council of New Zealand — Annual practising certificate</a></li>
<li><a href="https://swrb.govt.nz/for-social-workers/practising-certificate/" rel="nofollow noopener" target="_blank">Social Workers Registration Board — Practising certificate</a></li>
<li><a href="https://www.midwife.org.nz/midwives/membership/" rel="nofollow noopener" target="_blank">New Zealand College of Midwives — Membership benefits</a></li>
<li><a href="https://www.hdc.org.nz/making-a-complaint/what-happens-to-my-complaint/" rel="nofollow noopener" target="_blank">Health and Disability Commissioner — What happens to a complaint</a></li>
</ul>
<p>Last reviewed 7 September 2026. We are an information and referral service, not a health regulator and not a law firm. General information only, not legal or clinical advice. Confirm your own obligations with your responsible authority — for several professions we could not verify the position and have said so above rather than filling the gap.</p>
</div>`,
  },
  {
    slug: 'switching-pi-insurer-nz',
    title: 'Switching PI Insurance Providers in NZ — What to Watch Out For',
    excerpt: 'Switching professional indemnity insurers can save you money — but retroactive date gaps and policy differences can leave you exposed. Here is how to switch safely.',
    metaTitle: 'Switching PI Insurers in NZ',
    metaDescription: 'Changing professional indemnity insurers can cut your premium, but retroactive date gaps can leave you exposed. How to switch cover safely in NZ.',
    category: 'Guides',
    date: '2026-05-21',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    content: `<h2>Why Switching PI Insurers Requires Care</h2>
<p>Unlike most insurance products (car, home, travel), switching professional indemnity insurers mid-term or at renewal requires careful consideration of how the claims-made basis interacts with any gaps between policies. An error when switching can leave historical work uncovered — a potentially catastrophic outcome.</p>

<h2>The Retroactive Date — The Critical Issue When Switching</h2>
<p>When you switch PI insurers, you must ensure your new policy's retroactive date goes back far enough to cover work you have already done. If your new insurer only covers work done after the new policy's inception date, all your historical work is uninsured — even though you had cover when you did it.</p>
<p>Options when switching include:</p>
<ul>
<li><strong>Matching retroactive date:</strong> New insurer agrees to match your existing retroactive date (most common — always request this)</li>
<li><strong>Run-off from old insurer + new policy for future work:</strong> More expensive but provides certainty</li>
<li><strong>New retroactive date accepted:</strong> Acceptable only if you have no meaningful historical exposure (i.e., you are just starting out)</li>
</ul>

<h2>Checking for Gaps in Coverage</h2>
<p>When switching, check for:</p>
<ul>
<li>Any period between the end of your old policy and the start of the new one</li>
<li>Whether the new policy's definition of "professional services" covers all your activities</li>
<li>Any new exclusions that were not in your previous policy</li>
<li>Changes in excess amounts and how they apply to defence costs</li>
<li>Whether the new policy includes claims circumstances you have already notified to your current insurer</li>
</ul>

<h2>Notifying Your Current Insurer Before Switching</h2>
<p>Before cancelling your existing PI policy, you should notify your current insurer of any circumstances that might give rise to a claim — even if no formal claim has yet been made. This "circumstances notification" preserves your right to make a claim under your existing policy for those matters, regardless of whether your cover lapses later.</p>

<h2>When Mid-Term Switching Makes Sense</h2>
<p>Switching PI insurers mid-term (before renewal) typically only makes sense if:</p>
<ul>
<li>Your current insurer has significantly increased your premium</li>
<li>Your current insurer's policy contains significant coverage gaps identified by a review</li>
<li>Your current insurer has exited the PI market or become financially troubled</li>
</ul>
<p>Most switches happen at renewal, which provides the cleanest transition. A licensed insurance adviser can manage the renewal comparison and switching process to ensure no gaps in coverage.</p>`,
  },
  {
    slug: 'pi-insurance-nz-architects-2026',
    title: 'PI Insurance for NZ Architects — What Registration Requires, and What It Does Not',
    excerpt: 'Registration under the Registered Architects Act 2005 does not require PI cover. The mandatory requirement is a Bill expected to start in 2028. Here is the accurate position on both.',
    metaTitle: 'PI Insurance for NZ Architects — 2026 Position',
    metaDescription: 'Architect registration in NZ does not require PI insurance. The mandatory design-professional requirement is still a Bill, expected to take effect in 2028.',
    category: 'Professions',
    date: '2026-09-07',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    content: `<div class="keyfact">
<p><strong>Two corrections to what this page used to say.</strong> There is no "Architects Act 2022" — architect registration in New Zealand is governed by the <strong>Registered Architects Act 2005</strong>. And registration does not require you to hold professional indemnity insurance: neither the Act nor the Registered Architects Rules 2006 impose it. The mandatory PI requirement people are talking about is a Bill before Parliament, expected to take effect in <strong>2028</strong>.</p>
</div>

<h2>What actually governs architect registration</h2>
<p>Registration is administered by the New Zealand Registered Architects Board under the Registered Architects Act 2005 and the Registered Architects Rules 2006. The Act has not been repealed or replaced; it has been amended since, and the Rules were amended again in 2025.</p>
<p>A small terminology point worth getting right, because it turns up in contracts: the statutory instrument is a <strong>certificate of registration</strong>. A registered architect is a person who holds a current certificate of registration. "Annual practising certificate" is the language of other professions, not this one.</p>

<h2>Registration does not require PI cover</h2>
<p>The Registered Architects Act 2005 contains no insurance or indemnity provisions at all.</p>
<p>The Registered Architects Rules 2006 mention professional indemnity exactly once, at rule 50, in the code of minimum standards of ethical conduct. Rule 50 requires you to have agreed terms of appointment with a client, and lists things those terms "may include but need not be limited to" — one of which is provision for professional indemnity insurance. That is a permissive item on a checklist of what a client engagement should address. It is not an obligation to carry cover.</p>
<p>Continuing registration turns on a five-year competence review cycle plus CPD. There is no insurance condition attached to it.</p>
<p>We previously stated on this page that PI was a condition of an annual practising certificate. That was wrong on both counts and has been removed.</p>

<h2>Where PI requirements for designers do come from</h2>
<p>Not from the registration regime. In practice they come from three places:</p>
<ul>
<li><strong>Membership bodies.</strong> Architectural Designers New Zealand requires its self-employed Professional members to hold professional indemnity insurance, with a minimum of <strong>$250,000</strong> stated on its Professional membership application form. Note the scope: the form's wording attaches the requirement to members who are self-employed — a sole operator, director, shareholder or partner — rather than to every member.</li>
<li><strong>Client contracts.</strong> For most practices this is the real driver. Local authority, institutional, developer and larger commercial clients routinely specify a limit in the appointment, and that specified limit is what sets your cover, not any professional standard.</li>
<li><strong>Producer statements, for the engineering side of a project.</strong> Engineering New Zealand states that when issuing a Producer Statement, the engineering firm represents that it holds professional indemnity insurance to a minimum of $200,000, and notes that this value is standard and unrelated to construction costs. That is an engineering convention rather than an architectural one, but it turns up on the same projects.</li>
</ul>
<p>On the New Zealand Institute of Architects: its published practice membership criteria are about competence, architecture being the core business under a Professional Member's control, supporting CPD, and accepting peer review. No insurance clause appears on its public membership pages, and its rules are not published publicly, so we are not going to state that NZIA requires PI at any level. If you are an NZIA member practice, ask NZIA directly.</p>

<h2>The 2025 announcement, accurately stated</h2>
<p>On 24 November 2025 the Government announced that professionals contributing to building design — architects and engineers among them — will be required to hold professional indemnity insurance, alongside mandatory home warranties for residential work.</p>
<p>The scope is design work. The Government's factsheet states the requirement will apply only to professionals providing architecture, design, engineering and certain building surveying services, and that it will not apply to builders.</p>
<p>Three things follow that are routinely misreported:</p>
<ul>
<li><strong>It is not law.</strong> It sits in the Building Amendment Bill, introduced 2 July 2026, currently before select committee, with submissions closing 15 November 2026.</li>
<li><strong>No minimum limit has been proposed.</strong> MBIE's Regulatory Impact Statement of 18 November 2025 sets none, and says the details of the scheme are yet to be developed and require further consultation. We previously published an expectation of $1M to $2M per project. That figure appears in no government document and has been removed.</li>
<li><strong>The timetable is 2028</strong>, following a one-year lead-in after the Bill passes. Not 2026.</li>
</ul>
<p>Nothing in the published material makes PI cover a condition of a building consent application. We previously suggested it would be in some scenarios. That was not sourced and has been removed.</p>

<h2>What PI costs architects</h2>
<p>There is one citable New Zealand figure and we are going to use only it. The Government states that professional indemnity insurance for architects typically costs between <strong>$1,500 and $3,000 per person each year</strong>, often covered by the firm. The same range appears in the Cabinet paper of 18 November 2025 and in the Beehive factsheet.</p>
<p>Treat it as what it is: a government estimate published to support a policy decision, with no methodology attached. It is not a quote and it will not match every practice.</p>
<p>We previously published a monthly range for architects' premiums. No New Zealand insurer, professional body or official source publishes premium tables for this market — cover is broker-distributed and individually underwritten — so that figure had no source and has been removed. What actually moves your premium is the limit of indemnity, fee income, the proportion of residential versus commercial work, claims and notification history, the excess, and the retroactive date.</p>
<p>One piece of context the official material does supply: around 90% of designers and engineers already hold professional indemnity cover voluntarily.</p>

<h2>Why design work rates the way it does</h2>
<p>Without putting numbers on it, the structural reasons architects sit at the harder end of the professional indemnity market are well understood:</p>
<ul>
<li>Remediation costs on a construction defect bear no relationship to the design fee that generated the exposure.</li>
<li>The liability tail is long. Section 393 of the Building Act 2004 imposes an absolute ten-year longstop on civil proceedings relating to building work, running from the act or omission.</li>
<li>The weathertight homes claims history sits behind current underwriting appetite in this sector.</li>
<li>Multi-party projects mean you are frequently one of several defendants named, and defending your position costs money even where the allegation fails.</li>
</ul>

<h2>What to actually check in your policy</h2>
<ul>
<li><strong>The definition of professional services.</strong> Design, contract administration, observation, project management and any specialist consulting you do should each be recognisable in it.</li>
<li><strong>Sub-consultants.</strong> Whether the policy responds to claims arising from work by consultants you engaged, as distinct from consultants engaged directly by the client.</li>
<li><strong>Retroactive date.</strong> The single most important date on the schedule. It should reach back over the residential work you have done, including at previous practices.</li>
<li><strong>Run-off.</strong> What happens on retirement, sale or wind-up, given a ten-year longstop. Understand the structure and the cost before you need it, not after.</li>
<li><strong>Per claim versus aggregate.</strong> Whether the limit refreshes for each claim or is the most the insurer will pay in the period.</li>
<li><strong>Joint ventures and collaborative design.</strong> Whether the arrangement you actually work in is contemplated by the wording.</li>
</ul>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.legislation.govt.nz/act/public/2005/0038/latest/whole.html" rel="nofollow noopener" target="_blank">Registered Architects Act 2005</a></li>
<li><a href="https://www.legislation.govt.nz/regulation/public/2006/0161/latest/whole.html" rel="nofollow noopener" target="_blank">Registered Architects Rules 2006</a> (rule 50)</li>
<li><a href="https://www.nzrab.nz/c/Ongoing-Requirements" rel="nofollow noopener" target="_blank">NZRAB — Ongoing requirements for registration</a></li>
<li><a href="https://adnz.org.nz/professional" rel="nofollow noopener" target="_blank">ADNZ — Professional membership</a></li>
<li><a href="https://www.beehive.govt.nz/sites/default/files/2025-11/Consumer%20protections%20for%20building%20consent%20system%20reforms%20factsheet.pdf" rel="nofollow noopener" target="_blank">Consumer protections for building consent system reforms — factsheet (PDF)</a>, November 2025</li>
<li><a href="https://www.mbie.govt.nz/dmsdocument/31701-regulatory-impact-statement-supporting-mechanisms-for-proportionate-liability-in-the-building-and-construction-sector-proactiverelease-pdf" rel="nofollow noopener" target="_blank">MBIE — Regulatory Impact Statement, proportionate liability (PDF)</a>, 18 November 2025</li>
<li><a href="https://www.building.govt.nz/about-building-performance/all-news-and-updates/proportionate-liability-changes-coming-to-accountability-for-defective-work" rel="nofollow noopener" target="_blank">Building Performance — Proportionate liability: changes coming</a>, 2 July 2026</li>
<li><a href="https://www.engineeringnz.org/engineer-tools/engineering-documents/producer-statements/professional-indemnity-insurance-why-200000/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Professional indemnity insurance: why $200,000?</a></li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal or financial advice. Confirm your own obligations with NZRAB, your membership body and your client contracts.</p>
</div>`,
  },
  // NEW POST 20
  {
    slug: 'pi-insurance-nz-recruitment-consultants',
    title: 'Professional Indemnity Insurance for NZ Recruitment Consultants',
    excerpt: 'Recruitment consultants face PI claims for wrong-hire placements, misrepresentation of candidates, and temp worker disputes. Here\'s what NZ recruiters need to know.',
    metaTitle: 'PI Insurance for NZ Recruitment Consultants',
    metaDescription: 'Recruiters face PI claims over wrong-hire placements, candidate misrepresentation and temp worker disputes. What NZ recruitment consultants need.',
    category: 'Professions',
    date: '2026-09-07',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1200&auto=format&fit=crop&q=80',
    author: 'sarah-thompson',
    content: `<h2>Why Recruitment Consultants Need PI Insurance</h2>
<p>New Zealand's recruitment sector runs from sole-operator specialists through to national agencies, and the professional liability risk is the same in shape at both ends. When a placement goes wrong, a candidate misrepresents their qualifications, or a temp worker causes a loss at a client's premises, the recruiting firm can be held financially responsible.</p>
<p>Professional indemnity (PI) insurance for recruitment consultants covers the legal defence costs and compensation arising from claims that your professional services — the identification, screening, referral or placement of candidates — caused a client a financial loss. The structural feature that makes this exposure real is that a client's loss from a failed hire is not measured against your fee. It is measured against what the failure cost their business.</p>

<h2>Common PI Claims Against Recruitment Consultants</h2>
<p>Recruitment PI claims typically fall into several categories:</p>

<h3>Wrong-Hire Claims</h3>
<p>A client engages you to place a senior manager or specialist professional. The candidate underperforms, turns out not to have the skills represented, or is dismissed within the warranty period. The client holds the agency responsible for the cost of the failed placement — search fees, notice pay, business disruption, and the cost of re-hiring. The more senior the role, the further that figure travels from the fee you earned on it.</p>

<h3>Candidate Misrepresentation</h3>
<p>A candidate provides false credentials — inflated qualifications, fabricated employment history, or misrepresented skills. If your agency placed that candidate without conducting adequate reference and credential checks, the client may claim you were negligent in your screening process. Inadequate background checking has resulted in PI claims in the legal, healthcare, financial services, and engineering sectors in NZ.</p>

<h3>Temp and Contract Worker Disputes</h3>
<p>When you supply temporary or contract workers, the employment relationship is typically between the worker and your agency — but the client depends on the worker's performance and conduct. If a temp worker causes a loss at the client's site (whether through negligence, misconduct, or an error in the work they perform), the client may look to your agency to cover the loss. The boundary between vicarious liability (a public liability issue) and professional liability (a PI issue) is not always clear — which is why recruitment firms typically need both covers.</p>

<h3>Privacy and Data Handling Breaches</h3>
<p>Recruitment agencies hold significant volumes of candidate and client personal data. A breach of the Privacy Act 2020 — whether through a data leak, improper handling of candidate information, or disclosure of confidential client requirements — can result in claims from candidates and clients alike.</p>

<h3>Contract Disputes and Fee Recovery</h3>
<p>Disputes over fee agreements, whether a placement was made in contravention of a client's exclusivity arrangement with another agency, or whether a warranty period applies are common in the recruitment sector. PI insurance covers the legal costs of defending these disputes.</p>

<h2>Who Requires Recruitment Agencies to Insure</h2>
<p>No New Zealand regulator requires a recruitment agency to hold professional indemnity insurance. We could not verify that the Recruitment, Consulting and Staffing Association imposes one on its members either, so we are not going to state that it does — ask RCSA directly if you are a member.</p>
<p>Where the requirement actually comes from is client contracts. Corporate and public sector preferred supplier panels commonly make a stated level of professional indemnity and public liability cover a condition of being listed. The limit is whatever that agreement specifies. This page previously published typical panel limits by client type; those figures were not sourced and have been removed, because the only figure that matters to you is the one in the document you have been asked to sign.</p>

<h2>How Much PI Cover Do Recruitment Consultants Need?</h2>
<p>We are not going to publish bands by agency size, because none exists in any New Zealand source. What sensibly informs the number:</p>
<ul>
<li>The seniority of the roles you place, because the client's loss from a failed senior appointment is a multiple of a failed junior one.</li>
<li>Whether you supply temporary and contract workers as well as permanent candidates, which brings a different exposure and needs to be named in the wording rather than assumed into it.</li>
<li>The sectors you recruit into. Placing into regulated or safety-critical roles raises the consequence of a screening failure.</li>
<li>Whether the limit is per claim or in the aggregate, which matters if a screening process failure could affect several placements at once.</li>
<li>Whatever your panel agreements require, which for most agencies settles it.</li>
</ul>
<p>RCSA membership and professional development can demonstrate to clients that your agency operates to professional standards, but it does not substitute for cover.</p>

<h2>PI vs Public Liability for Recruitment Agencies</h2>
<p>Recruitment agencies need both PI and public liability insurance, as they cover different risks:</p>
<ul>
<li><strong>PI insurance</strong> covers financial losses arising from professional errors — wrong-hire claims, misrepresentation, negligent screening, fee disputes</li>
<li><strong>Public liability insurance</strong> covers physical injury or property damage caused by temp workers at client sites, or clients visiting your premises</li>
</ul>
<p>Many insurers offer combined professional liability and public liability packages for recruitment agencies, which simplifies administration and typically provides cost savings.</p>

<h2>What Does PI Insurance Cost for Recruitment Consultants?</h2>
<p>No New Zealand insurer publishes premium tables for recruitment professional indemnity, so the monthly figure this page used to carry has been removed. It had no source. What an underwriter actually looks at:</p>
<ul>
<li>The number of placements made annually (volume risk)</li>
<li>The seniority of roles placed (executive placements carry higher claim values)</li>
<li>Whether you place temp workers or only permanent candidates</li>
<li>The sectors you specialise in (healthcare and legal carry higher risk)</li>
<li>Your claims history</li>
<li>Annual fee revenue</li>
</ul>

<h2>Getting PI Insurance as a Recruitment Consultant</h2>
<p>PI insurance for recruitment agencies is a specialist product — not all general business insurers offer recruitment-specific wordings that adequately cover the unique claims scenarios in this sector. Working with a licensed insurance adviser who has experience in financial lines and professional liability ensures your policy covers the activities you actually perform, including temp labour supply, executive search, contract staffing, and online candidate screening services.</p>
<p>Most specialist advisers can provide a tailored PI quote within one business day. If your agency is tendering for government panel contracts, your adviser can also confirm that your cover meets the specific panel requirements before you submit your application.</p>`,
  },
  // NEW POST 21
  {
    slug: 'pi-insurance-marketing-pr-consultants-nz',
    title: 'PI Insurance for NZ Marketing and PR Consultants — What You Need and Why',
    excerpt: 'Marketing and PR consultants face PI claims for campaign failures, copyright infringement, and reputational damage advice. Here\'s the NZ guide.',
    metaTitle: 'PI Insurance for NZ Marketing & PR Consultants',
    metaDescription: 'Marketing and PR consultants face claims over campaign performance, copyright and defamation. What PI insurance covers, and why no NZ premium tables exist.',
    category: 'Professions',
    date: '2026-09-07',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
    author: 'sarah-thompson',
    content: `<h2>Why Marketing and PR Consultants Need PI Insurance</h2>
<p>Marketing and public relations professionals occupy an interesting position in the professional liability landscape. On one hand, the average claim value in marketing PI is lower than in engineering or financial advice. On the other hand, the frequency of disputes — particularly around campaign performance, creative ownership, and contractual deliverables — is significant, and the legal costs of defending even a small claim can run to tens of thousands of dollars.</p>
<p>New Zealand's growing ecosystem of independent marketing consultants, boutique PR agencies, freelance digital marketers, and social media specialists all face professional liability exposure. Whether you are a sole-trader copywriter, an integrated agency principal, or a specialist SEO consultant, a dissatisfied client can make a claim that professional indemnity insurance is designed to cover.</p>

<h2>Common PI Claims Against Marketing and PR Consultants</h2>

<h3>Failed Campaign Claims</h3>
<p>A client engages you to run a digital marketing campaign, product launch, or brand awareness initiative. The campaign underperforms against agreed KPIs — perhaps conversion rates fall short, a product launch fails to generate the expected media coverage, or an advertising campaign produces negligible measurable return on investment. If the client can demonstrate that your professional advice or campaign management fell below the expected standard of care, they may have grounds for a PI claim.</p>
<p>These claims are nuanced — marketing outcomes are influenced by many factors beyond the consultant's control. However, if you made specific performance guarantees, provided incorrect audience analysis, or made errors in campaign targeting, your professional liability is more directly engaged. PI insurance covers your legal defence costs and any settlement.</p>

<h3>Intellectual Property and Copyright Infringement</h3>
<p>Marketing and PR work frequently involves use of images, music, video, copy, and designs. If you inadvertently use copyrighted material without proper licensing — whether in a client's social media post, a brochure, a website, or a video advertisement — the copyright owner can pursue both you and your client. PI policies typically cover unintentional IP infringement, including copyright, trademark, and trade dress violations.</p>
<p>Common scenarios include: using stock imagery without a valid licence, incorporating music in video content without sync rights, copying competitor advertising concepts that cross into trademark territory, and reproducing printed content without attribution or permission.</p>

<h3>Defamation and Reputation Claims</h3>
<p>PR consultants advising on reputation management, media relations, and crisis communications face defamation exposure. If content you draft or advise on — whether a media release, blog post, social media response, or spokesperson statement — includes inaccurate statements about third parties, a defamation claim could follow. PI insurance covers the cost of defending defamation claims arising from your professional activities.</p>

<h3>Social Media and Digital Errors</h3>
<p>Digital marketing mistakes can spread quickly and be difficult to retract. Publishing incorrect information, launching a campaign on the wrong platform, scheduling content with an error, or managing a social media crisis poorly can result in client losses that they attribute to your professional negligence. The 24/7 nature of digital marketing amplifies the speed at which errors cause harm.</p>

<h3>Contractual Disputes Over Deliverables</h3>
<p>Disputes over what was promised, what was delivered, and whether the quality of work met the brief are common in the creative industries. While contract disputes are not always PI claims, they often proceed as professional negligence claims when clients allege the quality of strategic advice or creative execution fell below professional standards.</p>

<h2>PI vs Media Liability Insurance</h2>
<p>Some marketing and PR firms — particularly larger agencies or those with significant publishing or broadcast activity — may also consider media liability insurance. Media liability is a broader product that covers risks specific to media content production, including defamation, privacy invasion, misappropriation of personality, and errors in advertising. For most marketing consultants and small agencies, PI insurance provides adequate coverage. Larger agencies producing substantial broadcast or published content should discuss media liability with their adviser.</p>

<h2>What Does PI Insurance Cost for Marketing Consultants?</h2>
<p>We do not know, and neither does anyone else publishing a figure. No New Zealand insurer publishes premium tables for professional indemnity. Cover is broker-distributed and individually underwritten, so the monthly ranges by agency size that this page used to carry were invented, and they have been removed.</p>
<p>What an underwriter prices on here is your fee income, the limit and excess you choose, the services in your definition of professional services, your claims history, and your retroactive date. The one thing worth knowing about this sector specifically is that the exposure is driven more by claim frequency than by claim size: disputes about deliverables, performance against a brief, and rights clearance are common, and defending an unfounded allegation costs money regardless of how it ends.</p>

<h2>Contractual PI Requirements for Marketing Consultants</h2>
<p>Corporate and public sector clients increasingly require their marketing and communications suppliers to hold professional indemnity cover, and the limit is whatever the contract or tender document specifies. We previously published typical required limits by client type. Those figures had no source and have been removed — read the clause in front of you instead, and price your fee against it before you agree to it.</p>
<p>Being able to produce a current certificate of currency quickly can be the difference between winning and losing a competitive pitch, so it is worth having one on file rather than requesting it during a tender.</p>

<h2>PI Insurance for Freelancers and Sole Traders in Marketing</h2>
<p>Many marketing professionals operate as sole traders — freelance copywriters, graphic designers, social media managers, SEO specialists, and brand consultants. For sole traders, the risk is entirely personal: a PI claim can expose your personal assets, savings, and property if you have no business entity to limit your liability.</p>
<p>Cover is priced on your fee income and the limit you buy, so a sole trader's premium sits at the smaller end of the market, but we are not going to attach a figure to that because none is published. What is worth knowing is that having cover in place also makes it easier to win larger clients, who commonly require a certificate of insurance as a standard onboarding step.</p>

<h2>Getting the Right PI Cover for Marketing Professionals</h2>
<p>When choosing PI insurance, marketing and PR consultants should check that the policy's definition of "professional services" covers all their activities — including digital marketing, social media management, content creation, brand strategy, media relations, and crisis communications. Some standard policies may require specific endorsement for media activities or digital services.</p>
<p>A licensed insurance adviser can quickly identify the right policy for your specific work and ensure your cover reflects the actual services you provide to clients.</p>`,
  },
  // NEW POST 22
  {
    slug: 'pi-insurance-excess-nz-guide',
    title: 'Understanding Your PI Insurance Excess in NZ — How to Choose the Right Amount',
    excerpt: 'The excess (deductible) in your PI policy affects both your premium and your out-of-pocket cost when a claim is made. Here\'s how to choose the right amount.',
    metaTitle: 'Choosing Your PI Insurance Excess in NZ',
    metaDescription: 'Your PI excess changes both your premium and what you pay when a claim arrives. How the two structures differ, and the one published NZ standard worth knowing.',
    category: 'Guides',
    date: '2026-09-07',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    content: `<h2>What Is an Excess in PI Insurance?</h2>
<p>The excess (sometimes called the deductible) in a professional indemnity insurance policy is the amount you agree to pay out of pocket before your insurer contributes to a claim. Like the excess on a car or home insurance policy, it represents your share of the financial risk — and the higher the excess you accept, the lower your annual premium.</p>
<p>The excess applies to each and every claim, not to the total claims for the policy year. If you have a $5,000 excess and two separate claims arise in the same policy period, you pay $5,000 for each — $10,000 in total — before the insurer contributes to either.</p>

<h2>How Does the Excess Apply — Damages vs Defence Costs</h2>
<p>One of the most important distinctions in PI policies is how the excess applies to defence costs versus damages. There are two common structures:</p>

<h3>Excess Applies to Damages Only</h3>
<p>Under this structure, your excess applies only to the settlement amount or court-awarded damages — not to the legal costs of defending the claim. This is the more favourable structure for policyholders. If a claim costs $80,000 in legal fees to defend and ultimately settles for $30,000, and your excess is $5,000, you pay $5,000 (towards the settlement) and the insurer covers the $80,000 in legal fees and the remaining $25,000 settlement.</p>

<h3>Excess Applies to All Costs (Including Defence Costs)</h3>
<p>Under this structure, the excess applies to the total of legal defence costs plus any settlement or damages. Your first $5,000 in legal fees is your contribution — the insurer only steps in once your total expenditure on the claim (defence plus damages) exceeds the excess. For claims with high legal costs, this structure can significantly increase your out-of-pocket exposure.</p>
<p>When comparing PI policies, always check which excess structure applies. "Excess applies to defence costs only" or "excess applies to all costs including defence" will typically be specified in the policy wording or the insurer's product disclosure statement.</p>

<h2>Is There a Standard Excess in New Zealand?</h2>
<p>Not a general one. Excess levels are set by the underwriter for your risk and are negotiable, and no New Zealand insurer publishes a schedule of them. This page previously carried a table of typical excess levels and percentage premium savings for stepping between them. Those figures had no source and have been removed rather than rounded.</p>
<p>There is one published New Zealand benchmark, and it is a useful sanity check whatever your profession. The New Zealand Law Society standard is that a professional indemnity excess <strong>should not exceed the greater of 1% of the indemnity limit or $20,000</strong>. On a $1M limit, 1% is $10,000, so $20,000 is the applicable ceiling under that standard. It was written for law practices, but as a test of whether an excess is proportionate to the cover it sits under, it travels well.</p>

<h2>How the Excess Affects Your Premium</h2>
<p>The direction of the relationship is not in doubt: a higher excess reduces premium, because you are absorbing more of each claim. What we are not going to do is publish a percentage for each step up, because that number varies by class of business, by underwriter and by your own claims record, and no published New Zealand data supports a general figure.</p>
<p>What is worth understanding is the shape of it. The saving from raising your excess diminishes as the excess grows, because you are buying out progressively less frequent losses. That is why very high excesses tend only to make sense for firms large enough to self-insure the smaller claims the excess now absorbs — and why, past a certain point, accepting more risk stops buying you much.</p>
<p>Ask your broker to quote the same cover at two or three excess levels and compare the actual numbers for your practice. That is a real answer. A percentage from a web page is not.</p>

<h2>How to Choose the Right Excess for Your Practice</h2>
<p>Selecting the right excess involves balancing three factors: your cash flow capacity, your claims risk profile, and the premium savings available. Consider:</p>

<h3>1. What Could You Comfortably Pay if a Claim Arose?</h3>
<p>The excess should be set at an amount your business can absorb without serious financial stress. If an excess would stretch your business cash flow at the moment a claim arrives, it is the wrong excess, however appealing the premium saving looks at renewal. Test it against a bad month rather than a good one, and remember the excess applies to each claim rather than once a year.</p>

<h3>2. What Is Your Actual Claims Risk?</h3>
<p>A professional with a clean claims history in a lower-risk occupation (bookkeeper, marketing consultant) may be comfortable with a higher excess, knowing claims are less frequent. A professional in a high-frequency claim sector (real estate, recruitment, healthcare) may prefer a lower excess to protect against the statistical likelihood of claims arising.</p>

<h3>3. Do Any Contracts Specify a Maximum Excess?</h3>
<p>Some client contracts — particularly government procurement and enterprise agreements — specify not only minimum PI cover limits but also maximum excess levels. A contract may require that your excess does not exceed $10,000. If your contracts have this provision, your excess choices are constrained.</p>

<h2>How Claim Patterns Should Shape Your Excess</h2>
<p>Rather than bands by profession, which nobody publishes, think about the claim pattern in your own work:</p>
<ul>
<li><strong>Frequent, smaller disputes</strong> — common in sectors where clients and consultants argue about deliverables and information rather than technical failure. A lower excess is worth paying for, because you are more likely to use it.</li>
<li><strong>Infrequent but severe claims</strong> — common where a single error can produce a very large loss, as in construction design or major systems work. Here the excess matters less than the limit, whether defence costs erode it, and the retroactive date.</li>
<li><strong>Long-tail work</strong> — anything touching building work carries a ten-year longstop under section 393 of the Building Act 2004. An excess you can absorb today may need to be absorbable by a much smaller practice in eight years' time.</li>
</ul>
<p>One correction while we are here: an earlier version of this page tied a financial adviser's excess to their FAP licence conditions. Professional indemnity is not a condition of a financial advice provider licence at all, so there is nothing there to tie it to. Where an adviser's excess is constrained, it is generally by a product provider's distribution agreement, which is a contract term.</p>

<h2>Negotiating Your Excess at Renewal</h2>
<p>Your excess is negotiable — particularly at renewal, when your insurer is competing to retain your business. If you have had a claim-free period and your risk profile has improved (reduced revenue, lower-risk client mix, better risk management procedures), you may be able to negotiate a reduction in excess without increasing your premium. A licensed insurance adviser can manage this negotiation on your behalf and compare the excess/premium combinations across multiple insurers.</p>

<h2>The Impact of the Excess on a Real Claim</h2>
<p>To illustrate the practical impact: an accountant with a $5,000 excess receives a claim from a client alleging a $40,000 tax error. Legal costs to defend the claim total $25,000; the matter settles for $20,000.</p>
<ul>
<li>If excess applies to damages only: the accountant pays $5,000; the insurer pays $25,000 in defence costs + $15,000 towards settlement = $40,000</li>
<li>If excess applies to all costs: the accountant pays their first $5,000 in legal fees; the insurer covers the remaining $20,000 in defence costs + $20,000 in settlement = $40,000</li>
</ul>
<p>In this example both outcomes are the same, but in larger or more complex claims where defence costs are higher, the structure of the excess makes a significant difference to the accountant's out-of-pocket exposure.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.lawsociety.org.nz/" rel="nofollow noopener" target="_blank">New Zealand Law Society</a> — professional indemnity cover standard: limit the greater of $1.2m per practice or $900k per partner, excess not to exceed the greater of 1% of the indemnity limit or $20,000</li>
<li><a href="https://www.fma.govt.nz/assets/Licensing-guides/Standard-Conditions-for-full-FAP-licences.pdf" rel="nofollow noopener" target="_blank">FMA — Standard Conditions for full financial advice provider licences (PDF)</a>, November 2020 — professional indemnity is not among them</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal or financial advice. Your own schedule and policy wording govern how your excess applies, not this page.</p>
</div>`,
  },
  // NEW POST 23
  {
    slug: 'top-pi-insurance-mistakes-nz-professionals',
    title: '5 Common PI Insurance Mistakes NZ Professionals Make — And How to Avoid Them',
    excerpt: 'From underinsuring to letting policies lapse, NZ professionals make costly PI insurance mistakes. Here are the five most common errors and how to avoid them.',
    metaTitle: '5 PI Insurance Mistakes NZ Professionals Make',
    metaDescription: 'Underinsuring, letting cover lapse, losing your retroactive date, notifying late, and not reading the professional services definition. How to avoid all five.',
    category: 'Guides',
    date: '2026-09-07',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    content: `<h2>Introduction</h2>
<p>Professional indemnity insurance is the cornerstone of risk management for professionals. Yet even professionals who understand the value of PI cover regularly make mistakes that leave them underprotected or completely uninsured when a claim arrives. Here are the five most costly and most common PI insurance mistakes professionals make — and how to avoid each one.</p>

<h2>Mistake 1: Underinsuring — Choosing Too Low a Cover Limit</h2>
<p>The most widespread PI insurance mistake is selecting an inadequate cover limit. Underinsurance typically happens for one of three reasons: the professional is trying to minimise premium costs; they have not considered the realistic financial scale of a potential claim; or they defaulted to the minimum limit required by their professional body without considering whether it is actually adequate for their practice.</p>

<h3>The Real Cost of Underinsurance</h3>
<p>Consider a Wellington architect who insures for $1M PI cover but works on residential projects with construction budgets of $2M–$5M. A design error that requires significant remediation work — replacing non-compliant structural elements, for example — could easily generate a claim of $800,000–$1.5M. At $1M cover, the architect is underinsured by $500,000, which is directly enforceable against their personal assets.</p>
<p>Or consider an Auckland IT consultant with $500,000 PI cover working on a $2M ERP implementation for a medium-sized business. If the implementation fails and the client suffers two months of business disruption at $100,000 per month plus remediation costs of $300,000, the $500,000 cover is exhausted. The consultant personally owes the balance.</p>

<h3>How to Choose the Right Cover Limit</h3>
<p>The starting point for choosing your PI cover limit should be the maximum realistic financial loss your professional advice or services could cause a single client in a single engagement. Ask yourself:</p>
<ul>
<li>What is the largest project I am engaged on, and what would it cost the client if my work failed?</li>
<li>What minimum cover do my contracts or professional body require — and is that actually adequate?</li>
<li>If I were sued for the worst-case scenario, would my cover be sufficient to pay the claim and legal costs?</li>
</ul>
<p>No New Zealand regulator sets a general minimum, so there is no default to fall back on. The published minimums that do exist are narrow and specific: $200,000 for an engineering firm issuing a Producer Statement, $250,000 for a self-employed ADNZ Professional member, $1M for a REINZ member agency, and the greater of $1.2m per practice or $900k per partner under the New Zealand Law Society standard. None of them is a recommendation for your practice — they are floors for particular regimes. In high-value work such as construction design, financial advice and large-scale systems implementation, the right limit generally comes from the contract and from the worst realistic loss, not from any of those numbers.</p>

<h2>Mistake 2: Letting Cover Lapse — The Run-Off Trap</h2>
<p>The PI insurance market operates almost entirely on a claims-made basis. This means you need active PI cover at the time a claim is made — not just when the work was done. Professionals who stop practising, wind up their business, or take a career break and allow their PI policy to lapse are exposed to claims from historical work for which they have no insurance protection.</p>

<h3>A Real-World Scenario</h3>
<p>A Hamilton accountant retires in June 2026 and lets their PI policy lapse. In October 2027, a former business client makes a claim relating to incorrect tax advice the accountant provided in 2024. The accountant has no active PI cover — so the claim falls entirely on them personally. Legal defence costs of $40,000 and a settlement of $60,000 come directly from their personal assets.</p>
<p>Had the accountant arranged run-off cover when retiring, the claim would have been answered by that policy. We used to publish run-off pricing here as a percentage of the last annual premium. That figure had no New Zealand source and has been removed: run-off is a one-off premium negotiated at the point of purchase, and the way to find out what yours costs is to ask for terms at a renewal while you are still a customer.</p>

<h3>How to Avoid the Run-Off Trap</h3>
<ul>
<li>Never let your PI policy lapse without first arranging run-off cover</li>
<li>Arrange run-off cover before your last policy expires, not after</li>
<li>Choose the period against the limitation law, not a rule of thumb: six years under section 11 of the Limitation Act 2010 running from the act or omission, a three-year late knowledge extension under section 14, and for anything touching building work an absolute ten-year longstop under section 393 of the Building Act 2004</li>
<li>Ask your current insurer about run-off options when you give notice of non-renewal</li>
</ul>

<h2>Mistake 3: Not Checking the Retroactive Date When Switching Insurers</h2>
<p>Switching PI insurers is common — whether for a better price, improved cover, or a change of adviser. The critical danger when switching is the retroactive date: the date from which your new policy covers historical work. If your new insurer's retroactive date is the policy inception date (today), then all your past work — including work done in the last five years — is uninsured under the new policy. And because you have cancelled your old policy, it is also uninsured there.</p>

<h3>What Can Go Wrong</h3>
<p>A Christchurch engineering consultant switches from Insurer A to Insurer B at renewal. Insurer B's new policy has a retroactive date of 1 June 2026 (the new policy start date). In November 2026, a client makes a claim relating to structural advice the engineer provided in 2024. Insurer B declines the claim — the 2024 work is before the retroactive date. Insurer A's policy has been cancelled. The engineer is uninsured for the 2024 claim.</p>

<h3>How to Protect Yourself When Switching</h3>
<ul>
<li>Always request that your new policy match your existing retroactive date</li>
<li>Confirm the retroactive date in writing before cancelling your existing policy</li>
<li>If the new insurer will not match the retroactive date, consider purchasing run-off cover from your existing insurer for the historical period, and using the new policy only for future work</li>
<li>Have a specialist insurance adviser manage the transition to ensure no gaps arise</li>
</ul>

<h2>Mistake 4: Failing to Notify Circumstances Promptly</h2>
<p>PI insurance operates on the principle that you must notify your insurer of both formal claims and circumstances that might give rise to a claim. Many professionals make the mistake of waiting until a formal claim or legal proceeding is issued before notifying their insurer — by which time their policy may have renewed or lapsed, creating complications about which policy year responds.</p>

<h3>Why Prompt Notification Matters</h3>
<p>If you become aware that a client is dissatisfied, that an error occurred in your work, or that a complaint might be forthcoming — even if no formal claim has been made — you should notify your insurer under the current policy period. This notification "locks in" your existing policy to cover any claim that subsequently arises from that circumstance, even if the formal claim arrives after the policy has renewed or lapsed.</p>
<p>Failure to notify promptly can result in:</p>
<ul>
<li>A dispute between your current and prior insurer about which policy period responds</li>
<li>Your insurer arguing that late notification prejudiced their ability to investigate the claim</li>
<li>In severe cases, denial of the claim on the basis of non-disclosure or non-notification</li>
</ul>

<h3>When to Notify Your Insurer</h3>
<p>Notify your insurer as soon as you are aware of any of the following:</p>
<ul>
<li>A formal written claim or letter of demand from a client or their lawyer</li>
<li>A client complaint that could lead to a claim</li>
<li>An error or omission in your work that a client has discovered or may discover</li>
<li>A regulatory investigation that could give rise to civil claims</li>
<li>Any situation where a reasonable person would foresee a possible claim</li>
</ul>
<p>When in doubt, notify. Notification does not automatically trigger a claims process or increase your premium — but failing to notify when you should have can leave you without cover when you need it most.</p>

<h2>Mistake 5: Not Reading the Definition of "Professional Services"</h2>
<p>The most technical but most critical clause in any PI policy is the definition of "professional services." This clause defines the scope of activities covered by your policy. If an activity you regularly perform — or a new service you have added — falls outside this definition, your policy will not respond to claims arising from it.</p>

<h3>Why This Matters in Practice</h3>
<p>An Auckland marketing consultant who describes themselves as a "digital marketing consultant" takes out PI insurance covering "digital marketing services." They then diversify into providing business strategy advice and investor pitch coaching for startup clients. A startup client claims the consultant's pitch coaching led to a misrepresentation that damaged their investor relationships.</p>
<p>The insurer reviews the claim and determines that "pitch coaching" and "business strategy" are not within the scope of "digital marketing services" as defined in the policy. The claim is declined — leaving the consultant personally exposed to $80,000 in legal and settlement costs.</p>

<h3>How to Avoid This Mistake</h3>
<ul>
<li>Read the definition of "professional services" in your PI policy carefully before purchasing</li>
<li>Ensure all services you provide — including advisory, training, coaching, and consulting services — are included or can be endorsed onto the policy</li>
<li>When you add a new service or change the nature of your work, notify your insurer and confirm your cover extends to the new activity</li>
<li>Work with a specialist insurance adviser who can review the policy wording against your actual activities</li>
</ul>

<h2>Summary — Avoiding the Five Most Costly PI Mistakes</h2>
<p>Professional indemnity insurance is only as good as the policy you have in place and the way you manage it. Avoiding these five mistakes — underinsuring, letting cover lapse, not checking the retroactive date, failing to notify promptly, and not reading the professional services definition — ensures your PI insurance provides the protection it is designed to offer.</p>
<p>Working with a licensed insurance adviser who specialises in professional liability is the most effective way to avoid these pitfalls. A specialist adviser reviews your policy against your actual risk profile, monitors your cover at renewal, and guides you through the notification and claims process if something goes wrong.</p>`,
  },
  // NEW POST 24
  {
    slug: 'pi-insurance-nz-engineers-2026',
    title: 'PI Insurance for NZ Engineers — What Engineering NZ Requires, and Where $200,000 Comes From',
    excerpt: 'Engineering New Zealand does not require PI for membership or CPEng. The $200,000 figure is a producer statement representation. And the mandatory requirement starts in 2028, not 2026.',
    metaTitle: 'PI Insurance for NZ Engineers — 2026 Position',
    metaDescription: 'Engineering NZ does not require PI for membership or CPEng. The $200,000 minimum applies to producer statements. The mandatory design requirement is expected in 2028.',
    category: 'Professions',
    date: '2026-09-07',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&auto=format&fit=crop&q=80',
    author: 'james-whitfield',
    content: `<div class="keyfact">
<p><strong>Three corrections to what this page used to say.</strong> Engineering New Zealand does <em>not</em> require professional indemnity insurance for membership or for CPEng registration. The $200,000 figure people cite is a producer statement representation, not a registration condition. And the mandatory PI requirement announced in November 2025 is not law — it is a Bill before select committee, with an expected start date of <strong>2028</strong>. We have also removed every premium figure from this page, because no New Zealand source publishes them.</p>
</div>

<h2>What Engineering New Zealand actually requires</h2>
<p>Chartered Professional Engineer registration requires a Washington Accord-accredited qualification or equivalent, a competence assessment, commitment to the CPEng Code of Ethical Conduct, and reassessment at least every six years. There is no insurance requirement. Engineering New Zealand membership is not even a prerequisite for applying.</p>
<p>Chartered Member status requires membership, the Code of Ethical Conduct, CPD, competence assessment and periodic review. Again, no insurance requirement.</p>
<p>The Chartered Professional Engineers of New Zealand Rules (No 2) 2002 contain no occurrence of "indemnity" or "insurance".</p>
<p>Engineering New Zealand does offer members access to professional indemnity, statutory liability and public liability cover through an endorsed provider, the Consulting Engineering Advancement Society. That is a <strong>member benefit</strong>, available to members and CPEng registered engineers — not a scheme anyone must join, and not the "broker panel" this page previously described.</p>

<h2>Where the $200,000 figure comes from</h2>
<p>This is the number most often misquoted as a membership rule, and it is worth stating precisely.</p>
<p>Engineering New Zealand states that when issuing a <strong>Producer Statement</strong>, the engineering firm states that it has professional indemnity insurance to a minimum of $200,000. Engineering New Zealand adds that this value is standard and unrelated to construction costs.</p>
<p>So it is a firm-level representation attached to a specific document, on a specific project, and it is deliberately not scaled to the value of the building. It is not a floor set by your professional body, and it is emphatically not a sensible target limit for a practice — it is the minimum you assert when you sign a producer statement.</p>

<h2>The November 2025 announcement — what it does and does not cover</h2>
<p>The Government announced on 24 November 2025 that professionals contributing to building design will be required to hold professional indemnity insurance. The factsheet scopes it to professionals providing architecture, design, engineering and certain building surveying services, and states expressly that it will not apply to builders.</p>
<p>Engineering services on building work are therefore in scope. Beyond that, the honest position is that the detail does not exist yet:</p>
<ul>
<li><strong>No published document subdivides the requirement by engineering discipline.</strong> This page previously set out separate treatment for structural, geotechnical, civil and MEP engineers under the proposed regime. None of that was in any government document. It has been removed.</li>
<li><strong>No minimum limit has been proposed.</strong> MBIE's Regulatory Impact Statement of 18 November 2025 sets none and states that the details of the scheme are yet to be developed and require further consultation. One law firm's assessment is that absent a legislative minimum, insurers are likely to have the final say. The $1M to $2M "anticipated regulatory benchmark" this page used to carry has been removed.</li>
<li><strong>No duration or run-off obligation has been specified.</strong> The claim that cover must be maintained throughout the limitation period was not sourced and has been removed.</li>
<li><strong>The timetable is 2028</strong>, after a one-year lead-in once the Bill passes — not "within 12 to 24 months of regulations published during 2026".</li>
</ul>
<p>The Bill was introduced on 2 July 2026 and submissions to select committee close on 15 November 2026. If your practice has a view on minimum limits, that is the live opportunity to put it somewhere it counts.</p>

<h2>Getting the limitation position right</h2>
<p>Engineering liability is long-tail, and the reason is regularly misstated — including previously on this page. The accurate position:</p>
<ul>
<li>The primary limitation period is <strong>six years under section 11 of the Limitation Act 2010</strong>. It runs from the act or omission, not from practical or substantial completion.</li>
<li>Section 14 of the Limitation Act 2010 provides a <strong>late knowledge</strong> extension of three years, running from when the claimant knew or ought reasonably to have known. This is the provision that matters for defects discovered years later.</li>
<li><strong>Section 393 of the Building Act 2004</strong> imposes an absolute ten-year longstop on civil proceedings relating to building work, also running from the act or omission. It is a hard stop, not a "ten-year limitation period for latent defects".</li>
</ul>
<p>Why this matters commercially rather than academically: because professional indemnity is claims-made, the policy that answers a claim is the one in force when the claim is made. A structural design signed off nine years ago is defended by this year's policy, or by run-off cover, or by nothing.</p>

<h2>Why engineering is a harder professional indemnity risk</h2>
<p>We are not going to attach numbers to this, because no published New Zealand data supports them. The structural reasons are real enough without invented figures:</p>
<ul>
<li><strong>Remediation cost is untethered from fee.</strong> Correcting a structural or geotechnical error means stripping, rebuilding and recertifying — at a cost bearing no relation to the engineering fee that produced it.</li>
<li><strong>Consequences can be life-safety, not just financial.</strong> Geotechnical, structural and fire engineering advice carries exposures that are qualitatively different from most professional services.</li>
<li><strong>The tail is a decade.</strong> See the longstop above.</li>
<li><strong>Multi-party claims are the norm.</strong> On a construction dispute, designers, engineers, contractors, subcontractors and consent authorities are commonly all named, and defending your position costs money even where the allegation against you fails.</li>
<li><strong>Claims history sits behind appetite.</strong> Weathertightness claims and post-Canterbury engineering disputes are part of how this market is currently underwritten.</li>
</ul>

<h2>How much cover do engineers need?</h2>
<p>We previously answered this with bands by discipline and practice size. Those bands had no source and have been removed, along with the discipline-by-discipline claim value estimates that went with them.</p>
<p>What actually determines the right limit is specific to your practice, and it is a conversation rather than a table:</p>
<ul>
<li><strong>What your contracts require.</strong> For most consultancies this sets the floor. Local authority, institutional and head-contractor appointments specify a limit, and that specified limit is the answer.</li>
<li><strong>The consequence of your worst realistic error</strong>, measured in remediation cost on the largest project you are engaged on — not in your fee.</li>
<li><strong>Per claim versus aggregate.</strong> Whether the limit restores for each claim matters more than its headline size if you carry a portfolio of similar projects.</li>
<li><strong>Defence costs inside or outside the limit.</strong> Costs-inclusive limits erode as you defend, and on a multi-party construction claim they erode quickly.</li>
<li><strong>Retroactive date and prior acts.</strong> A high limit with a short retroactive date does not protect the work most likely to generate a claim.</li>
<li><strong>Sub-consultant exposure.</strong> Whether you carry vicarious liability for consultants you engaged, and whether their own cover is verified rather than assumed.</li>
</ul>

<h2>What it costs</h2>
<p>No New Zealand insurer or professional body publishes premium tables for engineering professional indemnity. Cover is broker-distributed and individually underwritten, so any per-month figure you see on a website — including the ones this page used to carry — is invented.</p>
<p>The one official New Zealand figure that exists in this area is the Government's estimate that professional indemnity insurance for architects typically costs between $1,500 and $3,000 per person each year, often covered by the firm. It is published for design professionals in the context of the building reforms, it carries no methodology, and it should not be stretched into a benchmark for a specialist engineering practice.</p>
<p>The official material also records that around 90% of designers and engineers already hold professional indemnity cover voluntarily — which tells you more about market norms than any premium range would.</p>

<h2>Run-off, and why engineers should care more than most</h2>
<p>A ten-year longstop means claims can arrive long after the work, and after the practice that did it has changed shape. Run-off exposure is real for engineers who retire before the tail expires, change firms where the new firm's policy does not pick up prior work, or wind up or sell the practice.</p>
<p>We previously published a cost for run-off as a percentage of the last annual premium. That figure was not sourced and has been removed. Run-off pricing is negotiated at the point of purchase and varies with the insurer, the period, and the book of work being covered — ask for it in writing at renewal, while you still have leverage, rather than at the point you cease trading.</p>

<h2>Policy terms worth verifying</h2>
<ul>
<li><strong>Scope of professional services</strong> — design, certification, peer review, construction monitoring and project management should each be recognisable in the wording.</li>
<li><strong>Producer statements</strong> — that issuing them is contemplated by the policy, and at what limit.</li>
<li><strong>Sub-consultant liability</strong> — for consultants you engaged, as distinct from those engaged directly by the client.</li>
<li><strong>Retroactive date</strong> — reaching back across current projects and recent completions.</li>
<li><strong>Run-off provisions</strong> — structure and cost, understood before signing.</li>
<li><strong>Defence costs treatment</strong> — inside or in addition to the limit.</li>
<li><strong>Investigation costs</strong> — whether responding to a regulatory, consent authority or WorkSafe investigation attracts cover, at what sub-limit, and whether penalties are excluded.</li>
</ul>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.engineeringnz.org/join-us/cpeng/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Chartered Professional Engineer (CPEng)</a></li>
<li><a href="https://www.engineeringnz.org/join-us/chartered-member/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Chartered Member</a></li>
<li><a href="https://www.engineeringnz.org/engineer-tools/engineering-documents/producer-statements/professional-indemnity-insurance-why-200000/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Professional indemnity insurance: why $200,000?</a></li>
<li><a href="https://www.engineeringnz.org/engineer-tools/member-benefits/insurance/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Member benefits: insurance</a></li>
<li><a href="https://www.legislation.govt.nz/regulation/public/2002/0389/latest/whole.html" rel="nofollow noopener" target="_blank">Chartered Professional Engineers of New Zealand Rules (No 2) 2002</a></li>
<li><a href="https://www.beehive.govt.nz/sites/default/files/2025-11/Consumer%20protections%20for%20building%20consent%20system%20reforms%20factsheet.pdf" rel="nofollow noopener" target="_blank">Consumer protections for building consent system reforms — factsheet (PDF)</a>, November 2025</li>
<li><a href="https://www.mbie.govt.nz/dmsdocument/31701-regulatory-impact-statement-supporting-mechanisms-for-proportionate-liability-in-the-building-and-construction-sector-proactiverelease-pdf" rel="nofollow noopener" target="_blank">MBIE — Regulatory Impact Statement, proportionate liability (PDF)</a>, 18 November 2025</li>
<li><a href="https://www.building.govt.nz/about-building-performance/all-news-and-updates/building-amendment-bill-introduced-to-parliament" rel="nofollow noopener" target="_blank">Building Performance — Building Amendment Bill introduced to Parliament</a>, 2 July 2026</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal or financial advice. Confirm your own obligations with Engineering New Zealand and your client contracts.</p>
</div>`,
  },
]
