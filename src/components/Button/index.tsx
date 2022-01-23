import { ButtonHTMLAttributes } from 'react'

import './index.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string
  isSelected?: boolean
  isDisabled?: boolean
}

export function Button({
  variant,
  isSelected,
  isDisabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`Button Button--${variant} ${
        isSelected ? 'Button--selected' : ''
      } ${isDisabled ? 'Button--disabled' : ''}`}
      {...props}
    />
  )
}

Button.defaultProps = {
  variant: 'light',
  isSelected: false,
  isDisabled: false,
}
