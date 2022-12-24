import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { useRef } from 'react'
import {
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineMinus,
  AiOutlinePlus
} from 'react-icons/ai'

// TODO: finish the product detail page
export default function Product() {
  const { query } = useRouter()
  const countRef = useRef<HTMLInputElement>(null)

  const handleOrder = () => {
    console.log(countRef.current.value)
  }
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          translateY: 120
        }}
        animate={{
          translateY: 0
        }}
        transition={{
          duration: 0.7,
          type: 'spring',
          bounce: 0.5
        }}
        className="p-3 pb-5 bg-gray-100 h-fit w-full rounded-lg"
      >
        <div>
          <img
            src="/bg.jpg"
            alt=""
            className="rounded w-full h-fit object-contain"
          />
          <div className="flex justify-between items-center mt-5">
            <p className="text-lg font-medium">$423</p>
            <div className="inline-flex gap-x-3 items-center">
              <AiOutlineHeart className="w-5 h-fit" />
              <AiOutlineShareAlt className="w-5 h-fit" />
            </div>
          </div>

          <h2 className="text-lg line-clamp-2 mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h2>

          <div className="space-y-2 mt-5 text-gray-600">
            <h3>Descriptions</h3>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              fugit libero corrupti voluptate, nemo cupiditate quibusdam
              architecto dignissimos. Molestiae, maxime.
            </p>
          </div>

          <div className="text-gray-600 mt-5 flex justify-end items-center gap-x-9">
            <p>Total</p>
            <div className="[&>button]:outline-none flex items-center gap-x-1">
              <button>
                <AiOutlineMinus />
              </button>
              <input
                ref={countRef}
                type="number"
                name="total"
                min={1}
                defaultValue={1}
                className="border border-gray-100 rounded w-10 outline-none text-center bg-inherit"
              />
              <button>
                <AiOutlinePlus />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-x-3 mt-5">
            <button
              type="button"
              className="text-sm font-medium py-2 border border-gray-400 rounded w-full"
            >
              Add To Cart
            </button>
            <button
              type="button"
              onClick={() => handleOrder()}
              className="text-sm font-medium py-2 bg-violet-700 text-white rounded w-full"
            >
              Order
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
