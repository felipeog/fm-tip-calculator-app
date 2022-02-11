import { ComponentType, HTMLAttributes, SVGProps } from 'react'
import classNames from 'classnames'

import * as ICONS from './icons'

export type Icon = keyof typeof ICONS

export const AVAILABLE_ICONS = Object.keys(ICONS) as Icon[]

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: Icon
}

export function Icon({ className, icon, ...props }: IconProps) {
  const IconComponent = ICONS[icon] as ComponentType<
    HTMLAttributes<SVGSVGElement>
  >

  return <IconComponent className={classNames('Icon', className)} {...props} />
}
