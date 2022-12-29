import dynamic from 'next/dynamic'
import { AnimatePresence, motion } from 'framer-motion'

const Checkout = dynamic(() => import('~/components/cart/checkout'), {
  ssr: false
})
const CardList = dynamic(() => import('~/components/cart/list'), {
  ssr: false
})

export default function Cart() {
  return (
    <AnimatePresence>
      <motion.div
        key="cart"
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
        className="min-h-[50vh] bg-white rounded-lg py-5 mb-12"
      >
        <h2 className="text-center font-bold text-2xl mb-20">Keranjang</h2>
        <CardList />
      </motion.div>
      <Checkout />
    </AnimatePresence>
  )
}
