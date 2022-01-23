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

export function Input(props: InputProps) {
  return (
    <label className="Input" htmlFor={props.name}>
      <div className="Input__label-container">
        <p>{props.label}</p>

        {props.condition && props.condition.checker(props.value) && (
          <p>{props.condition.message}</p>
        )}
      </div>

      <div className="Input__input-container">
        {props?.icon && <Icon icon={props.icon} />}

        <input name={props.name} id={props.name} {...props} />
      </div>
    </label>
  )
}
