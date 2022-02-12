import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { TipCalculator, TIP_PERCENTAGES } from './index'

it('Should render', () => {
  expect(render(<TipCalculator />)).toBeTruthy()
})

describe('UI tests', () => {
  it('Should render Bill input', () => {
    const { container } = render(<TipCalculator />)

    /* eslint-disable-next-line */
    expect(container.querySelector('input[name=bill]')).toBeInTheDocument()
  })

  it(`Should render tip buttons`, () => {
    render(<TipCalculator />)

    TIP_PERCENTAGES.forEach((tip) => {
      expect(screen.getByText(`${tip}%`)).toBeInTheDocument()
    })
  })

  it('Should render Number of People input', () => {
    const { container } = render(<TipCalculator />)

    /* eslint-disable-next-line */
    expect(container.querySelector('input[name=people]')).toBeInTheDocument()
  })

  it('Should render Tip Amount label', () => {
    render(<TipCalculator />)

    expect(screen.getByText('Tip Amount')).toBeInTheDocument()
  })

  it('Should render Total label', () => {
    render(<TipCalculator />)

    expect(screen.getByText('Total')).toBeInTheDocument()
  })

  it('Should render Tip Amount and Total result', () => {
    render(<TipCalculator />)

    expect(screen.getAllByText('$0.00')).toHaveLength(2)
  })

  it(`Should render Reset buttons`, () => {
    render(<TipCalculator />)

    expect(screen.getByText('Reset')).toBeInTheDocument()
  })
})
