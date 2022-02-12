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

  describe('props tests', () => {
    it('should render label and value', () => {
      expect.hasAssertions()

      const label = 'Tip result test'
      const value = 100
      const renderedValue = '$100.00'

      render(<TipResult label={label} value={value} />)
      expect(screen.getByText(label)).toBeInTheDocument()
      expect(screen.getByText(renderedValue)).toBeInTheDocument()
    })
  })
})
