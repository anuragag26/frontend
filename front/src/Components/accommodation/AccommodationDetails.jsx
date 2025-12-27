// import { useParams } from "react-router-dom"

// const accommodationData = [
//   {
//     id: "1",
//     title: "Luxury Tent",
//     price: 4500,
//     image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
//     description:
//       "Our luxury tents offer spacious interiors, premium bedding, private sit-outs, and modern washrooms.",
//     features: [
//       "King Size Bed",
//       "Private Bathroom",
//       "Nature View",
//       "Breakfast Included",
//       "24x7 Support"
//     ]
//   },
//   {
//     id: "2",
//     title: "Heritage Tent",
//     price: 3800,
//     image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
//     description:
//       "Inspired by Chanderi’s heritage, these tents blend traditional design with modern comfort.",
//     features: [
//       "Traditional Decor",
//       "Comfort Bedding",
//       "Cultural Ambience",
//       "Breakfast Included"
//     ]
//   }
// ]

// const AccommodationDetails = () => {
//   const { id } = useParams()
//   const accommodation = accommodationData.find(item => item.id === id.toString())

//   if (!accommodation) {
//     return <div className="text-center py-20">Accommodation not found</div>
//   }

//   return (
//     <section className="py-16 bg-gray-50 min-h-screen">
//       <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

//         {/* Image */}
//         <div className="rounded-xl overflow-hidden shadow-lg">
//           <img
//             src={accommodation.image}
//             alt={accommodation.title}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Content */}
//         <div>
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             {accommodation.title}
//           </h1>

//           <p className="text-gray-600 mb-6 leading-relaxed">
//             {accommodation.description}
//           </p>

//           <h3 className="text-lg font-semibold mb-3">
//             Features
//           </h3>

//           <ul className="list-disc list-inside text-gray-600 mb-6">
//             {accommodation.features.map((feature, index) => (
//               <li key={index}>{feature}</li>
//             ))}
//           </ul>

//           <p className="text-2xl font-bold text-green-700 mb-6">
//             ₹ {accommodation.price} / night
//           </p>

//           <a
//             href="https://digibooking.in"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition"
//           >
//             Book Now
//           </a>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default AccommodationDetails



const AccommodationDetails = () => {
  return (
    <div style={{ padding: "100px", fontSize: "30px" }}>
      Accommodation Details Page Works ✅
    </div>
  )
}

export default AccommodationDetails
