import React from "react";
import { useState } from "react";
import logo from "../public/Frame 78Des.png";
import logoTwo from "../public/Frame 75Mob.png";
function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>

            {/* Menu for large screens */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-800 hover:text-green-600">
                Home
              </a>
              <div className="relative group">
                <button className="flex items-center text-gray-800 hover:text-green-600">
                  Our Community
                  <svg
                    className="w-4 h-4 ml-1 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.5 7L10 11.5 14.5 7H5.5z" />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-green-50"
                  >
                    Enterprise Support Organization
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-green-50"
                  >
                    Businesses
                  </a>
                </div>
              </div>
              <a href="#" className="text-gray-800 hover:text-green-600">
                Programmes and Events
              </a>
              <a href="#" className="text-gray-800 hover:text-green-600">
                About Us
              </a>
            </div>

            {/* Search and Sign-In */}
            <div className="hidden md:flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search for Programmes and Events"
                className="border rounded-md px-4 py-2 text-gray-800 focus:outline-none"
              />
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Sign In
              </button>
            </div>

            {/* Hamburger menu for mobile */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-green-50"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-green-50"
              >
                Our Community
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-green-50"
              >
                Programmes and Events
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-green-50"
              >
                About Us
              </a>
              <div className="border-t border-gray-200 my-2"></div>
              <input
                type="text"
                placeholder="Search"
                className="w-full border rounded-md px-4 py-2 text-gray-800 focus:outline-none"
              />
              <button className="w-full mt-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Sign In
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
