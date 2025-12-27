import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

const AboutPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <motion.img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
          alt="Resort"
          className="rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            About Chanderi Eco Retreat
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Nestled in the heart of heritage town Chanderi, our eco retreat
            offers a perfect blend of comfort, culture, and nature.
          </p>

          <NavLink
            to="/about"
            className="text-green-700 font-semibold hover:underline"
          >
            Read More →
          </NavLink>
        </motion.div>

      </div>
    </section>
  )
}

export default AboutPreview
