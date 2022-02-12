import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  describe('events test', () => {
    it('test calculation with tip button', () => {
      expect.hasAssertions()

      render(<TipCalculator />)

      const billValue = '100'
      const peopleValue = '2'
      const billInput = screen.getAllByRole('spinbutton')[0]
      const peopleInput = screen.getAllByRole('spinbutton')[2]
      const tipButton = screen.getAllByRole('button')[0]

      userEvent.type(billInput, billValue)
      userEvent.type(peopleInput, peopleValue)
      userEvent.click(tipButton)

      expect(billInput).toHaveValue(Number(billValue))
      expect(peopleInput).toHaveValue(Number(peopleValue))
      expect(tipButton).toHaveClass('Button--selected')
      expect(screen.getByText('$2.50')).toBeInTheDocument()
      expect(screen.getByText('$52.50')).toBeInTheDocument()
    })

    it('test calculation with custom tip input', () => {
      expect.hasAssertions()

      render(<TipCalculator />)

      const tipValue = '10'
      const tipInput = screen.getAllByRole('spinbutton')[1]

      userEvent.type(tipInput, tipValue)

      expect(tipInput).toHaveValue(Number(tipValue))
      expect(screen.getByText('$5.00')).toBeInTheDocument()
      expect(screen.getByText('$55.00')).toBeInTheDocument()
    })

    it('test reset button', () => {
      expect.hasAssertions()

      render(<TipCalculator />)

      const resetButton = screen.getByText('Reset')

      userEvent.click(resetButton)

      expect(screen.getAllByText('$0.00')).toHaveLength(2)
    })
  })
})
