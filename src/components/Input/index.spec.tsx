import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { Input } from './index'

describe('test Input component', () => {
  it('should render', () => {
    expect.hasAssertions()
    expect(render(<Input />)).toBeTruthy()
  })

  describe('props tests', () => {
    it('should render label', () => {
      expect.hasAssertions()

      const label = 'Input test'

      render(<Input label={label} />)
      expect(screen.getByText(label)).toBeInTheDocument()
    })

    it('should not render label', () => {
      expect.hasAssertions()

      const { container } = render(<Input />)

      // FIXME:
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector('label')).not.toBeInTheDocument()
    })

    it('should render icon', () => {
      expect.hasAssertions()

      const { container } = render(<Input icon="dollar" />)

      // FIXME:
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector('svg')).toBeInTheDocument()
    })

    it('should not render icon', () => {
      expect.hasAssertions()

      const { container } = render(<Input />)

      // FIXME:
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector('svg')).not.toBeInTheDocument()
    })
  })

  describe('events tests', () => {
    it('should change on type', () => {
      expect.hasAssertions()

      const value = '100'

      render(<Input />)
      userEvent.type(screen.getByRole('textbox'), value)
      expect(screen.getByRole('textbox')).toHaveValue(value)
    })
  })
})
