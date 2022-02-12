import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { Input } from './index'

it('Should render', () => {
  expect(render(<Input />)).toBeTruthy()
})

describe('Props tests', () => {
  it('Should render label', () => {
    const label = 'Input test'

    render(<Input label={label} />)
    expect(screen.getByText(label)).toBeInTheDocument()
  })

  /* eslint-disable  */
  it('Should not render label', () => {
    const { container } = render(<Input />)

    expect(container.querySelector('label')).not.toBeInTheDocument()
  })

  it('Should render icon', () => {
    const { container } = render(<Input icon="dollar" />)

    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('Should not render icon', () => {
    const { container } = render(<Input />)

    expect(container.querySelector('svg')).not.toBeInTheDocument()
  })
  /* eslint-enable  */
})

describe('Events tests', () => {
  it('Should change on type', () => {
    const value = '100'

    render(<Input />)
    userEvent.type(screen.getByRole('textbox'), value)
    expect(screen.getByRole('textbox')).toHaveValue(value)
  })
})
