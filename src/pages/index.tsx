import ScrollToTop from '~/components/home/btn-scroll'
import Category from '~/components/home/category'
import Hero from '~/components/home/hero'
import ProductList from '~/components/home/product-list'
import SetTitle from '~/components/set-title'

export default function Home() {
  return (
    <>
      <SetTitle title="Home | Ecommerce" />
      <div className="relative">
        <Hero />
        <Category />
        <ProductList />
        <ScrollToTop />
      </div>
    </>
  )
}
