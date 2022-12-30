import { AnimatePresence, motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import SetTitle from '~/components/set-title'

const List = dynamic(() => import('~/components/wishlist-list'), {
  ssr: false
})

export default function WishlistPage() {
  return (
    <>
      <SetTitle title="Wishlist | Ecommerce" />

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
          <h2 className="text-center font-bold text-2xl mb-20">Wishlist</h2>
          <List />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
