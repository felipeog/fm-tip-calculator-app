import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { TipCalculator, TIP_PERCENTAGES } from './index'

describe('test TipCalculator component', () => {
  it('should render', () => {
    expect.hasAssertions()

    expect(render(<TipCalculator />)).toBeTruthy()
  })
})
