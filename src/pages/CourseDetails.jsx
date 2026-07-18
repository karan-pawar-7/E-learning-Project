import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaStar,
  FaUserGraduate,
  FaClock,
  FaCertificate,
  FaArrowLeft,
  FaPlayCircle,
} from "react-icons/fa";

const courses = [
  {
    id: "1",
    title: "React JS Masterclass",
    instructor: "Nikhil Sir",
    duration: "30 Hours",
    students: "2,500+",
    rating: "4.9",
    lessons: "30 Lessons",
    price: "$49",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    description:
      "Master React from beginner to advanced. Learn Hooks, Routing, Context API, API Integration and build real-world projects.",
  },
  {
    id: "2",
    title: "JavaScript Complete Course",
    instructor: "Rahul Sir",
    duration: "25 Hours",
    students: "3,200+",
    rating: "4.8",
    lessons: "45 Lessons",
    price: "$59",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200",
    description:
      "Complete JavaScript Bootcamp covering ES6, DOM, Async Await, Fetch API and advanced concepts.",
  },
  {
    id: "3",
    title: "Python Programming",
    instructor: "Amit Sir",
    duration: "40 Hours",
    students: "5,000+",
    rating: "5.0",
    lessons: "60 Lessons",
    price: "$79",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    description:
      "Become a Python Developer by learning OOP, File Handling, Modules and real-world projects.",
  },
];

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find((item) => item.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl font-bold text-red-500">
          Course Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Hero */}

      <div className="relative h-[450px]">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-10 text-white">

            <button
              onClick={() => navigate(-1)}
              className="flex bg-fuchsia-500/80 items-center gap-2 px-5 py-2 rounded-full hover:bg-white/30 duration-300"
            >
              <FaArrowLeft />
              Back
            </button>

            <h1 className="text-6xl font-bold mt-8">
              {course.title}
            </h1>

            <p className="text-xl mt-5 max-w-3xl text-gray-200">
              {course.description}
            </p>

            <div className="flex gap-8 mt-8 text-lg">

              <span className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                {course.rating}
              </span>

              <span className="flex items-center gap-2">
                <FaUserGraduate />
                {course.students}
              </span>

              <span className="flex items-center gap-2">
                <FaClock />
                {course.duration}
              </span>

            </div>

          </div>
        </div>
      </div>

      {/* Main Section */}

      <div className="max-w-7xl mx-auto py-14 px-8 grid lg:grid-cols-3 gap-10">

        {/* Left */}

        <div className="lg:col-span-2 space-y-8">

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-5">
              Course Overview
            </h2>

            <p className="text-gray-600 leading-8 text-lg">
              {course.description}
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <FaPlayCircle className="text-5xl text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold">
                {course.lessons}
              </h3>
              <p className="text-gray-500">
                HD Recorded Videos
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <FaCertificate className="text-5xl text-green-600 mb-4" />
              <h3 className="text-2xl font-bold">
                Certificate
              </h3>
              <p className="text-gray-500">
                Lifetime Valid Certificate
              </p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div>

          <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-10">

            <h2 className="text-5xl font-bold text-purple-700">
              {course.price}
            </h2>

            <p className="text-gray-500 mt-2">
              Lifetime Access Included
            </p>

            <button className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-violet-700 to-pink-500 text-white text-xl font-semibold hover:scale-105 duration-300">
              Enroll Now
            </button>

            <hr className="my-8" />

            <div className="space-y-5">

              <div className="flex justify-between">
                <span>Instructor</span>
                <span className="font-semibold">
                  {course.instructor}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Duration</span>
                <span className="font-semibold">
                  {course.duration}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Students</span>
                <span className="font-semibold">
                  {course.students}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Rating</span>
                <span className="font-semibold">
                  ⭐ {course.rating}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Certificate</span>
                <span className="font-semibold">
                  Yes
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}