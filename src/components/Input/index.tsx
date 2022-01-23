import { InputHTMLAttributes } from 'react'

import { Icon } from '../Icon'
import './index.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: string
  condition?: {
    checker: (arg0: number | string | readonly string[]) => boolean
    message: string
  }
}

export function Input({ label, condition, icon, ...props }: InputProps) {
  return (
    <label className="Input" htmlFor={props.name}>
      {(label || condition) && (
        <div className="Input__label-container">
          {label && <p>{label}</p>}

          {condition && condition.checker(props.value) && (
            <p>{condition.message}</p>
          )}
        </div>
      )}

      <div className="Input__input-container">
        {icon && <Icon icon={icon} />}

        <input name={props.name} id={props.name} {...props} />
      </div>
    </label>
  )
}
