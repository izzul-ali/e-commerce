import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen, waitFor } from '@testing-library/react'
import Home from '~/pages'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 1,
      staleTime: 1000 * 60 * 60 * 1,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
      retryOnMount: false
    }
  }
})

describe('Home page', () => {
  it('products should be not empty', () => {
    render(
      <QueryClientProvider client={client}>
        <Home />
      </QueryClientProvider>
    )

    const productImage = waitFor(() => screen.getByRole('img'))
    const rating = waitFor(() => screen.getAllByText(/⭐️/i))

    expect(productImage).toBeTruthy()
    expect(rating).toBeTruthy()
  })
})
