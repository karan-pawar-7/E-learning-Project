import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faUserGroup,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Courses = () => {
  const [openCard, setOpenCard] = useState(null);

  const courses = [
    {
      id: 1,
      image: "./public/web dev.jpg",
      title: "Complete Web Development Bootcamp 2026",
      instructor: "Sarah Johnson",
      rating: "4.9",
      students: "25777",
      lessons: "170 lessons",
      hours: "42 hours",
      price: "$89",
      level: "Beginner",
      certificate: "Yes",
      projects: "12 Real Projects",
      language: "English",
    },
    {
      id: 2,
      image: "./public/data ana.jpg",
      title: "Data Analytics & Business Intelligence",
      instructor: "Michael Chen",
      rating: "4.8",
      students: "15560",
      lessons: "130 lessons",
      hours: "28 hours",
      price: "$79",
      level: "Intermediate",
      certificate: "Yes",
      projects: "8 Industry Projects",
      language: "English",
    },
    {
      id: 3,
      image: "./public/graphic.jpg",
      title: "Advanced Graphic Design Masterclass",
      instructor: "Emma Rodriguez",
      rating: "4.9",
      students: "29340",
      lessons: "125 lessons",
      hours: "35 hours",
      price: "$95",
      level: "Advanced",
      certificate: "Yes",
      projects: "15 Creative Projects",
      language: "English",
    },
  ];

  return (
    <>
      <div className="h-full bg-pink-50">

        <div className="text-center pt-20 text-2xl">
          <button className="text-purple-800 text-[15px] rounded-2xl bg-white px-5 py-2">
            Featured Courses
          </button>

          <h1 className="text-5xl font-bold pt-3">
            Explore Our Most Popular Courses
          </h1>

          <p className="text-[20px] pt-3 text-gray-700">
            Learn from industry experts and gain practical skills that will
            advance your career.
          </p>
        </div>

        <div className="flex gap-8 p-8 overflow-hidden">

          {courses.map((course) => (
            <div
              key={course.id}
              className="transition-all duration-500 hover:shadow-2xl rounded-4xl bg-white"
            >
              <div className="w-115 h-75 overflow-hidden rounded-t-4xl shadow-lg cursor-pointer">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="flex flex-col gap-3">

                <p className="text-[20px] px-7 pt-7 transition-transform duration-500 hover:scale-105 hover:text-purple-600">
                  {course.title}
                </p>

                <p className="px-7 text-gray-700">
                  {course.instructor}
                </p>

                <div className="flex gap-7 px-7 pt-2">

                  <p>
                    <FontAwesomeIcon icon={faStar} /> {course.rating}
                  </p>

                  <p>
                    <FontAwesomeIcon icon={faUserGroup} /> {course.students}
                  </p>

                  <p>
                    <FontAwesomeIcon icon={faBook} /> {course.lessons}
                  </p>

                </div>

                <p className="px-7 pt-2">
                  <FontAwesomeIcon icon={faClock} /> {course.hours}
                </p>
                <div className="flex justify-between px-7 pt-3 border-t border-gray-300">
                  <h1 className="text-2xl font-bold">
                    {course.price}
                  </h1>

                  <button className="rounded-2xl bg-gradient-to-r from-violet-700 to-pink-500 text-white px-5 py-2">
                    Enroll Now
                  </button>
                </div>

                <div className="px-7 pb-6 pt-3">

                  <button
                    onClick={() =>
                      setOpenCard(
                        openCard === course.id ? null : course.id
                      )
                    }
                    className="w-full border border-purple-600 text-purple-600 rounded-xl py-2 hover:bg-purple-600 hover:text-white duration-300"
                  >
                    {openCard === course.id
                      ? "Hide Details"
                      : "View Details"}
                  </button>

                  {openCard === course.id && (
                    <div className="mt-4 bg-purple-50 rounded-xl p-4 text-gray-700 space-y-2">

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
            </div>
          ))}

        </div>

        <div className="flex items-center justify-center pb-8 gap-10">
          <button className="bg-white border border-gray-500 rounded-4xl px-5 py-2 hover:bg-purple-600 hover:text-white duration-300">
            View All Courses
          </button>
          <button
            onClick={() => setOpenCard(null)}
            className="rounded-full py-2 px-5 bg-gradient-to-r from-violet-700 via-pink-500 to-orange-400 text-white"
          >
            Reset Details
          </button>
        </div>

      </div>
    </>
  );
};

export default Courses;