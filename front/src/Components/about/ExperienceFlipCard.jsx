const ExperienceFlipCard = ({ title, icon, description }) => {
  return (
    <div className="group perspective">
      <div className="relative h-64 w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

        {/* Front Side */}
        <div className="absolute inset-0 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center backface-hidden">
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-green-700 text-white rounded-xl shadow-lg p-6 flex items-center justify-center rotate-y-180 backface-hidden">
          <p className="text-center">{description}</p>
        </div>

      </div>
    </div>
  )
}

export default ExperienceFlipCard
