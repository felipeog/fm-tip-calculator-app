import { HTMLAttributes } from 'react'
import classNames from 'classnames'

import './index.css'

export interface TipResultProps extends HTMLAttributes<HTMLDivElement> {
  label: string
  value: number
}

export function TipResult({
  className,
  label,
  value,
  ...props
}: TipResultProps) {
  function getFormattedValue(rawValue: number) {
    if (!rawValue || isNaN(rawValue)) {
      return '$0.00'
    }

    return `$${rawValue.toFixed(2)}`
  }

  return (
    <div className={classNames('TipResult', className)} {...props}>
      <div>
        <p className="TipResult__label">{label}</p>
        <p className="TipResult__sublabel">/ person</p>
      </div>

      <p className="TipResult__value">{getFormattedValue(value)}</p>
    </div>
  )
}
