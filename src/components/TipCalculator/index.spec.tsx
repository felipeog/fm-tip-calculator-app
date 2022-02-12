import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { TipCalculator, TIP_PERCENTAGES } from './index'

describe('test TipCalculator component', () => {
  it('should render', () => {
    expect.hasAssertions()

    expect(render(<TipCalculator />)).toBeTruthy()
  })

  describe('ui tests', () => {
    it('should render Bill input', () => {
      expect.hasAssertions()

      const { container } = render(<TipCalculator />)

      // FIXME:
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector('input[name=bill]')).toBeInTheDocument()
    })

    it(`should render tip buttons`, () => {
      expect.hasAssertions()

      render(<TipCalculator />)

      TIP_PERCENTAGES.forEach((tip) => {
        expect(screen.getByText(`${tip}%`)).toBeInTheDocument()
      })
    })

    it('should render custom tip input', () => {
      expect.hasAssertions()

      const { container } = render(<TipCalculator />)

      // FIXME:
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector('input[name=tip]')).toBeInTheDocument()
    })

    it('should render Number of People input', () => {
      expect.hasAssertions()

      const { container } = render(<TipCalculator />)

      // FIXME:
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector('input[name=people]')).toBeInTheDocument()
    })

    it('should render Tip Amount label', () => {
      expect.hasAssertions()

      render(<TipCalculator />)

      expect(screen.getByText('Tip Amount')).toBeInTheDocument()
    })

    it('should render Total label', () => {
      expect.hasAssertions()

      render(<TipCalculator />)

      expect(screen.getByText('Total')).toBeInTheDocument()
    })

    it('should render Tip Amount and Total result', () => {
      expect.hasAssertions()

      render(<TipCalculator />)

      expect(screen.getAllByText('$0.00')).toHaveLength(2)
    })

    it(`should render Reset buttons`, () => {
      expect.hasAssertions()

      render(<TipCalculator />)

      expect(screen.getByText('Reset')).toBeInTheDocument()
    })
  })
})
