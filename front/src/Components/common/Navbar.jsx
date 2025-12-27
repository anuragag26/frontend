import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import LiquidButton from "../ui/LiquidButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setIsOpen(false);

  const handleBookNow = () => {
    closeMenu();
    navigate("/accommodation");
  };

  return (
    <header className="w-full shadow-md sticky top-0 z-50 bg-white">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-700">
          Chanderi Eco Retreat
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <NavLink to="/" className="hover:text-green-700">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-green-700">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/accommodation" className="hover:text-green-700">
              Accommodation
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className="hover:text-green-700">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="hover:text-green-700">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" className="hover:text-green-700">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-green-700">
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Desktop CTA */}
        <LiquidButton to="/accommodation">Book Now</LiquidButton>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">
            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/accommodation" onClick={closeMenu}>
                Accommodation
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" onClick={closeMenu}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={closeMenu}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" onClick={closeMenu}>
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>

            {/* Mobile CTA */}
            <button
              onClick={handleBookNow}
              className="bg-green-600 text-white px-6 py-2 rounded-md"
            >
              Book Now
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
