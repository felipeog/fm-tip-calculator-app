import './index.css'

interface TipResultProps {
  label: string
  value: number
}

export function TipResult({ label, value }: TipResultProps) {
  function getFormattedValue(rawValue: number) {
    if (!rawValue || isNaN(rawValue)) {
      return '$0.00'
    }

    return `$${rawValue.toFixed(2)}`
  }

  return (
    <div className="TipResult">
      <div>
        <p className="TipResult__label">{label}</p>
        <p className="TipResult__sublabel">/ person</p>
      </div>

      <p className="TipResult__value">{getFormattedValue(value)}</p>
    </div>
  )
}
