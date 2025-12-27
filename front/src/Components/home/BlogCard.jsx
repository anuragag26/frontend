import { NavLink } from "react-router-dom"

const BlogCard = ({ image, title, excerpt, id }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">

      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {excerpt}
        </p>

        <NavLink
          to={`/blog/${id}`}
          className="text-green-600 font-medium hover:underline"
        >
          Read More →
        </NavLink>
      </div>

    </div>
  )
}

export default BlogCard
