import React, { useContext } from "react";
import Hyperspeed from "@/components/Hyperspeed";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {

  const navigate = useNavigate();

  const { student, setStudent } = useContext(UserContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`relative h-screen overflow-hidden transition-all duration-500 ${darkMode
            ? "bg-black text-white"
            : "bg-pink-100 text-black"
          }`}
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Hyperspeed />
        </div>

        {/* Overlay */}
        <div
          className={`absolute inset-0 -z-10 ${darkMode ? "bg-black/40" : "bg-pink-400/20"
            }`}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center gap-8 text-center">

            {/* Badge */}
            <button
              className={`rounded-3xl py-2 px-6 border shadow-xl transition ${darkMode
                  ? "bg-gray-900 border-gray-700 text-white"
                  : "bg-white border-gray-200 text-gray-700"
                }`}
            >
              Trusted by 100,000+ students worldwide
            </button>

            {/* Heading */}
            <h1 className="text-7xl font-bold bg-gradient-to-r from-violet-700 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Learn Skills
              <br />
              <span className={darkMode ? "text-white" : "text-black"}>
                That Matter
              </span>
            </h1>

            {/* Student Data */}
            <div
              className={`text-2xl ${darkMode ? "text-gray-200" : "text-gray-700"
                }`}
            >
              <h2>{student.subTitle}</h2>
              <h2>{student.subTitle1}</h2>
            </div>

            {/* Buttons */}
            <div className="flex gap-7 items-center justify-center">

              <button
                onClick={() => navigate("/Courses")}
                className={`rounded-3xl py-3 px-7 font-semibold shadow-xl transition ${darkMode
                    ? "bg-pink-600 text-white hover:bg-pink-700"
                    : "bg-pink-500 text-white hover:bg-pink-600"
                  }`}
              >
                Start Learning Today
              </button>

              <button
                onClick={() => navigate("/Courses")}
                className={`rounded-3xl py-3 px-7 border font-semibold shadow-xl transition ${darkMode
                    ? "bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
                    : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                  }`}
              >
                Watch Demo
              </button>

              <button className="rounded-3xl py-3 px-7 border font-semibold shadow-xl transition bg-pink-400 text-white"
                onClick={() =>
                  setStudent({
                    ...student,
                    subTitle: "Learn React Like a Pro 🚀",
                    
                  })
                }
              >
                Change Subtitle
              </button>

            </div>

            {/* Stats */}
            <div className="flex gap-10 text-center mt-5">

              <div className="border-r border-gray-500 pr-8">
                <h1 className="text-4xl font-bold text-pink-500">500+</h1>
                <p
                  className={
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }
                >
                  Expert Courses
                </p>
              </div>

              <div className="border-r border-gray-500 pr-8">
                <h1 className="text-4xl font-bold text-pink-500">100K+</h1>
                <p
                  className={
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }
                >
                  Active Students
                </p>
              </div>

              <div>
                <h1 className="text-4xl font-bold text-pink-500">4.9/5</h1>
                <p
                  className={
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }
                >
                  Average Rating
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;