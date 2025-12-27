import { NavLink, useLocation } from "react-router-dom"

const BookingSuccess = () => {
  const location = useLocation()
  const booking = location.state

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">

        <h1 className="text-4xl font-bold text-green-600 mb-4">
          🎉 Booking Confirmed!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for choosing Chanderi Eco Retreat.  
          Your booking request has been successfully submitted.
        </p>

        {booking && (
          <div className="text-left bg-gray-100 p-4 rounded-md mb-6 text-sm">
            <p><strong>Accommodation:</strong> {booking.title}</p>
            <p><strong>Check In:</strong> {booking.checkIn}</p>
            <p><strong>Check Out:</strong> {booking.checkOut}</p>
            <p><strong>Guests:</strong> {booking.guests}</p>
            <p className="font-semibold text-green-700 mt-2">
              Total: ₹ {booking.totalPrice}
            </p>
          </div>
        )}

        <div className="flex justify-center gap-4">
          <NavLink
            to="/"
            className="bg-gray-200 px-5 py-2 rounded-md hover:bg-gray-300"
          >
            Home
          </NavLink>

          <NavLink
            to="/accommodation"
            className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700"
          >
            View Stays
          </NavLink>
        </div>

      </div>
    </section>
  )
}

export default BookingSuccess
