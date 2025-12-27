import { useParams } from "react-router-dom"

const blogData = [
  {
    id: "1",
    title: "Top Places to Visit in Chanderi",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    content:
      "Chanderi is famous for its forts, temples, and scenic beauty. Visitors can explore Chanderi Fort, Koshak Mahal, and the vibrant local markets."
  },
  {
    id: "2",
    title: "Luxury Tent Living Experience",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    content:
      "Luxury tent living combines comfort and nature. These tents offer premium bedding, scenic views, and eco-friendly living."
  },
  {
    id: "3",
    title: "Culture & Heritage of Chanderi",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    content:
      "Chanderi is renowned for its handloom sarees, cultural festivals, and historic architecture that dates back centuries."
  }
]

const BlogDetails = () => {
  const { id } = useParams()

  const blog = blogData.find(item => item.id === id)

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Blog not found
      </div>
    )
  }

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          {blog.title}
        </h1>

        <div className="rounded-lg overflow-hidden mb-6">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-80 object-cover"
          />
        </div>

        <p className="text-gray-700 leading-relaxed text-lg">
          {blog.content}
        </p>

      </div>
    </section>
  )
}

export default BlogDetails
