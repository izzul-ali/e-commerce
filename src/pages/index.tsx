import Features from '~/components/home/features'
import Hero from '~/components/home/hero'
import ProductList from '~/components/home/product-list'

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <ProductList />
    </div>
  )
}
