type Rating = {
  rate: number
  count: number
}

export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
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
