import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'
import { prices } from '~/constant/price'

type ProductDetail = {
  id: number
  img: string
  title: string
  stok: number
  description: string
}

export default function Detail({
  img,
  description,
  id,
  stok,
  title
}: ProductDetail) {
  return (
    <div className="mb-20">
      <img
        src={img}
        alt={title}
        className="rounded w-full h-60 object-contain"
      />
      <div className="sm:px-3 space-y-5 mt-10">
        <div className="flex justify-between items-center">
          <p className="text-xl font-medium">
            Rp <span className="tracking-wide">{prices[id - 1]}</span>
          </p>
          <div className="inline-flex gap-x-3 items-center">
            <AiOutlineHeart className="w-6 h-fit" />
            <AiOutlineShareAlt className="w-6 h-fit" />
          </div>
        </div>

        <h2 className="text-2xl font-semibold line-clamp-2">{title}</h2>

        <p className="text-gray-700">Stok: {stok}</p>

        <div className="space-y-2">
          <h3 className="text-gray-800">Description</h3>
          <p className="text-sm leading-normal text-gray-700">{description} </p>
        </div>
      </div>
    </div>
  )
}
