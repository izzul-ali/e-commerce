import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Cart from '~/pages/cart'

describe('cart page', () => {
  it('cart should be empty', () => {
    render(<Cart />)

    const button = waitFor(() => screen.getByRole('button'))
    const messageEmptyCart = waitFor(() => screen.getByText(/Oops!/i))

    expect(button).not.toBeFalsy()
    expect(messageEmptyCart).toBeTruthy()
  })
})
