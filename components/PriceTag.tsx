// Renders a value string, prefixing a visually smaller "from" only when the
// value is an actual amount. Non-numeric values (e.g. "individual underwriting")
// are rendered as-is, so a descriptive field is never dressed up as a price.
interface PriceTagProps {
  price: string
  className?: string
  fromClassName?: string
}

export default function PriceTag({ price, className = '', fromClassName = '' }: PriceTagProps) {
  const stripped = price.replace(/^from\s+/i, '')
  const isAmount = /^[$\d]/.test(stripped)
  return (
    <span className={className}>
      {isAmount && (
        <span className={`text-[0.7em] font-medium tracking-wide opacity-70 mr-0.5 ${fromClassName}`}>from </span>
      )}
      {stripped}
    </span>
  )
}
