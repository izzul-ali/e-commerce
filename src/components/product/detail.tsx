import { useEffect, useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { formatCurrency } from '~/utils/currency'
import useWishlist from '~/store/wishlist'

type ProductDetail = {
  id: number
  img: string
  title: string
  stok: number
  description: string
  price: number
}

export default function Detail({
  id,
  img,
  description,
  stok,
  title,
  price
}: ProductDetail) {
  const saveToWishlist = useWishlist((state) => state.addToWishlist)
  const [save, setSave] = useState<boolean>(false)

  useEffect(() => {
    if (save) {
      saveToWishlist({
        id,
        img,
        price,
        title
      })
    }
  }, [save])
  return (
    <div className="mb-20 lg:mb-28">
      <img
        src={img}
        alt={title}
        className="rounded w-full h-60 object-contain bg-white"
      />
      <div className="sm:px-3 space-y-5 mt-10">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl">{formatCurrency(price)}</h3>

          <button
            aria-label="wishlist"
            onClick={() => setSave((prev) => !prev)}
          >
            {save ? (
              <AiFillHeart className="w-7 h-fit fill-violet-600" />
            ) : (
              <AiOutlineHeart className="w-7 h-fit fill-violet-600" />
            )}
          </button>
        </div>

        <h2 className="text-2xl font-semibold line-clamp-2">{title}</h2>

        <h3 className="">Stok: {stok}</h3>

        <div className="space-y-2">
          <h3 className="border-b border-gray-200">Description</h3>
          <p className="text-sm leading-normal">{description} </p>
        </div>
      </div>
    </div>
  )
}
