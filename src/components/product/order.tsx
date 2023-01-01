import { Dispatch, SetStateAction, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import { BsCartCheckFill } from 'react-icons/bs'
import { formatCurrency } from '~/utils/currency'
import { AnimatePresence, motion } from 'framer-motion'
import useCount from '~/hooks/useCount'
import useCart from '~/store/cart'

type TOrder = {
  id: number
  img: string
  title: string
  stok: number
  price: number
}

export default function Order({ id, img, title, stok, price }: TOrder) {
  const [count, setCount] = useState<number>(1)
  const [notif, setNotif] = useState<boolean>(false)

  const {
    calculatePrice,
    handleInputCount,
    handleDecrementCount,
    handleIncrementCount
  } = useCount(setCount)

  const { appendToCarts } = useCart()

  return (
    <div className="fixed bottom-0 right-0 left-0 md:right-20 lg:right-40 md:left-20 lg:left-40 sm:right-10 sm:left-10 py-5 z-10 bg-white">
      {notif && <NotifAddToCart closeNotif={setNotif} />}
      <div className="w-full flex justify-between items-center gap-x-1 px-3">
        <div className="text-gray-600 flex justify-center items-center gap-x-3 w-full md:text-lg lg:text-xl">
          <p className="font-medium">Total</p>
          <div className="flex items-center gap-x-1">
            <button
              disabled={count === 1}
              onClick={() => handleDecrementCount()}
            >
              <AiOutlineMinus
                className={`${
                  count === 1 ? 'fill-gray-400' : 'fill-violet-700'
                }`}
              />
            </button>
            <input
              type="number"
              name="total"
              min={1}
              max={stok}
              value={count}
              onChange={(e) => handleInputCount(e.target.valueAsNumber, stok)}
              className="border border-gray-100 rounded w-10 text-center bg-inherit"
            />
            <button
              disabled={count === stok}
              onClick={() => handleIncrementCount()}
            >
              <AiOutlinePlus
                className={`${
                  count === stok ? 'fill-gray-400' : 'fill-violet-700'
                }`}
              />
            </button>
          </div>
        </div>

        <button
          aria-label="btn-cart"
          type="button"
          onClick={() => {
            appendToCarts({
              id: id,
              title: title,
              img: img,
              stok: stok,
              count: count,
              isSelected: true,
              price: price,
              total: calculatePrice(price, count)
            })
            setNotif(true)
          }}
          className="text-xs md:text-sm px-2 truncate py-2 bg-violet-700 text-white rounded w-full"
        >
          <p className="font-medium tracking-wide">Masukkan ke Keranjang</p>
          <p className="truncate">
            {formatCurrency(calculatePrice(price, count))}
          </p>
        </button>
      </div>
    </div>
  )
}

function NotifAddToCart({
  closeNotif
}: {
  closeNotif: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <AnimatePresence>
      <motion.div
        key="notif-order"
        initial={{
          translateY: 30,
          opacity: 0
        }}
        animate={{
          translateY: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.8,
          type: 'spring',
          bounce: 0.5
        }}
        className="absolute -top-12 left-0 right-0 m-auto w-fit py-2 px-5 mb-3 rounded bg-green-500 text-white text-center"
      >
        <button
          onClick={() => closeNotif(false)}
          className="absolute -right-2 -top-2 p-1 bg-gray-500 rounded-full"
        >
          <AiOutlineClose className="w-3 h-fit" />
        </button>
        <p className="flex justify-center items-center text-sm font-light gap-x-2">
          <span>
            <BsCartCheckFill className="fill-green-200" />
          </span>{' '}
          Produk ditambahkan ke Keranjang
        </p>
      </motion.div>
    </AnimatePresence>
  )
}
