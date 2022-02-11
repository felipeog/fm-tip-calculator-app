import { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

import './index.css'

export const POSSIBLE_VARIANTS = ['dark', 'light'] as const

export type Variant = typeof POSSIBLE_VARIANTS[number]

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  isSelected?: boolean
  isDisabled?: boolean
}

export function Button({
  className,
  variant,
  isSelected,
  isDisabled,
  ...props
}: ButtonProps) {
  const buttonClasses = classNames('Button', className, {
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
