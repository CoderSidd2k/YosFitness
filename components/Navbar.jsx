"use client"
import React, { useState } from 'react';
import Logo from '../resources/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black py-5 fixed top-0 left-0 right-0">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-4 ">
        <div className="flex items-center">
          <img src={Logo.src} alt="" className="h-12 w-auto" />
          <h1 className="md:text-3xl font-extrabold text-white tracking-wider   ml-2">
            <span className="bg-red-700 bg-clip-text text-transparent animate-shine">
              YOS FITNESS STUDIO
            </span>
          </h1>
        </div>
        <div className="hidden md:flex md:items-center space-x-4">
          <a href="/" className="text-white hover:text-gray-200  ml-3">
            HOME
          </a>
          <a href="#about" className="text-white hover:text-gray-200  ml-3">
            ABOUT
          </a>
          <a href="#services" className="text-white hover:text-gray-200  ml-3">
            SERVICES
          </a>
          <a
            href="https://forms.gle/2h9UW2D7gtan8EWo8"
            target="_blank"
            rel="noopener noreferrer"
            className='text-white'
          >
            CONTACT US
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
            <div className="absolute top-full right-0 bg-white py-2 px-4 shadow-lg w-56 ">
              <a href="/" className="block text-gray-700 hover:text-gray-900 py-2">
                HOME
              </a>
              <a href="#about" className="block text-gray-700 hover:text-gray-900 py-2">
                ABOUT
              </a>
              <a href="#services" className="block text-gray-700 hover:text-gray-900 py-2">
                SERVICES
              </a>
              <a
                href="https://forms.gle/2h9UW2D7gtan8EWo8"
                target="_blank"
                rel="noopener noreferrer"
                className='text-black'
              >
                CONTACT US
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
