const GalleryGrid = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((img, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg shadow-md cursor-pointer"
          onClick={() => onImageClick(img)}
        >
          <img
            src={img}
            alt={`gallery-${index}`}
            className="w-full h-full object-cover hover:scale-110 transition duration-300"
          />
        </div>
      ))}
    </div>
  )
}

export default GalleryGrid
