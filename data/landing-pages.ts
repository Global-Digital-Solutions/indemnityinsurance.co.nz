export interface LandingPage {
  slug: string
  title: string
  h1: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  heroContent: string
  bodyContent: string
  faqs: { q: string; a: string }[]
  image: string
  targetKeyword: string
  relatedCoverage: string[]
  relatedProfessions: string[]
}

export const landingPages: LandingPage[] = [
  {
    slug: 'pi-insurance-auckland',
    title: 'PI Insurance Auckland | Professional Indemnity Quotes',
    h1: 'Professional Indemnity Insurance in Auckland',
    metaTitle: 'Professional Indemnity Insurance Auckland',
    metaDescription: 'Professional indemnity insurance for Auckland accountants, engineers, IT consultants and architects. Compare PI cover with a licensed NZ adviser.',
    excerpt: 'Auckland professionals across finance, engineering, technology, construction and healthcare need PI insurance. Get expert guidance and competitive quotes tailored to the Auckland market.',
    heroContent: 'Auckland is home to the majority of New Zealand\'s professional services sector — from CBD-based financial advisers and law firms to Manukau engineering consultancies and North Shore IT contractors. As Auckland\'s economy grows, so does professional liability exposure. Get PI insurance advice from a licensed adviser who understands the Auckland market.',
    bodyContent: `<div class="keyfact">
<p><strong>Auckland has no professional indemnity rules of its own, and no Auckland price list.</strong> Nothing about working here creates a PI obligation. For almost every Auckland professional the requirement comes from a client contract, and where a body does impose one it is a membership rule rather than a law: REINZ member agencies must hold at least $1M under Principle 19 of the Code of Agency Practice, while the Real Estate Authority requires no insurance at all and the word does not appear in its conduct rules. The FMA consulted on making PI a licence condition in June 2020 and decided against it in November 2020. Auckland Council and Crown contracts do require cover, but the amount lives in Schedule 1 of your own contract, not in any published table. And no New Zealand insurer publishes rate tables, so an Auckland price list by occupation is invented rather than reported.</p>
</div>
<h2>Professional Indemnity Insurance for Auckland Professionals</h2>
<p>Auckland is home to New Zealand's largest concentration of professional services firms. From financial advisers and accountants in the CBD to architects and engineers in Newmarket, IT consultants across North Shore and South Auckland, and a growing cluster of tech and marketing businesses in Parnell, Ponsonby, and Grey Lynn — Auckland professionals face significant professional liability exposure.</p>
<p>Professional indemnity (PI) insurance protects Auckland professionals from client claims alleging that professional advice or services caused a financial loss. Whether you are a sole-trader consultant working from home or a professional services firm with 20 staff, a single PI claim can cost tens of thousands of dollars in legal fees and compensation — often far exceeding the original fee for the work in question.</p>

<h2>Who Actually Has to Hold PI in Auckland — and Who Does Not</h2>
<p>A great deal of what is written about compulsory PI in New Zealand is wrong. The distinction that matters is whether the obligation comes from a regulator, from a membership body, or from a client contract. For most Auckland professionals it is the third.</p>
<ul>
<li><strong>Financial advisers and mortgage brokers:</strong> PI is not a condition of an FMA financial advice provider licence. The FMA consulted on adding one on 17 June 2020 and decided against it on 6 November 2020, and it does not appear in the Code of Professional Conduct. Auckland advisers who carry PI generally do so because an aggregator, lender or institutional client asks for it.</li>
<li><strong>Accountants:</strong> CA ANZ requires members holding a Certificate of Public Practice to carry current and appropriate PI — not members generally. CPA Australia requires PI from members offering public accounting services in New Zealand, including honorary and pro bono work. Neither body publishes a New Zealand minimum limit, so anyone quoting one to you is guessing.</li>
<li><strong>Architects and engineers:</strong> Registration itself does not require PI. The Registered Architects Act 2005 contains no insurance provisions, and Engineering NZ does not require PI for membership or for CPEng. What does set limits is contracts and conventions — an engineering firm issuing a producer statement states that it holds PI of at least $200,000, and Architectural Designers NZ requires self-employed Professional members to hold at least $250,000.</li>
<li><strong>Real estate agents:</strong> The Real Estate Authority does not require PI, and the word insurance does not appear in the Professional Conduct and Client Care Rules 2012. REINZ does: under Principle 19 of its Code of Agency Practice (November 2024), member agencies must hold PI covering the business and everyone engaged in it, with a minimum of $1M.</li>
<li><strong>IT consultants and developers:</strong> No regulator is involved. Auckland enterprise and public sector contracts are what drive the requirement, and the limit is whatever the contract names.</li>
<li><strong>Marketing, PR and recruitment consultants:</strong> Contract-driven in the same way. Larger Auckland corporates commonly set a limit in their supplier agreements.</li>
<li><strong>Healthcare practitioners:</strong> Position varies by profession and is often misstated. The Nursing Council does not require PI for an annual practising certificate, and several bodies provide indemnity as a membership benefit rather than as a condition. Medical indemnity is normally arranged through a scheme provider and cannot be placed through a general broker.</li>
</ul>

<h2>What Sets Your Limit in Auckland</h2>
<p>Auckland does not have its own PI rules. What it has is a client base whose contracts set higher limits than smaller markets, so the practical question is not what Auckland requires but what your contracts require.</p>
<p><strong>Council and Crown work:</strong> Auckland Council and its subsidiaries, and central government agencies with Auckland operations, all buy professional services on written terms with an insurance schedule. The Government Model Contract does not name a limit at all — clause 8.1 of the standard terms simply requires the supplier to hold the insurance specified in Schedule 1 of that particular contract, and to maintain it for the term and for three years after the end date. The number is set contract by contract. Read your Schedule 1 rather than relying on a figure from a website.</p>
<p><strong>Corporate supplier agreements:</strong> Large Auckland private sector clients frequently specify a limit in their standard supplier terms. If you are onboarding with a new corporate client, the insurance clause is usually the item that stalls the process, and it is worth reading before you sign rather than after.</p>
<p><strong>Construction and property work:</strong> Auckland project values are high, and the limit that follows a design professional around is generally the one written into the consultancy agreement or required by the principal. The producer statement convention sits underneath that at $200,000, which Engineering NZ notes is standard and unrelated to construction costs.</p>
<p><strong>Long-tail exposure:</strong> PI is claims-made. What matters as much as the limit is the retroactive date and whether cover continues after the work stops. For building work, section 393 of the Building Act 2004 imposes an absolute 10-year longstop on civil proceedings, running from the act or omission — not from completion.</p>

<h2>What PI Insurance Costs in Auckland</h2>
<p>No New Zealand insurer publishes premium tables for professional indemnity. Cover is broker-distributed and individually underwritten, and the two main New Zealand PI underwriters publish no pricing at all. Any per-month figure you see quoted by profession has been made up. We are not going to add to that.</p>
<p>The only official cost guidance published in New Zealand is the Government's estimate for design professionals: in the Beehive factsheet of 24 November 2025 accompanying the building reform announcement, professional indemnity insurance for architects is said to typically cost between $1,500 and $3,000 per person each year, often covered by the firm. That is a government estimate published to support a policy decision, with no methodology attached, and it covers architects and design professionals only.</p>
<p>What an underwriter actually prices on:</p>
<ul>
<li><strong>Limit of indemnity.</strong> The single biggest lever, and usually set by someone else — a council, a client or a professional body.</li>
<li><strong>Fee income.</strong> Revenue is the primary rating base for most PI.</li>
<li><strong>Work type and discipline.</strong> Residential construction, structural and geotechnical work rate materially harder than advisory work.</li>
<li><strong>Claims and notification history,</strong> including circumstances notified but not yet claimed.</li>
<li><strong>Excess.</strong> The New Zealand Law Society standard for its own profession is that the excess should not exceed the greater of 1% of the indemnity limit or $20,000 — a useful sanity check even outside law.</li>
<li><strong>Retroactive date and run-off.</strong> Prior-acts cover is a genuine price lever, not a formality.</li>
<li><strong>Whether defence costs sit inside or outside the limit.</strong></li>
</ul>
<p>PI premiums are deductible as a business expense.</p>

<h2>How to Get PI Insurance in Auckland</h2>
<p>Auckland professionals can access PI insurance through Cover4You's team of licensed insurance advisers. Unlike direct comparison sites or generic brokers, a specialist PI adviser will review your specific professional activities, contract requirements, and risk profile — ensuring your policy actually covers the work you do.</p>
<p>Most Auckland professionals can receive a tailored PI quote within one business day. Our advisers are familiar with the specific requirements of Auckland Council, government agencies, and corporate clients operating in the Auckland market.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.fma.govt.nz/assets/Consultations/Consultation-standard-conditions-FAP-full-licensing.pdf" rel="nofollow noopener" target="_blank">FMA — Consultation: standard conditions for full FAP licensing (PDF)</a>, 17 June 2020</li>
<li><a href="https://www.fma.govt.nz/news/all-releases/media-releases/fma-releases-standard-conditions-for-licensing-of-financial-advice/" rel="nofollow noopener" target="_blank">FMA — Standard conditions released for licensing of financial advice</a>, 6 November 2020</li>
<li><a href="https://financialadvicecode.govt.nz/wp-content/uploads/2025/10/financial-advice-code-of-conduct-2025.pdf" rel="nofollow noopener" target="_blank">Code of Professional Conduct for Financial Advice Services (PDF)</a>, in force 1 November 2025</li>
<li><a href="https://www.charteredaccountantsanz.com/member-services/certificate-of-public-practice" rel="nofollow noopener" target="_blank">CA ANZ — Certificate of Public Practice</a></li>
<li><a href="https://www.cpaaustralia.com.au/become-a-cpa/public-practice/practising-in-new-zealand" rel="nofollow noopener" target="_blank">CPA Australia — Practising in New Zealand</a></li>
<li><a href="https://www.rea.govt.nz/assets/Uploads/Resources/Guides/Code-of-conduct.pdf" rel="nofollow noopener" target="_blank">REA — Professional Conduct and Client Care Rules 2012 (PDF)</a> — contains no reference to insurance or indemnity</li>
<li><a href="https://www.reinz.co.nz/common/Uploaded%20files/REINZ/Website/2024/Codes%20of%20Practice/REINZ%20Code%20of%20Agency%20Practice%20Nov%202024.pdf" rel="nofollow noopener" target="_blank">REINZ — Code of Agency Practice (PDF)</a>, November 2024, Principle 19</li>
<li><a href="https://www.legislation.govt.nz/act/public/2005/0038/latest/whole.html" rel="nofollow noopener" target="_blank">Registered Architects Act 2005</a> — contains no insurance provisions</li>
<li><a href="https://www.engineeringnz.org/join-us/cpeng/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Chartered Professional Engineer</a></li>
<li><a href="https://www.engineeringnz.org/engineer-tools/engineering-documents/producer-statements/professional-indemnity-insurance-why-200000/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Professional indemnity insurance: why $200,000?</a></li>
<li><a href="https://adnz.org.nz/professional" rel="nofollow noopener" target="_blank">ADNZ — Professional membership</a></li>
<li><a href="https://www.nursingcouncil.org.nz/Public/Nursing/Annual_practising_certificate/NCNZ/nursing-section/Annual_practising_certificate.aspx" rel="nofollow noopener" target="_blank">Nursing Council of New Zealand — Annual practising certificate</a></li>
<li><a href="https://www.beehive.govt.nz/sites/default/files/2025-11/Consumer%20protections%20for%20building%20consent%20system%20reforms%20factsheet.pdf" rel="nofollow noopener" target="_blank">Consumer protections for building consent system reforms — factsheet (PDF)</a>, 24 November 2025, for the $1,500 to $3,000 per person estimate for architects</li>
<li><a href="https://www.building.govt.nz/about-building-performance/all-news-and-updates/building-amendment-bill-introduced-to-parliament" rel="nofollow noopener" target="_blank">Building Performance — Building Amendment Bill introduced to Parliament</a>, 2 July 2026</li>
<li><a href="https://www.legislation.govt.nz/act/public/2004/0072/latest/DLM309340.html" rel="nofollow noopener" target="_blank">Building Act 2004, section 393</a> — ten-year longstop</li>
<li><a href="https://www.lawsociety.org.nz/" rel="nofollow noopener" target="_blank">New Zealand Law Society</a> — excess standard: not more than the greater of 1% of the indemnity limit or $20,000</li>
<li>New Zealand Government Model Contract for services — standard terms and conditions, clause 8.1, and Schedule 1 of the individual contract. Cited as text: we hold no verified URL for the current version, and your own signed schedule governs in any case.</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal or financial advice. We are an information and referral service, not an insurer and not a law firm; the advisers we refer you to are licensed. Confirm your own obligations with your professional body and against the insurance schedule in your own client contracts. Some cover cannot be arranged through us, medical indemnity in particular.</p>
</div>`,
    faqs: [
      {
        q: 'Do I need PI insurance to work with Auckland Council?',
        a: 'Usually, but the limit is set by the individual contract rather than by any published council-wide rule, and we are not going to quote you a figure we cannot source. Government and council professional services contracts carry an insurance schedule — under the Government Model Contract, clause 8.1 of the standard terms requires the supplier to hold whatever insurance Schedule 1 of that contract specifies, and to maintain it for the term plus three years after the end date. Read the schedule attached to your own contract, then ask your adviser to confirm your policy meets it.',
      },
      {
        q: 'How quickly can I get PI insurance cover in Auckland?',
        a: 'Most Auckland professionals can obtain PI cover within one to two business days. Your adviser will request a brief proposal form covering your profession, annual revenue, and activities — and can typically present quotes from multiple insurers within 24 hours of receiving your information.',
      },
      {
        q: 'Is PI insurance more expensive in Auckland than the rest of NZ?',
        a: 'There is no published data either way, so nobody can honestly answer this with numbers. What can be said is that PI is rated on profession, fee income, work type, claims history and limit — not on a postcode. Auckland professionals often need higher limits because their contracts demand them, and a higher limit costs more, but that is a difference in what is being bought rather than a location loading.',
      },
      {
        q: 'What is the minimum PI cover for Auckland architecture and engineering firms?',
        a: 'There is no minimum set by law or by registration. The published anchors are narrow: an engineering firm issuing a producer statement states that it holds PI of at least $200,000, and Architectural Designers NZ requires self-employed Professional members to hold at least $250,000. Beyond that, the limit comes from your consultancy agreement or the principal on the project. The Building Amendment Bill, introduced on 2 July 2026 and currently at select committee with submissions closing 15 November 2026, would require PI of professionals contributing to building design — architects and engineers — and expressly not builders. It proposes no minimum sum insured, it is not yet law, and it is expected to take effect in 2028 after a one-year lead-in.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1200&auto=format&fit=crop&q=80',
    targetKeyword: 'PI insurance Auckland',
    relatedCoverage: ['professional-indemnity', 'public-liability', 'management-liability'],
    relatedProfessions: ['accountants', 'architects-engineers', 'it-consultants', 'financial-advisers'],
  },
  {
    slug: 'pi-insurance-wellington',
    title: 'PI Insurance Wellington | Professional Indemnity Quotes',
    h1: 'Professional Indemnity Insurance in Wellington',
    metaTitle: 'Professional Indemnity Insurance Wellington',
    metaDescription: 'PI insurance for Wellington consultants, government contractors, engineers and advisers. Compare cover and get quotes from a licensed NZ adviser.',
    excerpt: 'Wellington\'s government and professional services sector generates significant PI exposure. Get tailored PI insurance advice for Wellington professionals, government contractors, and consulting firms.',
    heroContent: 'Wellington is New Zealand\'s capital city and the centre of government — home to thousands of professional services firms, consultants, and contractors who work with central government agencies. From Lambton Quay financial advisers and Thorndon policy consultants to Porirua engineering firms, Wellington professionals face some of the most specific PI insurance requirements in NZ.',
    bodyContent: `<div class="keyfact">
<p><strong>There is no standard government PI limit.</strong> The claim most often made about Wellington government work — that agencies require a set amount of professional indemnity — has no source behind it. The Government Model Contract names no figure. Clause 8.1 of the standard terms and conditions for services requires the supplier to hold the insurance specified in Schedule 1 of that particular contract, taken out with a reputable insurer and maintained for the term and for three years after the end date. The amount is filled in agency by agency, contract by contract. Nor does any regulator impose PI on the professions doing this work: it is not an FMA licence condition, and Engineering New Zealand requires none for membership or for CPEng. The $200,000 attached to engineers is a producer statement representation, not a registration standard.</p>
</div>
<h2>Professional Indemnity Insurance in Wellington — The Government Sector Context</h2>
<p>Wellington's professional services market is strongly shaped by its role as the centre of New Zealand's central government. Government agencies — including the Treasury, MBIE, Ministry of Health, Department of Internal Affairs, and dozens of others — are among the largest purchasers of professional services in the region. IT, management consulting, legal, engineering, communications, and advisory firms all compete for government contracts in Wellington — and government contracts consistently specify minimum PI insurance levels.</p>
<p>For Wellington professionals, understanding how government procurement handles insurance is essential — and the first thing to understand is that there is no single government-wide PI figure. The Government Model Contract does not name one. Clause 8.1 of the standard terms for services requires the supplier to hold the insurance specified in Schedule 1 of that particular contract, taken out with a reputable insurer and maintained for the term of the contract and for three years after the end date. The limit is filled in agency by agency, contract by contract. Anyone quoting you a standard government PI limit is inventing it.</p>

<h2>Wellington's Key Professional Sectors and Their PI Needs</h2>

<h3>IT and Digital Consultants</h3>
<p>Wellington has New Zealand's largest concentration of government IT contractors and digital transformation consultants. Government digital services projects — managed by DIA's Government Chief Digital Officer function, the All-of-Government technology services contracts, and individual agency modernisation programmes — consistently require PI cover. The limit is not standardised: it is whatever the insurance schedule of your particular contract or panel agreement names. What is worth checking before you sign is whether the policy's definition of professional services actually covers systems integration, data migration and advisory work, and whether the three-year post-contract maintenance obligation in the model terms is something your policy can satisfy.</p>

<h3>Management and Policy Consultants</h3>
<p>Management consultants and policy advisers working with Wellington government agencies face professional liability for the quality and accuracy of advice that may inform significant government spending decisions or policy changes. A flawed cost-benefit analysis, an inaccurate market assessment, or incorrect policy modelling that results in poor government decisions can give rise to PI claims. There is no published standard limit for this work — the number in your engagement letter or panel agreement is the number that matters, and it is usually the agency, not the consultant, that chooses it.</p>

<h3>Engineers and Architects</h3>
<p>Wellington's seismic environment shapes the engineering work done here more than it shapes the insurance market. Building owners and the city council have run substantial seismic assessment programmes, and engineers producing Initial Evaluation Procedure and Detailed Seismic Assessment reports carry exposure if an assessment is later said to have been wrong or inadequate. That exposure is long-tailed: section 11 of the Limitation Act 2010 gives a primary period of six years running from the act or omission, section 14 allows a further three years from late knowledge, and section 393 of the Building Act 2004 imposes an absolute 10-year longstop, also running from the act or omission rather than from completion.</p>
<p>Engineering NZ does not require PI for membership or for CPEng, and the Chartered Professional Engineers Rules contain no insurance provisions. The published anchor is the producer statement convention: a firm issuing one states that it holds PI of at least $200,000, which Engineering NZ notes is standard and unrelated to construction costs. Everything above that comes from the consultancy agreement. For seismic assessment work commissioned by a council or a large owner, the limit is normally set in the brief.</p>

<h3>Financial Advisers and Accountants</h3>
<p>Wellington's financial and professional services sector includes a significant number of FAP-licensed advisers, chartered accountants, and specialist professional services firms serving both government and private sector clients. PI is not a standard FAP licence condition — the FMA considered it and decided against it — but many advisers hold it anyway, and institutional or government clients often require it by contract.</p>

<h2>Reading a Wellington Government Insurance Schedule</h2>
<p>We are not going to publish a table of government PI limits by service category, because no such table exists. The Government Model Contract deliberately leaves the amount blank for each agency to fill in. What you can do instead is read your own schedule properly. The points that catch professionals out:</p>
<ul>
<li><strong>The limit is in Schedule 1, not in the standard terms.</strong> Two contracts with the same agency in the same year can carry different limits.</li>
<li><strong>Cover must survive the contract.</strong> The model terms require insurance to be maintained for the term and for three years after the end date. PI is claims-made, so a policy that lapses when the engagement ends leaves you exposed and in breach.</li>
<li><strong>Per claim versus in the aggregate.</strong> A schedule that names a limit without saying which can be satisfied by very different policies.</li>
<li><strong>The named insured must match the contracting entity.</strong> If you tender as a company and your policy names you personally, the certificate will be rejected.</li>
<li><strong>Professional services definition.</strong> The limit is the easy part. Whether the policy wording covers the actual scope in the statement of work is the part that decides claims.</li>
<li><strong>Subcontracting.</strong> If you sit under a prime contractor, do not assume their policy responds to your work. Get it in writing or hold your own.</li>
</ul>
<p>Having cover in place before you tender means you are not excluded on insurance grounds alone, and it means the certificate of currency is a same-day request rather than a scramble.</p>

<h2>What PI Insurance Costs in Wellington</h2>
<p>No New Zealand insurer publishes PI premium tables, and there is no public dataset of New Zealand PI premiums by profession. Cover is broker-distributed and individually underwritten. The New Zealand Law Society's own March 2026 consultation on compulsory PI for lawyers discusses rising costs and gives no dollar premium figures at all. If a site shows you a Wellington price list by occupation, it was invented.</p>
<p>Two published figures exist and both are narrow. The Government estimated in its Beehive factsheet of 24 November 2025 that professional indemnity insurance for architects typically costs between $1,500 and $3,000 per person each year, often covered by the firm — a policy estimate with no methodology attached, covering design professionals only. Separately, the New Zealand Law Society and KPMG benchmarking study of 124 firms, surveyed October to November 2023 and published in March 2024, put average PI cost per firm in 2023 at $2,850 for a barrister and $7,227 for a sole practitioner, and found PI growing faster than any other overhead category. That is law firms, per firm rather than per person, and three years old.</p>
<p>For everyone else, the honest answer is that price follows the rating factors: limit of indemnity, fee income, discipline and work type, claims and notification history, excess, retroactive date, and whether defence costs sit inside or outside the limit. For Wellington government contractors the limit is usually chosen by the agency, which means the largest single driver of your premium is a number you did not pick.</p>

<h2>Getting PI Insurance for Wellington Government Work</h2>
<p>Cover4You's licensed advisers understand the specific requirements of Wellington government contracts and can tailor your PI cover to meet the requirements of All-of-Government and agency-specific procurement panels. We can provide certificates of currency in the format required by government procurement teams and advise on any project-specific cover requirements.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li>New Zealand Government Model Contract for services — standard terms and conditions, clause 8.1, and Schedule 1 of the individual contract. Cited as text: we hold no verified URL for the current version, and your own signed schedule governs in any case.</li>
<li><a href="https://www.fma.govt.nz/assets/Consultations/Consultation-standard-conditions-FAP-full-licensing.pdf" rel="nofollow noopener" target="_blank">FMA — Consultation: standard conditions for full FAP licensing (PDF)</a>, 17 June 2020</li>
<li><a href="https://www.fma.govt.nz/news/all-releases/media-releases/fma-releases-standard-conditions-for-licensing-of-financial-advice/" rel="nofollow noopener" target="_blank">FMA — Standard conditions released for licensing of financial advice</a>, 6 November 2020</li>
<li><a href="https://financialadvicecode.govt.nz/wp-content/uploads/2025/10/financial-advice-code-of-conduct-2025.pdf" rel="nofollow noopener" target="_blank">Code of Professional Conduct for Financial Advice Services (PDF)</a>, in force 1 November 2025</li>
<li><a href="https://www.engineeringnz.org/join-us/cpeng/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Chartered Professional Engineer</a></li>
<li><a href="https://www.engineeringnz.org/engineer-tools/engineering-documents/producer-statements/professional-indemnity-insurance-why-200000/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Professional indemnity insurance: why $200,000?</a></li>
<li><a href="https://www.legislation.govt.nz/regulation/public/2002/0389/latest/whole.html" rel="nofollow noopener" target="_blank">Chartered Professional Engineers of New Zealand Rules (No 2) 2002</a></li>
<li><a href="https://www.legislation.govt.nz/act/public/2010/0110/latest/whole.html" rel="nofollow noopener" target="_blank">Limitation Act 2010</a>, sections 11 and 14</li>
<li><a href="https://www.legislation.govt.nz/act/public/2004/0072/latest/DLM309340.html" rel="nofollow noopener" target="_blank">Building Act 2004, section 393</a> — ten-year longstop</li>
<li><a href="https://www.beehive.govt.nz/sites/default/files/2025-11/Consumer%20protections%20for%20building%20consent%20system%20reforms%20factsheet.pdf" rel="nofollow noopener" target="_blank">Consumer protections for building consent system reforms — factsheet (PDF)</a>, 24 November 2025</li>
<li><a href="https://www.lawsociety.org.nz/professional-practice/practising-well/benchmarking-costs-of-law-practice-in-new-zealand/" rel="nofollow noopener" target="_blank">New Zealand Law Society and KPMG — Benchmarking costs of law practice in New Zealand</a>, March 2024. Law firms only, per firm rather than per person, 2023 data.</li>
<li>New Zealand Law Society consultation on compulsory professional indemnity insurance for lawyers, opened 26 March 2026 and closed 5 May 2026. Cited as text: we hold no verified URL, and it gives no dollar premium figures.</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal or financial advice. We are an information and referral service, not an insurer and not a law firm; the advisers we refer you to are licensed. The insurance schedule in your own contract governs, not this page — read Schedule 1 before you tender.</p>
</div>`,
    faqs: [
      {
        q: 'What PI cover do I need to work on Wellington government contracts?',
        a: 'Whatever your contract says. The Government Model Contract does not set a figure — clause 8.1 of the standard terms for services requires you to hold the insurance specified in Schedule 1 of that contract, and to maintain it for the term and for three years after the end date. The limit is chosen by the agency for that engagement. Read Schedule 1, then have your adviser check your policy against it before you tender.',
      },
      {
        q: 'Do I need PI insurance for Wellington City Council contracts?',
        a: 'Council professional services contracts generally carry an insurance schedule, and PI is normally in it. The level is set in the individual contract rather than by a published council-wide minimum, and we will not quote a figure we cannot source. Ask the council for the insurance schedule with the tender documents and check your policy against it.',
      },
      {
        q: 'Do Wellington structural engineers need more PI cover because of seismic risk?',
        a: 'Seismic assessment work carries a specific and long-tailed exposure, but there is no published survey of what Wellington engineers actually carry, so we cannot tell you what is typical. What we can tell you is where the anchors are: a firm issuing a producer statement states that it holds PI of at least $200,000, Engineering NZ imposes no PI requirement for membership or CPEng, and any figure above the producer statement level comes from the consultancy agreement. The claim period is long — six years from the act or omission under section 11 of the Limitation Act 2010, a further three years on late knowledge under section 14, and an absolute 10-year longstop under section 393 of the Building Act 2004 — so continuity of cover matters at least as much as the limit.',
      },
      {
        q: 'Can I get PI cover quickly if I am tendering for a government contract with a deadline?',
        a: 'Yes — most Wellington professionals can obtain PI cover within one to two business days. If you have a tender deadline, let your adviser know and they will prioritise your quote. You will typically need to complete a short proposal form covering your profession, revenue, and the specific services being provided under the contract.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=1200&auto=format&fit=crop&q=80',
    targetKeyword: 'professional indemnity insurance Wellington',
    relatedCoverage: ['professional-indemnity', 'public-liability', 'statutory-liability'],
    relatedProfessions: ['it-consultants', 'architects-engineers', 'consultants', 'financial-advisers'],
  },
  {
    slug: 'pi-insurance-christchurch',
    title: 'PI Insurance Christchurch | Professional Indemnity Quotes',
    h1: 'Professional Indemnity Insurance in Christchurch',
    metaTitle: 'Professional Indemnity Insurance Christchurch',
    metaDescription: 'PI insurance for Christchurch engineers, construction consultants and advisers, with cover suited to the rebuild market. Advice from licensed NZ advisers.',
    excerpt: 'Christchurch\'s post-earthquake rebuild has created unique PI risks for local engineers, architects, and construction professionals. Get expert PI insurance advice tailored to the Canterbury market.',
    heroContent: 'Christchurch\'s recovery from the 2010–2011 Canterbury earthquakes has shaped one of the most complex professional liability environments in New Zealand. Engineers, architects, project managers, geotechnical consultants, and advisory professionals working in the rebuild face elevated PI exposure, and the mandatory PI proposed for design professionals in the Building Amendment Bill would add a compliance reason to an existing commercial one.',
    bodyContent: `<div class="keyfact">
<p><strong>The ten-year period is not what most insurance sites say it is.</strong> Canterbury rebuild work is now a decade old, which makes the limitation position the thing most worth getting right — and it is the thing most often stated wrongly. The primary period is six years under section 11 of the Limitation Act 2010, running from the act or omission and not from practical or substantial completion. Section 14 can add three years from late knowledge. Section 393 of the Building Act 2004 imposes an absolute ten-year longstop on civil proceedings about building work, also running from the act or omission — a hard stop, not a ten-year latent defects window. Because PI is claims-made, that framework rather than a rule of thumb is what decides how long you hold run-off. Two related corrections: Engineering New Zealand requires no PI for membership or CPEng, and no published data exists on what Canterbury practices carry or pay.</p>
</div>
<h2>Professional Indemnity Insurance in Christchurch — A Unique Risk Environment</h2>
<p>Canterbury's rebuild following the 2010 Darfield and 2011 Christchurch earthquakes created one of the most complex professional services environments in New Zealand's history. The Christchurch central city rebuild — managed through the Christchurch Central Development Unit (CCDU) and its successor entities — and the massive residential repair and rebuild programme generated unprecedented demand for engineering, geotechnical, architectural, and project management services.</p>
<p>That concentration of professional services activity has also created a concentrated professional liability risk. Geotechnical assessments, foundation designs, seismic strengthening specifications, and residential repair project management all carry significant potential for PI claims — and the long-tail nature of building defect liability means claims from earthquake-related work may continue to emerge for years to come.</p>

<h2>Canterbury-Specific PI Risks for Engineers and Architects</h2>

<h3>Geotechnical Engineers</h3>
<p>Christchurch's liquefaction-prone soils created extraordinary demand for geotechnical engineering during and after the earthquakes. Geotechnical engineers who provided land assessments, foundation designs for repaired homes, and site investigation reports for the rebuild carry significant PI exposure. If a property that was assessed as suitable for rebuilding subsequently experiences liquefaction-related settlement or damage, the geotechnical engineer's advice may be scrutinised. There is no published figure for what Canterbury geotechnical practices carry, and we are not going to invent one. The published floor is the producer statement convention — a firm issuing one states that it holds PI of at least $200,000, which Engineering NZ notes is standard and unrelated to construction costs. Above that, the limit comes from the consultancy agreement or the principal on the project.</p>

<h3>Structural Engineers</h3>
<p>Structural engineers who designed or certified repairs to earthquake-damaged buildings, or who provided seismic strengthening designs for existing buildings, face PI exposure for the long-tail period under the Building Act. A structural engineer who certified a repair that later proves inadequate — or who provided a seismic assessment that underestimated the building's vulnerability — is exposed for as long as the limitation clock runs. Engineering NZ does not require PI for membership or for CPEng, and the Chartered Professional Engineers Rules contain no insurance provisions, so the limit a Canterbury structural firm carries is a commercial and contractual decision rather than a regulatory one.</p>

<h3>Architects</h3>
<p>Canterbury architects who worked on the rebuild — particularly those providing residential design, commercial rebuild design, or heritage building restoration — carry PI exposure for the quality and compliance of their designs. The complexity of rebuilding in Christchurch's liquefaction zones and heritage areas created design challenges that have generated PI claims. Registration does not set a level: the Registered Architects Act 2005 contains no insurance provisions, and the Registered Architects Rules 2006 mention professional indemnity only at rule 50, as a permissive item in agreed terms of appointment. Architectural Designers NZ does set one for its self-employed Professional members, at a minimum of $250,000. Anything beyond that is driven by the client agreement.</p>

<h2>Non-Construction Christchurch Professionals</h2>
<p>Beyond the construction and engineering sectors, Christchurch has a significant and growing professional services economy:</p>
<ul>
<li><strong>Accountants and tax advisers:</strong> Canterbury's agricultural sector and rebuild-related business activity creates specific tax compliance demands — and PI exposure for accounting errors</li>
<li><strong>IT consultants:</strong> Christchurch's growing tech sector — including NZTech member companies and Crown Research Institute contractors — generates IT PI exposure</li>
<li><strong>Financial advisers:</strong> Canterbury's large agricultural landowning community creates demand for specialist financial advice and correspondingly large PI exposure</li>
<li><strong>Healthcare practitioners:</strong> Christchurch Hospital and the private healthcare sector provide significant professional service volumes</li>
<li><strong>Property professionals:</strong> Christchurch's dynamic rebuild-related property market creates PI exposure for valuers, property managers, and real estate agents</li>
</ul>

<h2>Christchurch Rebuild and Ongoing PI Considerations</h2>
<p>For Christchurch professionals who worked on the earthquake rebuild, several PI considerations remain relevant:</p>
<ul>
<li><strong>Run-off cover:</strong> If you worked on the rebuild and are considering retiring or changing careers, do not let your PI cover lapse. PI is claims-made, so the policy that responds is the one in force when the claim is made, not the one in force when the work was done. Work out how long you need run-off from the limitation position rather than from a rule of thumb — see below</li>
<li><strong>Retroactive date continuity:</strong> If you are switching PI insurers, ensure your new policy's retroactive date covers your earthquake rebuild work</li>
<li><strong>Scope of "professional services":</strong> Ensure your PI policy covers the full range of services you provided during the rebuild — including any advisory, project management, or inspection roles that may differ from your normal professional activities</li>
</ul>

<h2>How Long the Exposure Actually Runs</h2>
<p>This is stated incorrectly on most insurance websites, and it matters more in Canterbury than anywhere else in the country because so much of the work is now a decade old.</p>
<ul>
<li><strong>Six years, section 11 of the Limitation Act 2010.</strong> The primary limitation period. It runs from the act or omission — not from practical or substantial completion, and not from the Building Act.</li>
<li><strong>A further three years, section 14 of the Limitation Act 2010.</strong> The late knowledge extension, running from when the claimant knew or ought reasonably to have known.</li>
<li><strong>Ten years, section 393 of the Building Act 2004.</strong> An absolute longstop on civil proceedings relating to building work, also running from the act or omission. It is a hard stop, not a latent defects period.</li>
</ul>
<p>Read together, that is the framework for deciding how long to hold run-off after your last rebuild project. It is a judgement about your own file history, not a standard number, and it is worth taking legal advice on rather than a website's word.</p>

<h2>What PI Insurance Costs in Christchurch</h2>
<p>There is no published New Zealand PI premium data — not by profession, not by city, and not for the rebuild market specifically. Cover is broker-distributed and individually underwritten, and no New Zealand insurer publishes rate tables. Any Christchurch price list by discipline that you find online was made up.</p>
<p>The only official cost guidance in New Zealand is the Government's estimate for design professionals, published in the Beehive factsheet of 24 November 2025: professional indemnity insurance for architects typically costs between $1,500 and $3,000 per person each year, often covered by the firm. It is a policy estimate with no methodology attached and it does not extend to engineers, project managers or anyone else.</p>
<p>What does move the price for Canterbury construction professionals is qualitative and specific to this market: the limit required by your contracts, your fee income, the proportion of your work that is residential construction, structural or geotechnical — all of which rate materially harder than advisory work — your claims and circumstance notifications, your retroactive date, your excess, and whether defence costs sit inside or outside the limit. A practice with a clean file, a long unbroken retroactive date and a well-defined scope of services will be priced very differently from one with rebuild-era notifications, and no published table could tell you which you are.</p>

<h2>Getting PI Insurance in Christchurch</h2>
<p>Cover4You's licensed advisers work with Christchurch professionals across all sectors. We understand the Canterbury rebuild context and its implications for PI coverage — including run-off for professionals who worked on the rebuild programme, and the cover specified in ongoing council and Crown rebuild-related contracts.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.legislation.govt.nz/act/public/2010/0110/latest/whole.html" rel="nofollow noopener" target="_blank">Limitation Act 2010</a>, sections 11 and 14</li>
<li><a href="https://www.legislation.govt.nz/act/public/2004/0072/latest/DLM309340.html" rel="nofollow noopener" target="_blank">Building Act 2004, section 393</a> — ten-year longstop on civil proceedings relating to building work</li>
<li><a href="https://www.engineeringnz.org/join-us/cpeng/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Chartered Professional Engineer</a></li>
<li><a href="https://www.legislation.govt.nz/regulation/public/2002/0389/latest/whole.html" rel="nofollow noopener" target="_blank">Chartered Professional Engineers of New Zealand Rules (No 2) 2002</a> — no occurrence of indemnity or insurance</li>
<li><a href="https://www.engineeringnz.org/engineer-tools/engineering-documents/producer-statements/professional-indemnity-insurance-why-200000/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Professional indemnity insurance: why $200,000?</a></li>
<li><a href="https://www.legislation.govt.nz/act/public/2005/0038/latest/whole.html" rel="nofollow noopener" target="_blank">Registered Architects Act 2005</a> — contains no insurance provisions</li>
<li><a href="https://www.legislation.govt.nz/regulation/public/2006/0161/latest/whole.html" rel="nofollow noopener" target="_blank">Registered Architects Rules 2006</a>, rule 50</li>
<li><a href="https://adnz.org.nz/professional" rel="nofollow noopener" target="_blank">ADNZ — Professional membership</a> — minimum $250,000 for self-employed Professional members</li>
<li><a href="https://www.beehive.govt.nz/sites/default/files/2025-11/Consumer%20protections%20for%20building%20consent%20system%20reforms%20factsheet.pdf" rel="nofollow noopener" target="_blank">Consumer protections for building consent system reforms — factsheet (PDF)</a>, 24 November 2025, for the $1,500 to $3,000 per person estimate for architects</li>
<li>New Zealand Government Model Contract for services — standard terms and conditions, clause 8.1, and Schedule 1 of the individual contract. Cited as text: we hold no verified URL for the current version, and your own signed schedule governs in any case.</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal or financial advice. We are an information and referral service, not an insurer and not a law firm; the advisers we refer you to are licensed. Limitation questions on specific rebuild files are worth taking to a lawyer rather than a broker page — take advice before you cancel or shorten any cover.</p>
</div>`,
    faqs: [
      {
        q: 'I worked on the Christchurch rebuild and am now retiring. Do I need run-off cover?',
        a: 'Almost certainly, yes. PI is claims-made, so if you let cover lapse when you retire, a claim brought afterwards about your rebuild work is uninsured no matter how long ago the work was done. How long you need run-off for is a limitation question, and the periods are routinely misstated: the primary period is six years under section 11 of the Limitation Act 2010, running from the act or omission rather than from completion; section 14 can add three years from late knowledge; and section 393 of the Building Act 2004 imposes an absolute 10-year longstop on civil proceedings about building work, also running from the act or omission. Work out your own dates from that, take legal advice if the exposure is significant, and speak to an adviser before cancelling anything.',
      },
      {
        q: 'Do Christchurch engineers need more PI cover than engineers in other NZ cities?',
        a: 'Nobody publishes what engineers in any New Zealand city actually hold, so a comparison of that kind cannot honestly be made. What is different in Canterbury is the risk itself — rebuild complexity, liquefaction, and a long tail of earthquake-related liability — rather than any local rule. Engineering NZ does not require PI at all, for membership or for CPEng. The one published anchor is the producer statement convention at a minimum of $200,000, and beyond that the level is set by your contracts and your own assessment of what a worst-case file could cost to defend and settle.',
      },
      {
        q: 'What PI cover is required for Canterbury-based government contracts?',
        a: 'The limit is set in the individual contract, not by a published council or agency minimum, so we cannot give you a figure. Where the Government Model Contract is used, clause 8.1 of the standard terms requires you to hold the insurance specified in Schedule 1 of that contract and to maintain it for the term plus three years after the end date — the amount itself is filled in per contract. Get the insurance schedule with the tender documents and have your adviser check your policy against it.',
      },
      {
        q: 'Can I get PI cover if I have a claim history from the earthquake rebuild?',
        a: 'Yes — claims history does not disqualify you from PI coverage, but it will affect your premium and may result in specific terms or exclusions. It is important to disclose all prior claims accurately when applying for PI insurance. A specialist adviser can access insurers who are experienced with Canterbury rebuild professionals and can present your risk profile effectively.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&auto=format&fit=crop&q=80',
    targetKeyword: 'professional indemnity insurance Christchurch',
    relatedCoverage: ['professional-indemnity', 'run-off-cover', 'public-liability'],
    relatedProfessions: ['architects-engineers', 'accountants', 'consultants', 'it-consultants'],
  },
  {
    slug: 'professional-indemnity-insurance-sole-traders-nz',
    title: 'PI Insurance for Sole Traders NZ | Professional Indemnity Cover',
    h1: 'Professional Indemnity Insurance for NZ Sole Traders',
    metaTitle: 'PI Insurance for NZ Sole Traders & Freelancers',
    metaDescription: 'Sole traders carry unlimited personal liability without PI cover. See what professional indemnity protects, how limits are set and how NZ freelancers arrange it.',
    excerpt: 'As a NZ sole trader, every PI claim hits you personally. There is no company structure to limit your liability. PI insurance protects your personal assets, your bank account, and your future earnings.',
    heroContent: 'Sole traders are not registered anywhere in New Zealand, so nobody can tell you how many there are. What can be said is what the structure does: without a company, every professional claim hits you personally — your savings, your property, your future income. PI insurance is the safety net for sole traders providing professional advice or services, and the premium is deductible as a business expense.',
    bodyContent: `<div class="keyfact">
<p><strong>No New Zealand regulator requires a sole trader to hold professional indemnity insurance.</strong> Every published minimum in this country is set by a membership body or by a client contract, and there are only a handful of them: $200,000 stated by an engineering firm issuing a producer statement, $250,000 for self-employed Professional members of Architectural Designers NZ, $1M for REINZ member agencies, and the New Zealand Law Society standard of the greater of $1.2m per practice or $900k per partner. None of those is a benchmark for a freelance consultant, and nothing on that list applies to you unless you belong to the body concerned. Financial advice providers have no FMA PI licence condition — the FMA consulted on one on 17 June 2020 and decided against it on 6 November 2020. There is also no published New Zealand premium data, which is why the price list that used to sit on this page has been removed rather than updated.</p>
</div>
<h2>Why PI Insurance Is Essential for Sole Traders</h2>
<p>Operating as a sole trader is the simplest way to run a professional services business in New Zealand. There is no company registration, no complex compliance, and no split between business and personal income. But that simplicity comes with a significant risk: unlimited personal liability.</p>
<p>As a sole trader, you are your business. There is no corporate veil between you and a client making a claim — if a court awards $80,000 in damages against "your business," that judgment is enforceable against your personal assets: your bank account, your home (if you own one), your vehicle, your savings, and your future earnings. Professional indemnity insurance is the mechanism that stands between a professional liability claim and your personal financial ruin.</p>

<h2>What Types of Sole Traders Need PI Insurance?</h2>
<p>PI insurance is relevant for any NZ sole trader whose work involves providing professional advice, expertise, or specialist services. This includes:</p>
<ul>
<li><strong>Freelance consultants:</strong> Management consultants, business analysts, strategy advisers</li>
<li><strong>IT contractors:</strong> Software developers, web developers, cybersecurity consultants, data analysts</li>
<li><strong>Marketing and creative freelancers:</strong> Copywriters, graphic designers, digital marketers, social media managers, brand strategists</li>
<li><strong>Financial and accounting professionals:</strong> Bookkeepers, tax agents, financial advisers (PI is not an FMA standard licence condition, though clients often require it)</li>
<li><strong>Engineering consultants:</strong> Structural, civil, geotechnical, and MEP engineers operating as sole traders</li>
<li><strong>Healthcare practitioners:</strong> Physiotherapists, psychologists, dietitians, and other registered health professionals in private practice</li>
<li><strong>Real estate agents and property managers:</strong> Independent agents and sole-trader property managers</li>
<li><strong>Training and coaching professionals:</strong> Business coaches, executive coaches, learning and development consultants</li>
<li><strong>Research and data professionals:</strong> Market researchers, data scientists, UX researchers</li>
</ul>

<h2>Common Ways Sole Traders Get Caught Without Adequate PI</h2>

<h3>The "I'm Too Small to Be Sued" Misconception</h3>
<p>Many sole traders assume that because they are small, clients will not pursue PI claims against them. This is a dangerous misconception. In practice, professional liability claims against sole traders are common — particularly when:</p>
<ul>
<li>The client is a business themselves (not a consumer) and has their own legal team</li>
<li>The alleged error has caused a measurable, documentable financial loss</li>
<li>The client's lawyer has advised them they have a viable claim</li>
<li>No-win-no-fee arrangements make the claim financially accessible for the client</li>
</ul>

<h3>The "My Contract Limits My Liability" Myth</h3>
<p>Some sole traders include limitation of liability clauses in their client contracts. While these can be helpful, they are not a substitute for PI insurance. Limitation clauses can be challenged and set aside by courts — particularly where the breach was fundamental or where the limitation clause was not properly brought to the client's attention. Even a successful limitation clause defence requires expensive legal argument to establish.</p>

<h3>The "I'll Just Work Through a Company" Delay</h3>
<p>Some sole traders intend to form a company "eventually" but continue to operate as sole traders for months or years. Every day of sole-trader operation is a day of unlimited personal liability. PI insurance provides immediate protection while your business structure evolves.</p>

<h2>How Much PI Insurance Does a Sole Trader Need?</h2>
<p>There is no general answer, and no published New Zealand benchmark for what sole traders carry. What exists is a short list of real, published minimums — every one of which comes from a membership body or a contract, not from a regulator:</p>
<ul>
<li><strong>$200,000</strong> — the PI level an engineering firm states it holds when it issues a producer statement. Engineering NZ notes this is standard and unrelated to construction costs.</li>
<li><strong>$250,000</strong> — Architectural Designers NZ, for self-employed Professional members.</li>
<li><strong>$1M</strong> — REINZ member agencies, under Principle 19 of the Code of Agency Practice (November 2024), covering the business and all individuals engaged in it.</li>
<li><strong>The greater of $1.2m per practice or $900k per partner</strong> — the New Zealand Law Society standard, and $1.2m for the New Zealand Society of Conveyancers.</li>
</ul>
<p>Note what is not on that list. Financial advice providers have no PI licence condition — the FMA consulted on one in June 2020 and decided against it in November 2020. Engineering NZ requires no PI for membership or CPEng. Registered architects have no statutory insurance obligation. CA ANZ requires PI of Certificate of Public Practice holders but publishes no New Zealand minimum limit, so any figure you see attributed to it is either the Australian scheme number or an invention.</p>
<p>In practice, the limit most sole traders end up with is the one their largest client's contract specifies. Work backwards from your contracts, and from the largest single financial loss your advice could realistically cause one client, rather than from a round number on a website.</p>

<h2>What Does PI Insurance Cost for Sole Traders?</h2>
<p>New Zealand has no public PI premium dataset. Cover is broker-distributed and individually underwritten, no New Zealand insurer publishes rate tables, and the professional bodies publish none either. We removed the price list that used to sit here because we could not source a single figure in it.</p>
<p>The one official cost estimate published in New Zealand is narrow: the Government's Beehive factsheet of 24 November 2025 states that professional indemnity insurance for architects typically costs between $1,500 and $3,000 per person each year, often covered by the firm. It is a government estimate produced to support a policy decision, with no methodology attached, and it applies to design professionals only.</p>
<p>For a sole trader, the factors that actually decide the number are:</p>
<ul>
<li><strong>Fee income.</strong> The primary rating base. A sole trader billing $90,000 and one billing $400,000 are not the same risk.</li>
<li><strong>Limit of indemnity.</strong> Usually chosen by your client rather than by you.</li>
<li><strong>Discipline and work type.</strong> Residential construction, structural and geotechnical work rate materially harder than marketing or coaching.</li>
<li><strong>Claims and notification history,</strong> including matters you notified as circumstances but which never became claims.</li>
<li><strong>Excess.</strong> Raising it lowers the premium, and the Law Society's own standard for its profession is that the excess should not exceed the greater of 1% of the limit or $20,000 — a reasonable ceiling to think about even outside law.</li>
<li><strong>Retroactive date.</strong> Buying prior-acts cover back to the start of your practice costs more than covering only work from today, and is usually worth it.</li>
<li><strong>Defence costs inside or outside the limit.</strong></li>
</ul>
<p>Premiums are deductible as a business expense.</p>

<h2>Sole Trader PI Insurance and Client Contract Requirements</h2>
<p>Clients — particularly businesses and government agencies — increasingly require PI insurance as a standard contracting condition. If you do not have PI cover, you may be unable to:</p>
<ul>
<li>Onboard with a new corporate client who requires a certificate of currency</li>
<li>Tender for government contracts that specify minimum PI levels</li>
<li>Join preferred supplier panels that mandate PI insurance</li>
<li>Secure sub-contracting work from larger agencies or consulting firms</li>
</ul>
<p>Having PI insurance in place — and being able to produce a current certificate of currency within minutes — removes a common friction point in the client onboarding process.</p>

<h2>Getting PI Insurance as a Sole Trader</h2>
<p>Sole traders can access PI insurance quickly through a licensed insurance adviser. The process typically involves completing a brief proposal form (around 10–15 minutes) covering your profession, annual revenue, and the nature of your activities. Most sole traders receive quotes within 24 hours and can have cover in place within two business days.</p>
<p>Your adviser will ensure your policy's definition of "professional services" matches the actual work you do — including any advisory, training, or coaching services — and that your cover level meets any specific contract requirements you have.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.fma.govt.nz/assets/Consultations/Consultation-standard-conditions-FAP-full-licensing.pdf" rel="nofollow noopener" target="_blank">FMA — Consultation: standard conditions for full FAP licensing (PDF)</a>, 17 June 2020</li>
<li><a href="https://www.fma.govt.nz/news/all-releases/media-releases/fma-releases-standard-conditions-for-licensing-of-financial-advice/" rel="nofollow noopener" target="_blank">FMA — Standard conditions released for licensing of financial advice</a>, 6 November 2020</li>
<li><a href="https://financialadvicecode.govt.nz/wp-content/uploads/2025/10/financial-advice-code-of-conduct-2025.pdf" rel="nofollow noopener" target="_blank">Code of Professional Conduct for Financial Advice Services (PDF)</a>, in force 1 November 2025</li>
<li><a href="https://www.charteredaccountantsanz.com/member-services/certificate-of-public-practice" rel="nofollow noopener" target="_blank">CA ANZ — Certificate of Public Practice</a> — no New Zealand minimum limit is published</li>
<li><a href="https://www.engineeringnz.org/engineer-tools/engineering-documents/producer-statements/professional-indemnity-insurance-why-200000/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Professional indemnity insurance: why $200,000?</a></li>
<li><a href="https://www.engineeringnz.org/join-us/cpeng/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Chartered Professional Engineer</a></li>
<li><a href="https://adnz.org.nz/professional" rel="nofollow noopener" target="_blank">ADNZ — Professional membership</a></li>
<li><a href="https://www.reinz.co.nz/common/Uploaded%20files/REINZ/Website/2024/Codes%20of%20Practice/REINZ%20Code%20of%20Agency%20Practice%20Nov%202024.pdf" rel="nofollow noopener" target="_blank">REINZ — Code of Agency Practice (PDF)</a>, November 2024, Principle 19</li>
<li><a href="https://www.legislation.govt.nz/act/public/2005/0038/latest/whole.html" rel="nofollow noopener" target="_blank">Registered Architects Act 2005</a> — contains no insurance provisions</li>
<li><a href="https://www.lawsociety.org.nz/" rel="nofollow noopener" target="_blank">New Zealand Law Society</a> — cover standard: the greater of $1.2m per practice or $900k per partner, with the excess not exceeding the greater of 1% of the limit or $20,000</li>
<li><a href="https://www.beehive.govt.nz/sites/default/files/2025-11/Consumer%20protections%20for%20building%20consent%20system%20reforms%20factsheet.pdf" rel="nofollow noopener" target="_blank">Consumer protections for building consent system reforms — factsheet (PDF)</a>, 24 November 2025, for the $1,500 to $3,000 per person estimate for architects</li>
<li>New Zealand Society of Conveyancers — minimum indemnity limit $1.2m. Cited as text; we hold no verified URL.</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal, financial or tax advice. We are an information and referral service, not an insurer and not a law firm; the advisers we refer you to are licensed. Confirm your own obligations with your professional body and with the insurance clause in your client contracts — policy wordings differ between underwriters, and your schedule and wording govern, not this page.</p>
</div>`,
    faqs: [
      {
        q: 'Do I need PI insurance as a sole trader even if I work through a company\'s systems?',
        a: 'Yes — even if you work on-site at a client\'s premises using their systems, your professional liability as an independent contractor remains your own. The client\'s insurance does not cover you. As a sole trader, any PI claim is enforceable against your personal assets.',
      },
      {
        q: 'Can I get PI insurance that covers multiple types of work as a generalist consultant?',
        a: 'Yes — many PI policies for sole traders can be written to cover a range of professional activities. The key is to describe all your services accurately in the proposal form so the insurer can confirm that each activity is within scope. If you add a new service type after taking out cover, notify your insurer to ensure the new activity is included.',
      },
      {
        q: 'Is PI insurance different for a sole trader versus a company?',
        a: 'The coverage mechanics are the same — the policy covers the named insured\'s professional services. For a sole trader, the named insured is you as an individual. For a company, the named insured is the company entity. Both products operate on a claims-made basis and include the same core coverages. The premium may differ based on revenue and risk profile.',
      },
      {
        q: 'What happens to my PI insurance if I form a company?',
        a: 'When you transition from sole trader to a company structure, your PI policy needs to be updated to name the new company entity as the insured. Your adviser can manage this transition, including ensuring your retroactive date is maintained and that historical work done as a sole trader is covered by the new company policy.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80',
    targetKeyword: 'professional indemnity insurance sole trader NZ',
    relatedCoverage: ['professional-indemnity', 'public-liability'],
    relatedProfessions: ['it-consultants', 'accountants', 'consultants', 'financial-advisers'],
  },
  {
    slug: 'compare-professional-indemnity-insurance-nz',
    title: 'Compare PI Insurance NZ | Find the Best Professional Indemnity Cover',
    h1: 'Compare Professional Indemnity Insurance in New Zealand',
    metaTitle: 'Compare Professional Indemnity Insurance NZ',
    metaDescription: 'Compare professional indemnity insurance in NZ: policy wordings, cover limits, excess levels and premiums differ. What to weigh up before you buy.',
    excerpt: 'PI insurance is not a commodity — policy wordings differ significantly between NZ insurers. Comparing PI cover means looking beyond premium to retroactive dates, coverage scope, and policy terms.',
    heroContent: 'Comparing professional indemnity insurance in New Zealand requires more than comparing prices. The cheapest policy may have a narrow definition of professional services, a recent retroactive date, or a high excess that applies to defence costs. Our licensed advisers compare the New Zealand PI market on wording as well as price, to find the right cover for your profession and risk profile.',
    bodyContent: `<div class="keyfact">
<p><strong>There is no New Zealand professional indemnity price list, because there is no New Zealand professional indemnity price data.</strong> No insurer here publishes rate tables — PI is broker-distributed and individually underwritten off a proposal form — and there is no public dataset of New Zealand PI premiums by profession, revenue band or region. Even the New Zealand Law Society consultation of March 2026 on compulsory PI for its own profession discusses rising costs without giving a single dollar premium figure. The one official cost estimate published in New Zealand is the Government estimate of $1,500 to $3,000 per person a year for architects, and that is a policy estimate with no methodology attached, limited to design professionals. So comparing PI here means comparing the terms of the quotes you actually receive, not advertised prices — and a site that shows you a price before an underwriter has seen your proposal form is showing you a guess.</p>
</div>
<h2>Why Comparing PI Insurance Is Complex</h2>
<p>Professional indemnity insurance in New Zealand is a specialist product supplied by a relatively small number of insurers and overseas markets. The PI market here is not a commodity market where identical products compete purely on price — policy wordings, coverage scope, excess structures, and claims handling quality vary significantly between insurers. Two policies at exactly the same annual premium can provide materially different levels of protection.</p>
<p>This guide explains the key dimensions for comparing PI insurance — so you understand what to look for beyond the premium figure.</p>

<h2>Why You Cannot Compare PI Prices Online</h2>
<p>Professional indemnity capacity in New Zealand comes from a small group of specialist insurers, managing general agents and overseas markets reached through brokers. None of them publishes rate tables, because none of them rates PI from a table. Every risk is individually underwritten off a proposal form.</p>
<p>That has a consequence worth being blunt about: there is no public New Zealand PI premium dataset. Not by profession, not by revenue band, not by region. Sites that show you a price list by occupation are not reporting market data, because there is none to report. Even the New Zealand Law Society's March 2026 consultation on compulsory PI for its own profession — a document written by people with full access to the market — discusses rising costs without giving a single dollar premium figure.</p>
<p>The one official cost estimate published in New Zealand is the Government's, in the Beehive factsheet of 24 November 2025: professional indemnity insurance for architects typically costs between $1,500 and $3,000 per person each year, often covered by the firm. It is a policy estimate with no methodology attached, and it covers design professionals only. Beyond that, the only way to know what your cover costs is to have it quoted.</p>
<p>So the useful comparison is not between advertised prices. It is between the terms of the quotes you actually receive.</p>

<h2>Comparing PI Policies — What to Look For</h2>

<h3>1. Definition of "Professional Services"</h3>
<p>This is the most critical comparison point. The professional services definition determines what activities are insured. Compare:</p>
<ul>
<li>Is the definition specific to your profession, or is it generic?</li>
<li>Does it cover all the services you actually provide, including advisory, training, and project management roles?</li>
<li>Are there any carved-out activities that would not be covered?</li>
<li>If you plan to add new services, can the definition be amended?</li>
</ul>

<h3>2. Retroactive Date</h3>
<p>The retroactive date determines how far back your current policy covers past work. A policy with a retroactive date of "policy inception" only covers work done from today onwards — leaving all historical work uninsured. Compare:</p>
<ul>
<li>What retroactive date does each insurer offer?</li>
<li>Will they match your existing retroactive date if you are switching?</li>
<li>Is the retroactive date guaranteed on future renewals, or can the insurer impose a new one?</li>
</ul>

<h3>3. Excess Structure — Damages Only vs All Costs</h3>
<p>Some policies apply the excess only to the damages or settlement component of a claim, with defence costs paid in full by the insurer. Others apply the excess to the total of defence costs plus damages. The difference can be tens of thousands of dollars in a claim with high legal costs. Always check which structure applies.</p>

<h3>4. Defence Costs Inside or Outside the Limit</h3>
<p>If defence costs are paid "inside the limit," every dollar spent on legal fees reduces your cover limit for any eventual damages award. If paid "outside the limit," your full cover limit remains available for damages regardless of legal costs. "Costs outside the limit" is a significantly more valuable policy feature.</p>

<h3>5. Automatic Reinstatement</h3>
<p>If a claim mid-year depletes part of your cover limit, automatic reinstatement restores your full limit for the remainder of the policy year. This is an important feature for professionals who face a higher frequency of smaller claims (e.g., real estate agents, recruitment consultants).</p>

<h3>6. Run-Off Provisions</h3>
<p>Compare how each insurer handles run-off cover when you retire, close your practice, or switch insurers. Some offer automatic run-off for a specified period; others require a separate policy. The cost and duration of run-off varies significantly.</p>

<h3>7. Innocent Non-Disclosure</h3>
<p>What happens if you inadvertently omitted something from your insurance application? Policies with "innocent non-disclosure" protection do not allow the insurer to void the policy for inadvertent omissions. This is an important consumer protection in the PI context, where professionals may not always be certain which past incidents are material to disclose.</p>

<h3>8. Claims Handling and Insolvency Protection</h3>
<p>Compare the financial strength and claims handling reputation of each insurer. In PI, claims can take years to resolve — you want an insurer with a strong balance sheet and experienced claims handlers who understand professional liability. Check insurer financial strength ratings where available.</p>

<h2>How to Compare PI Insurance in Practice</h2>
<p>Given the complexity of PI policy comparisons, the most effective approach is to work with a licensed insurance adviser who specialises in professional liability. A specialist adviser:</p>
<ul>
<li>Approaches multiple insurers and specialist markets on your behalf</li>
<li>Compares policy wordings — not just premium figures</li>
<li>Identifies which insurer's definition of "professional services" best fits your actual activities</li>
<li>Negotiates retroactive date continuity when you are switching</li>
<li>Provides a written comparison of key coverage differences, not just a price table</li>
<li>Advises on the right excess level for your risk profile and budget</li>
</ul>
<p>Using an online comparison tool or direct-to-insurer quote system does not provide the same level of policy wording analysis and professional guidance. For PI insurance, the quality of advice you receive is as important as the premium you pay.</p>

<h2>Price vs Value — The Right Comparison Framework</h2>
<p>When comparing PI quotes, the right question is not "which policy is cheapest?" but "which policy provides the best value for my specific risk profile?" A slightly dearer policy that puts defence costs outside the limit, defines professional services broadly enough to cover what you actually do, and reinstates the limit automatically can be worth far more than the premium difference in a single claim.</p>
<p>Our licensed advisers provide written comparisons that highlight both the premium differences and the key coverage differences between competing quotes — so you can make an informed decision based on total value, not just price.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.beehive.govt.nz/sites/default/files/2025-11/Consumer%20protections%20for%20building%20consent%20system%20reforms%20factsheet.pdf" rel="nofollow noopener" target="_blank">Consumer protections for building consent system reforms — factsheet (PDF)</a>, 24 November 2025 — the $1,500 to $3,000 per person per year estimate for architects, published to support a policy decision and carrying no methodology</li>
<li>New Zealand Law Society consultation on compulsory professional indemnity insurance for lawyers, opened 26 March 2026 and closed 5 May 2026. Cited as text: we hold no verified URL, and the document gives no dollar premium figures.</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal or financial advice. We are an information and referral service, not an insurer and not a law firm; the advisers we refer you to are licensed. Policy wordings differ between underwriters and brands — the schedule and wording you are quoted govern, not any comparison published here.</p>
</div>`,
    faqs: [
      {
        q: 'How many PI insurance options are available in NZ?',
        a: 'Fewer than in most general insurance classes. New Zealand PI capacity comes from a small group of specialist insurers, managing general agents and overseas markets accessed through brokers. We do not publish a panel list, because naming insurers implies a recommendation we are not in a position to make for every profession. What matters more than the number of markets is that whoever approaches them on your behalf compares the wordings, not just the prices.',
      },
      {
        q: 'Is online PI insurance comparison reliable?',
        a: 'Treat any indicative price you are shown online with caution — New Zealand PI is individually underwritten and no insurer publishes rates, so a figure produced before an underwriter has seen your proposal form is a guess. Comparison tools also rarely compare policy wordings, which is where the real differences between PI policies lie. For a product this specific, comparing actual quoted terms is worth more than comparing advertised prices.',
      },
      {
        q: 'How often should I review and compare my PI insurance?',
        a: 'PI insurance should be reviewed at every annual renewal. Your risk profile changes as your practice evolves — new services, new client types, higher revenue, or changed professional body requirements may all affect what cover you need. An adviser can conduct a renewal review and compare the market on your behalf each year.',
      },
      {
        q: 'Can I compare PI insurance if I have had a prior claim?',
        a: 'Yes — prior claims do not prevent you from accessing the PI market, but they will be a factor in pricing and may affect available terms. It is important to disclose prior claims accurately. A specialist adviser can identify which insurers are most receptive to risks with claims history and present your application most effectively.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=1200&auto=format&fit=crop&q=80',
    targetKeyword: 'compare professional indemnity insurance NZ',
    relatedCoverage: ['professional-indemnity', 'public-liability', 'run-off-cover'],
    relatedProfessions: ['accountants', 'architects-engineers', 'it-consultants', 'financial-advisers'],
  },
  {
    slug: 'professional-liability-insurance-nz',
    title: 'Professional Liability Insurance NZ | Expert Guidance',
    h1: 'Professional Liability Insurance in New Zealand',
    metaTitle: 'Professional Liability Insurance NZ: Cover Guide',
    metaDescription: 'Professional liability insurance protects NZ advisers and consultants from client claims. What it covers, who needs it and how to arrange the right cover.',
    excerpt: '"Professional liability insurance" and "professional indemnity insurance" are two names for the same essential coverage. Here\'s everything NZ professionals need to know.',
    heroContent: 'Professional liability insurance — also known as professional indemnity insurance in New Zealand — is the core protection for any professional providing advice, expertise, or specialist services. If a client claims your professional work caused them a financial loss, professional liability insurance covers your legal defence costs and any compensation awarded. Find out what you need and how to get it.',
    bodyContent: `<div class="keyfact">
<p><strong>Professional indemnity is not compulsory for any New Zealand profession by law.</strong> Almost every published list of professions where PI is mandatory here blurs three different things. Required by a regulator: nobody on this page. Required by a membership body: REINZ member agencies at a minimum of $1M, CA ANZ members holding a Certificate of Public Practice, CPA Australia members offering public accounting services in New Zealand, and self-employed Professional members of Architectural Designers NZ at $250,000. Required by a client contract: nearly everyone else. The Real Estate Authority requires no PI and its conduct rules do not mention insurance, the FMA decided on 6 November 2020 not to make PI a licence condition, the Registered Architects Act 2005 contains no insurance provisions, and Engineering New Zealand requires none for membership or CPEng. The Building Amendment Bill would change the position for design professionals, but it is not law, it expressly does not apply to builders, and it is expected to take effect in 2028.</p>
</div>
<h2>Professional Liability Insurance in New Zealand — A Complete Overview</h2>
<p>In New Zealand, the terms "professional liability insurance" and "professional indemnity insurance" are used interchangeably — they refer to the same product. The term "professional liability" is more commonly used in the United States, while "professional indemnity" is the standard NZ and Australian market term. If you are searching for professional liability insurance in NZ, you are looking for PI insurance.</p>
<p>Professional liability insurance protects professionals, consultants, and advisory businesses from claims arising when a client alleges that the professional's advice, expertise, or services caused them a financial loss. It is distinct from public liability insurance (which covers physical injury or property damage to third parties) and management liability insurance (which covers the management and governance of a business).</p>

<h2>What Professional Liability Insurance Covers</h2>
<p>A comprehensive professional liability insurance policy covers:</p>
<ul>
<li><strong>Professional negligence:</strong> Failing to meet the expected standard of care in your profession — the most common PI claim type in NZ</li>
<li><strong>Errors and omissions:</strong> Mistakes, oversights, or gaps in the professional services you provided</li>
<li><strong>Misrepresentation:</strong> Providing incorrect information that a client relied on to their detriment</li>
<li><strong>Breach of professional duty:</strong> Violating the specific obligations your profession imposes</li>
<li><strong>Intellectual property infringement:</strong> Unintentional use of another's IP in the course of professional services</li>
<li><strong>Breach of confidentiality:</strong> Accidental disclosure of confidential client information</li>
<li><strong>Defamation:</strong> Unintentional libel or slander arising from professional activities</li>
<li><strong>Legal defence costs:</strong> All barrister, solicitor, and court costs — even for unfounded claims</li>
</ul>

<h2>How Professional Liability Insurance Works in NZ</h2>
<p>All professional liability insurance policies in New Zealand operate on a "claims-made" basis. This has two critical implications:</p>
<p><strong>First:</strong> The policy that responds to a claim is the one active when the claim is made — not the one active when the work was done. You must have cover in place when a client makes a claim against you, regardless of when the underlying work occurred.</p>
<p><strong>Second:</strong> Your policy will have a retroactive date — the earliest date from which past work is covered. Work done before the retroactive date is not covered by your current policy, even if a claim arises now.</p>
<p>These two features of claims-made policies create the need for: (a) continuous, uninterrupted PI cover throughout your professional career; and (b) run-off cover when you retire or stop practising, to protect against future claims from historical work.</p>

<h2>Who Needs Professional Liability Insurance?</h2>
<p>Almost every published list of "professions where PI is compulsory in New Zealand" is wrong, usually because it treats a membership body's rule as though it were a law, or a client's contract as though it were a regulator's. Three different things get blurred: required by law or a regulator, required by a membership body, and required by a client contract. Here is the accurate position.</p>

<h3>Required by a membership body</h3>
<ul>
<li><strong>REINZ member agencies</strong> — PI covering the business and all individuals engaged in it, minimum $1M, under Principle 19 of the Code of Agency Practice (November 2024). Individual members must ensure they or their employer carry it to that level under Principle 12 of the Code of Individual Membership.</li>
<li><strong>CA ANZ members holding a Certificate of Public Practice</strong> — must hold current and appropriate professional indemnity insurance. The certificate is needed unless fees are under $13,000 a year and services are offered in the member's own name. CA ANZ publishes no New Zealand minimum limit; the $2m figure circulating online is Australian.</li>
<li><strong>CPA Australia members providing public accounting services in New Zealand</strong> — must hold PI, including for honorary, pro bono and voluntary services. No New Zealand minimum amount is published.</li>
<li><strong>Architectural Designers NZ self-employed Professional members</strong> — minimum $250,000.</li>
</ul>

<h3>Not required, despite what you may have read</h3>
<ul>
<li><strong>Financial advice providers.</strong> PI is not an FMA licence condition. The seven standard conditions cover record keeping, complaints, regulatory returns, outsourcing, business continuity and technology, ongoing requirements and notification of material changes. The FMA consulted on adding PI on 17 June 2020 and decided against it on 6 November 2020. It is not in the Code of Professional Conduct, and there is no PI disclosure obligation.</li>
<li><strong>Real estate agents.</strong> The Real Estate Authority does not require PI. The Professional Conduct and Client Care Rules 2012 contain no reference to insurance or indemnity, and trust account obligations are audit obligations only. The REINZ requirement above is a membership rule, not a licensing one.</li>
<li><strong>Registered architects.</strong> The Registered Architects Act 2005 contains no insurance provisions, and the Registered Architects Rules 2006 mention PI only at rule 50, as a permissive item in agreed terms of appointment. There is no Architects Act 2022 — if you have seen one cited, it does not exist.</li>
<li><strong>Engineers.</strong> Engineering NZ does not require PI for membership or for CPEng, and the Chartered Professional Engineers Rules contain no occurrence of indemnity or insurance. The producer statement convention is separate: a firm issuing one states that it holds PI of at least $200,000.</li>
<li><strong>Nurses and social workers.</strong> Neither the Nursing Council nor the Social Workers Registration Board requires PI for a practising certificate. Where a professional body provides indemnity, it is generally a membership benefit rather than a condition.</li>
</ul>
<p>We do not make a general claim either way about health practitioners registered under the Health Practitioners Competence Assurance Act 2003, because we have not been able to verify the position across the responsible authorities. Check with your own authority rather than relying on a summary.</p>

<h3>Required by client contracts</h3>
<p>For most professionals, this is where the obligation actually comes from:</p>
<ul>
<li>IT consultants and software developers (most enterprise and government contracts)</li>
<li>Management consultants (most corporate advisory contracts)</li>
<li>Engineers and design professionals (consultancy agreements, and the producer statement convention)</li>
<li>Marketing and communications agencies (most corporate retainers)</li>
<li>Research and data consultants (most enterprise contracts)</li>
</ul>
<p>A change is coming for design professionals, but it is not here yet. The Building Amendment Bill, introduced on 2 July 2026 and before select committee with submissions closing at 11.59pm on 15 November 2026, would require professionals contributing to building design — architects and engineers — to hold PI. The factsheet scope is architecture, design, engineering and certain building surveying services, and it expressly will not apply to builders. No minimum limit is proposed, the details are still to be developed, and the requirement is expected to take effect in 2028 after a one-year lead-in.</p>

<h3>Not required by anyone, but worth having</h3>
<ul>
<li>Business coaches and training providers</li>
<li>Property managers</li>
<li>Recruitment consultants</li>
<li>Any sole trader providing professional services</li>
</ul>

<h2>Professional Liability vs Public Liability vs Management Liability</h2>
<p>Understanding the difference between these three types of liability insurance is essential:</p>
<ul>
<li><strong>Professional liability (PI):</strong> Covers financial loss claims arising from your professional advice, expertise, or services</li>
<li><strong>Public liability:</strong> Covers physical injury to persons or physical damage to property caused by your business activities</li>
<li><strong>Management liability:</strong> Covers the management and governance of your business — D&O, employment practices, statutory liability, and crime</li>
</ul>
<p>Most professional businesses need at least PI and public liability. Businesses with employees and directors additionally need management liability cover. These products are complementary, not overlapping — each covers a distinct category of risk.</p>

<h2>How Much Professional Liability Insurance Do You Need?</h2>
<p>The right cover limit depends on:</p>
<ul>
<li>The maximum financial loss your professional advice could cause a single client</li>
<li>Minimum requirements specified by your professional body or, more often, your clients</li>
<li>Your annual revenue (higher revenue generally supports higher potential claim values)</li>
<li>The sectors you work in (construction, finance and health carry higher exposure)</li>
</ul>
<p>There is no published New Zealand benchmark for what professionals typically hold, so instead of a made-up default, here are the real published levels and who sets each of them:</p>
<ul>
<li><strong>$200,000</strong> — stated by an engineering firm issuing a producer statement (Engineering NZ notes this is standard and unrelated to construction costs)</li>
<li><strong>$250,000</strong> — Architectural Designers NZ, self-employed Professional members</li>
<li><strong>$1M</strong> — REINZ member agencies, Code of Agency Practice Principle 19</li>
<li><strong>The greater of $1.2m per practice or $900k per partner</strong> — New Zealand Law Society standard; $1.2m for the New Zealand Society of Conveyancers</li>
</ul>
<p>Everything else is a contract negotiation. If your clients set a limit, that is your limit. If they do not, work from the size of the worst realistic file rather than from a round number.</p>

<h2>What It Costs</h2>
<p>No New Zealand insurer publishes PI rate tables, and there is no public dataset of New Zealand PI premiums. The only official cost guidance is the Government's: its Beehive factsheet of 24 November 2025 states that professional indemnity insurance for architects typically costs between $1,500 and $3,000 per person each year, often covered by the firm — a policy estimate with no methodology attached, limited to design professionals. The only substantial survey data is the New Zealand Law Society and KPMG benchmarking study of 124 firms, surveyed October to November 2023 and published March 2024, which reported average PI cost per firm in 2023 of $2,850 for a barrister and $7,227 for a sole practitioner, and PI rising faster than any other overhead. That is law firms only, per firm rather than per person, and now several years old.</p>
<p>For any other profession, the price comes out of the underwriting: limit, fee income, discipline and work type, claims and notification history, excess, retroactive date, and whether defence costs sit inside or outside the limit.</p>

<h2>Getting Professional Liability Insurance in New Zealand</h2>
<p>Professional liability insurance is arranged through licensed insurance advisers who specialise in professional liability and financial lines. A specialist adviser approaches the relevant markets, compares policy wordings, and makes sure your cover is scoped to the work you actually do. Most professionals can obtain quotes and activate cover within one to two business days. Note that some cover cannot be arranged through a general broker at all — medical indemnity and professional body member schemes in particular.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.fma.govt.nz/assets/Licensing-guides/Standard-Conditions-for-full-FAP-licences.pdf" rel="nofollow noopener" target="_blank">FMA — Standard conditions for full FAP licences (PDF)</a></li>
<li><a href="https://www.fma.govt.nz/assets/Consultations/Consultation-standard-conditions-FAP-full-licensing.pdf" rel="nofollow noopener" target="_blank">FMA — Consultation: standard conditions for full FAP licensing (PDF)</a>, 17 June 2020</li>
<li><a href="https://www.fma.govt.nz/news/all-releases/media-releases/fma-releases-standard-conditions-for-licensing-of-financial-advice/" rel="nofollow noopener" target="_blank">FMA — Standard conditions released for licensing of financial advice</a>, 6 November 2020</li>
<li><a href="https://financialadvicecode.govt.nz/wp-content/uploads/2025/10/financial-advice-code-of-conduct-2025.pdf" rel="nofollow noopener" target="_blank">Code of Professional Conduct for Financial Advice Services (PDF)</a>, in force 1 November 2025</li>
<li><a href="https://www.rea.govt.nz/assets/Uploads/Resources/Guides/Code-of-conduct.pdf" rel="nofollow noopener" target="_blank">REA — Professional Conduct and Client Care Rules 2012 (PDF)</a></li>
<li><a href="https://www.rea.govt.nz/real-estate-professionals/apply-for-your-licence/required-criteria-and-qualifications-to-work-in-real-estate/" rel="nofollow noopener" target="_blank">REA — Required criteria and qualifications to work in real estate</a></li>
<li><a href="https://www.reinz.co.nz/common/Uploaded%20files/REINZ/Website/2024/Codes%20of%20Practice/REINZ%20Code%20of%20Agency%20Practice%20Nov%202024.pdf" rel="nofollow noopener" target="_blank">REINZ — Code of Agency Practice (PDF)</a>, November 2024, Principle 19</li>
<li><a href="https://www.reinz.co.nz/common/Uploaded%20files/REINZ/Website/2024/Codes%20of%20Practice/REINZ%20Code%20of%20Individual%20Membership%20Nov%202024.pdf" rel="nofollow noopener" target="_blank">REINZ — Code of Individual Membership (PDF)</a>, November 2024, Principle 12</li>
<li><a href="https://www.charteredaccountantsanz.com/member-services/certificate-of-public-practice" rel="nofollow noopener" target="_blank">CA ANZ — Certificate of Public Practice</a></li>
<li><a href="https://www.cpaaustralia.com.au/become-a-cpa/public-practice/practising-in-new-zealand" rel="nofollow noopener" target="_blank">CPA Australia — Practising in New Zealand</a></li>
<li><a href="https://adnz.org.nz/professional" rel="nofollow noopener" target="_blank">ADNZ — Professional membership</a></li>
<li><a href="https://www.legislation.govt.nz/act/public/2005/0038/latest/whole.html" rel="nofollow noopener" target="_blank">Registered Architects Act 2005</a></li>
<li><a href="https://www.legislation.govt.nz/regulation/public/2006/0161/latest/whole.html" rel="nofollow noopener" target="_blank">Registered Architects Rules 2006</a>, rule 50</li>
<li><a href="https://www.engineeringnz.org/join-us/cpeng/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Chartered Professional Engineer</a></li>
<li><a href="https://www.legislation.govt.nz/regulation/public/2002/0389/latest/whole.html" rel="nofollow noopener" target="_blank">Chartered Professional Engineers of New Zealand Rules (No 2) 2002</a></li>
<li><a href="https://www.engineeringnz.org/engineer-tools/engineering-documents/producer-statements/professional-indemnity-insurance-why-200000/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Professional indemnity insurance: why $200,000?</a></li>
<li><a href="https://www.nursingcouncil.org.nz/Public/Nursing/Annual_practising_certificate/NCNZ/nursing-section/Annual_practising_certificate.aspx" rel="nofollow noopener" target="_blank">Nursing Council of New Zealand — Annual practising certificate</a></li>
<li><a href="https://swrb.govt.nz/for-social-workers/practising-certificate/" rel="nofollow noopener" target="_blank">Social Workers Registration Board — Practising certificate</a></li>
<li><a href="https://www.lawsociety.org.nz/" rel="nofollow noopener" target="_blank">New Zealand Law Society</a> — cover standard: the greater of $1.2m per practice or $900k per partner</li>
<li><a href="https://www.beehive.govt.nz/sites/default/files/2025-11/Consumer%20protections%20for%20building%20consent%20system%20reforms%20factsheet.pdf" rel="nofollow noopener" target="_blank">Consumer protections for building consent system reforms — factsheet (PDF)</a>, 24 November 2025</li>
<li><a href="https://www.mbie.govt.nz/dmsdocument/31701-regulatory-impact-statement-supporting-mechanisms-for-proportionate-liability-in-the-building-and-construction-sector-proactiverelease-pdf" rel="nofollow noopener" target="_blank">MBIE — Regulatory Impact Statement, proportionate liability (PDF)</a>, 18 November 2025 — no minimum limit proposed</li>
<li><a href="https://www.building.govt.nz/about-building-performance/all-news-and-updates/building-amendment-bill-introduced-to-parliament" rel="nofollow noopener" target="_blank">Building Performance — Building Amendment Bill introduced to Parliament</a>, 2 July 2026</li>
<li><a href="https://www.lawsociety.org.nz/professional-practice/practising-well/benchmarking-costs-of-law-practice-in-new-zealand/" rel="nofollow noopener" target="_blank">New Zealand Law Society and KPMG — Benchmarking costs of law practice in New Zealand</a>, March 2024. Law firms only, per firm rather than per person, 2023 data.</li>
<li>New Zealand Society of Conveyancers — minimum indemnity limit $1.2m. Cited as text; we hold no verified URL.</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal or financial advice. We are an information and referral service, not an insurer and not a law firm; the advisers we refer you to are licensed. We could not verify the position on professional indemnity across the authorities responsible under the Health Practitioners Competence Assurance Act 2003, and we have said so on the page rather than filling the gap. Some cover cannot be arranged through us — medical indemnity and professional body member schemes in particular.</p>
</div>`,
    faqs: [
      {
        q: 'Is "professional liability insurance" the same as "professional indemnity insurance" in NZ?',
        a: 'Yes — these terms refer to the same product. "Professional indemnity" is the standard NZ and Australian market term; "professional liability" is the US equivalent. In New Zealand, you will see both terms used — particularly in contracts that specify US-style insurance requirements. They cover the same risks and operate in the same way.',
      },
      {
        q: 'Does professional liability insurance cover claims made against my company or just me personally?',
        a: 'A standard PI policy covers the named insured — which is either you personally (if a sole trader) or your company (if incorporated). It covers both the entity and its principals/directors for claims arising from professional services. The exact scope of personal cover for directors depends on the policy wording.',
      },
      {
        q: 'How long does it take to get professional liability insurance in NZ?',
        a: 'Most professionals can obtain PI insurance within one to two business days. You will need to complete a brief proposal form, and your adviser will present quotes from relevant insurers. Once you select a policy, cover can usually be bound the same day.',
      },
      {
        q: 'Can I get professional liability insurance if I\'m just starting out?',
        a: 'Yes — PI insurance is available to professionals just starting out, and fee income is the primary rating base, so a new practice with modest revenue is a smaller risk to underwrite. Starting cover from day one also sets your retroactive date at the beginning of your practice, which means every piece of work you ever do sits inside the cover. Retrospectively buying that back later is harder and dearer.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80',
    targetKeyword: 'professional liability insurance NZ',
    relatedCoverage: ['professional-indemnity', 'public-liability', 'management-liability', 'run-off-cover'],
    relatedProfessions: ['accountants', 'architects-engineers', 'financial-advisers', 'it-consultants'],
  },
  {
    slug: 'indemnity-insurance-small-business-nz',
    title: 'Indemnity Insurance for NZ Small Business | SME Cover Guide',
    h1: 'Indemnity Insurance for NZ Small Businesses',
    metaTitle: 'Indemnity Insurance for NZ Small Business',
    metaDescription: 'Indemnity insurance for NZ small businesses: professional indemnity, public liability and management liability explained, and how to pick the right mix.',
    excerpt: 'NZ small businesses need indemnity insurance to protect against client claims, employment disputes, and regulatory breaches. Here\'s what cover your SME needs and what it costs.',
    heroContent: 'New Zealand\'s small businesses — sole traders, partnerships, and companies with 1–20 staff — face professional liability, public liability, and management liability risks every day. The right combination of indemnity insurance covers protects your business, your directors, and your personal assets from the most common and costly claims SMEs face.',
    bodyContent: `<div class="keyfact">
<p><strong>No policy pays a Health and Safety at Work Act fine, whatever the policy is called.</strong> Section 29 of the Health and Safety at Work Act 2015 makes an insurance arrangement of no effect to the extent that it purports to indemnify a person for a fine or infringement fee under that Act, and section 30 makes it an offence to enter into, provide or take the benefit of one. The statutory liability part of a small business management liability package pays legal defence costs, representation at a regulatory investigation and reparation orders, which are compensatory — it does not pay the fine, and no bundle sold in New Zealand does. We have also removed the table of monthly premiums that used to sit on this page: New Zealand has no public professional indemnity premium dataset, no insurer here publishes rate tables, and every figure in that table was unsourced.</p>
</div>
<h2>Indemnity Insurance for Small Businesses — What It Means</h2>
<p>When small business owners talk about "indemnity insurance," they typically mean one or more of three related but distinct products:</p>
<ul>
<li><strong>Professional indemnity (PI) insurance:</strong> Covers claims from clients alleging your professional advice or services caused them a financial loss</li>
<li><strong>Public liability insurance:</strong> Covers claims from third parties who suffer physical injury or property damage caused by your business activities</li>
<li><strong>Management liability insurance:</strong> Covers claims against directors and officers, employment practices claims from employees, and statutory liability</li>
</ul>
<p>Most small businesses providing professional services need at least the first two. Small businesses with employees and directors typically need all three. This guide explains each component and how to think about what your specific business needs.</p>

<h2>Professional Indemnity Insurance for SMEs</h2>
<p>Professional indemnity insurance is relevant for any small business that provides professional advice, expertise, or specialist services. This includes professional services firms, consulting businesses, IT companies, marketing agencies, engineering practices, accounting firms, and many other advisory businesses.</p>
<p>For SMEs, PI claims are typically the most financially dangerous type of professional claim because:</p>
<ul>
<li>They arise from your core business activity — you cannot avoid them by changing your operational approach</li>
<li>They can be made years after the work was done (claims-made basis)</li>
<li>Defending one, even successfully, consumes legal fees that bear no relationship to the fee you earned on the job</li>
<li>A single large claim can exceed a small business's entire annual revenue</li>
</ul>
<p>There is no published New Zealand benchmark for what small businesses carry, so we will not offer one. The published minimums that exist are narrow and specific: $200,000 stated by an engineering firm issuing a producer statement, $250,000 for self-employed Professional members of Architectural Designers NZ, $1M for REINZ member agencies under Principle 19 of the Code of Agency Practice, and the greater of $1.2m per practice or $900k per partner as the New Zealand Law Society standard. If none of those apply to you, your limit will come from your client contracts or from your own assessment of the largest loss your work could cause a single client.</p>

<h2>Public Liability Insurance for SMEs</h2>
<p>Public liability insurance protects small businesses from claims arising when a client, customer, or member of the public suffers physical injury or property damage because of your business activities. Common scenarios for small businesses include:</p>
<ul>
<li>A client visits your office or premises and trips, falls, or is injured</li>
<li>You or your staff visit a client's premises and accidentally cause property damage</li>
<li>A product you supplied or installed causes property damage or injury</li>
<li>A contractor working on your behalf causes an accident at a client's site</li>
</ul>
<p>Public liability limits are usually driven by whoever lets you onto their site. Principals, landlords, event organisers and councils commonly set a figure in their access conditions or contracts, and that is the number you need to meet. Where nobody sets one, work from the worst realistic accident on the sites you visit rather than from a default.</p>

<h2>Management Liability Insurance for Small Businesses</h2>
<p>Management liability insurance is relevant for any small business that has directors and employees. It covers three distinct risks that are not covered by PI or public liability:</p>
<p><strong>Directors' and Officers' (D&O) Liability:</strong> Protects directors personally from claims for wrongful acts in managing the company — including shareholder claims, creditor claims in insolvency, and regulatory investigations.</p>
<p><strong>Employment Practices Liability (EPL):</strong> Covers claims from current, former, or prospective employees for employment-related wrongful acts — unfair dismissal, discrimination, sexual harassment, constructive dismissal. NZ's ERA makes employment claims relatively easy for employees to pursue.</p>
<p><strong>Statutory Liability:</strong> Covers the cost of defending unintentional breaches of legislation such as the Fair Trading Act and Employment Relations Act. It does not pay Health and Safety at Work Act fines, and no policy can — sections 29 and 30 of that Act make such an indemnity of no effect and make entering into one an offence.</p>
<p>For most SMEs with 3–20 staff, a management liability policy bundling all three components is generally cheaper than buying the components separately.</p>

<h2>What Does Small Business Indemnity Insurance Cost?</h2>
<p>We used to publish a table of monthly figures here. We removed it, because we could not source a single number in it. New Zealand has no public professional indemnity premium dataset — cover is broker-distributed and individually underwritten, and no New Zealand insurer publishes rate tables. A price list by profession is not market data; it is a guess dressed up as one.</p>
<p>The only official cost guidance published in New Zealand is the Government's, and it is narrow: the Beehive factsheet of 24 November 2025 states that professional indemnity insurance for architects typically costs between $1,500 and $3,000 per person each year, often covered by the firm. It is an estimate produced to support a policy decision, with no methodology attached, and it covers design professionals only. It says nothing about public liability or management liability, for which there is no published New Zealand guidance at all.</p>
<p>What actually determines what your business pays:</p>
<ul>
<li><strong>Fee income or turnover.</strong> The primary rating base for PI, and a significant one for the other covers.</li>
<li><strong>Limit of indemnity.</strong> Often chosen by your clients rather than by you.</li>
<li><strong>What you actually do.</strong> Residential construction, structural and geotechnical work rate materially harder than advisory or creative work.</li>
<li><strong>Headcount,</strong> for the employment practices component of management liability.</li>
<li><strong>Claims and notification history.</strong></li>
<li><strong>Excess.</strong> A higher excess lowers the premium and moves risk back onto your balance sheet.</li>
<li><strong>Retroactive date,</strong> which decides how much of your past work the PI policy will answer for.</li>
<li><strong>Whether defence costs sit inside or outside the limit.</strong></li>
</ul>
<p>All three covers are deductible as business expenses. Bundling them with one insurer often reduces the total, but ask for the components priced separately as well so you can see what you are giving up.</p>

<h2>When Small Businesses Typically Get Their First PI Claim</h2>
<p>There is no published New Zealand claims frequency data for SME professional indemnity, so treat the following as a description of the common patterns rather than as statistics. PI claims against small businesses commonly arise:</p>
<ul>
<li>When a long-term client relationship breaks down and the client retrospectively challenges the quality of advice provided</li>
<li>When a project goes significantly over budget or under-delivers, and the client seeks to recover their losses</li>
<li>When a business change (new ownership, financial difficulties, restructuring) prompts a client to audit historical professional service decisions</li>
<li>When a regulatory investigation reveals an error that was previously undiscovered</li>
</ul>
<p>The time between the professional service being provided and a PI claim being made can be anywhere from a few months to several years. This is why maintaining continuous, uninterrupted PI cover is essential — not just when you think you are at risk.</p>

<h2>Getting Indemnity Insurance for Your Small Business</h2>
<p>Cover4You's licensed advisers work with small businesses across all sectors to structure the right combination of indemnity covers. We can arrange PI, public liability, and management liability as a combined package — or advise on the individual components you need based on your specific business activities, client types, and contractual requirements.</p>
<p>Most small businesses can receive a tailored package quote within one to two business days. Contact us to discuss your requirements or to request a comparison of available options.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.legislation.govt.nz/act/public/2015/0070/latest/DLM5976660.html" rel="nofollow noopener" target="_blank">Health and Safety at Work Act 2015</a> — sections 29 and 30, insurance against fines of no effect and an offence</li>
<li><a href="https://www.legislation.govt.nz/act/public/2000/0024/latest/whole.html" rel="nofollow noopener" target="_blank">Employment Relations Act 2000</a></li>
<li><a href="https://www.legislation.govt.nz/act/public/1986/0121/latest/whole.html" rel="nofollow noopener" target="_blank">Fair Trading Act 1986</a></li>
<li><a href="https://www.engineeringnz.org/engineer-tools/engineering-documents/producer-statements/professional-indemnity-insurance-why-200000/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Professional indemnity insurance: why $200,000?</a></li>
<li><a href="https://adnz.org.nz/professional" rel="nofollow noopener" target="_blank">ADNZ — Professional membership</a> — minimum $250,000 for self-employed Professional members</li>
<li><a href="https://www.reinz.co.nz/common/Uploaded%20files/REINZ/Website/2024/Codes%20of%20Practice/REINZ%20Code%20of%20Agency%20Practice%20Nov%202024.pdf" rel="nofollow noopener" target="_blank">REINZ — Code of Agency Practice (PDF)</a>, November 2024, Principle 19</li>
<li><a href="https://www.lawsociety.org.nz/" rel="nofollow noopener" target="_blank">New Zealand Law Society</a> — cover standard: the greater of $1.2m per practice or $900k per partner</li>
<li><a href="https://www.beehive.govt.nz/sites/default/files/2025-11/Consumer%20protections%20for%20building%20consent%20system%20reforms%20factsheet.pdf" rel="nofollow noopener" target="_blank">Consumer protections for building consent system reforms — factsheet (PDF)</a>, 24 November 2025, for the $1,500 to $3,000 per person estimate for architects</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal or financial advice. We are an information and referral service, not an insurer and not a law firm; the advisers we refer you to are licensed. Policy wordings differ between underwriters and brands — your schedule and wording govern what is covered, not this page.</p>
</div>`,
    faqs: [
      {
        q: 'Does my small business need both PI and public liability insurance?',
        a: 'For most small businesses providing professional services, yes. PI covers financial loss claims from professional advice errors; public liability covers physical injury or property damage claims. These are distinct risks — PI alone does not protect you if a client is injured at your office, and public liability alone does not protect you from a claim that your professional advice caused a financial loss.',
      },
      {
        q: 'At what size does a business need management liability insurance?',
        a: 'Management liability is relevant from the moment you have a company with directors and employees. Even a small company with 2–3 staff has employment practices liability exposure through the ERA\'s personal grievance process. D&O protection is relevant from the time a director makes decisions that could attract personal liability — which is true from the first day of trading.',
      },
      {
        q: 'Can I get a package combining PI, public liability, and management liability?',
        a: 'Yes — many insurers offer combined package policies for small businesses that bundle PI, public liability, and management liability into a single policy with a single premium and renewal date. Package policies typically offer a cost saving compared to purchasing each cover separately. Ask your adviser to quote both individually and as a package.',
      },
      {
        q: 'My small business has no employees — do I still need management liability?',
        a: 'If you have no employees and no other directors (just yourself as sole director), management liability is less urgent. However, you may still have D&O exposure if you have other shareholders or creditors. Employment practices liability becomes relevant as soon as you hire your first employee. Many advisers recommend adding management liability when you take on staff.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&auto=format&fit=crop&q=80',
    targetKeyword: 'small business indemnity insurance NZ',
    relatedCoverage: ['professional-indemnity', 'public-liability', 'management-liability'],
    relatedProfessions: ['accountants', 'it-consultants', 'consultants', 'financial-advisers'],
  },
  {
    slug: 'pi-insurance-government-contractors-nz',
    title: 'PI Insurance for NZ Government Contractors | Meet Panel Requirements',
    h1: 'PI Insurance for NZ Government Contractors',
    metaTitle: 'PI Insurance for NZ Government Contractors',
    metaDescription: 'NZ government contracts set PI requirements in the individual contract, not by a published standard. How to read an insurance schedule and evidence your cover.',
    excerpt: 'NZ government and council contracts specify PI insurance levels in the individual contract, not by any published government-wide minimum. Whether you are tendering for All-of-Government panels, agency contracts or council work, here is how to work out what you actually need.',
    heroContent: 'NZ central government and local government contracts consistently require professional indemnity insurance as a standard contracting condition. From All-of-Government IT panels to Wellington council advisory contracts, understanding and meeting the PI requirements is essential before you can win or start government work. Our licensed advisers help government contractors get the right cover quickly.',
    bodyContent: `<div class="keyfact">
<p><strong>There is no standard New Zealand government PI limit, and the three-year tail is a run-off obligation.</strong> The Government Model Contract sets no professional indemnity figure at all. Clause 8.1 of the standard terms and conditions for services requires the supplier to hold the insurance specified in Schedule 1 of that particular contract, taken out with a reputable insurer, and to maintain it for the term and for three years after the end date. Two contracts with the same agency in the same year can carry different numbers, so anyone quoting you a government-wide minimum is quoting something they cannot source. Because PI is claims-made, that three-year maintenance clause is in substance a requirement to hold run-off: a policy that lapses on the day the engagement finishes leaves you uninsured and in breach of the contract you have just completed. Your actual exposure runs longer again — six years from the act or omission under section 11 of the Limitation Act 2010, with a further three available on late knowledge under section 14.</p>
</div>
<h2>PI Insurance Requirements for Government Contractors</h2>
<p>New Zealand's central government, Crown entities, and local councils are among the largest purchasers of professional services in the country. Government and council contracts for professional services routinely require professional indemnity insurance, and if you cannot evidence the cover the contract specifies, you will not join the panel or start the work.</p>
<p>What those contracts do not do is share a common figure. This guide explains where the requirement actually comes from, how to read the insurance schedule you will be given, and what to check before you tender.</p>

<h2>There Is No Standard Government PI Limit</h2>
<p>This is the single most useful thing to know, and it is the opposite of what most insurance websites say. The Government Model Contract does not set a professional indemnity figure. Clause 8.1 of the standard terms and conditions for services provides that, if required in Schedule 1, the supplier must have the insurance specified in Schedule 1 — taking it out with a reputable insurer and maintaining it for the term of the contract and for a period of three years after the end date.</p>
<p>Everything specific therefore lives in Schedule 1 of your particular contract: whether PI is required at all, the amount, whether the limit is per claim or in the aggregate, and what other covers sit alongside it. Two contracts with the same agency, signed in the same year, can carry different numbers. Anyone who tells you the government standard is a particular dollar figure is quoting something they cannot source, and if you buy to their figure rather than to your schedule you may still fail the check.</p>
<p>The same is true of All-of-Government panels and of council procurement. Panel membership requires you to evidence the insurance the panel agreement specifies, and being unable to do so will get your application rejected — but the requirement is in the panel documentation, not in a published government-wide table.</p>

<h2>The Three-Year Tail Is the Part People Miss</h2>
<p>The obligation to maintain cover for three years after the end date is easy to skim past and expensive to get wrong. PI is written on a claims-made basis: the policy that responds is the one in force when the claim is made, not the one in force when the work was done. So a policy that lapses on the day the engagement finishes leaves you both uninsured and in breach of the contract you have just completed.</p>
<p>Two practical consequences:</p>
<ul>
<li>If you are winding up a business or leaving contracting, you need run-off cover, not just an unbroken policy while you are trading.</li>
<li>If you switch insurers during or after the contract, the retroactive date on the new policy has to reach back far enough to pick up the government work. Ask for it explicitly.</li>
</ul>
<p>Separately, note that the limitation position is longer than three years. Under section 11 of the Limitation Act 2010 the primary period is six years, running from the act or omission, with a further three years available on late knowledge under section 14. The contract's three-year requirement is a floor, not a considered assessment of your exposure.</p>

<h2>Where the Number Actually Comes From</h2>
<p>Because the model terms leave the amount blank, the limit in your contract has been chosen by someone at the agency, usually with reference to the scale and risk of that engagement. That has a few implications worth planning around:</p>
<ul>
<li><strong>You will not know it until you see the documents.</strong> Ask for the insurance schedule with the tender pack rather than after award.</li>
<li><strong>It can change between rounds.</strong> A panel refresh or a new agency template can lift the limit on work you have been doing for years.</li>
<li><strong>It is occasionally negotiable.</strong> If a limit is disproportionate to the fee, it is reasonable to ask — particularly for small engagements where the cost of the limit is a material fraction of the contract value.</li>
<li><strong>Higher-risk disciplines attract higher limits.</strong> Engineering and technical services on physical assets are generally asked for more than advisory work, and that pattern is consistent even though the figures are not published.</li>
</ul>

<h2>How to Ensure Your PI Cover Meets Government Contract Requirements</h2>

<h3>Read the Insurance Schedule Carefully</h3>
<p>Government contracts typically include an "Insurance Schedule" or "Insurance Requirements" section that specifies the exact cover types, minimum limits, and any specific policy conditions required. Read this section carefully before tendering — do not assume that standard market PI cover meets all requirements.</p>

<h3>Obtain a Certificate of Currency</h3>
<p>Government agencies require you to provide a certificate of currency (CoC) confirming your PI cover details — including the insured entity name, policy number, cover limit, and policy expiry date. Your insurer or adviser can provide a CoC, typically within one business day of requesting it. Some government contracts specify the format of the CoC required.</p>

<h3>Confirm the Named Insured Matches Your Contracting Entity</h3>
<p>Ensure the entity named on your PI policy matches the legal entity entering into the government contract. If you are contracting through a company, the company should be the named insured. If you are subcontracting through a larger firm, confirm whether their group policy covers your activities or whether you need your own policy.</p>

<h3>Check the Policy Period Covers the Contract Duration</h3>
<p>Some government contracts run for 2–3 years. Your PI policy renews annually. You will need to provide updated certificates of currency at each renewal — ensure you do not let your policy lapse mid-contract, as this could constitute a breach of contract.</p>

<h2>What Does PI Insurance Cost for Government Contractors?</h2>
<p>There is no published New Zealand PI premium data, for government contractors or for anyone else. Cover is broker-distributed and individually underwritten, and no New Zealand insurer publishes rate tables. We are not going to fill that gap with figures we cannot stand behind.</p>
<p>The only official cost guidance published in New Zealand is the Government's own, and it applies to a single group: the Beehive factsheet of 24 November 2025 states that professional indemnity insurance for architects typically costs between $1,500 and $3,000 per person each year, often covered by the firm. It is an estimate published to support a policy decision, with no methodology attached, and it does not extend to IT, advisory, research or communications contractors.</p>
<p>What moves the number on a government engagement:</p>
<ul>
<li><strong>The limit in Schedule 1.</strong> The largest single driver, and one you did not choose.</li>
<li><strong>Fee income.</strong> The primary rating base for most PI.</li>
<li><strong>Discipline and work type.</strong> Engineering and technical services on physical assets rate materially harder than policy or communications work.</li>
<li><strong>The three-year post-contract obligation,</strong> which effectively means pricing continuity rather than a single year.</li>
<li><strong>Retroactive date,</strong> especially if you are switching insurer part-way through a multi-year engagement.</li>
<li><strong>Claims and notification history.</strong></li>
<li><strong>Excess, and whether defence costs sit inside or outside the limit.</strong></li>
</ul>
<p>PI premiums are deductible as a business expense for contractors operating as businesses.</p>

<h2>Getting PI Cover for a Government Contract Quickly</h2>
<p>If you have received a tender award or are approaching a panel application deadline, Cover4You's licensed advisers can typically arrange PI cover within one to two business days. We are familiar with the standard government insurance schedule requirements and can ensure your policy meets the specific conditions of your contract.</p>
<p>If you need a certificate of currency urgently for a tender submission, let your adviser know at the outset — we can prioritise quotes and bind cover quickly to meet your deadline.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li>New Zealand Government Model Contract for services — standard terms and conditions, clause 8.1, and Schedule 1 of the individual contract. Cited as text: we hold no verified URL for the current version, and your own signed schedule governs in any case.</li>
<li><a href="https://www.legislation.govt.nz/act/public/2010/0110/latest/whole.html" rel="nofollow noopener" target="_blank">Limitation Act 2010</a>, sections 11 and 14</li>
<li><a href="https://www.beehive.govt.nz/sites/default/files/2025-11/Consumer%20protections%20for%20building%20consent%20system%20reforms%20factsheet.pdf" rel="nofollow noopener" target="_blank">Consumer protections for building consent system reforms — factsheet (PDF)</a>, 24 November 2025 — the only official New Zealand PI cost estimate, and it covers architects and design professionals only</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal or financial advice. We are an information and referral service, not an insurer and not a law firm; the advisers we refer you to are licensed. The insurance schedule attached to your own contract or panel agreement governs — read Schedule 1 and check your policy against it before you tender.</p>
</div>`,
    faqs: [
      {
        q: 'What is the standard PI cover requirement for government contracts?',
        a: 'There is not one. The Government Model Contract deliberately leaves the amount blank: clause 8.1 of the standard terms for services requires the supplier to hold the insurance specified in Schedule 1 of that contract, with a reputable insurer, maintained for the term and for three years after the end date. The figure is chosen by the agency for each engagement, so the only reliable answer is the one in your own Schedule 1. Treat any website that quotes you a government-wide minimum as unsourced.',
      },
      {
        q: 'Can I use my existing PI insurance for a new government contract?',
        a: 'Possibly — if your existing PI cover meets the required limit, covers the relevant professional services, and the named insured matches your contracting entity. Review your current policy against the contract\'s insurance schedule before submitting your tender. If there are gaps, your adviser can arrange endorsements or additional cover.',
      },
      {
        q: 'How quickly can I get PI cover if I\'ve just won a government contract?',
        a: 'Most government contractors can obtain PI insurance within one to two business days. If you have an urgent deadline, notify your adviser immediately and they will prioritise your quote and cover binding. You will need to complete a brief proposal form covering your profession, revenue, and the specific services covered by the contract.',
      },
      {
        q: 'Do subcontractors on government projects need their own PI insurance?',
        a: 'It depends on the contracting structure. If you are a subcontractor under a prime contractor, the prime\'s PI policy may cover your activities — but this should be confirmed in writing before you rely on it. Many government agencies require all subcontractors to hold their own PI insurance. If in doubt, obtain your own policy to ensure you are covered.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&auto=format&fit=crop&q=80',
    targetKeyword: 'PI insurance government contracts NZ',
    relatedCoverage: ['professional-indemnity', 'public-liability'],
    relatedProfessions: ['it-consultants', 'consultants', 'architects-engineers', 'accountants'],
  },
  {
    slug: 'indemnity-value-vs-replacement-value-nz',
    title: 'Indemnity Value vs Replacement Value in NZ',
    h1: 'Indemnity Value vs Replacement Value in New Zealand',
    metaTitle: 'Indemnity Value vs Replacement Value NZ',
    metaDescription: 'Indemnity value pays what an item was worth just before the loss; replacement value pays to replace it. What that means at claim time in New Zealand.',
    excerpt: 'If you have found this page after reading the word “indemnity” on a house, contents, car or jewellery policy, you are in the right place — and this is not insurance we arrange. Here is what indemnity value actually means, how it differs from replacement value, and who to ask next.',
    heroContent: 'Indemnity value and replacement value are two different ways an insurer can settle a claim on your house, contents, car or jewellery. One pays what the item was worth immediately before the loss. The other pays what it costs to replace it. The difference does not show up when you buy the policy — it shows up on the day you claim.',
    bodyContent: `<div class="keyfact">
<p><strong>Indemnity value and professional indemnity have nothing to do with each other.</strong> Indemnity value is a settlement basis for your own property: it pays what the item was worth immediately before the loss, after an allowance for age and wear, rather than what a new one costs today. Replacement value pays to replace it. Which basis applies to your house, contents, car or jewellery is stated on your policy schedule and defined in your policy wording, and a sum insured is a ceiling on the payout rather than a promise to pay it. This is personal insurance and it is not cover we arrange — for a question about your own policy, your insurer or broker is the right place to ask, and the IFSO scheme is the right place to take a dispute.</p>
</div>
<h2>Two different things share the word “indemnity”</h2>
<p>In New Zealand, “indemnity insurance” is searched for by people who want three unrelated things. Some are business owners and professionals looking for <em>professional indemnity</em> — cover for a claim that their advice or services caused someone a financial loss. Some are doctors and health practitioners looking for <em>medical indemnity</em>. And some are homeowners, drivers and jewellery owners who have read the words <em>indemnity value</em> on a policy schedule and want to know what they mean.</p>
<p>This page is for the third group. It has nothing to do with professional indemnity. It is also not a product we arrange — we do not place house, contents, motor or jewellery insurance, and we do not earn anything from you reading this. It is here because a person who arrives looking for one thing and finds only another has been badly served.</p>

<h2>What indemnity value means</h2>
<p>Indemnity value is a settlement basis. It pays what the damaged or lost thing was worth at the moment before the loss happened — not what a new one costs today.</p>
<p>For a building, that means asking what it was worth immediately before the damage: what it would cost to rebuild, less an allowance for the age, wear and remaining useful life of what was actually standing there. That deduction is the reason an indemnity settlement on an older building can land a long way below a fresh rebuild quote.</p>
<p>The Insurance &amp; Financial Services Ombudsman scheme puts the same idea in general terms in its glossary: indemnity value is “the value of the item at the time of the loss”, and the settlement is “designed to put you in the same financial position” you were in before the loss — not a better one.</p>
<p>That last phrase is the whole principle. Indemnity is about restoring your position, not improving it. A twenty-year-old roof settled on an indemnity basis is paid out as a twenty-year-old roof.</p>

<h2>What replacement value means</h2>
<p>Replacement value — you may also see it written as replacement cost, reinstatement, or “new for old” — pays what it costs to replace the damaged item with a new equivalent, without a deduction for age or wear. If your ten-year-old dishwasher is destroyed, a replacement-value settlement buys a new dishwasher of a similar standard rather than paying you what a ten-year-old dishwasher was worth.</p>
<p>Replacement cover generally costs more, because the insurer is promising more. It also usually comes with more conditions attached — most obviously, that you actually replace or rebuild the thing, and often that you do so within a stated period. If you take the cash and do not rebuild, many policies revert to paying the indemnity amount instead. That condition is the one people are most often surprised by.</p>

<h2>Where each one turns up</h2>

<h3>House insurance</h3>
<p>Your house policy schedule will say which basis applies, and it may apply differently to different parts of the claim. Read the schedule and the “how we settle your claim” section of the wording together — the schedule tells you the sum insured, and the wording tells you what the insurer will do with it. Some policies pay replacement cost if you rebuild and indemnity value if you do not. Some elements of a property, such as retaining walls, driveways, fences and paths, are commonly treated differently from the house itself, so check those separately rather than assuming.</p>

<h3>Contents insurance</h3>
<p>Contents policies frequently blend the two. Household goods may be settled on a replacement basis while certain categories — clothing and footwear are the usual examples — are settled on an indemnity basis. Again, this is stated in the wording, not in the marketing.</p>

<h3>Car insurance</h3>
<p>Motor policies are usually written on one of two bases, and your schedule will say which. An <strong>agreed value</strong> policy sets the payout figure in advance, at the time you take the cover out. A <strong>market value</strong> policy pays what the vehicle was worth immediately before the loss — which is an indemnity settlement by another name, and which falls each year as the car ages. If you have a loan secured against the vehicle, the difference between the two bases is the difference between clearing the loan and not.</p>

<h3>Jewellery and specified items</h3>
<p>Jewellery, watches, art and similar items are frequently listed separately on a schedule with their own value. Whether that figure is an agreed amount or a ceiling on an indemnity settlement is the question to ask, because valuations move. A ring valued eight years ago may cost considerably more to remake now, and a stale valuation on the schedule can leave a gap that only appears at claim time.</p>

<h2>Why it matters, and when</h2>
<p>The practical consequences of the difference are all deferred. Nothing goes wrong when you buy the policy. It goes wrong later:</p>
<ul>
<li><strong>At claim time.</strong> An indemnity settlement on an older item may not be enough to buy a comparable replacement, because you are being paid the depreciated value, not the shelf price.</li>
<li><strong>When a lender is involved.</strong> Mortgage and finance agreements often specify a level or basis of cover. An indemnity-basis policy may not meet a condition your lender assumed was met.</li>
<li><strong>When you do not rebuild.</strong> Replacement cover that is conditional on reinstatement can drop back to indemnity value if you decide to sell the site or take cash instead.</li>
<li><strong>After a valuation goes stale.</strong> Sums insured and specified item values do not update themselves.</li>
</ul>

<h2>How to find out which basis your policy uses</h2>
<p>You do not need an adviser to answer this. You need two documents:</p>
<ul>
<li><strong>Your policy schedule</strong> — the personalised page listing what is insured, the sums insured, the excesses, and often the settlement basis for each item.</li>
<li><strong>Your policy wording</strong> — the booklet or PDF that defines the terms used on the schedule. Search it for “indemnity value”, “replacement”, “reinstatement”, “market value” and “agreed value”.</li>
</ul>
<p>If the two do not obviously agree, or the wording is ambiguous, ask the insurer or broker who arranged the policy to confirm in writing which basis applies to which item. A written answer is worth having, and it costs nothing to ask.</p>

<h2>Who to ask — and it is not us</h2>
<p>We refer enquiries about professional indemnity and related business liability cover to licensed advisers. We do not arrange house, contents, motor or jewellery insurance, so we are not the right people to answer a question about your own policy schedule, and we would rather say so than take your enquiry and pass it somewhere unhelpful. Two genuinely useful places to go instead:</p>
<ul>
<li><strong>Your own insurer or broker.</strong> They hold your wording and your schedule. They are obliged to explain what your policy actually says, and they are the only people who can confirm it for your specific cover.</li>
<li><strong>The Insurance &amp; Financial Services Ombudsman (IFSO) scheme.</strong> An independent dispute resolution scheme, free to consumers, with a public glossary of insurance terms and case notes showing how disputes about settlement have been decided. If you are already in disagreement with an insurer about how a claim has been settled, this is the route.</li>
</ul>

<h2>If you actually came looking for professional indemnity</h2>
<p>If the word “indemnity” brought you here from a contract, a tender document or a professional body’s membership requirements, you are almost certainly after professional indemnity insurance instead — a completely separate class of cover that responds when a client alleges your professional advice or services caused them a financial loss. The two share a word and nothing else. Professional indemnity is written on a claims-made basis, is bought by businesses and practitioners rather than households, and is where we can help.</p>
<p>There is a third sense again: medical indemnity for doctors and health practitioners, which in New Zealand is bought directly or through a mutual rather than through a broker. If that is what you need, we explain how it works and point you to the right place, but we cannot arrange it.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li>Insurance &amp; Financial Services Ombudsman scheme — glossary of insurance terms and published case notes on claim settlement. Cited as text: we hold no verified URL for the current page, and the scheme is free to consumers and independent of any insurer.</li>
<li>Your own policy schedule and policy wording. These are the only documents that determine which settlement basis applies to your cover, and they govern in place of any web page, including this one.</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal or financial advice. We are an information and referral service, not an insurer and not a law firm. We do not arrange house, contents, motor or jewellery insurance and cannot review or quote on a personal policy — your own insurer or broker, or the IFSO scheme, is the right place for that.</p>
</div>`,
    faqs: [
      {
        q: 'Is indemnity value the same as market value?',
        a: 'They are close relatives rather than identical twins. Both look at what something was worth immediately before the loss rather than what a new one costs. “Market value” is the term you will usually see on a motor policy; “indemnity value” is the term you will usually see on house and contents policies, where it works out as something close to the depreciated replacement cost. Which term applies to you is written on your schedule, not decided by which word sounds more generous.',
      },
      {
        q: 'Is replacement value always better than indemnity value?',
        a: 'It pays more, but it is not automatically the right choice. Replacement cover costs more and usually carries conditions — most importantly that you actually rebuild or replace, sometimes within a set period. For an older item you intend to dispose of anyway, or a building you would not reinstate on the same site, the extra premium may buy you very little. The question to ask is what you would genuinely do after a loss, then match the settlement basis to that.',
      },
      {
        q: 'How do I tell which one my house policy uses?',
        a: 'Read the policy schedule first — it lists the sums insured and often names the settlement basis for each section. Then read the claims settlement part of the policy wording, which defines what those words mean. If the two are not clearly consistent, ask your insurer or broker to confirm in writing which basis applies to the house, and separately to items like fences, driveways, retaining walls and paths, which are often treated differently.',
      },
      {
        q: 'Does indemnity value mean I get less than my sum insured?',
        a: 'Usually, yes — for an item that has aged. A sum insured is a ceiling on what the insurer will pay, not a promise to pay that amount. On an indemnity basis the insurer works out what the damaged item was worth just before the loss and pays that, up to the sum insured. On a replacement basis it works out what it costs to replace, again up to the sum insured. Either way the sum insured is the cap, not the payout.',
      },
      {
        q: 'Can I switch my policy from indemnity value to replacement value?',
        a: 'That is a question for the insurer or broker who arranged the policy, not for us. Insurers commonly offer both bases on the same product, and moving between them is usually a matter of a premium change and possibly a fresh assessment of the property or item. Older buildings and older vehicles are the cases where an insurer is most likely to want to keep the cover on an indemnity basis.',
      },
      {
        q: 'Where can I get independent information about this in New Zealand?',
        a: 'The Insurance & Financial Services Ombudsman scheme maintains a public glossary of insurance terms and handles disputes between consumers and insurers, including disputes about how a claim has been settled. It is free to consumers and independent of any insurer. For a question about your own cover, your insurer or broker holds the actual wording. Either is a better source for a personal-lines question than a broker page, including this one.',
      },
      {
        q: 'Does this page mean you can review my house insurance?',
        a: 'No. We deal with professional indemnity and related business liability insurance. We do not deal with house, contents, motor or jewellery cover, and we cannot review or quote on a personal policy. If you have arrived here with a personal insurance question, your own insurer or broker, or the IFSO scheme, are the right places to take it.',
      },
      {
        q: 'Is professional indemnity insurance settled on an indemnity value basis?',
        a: 'No — the words look similar but describe different mechanisms. Professional indemnity is liability insurance: it responds to a claim made against you by a third party, up to a limit of indemnity, and it is written on a claims-made basis. Indemnity value is a property settlement basis governing how much an insurer pays for your own damaged or lost property. Sharing the word “indemnity” is a coincidence of legal vocabulary, not a shared product design.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80',
    targetKeyword: 'indemnity value vs replacement value NZ',
    relatedCoverage: ['professional-indemnity'],
    relatedProfessions: [],
  },
  {
    slug: 'medical-indemnity-insurance-nz',
    title: 'Medical Indemnity Insurance in New Zealand',
    h1: 'Medical Indemnity Insurance in New Zealand',
    metaTitle: 'Medical Indemnity Insurance NZ',
    metaDescription: 'What medical indemnity covers for NZ doctors, how ACC changes the picture, and why it is bought direct or through a mutual rather than through a broker.',
    excerpt: 'Medical indemnity is the cover doctors and health practitioners hold for complaints, investigations and disciplinary proceedings arising from clinical practice. In New Zealand it is bought directly from a provider or through a mutual — it is not broker-placed, and we cannot arrange it. Here is how it works and what to look for.',
    heroContent: 'Medical indemnity is not professional indemnity with a stethoscope. It is a different market, sold through different channels, shaped by a New Zealand accident compensation system that has no equivalent in most of the countries whose medico-legal advice you will find online. This page explains the difference honestly, including the part where we tell you we cannot sell it to you.',
    bodyContent: `<div class="keyfact">
<p><strong>Medical indemnity is not professional indemnity, and we cannot arrange it.</strong> In New Zealand it is bought directly from a provider or through membership of a mutual. There is no broker in the middle, and no enquiry through this site will get you a better outcome than approaching the provider yourself. It also answers a different exposure: because ACC largely displaces personal-injury damages claims, what a New Zealand practitioner realistically faces is investigative and disciplinary — a Health and Disability Commissioner complaint, a coronial inquiry, a competence review or a disciplinary proceeding — so the cover is built around representation, medico-legal advice and defence costs rather than damages. What a broker can arrange is the business around the clinical work: professional indemnity for non-clinical advisory work, public liability, statutory liability, management liability and employers’ liability.</p>
</div>
<h2>What medical indemnity insurance is</h2>
<p>Medical indemnity is the cover doctors and other health practitioners hold in connection with their clinical practice. Its central purpose is not usually to pay compensation to a patient. It is to pay for representation, advice and defence costs when a practitioner’s clinical care is examined by somebody with the power to affect their career.</p>
<p>That framing surprises people who have read overseas material. In the United States, the United Kingdom or Australia, medical indemnity is dominated by claims for damages arising from patient injury. In New Zealand, damages claims of that kind are largely displaced, and the exposure that remains is investigative and disciplinary. The cover follows the exposure.</p>

<h2>How it differs from professional indemnity</h2>
<p>Professional indemnity insurance responds when a client alleges that your professional advice or services caused them a <em>financial</em> loss. It is bought by accountants, engineers, consultants, IT contractors, architects and similar professionals, it is written on a claims-made basis, and it is placed through insurance brokers in a competitive open market.</p>
<p>Medical indemnity overlaps in principle and differs in almost every practical respect:</p>
<ul>
<li><strong>The trigger is different.</strong> The event that brings the cover into play is typically a complaint, a notification, an investigation or a summons — not a letter of demand for money.</li>
<li><strong>The remedy is different.</strong> Much of the value is legal representation and medico-legal advice, often available from the first phone call, before anything has formally been alleged.</li>
<li><strong>The structure can be different.</strong> Some medical indemnity is a contract of insurance with defined entitlements. Some is provided on a discretionary basis by a mutual, where the benefit is decided by the organisation rather than owed as of right. These are genuinely different legal products and the difference is worth understanding before you join one.</li>
<li><strong>The distribution is different.</strong> It is bought direct from the provider or through membership of a mutual. There is no broker in the middle.</li>
</ul>

<h2>What ACC changes</h2>
<p>New Zealand’s accident compensation scheme is the single biggest reason overseas medico-legal writing does not transfer here. Patients who suffer a treatment injury are directed into ACC for cover rather than into court to sue a practitioner for damages. The result is that the large personal-injury damages awards that drive medical indemnity pricing in other countries are, for the most part, simply absent from the New Zealand picture.</p>
<p>What that does <em>not</em> mean is that a New Zealand doctor has no exposure. It shifts the exposure rather than removing it. An ACC treatment injury claim can itself prompt scrutiny of the care given. Complaints, investigations and disciplinary processes continue to run alongside the compensation scheme, and those are the proceedings that consume a practitioner’s time, money and reputation. This is general context rather than legal advice about your situation — ACC and your indemnity provider are the right sources for the current position.</p>

<h2>What the cover typically responds to</h2>
<p>Read any New Zealand medical indemnity product against this list, because these are the proceedings a New Zealand practitioner is realistically going to face:</p>
<ul>
<li><strong>Health and Disability Commissioner (HDC) investigations.</strong> A patient complaint to the HDC can lead to an investigation, a formal opinion, and findings about whether the Code of Health and Disability Services Consumers’ Rights was breached. Responding properly takes legal and medico-legal help.</li>
<li><strong>Coronial inquiries.</strong> Where a death is referred to the coroner, a practitioner involved in the care may be asked for evidence, may be a witness, and may be criticised in findings.</li>
<li><strong>Disciplinary proceedings.</strong> Registered health practitioners are regulated under the Health Practitioners Competence Assurance Act 2003 through their responsible authority. Competence reviews and disciplinary processes can put registration and the right to practise at stake.</li>
<li><strong>Employment and credentialling consequences</strong> that follow from any of the above.</li>
<li><strong>Medico-legal advice</strong> at the point where something has gone wrong but nothing formal has started — often the most valuable part of the arrangement, and the part that is hardest to compare on a schedule.</li>
</ul>

<h2>How it is bought in New Zealand — and why not through us</h2>
<p>This is the commercially inconvenient part of the page, and it is the reason the page exists.</p>
<p><strong>We cannot arrange medical indemnity.</strong> It is not broker-placed cover in New Zealand. It is bought directly from a provider or through membership of a mutual, and no amount of enquiry through this site will get you a better outcome than going to the provider yourself. If a broker tells you otherwise about this class, ask them to name the insurer and the placement route before you go further.</p>
<p>Two anchors for the shape of the market, from the organisations themselves rather than from insurance marketing:</p>
<ul>
<li>The New Zealand Resident Doctors’ Association states that there are <strong>two providers</strong> of indemnity cover for resident medical officers. If you are an RMO, that is a small and well-defined field to compare — not an open market with dozens of quotes in it.</li>
<li><strong>New Zealand Medical Indemnity Insurance (NZMII)</strong> is a New Zealand-owned insurer that insures doctors directly. Direct means direct: the relationship is between the doctor and the insurer.</li>
</ul>
<p>Beyond that, the honest advice is the boring advice. Ask your college, your union or your employer who their members actually use, and go to those organisations directly. A registrar, a GP in private practice and a locum surgeon do not necessarily belong in the same arrangement.</p>

<h2>What to look for when you compare</h2>
<p>Even in a small field there are real differences. Questions worth putting in writing to any provider:</p>
<ul>
<li><strong>Is this insurance or discretionary cover?</strong> If it is discretionary, who decides, on what criteria, and is there any appeal?</li>
<li><strong>What exactly triggers assistance?</strong> A written claim only, or a notification, an HDC complaint, a coronial referral, or a request to attend an interview?</li>
<li><strong>Are defence and representation costs inside the limit or in addition to it?</strong> Costs eroding the limit is a materially worse deal in a class where costs are the main event.</li>
<li><strong>What is the retroactive date, and what happens to past work?</strong> If cover is claims-made, an incident from three years ago is only relevant if the cover reaches back that far.</li>
<li><strong>What happens when you stop practising, go overseas, or retire?</strong> Complaints and coronial matters can surface long after the consultation. Ask specifically what continuing protection exists.</li>
<li><strong>What scope of practice is covered?</strong> Cover written around your employed hospital role may say nothing useful about private rooms, telehealth, cosmetic work, expert witness work, or work performed in another country.</li>
<li><strong>Is your employer’s indemnity a substitute?</strong> Usually not, and it is worth getting the answer in writing rather than assuming. The New Zealand Nurses Organisation puts the same warning to its own members in blunt terms: an institution may tell you that it indemnifies you, “but that is not quite the case”.</li>
</ul>

<h2>Where a broker legitimately does help: the non-clinical side</h2>
<p>A clinician’s working life is not all clinical. The moment you run a practice, employ people, occupy premises, sit on a board, give advice outside the consulting room or sell something, you have generated exposures that a medical indemnity arrangement was never designed to answer. These are conventional commercial covers, they are broker-placed, and this is where an adviser adds something rather than getting in the way:</p>
<ul>
<li><strong>Professional indemnity</strong> for consultancy, advisory, training, medico-legal report writing or research work that sits outside patient care.</li>
<li><strong>Public liability</strong> for injury or property damage to third parties at your premises.</li>
<li><strong>Statutory liability</strong> for defence costs and representation arising from unintentional breaches of New Zealand statutes in the running of the business. Health and Safety at Work Act fines cannot be insured — sections 29 and 30 of that Act make such an indemnity of no effect.</li>
<li><strong>Management liability and directors’ and officers’ cover</strong> if you are a director or trustee of a practice company, a PHO entity or a charitable board.</li>
<li><strong>Employers’ liability</strong> for employee injury claims outside the ACC bar.</li>
</ul>
<p>The clean division to hold in your head: clinical care sits with your medical indemnity provider; the business around it sits with a broker.</p>

<h2>Other health practitioners are not in the same position</h2>
<p>“Medical indemnity” is often used loosely to mean indemnity for anybody in health. The arrangements differ sharply by profession, and two published examples show how much:</p>
<ul>
<li><strong>Nurses.</strong> The New Zealand Nurses Organisation includes indemnity insurance in membership — $500,000 per claim, a maximum of $1,000,000 per year and up to $200,000 for criminal defence costs, on NZNO’s own figures in its membership FAQs, last updated March 2026. It applies where you are, or were, a financial or student member working in a health care occupation covered by NZNO. It is included in membership and is not separately purchasable, so nobody can sell it to you or replace it.</li>
<li><strong>Psychologists.</strong> The New Zealand Psychologists Board does not require indemnity insurance for registration or for an annual practising certificate. The New Zealand Psychological Society instead offers members a scheme placed through Aon New Zealand, purchased separately from membership.</li>
</ul>
<p>If your profession gets its indemnity through a body rather than the open market, our page on <strong>professional indemnity through your professional body</strong> sets out who does what, what those arrangements include, and the specific gaps — private practice, non-clinical work, higher limits and run-off — where separate cover is worth looking at.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.hdc.org.nz/making-a-complaint/what-happens-to-my-complaint/" rel="nofollow noopener" target="_blank">Health and Disability Commissioner — What happens to my complaint</a></li>
<li><a href="https://www.legislation.govt.nz/act/public/2015/0070/latest/DLM5976660.html" rel="nofollow noopener" target="_blank">Health and Safety at Work Act 2015</a> — sections 29 and 30, fines cannot be insured</li>
<li>Health Practitioners Competence Assurance Act 2003. Cited as text: we did not verify the statute text for this page, and we make no claim either way about whether it requires indemnity cover.</li>
<li>New Zealand Resident Doctors’ Association — statement that there are two providers of indemnity cover for resident medical officers. Cited as text; we hold no verified URL.</li>
<li>New Zealand Medical Indemnity Insurance (NZMII) — undated fact sheet referencing the 2025 HDC report. Cited as text; we hold no verified URL. Its published prices are group scheme medical indemnity, not general professional indemnity, and not cover we can arrange.</li>
<li>New Zealand Nurses Organisation — membership FAQs, last updated March 2026, for the included indemnity limits and the warning about relying on employer indemnity. Cited as text; we hold no verified URL.</li>
<li>New Zealand Psychologists Board and New Zealand Psychological Society. Cited as text; we hold no verified URLs. The Board requires no indemnity insurance for registration or an annual practising certificate; the Society offers members a scheme placed through Aon New Zealand, purchased separately.</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal, financial or clinical advice. We are an information and referral service, not an insurer and not a law firm; the advisers we refer you to are licensed. We cannot arrange medical indemnity or professional body member schemes, and we say so rather than taking the enquiry — confirm the clinical side with your provider, your college or your union, and any figures with the body that published them.</p>
</div>`,
    faqs: [
      {
        q: 'Can you arrange medical indemnity insurance for me?',
        a: 'No. Medical indemnity in New Zealand is bought directly from a provider or through membership of a mutual, not through an insurance broker. We say so plainly rather than taking the enquiry. What we can help with is the non-clinical side of a practice — professional indemnity for advisory or consultancy work, public liability, statutory liability, management liability and employers’ liability — which is conventional broker-placed business insurance.',
      },
      {
        q: 'How many providers of medical indemnity are there in New Zealand?',
        a: 'It depends who you are. For resident medical officers, the New Zealand Resident Doctors’ Association states that there are two providers of indemnity cover. New Zealand Medical Indemnity Insurance (NZMII) is a New Zealand-owned insurer that insures doctors directly. The best way to establish your own options is to ask your college, your union or your employer who their members use, and approach those organisations yourself.',
      },
      {
        q: 'Does ACC mean New Zealand doctors do not need indemnity cover?',
        a: 'No. ACC substantially displaces personal-injury damages claims, which is why New Zealand looks different from the United States, the United Kingdom or Australia. But it does nothing about complaints to the Health and Disability Commissioner, coronial inquiries, competence reviews or disciplinary proceedings under the Health Practitioners Competence Assurance Act 2003. Those are the exposures New Zealand medical indemnity is largely built around, and they are expensive to face without representation.',
      },
      {
        q: 'What is the difference between insurance and discretionary mutual cover?',
        a: 'With a contract of insurance, your entitlement to be indemnified is defined by the policy and enforceable under it. With discretionary cover from a mutual, assistance is decided by the organisation according to its own rules rather than owed to you as of right. Both models exist in medical indemnity. Neither is automatically better, but you should know which one you are joining and ask how discretion is exercised in practice.',
      },
      {
        q: 'Does my employer’s indemnity cover me?',
        a: 'Do not assume so. Employer indemnity is generally framed around your work for that employer, in that role, during that employment — and it is the employer’s arrangement, not yours, so its scope and its continuation are outside your control. The New Zealand Nurses Organisation warns its own members that an institution may tell you it indemnifies you, “but that is not quite the case”. Ask for the position in writing, and ask specifically what happens if your interests and your employer’s diverge.',
      },
      {
        q: 'What happens to my cover when I stop practising or move overseas?',
        a: 'This is the question people ask too late. A complaint, a coronial referral or a disciplinary matter can surface years after the care was given. Ask any provider directly what continuing protection applies after you cease membership or a policy ends — how far back cover reaches, and how far forward it runs once you stop paying. Do not rely on a general assumption; get the answer specific to the arrangement you are in.',
      },
      {
        q: 'I do medico-legal reports and expert witness work. Is that covered?',
        a: 'Ask your provider, because it may sit outside the definition of clinical practice their arrangement is built around. Where it does, this is one of the genuine cases for a separate professional indemnity policy covering advisory work — which is broker-placed, open-market cover and something an adviser can arrange. The same applies to training, consultancy, research and product or device advice.',
      },
      {
        q: 'I am setting up private rooms. What do I need beyond medical indemnity?',
        a: 'The business itself generates exposures the clinical arrangement was never meant to answer. Public liability for injury or damage to third parties on your premises, statutory liability for defence costs arising from breaches of New Zealand statutes, employers’ liability, management liability if there is a company or trust with directors, and professional indemnity for any non-clinical advisory work. Confirm the clinical side with your medical indemnity provider first, then get the business side arranged separately.',
      },
      {
        q: 'Is medical indemnity the same as professional indemnity?',
        a: 'No, although the names invite the confusion. Professional indemnity responds to a third-party allegation that your professional advice or services caused a financial loss, and it is placed by brokers in an open market. Medical indemnity is built around complaints, investigations and disciplinary proceedings connected with clinical care, and in New Zealand it is bought direct or through a mutual. A practitioner with both clinical and commercial activities may well need both, from two different places.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1200&auto=format&fit=crop&q=80',
    targetKeyword: 'medical indemnity insurance NZ',
    relatedCoverage: ['professional-indemnity', 'public-liability', 'statutory-liability'],
    relatedProfessions: ['healthcare'],
  },
  {
    slug: 'professional-indemnity-through-your-professional-body-nz',
    title: 'PI Insurance Through Your Professional Body',
    h1: 'Professional Indemnity Through Your Professional Body',
    metaTitle: 'PI Through Your Professional Body NZ',
    metaDescription: 'Nurses, physios, psychologists, lawyers, engineers and accountants can get PI through their professional body. What it includes, and what it may not.',
    excerpt: 'For a lot of New Zealand professionals, the honest answer to “where do I buy professional indemnity” is: you may already have it, or your body may place it more cheaply than the open market will. Here is who does what, when the scheme is the better answer, and the specific gaps worth checking.',
    heroContent: 'Many New Zealand professions do not buy professional indemnity on the open market at all. Some get it included in membership. Others buy it through a scheme their body has negotiated with a named provider. None of those schemes is compulsory, and none of them covers everything. This page sets out what each arrangement is, so you can work out whether you need anything else.',
    bodyContent: `<div class="keyfact">
<p><strong>A professional body’s insurance rule is not a law, and most New Zealand bodies have no rule at all.</strong> Engineering New Zealand requires no professional indemnity for membership or for Chartered Professional Engineer registration. The New Zealand Psychologists Board requires none for registration or an annual practising certificate. Professional indemnity is not compulsory for New Zealand lawyers — what is compulsory is disclosing your arrangements to clients. Where a body does impose a requirement it binds its own members and nobody else: CA ANZ requires current and appropriate cover from Certificate of Public Practice holders, and publishes no New Zealand dollar minimum, so the tiered figures you may have seen are Australian. Every scheme described here is non-exclusive, so a member can buy in the open market instead — except where cover is included in membership, as it is with NZNO, in which case no broker can arrange, quote on or replace it.</p>
</div>
<h2>Two arrangements that get confused with each other</h2>
<p>When a professional body is involved in indemnity, it is doing one of two quite different things.</p>
<p><strong>Included in membership.</strong> The body carries cover that extends to members. You do not buy it, you cannot shop for it, and nobody can replace it while you remain a member.</p>
<p><strong>Placed through a scheme.</strong> The body has appointed a broker or provider and negotiated terms, but you buy the policy yourself. It is a member benefit, not an entitlement — and these schemes are non-exclusive, so members may buy elsewhere. Where cover is included, there is nothing for a broker to do except discuss what sits <em>on top</em>.</p>

<h2>Who arranges what</h2>

<h3>New Zealand Nurses Organisation (NZNO) — included in membership</h3>
<p>NZNO’s indemnity insurance is part of membership. On NZNO’s own published figures it provides <strong>$500,000 per claim</strong>, a maximum of <strong>$1,000,000 per year</strong>, and a maximum of <strong>$200,000 for criminal defence costs</strong>. The stated conditions are that you are, or were, a financial or student member working in a health care occupation covered by NZNO. Source: NZNO membership FAQs, last updated March 2026 — check the current figures with NZNO, because a body’s cover can change without any law changing.</p>
<p>This cover is <strong>included and is not separately purchasable</strong>: no broker can arrange, quote on or replace it. NZNO also warns members against relying on employer indemnity instead — “Your institution may tell you that they indemnify you but that is not quite the case.”</p>

<h3>ANZASW, College of Nurses Aotearoa and the New Zealand College of Midwives</h3>
<p>Each of these three bodies makes indemnity arrangements available to its members. We have deliberately not published limits or terms for them, because we have not verified those against the body’s own current material — a figure we cannot source is worse than no figure. Ask the body what is included, what must be bought separately, and what the limit is. If you belong to more than one body, establish which arrangement responds first.</p>

<h3>Physiotherapy New Zealand — scheme placed through BMS Group</h3>
<p>Physiotherapy New Zealand offers members an indemnity scheme placed through <strong>BMS Group</strong>. It is a member benefit, not a regulatory requirement, and not exclusive — a physiotherapist can insure elsewhere.</p>

<h3>New Zealand Psychological Society — scheme placed through Aon New Zealand</h3>
<p>The <strong>New Zealand Psychologists Board does not require indemnity insurance</strong> for registration or for an annual practising certificate; registration turns on accredited qualifications, references, a Police criminal records check and the “fit and proper person” standard under the Health Practitioners Competence Assurance Act 2003. The Society has instead partnered with Aon New Zealand to offer members an indemnity package, <strong>purchased separately, not included in membership</strong>.</p>
<p>Published features include retroactive cover “to the date on which you became a member of the Society”, legal expenses payable in addition to the policy limit of indemnity, and up to $500 of Employee Assistance Programme support after a covered claim. No indemnity limit is published — members are referred to the current Aon application form, so do not accept one quoted second-hand. The Board is the regulator and the Society is voluntary, so a psychologist outside it buys on the open market.</p>

<h3>New Zealand Law Society — LawSure, placed by Gallagher</h3>
<p>PI is <strong>not compulsory</strong> for New Zealand lawyers as at the date of this page — the Law Society calls New Zealand an outlier among comparable legal jurisdictions for that reason. What <em>is</em> compulsory is disclosure: rules 3.4 and 3.4A of the Lawyers and Conveyancers Act (Lawyers: Conduct and Client Care) Rules 2008 require a practice, and a barrister sole, to tell clients in writing about their professional indemnity arrangements, and the rule says in terms that “if a lawyer or a practice is not indemnified, this must be disclosed in writing to the client”.</p>
<p>The rule sets no figure. It defers to minimum standards specified by the Law Society from time to time: effective <strong>6 April 2021</strong>, the indemnity limit is the greater of <strong>$1.2 million per practice</strong> or <strong>$900,000 per partner, shareholder or director lawyer</strong>, with the excess not exceeding the greater of 1% of the limit or <strong>$20,000</strong>. That is the threshold determining what you must <em>say</em> to clients — whether your cover meets it, falls below it, or does not exist — not a level you must hold.</p>
<p><strong>LawSure</strong> is the Law Society’s non-exclusive scheme, announced 4 September 2025, placed by Gallagher Insurance (AJG) and underwritten by Agile Insurance Group, restricted to members meeting the membership thresholds. Lawyers remain free to buy elsewhere.</p>
<p>One live caveat: on 26 March 2026 the Law Society opened a consultation on making PI compulsory for lawyers practising independently — approximately <strong>35% of the profession</strong> on its own estimate — and on raising the minimum standards. It closed <strong>5 May 2026</strong>, no minimum figure was proposed, and as at 7 September 2026 no outcome had been published. Check the Law Society’s consultation page for the current position.</p>

<h3>Engineering New Zealand — CEAS scheme</h3>
<p>Neither Engineering New Zealand membership nor Chartered Professional Engineer registration requires professional indemnity insurance. CPEng turns on an accredited qualification or equivalent knowledge, a competence assessment, the Code of Ethical Conduct, and reassessment at least every six years. Engineering New Zealand presents insurance as a benefit: members “enjoy special offers for Professional Indemnity Insurance, Statutory and Public Liability cover”, offered through the <strong>Consulting Engineering Advancement Society (CEAS)</strong>, non-exclusively.</p>
<p>The <strong>$200,000</strong> figure attached to engineers is widely misreported. It relates to <strong>producer statements</strong>, not membership or registration: Engineering New Zealand recommends “retaining a statement of $200,000 PI insurance minimum on our producer statements”, says this value “is standard and unrelated to construction costs”, and warns that “the consultant’s liability to its client is not limited by the amount stated on the producer statement”. It is a disclosure figure on a form — not a cap on liability, and not a required level of cover.</p>

<h3>Chartered Accountants Australia and New Zealand — Pulse Insure in New Zealand</h3>
<p>CA ANZ does require complying professional indemnity insurance from Certificate of Public Practice holders. The New Zealand obligation is qualitative — to “have current and appropriate professional indemnity insurance in place”, with the level depending on the size of the business and the nature of services — and New Zealand members are directed to <strong>Part IV of the NZICA Rules</strong>. No published New Zealand dollar minimum was found.</p>
<p>Two things are frequently got wrong. The tiered minimum limits and the “CR 2A” citation you may have seen are <strong>Australian</strong>, sitting inside the Professional Standards Scheme, which CA ANZ states covers <strong>Australian resident members</strong>; New Zealand has no equivalent liability-capping statute, so a New Zealand chartered accountant gets no cap and the PI limit is the practical ceiling. And the member-benefits partner in New Zealand is <strong>Pulse Insure</strong> — Aon is the <em>Australian</em> partner, and the two are routinely confused online. Members are obliged to use neither.</p>

<h2>When the scheme is the better answer</h2>
<p>None of the schemes above locks a member in — a physiotherapist, psychologist, lawyer, engineer or chartered accountant can buy in the open market instead. But the scheme is often the better answer. It usually wins when:</p>
<ul>
<li><strong>The cover is included in membership.</strong> An NZNO member in an employed nursing role has nothing to buy and no decision to make.</li>
<li><strong>The wording is built for your profession</strong>, argued over by people who understand its actual claims. A generic market policy may be cheaper and narrower.</li>
<li><strong>Your practice is small and standard.</strong> Scheme pricing is pooled, which often beats being individually rated.</li>
<li><strong>The scheme carries features the market prices separately</strong> — retroactive cover to the date of membership, or legal expenses payable in addition to the limit.</li>
</ul>

<h2>Where a scheme policy may not reach</h2>
<p>The gaps are consistent across professions, and each is a reason to look further rather than to leave the scheme:</p>
<ul>
<li><strong>Private practice and self-employment.</strong> Cover framed around employed practice may not follow you into your own rooms, company or contracting work.</li>
<li><strong>Non-clinical and non-core activities.</strong> Training, consultancy, expert witness work, research, product advice and governance roles sit outside the activity the scheme was designed around.</li>
<li><strong>The limit.</strong> A per-claim limit that suits employed practice may fall short of what a contract or corporate client requires. Where a body publishes one — NZNO’s $500,000 per claim — test it against your actual contracts.</li>
<li><strong>Run-off.</strong> Professional indemnity is claims-made: it answers claims made while the policy is live. When you retire, sell the practice or let membership lapse, cover generally stops with it, and claims about past work can arrive years later.</li>
<li><strong>Everything that is not PI.</strong> Public liability, statutory liability, employers’ liability and directors’ and officers’ cover are separate classes a PI scheme does not supply.</li>
</ul>

<h2>What to check before you decide</h2>
<ul>
<li>Is the cover included in membership, or purchased separately?</li>
<li>What is the limit — per claim, or in the aggregate for the year?</li>
<li>Are defence costs inside the limit or in addition to it?</li>
<li>Does the retroactive date reach back over all your past work?</li>
<li>Does the scope of practice match what you actually do, occasional work included?</li>
<li>Who is the named insured — you, or your company?</li>
<li>Is run-off available when you stop, at what cost and for how many years?</li>
</ul>
<p>Where the answer is “the scheme covers it”, stay in the scheme. Where it is “not quite”, that gap is the piece worth taking to a licensed adviser.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.engineeringnz.org/join-us/cpeng/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Chartered Professional Engineer</a></li>
<li><a href="https://www.engineeringnz.org/engineer-tools/member-benefits/insurance/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Member benefits: insurance</a> — the CEAS arrangement, offered non-exclusively</li>
<li><a href="https://www.engineeringnz.org/engineer-tools/engineering-documents/producer-statements/professional-indemnity-insurance-why-200000/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Professional indemnity insurance: why $200,000?</a></li>
<li><a href="https://www.legislation.govt.nz/regulation/public/2002/0389/latest/whole.html" rel="nofollow noopener" target="_blank">Chartered Professional Engineers of New Zealand Rules (No 2) 2002</a> — no occurrence of indemnity or insurance</li>
<li><a href="https://www.charteredaccountantsanz.com/member-services/certificate-of-public-practice" rel="nofollow noopener" target="_blank">CA ANZ — Certificate of Public Practice</a></li>
<li><a href="https://www.lawsociety.org.nz/" rel="nofollow noopener" target="_blank">New Zealand Law Society</a> — cover standard effective 6 April 2021: the greater of $1.2m per practice or $900k per partner, shareholder or director lawyer, with the excess not exceeding the greater of 1% of the limit or $20,000</li>
<li><a href="https://www.building.govt.nz/about-building-performance/all-news-and-updates/building-amendment-bill-introduced-to-parliament" rel="nofollow noopener" target="_blank">Building Performance — Building Amendment Bill introduced to Parliament</a>, 2 July 2026</li>
<li>Lawyers and Conveyancers Act (Lawyers: Conduct and Client Care) Rules 2008, rules 3.4 and 3.4A — the written disclosure obligation. Cited as text; we hold no verified URL.</li>
<li>New Zealand Law Society consultation on compulsory professional indemnity insurance for lawyers practising independently, opened 26 March 2026 and closed 5 May 2026, with no outcome published as at 7 September 2026. Cited as text; we hold no verified URL.</li>
<li>New Zealand Nurses Organisation — membership FAQs, last updated March 2026, for the included indemnity limits and conditions. Cited as text; we hold no verified URL.</li>
<li>Physiotherapy New Zealand — member indemnity scheme placed through BMS Group. Cited as text; we hold no verified URL.</li>
<li>New Zealand Psychological Society — member indemnity package placed through Aon New Zealand, and New Zealand Psychologists Board registration requirements. Cited as text; we hold no verified URLs.</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal or financial advice. We are an information and referral service, not an insurer and not a law firm; the advisers we refer you to are licensed. We cannot arrange or replace cover that is included in your membership, and medical indemnity is likewise not broker-placed in New Zealand — check the current terms and limits with the body itself, because a body can change its cover without any law changing.</p>
</div>`,
    faqs: [
      {
        q: 'If my professional body includes indemnity in membership, can you sell me anything?',
        a: 'Not a replacement, no. Where cover is included in membership — as it is with the New Zealand Nurses Organisation — it is not separately purchasable and no broker can arrange or replace it. The only honest commercial conversation is about cover in addition to it: private practice, non-clinical activities, a higher limit than the scheme provides, or other classes such as public and statutory liability. If someone offers to replace your included membership cover, ask them to explain how.',
      },
      {
        q: 'Am I allowed to buy professional indemnity outside my body’s scheme?',
        a: 'Yes. The schemes described on this page are non-exclusive member benefits, not conditions of membership or registration. A physiotherapist, psychologist, lawyer, engineer or chartered accountant is free to insure in the open market. What you should not do is cancel a scheme policy before you have confirmed that the replacement matches it on retroactive date, scope of practice, defence costs treatment and named insured — price is the least important of those.',
      },
      {
        q: 'Do New Zealand lawyers have to hold professional indemnity insurance?',
        a: 'Not as at the date of this page. What is compulsory is disclosure: rules 3.4 and 3.4A of the Lawyers and Conveyancers Act (Lawyers: Conduct and Client Care) Rules 2008 require a practice or barrister sole to tell clients in writing about their PI arrangements, and to disclose in writing if they are not indemnified. The Law Society consulted on making PI compulsory for independently practising lawyers between 26 March and 5 May 2026, and no outcome had been published as at 7 September 2026. Check the Law Society’s consultation page for the current position.',
      },
      {
        q: 'Where does the $1.2 million / $900,000 figure for lawyers come from?',
        a: 'It is the Law Society’s minimum standard, effective 6 April 2021: the greater of $1.2 million per practice or $900,000 per partner, shareholder or director lawyer, with the excess not exceeding the greater of 1% of the indemnity limit or $20,000. It is not a level you must hold. It is the benchmark that determines what you must disclose to clients — whether your cover meets it, falls below it, or does not exist. The rule itself sets no figure, which is why the standard can change without the rule changing.',
      },
      {
        q: 'Does Engineering New Zealand or CPEng require professional indemnity?',
        a: 'No. Neither membership nor Chartered Professional Engineer registration requires it. Engineering New Zealand offers insurance as a member benefit through the Consulting Engineering Advancement Society (CEAS), on a non-exclusive basis. Separately, the Building Amendment Bill would make PI mandatory for design professionals, but that Bill was introduced on 2 July 2026, is at select committee, is not law, and expressly does not extend to builders or Licensed Building Practitioners.',
      },
      {
        q: 'Is the $200,000 figure the minimum PI an engineer needs?',
        a: 'No, and this is one of the most commonly misreported figures in New Zealand professional indemnity. Engineering New Zealand recommends retaining a statement of $200,000 PI insurance minimum on its producer statements, and says that value is standard and unrelated to construction costs. It also warns that the consultant’s liability to its client is not limited by the amount stated on the producer statement. It is a disclosure figure on a form, not a cap on liability and not a required level of cover.',
      },
      {
        q: 'What is CA ANZ’s minimum PI limit for a New Zealand chartered accountant?',
        a: 'No published New Zealand dollar minimum was found. The New Zealand obligation for Certificate of Public Practice holders is qualitative — current and appropriate cover, with the level depending on the size of the business and the nature of the services — and New Zealand members are directed to Part IV of the NZICA Rules. The tiered figures and the CR 2A citation that circulate online are Australian, and sit inside the Professional Standards Scheme, which CA ANZ states covers Australian resident members. Confirm your requirement with CA ANZ directly.',
      },
      {
        q: 'Does the Australian liability cap protect a New Zealand accountant?',
        a: 'No. The CA ANZ Professional Standards Scheme operates under Australian state and territory Professional Standards Legislation, and CA ANZ states that it covers Australian resident members. New Zealand has no equivalent liability-capping statute. The practical consequence is that a New Zealand chartered accountant’s PI limit is the effective ceiling on their exposure, rather than a layer sitting behind a statutory cap — which is an argument for choosing the limit deliberately rather than by default.',
      },
      {
        q: 'My body’s scheme has a per-claim limit. Is that enough?',
        a: 'It depends entirely on what you have contractually promised. A limit that is comfortable for employed practice can be well short of what a corporate client, a government contract or a tender requires. Read your contracts for the insurance clause, compare it against the scheme limit, and if there is a gap, that gap — not the whole policy — is the thing to fix. A licensed adviser can look at whether a higher limit is best obtained inside the scheme, as an excess layer, or on a separate policy.',
      },
      {
        q: 'What happens to my scheme cover if I let my membership lapse?',
        a: 'Generally the cover stops with the membership, and because professional indemnity is claims-made, a claim made after that date about work you did while covered may fall into the gap. This is what run-off cover exists for. Ask your body, before you resign or retire, whether run-off is available, for how many years, and at what cost. It is much harder to arrange after the fact than before.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&auto=format&fit=crop&q=80',
    targetKeyword: 'professional indemnity through professional body NZ',
    relatedCoverage: ['professional-indemnity', 'run-off-cover', 'management-liability'],
    relatedProfessions: ['healthcare', 'architects-engineers', 'accountants', 'consultants'],
  },
  {
    slug: 'pi-insurance-school-property-projects-nz',
    title: 'PI Insurance for School Property Projects NZ',
    h1: 'Professional Indemnity for School Property Projects',
    metaTitle: 'PI Insurance for School Property Projects',
    metaDescription: 'Asked for professional indemnity for a school property project? What to have ready, what a certificate of currency shows, and how claims-made cover works.',
    excerpt: 'The Ministry of Education requires evidence of professional indemnity from contractors and consultants working on school property projects. If a procurement email has just asked you for it, this page explains what is being asked, what a certificate of currency needs to show, and why claims-made cover means the job is not finished when the project is.',
    heroContent: 'School property work is procurement-driven. Somebody in a Ministry of Education process, a school board office or a project manager’s office has asked you to evidence professional indemnity insurance, and there is a deadline attached. This page is written for that moment: what the requirement is, where to confirm the current version of it, and the mechanics of claims-made cover that catch people out after the project ends.',
    bodyContent: `<div class="keyfact">
<p><strong>Mandatory professional indemnity for design professionals is not law, and it is not aimed at builders.</strong> The Building Amendment Bill was introduced to Parliament on 2 July 2026 and is before select committee, with submissions closing at 11.59pm on Sunday 15 November 2026. The requirement covers professionals contributing to building design — the factsheet scope is architecture, design, engineering and certain building surveying services — and states expressly that it will not apply to builders. No minimum sum insured has been proposed: MBIE’s Regulatory Impact Statement of 18 November 2025 says the details of the scheme are yet to be developed and require further consultation. It is expected to take effect in 2028, after a one-year lead-in once the Bill passes, not in 2026. And the $200,000 on an engineer’s producer statement is a recommended disclosure figure on a form — not a required level of cover, not a cap on liability, and not the limit to buy for a school project.</p>
</div>
<h2>Why you have been asked for professional indemnity</h2>
<p>School property is public infrastructure, and like most public procurement it runs on documented risk transfer: the agency specifies what insurance a supplier must hold, and the supplier evidences it before the contract starts and while it runs.</p>
<p>The Ministry of Education requires professional indemnity insurance from contractors and consultants working on school property projects. If you are designing, specifying, certifying, advising or project managing, the requirement will find you — usually as a line in a contract schedule, or a request for a certificate before engagement.</p>
<p>Professional indemnity responds when a client alleges your advice, design or services caused a financial loss. In a school property context that means the classic consultant exposures: a design that does not perform, a wrong specification, a certification issued on inadequate information, advice that leads to abortive work, a cost or programme error the client has to pay for.</p>

<h2>Confirm the current requirement from the Ministry, not from a broker page</h2>
<p>We will not quote you a limit: the requirement is the Ministry’s to state, it can change without announcement, and it varies by contract type and project scale.</p>
<p>Go to the Ministry of Education’s own contractor and consultant insurance guidance on education.govt.nz and read the current version alongside the contract you have been sent. Where the two differ, the contract wins — your obligation is whatever your signed schedule says. Save what you relied on, with the date, because these documents are updated.</p>
<p>Two things to extract before you do anything else: <strong>the required limit of indemnity</strong>, and whether it is per claim or in the aggregate; and <strong>how long you must maintain it</strong> — in particular whether the obligation continues for a stated number of years after practical completion. That second clause is the one that determines whether you can cancel your policy when the job is done.</p>

<h2>What a certificate of currency has to show</h2>
<p>A certificate of currency is a short document from your insurer or broker confirming a policy exists. It is evidence, not cover, and one that does not match the contract is a common reason a tender gets bounced. Check all of these before sending it:</p>
<ul>
<li><strong>The named insured is the entity signing the contract.</strong> If you tender as a limited company and the policy names you personally, or a trading name that is not the legal entity, that is a fail. Trading names should appear as well, not instead.</li>
<li><strong>The class of cover is professional indemnity</strong>, described as such. Public liability does not satisfy a PI clause, however large the limit.</li>
<li><strong>The limit meets or exceeds the requirement</strong>, and the certificate says whether it is any one claim or in the aggregate.</li>
<li><strong>The period of insurance covers the project</strong> and has not expired or been superseded by a renewal you have not evidenced.</li>
<li><strong>The professional activities described match the work you are engaged to do.</strong> A narrow or outdated description invites a question you do not want at claim time.</li>
<li><strong>The insurer is named</strong> — if your cover is issued by an underwriting agency, the agency’s brand and the insurer carrying the risk are not the same thing.</li>
<li><strong>The date of issue is recent.</strong> Certificates more than a few months old are routinely rejected.</li>
</ul>
<p>Ask your broker for the certificate the moment you know a submission is coming, and ask at the same time whether a principal or interested party endorsement is needed — adding one afterwards is slower.</p>

<h2>Claims-made: the mechanic that catches consultants out</h2>
<p>Professional indemnity is written on a <strong>claims-made</strong> basis. It responds to claims <em>first made against you and notified during the period of insurance</em> — not to work done during the period. Those are different tests, and the difference is the single most important thing on this page.</p>
<ul>
<li><strong>The retroactive date governs your past.</strong> Most policies exclude claims arising from work performed before a stated retroactive date. If yours is the day you first took cover out, earlier work is uninsured however long you have since been covered. On changing insurer, the new policy must pick up the old retroactive date, or you have quietly deleted your own history.</li>
<li><strong>Today’s policy answers for yesterday’s work.</strong> A claim arriving next year about a project you finished this year is dealt with by next year’s policy. No policy next year, nothing to deal with it.</li>
</ul>
<p>Two related duties. <strong>Notify circumstances, not just claims:</strong> if something happens that could reasonably give rise to one — a defect emerges, a design is questioned, a letter arrives that reads like the start of something — notify while the policy is live. A properly notified circumstance generally attaches to that policy period even if the claim arrives years later. And <strong>disclose accurately at renewal</strong>: undisclosed known circumstances are a reliable way to have a later claim declined.</p>

<h2>What happens when the project finishes — run-off cover</h2>
<p>Because cover is claims-made, the risk does not end when the work does. A school building stands for decades and problems surface late. If you retire, wind up the company or change entities and cancel the policy, a claim made afterwards about work you did while insured has nothing to respond to it.</p>
<p><strong>Run-off cover</strong> continues a claims-made policy after the business stops, for work already performed, usually for a fixed number of years. Before you need it:</p>
<ul>
<li>It is easier and cheaper to arrange while your policy is still live than after it lapses.</li>
<li>Contracts frequently <em>require</em> it: a clause obliging you to maintain PI for a stated period after completion is in substance a run-off obligation, and it survives the project.</li>
<li>The retroactive date carries through, so a broken retroactive history is still a problem at the end.</li>
<li>If you are restructuring — sole trader to company, a merger, a change of contracting entity — deal with the old entity’s run-off deliberately rather than letting cover stop.</li>
</ul>

<h2>Consultants and contractors are not asked for the same thing</h2>
<p>The words get used interchangeably in procurement emails, but the requirements diverge:</p>
<ul>
<li><strong>Consultants</strong> — architects, engineers, designers, surveyors, planners, project and cost managers — supply professional services, and PI is the core requirement, usually alongside public liability.</li>
<li><strong>Contractors</strong> performing physical work are assessed primarily on public liability and contract works cover. Where a contractor also carries out design — design-and-build, or a proprietary element — PI is required for that element, and a standard construction liability programme does not include it.</li>
</ul>
<p>If you are a contractor asked for PI, the reason is almost certainly a design or certification component in your scope. Identify it, and check the policy you evidence covers it.</p>

<h2>Engineers, producer statements and the $200,000 figure</h2>
<p>Producer statements are part of the fabric of school property work, and one number attached to them is widely misunderstood. Engineering New Zealand recommends “retaining a statement of $200,000 PI insurance minimum on our producer statements”, states that this value “is standard and unrelated to construction costs”, and warns that “the consultant’s liability to its client is not limited by the amount stated on the producer statement”.</p>
<p>So: $200,000 is a recommended disclosure figure on a form. It is not a cap on your liability, not a required level of cover, and not the limit to buy for a school project — your contract and exposure set that. Anyone citing it as the amount of PI an engineer needs has misread it.</p>

<h2>What is proposed, and what is not yet law</h2>
<p>You may have seen that PI is becoming mandatory in the building sector. Most summaries get the detail wrong:</p>
<ul>
<li>The instrument is the <strong>Building Amendment Bill</strong>, <strong>introduced to Parliament on 2 July 2026</strong> and now at <strong>select committee</strong>. It is <strong>not law</strong>, and select committee can change it.</li>
<li>MBIE states the mandatory PI requirement applies to <strong>design professionals — architects and engineers</strong> — and <strong>expressly not to builders or Licensed Building Practitioners</strong>. Anything saying mandatory PI is coming for LBPs is wrong.</li>
<li>It also moves the sector from joint and several liability to <strong>proportionate liability</strong>, and introduces mandatory home warranties for new residential buildings — described as three storeys and under in the November 2025 announcement, and expressed as up to 10 metres in the Bill as introduced — and renovations of $100,000 or more — a residential measure, not a school property one.</li>
<li>MBIE indicates a <strong>one-year implementation period after the legislation passes</strong>, so even on passage it would not bite immediately.</li>
<li>No minimum sum insured has been published for the proposed requirement. Do not accept a figure from anyone who offers one.</li>
</ul>
<p>Separately, increases to Licensed Building Practitioner disciplinary penalties — maximum fines from $10,000 to $20,000 and maximum suspension from 12 to 24 months — are progressing through a <strong>different bill</strong>. MBIE's Regulatory Impact Statement of 5 November 2025 sets out both the current maximums and the proposed ones, and records that they are to be carried by the Building and Construction (Strengthening Occupational Licensing Regimes) Amendment Bill rather than by the Building Amendment Bill dealt with above. They are not law either. The two bills are frequently conflated, which misdates both.</p>

<h2>Before you submit</h2>
<ul>
<li>Read the insurance schedule in the contract, not the summary in the covering email.</li>
<li>Confirm the current Ministry requirement on education.govt.nz and save it with its date.</li>
<li>Check the named insured against the entity signing the contract.</li>
<li>Check the limit, and whether it is per claim or aggregate.</li>
<li>Check the retroactive date reaches back over all the work the engagement might touch.</li>
<li>Ask your broker for a fresh certificate and any endorsement the contract requires.</li>
<li>Find the clause setting how long cover must run after completion, and plan run-off now.</li>
<li>Diary your renewal against project milestones so cover never lapses.</li>
</ul>
<p>If the requirement does not match the cover you hold, a licensed adviser can read the contract and say what needs to change — often a limit, an entity name or an endorsement rather than a new policy.</p>

<div class="sources">
<h2>Sources</h2>
<ul>
<li><a href="https://www.building.govt.nz/about-building-performance/all-news-and-updates/building-amendment-bill-introduced-to-parliament" rel="nofollow noopener" target="_blank">Building Performance — Building Amendment Bill introduced to Parliament</a>, 2 July 2026</li>
<li><a href="https://www.mbie.govt.nz/dmsdocument/31702-regulatory-impact-statement-increasing-the-maximum-fine-and-suspension-for-licensed-building-practitioners-proactiverelease-pdf" rel="nofollow noopener" target="_blank">MBIE — Regulatory Impact Statement: increasing the maximum fine and suspension for licensed building practitioners (PDF)</a>, 5 November 2025</li>
<li><a href="https://www.beehive.govt.nz/sites/default/files/2025-11/Consumer%20protections%20for%20building%20consent%20system%20reforms%20factsheet.pdf" rel="nofollow noopener" target="_blank">Consumer protections for building consent system reforms — factsheet (PDF)</a>, 24 November 2025 — scope of the proposed PI requirement, and the statement that it will not apply to builders</li>
<li><a href="https://www.mbie.govt.nz/dmsdocument/31701-regulatory-impact-statement-supporting-mechanisms-for-proportionate-liability-in-the-building-and-construction-sector-proactiverelease-pdf" rel="nofollow noopener" target="_blank">MBIE — Regulatory Impact Statement, proportionate liability (PDF)</a>, 18 November 2025 — no minimum limit proposed</li>
<li><a href="https://www.engineeringnz.org/engineer-tools/engineering-documents/producer-statements/professional-indemnity-insurance-why-200000/" rel="nofollow noopener" target="_blank">Engineering New Zealand — Professional indemnity insurance: why $200,000?</a></li>
<li>Ministry of Education — contractor and consultant insurance guidance on education.govt.nz. Cited as text: we hold no verified URL for the current version, it is updated without announcement, and your signed contract schedule governs in any case. Read it alongside your contract and save a dated copy of what you relied on.</li>
</ul>
<p>Last reviewed 7 September 2026. General information only, not legal or financial advice. We are an information and referral service, not an insurer and not a law firm; the advisers we refer you to are licensed. The requirement that binds you is the one in your own contract schedule, not this page, and anything describing the Building Amendment Bill is accurate only as at the review date above.</p>
</div>`,
    faqs: [
      {
        q: 'What limit of professional indemnity does the Ministry of Education require?',
        a: 'We are not going to quote a figure, because the requirement is the Ministry’s to state and it varies by contract type and project. Read the Ministry of Education’s own contractor and consultant insurance guidance on education.govt.nz alongside the contract you have been sent, and take the limit from the contract schedule — that is the obligation you are actually signing up to. Save a dated copy of what you relied on, because these documents are updated.',
      },
      {
        q: 'What is a certificate of currency and who issues it?',
        a: 'It is a one-page confirmation from your insurer or broker that a policy exists, naming the insured, the class of cover, the limit of indemnity, the period of insurance and usually the business activities covered. Your broker issues it on request, generally the same day. It is evidence of cover, not cover in itself — if the certificate does not match the contract requirement, the certificate is not the problem, the cover is.',
      },
      {
        q: 'My certificate names my trading name, not my company. Does that matter?',
        a: 'Yes, and it is one of the most common reasons a submission is rejected. The named insured should be the legal entity that signs the contract, with trading names shown in addition rather than instead. If your policy names you personally and you contract through a company — or the other way round — a claim against the contracting entity may not be covered at all. Get it corrected before you submit, not after.',
      },
      {
        q: 'What does claims-made actually mean for a school project I finished last year?',
        a: 'It means the policy that responds is the one in force when the claim is first made against you and notified, not the one that was in force when you did the work. A claim arriving now about last year’s project is dealt with by your current policy — provided your retroactive date reaches back to when the work was done, and provided you still have a policy. If you have let cover lapse, there is nothing for the claim to attach to.',
      },
      {
        q: 'What is a retroactive date and why does it matter here?',
        a: 'It is the date before which work is excluded from your policy. School property work has a long tail, so it matters more than usual. If your retroactive date is the day you first bought cover, everything you did before that is uninsured no matter how many years you have since been continuously insured. When you change insurer, the new policy must carry the original retroactive date forward — losing it silently deletes your history, and you will only find out at claim time.',
      },
      {
        q: 'Can I cancel my PI policy once the project is complete?',
        a: 'Not safely, and often not lawfully under your contract. Because cover is claims-made, cancelling ends your protection for past work as well as future work. Many contracts also require you to maintain professional indemnity for a stated period after completion, which is a run-off obligation that survives the project. Check that clause before you make any decision about cancelling, and arrange run-off cover while the policy is still live.',
      },
      {
        q: 'I am a contractor, not a consultant. Why am I being asked for PI?',
        a: 'Almost certainly because your scope contains a professional services element — design, design-and-build, specification of a proprietary system, or certification. Professional indemnity is not included in a standard construction liability programme, so public liability and contract works cover will not satisfy the clause. Identify the design or advisory component of your scope and make sure the PI policy you evidence explicitly covers that activity.',
      },
      {
        q: 'Does the $200,000 on an engineer’s producer statement tell me how much PI to buy?',
        a: 'No. Engineering New Zealand recommends retaining a statement of $200,000 PI insurance minimum on its producer statements, and says the value is standard and unrelated to construction costs. It also warns that the consultant’s liability to its client is not limited by the amount stated on the producer statement. It is a disclosure convention on a form. The limit you need comes from your contract and your actual exposure, and is commonly higher.',
      },
      {
        q: 'Is professional indemnity now mandatory for everyone in construction?',
        a: 'No. The Building Amendment Bill, introduced to Parliament on 2 July 2026 and currently at select committee, would make PI mandatory for design professionals — architects and engineers. MBIE states it expressly does not apply to builders or Licensed Building Practitioners. It is not law, select committee can change it, and MBIE indicates a one-year implementation period after passage. No minimum sum insured has been published for the proposed requirement.',
      },
      {
        q: 'Something has gone wrong on site but no one has claimed. Should I tell my insurer?',
        a: 'Yes. Claims-made policies let you notify circumstances that could reasonably give rise to a claim, and a circumstance properly notified while the policy is live is generally attached to that policy period even if the claim itself arrives years later. Waiting until a formal claim arrives can push it into a period where you have no cover, or create a disclosure problem at your next renewal. Notify early, in writing, through your broker.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&auto=format&fit=crop&q=80',
    targetKeyword: 'PI insurance school property projects NZ',
    relatedCoverage: ['professional-indemnity', 'public-liability', 'run-off-cover'],
    relatedProfessions: ['architects-engineers', 'consultants', 'it-consultants'],
  },
]
