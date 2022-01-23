import './index.css'

export function TipResult({ label, value }) {
  function getFormattedValue(value: number) {
    if (!value || isNaN(value)) {
      return '$0.00'
    }

    return `$${value.toFixed(2)}`
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
