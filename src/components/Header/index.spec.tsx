import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Header } from './index'

it('Should render', () => {
  expect(render(<Header />)).toBeTruthy()
})
