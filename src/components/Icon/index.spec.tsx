import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Icon, AVAILABLE_ICONS } from './index'

describe('test Icon component', () => {
  it('should render', () => {
    expect.hasAssertions()
    expect(render(<Icon icon="dollar" />)).toBeTruthy()
  })

  it.each(AVAILABLE_ICONS)('should render %s icon', (icon) => {
    expect.hasAssertions()

    const testId = icon
    const { unmount } = render(<Icon data-testid={testId} icon={icon} />)

    expect(screen.getByTestId(testId)).toBeInTheDocument()
    unmount()
  })
})
