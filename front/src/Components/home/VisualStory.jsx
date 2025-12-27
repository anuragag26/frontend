const VisualStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* VIDEO */}
        <div className="relative h-105 overflow-hidden rounded-2xl shadow-lg">
          <video
            src="https://www.pexels.com/download/video/2169880/"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* badge */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-medium shadow">
            🎥 Real moments • Natural calm
          </div>
        </div>

        {/* STORY */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            A Stay That Slows You Down
          </h2>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            At Chanderi Eco Retreat, time moves differently.
            Wake up to birdsong, breathe fresh air,
            and let nature shape your day.
          </p>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            From peaceful mornings to warm bonfire nights,
            every experience is designed to reconnect you
            with simplicity and serenity.
          </p>

          <a
            href="/accommodation"
            className="inline-block bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition"
          >
            Explore Your Stay
          </a>
        </div>

      </div>
    </section>
  )
}

export default VisualStory
