import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Wishlist } from './types'

interface IWishlist {
  list: Wishlist[]
  addToWishlist(wishlistProduct: Wishlist): void
  removeFromWishlist(id: number): void
  totalWishlist(): number
}

const useWishlist = create<IWishlist>()(
  devtools(
    persist(
      (set, get) => ({
        list: [],
        addToWishlist(wishlistProduct) {
          const { list } = get()

          const productId = list.findIndex((v) => v.id === wishlistProduct.id)

          if (productId === -1) {
            set((state) => ({
              list: [...state.list, wishlistProduct]
            }))
            return
          }
        },
        removeFromWishlist(id) {
          const { list } = get()

          const items = list.filter((v) => v.id !== id)

          set(() => ({
            list: items
          }))
        },
        totalWishlist() {
          const { list } = get()
          return list.length
        }
      }),
      {
        name: 'wishlist_product'
      }
    )
  )
)

export default useWishlist
