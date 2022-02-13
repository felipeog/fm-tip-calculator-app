import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Button, POSSIBLE_VARIANTS } from './index'

describe('test Button component', () => {
  it('should render', () => {
    expect.hasAssertions()

    expect(render(<Button>Button</Button>)).toBeTruthy()
  })
})
