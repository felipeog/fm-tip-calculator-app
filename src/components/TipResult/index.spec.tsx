import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { TipResult } from './index'

describe('test TipResult component', () => {
  it('should render', () => {
    expect.hasAssertions()

    expect(
      render(<TipResult label="Tip result test" value={100} />),
    ).toBeTruthy()
  })
})
