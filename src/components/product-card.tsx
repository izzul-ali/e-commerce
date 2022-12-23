import { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

type Product = {
  img: string
  title: string
  star: string
  price: string
}

export default function ProductCard() {
  const [favorite, setFavorite] = useState<boolean>(false)

  return (
    <div className="h-[19rem] sm:h-[20rem] shadow-md w-full border border-gray-300 hover:border-violet-500 transition duration-300 rounded-md overflow-hidden">
      <img
        src="/bg.jpg"
        alt="ecommerce"
        className="w-full h-44 object-fill rounded-t"
      />
      <div className="p-2 space-y-3">
        <h3 className="text-sm sm:text-base font-medium line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          eos!
        </h3>
        <p className="text-xs  px-2 py-1 bg-gray-100 w-fit rounded-md">
          <span>⭐️</span> 4.5
        </p>
        <div className="flex justify-between items-center px-2">
          <p className="font-medium">$325</p>
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
