import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Cart } from './types'

interface ICart {
  carts: Cart[]
  totalPrice: number
  appendToCarts(product: Cart): void
  totalProductInCarts(): number
  deleteFromCarts(id: number): void
  calculatePrice(): void
  updateProductCount(id: number, count: number): void
  setSelectedProduct(id: number, isSelected: boolean): void
}

const initialCart: Cart = {
  id: 0,
  title: '',
  img: '',
  count: 0,
  price: 0,
  stok: 0,
  total: 0,
  isSelected: false
}

const useCart = create<ICart>()(
  devtools(
    persist(
      (set, get) => ({
        carts: [],
        totalPrice: 0,
        totalProductSelected: 0,

        appendToCarts(product) {
          const { carts } = get()

          const productIndex = carts.findIndex((v) => v.id === product.id)

          // product is available in carts
          if (productIndex !== -1) {
            carts[productIndex] = {
              ...carts[productIndex],
              count: carts[productIndex].count + product.count
            }
            return
          }

          set((state) => ({
            carts: [...state.carts, product]
          }))
        },

        totalProductInCarts() {
          const { carts } = get()
          return carts.length
        },

        deleteFromCarts(id) {
          const { calculatePrice } = get()
          set((state) => ({
            carts: state.carts.filter((p) => p.id !== id)
          }))

          // recalculate total price
          calculatePrice()
        },

        calculatePrice() {
          const { carts } = get()

          const selectedProduct = carts.map((product) => {
            if (product.isSelected === true) {
              return product
            }
            return initialCart
          })

          const total = selectedProduct.reduce((prev, curr) => {
            return prev + curr.total
          }, 0)

          set(() => ({
            totalPrice: total
          }))
        },

        setSelectedProduct(id, isSelected) {
          const { carts, calculatePrice } = get()

          const productIndex = carts.findIndex((v) => v.id === id)

          if (productIndex !== -1) {
            carts[productIndex] = {
              ...carts[productIndex],
              isSelected: isSelected
            }

            // recalculate total price
            calculatePrice()
            return
          }
        },

        updateProductCount(id, count) {
          const { carts, calculatePrice } = get()

          const newCarts = carts.map((v) => {
            if (v.id === id) {
              return { ...v, count: count, total: v.price * count }
            }
            return v
          })

          set(() => ({
            carts: newCarts
          }))

          // recalculate total price
          calculatePrice()
        }
      }),
      {
        name: 'product_cart'
      }
    )
  )
)

export default useCart
