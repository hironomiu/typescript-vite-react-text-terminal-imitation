import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../compoments/Header'

describe('Header', () => {
  it('test', () => {
    render(<Header />)
    expect(screen.getByTestId('div-red')).toBeInTheDocument()
  })
})
