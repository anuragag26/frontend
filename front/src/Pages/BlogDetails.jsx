import { useParams } from "react-router-dom";
import blogs from "../data/blog";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Blog not found
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-100 object-cover rounded-xl shadow-md mb-8"
        />

        <h1 className="text-4xl font-bold mb-4">
          {blog.title}
        </h1>

        <div className="text-sm text-gray-500 mb-6">
          {blog.author} • {blog.date}
        </div>

        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {blog.content}
        </p>

      </div>
    </section>
  );
};

export default BlogDetails;
