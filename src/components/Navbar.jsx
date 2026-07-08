import { Link } from "react-router-dom";
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="flex gap-4.5 justify-between items-center bg-white text-gray-700 h-16 px-5 border-b border-gray-300 sticky top-0 shadow-md z-50 text-lg">
        <div className="text-2xl font-bold bg-gradient-to-r from-violet-700 via-pink-500 to-orange-400 bg-clip-text text-transparent">Learnify</div>
        <ul className="flex gap-10 text-lg text-gray-600 ">
          <Link to="/" className="hover:text-amber-300 transition">Home</Link>
          <Link to="/about" className="hover:text-amber-300 transition">About</Link>
          <Link to="/courses" className="hover:text-amber-300 transition">Courses</Link>
          <Link to="/instructors" className="hover:text-amber-300 transition">Instructors</Link>
          <Link to="/pricing" className="hover:text-amber-300 transition">Pricing</Link>

        </ul>

        <div className="flex gap-7 items-center justify-center text-lg">
          <a href="" className='text-gray-800 text-[16px]'>Sign In</a>
          <button className="rounded-4xl text-[16px] py-[5px] px-[15px] bg-gradient-to-r from-violet-700 via-pink-500 to-orange-400 text-white"> Get Started</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar;