const ExperienceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
      
      <div className="text-4xl mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>

    </div>
  )
}

export default ExperienceCard
