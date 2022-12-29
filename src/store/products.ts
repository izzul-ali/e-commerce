import { useQuery } from '@tanstack/react-query'
import { Product } from './types'

const fecthAllProducts = async () => {
  const resp = await fetch('https://fakestoreapi.com/products')
  const data = (await resp.json()) as unknown as Product[]
  return data
}

const fecthProductById = async (id: string) => {
  const resp = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = (await resp.json()) as unknown as Product
  return data
}

export const getProducts = () => {
  return useQuery(['products-list'], () => fecthAllProducts())
}

export const getProductById = (id: string) => {
  return useQuery(['product-id', id], () => fecthProductById(id), {
    keepPreviousData: true
  })
}
