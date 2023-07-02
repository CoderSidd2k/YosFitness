"use client"
import React, { useState } from 'react';
import Logo from '../resources/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent py-5 fixed top-0 left-0 right-0">
      <div className="max-w-6xl  mx-auto px-4 flex justify-between items-center ">
        <div className="flex items-center">
          <img src={Logo.src} alt="" className="h-12 w-auto" />
        </div>
        <div className="hidden md:flex md:items-center">
          <a href="/" className="text-white hover:text-gray-200 px-4">Home</a>
          <a href="#about" className="text-white hover:text-gray-200 px-4">About</a>
          <a href="#services" className="text-white hover:text-gray-200 px-4">Services</a>
          <a href="https://forms.gle/2h9UW2D7gtan8EWo8" target="_blank" rel="noopener noreferrer">
          <button className="bg-red-600 text-white px-4 py-2 rounded-none hover:bg-red-700 transition-colors duration-300">
            Contact us
          </button>
          </a>
        </div>
        <div className="relative md:hidden">
          <button
            className="text-white hover:text-gray-200"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-full right-0 bg-white py-2 px-4 shadow-lg w-56">
              <a href="/" className="block text-gray-700 hover:text-gray-900 py-2">
                Home
              </a>
              <a href="/about" className="block text-gray-700 hover:text-gray-900 py-2">
                About
              </a>
              <a href="/services" className="block text-gray-700 hover:text-gray-900 py-2">
                Services
              </a>
              <a href="https://forms.gle/2h9UW2D7gtan8EWo8" target="_blank" rel="noopener noreferrer">
              <button className="bg-red-600 text-white px-4 py-2 rounded-none hover:bg-red-700 transition-colors duration-300">
                Contact us
              </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



