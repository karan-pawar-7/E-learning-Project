import React from 'react'
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Instructors = () => {
  return (
    <>
      <div className='h-full bg-pink-50'>
        <div className=' text-center pt-20 text-2xl'>
          <button className='text-purple-800 text-[15px] rounded-2xl bg-white px-5 py-2'>World-Class Instructors</button>
          <h1 className='text-5xl font-bold pt-3'>Learn From Industry Leaders</h1>
          <p className='text-[20px] pt-3 text-gray-700'>Our expert instructors bring real-world experience and passion to every course</p>
        </div >

        <div className='flex gap-8 p-8'>
          <div className='shadow-2xl rounded-4xl bg-white'>
            <img className='rounded-t-4xl h-70 w-90 ' src="./public/t1.png" alt="" />
            <p className='text-[20px] px-7 pt-7'>Arjun Mehta</p>
            <p className='px-7 text-gray-700'>Senior Web Developer</p>

            <div className='flex gap-4 px-7 pt-2'>
              <button className='text-purple-800 text-[15px] font-bold rounded-2xl bg-gray-100 px-3 py-1'>React</button>
              <button className='text-purple-800 text-[15px] font-bold rounded-2xl bg-gray-100 px-3 py-1'>Node.js</button>
              <button className='text-purple-800 text-[15px] font-bold rounded-2xl bg-gray-100 px-3 py-1'>TypeScript</button>
            </div>

            <div className='flex justify-between px-7 pt-3 pb-5 border-t mt-3 border-gray-300'>
              <div className='flex items-center justify-center gap-2'>
                <div>
                  <h1><FontAwesomeIcon className='text-gray-400' icon={faUserGroup} /></h1>
                </div>
                <div>
                  <h1>45.2K</h1>
                  <h1 className='text-gray-600'>Students</h1>
                </div>

              </div>

              <div className='flex items-center justify-center gap-2'>
                <div>
                  <h1><FontAwesomeIcon className='text-gray-400' icon={faBook} /></h1>
                </div>
                <div>
                  <h1>12</h1>
                  <h1 className='text-gray-600'>Courses</h1>
                </div>

              </div>

            </div>
          </div>

          <div className='shadow-2xl rounded-4xl bg-white'>
            <img className='rounded-t-4xl h-70 w-260  ' src="./public/t2.png" alt="" />
            <p className='text-[20px] px-7 pt-7'>Priya Sharma</p>
            <p className='px-7 text-gray-700'>Data Science Expert</p>

            <div className='flex gap-3 px-5 pt-2'>
              <button className='text-purple-800 text-[15px] font-bold rounded-2xl bg-gray-100 px-3 py-1'>Python</button>
              <button className='text-purple-800 text-[15px] font-bold rounded-2xl bg-gray-100 px-3 py-1'>Machine Learning</button>
              <button className='text-purple-800 text-[15px] font-bold rounded-2xl bg-gray-100 px-3 py-1'>SQL</button>
            </div>

            <div className='flex justify-between px-7 pt-3 pb-5 border-t mt-3 border-gray-300'>
              <div className='flex items-center justify-center gap-2'>
                <div>
                  <h1><FontAwesomeIcon className='text-gray-400' icon={faUserGroup} /></h1>
                </div>
                <div>
                  <h1 >32.2K</h1>
                  <h1 className='text-gray-600'>Students</h1>
                </div>

              </div>

              <div className='flex items-center justify-center gap-2'>
                <div>
                  <h1><FontAwesomeIcon className='text-gray-400' icon={faBook} /></h1>
                </div>
                <div>
                  <h1>8</h1>
                  <h1 className='text-gray-600'>Courses</h1>
                </div>

              </div>

            </div>
          </div>

          <div className='shadow-2xl rounded-4xl bg-white'>
            <img className='rounded-t-4xl h-70 w-260  ' src="./public/t3.png" alt="" />
            <p className='text-[20px] px-7 pt-7'>Rohan Varma</p>
            <p className='px-7 text-gray-700'>Creative Director</p>

            <div className='flex gap-3 px-7 pt-2'>
              <button className='text-purple-800 text-[15px] font-bold rounded-2xl bg-gray-100 px-3 py-1'>UI/UX</button>
              <button className='text-purple-800 text-[15px] font-bold rounded-2xl bg-gray-100 px-3 py-1'>Figma</button>
              <button className='text-purple-800 text-[15px] font-bold rounded-2xl bg-gray-100 px-3 py-1'>Branding</button>
            </div>

            <div className='flex justify-between px-7 pt-3 pb-5 border-t mt-3 border-gray-300'>
              <div className='flex items-center justify-center gap-2'>
                <div>
                  <h1><FontAwesomeIcon className='text-gray-400' icon={faUserGroup} /></h1>
                </div>
                <div>
                  <h1>31.5K</h1>
                  <h1 className='text-gray-600'>Students</h1>
                </div>

              </div>

              <div className='flex items-center justify-center gap-2'>
                <div>
                  <h1><FontAwesomeIcon className='text-gray-400' icon={faBook} /></h1>
                </div>
                <div>
                  <h1>10</h1>
                  <h1 className='text-gray-600'>Courses</h1>
                </div>

              </div>

            </div>
          </div>

          <div className='shadow-2xl rounded-4xl w-85 bg-white'>
            <img className='rounded-t-4xl h-70 w-90' src="./public/t4.png" alt="" />
            <p className='text-[20px] px-7 pt-7'>Sneha Chavan</p>
            <p className='px-7 text-gray-700'>Business Strategy Lead</p>

            <div className='flex gap-3 px-7 pt-2'>
              <button className='text-purple-800 text-[15px] font-bold rounded-2xl bg-gray-100 px-3 py-1'>Marketing</button>
              <button className='text-purple-800 text-[15px] font-bold rounded-2xl bg-gray-100 px-3 py-1'>Analytics</button>
              <button className='text-purple-800 text-[15px] font-bold rounded-2xl bg-gray-100 px-3 py-1'>Leadership</button>
            </div>

            <div className='flex justify-between px-7 pt-3 pb-5 border-t mt-3 border-gray-300'>
              <div className='flex items-center justify-center gap-2'>
                <div>
                  <h1><FontAwesomeIcon className='text-gray-400' icon={faUserGroup} /></h1>
                </div>
                <div>
                  <h1>29.7K</h1>
                  <h1 className='text-gray-600'>Students</h1>
                </div>

              </div>

              <div className='flex items-center justify-center gap-2'>
                <div>
                  <h1><FontAwesomeIcon className='text-gray-400' icon={faBook} /></h1>
                </div>
                <div>
                  <h1>14</h1>
                  <h1 className='text-gray-600'>Courses</h1>
                </div>

              </div>

            </div>
          </div>

        </div>
        
      </div>
    </>

  )
}

export default Instructors