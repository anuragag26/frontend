import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import AccommodationDetails from "../Pages/AccommodationDetails"
import About from "../Pages/About"
import Accommodation from "../Pages/Accommodation"
import Gallery from "../Pages/Gallery"
import Blog from "../Pages/Blog"
import BlogDetails from "../Pages/BlogDetails";
import Contact from "../Pages/Contact"
import FAQ from "../Pages/FAQ"
import NotFound from "../Pages/NotFound"
import Booking from "../Pages/Booking"
import BookingSuccess from "../Pages/BookingSuccess"



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/accommodation" element={<Accommodation />} />
      <Route path="/accommodation/:id" element={<AccommodationDetails />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/booking/:id" element={<Booking />} />
      <Route path="/booking-success" element={<BookingSuccess />} />
      

    </Routes>
  )
}

export default AppRoutes
