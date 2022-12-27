import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import useCount from '~/hooks/count'
import { prices } from '~/constant/price'

export default function Order({ stok, id }: { stok?: number; id: number }) {
  const [count, setCount] = useState<number>(1)

  const { handleChange, handleDecrementCount, handleIncrementCount } = useCount(
    setCount,
    stok
  )

  return (
    <div className="sticky w-full bottom-0 right-0 left-0 py-5 z-10 bg-white flex justify-between items-center gap-x-5">
      <div className="text-gray-600 flex justify-center items-center gap-x-5 w-full">
        <p className="font-medium">Total</p>
        <div className="[&>button]:outline-none flex items-center gap-x-1">
          <button disabled={count === 1} onClick={() => handleDecrementCount()}>
            <AiOutlineMinus
              className={`${count === 1 ? 'fill-gray-400' : 'fill-violet-600'}`}
            />
          </button>
          <input
            type="number"
            name="total"
            min={1}
            max={stok}
            value={count}
            onChange={(e) => handleChange(e.target.valueAsNumber)}
            className="border border-gray-100 rounded w-10 outline-none text-center bg-inherit"
          />
          <button
            disabled={count === stok}
            onClick={() => handleIncrementCount()}
          >
            <AiOutlinePlus
              className={`${
                count === stok ? 'fill-gray-400' : 'fill-violet-600'
              }`}
            />
          </button>
        </div>
      </div>

      <button
        type="button"
        className="text-xs outline-none px-2 truncate py-2 bg-violet-600 text-white rounded w-full"
      >
        <p className="font-medium tracking-wide">Masukkan ke Keranjang</p>
        <p className="truncate">
          Rp <span className="tracking-wide">{prices[id - 1]}</span>
        </p>
      </button>
    </div>
  )
}
