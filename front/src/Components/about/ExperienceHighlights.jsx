const ExperienceHighlights = () => {
  const experiences = [
    {
      title: "Royal Accommodation",
      description:
        "Experience luxury tents beneath the stars with regal comforts and impeccable hospitality.",
      icon: "👑"
    },
    {
      title: "Adventure Activities",
      description:
        "Enjoy thrilling adventure activities including nature walks, outdoor exploration, and curated experiences.",
      icon: "🌄"
    },
    {
      title: "Heritage & Culture",
      description:
        "Discover ancient forts, handloom weaving, cultural performances, and historic landmarks of Chanderi.",
      icon: "🏰"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Experience Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {experiences.map((item, index) => (
            <div key={index} className="group perspective">

              <div className="relative h-64 w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

                {/* FRONT */}
                <div className="absolute inset-0 bg-white border rounded-lg shadow-sm flex flex-col items-center justify-center backface-hidden">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-xl text-gray-800">
                    {item.title}
                  </h3>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 bg-green-700 text-white border rounded-lg shadow-sm p-6 flex items-center justify-center rotate-y-180 backface-hidden">
                  <p className="text-center">
                    {item.description}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default ExperienceHighlights
