import { ComponentType, HTMLAttributes, SVGProps } from 'react'
import classNames from 'classnames'

import * as ICONS from './icons'

export type TIcon = keyof typeof ICONS

export const AVAILABLE_ICONS = Object.keys(ICONS) as TIcon[]

export interface IconProps extends SVGProps<SVGSVGElement> {
  icon: TIcon
}

export function Icon({ className, icon, ...props }: IconProps) {
  const IconComponent = ICONS[icon] as ComponentType<
    HTMLAttributes<SVGSVGElement>
  >

  return <IconComponent className={classNames('Icon', className)} {...props} />
}
