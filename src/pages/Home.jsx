import React from 'react'
import Hyperspeed from "@/components/Hyperspeed";

import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  return (
    < >


      <div className="relative h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Hyperspeed />
        </div>

        {/* Overlay (optional) */}
        <div className="absolute inset-0 bg-black/0 -z-10"></div>

        {/* Content */}

        <div className="relative z-10 flex items-center justify-center h-full">
          {/* Hero content */}
          <div className="flex flex-col items-center justify-center gap-8">

            <button className="rounded-3xl py-[7px] px-[20px] border text-gray-700 border-gray-200 bg-white w-fit shadow-2xl">Trusted by 100,000+ students worldwide</button>


            <h1 className="text-7xl font-bold bg-gradient-to-r from-violet-700 via-pink-500 to-orange-400 bg-clip-text text-transparent">Learn Skills
              <br /> <span className='text-black'>That Matter</span>
            </h1>
            <p className='text-[20px] text-gray-700'>Master in-demand skills with world-class instructors. Build your <br /> future with curated courses designed for modern professionals.</p>

            <div className='flex gap-7 items-center justify-center'>
              <button onClick={() => navigate("/Courses")}
                className="rounded-4xl font-medium  py-[14px] px-[20px] bg-gradient-to-r from-violet-700 to-pink-500 text-white  hover:bg-fuchsia-700 ">
                Start Learning Today
              </button>
              <button  onClick={() => navigate("/Courses")} className="rounded-4xl font-medium text-gray-700 py-[14px] px-[20px] border border-gray-200 bg-white  hover:bg-fuchsia-400 transition">Watch Demo</button>
            </div>
            <div className='flex gap-7 text-center'>
              <div className='border-r border-zinc-400 p-3'>
                <h1 className='text-4xl font-bold text-gray-600'>500+</h1>
                <p className='text-gray-600'>Expert Courses</p>
              </div>
              <div className='border-r border-zinc-400 p-3'>
                <h1 className='text-4xl font-bold text-gray-600'>100K+</h1>
                <p className='text-gray-700'>Active Students</p>
              </div>
              <div className='border-r  border-zinc-400 p-3'>
                <h1 className='text-4xl font-bold text-gray-600'>4.9/5</h1>
                <p className='text-gray-600'>Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Home