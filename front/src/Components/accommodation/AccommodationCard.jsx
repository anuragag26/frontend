import { NavLink } from "react-router-dom"

const AccommodationCard = ({ id, image, title, price, description }) => {
  return (
    <NavLink to={`/accommodation/${id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer">

        <div className="h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>

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

            <span className="text-sm text-green-600 font-medium">
              View Details →
            </span>
          </div>
        </div>

      </div>
    </NavLink>
  )
}

export default AccommodationCard
