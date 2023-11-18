import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe('App', () => {
  it('test', () => {
    render(<App />)
    expect(screen.getByText('>>>')).toBeInTheDocument()
  })
})
