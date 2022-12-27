import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import Detail from '~/components/product/detail'
import Order from '~/components/product/order'
import { useProductById } from '~/store/products'
import LoadingProductDetail from '~/components/fallback/skleton-product-detail'

export default function Product() {
  const { query } = useRouter()
  const id = query.id as string

  const { data: product, isLoading, isRefetching } = useProductById(id)

  return (
    <div className="max-w-xl mx-auto relative">
      <AnimatePresence>
        <motion.div
          key={'product-detail'}
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
          className="p-3 bg-gray-50 h-fit w-full rounded-lg"
        >
          {isLoading || isRefetching ? (
            <LoadingProductDetail />
          ) : !product ? (
            <LoadingProductDetail
              message={!product ? 'Produk tidak ditemukan' : null}
            />
          ) : (
            <Detail
              description={product.description}
              img={product.image}
              id={Number(id)}
              stok={product.rating.count}
              title={product.title}
            />
          )}
        </motion.div>
        <Order id={Number(id)} stok={product?.rating.count} />
      </AnimatePresence>
    </div>
  )
}
