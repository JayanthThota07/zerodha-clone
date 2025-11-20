import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#fafafa] border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/media/logo.svg"
            alt="Zerodha Logo"
            className="w-32 md:w-40 hover:opacity-90 transition"
          />
        </Link>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex gap-10 text-[#424242] font-medium">
          <Link
            to="/signup"
            className="hover:text-[#387ed1] transition-colors duration-200"
          >
            Signup
          </Link>
          <Link
            to="/about"
            className="hover:text-[#387ed1] transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/products"
            className="hover:text-[#387ed1] transition-colors duration-200"
          >
            Products
          </Link>
          <Link
            to="/pricing"
            className="hover:text-[#387ed1] transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link
            to="/support"
            className="hover:text-[#387ed1] transition-colors duration-200"
          >
            Support
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#fafafa] border-t border-gray-200 shadow-sm text-[#424242] font-medium flex flex-col space-y-3 px-6 py-4">
          <Link
            to="/signup"
            className="hover:text-[#387ed1] transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Signup
          </Link>
          <Link
            to="/about"
            className="hover:text-[#387ed1] transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/products"
            className="hover:text-[#387ed1] transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/pricing"
            className="hover:text-[#387ed1] transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/support"
            className="hover:text-[#387ed1] transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Support
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
