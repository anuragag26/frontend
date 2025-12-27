const AccommodationCard = ({ image, title, price, description }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">

      {/* Image */}
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-3">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-green-700 font-bold">
            ₹ {price} / night
          </span>

          <a
            href="https://digibooking.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            Book Now
          </a>
        </div>
      </div>

    </div>
  )
}

export default AccommodationCard
