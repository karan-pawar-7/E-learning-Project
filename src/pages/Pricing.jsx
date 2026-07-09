import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const Pricing = () => {
  return (
    <>
      <div className='h-full bg-pink-50 py-10'>
        <div className='text-center  text-2xl pt-2'>
          <button className='text-purple-800 text-[15px] rounded-2xl bg-white px-5 py-2'>Flexible Pricing</button>
          <h1 className='text-5xl font-bold pt-3'>Choose Your Perfect Plan </h1>
          <h1 className='text-[20px] pt-3 text-gray-700'> Start learning today with our flexible subscription options. Cancel anytime.</h1>
        </div>

        <div className='flex gap-5 items-center justify-center p-5'>

          <div className='shadow-2xl gap-5 flex flex-col rounded-2xl bg-white p-7 py-10 pb-19'>
            <h1 className='text-[20px] font-bold'>Basic</h1>
            <p className='text-gray-700'>Perfect for beginners starting their learning <br /> journey</p>
            <div className='flex items-end gap-2'>
              <h1 className='text-5xl font-bold'>$49</h1>
              <p className='text-[20px] text-gray-700'> /month</p>
            </div>
            <button className=" rounded-4xl font-medium h-fit my-2  py-[10px] bg-gradient-to-r from-violet-700 to-pink-500 text-white ">Get Started</button>
            <div className='flex gap-2'>
              <div className='flex flex-col gap-2' >
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
              </div>
              <div className='flex flex-col gap-2'>
                <p>Access to 100+ courses</p>
                <p>Standard video quality</p>
                <p>Course completion certificates</p>
                <p>Community forum access</p>
                <p>Mobile app access</p>
                <p>Email support</p>
              </div>
            </div>

          </div>


          <div className='shadow-2xl gap-5 flex flex-col rounded-2xl bg-gradient-to-r from-violet-700 to-pink-500 text-white p-7 py-10'>
            <h1 className='text-[23px] font-bold'>Pro</h1>
            <p className='text-gray-700 text-white'>Most popular for serious learners and <br /> professionals</p>
            <div className='flex items-end gap-2'>
              <h1 className='text-6xl font-bold'>$79</h1>
              <p className='text-[20px] text-white'> /month</p>
            </div>
            <button className="rounded-4xl font-medium h-fit my-2  py-[10px] bg-white text-purple-700 ">Get Started</button>
            <div className='flex gap-2'>
              <div className='flex flex-col gap-2' >
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
              </div>
              <div className='flex flex-col gap-2'>
                <p>Access to 500+ premium courses</p>
                <p>4K video quality</p>
                <p>Verified certificates</p>
                <p>Priority community support</p>
                <p>Offline download access</p>
                <p>Live Q&A sessions</p>
                <p>Career guidance workshops</p>
                <p>Project code reviews</p>
              </div>
            </div>

          </div>

          <div className='shadow-2xl gap-5 flex flex-col rounded-2xl bg-white p-7 py-8 mt-3'>
            <h1 className='text-[20px] font-bold'>Enterprise</h1>
            <p className='text-gray-700'>Advanced features for teams and organizations</p>
            <div className='flex items-end gap-2'>
              <h1 className='text-5xl font-bold'>$199</h1>
              <p className='text-[20px] text-gray-700'> /month</p>
            </div>
            <button className="rounded-4xl font-medium h-fit my-2  py-[10px] bg-gradient-to-r from-violet-700 to-pink-500 text-white ">Get Started</button>
            <div className='flex gap-2'>
              <div className='flex flex-col gap-2' >
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
                <h1><FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 text-xl" /></h1>
              </div>
              <div className='flex flex-col gap-2'>
                <p>Unlimited course access</p>
                <p>Team management dashboard</p>
                <p>Custom learning paths</p>
                <p>Advanced analytics</p>
                <p>Dedicated account manager</p>
                <p>1-on-1 mentorship sessions</p>
                <p>White-label certificates</p>
                <p>API access</p>
              </div>
            </div>

          </div>
        </div>
        <div className='flex items-center justify-center'>All plans include a.<  span className='text-purple-600'>7-day free trial</span>. No credit card required.</div>
      </div>
    </>
  )
}

export default Pricing