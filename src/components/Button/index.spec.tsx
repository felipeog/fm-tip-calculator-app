import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Button, POSSIBLE_VARIANTS } from './index'

describe('test Button component', () => {
  it('should render', () => {
    expect.hasAssertions()

    expect(render(<Button>Button</Button>)).toBeTruthy()
  })

  describe('props tests', () => {
    it('should render correct text', () => {
      expect.hasAssertions()

      const text = 'Text test'

      render(<Button>{text}</Button>)
      expect(screen.getByText(text)).toBeInTheDocument()
    })

    it('should render correct children', () => {
      expect.hasAssertions()

      const testId = 'children-test'
      const children = <p data-testid={testId}>Children test</p>

      render(<Button>{children}</Button>)
      expect(screen.getByTestId(testId)).toBeInTheDocument()
    })

    it('should render correct class name', () => {
      expect.hasAssertions()

      const testId = 'class-name-test'
      const className = 'button-class-name'

      render(
        <Button data-testid={testId} className={className}>
          {className}
        </Button>,
      )
      expect(screen.getByTestId(testId)).toHaveClass(className)
    })

    it.each(POSSIBLE_VARIANTS)('should render %s variant', (variant) => {
      expect.hasAssertions()

      const testId = 'variant-test'
      const { unmount } = render(
        <Button data-testid={testId} variant={variant}>
          {variant}
        </Button>,
      )

      expect(screen.getByTestId(testId)).toHaveClass(`Button--${variant}`)
      unmount()
    })

    it('should render selected state', () => {
      expect.hasAssertions()

      const testId = 'selected-state-test'

      render(
        <Button data-testid={testId} isSelected>
          Selected state test
        </Button>,
      )
      expect(screen.getByTestId(testId)).toHaveClass('Button--selected')
    })

    it('should render disabled state', () => {
      expect.hasAssertions()

      const testId = 'disabled-test-id'

      render(
        <Button data-testid={testId} isDisabled>
          Disabled state test
        </Button>,
      )
      expect(screen.getByTestId(testId)).toHaveClass('Button--disabled')
    })
  })
})
