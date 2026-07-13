import React from "react";
import {
  FaBookOpen,
  FaUsers,
  FaStar,
  FaTrophy,
  FaArrowRight,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-[#fafbff] min-h-screen">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <span className="uppercase tracking-widest font-semibold text-purple-600">
              About Us
            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mt-5">

              Empowering Learners

              <br />

              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Worldwide
              </span>

            </h1>

            <p className="text-gray-600 text-lg leading-9 mt-8 max-w-xl">

              Learnify is an online learning platform dedicated to helping
              students and professionals master modern skills through
              industry-leading courses and expert instructors.

            </p>

            <button
              className="
              mt-10
              px-8
              py-4
              rounded-full
              text-white
              font-semibold
              flex
              items-center
              gap-3
              bg-gradient-to-r
              from-purple-700
              via-pink-500
              to-orange-400
              hover:scale-105
              duration-300
              shadow-xl"
            >
              Start Learning Today
              <FaArrowRight />
            </button>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            <div
              className="
              absolute
              w-[550px]
              h-[550px]
              rounded-full
              bg-gradient-to-br
              from-purple-200
              via-pink-100
              to-orange-100
              blur-3xl
              opacity-70"
            ></div>

            <img src={`${import.meta.env.BASE_URL}about-hero.png`} alt="About Hero" className="relative w-full max-w-xl" />

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="max-w-7xl mx-auto px-6 mt-20 mb-10">

        <div
          className="
          bg-white
          rounded-3xl
          shadow-xl
          p-10
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-8"
        >

          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center">
              <FaBookOpen className="text-purple-600 text-3xl" />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-purple-700">
                500+
              </h2>
              <p className="text-gray-500">
                Expert Courses
              </p>
            </div>

          </div>

          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center">
              <FaUsers className="text-pink-600 text-3xl" />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-pink-600">
                100K+
              </h2>
              <p className="text-gray-500">
                Active Students
              </p>
            </div>

          </div>

          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">
              <FaStar className="text-orange-500 text-3xl" />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-orange-500">
                4.9/5
              </h2>
              <p className="text-gray-500">
                Average Rating
              </p>
            </div>

          </div>

          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center">
              <FaTrophy className="text-violet-600 text-3xl" />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-violet-600">
                50+
              </h2>
              <p className="text-gray-500">
                Awards Won
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;