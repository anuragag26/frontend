import { useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/testimonials"
        )
        setTestimonials(res.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchTestimonials()
  }, [])

  return (
    <section className="py-20 bg-green-800 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          What Our Guests Say
        </motion.h2>

        {testimonials.length === 0 ? (
          <p className="text-white/80">No testimonials yet</p>
        ) : (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg h-full mx-2">

                  {/* Star Rating */}
                  <div className="text-yellow-400 mb-3 text-lg">
                    {"★".repeat(item.rating)}
                    {"☆".repeat(5 - item.rating)}
                  </div>

                  <p className="italic text-gray-600 mb-6">
                    “{item.review}”
                  </p>

                  <div className="font-semibold text-green-700">
                    {item.name}
                  </div>

                  <div className="text-sm text-gray-500">
                    {item.location}
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

      </div>
    </section>
  )
}

export default Testimonials
