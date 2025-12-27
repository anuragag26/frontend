import { NavLink } from "react-router-dom"

const BlogCard = ({ image, title, excerpt, id }) => {
  return (
    <NavLink
      to={`/blog/${id}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-green-700 transition">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-5 leading-relaxed">
          {excerpt}
        </p>

        <span className="inline-flex items-center text-green-600 font-medium">
          Read More
          <span className="ml-1 transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </NavLink>
  )
}

export default BlogCard
