import GalleryGrid from "./GalleryGrid"
import { NavLink } from "react-router-dom"

const GalleryPreview = () => {
  const images = [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    "https://tinyurl.com/3sp864av",
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Explore Our Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into the experiences, nature, and heritage that await you
            at Chanderi Eco Retreat.
          </p>
        </div>

        {/* Images */}
        <GalleryGrid images={images} />

        {/* View More */}
        <div className="text-center mt-10">
          <NavLink
            to="/gallery"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
          >
            View Full Gallery
          </NavLink>
        </div>

      </div>
    </section>
  )
}

export default GalleryPreview
