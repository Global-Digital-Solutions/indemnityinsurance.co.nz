import Link from 'next/link'

/**
 * The standing notice about what this site's content is and is not.
 *
 * It sits on the pages that make claims, not only on /disclaimer/, because a
 * disclaimer nobody reaches does no work. Three things it has to say plainly,
 * each of which came out of research rather than caution for its own sake:
 *
 *  - "Indemnity insurance" means three different things in New Zealand, and we
 *    only arrange one of them.
 *  - Some cover we describe is genuinely unavailable through a broker — medical
 *    indemnity is sold direct or through a mutual, and some professional bodies
 *    include or place cover for their members. We explain those; we cannot sell
 *    them.
 *  - Figures move. Every one on this site carries a source and a date, because
 *    a professional body's minimum can change without any law changing.
 *
 * `variant="compact"` is for mid-page use; the default is the fuller block for
 * the foot of an article.
 */
export default function ContentNotice({
  variant = 'full',
  className = '',
}: {
  variant?: 'full' | 'compact'
  className?: string
}) {
  if (variant === 'compact') {
    return (
      <aside
        className={`rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 ${className}`}
        aria-label="About this information"
      >
        <p>
          General information about the rules and how these policies work — not regulated
          financial advice, and not a view on what you need. Figures are dated and sourced
          where given.{' '}
          <Link href="/disclaimer/" className="font-medium text-brand-700 underline underline-offset-2">
            How to read what is on this site
          </Link>
        </p>
      </aside>
    )
  }

  return (
    <aside
      className={`rounded-2xl border border-slate-200 bg-slate-50 p-6 ${className}`}
      aria-label="About this information"
    >
      <h2 className="text-base font-bold text-slate-900 mb-3">About the information on this page</h2>
      <ul className="space-y-2.5 text-sm leading-relaxed text-slate-600">
        <li>
          <span className="font-medium text-slate-800">What a rule requires is not the same as what you need.</span>{' '}
          Where we say that no statute, regulator or professional body requires a particular
          cover, that is a sourced statement about the rules. It is not a view about whether
          cover is appropriate for you, and it should not be read as one. Cover is widely held,
          and often sensible, where nothing compels it. Whether it is right for your situation
          is a question for a licensed adviser.
        </li>
        <li>
          <span className="font-medium text-slate-800">This is general information, not advice.</span>{' '}
          We are not a financial advice provider and we do not give regulated financial advice.
          Nothing here takes account of your circumstances. Enquiries go to licensed New Zealand
          advisers, who give the advice.
        </li>
        <li>
          <span className="font-medium text-slate-800">We are not an insurer or an underwriter.</span>{' '}
          We do not issue policies, set premiums or decide claims.
        </li>
        <li>
          <span className="font-medium text-slate-800">Some cover we describe cannot be arranged through us.</span>{' '}
          Medical indemnity for doctors is sold directly or through a mutual. Some professional
          bodies include indemnity in membership, or place it through one appointed provider.
          Where that is the case we say so and point you to the right place, rather than pretend
          otherwise.
        </li>
        <li>
          <span className="font-medium text-slate-800">Figures are indicative, sourced and dated.</span>{' '}
          Premiums depend on your profession, fee income, claims history and limit. Where a
          professional body sets a minimum, that minimum can change without any law changing, so
          check the current figure with the body itself before relying on it.
        </li>
        <li>
          <span className="font-medium text-slate-800">Policy wordings differ.</span>{' '}
          An underwriter&rsquo;s own policy and the policies it underwrites for other brands are
          not necessarily the same cover. Read the wording you are actually offered.
        </li>
      </ul>
      <p className="mt-4 text-sm">
        <Link href="/disclaimer/" className="font-medium text-brand-700 underline underline-offset-2">
          Full disclaimer
        </Link>
      </p>
    </aside>
  )
}
