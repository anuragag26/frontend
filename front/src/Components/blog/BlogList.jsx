import BlogCard from "./BlogCard"

const BlogList = ({ blogs = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {blogs.map(blog => (
        <BlogCard
          key={blog.id}
          id={blog.id}
          title={blog.title}
          excerpt={blog.excerpt}
          image={blog.image}
        />
      ))}
    </div>
  )
}

export default BlogList
