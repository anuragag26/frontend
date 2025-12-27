import { useEffect, useRef, useState } from "react";
import AccommodationList from "../Components/accommodation/AccommodationList";

const Accommodation = () => {
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // 🔥 Filter & Sort state
  const [sortOrder, setSortOrder] = useState("default");
  const [maxPrice, setMaxPrice] = useState(8000);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const accommodations = [
    {
      id: "1",
      title: "Luxury Tent",
      price: 4500,
      description: "Spacious luxury tents with premium interiors.",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    {
      id: "2",
      title: "Heritage Tent",
      price: 3800,
      description: "Inspired by local architecture and heritage craftsmanship.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    {
      id: "3",
      title: "Eco Cottage",
      price: 5200,
      description:
        "Eco-friendly cottages offering comfort with sustainability.",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    },
    {
      id: "4",
      title: "Premium Tent",
      price: 6000,
      description:
        "Premium stay option with scenic views and enhanced comfort.",
      image: "https://tinyurl.com/3x96tx7t",
    },
    {
      id: "5",
      title: "Family Cottage",
      price: 7000,
      description: "Perfect for families looking for space and privacy.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: "6",
      title: "Nature View Tent",
      price: 4800,
      description: "Wake up to serene views and peaceful surroundings.",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
  ];

  // 🔥 Apply filter + sorting
  const filteredAccommodations = accommodations
    .filter((item) => item.price <= maxPrice)
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Our Accommodations
          </h1>
          <p
            className={`text-lg md:text-xl text-white/90 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Luxury stays designed to bring you closer to nature.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT WITH SIDEBAR */}
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* SIDEBAR FILTER */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6 space-y-8">

              <h3 className="text-xl font-semibold">
                Filter Stays
              </h3>

              {/* PRICE FILTER */}
              <div>
                <p className="text-sm text-gray-500 mb-2">
                  Price per night
                </p>

                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">₹3000</span>

                  <input
                    type="range"
                    min="3000"
                    max="8000"
                    step="500"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full accent-green-700"
                  />

                  <span className="text-sm font-semibold text-green-700">
                    ₹{maxPrice}
                  </span>
                </div>
              </div>

              {/* SORT */}
              <div>
                <p className="text-sm text-gray-500 mb-2">
                  Sort by
                </p>

                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="
                    w-full bg-gray-50 border rounded-xl px-4 py-2
                    focus:outline-none focus:ring-2 focus:ring-green-600
                  "
                >
                  <option value="default">Recommended</option>
                  <option value="low">Price: Low → High</option>
                  <option value="high">Price: High → Low</option>
                </select>
              </div>

              {/* RESET */}
              <button
                onClick={() => {
                  setMaxPrice(8000);
                  setSortOrder("default");
                }}
                className="w-full text-sm font-medium text-gray-500 hover:text-green-700 transition"
              >
                Reset filters
              </button>

            </div>
          </aside>

          {/* ACCOMMODATION LIST */}
          <div className="lg:col-span-3">
            <AccommodationList accommodations={filteredAccommodations} />
          </div>

        </div>
      </section>
    </>
  );
};

export default Accommodation;
