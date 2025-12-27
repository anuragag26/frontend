import AccommodationCard from "./AccommodationCard"
import { NavLink } from "react-router-dom"

const AccommodationPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Stay With Comfort & Nature
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience luxury tent accommodation designed to blend modern
            comfort with the serenity of nature.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <AccommodationCard
            image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            title="Luxury Tent"
            price="4500"
            description="Spacious luxury tents with premium interiors and modern amenities."
          />

          <AccommodationCard
            image="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            title="Heritage Tent"
            price="3800"
            description="Inspired by local architecture and heritage craftsmanship."
          />

          <AccommodationCard
            image="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
            title="Eco Cottage"
            price="5200"
            description="Eco-friendly cottages offering comfort with sustainability."
          />

        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <NavLink
            to="/accommodation"
            className="inline-block border border-green-600 text-green-600 px-6 py-3 rounded-md hover:bg-green-600 hover:text-white transition"
          >
            View All Accommodations
          </NavLink>
        </div>

      </div>
    </section>
  )
}

export default AccommodationPreview
