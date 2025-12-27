import { useState } from "react"
import GalleryGrid from "../Components/gallery/GalleryGrid"
import GalleryModal from "../Components/gallery/GalleryModal"

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    "https://tinyurl.com/3sp864av",
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://chanderiecoretreat.com/wp-content/uploads/2023/10/DSC4809.jpg",
    "https://chanderiecoretreat.com/wp-content/uploads/2023/10/DSC_9747.jpg",
    "https://chanderiecoretreat.com/wp-content/uploads/2023/10/DSC5352.jpg",
    "https://chanderiecoretreat.com/wp-content/uploads/2023/08/GJK_2062-768x660.jpg",
    "https://chanderiecoretreat.com/wp-content/uploads/2023/05/IMG_8383.jpg",
    "https://chanderiecoretreat.com/wp-content/uploads/2023/09/Group-15-min-768x660.png",
    "https://chanderiecoretreat.com/wp-content/uploads/2023/10/DSC4811.jpg",
    "https://chanderiecoretreat.com/wp-content/uploads/2023/10/DSC4809.jpg",
    "https://chanderiecoretreat.com/wp-content/uploads/2023/05/Untitled-design-1.png",
    "https://chanderiecoretreat.com/wp-content/uploads/2023/05/Jal-Mahotsav-Hanuwantiya-26.jpg",
    "https://chanderiecoretreat.com/wp-content/uploads/2023/10/DSC3520.jpg",
    "https://chanderiecoretreat.com/wp-content/uploads/2023/10/DSC4834.jpg",
    "https://chanderiecoretreat.com/wp-content/uploads/2023/10/Guide-to-Paramotor-Buying-768x660.jpg",
    "https://chanderiecoretreat.com/wp-content/uploads/2023/10/DSC4826.jpg",
    "https://chanderiecoretreat.com/wp-content/uploads/2023/10/DSC5236.jpg",
    "https://chanderiecoretreat.com/wp-content/uploads/2023/10/DSC_1708.jpg",
    "https://chanderiecoretreat.com/wp-content/uploads/2023/10/DSC_3130.jpg",
    "https://chanderiecoretreat.com/wp-content/uploads/2023/08/profile_banner-768x660.jpg",
    "https://chanderiecoretreat.com/wp-content/uploads/2023/08/1553085958_img_20171001_094406_hdr_01-576x1024-1.jpeg",
    "https://chanderiecoretreat.com/wp-content/uploads/2023/05/28.jpg"
  ]

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore moments, experiences, and memories from Chanderi Eco Retreat.
          </p>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid
          images={images}
          onImageClick={setSelectedImage}
        />

        {/* Lightbox Modal */}
        <GalleryModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />

      </div>
    </section>
  )
}

export default Gallery
