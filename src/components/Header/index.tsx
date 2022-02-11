import { HTMLAttributes } from 'react'
import classNames from 'classnames'

import Logo from '../../assets/logo.svg'

export type HeaderProps = HTMLAttributes<HTMLElement>

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header className={classNames('Header', className)} {...props}>
      <Logo />
    </header>
  )
}
