import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Header } from './index'

describe('test Header component', () => {
  it('should render', () => {
    expect.hasAssertions()
    expect(render(<Header />)).toBeTruthy()
  })
})
