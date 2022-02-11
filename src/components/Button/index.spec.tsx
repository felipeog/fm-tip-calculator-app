import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Button, POSSIBLE_VARIANTS } from './index'

it('Should render', () => {
  expect(render(<Button>Button</Button>)).toBeTruthy()
})

describe('Props tests', () => {
  it('Should render correct text', () => {
    const text = 'Text test'

    render(<Button>{text}</Button>)
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('Should render correct children', () => {
    const testId = 'children-test'
    const children = <p data-testid={testId}>Children test</p>

    render(<Button>{children}</Button>)
    expect(screen.getByTestId(testId)).toBeInTheDocument()
  })

  it('Should render correct class name', () => {
    const testId = 'class-name-test'
    const className = 'button-class-name'

    render(
      <Button data-testid={testId} className={className}>
        {className}
      </Button>,
    )
    expect(screen.getByTestId(testId)).toHaveClass(className)
  })

  POSSIBLE_VARIANTS.forEach((variant) => {
    it(`Should render ${variant} variant`, () => {
      const testId = 'variant-test'
      const { unmount } = render(
        <Button data-testid={testId} variant={variant}>
          {variant}
        </Button>,
      )

      expect(screen.getByTestId(testId)).toHaveClass(`Button--${variant}`)
      unmount()
    })
  })

  it('Should render selected state', () => {
    const testId = 'selected-state-test'

    render(
      <Button data-testid={testId} isSelected>
        Selected state test
      </Button>,
    )
    expect(screen.getByTestId(testId)).toHaveClass('Button--selected')
  })

  it('Should render disabled state', () => {
    const testId = 'disabled-test-id'

    render(
      <Button data-testid={testId} isDisabled>
        Disabled state test
      </Button>,
    )
    expect(screen.getByTestId(testId)).toHaveClass('Button--disabled')
  })
})
