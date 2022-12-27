import { useQuery } from '@tanstack/react-query'
import { Product } from '~/type/product'

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

export const useProducts = () => {
  return useQuery(['products-list'], () => fecthAllProducts())
}

export const useProductById = (id: string) => {
  return useQuery(['product-id', id], () => fecthProductById(id), {
    keepPreviousData: true
  })
}
