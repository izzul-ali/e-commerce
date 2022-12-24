import { AnimatePresence, motion } from 'framer-motion'

export default function Cart() {
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
      >
        <div className="h-screen w-full bg-white rounded-lg"></div>
      </motion.div>
    </AnimatePresence>
  )
}
