import { NavLink } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"

const slides = [
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
]

const Hero = () => {
  return (
    <section className="relative h-[90vh]">

      {/* Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[90vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 flex items-center z-10">
        <div className="max-w-4xl mx-auto px-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Experience Nature at Chanderi Eco Retreat
          </h1>

          <p className="text-lg mb-6">
            Luxury tents surrounded by heritage, hills, and tranquility.
          </p>

          <NavLink
            to="/accommodation"
            className="inline-block bg-green-600 px-8 py-3 rounded-md text-white hover:bg-green-700 transition"
          >
            Explore Stays
          </NavLink>
        </div>
      </div>

    </section>
  )
}

export default Hero
