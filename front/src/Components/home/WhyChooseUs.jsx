import { motion } from "framer-motion"

const features = [
  {
    icon: "🌿",
    title: "Eco-Friendly Living",
    desc: "Sustainable stays designed to live in harmony with nature."
  },
  {
    icon: "🏕",
    title: "Luxury Tents",
    desc: "Premium tents with modern amenities and scenic views."
  },
  {
    icon: "🏰",
    title: "Heritage Location",
    desc: "Located near historic forts and temples of Chanderi."
  },
  {
    icon: "🍽",
    title: "Local Cuisine",
    desc: "Authentic local flavors prepared with fresh ingredients."
  }
]

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Why Choose Chanderi Eco Retreat
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-6 border rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs
