import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Courses = () => {
  return (
    <>
      <div className='h-screen'>
        <div className=' text-center pt-20 text-2xl'>
          <button className='text-purple-800 text-[15px] font-bold rounded-2xl bg-gray-100 px-3 py-1'>Featured Courses</button>
          <h1 className='text-5xl font-bold pt-3'>Explore Our Most Popular Courses</h1>
          <p className='text-[20px] pt-3 text-gray-700'>Learn from industry experts and gain practical skills that will advance your career</p>
        </div >

        <div className='flex gap-8 p-8'>
          <div className='shadow-2xl rounded-4xl'>
            <img className='rounded-t-4xl h-75 w-250 ' src="./public/web dev.jpg" alt="" />
            <div className='flex flex-col gap-3'>
              <p className='text-[20px] px-7 pt-7'>Complete Web Development Bootcamp 2026</p>
              <p className='px-7 text-gray-700'>Sarah Johnson</p>
              <div className='flex gap-7 px-7 pt-2'>
                <p>  <FontAwesomeIcon icon={faStar} /> 4.9</p>
                <p><FontAwesomeIcon icon={faUserGroup} /> 25777</p>
                <p><FontAwesomeIcon icon={faBook} /> 170 lessons</p>
              </div>
              <p className='px-7 pt-2'><FontAwesomeIcon icon={faClock} /> 42 hours</p>
              <div className='flex justify-between px-7 pt-3 pb-5 border-t border-gray-300'>
                <h1 className='text-2xl font-bold'>$89</h1>
                <button className='rounded-2xl bg-gradient-to-r from-violet-700 to-pink-500 text-white px-5 py-1 text-white'>Enroll Now</button>
              </div>
            </div>
          </div>


          <div className='shadow-2xl rounded-4xl'>
            <img className='rounded-t-4xl h-75 w-250' src="./public/data ana.jpg" alt="" />

            <div className='flex flex-col gap-3'>
              <p className='text-[20px] px-7 pt-7'>Data Analytics & Business Intelligence</p>
              <p className='px-7 text-gray-700'>Michael Chen</p>
              <div className='flex gap-7 px-7 pt-2'>
                <p> <FontAwesomeIcon icon={faStar} /> 4.8</p>
                <p><FontAwesomeIcon icon={faUserGroup} /> 15560</p>
                <p><FontAwesomeIcon icon={faBook} /> 130 lessons</p>
              </div>
              <p className='px-7 pt-2'><FontAwesomeIcon icon={faClock} /> 28 hours</p>
              <div className='flex justify-between px-7 pt-3 pb-5 border-t border-gray-300'>
                <h1 className='text-2xl font-bold'>$79</h1>
                <button className='rounded-2xl bg-gradient-to-r from-violet-700 to-pink-500 text-white px-5 py-1 text-white'>Enroll Now</button>
              </div>
            </div>
          </div>


          <div className='shadow-2xl rounded-4xl'>
            <img className='rounded-t-4xl h-75 w-250' src="./public/graphic.jpg" alt="" />

            <div className='flex flex-col gap-3'>

              <p className='text-[20px] px-7 pt-7'>Advanced Graphic Design Masterclass</p>
              <p className='px-7 text-gray-700'>Emma Rodriguez</p>
              <div className='flex gap-7 px-7 pt-2'>
                <p> <FontAwesomeIcon icon={faStar} /> 4.9</p>
                <p><FontAwesomeIcon icon={faUserGroup} /> 29340</p>
                <p><FontAwesomeIcon icon={faBook} /> 125 lessons</p>
              </div>
              <p className='px-7 pt-2'><FontAwesomeIcon icon={faClock} /> 35 hours</p>
              <div className='flex justify-between px-7 pt-3 pb-5 border-t border-gray-300'>
                <h1 className='text-2xl font-bold'>$95</h1>
                <button className='rounded-2xl bg-gradient-to-r from-violet-700 to-pink-500 text-white px-5 py-1 text-white'>Enroll Now</button>
              </div>
             </div>
            </div>
          </div>
          <div className='flex items-center justify-center pb-3'>
            <button className='bg-white border border-gray-500 rounded-4xl px-5 py-2'>View All Courses</button>
          </div>
        </div>
      </>

      )
}

      export default Courses