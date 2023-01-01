export type ResponseApi = {
  limit: number
  products: Product[]
  skip: number
  total: number
}

export type Product = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export type Cart = {
  id: number
  img: string
  title: string
  price: number
  count: number
  stok: number
  total: number
  isSelected: boolean
}

export type Wishlist = {
  id: number
  img: string
  title: string
  price: number
}
