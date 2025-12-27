const GalleryModal = ({ image, onClose }) => {
  if (!image) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl font-bold"
      >
        ✕
      </button>

      {/* Image */}
      <img
        src={image}
        alt="Gallery Preview"
        className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
      />
    </div>
  )
}

export default GalleryModal
