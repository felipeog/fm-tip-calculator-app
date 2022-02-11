import { InputHTMLAttributes } from 'react'

import { AvailableIcons, Icon } from '../Icon'
import './index.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: AvailableIcons
}

export function Input({ label, icon, ...props }: InputProps) {
  return (
    <label className="Input" htmlFor={props.name}>
      {label && (
        <div className="Input__label-container">
          <p>{label}</p>
        </div>
      )}

      <div className="Input__input-container">
        {icon && <Icon icon={icon} />}

        <input name={props.name} id={props.name} {...props} />
      </div>
    </label>
  )
}
