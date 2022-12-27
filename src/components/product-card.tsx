import { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

type Product = {
  img: string
  title: string
  rating: string
  price: string
}

export default function ProductCard({ img, price, rating, title }: Product) {
  const [favorite, setFavorite] = useState<boolean>(false)

  return (
    <div className="h-[19rem] sm:h-[20rem] shadow-md w-full border border-gray-300 hover:border-violet-500 hover:-translate-y-1 transition duration-300 rounded-md overflow-hidden">
      <img
        src={img}
        alt={title}
        className="w-full h-44 object-contain rounded-t py-2 px-1"
      />
      <div className="p-2 space-y-3">
        <h3 className="text-sm sm:text-base font-medium line-clamp-2">
          {title}
        </h3>
        <p className="text-xs  px-2 py-1 bg-gray-100 w-fit rounded-md">
          <span>⭐️</span> {rating}
        </p>
        <div className="flex justify-between items-center px-2">
          <p className="font-medium text-sm">
            Rp <span className="tracking-wide">{price}</span>
          </p>
          <button
            onClick={() => setFavorite((prev) => !prev)}
            className="outline-none"
          >
            {favorite ? (
              <AiFillHeart className="w-5 h-fit fill-red-600" />
            ) : (
              <AiOutlineHeart className="w-5 h-fit" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
