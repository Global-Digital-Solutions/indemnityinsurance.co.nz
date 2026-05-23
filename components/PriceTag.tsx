// Renders a price string with a visually smaller "from" prefix.
// Strips any existing "From " / "from " from the data string before rendering.
interface PriceTagProps {
  price: string
  className?: string
  fromClassName?: string
}

export default function PriceTag({ price, className = '', fromClassName = '' }: PriceTagProps) {
  const stripped = price.replace(/^from\s+/i, '')
  return (
    <span className={className}>
      <span className={`text-[0.7em] font-medium tracking-wide opacity-70 mr-0.5 ${fromClassName}`}>from </span>
      {stripped}
    </span>
  )
}
