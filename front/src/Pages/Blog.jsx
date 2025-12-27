import BlogList from "../Components/blog/BlogList";

const Blog = () => {
  const blogs = [
    {
      id: "1",
      title: "Top Places to Visit in Chanderi",
      excerpt:
        "Discover historic forts, temples, and hidden gems that make Chanderi special.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      content:
        "Chanderi is known for its ancient forts, temples, and handloom heritage...",
    },
    {
      id: "2",
      title: "Luxury Tent Living Experience",
      excerpt:
        "Experience modern comfort blended with nature through luxury tents.",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      content:
        "Luxury tent living offers a unique combination of comfort and eco-tourism...",
    },
    {
      id: "3",
      title: "Culture & Heritage of Chanderi",
      excerpt: "Explore Chanderi’s traditions, crafts, and cultural history.",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
      content:
        "Chanderi has a rich cultural background known for handloom weaving...",
    },
    {
      id: 4,
      title: "A Day in the Life at Chanderi Eco Retreat",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      description:
        "Experience a slow, peaceful day surrounded by nature, heritage walks, and mindful living at Chanderi Eco Retreat.",
    },
    {
      id: 5,
      title: "Top 5 Reasons to Choose an Eco Retreat",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      description:
        "Discover why eco retreats are becoming the preferred getaway for travelers seeking calm, sustainability, and comfort.",
    },
    {
      id: 6,
      title: "Exploring Chanderi: Culture, Craft & History",
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
      description:
        "Dive into the rich heritage of Chanderi, from its forts and temples to traditional handloom weaving.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Blogs & Stories
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read travel stories, tips, and insights about Chanderi Eco Retreat.
          </p>
        </div>

        <BlogList blogs={blogs} />
      </div>
    </section>
  );
};

export default Blog;
