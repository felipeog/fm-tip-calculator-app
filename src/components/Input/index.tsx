import { InputHTMLAttributes } from 'react'
import classNames from 'classnames'

import { AvailableIcons, Icon } from '../Icon'
import './index.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: AvailableIcons
  condition?: {
    checker: (arg0: number | string | readonly string[]) => boolean
    message: string
  }
}

export function Input({ label, condition, icon, ...props }: InputProps) {
  const hasErrors = condition && condition.checker(props.value)
  const inputContainerClasses = classNames('Input__input-container', {
    'Input__input-container--errors': hasErrors,
  })

  return (
    <label className="Input" htmlFor={props.name}>
      {(label || condition) && (
        <div className="Input__label-container">
          {label && <p>{label}</p>}

          {hasErrors && <p className="Input__error">{condition.message}</p>}
        </div>
      )}

      <div className={inputContainerClasses}>
        {icon && <Icon icon={icon} />}

        <input name={props.name} id={props.name} {...props} />
      </div>
    </label>
  )
}
