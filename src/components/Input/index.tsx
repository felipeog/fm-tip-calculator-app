import classNames from 'classnames'
import { InputHTMLAttributes } from 'react'

import { Icon, TIcon } from '../Icon'
import './index.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: TIcon
}

export function Input({ className, label, icon, ...props }: InputProps) {
  return (
    <div className={classNames('Input', className)}>
      {label && (
        <label className="Input__label" htmlFor={props.name}>
          {label}
        </label>
      )}

      <div className="Input__input-container">
        {icon && <Icon className="Input__icon" icon={icon} />}

        <input
          className="Input__input"
          name={props.name}
          id={props.name}
          {...props}
        />
      </div>
    </div>
  )
}
