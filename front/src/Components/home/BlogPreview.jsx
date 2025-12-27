import BlogCard from "./BlogCard"
import { NavLink } from "react-router-dom"

const BlogPreview = () => {
  const blogs = [
    {
      id: 1,
      title: "Top Places to Visit in Chanderi",
      excerpt: "Discover historic forts, temples, and hidden gems that make Chanderi a must-visit destination.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    {
      id: 2,
      title: "Experience Luxury Tent Living",
      excerpt: "Learn how eco-friendly luxury tents redefine comfort while staying close to nature.",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    {
      id: 3,
      title: "Culture, Food & Heritage of Chanderi",
      excerpt: "Explore local cuisine, handloom weaving, and cultural traditions of historic Chanderi.",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Travel Stories & Blogs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get travel tips, local insights, and inspiration for your next
            visit to Chanderi.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <NavLink
            to="/blog"
            className="inline-block border border-green-600 text-green-600 px-6 py-3 rounded-md hover:bg-green-600 hover:text-white transition"
          >
            View All Blogs
          </NavLink>
        </div>

      </div>
    </section>
  )
}

export default BlogPreview
