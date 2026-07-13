import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <nav
        className={`flex justify-between items-center h-16 px-6 border-b sticky top-0 shadow-md z-50 transition-all duration-300 ${darkMode
          ? "bg-gray-900 text-white border-gray-700"
          : "bg-white text-gray-700 border-gray-300"
          }`}
      >
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-violet-700 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          Learnify
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 font-bold border-b-2 border-pink-600"
                : "text-gray-700"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 font-bold border-b-2 border-pink-600"
                : "text-gray-700"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 font-bold border-b-2 border-pink-600"
                : "text-gray-700"
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/instructors"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 font-bold border-b-2 border-pink-600"
                : "text-gray-700"
            }
          >
            Instructors
          </NavLink>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 font-bold border-b-2 border-pink-600"
                : "text-gray-700"
            }
          >
            Pricing
          </NavLink>
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden md:flex gap-6 items-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-xl cursor-pointer"
          />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-full bg-purple-600 text-white"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

           <NavLink
            to="/Login"
          >
            <button className="rounded-4xl font-medium text-gray-700 py-[10px] shadow px-[20px] border border-gray-200 bg-white hover:bg-gray-200 transition ">Sign In</button>
          </NavLink>

          <button className="rounded-full py-2 px-5 bg-gradient-to-r from-violet-700 via-pink-500 to-orange-400 text-white">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-5 py-6 text-lg">

            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>

            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>

            <NavLink to="/courses" onClick={() => setMenuOpen(false)}>
              Courses
            </NavLink>

            <NavLink to="/instructors" onClick={() => setMenuOpen(false)}>
              Instructors
            </NavLink>

            <NavLink to="/pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </NavLink>

            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-xl cursor-pointer"
            />

            <a href="#">Sign In</a>
            <button
              onClick={() => setMenuOpen(false)}
              className="rounded-full py-2 px-5 bg-gradient-to-r from-violet-700 via-pink-500 to-orange-400 text-white"
            >
              Reset Menu
            </button>

            <button className="rounded-full py-2 px-5 bg-gradient-to-r from-violet-700 via-pink-500 to-orange-400 text-white">
              Get Started
            </button>

          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;