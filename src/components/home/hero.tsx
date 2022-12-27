import Carousel, { Settings } from 'react-slick'
import { useProducts } from '~/store/products'
import HeroCard from '../hero-card'
import HeroCardLoading from '../fallback/skleton-hero-card'
import '~/slick-carousel/slick/slick.css'
import '~/slick-carousel/slick/slick-theme.css'

const carouselSetting: Settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 600,
  pauseOnHover: true,
  pauseOnFocus: true,
  arrows: false
}

export default function Hero() {
  const { data: products, isLoading, isRefetching, isError } = useProducts()

  return (
    <div className="w-full h-40 sm:h-52 bg-white px-4 hover:shadow-xl shadow-lg rounded-lg flex justify-center items-center">
      {isLoading || isRefetching || isError ? (
        <HeroCardLoading />
      ) : (
        <Carousel {...carouselSetting} className="h-fit w-full">
          {products?.slice(8, 12).map((v, i) => (
            <HeroCard key={i} img={v.image} title={v.title} />
          ))}
        </Carousel>
      )}
    </div>
  )
}
