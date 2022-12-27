import Link from 'next/link'
import { useProducts } from '~/store/products'
import { prices } from '~/constant/price'
import ErrorProduct from '../fallback/error-product'
import ProductCardLoading from '../fallback/skleton-product-card'
import ProductCard from '../product-card'

export default function ProductList() {
  const { data: products, isLoading, isRefetching, isError } = useProducts()

  return (
    <>
      <div className="mt-10 flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl font-semibold">Special For You</h2>
      </div>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-5 place-content-between">
        {isLoading || isRefetching ? (
          [...Array(6)].map((_, i) => <ProductCardLoading key={i} />)
        ) : isError ? (
          <ErrorProduct />
        ) : (
          products?.map((v, i) => (
            <Link href={`/product/${v.id}`} key={i}>
              <a key={i}>
                <ProductCard
                  img={v.image}
                  price={prices[i]}
                  rating={String(v.rating.rate)}
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
