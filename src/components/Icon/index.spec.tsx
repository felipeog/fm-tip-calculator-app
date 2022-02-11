import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Icon, AVAILABLE_ICONS } from './index'

it('Should render', () => {
  expect(render(<Icon icon="dollar" />)).toBeTruthy()
})

describe('Props tests', () => {
  AVAILABLE_ICONS.forEach((icon) => {
    it(`Should render ${icon} icon`, () => {
      const testId = icon
      const { unmount } = render(<Icon data-testid={testId} icon={icon} />)

      expect(screen.getByTestId(testId)).toBeInTheDocument()
      unmount()
    })
  })
})
