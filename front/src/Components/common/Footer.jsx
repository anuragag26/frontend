import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Chanderi Eco Retreat
          </h2>
          <p className="text-sm leading-relaxed">
            Experience luxury tent living blended with heritage, culture,
            and nature in the heart of Chanderi, Madhya Pradesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/" className="hover:text-green-500">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-green-500">About</NavLink></li>
            <li><NavLink to="/accommodation" className="hover:text-green-500">Accommodation</NavLink></li>
            <li><NavLink to="/gallery" className="hover:text-green-500">Gallery</NavLink></li>
            <li><NavLink to="/blog" className="hover:text-green-500">Blog</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-green-500">Contact</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>
          <ul className="text-sm space-y-2">
            <li>📍 Chanderi, Madhya Pradesh, India</li>
            <li>📞 +91 90000 00000</li>
            <li>✉️ info@chanderiecoretreat.com</li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Plan Your Stay
          </h3>
          <p className="text-sm mb-4">
            Book your eco-luxury experience today.
          </p>
          <a
            href="https://digibooking.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} Chanderi Eco Retreat. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
