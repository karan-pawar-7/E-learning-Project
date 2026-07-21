import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faUserGroup,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

import { ThemeContext } from "../context/ThemeContext";

const CourseData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    title: "React JS Masterclass",
    instructor: "John Smith",
    rating: "4.9",
    students: "2.5k",
    lessons: "30",
    hours: "40 Hours",
    price: "$49",
    level: "Beginner",
    language: "English",
    certificate: "Yes",
    projects: "5 Live Projects",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
    title: "JavaScript Complete Course",
    instructor: "Sarah Wilson",
    rating: "4.8",
    students: "3.2k",
    lessons: "45",
    hours: "60 Hours",
    price: "$59",
    level: "Intermediate",
    language: "English",
    certificate: "Yes",
    projects: "8 Projects",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    title: "Full Stack Web Development",
    instructor: "David Miller",
    rating: "5.0",
    students: "5k",
    lessons: "80",
    hours: "120 Hours",
    price: "$99",
    level: "Advanced",
    language: "English",
    certificate: "Yes",
    projects: "12 Live Projects",
  },
];

const Courses = () => {
  const navigate = useNavigate();

  const { darkMode } = useContext(ThemeContext);

  const [courses] = useState(CourseData);
  const [openCard, setOpenCard] = useState(null);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode ? "bg-gray-950 text-white" : "bg-pink-50 text-black"
      }`}
    >
      {/* Heading */}

      <div className="text-center pt-20">
        <button
          className={`text-[15px] rounded-2xl px-5 py-2 shadow ${
            darkMode
              ? "bg-gray-800 text-white"
              : "bg-white text-purple-800"
          }`}
        >
          Featured Courses
        </button>

        <h1 className="text-5xl font-bold pt-4">
          Explore Our Most Popular Courses
        </h1>

        <p
          className={`text-xl pt-4 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Learn from industry experts and gain practical skills that will
          advance your career.
        </p>
      </div>

      {/* Cards */}

      <div className="flex flex-wrap justify-center gap-8 p-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`w-[450px] rounded-3xl shadow-lg hover:shadow-2xl duration-300 ${
              darkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            {/* Image */}

            <div className="h-72 overflow-hidden rounded-t-3xl">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover hover:scale-110 duration-500"
              />
            </div>

            {/* Content */}

            <div className="p-6">
              <h2 className="text-2xl font-semibold hover:text-purple-500 duration-300">
                {course.title}
              </h2>

              <p
                className={`mt-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {course.instructor}
              </p>

              <div
                className={`flex justify-between mt-5 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <p>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-yellow-500"
                  />{" "}
                  {course.rating}
                </p>

                <p>
                  <FontAwesomeIcon icon={faUserGroup} /> {course.students}
                </p>

                <p>
                  <FontAwesomeIcon icon={faBook} /> {course.lessons}
                </p>
              </div>

              <p
                className={`mt-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <FontAwesomeIcon icon={faClock} /> {course.hours}
              </p>

              {/* Price */}

              <div
                className={`flex justify-between items-center mt-6 pt-5 ${
                  darkMode
                    ? "border-t border-gray-700"
                    : "border-t border-gray-200"
                }`}
              >
                <h1 className="text-3xl font-bold text-purple-600">
                  {course.price}
                </h1>

                <button className="bg-gradient-to-r from-violet-700 to-pink-500 text-white px-5 py-2 rounded-xl hover:scale-105 transition">
                  Enroll Now
                </button>
              </div>

              {/* Buttons */}

              <div className="mt-5 flex flex-col gap-3">
                <button
                  onClick={() => navigate(`/course/${course.id}`)}
                  className="bg-purple-600 text-white rounded-xl py-2 hover:bg-purple-700 duration-300 transition"
                >
                  View Full Details
                </button>

                <button
                  onClick={() =>
                    setOpenCard(
                      openCard === course.id ? null : course.id
                    )
                  }
                  className={`rounded-xl py-2 transition ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-black"
                  }`}
                >
                  {openCard === course.id
                    ? "Hide Details"
                    : "Show Details"}
                </button>
              </div>

              {/* Details */}

              {openCard === course.id && (
                <div
                  className={`mt-5 rounded-xl p-4 space-y-2 ${
                    darkMode
                      ? "bg-gray-800 text-gray-200"
                      : "bg-purple-50"
                  }`}
                >
                  <p>
                    <strong>Level:</strong> {course.level}
                  </p>

                  <p>
                    <strong>Language:</strong> {course.language}
                  </p>

                  <p>
                    <strong>Certificate:</strong> {course.certificate}
                  </p>

                  <p>
                    <strong>Projects:</strong> {course.projects}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Reset */}

      <div className="flex justify-center pb-10">
        <button
          onClick={() => setOpenCard(null)}
          className="bg-gradient-to-r from-violet-700 via-pink-500 to-orange-400 text-white px-6 py-3 rounded-full hover:scale-105 transition"
        >
          Reset Details
        </button>
      </div>
    </div>
  );
};

export default Courses;