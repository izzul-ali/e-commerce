import Link from 'next/link'
import { formatCurrency } from '~/utils/currency'
import { getProducts } from '~/store/products'
import ProductCardLoading from '../fallback/skleton-product-card'
import ErrorProduct from '../fallback/error-product'
import ProductCard from './product-card'

export default function ProductList() {
  const { data, isLoading, isRefetching, isError } = getProducts()

  return (
    <>
      <div className="mt-10 flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl tracking-wide font-semibold">
          Rekomendasi
        </h2>
      </div>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-5 place-content-between">
        {isLoading || isRefetching ? (
          [...Array(6)].map((_, i) => <ProductCardLoading key={i} />)
        ) : isError ? (
          <ErrorProduct />
        ) : (
          data?.products?.map((v, i) => (
            <Link href={`/product/${v.id}`} key={i}>
              <a>
                <ProductCard
                  img={v.images[0]}
                  price={formatCurrency(v.price)}
                  rating={String(v.rating)}
                  title={v.title}
                />
              </a>
            </Link>
          ))
        )}
      </div>
    </>
  )
}
