import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { Input } from './index'

describe('test Input component', () => {
  it('should render', () => {
    expect.hasAssertions()
    expect(render(<Input />)).toBeTruthy()
  })
})
