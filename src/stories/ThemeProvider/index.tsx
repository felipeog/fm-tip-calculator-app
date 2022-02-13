import { HTMLAttributes } from 'react'

import '../../css/variables.css'
import '../../css/base.css'
import './index.css'

export type ThemeProviderProps = HTMLAttributes<HTMLDivElement>

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <div>{children}</div>
}
