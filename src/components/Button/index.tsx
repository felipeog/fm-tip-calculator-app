import { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

import './index.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'dark' | 'light'
  isSelected?: boolean
  isDisabled?: boolean
}

export function Button({
  variant,
  isSelected,
  isDisabled,
  ...props
}: ButtonProps) {
  const buttonClasses = classNames('Button', {
    [`Button--${variant}`]: variant,
    'Button--selected': isSelected,
    'Button--disabled': isDisabled,
  })

  return <button className={buttonClasses} {...props} />
}

Button.defaultProps = {
  variant: 'light',
  isSelected: false,
  isDisabled: false,
}
