import React from 'react'

const Home = () => {
  return (
    < >
      <div className='h-lvh bg-pink-100 flex gap-55 items-center justify-center'>


        <div className="flex flex-col items-center justify-center gap-8">

          <button className="rounded-3xl py-[7px] px-[20px] border text-gray-700 border-gray-200 bg-white w-fit shadow-2xl">Trusted by 100,000+ students worldwide</button>
          <h1 className="text-7xl font-bold bg-gradient-to-r from-violet-700 via-pink-500 to-orange-400 bg-clip-text text-transparent">Learn Skills
            <br /> <span className='text-black'>That Matter</span>
          </h1>
          <p className='text-[20px] text-gray-700'>Master in-demand skills with world-class instructors. Build your <br /> future with curated courses designed for modern professionals.</p>

          <div className='flex gap-7 items-center justify-center'>
            <button className="rounded-4xl font-medium  py-[14px] px-[20px] bg-gradient-to-r from-violet-700 to-pink-500 text-white ">Start Learning Today</button>
            <button className="rounded-4xl font-medium text-gray-700 py-[14px] px-[20px] border border-gray-200 bg-white">Watch Demo</button>
          </div>
          <div className='flex gap-7 text-center'>
            <div className='border-r border-zinc-400 p-3'>
              <h1 className='text-4xl font-bold'>500+</h1>
              <p className='text-gray-700'>Expert Courses</p>
            </div>
            <div className='border-r border-zinc-400 p-3'>
              <h1 className='text-4xl font-bold'>100K+</h1>
              <p className='text-gray-700'>Active Students</p>
            </div>
            <div className='border-r  border-zinc-400 p-3'>
              <h1 className='text-4xl font-bold'>4.9/5</h1>
              <p className='text-gray-700'>Average Rating</p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-end '>
          <img className='flex h-150 w-150 rounded-2xl shadow-2xl' src="./public/e img.jpg" alt="" />
        </div>
      </div>
    </>

  )
}

export default Home