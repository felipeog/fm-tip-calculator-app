import * as ICONS from './icons'

export const AVAILABLE_ICONS = Object.keys(ICONS)
export type AvailableIcons = keyof typeof ICONS

interface IconProps {
  icon: AvailableIcons
}

export function Icon({ icon }: IconProps) {
  const IconComponent = ICONS[icon]

  return <IconComponent />
}
