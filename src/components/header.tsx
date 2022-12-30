import Link from 'next/link'
import useCart from '~/store/cart'
import useWishlist from '~/store/wishlist'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'

export default function Header() {
  const totalProductInCarts = useCart((state) => state.totalProductInCarts())
  const totalWishlist = useWishlist((state) => state.totalWishlist())

  return (
    <header className="flex justify-between">
      <Link href={'/'}>
        <a>
          <h1 className="text-2xl text-white font-semibold">E-Commerce</h1>
        </a>
      </Link>
      <div className="flex items-center gap-x-4">
        <Link href={'/cart'}>
          <a className="relative">
            <AiOutlineShoppingCart className="w-6 h-fit fill-slate-50" />
            <span
              className={`${
                totalProductInCarts === 0 ? 'opacity-0' : 'opacity-100'
              } z-10 bg-red-500 px-[5px] py-[2px] rounded-full absolute -top-2 -right-1 text-white text-[10px] font-bold`}
            >
              {totalProductInCarts}
            </span>
          </a>
        </Link>
        <Link href={'/wishlist'}>
          <a className="relative">
            <AiOutlineHeart className="w-6 h-fit fill-slate-50" />
            <span
              className={`${
                totalWishlist === 0 ? 'opacity-0' : 'opacity-100'
              } z-10 bg-red-500 px-[5px] py-[2px] rounded-full absolute -top-2 -right-1 text-white text-[10px] font-bold`}
            >
              {totalWishlist}
            </span>
          </a>
        </Link>
      </div>
    </header>
  )
}
