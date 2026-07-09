import { NavLink } from "react-router-dom";
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <>
      <nav className="flex gap-4.5 justify-between items-center bg-white text-gray-700 h-16 px-5 border-b border-gray-300 sticky top-0 shadow-md z-50 text-lg">
        <div className="text-2xl font-bold bg-gradient-to-r from-violet-700 via-pink-500 to-orange-400 bg-clip-text text-transparent">Learnify</div>
        <ul className="flex gap-10 text-lg text-gray-600 ">

           <NavLink
            to="/" className={({ isActive }) =>isActive ? "text-pink-600 font-bold border-b-2 border-pink-600": "text-gray-700" }>
            Home
          </NavLink>
          <NavLink
            to="/about" className={({ isActive }) =>isActive ? "text-pink-600 font-bold border-b-2 border-pink-600": "text-gray-700" }>
            About
          </NavLink>
          <NavLink
            to="/courses" className={({ isActive }) =>isActive ? "text-pink-600 font-bold border-b-2 border-pink-600": "text-gray-700" }>
            Courses
          </NavLink>
          <NavLink
            to="/instructors" className={({ isActive }) =>isActive ? "text-pink-600 font-bold border-b-2 border-pink-600": "text-gray-700" }>
            Instructors
          </NavLink>
          <NavLink
            to="/pricing" className={({ isActive }) =>isActive ? "text-pink-600 font-bold border-b-2 border-pink-600": "text-gray-700" }>
            Pricing
          </NavLink> 

        </ul>
        <div className="flex gap-7 items-center justify-center text-lg">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <a href="" className='text-gray-800 text-[16px]'>Sign In</a>
          <button className="rounded-4xl text-[16px] py-[5px] px-[15px] bg-gradient-to-r from-violet-700 via-pink-500 to-orange-400 text-white"> Get Started</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar;