import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // data coming from AccommodationDetails
  const { title, price } = location.state || {};

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return Math.max((end - start) / (1000 * 60 * 60 * 24), 0);
  };

  const nights = calculateNights();
  const totalPrice = nights * (price || 0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates");
      return;
    }

    const bookingData = {
      accommodationId: id,
      name,
      email,
      checkIn,
      checkOut,
      guests,
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/bookings",
        bookingData
      );

      navigate("/booking-success", {
        state: {
          title,
          checkIn,
          checkOut,
          guests,
          totalPrice,
        },
      });
    } catch (error) {
      console.error(error);
      alert("Failed to submit booking");
    }
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: Booking Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md space-y-4"
        >
          <h2 className="text-2xl font-bold mb-4">Guest Details</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Check In</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Check Out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border px-3 py-2 rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Guests</label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
          >
            Confirm Booking
          </button>
        </form>

        {/* RIGHT: Booking Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4 h-fit">
          <h2 className="text-2xl font-bold mb-4">Booking Summary</h2>

          <p>
            <strong>Accommodation:</strong> {title || "N/A"}
          </p>
          <p>
            <strong>Price per night:</strong> ₹ {price}
          </p>
          <p>
            <strong>Nights:</strong> {nights}
          </p>

          <hr />

          <p className="text-xl font-bold text-green-700">
            Total: ₹ {totalPrice}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Booking;
