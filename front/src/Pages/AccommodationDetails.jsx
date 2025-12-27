import { useParams, useNavigate } from "react-router-dom"

const accommodationData = [
  {
    id: "1",
    title: "Luxury Tent",
    price: 4500,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    description:
      "Our luxury tents offer spacious interiors, premium bedding, private sit-outs, and modern washrooms.",
    features: [
      "King Size Bed",
      "Private Bathroom",
      "Nature View",
      "Breakfast Included",
      "24x7 Support",
    ],
  },
  {
    id: "2",
    title: "Heritage Tent",
    price: 3800,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    description:
      "Inspired by Chanderi’s heritage, these tents blend traditional design with modern comfort.",
    features: [
      "Traditional Decor",
      "Comfort Bedding",
      "Cultural Ambience",
      "Breakfast Included",
    ],
  },
  {
    id: "3",
    title: "Eco Cottage",
    price: 5200,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    description:
      "Eco-friendly cottages built with sustainable materials, offering comfort while staying close to nature.",
    features: [
      "Eco-Friendly Design",
      "Private Veranda",
      "Nature Surroundings",
      "Breakfast Included",
    ],
  },
  {
    id: "4",
    title: "Premium Tent",
    price: 6000,
    image: "https://tinyurl.com/3x96tx7t",
    description:
      "Premium tents offering scenic views, extra space, and enhanced luxury amenities.",
    features: [
      "Scenic View",
      "Premium Interiors",
      "Spacious Living Area",
      "Breakfast Included",
    ],
  },
  {
    id: "5",
    title: "Family Cottage",
    price: 7000,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description:
      "Perfect for families looking for spacious accommodation with privacy and comfort.",
    features: [
      "Multiple Beds",
      "Large Living Area",
      "Family Friendly",
      "Breakfast Included",
    ],
  },
  {
    id: "6",
    title: "Nature View Tent",
    price: 4800,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description:
      "Wake up to breathtaking natural views and peaceful surroundings in our nature view tents.",
    features: [
      "Panoramic Views",
      "Peaceful Ambience",
      "Private Sit-Out",
      "Breakfast Included",
    ],
  },
]

const AccommodationDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const accommodation = accommodationData.find(
    (item) => item.id === id
  )

  if (!accommodation) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Accommodation not found
      </div>
    )
  }

  const handleBookNow = () => {
    navigate(`/booking/${id}`, {
      state: {
        accommodationId: id,
        title: accommodation.title,
        price: accommodation.price,
      },
    })
  }

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={accommodation.image}
            alt={accommodation.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {accommodation.title}
          </h1>

          <p className="text-gray-600 mb-6">
            {accommodation.description}
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-6">
            {accommodation.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <p className="text-2xl font-bold text-green-700 mb-6">
            ₹ {accommodation.price} / night
          </p>

          {/* Book Now Button */}
          <button
            onClick={handleBookNow}
            className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition"
          >
            Book Now
          </button>
        </div>

      </div>
    </section>
  )
}

export default AccommodationDetails
