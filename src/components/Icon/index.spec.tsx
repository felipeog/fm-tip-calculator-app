import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Icon, AVAILABLE_ICONS } from './index'

describe('test Icon component', () => {
  it('should render', () => {
    expect.hasAssertions()
    expect(render(<Icon icon="dollar" />)).toBeTruthy()
  })
})
