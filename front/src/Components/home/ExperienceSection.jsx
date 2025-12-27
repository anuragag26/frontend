const ExperiencesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.pexels.com/download/video/4010941/"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Experiences at Chanderi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              Nature Immersion
            </h3>
            <p className="text-white/80">
              Wake up to birdsong, fresh air, and scenic views that calm the mind.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              Heritage Walks
            </h3>
            <p className="text-white/80">
              Explore ancient forts, temples, and handloom traditions of Chanderi.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              Bonfire Evenings
            </h3>
            <p className="text-white/80">
              Spend peaceful evenings under the stars with warmth and stories.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ExperiencesSection
