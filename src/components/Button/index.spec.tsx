import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Button, POSSIBLE_VARIANTS } from './index'

it('Should render', () => {
  expect(render(<Button>Button</Button>)).toBeTruthy()
})

describe('Props tests', () => {
  it('Should render correct text', () => {
    const text = 'Text test'
    const { getByText } = render(<Button>{text}</Button>)

    expect(getByText(text)).toBeTruthy()
  })

  it('Should render correct children', () => {
    const children = <p>Children test</p>
    const { container } = render(<Button>{children}</Button>)

    expect(container.querySelector('p')).toBeTruthy()
  })

  it('Should render correct class name', () => {
    const className = 'class-name-test'
    const { container } = render(
      <Button className={className}>{className}</Button>,
    )

    expect(container.firstChild).toHaveClass(className)
  })

  POSSIBLE_VARIANTS.forEach((variant) => {
    it(`Should render ${variant} variant`, () => {
      const { container, unmount } = render(
        <Button variant={variant}>{variant}</Button>,
      )

      expect(container.firstChild).toHaveClass(`Button--${variant}`)
      unmount()
    })
  })

  it('Should render selected state', () => {
    const { container } = render(
      <Button isSelected>Selected state test</Button>,
    )

    expect(container.firstChild).toHaveClass('Button--selected')
  })

  it('Should render disabled state', () => {
    const { container } = render(
      <Button isDisabled>Disabled state test</Button>,
    )

    expect(container.firstChild).toHaveClass('Button--disabled')
  })
})
