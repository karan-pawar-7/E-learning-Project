import React from 'react'

const About = () => {
  return (
    <>
      <div className='flex gap-5 p-5 px-10 items-center justify-center bg-pink-50 h-dvh'>
        <div className='w-1/2 flex flex-col gap-10 p-10'>
          <button className=' text-[15px] rounded-4xl px-5 py-3 h-fit w-fit border-2 border-white bg-white text-gray-700 shadow-2xl'>About Learnify</button>
          <h1 className="text-6xl font-bold ">Empowering <span className="text-6xl font-bold bg-gradient-to-r from-violet-700 via-pink-500 to-orange-400 bg-clip-text text-transparent">Students</span>  Through Digital Learning</h1>
          <p className='text-[20px] text-gray-600'>Learnify is an online learning platform dedicated to helping students master new skills,
             advance their careers, and achieve their goals with the best instructors and resources.
          </p>
          <button className='rounded-2xl bg-gradient-to-r from-violet-700 to-pink-500 text-white px-5 py-1 text-white w-fit'>Learn More</button>
        </div>
        <div className='w-1/2 flex items-center justify-center'>
        <img className='flex h-150 w-180 rounded-2xl shadow-2xl' src="./public/i5.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default About