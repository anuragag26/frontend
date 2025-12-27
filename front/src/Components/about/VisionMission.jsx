import LiquidChromeBackground from "../ui/LiquidChromeBackground"

const VisionMission = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Liquid Chrome Background */}
      <LiquidChromeBackground />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center text-gray-800 px-6">
        <h2 className="text-3xl font-bold mb-6">
          Our Vision & Mission
        </h2>

        <p className="text-lg mb-6">
          At Chanderi Eco Retreat, our vision is to create a space where
          nature, heritage, and comfort come together in harmony —
          offering each guest a mindful and meaningful experience.
        </p>

        <p className="text-lg">
          Our mission is to promote sustainable travel, uplift local
          culture, and ensure that every stay is both memorable and enriching.
        </p>
      </div>
    </section>
  )
}

export default VisionMission
