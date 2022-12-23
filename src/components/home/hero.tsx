import Carousel, { Settings } from 'react-slick'
import HeroCard from '../hero-card'
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
  return (
    <div className="w-full h-40 sm:h-52 bg-white px-4 hover:shadow-xl shadow-lg rounded-lg flex justify-center items-center">
      <Carousel {...carouselSetting} className="h-fit w-full">
        {[...Array(5)].map((_, i) => (
          <HeroCard key={i} />
        ))}
      </Carousel>
    </div>
  )
}
