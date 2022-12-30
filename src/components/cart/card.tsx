import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { formatCurrency } from '~/utils/currency'
import { useEffect, useState } from 'react'
import useCart from '~/store/cart'
import useCount from '~/hooks/useCount'
import Link from 'next/link'

type CartDetail = {
  id: number
  img: string
  title: string
  price: number
  count: number
  stok: number
  isSelected: boolean
}

export default function Card({
  id,
  count,
  stok,
  img,
  isSelected,
  price,
  title
}: CartDetail) {
  const { deleteFromCarts, updateProductCount, setSelectedProduct } = useCart()

  const [newCount, setNewCount] = useState<number>(count)

  const { handleDecrementCount, handleIncrementCount, handleInputCount } =
    useCount(setNewCount)

  useEffect(() => {
    updateProductCount(id, newCount)
  }, [newCount])

  return (
    <div className="flex justify-between gap-x-4 h-32 py-2 px-1 rounded shadow-md border-t border-gray-200">
      <Link href={`/product/${id}`}>
        <a className="w-1/2 h-full">
          <img src={img} alt={title} className="w-full h-full object-contain" />
        </a>
      </Link>

      <div className="w-full flex flex-col gap-y-1 justify-between pr-2">
        <Link href={`/product/${id}`}>
          <a>
            <h3 className="text-base font-semibold line-clamp-2 leading-snug">
              {title}
            </h3>
          </a>
        </Link>

        <p className="flex-1 text-sm text-gray-600">{formatCurrency(price)}</p>

        <div className="flex justify-between items-center gap-x-5">
          <input
            type="checkbox"
            name="select"
            checked={isSelected}
            onChange={(e) => {
              setSelectedProduct(id, e.target.checked)
            }}
            className="w-4 h-4 accent-violet-600"
          />

          <div className="sm:flex-1 flex items-center justify-center gap-x-2">
            <button
              onClick={() => deleteFromCarts(id)}
              className="bg-gray-50 rounded px-2 py-[3px]"
            >
              <BsTrash className="fill-gray-600" />
            </button>
            <div className="w-fit text-gray-600 border border-gray-300 rounded flex justify-center items-center gap-x-5 px-2">
              <div className="flex items-center gap-x-1">
                <button
                  disabled={newCount <= 1}
                  onClick={() => handleDecrementCount()}
                >
                  <AiOutlineMinus
                    className={`${
                      newCount === 1 ? 'fill-gray-600' : 'fill-violet-700'
                    }`}
                  />
                </button>
                <input
                  type="number"
                  name="total"
                  min={1}
                  max={stok}
                  value={newCount}
                  onChange={(e) =>
                    handleInputCount(e.target.valueAsNumber, stok)
                  }
                  className="rounded w-10 text-center bg-inherit"
                />
                <button
                  disabled={newCount >= stok}
                  onClick={() => {
                    handleIncrementCount()
                  }}
                >
                  <AiOutlinePlus
                    className={`${
                      newCount === stok ? 'fill-gray-600' : 'fill-violet-700'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
