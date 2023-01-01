import Link from 'next/link'
import Carousel, { Settings } from 'react-slick'
import { getProducts } from '~/store/products'
import HeroCardLoading from '../fallback/skleton-hero-card'
import HeroCard from './hero-card'
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
  const { data, isLoading, isRefetching, isError } = getProducts()

  return (
    <div className="w-full h-40 sm:h-52 bg-white px-4 hover:shadow-xl shadow-lg rounded-lg flex justify-center items-center">
      {isLoading || isRefetching || isError ? (
        <HeroCardLoading />
      ) : (
        <Carousel {...carouselSetting} className="h-fit w-full">
          {data?.products?.slice(8, 12).map((v, i) => (
            <Link href={`/product/${v.id}`} key={i}>
              <a>
                <HeroCard img={v.images[0]} title={v.title} />
              </a>
            </Link>
          ))}
        </Carousel>
      )}
    </div>
  )
}
