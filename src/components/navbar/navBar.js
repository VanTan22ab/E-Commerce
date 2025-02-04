import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaCoins } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50 box-border pr-4">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link to="/" className="flex items-center space-x-3">
              <img className="h-12 w-auto" src="logoCode.png" alt="Logo" />
              <div>
                <p className="text-2xl font-bold text-cyan-500">Code</p>
                <p className="text-lg text-gray-600 font-semibold">Arena</p>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-8">
            <Link
              to="/about"
              className="text-gray-600 hover:text-cyan-500 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/courses"
              className="text-gray-600 hover:text-cyan-500 transition duration-300"
            >
              Courses
            </Link>
            <Link
              to="/trainers"
              className="text-gray-600 hover:text-cyan-500 transition duration-300"
            >
              Trainers
            </Link>
            <Link
              to="/reviews"
              className="text-gray-600 hover:text-cyan-500 transition duration-300"
            >
              Reviews
            </Link>
            <Link
              to="/media"
              className="text-gray-600 hover:text-cyan-500 transition duration-300"
            >
              Media
            </Link>
          </div>

          {/* Search + Coins + Points + User */}
          <div className="flex items-center space-x-6 justify-between">
            {/* Search Bar */}
            <div className="relative hidden lg:block">
              <input
                type="text"
                placeholder="Search courses..."
                className="border rounded-full pl-10 pr-4 py-1 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
            </div>
          </div>
          <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300">
            <Link to="/login" className="no-underline text-white">
              Start Learning
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}
