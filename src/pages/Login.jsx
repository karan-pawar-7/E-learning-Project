import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaBookOpen,
  FaUsers,
  FaStar,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="w-full max-w-7xl bg-white rounded-[35px] shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div className="relative bg-gradient-to-br from-purple-700 via-fuchsia-600 to-orange-400 text-white p-14 flex flex-col justify-between">

          <div>

            <h1 className="text-4xl font-extrabold">
              Learn<span className="text-orange-300">ify</span>
            </h1>

            <div className="mt-16">

              <h2 className="text-6xl font-bold leading-tight">
                Learn
                <span className="text-pink-300"> Smarter,</span>
                <br />
                Build Your Future
              </h2>

              <p className="mt-6 text-xl text-white/90 leading-8 max-w-lg">
                Join over 100,000 students learning from expert instructors
                around the world.
              </p>

            </div>

            <div className="mt-16 space-y-8">

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                  <FaBookOpen size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-xl">500+ Expert Courses</h3>
                  <p className="text-white/80">
                    Learn from industry experts
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                  <FaUsers size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-xl">100K+ Active Students</h3>
                  <p className="text-white/80">
                    Join a global community
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                  <FaStar size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-xl">4.9/5 Rating</h3>
                  <p className="text-white/80">
                    Trusted by thousands
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Bottom Illustration */}

          <div className="mt-16 flex justify-center">

            <img
              src="/login-illustration.png"
              alt=""
              className="w-[480px]"
            />

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="bg-white p-12 lg:p-16 flex flex-col justify-center">

          <div className="flex justify-end">

            <button className="border px-6 py-3 rounded-xl hover:bg-gray-100 duration-300">
              Sign Up
            </button>

          </div>

          <div className="max-w-md mx-auto w-full">

            <h2 className="text-5xl font-bold text-center mt-8">
              Welcome Back
            </h2>

            <p className="text-gray-500 text-center mt-3">
              Continue your learning journey
            </p>

            {/* EMAIL */}

            <div className="mt-10">

              <label className="font-semibold">Email Address</label>

              <div className="mt-2 flex items-center border rounded-xl px-5 py-4">

                <FaEnvelope className="text-purple-600 text-xl" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none ml-4"
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div className="mt-6">

              <label className="font-semibold">Password</label>

              <div className="mt-2 flex items-center border rounded-xl px-5 py-4">

                <FaLock className="text-purple-600 text-xl" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full outline-none ml-4"
                />

                <button
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

            </div>

            {/* REMEMBER */}

            <div className="flex justify-between items-center mt-6">

              <label className="flex items-center gap-2">

                <input type="checkbox" />

                Remember Me

              </label>

              <button className="text-purple-600 hover:underline">
                Forgot Password?
              </button>

            </div>

            {/* LOGIN */}

            <button
              className="w-full mt-8 py-4 rounded-xl text-white font-bold text-lg
              bg-gradient-to-r from-purple-700 via-pink-600 to-orange-400
              hover:scale-105 duration-300"
            >
              Login to Learnify
            </button>

            {/* Divider */}

            <div className="flex items-center gap-4 my-8">

              <div className="h-px bg-gray-300 flex-1"></div>

              <span className="text-gray-500">
                Or continue with
              </span>

              <div className="h-px bg-gray-300 flex-1"></div>

            </div>

            {/* SOCIAL */}

            <div className="grid grid-cols-2 gap-4">

              <button className="border rounded-xl py-4 flex justify-center items-center gap-3 hover:bg-gray-100 duration-300">

                <FaGoogle className="text-red-500" />

                Google

              </button>

              <button className="border rounded-xl py-4 flex justify-center items-center gap-3 hover:bg-gray-100 duration-300">

                <FaGithub />

                GitHub

              </button>

            </div>

            <p className="text-center text-gray-400 mt-10 text-sm">

              By continuing you agree to our
              <span className="text-purple-600">
                {" "}Terms of Service
              </span>
              {" "}and{" "}
              <span className="text-purple-600">
                Privacy Policy
              </span>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;