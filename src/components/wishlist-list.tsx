import { Wishlist } from '~/store/types'
import { formatCurrency } from '~/utils/currency'
import { BsTrash } from 'react-icons/bs'
import useWishlist from '~/store/wishlist'
import Link from 'next/link'

function WishlistCard({ id, img, price, title }: Wishlist) {
  const removeWishlist = useWishlist((state) => state.removeFromWishlist)

  return (
    <div className="flex justify-between gap-x-4 h-32 py-2 px-1 rounded shadow-md border-t border-gray-200">
      <Link href={`/product/${id}`}>
        <a className="w-1/2 h-full">
          <img src={img} alt={title} className="w-full h-full object-contain" />
        </a>
      </Link>
      <div className="w-full flex flex-col gap-y-1 justify-between pb-3 pr-2">
        <Link href={`/product/${id}`}>
          <a>
            <h3 className="text-base font-semibold line-clamp-2 leading-snug">
              {title}
            </h3>
          </a>
        </Link>

        <div className="flex items-center justify-between pr-10">
          <p className="text-sm text-gray-600">{formatCurrency(price)}</p>
          <button onClick={() => removeWishlist(id)} className="w-fit mx-auto">
            <BsTrash className="w-5 h-5 fill-gray-600" />
          </button>
        </div>
      </div>
    </div>
  )
}

function EmptyWishlist() {
  return (
    <div className="h-[40vh] flex flex-col my-auto justify-center leading-loose items-center text-gray-600">
      <h2 className="font-semibold text-xl">Oops!</h2>
      <p>
        Kamu belum memiliki Wishlist... <span>🥲️</span>
      </p>
    </div>
  )
}

export default function List() {
  const list = useWishlist((state) => state.list)
  const totalWishlist = useWishlist((state) => state.totalWishlist())

  return (
    <div className="grid grid-cols-1 gap-7">
      {totalWishlist === 0 ? (
        <EmptyWishlist />
      ) : (
        list.map((v, i) => (
          <WishlistCard id={v.id} img={v.img} price={v.price} title={v.title} />
        ))
      )}
    </div>
  )
}
