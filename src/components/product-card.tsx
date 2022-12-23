import { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

export default function ProductCard() {
  const [favorite, setFavorite] = useState<boolean>(false)

  return (
    <div className="h-[19rem] shadow-md w-full border border-gray-300 hover:border-violet-500 transition duration-300 rounded-md overflow-hidden">
      <img
        src="/bg.jpg"
        alt="ecommerce"
        className="w-full h-44 object-fill rounded-t"
      />
      <div className="p-2 space-y-3">
        <h1 className="text-sm font-bold ">Electronical Magnetium Genric</h1>
        <p className="text-xs px-2 py-1 bg-gray-100 w-fit rounded-md">
          <span>⭐️</span> 4.5
        </p>
        <div className="flex justify-between items-center">
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
