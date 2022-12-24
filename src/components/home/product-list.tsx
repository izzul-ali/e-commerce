import Link from 'next/link'
import { useProducts } from '~/store/products'
import ProductCardLoading from '../skletons/skleton-product-card'
import ProductCard from '../product-card'

export default function ProductList() {
  const { data: products, isLoading, isRefetching } = useProducts()

  return (
    <>
      <div className="mt-10 flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl font-medium">Special For You</h2>
      </div>

      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-5 place-content-between">
        {isLoading || isRefetching
          ? [...Array(4)].map((_, i) => <ProductCardLoading key={i} />)
          : products?.map((v, i) => (
              <Link href={`/product/${v.id}`} key={i}>
                <a key={i}>
                  <ProductCard
                    img={v.image}
                    price={String(v.price)}
                    rate={String(v.rating.rate)}
                    title={v.title}
                  />
                </a>
              </Link>
            ))}
      </div>
    </>
  )
}
