import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`min-h-screen py-10 transition-all duration-500 ${
          darkMode ? "bg-gray-950 text-white" : "bg-pink-50 text-black"
        }`}
      >
        {/* Heading */}
        <div className="text-center text-2xl pt-2">
          <button
            className={`text-[15px] rounded-2xl px-5 py-2 ${
              darkMode
                ? "bg-gray-800 text-white"
                : "bg-white text-purple-800"
            }`}
          >
            Flexible Pricing
          </button>

          <h1 className="text-5xl font-bold pt-3">
            Choose Your Perfect Plan
          </h1>

          <p
            className={`text-[20px] pt-3 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Start learning today with our flexible subscription options.
            Cancel anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="flex gap-5 items-center justify-center flex-wrap p-5">
          {/* Basic */}
          <div
            className={`shadow-2xl flex flex-col gap-5 rounded-2xl p-7 py-10 ${
              darkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            <h1 className="text-[20px] font-bold">Basic</h1>

            <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
              Perfect for beginners starting their learning
              <br />
              journey
            </p>

            <div className="flex items-end gap-2">
              <h1 className="text-5xl font-bold">$49</h1>
              <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                /month
              </p>
            </div>

            <button className="rounded-4xl py-[10px] bg-gradient-to-r from-violet-700 to-pink-500 text-white">
              Get Started
            </button>

            {[
              "Access to 100+ courses",
              "Standard video quality",
              "Course completion certificates",
              "Community forum access",
              "Mobile app access",
              "Email support",
            ].map((item, index) => (
              <div key={index} className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-purple-400"
                />
                <p>{item}</p>
              </div>
            ))}
          </div>

          {/* Pro */}
          <div className="shadow-2xl flex flex-col gap-5 rounded-2xl bg-gradient-to-r from-violet-700 to-pink-500 text-white p-7 py-10">
            <h1 className="text-[23px] font-bold">Pro</h1>

            <p>
              Most popular for serious learners and
              <br />
              professionals
            </p>

            <div className="flex items-end gap-2">
              <h1 className="text-6xl font-bold">$99</h1>
              <p>/month</p>
            </div>

            <button className="rounded-4xl py-[10px] bg-white text-purple-700 font-medium">
              Get Started
            </button>

            {[
              "Access to 500+ premium courses",
              "4K video quality",
              "Verified certificates",
              "Priority community support",
              "Offline download access",
              "Live Q&A sessions",
              "Career guidance workshops",
              "Project code reviews",
            ].map((item, index) => (
              <div key={index} className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-white"
                />
                <p>{item}</p>
              </div>
            ))}
          </div>

          {/* Enterprise */}
          <div
            className={`shadow-2xl flex flex-col gap-5 rounded-2xl p-7 py-8 ${
              darkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            <h1 className="text-[20px] font-bold">Enterprise</h1>

            <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
              Advanced features for teams and organizations
            </p>

            <div className="flex items-end gap-2">
              <h1 className="text-5xl font-bold">$199</h1>
              <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                /month
              </p>
            </div>

            <button className="rounded-4xl py-[10px] bg-gradient-to-r from-violet-700 to-pink-500 text-white">
              Get Started
            </button>

            {[
              "Unlimited course access",
              "Team management dashboard",
              "Custom learning paths",
              "Advanced analytics",
              "Dedicated account manager",
              "1-on-1 mentorship sessions",
              "White-label certificates",
              "API access",
            ].map((item, index) => (
              <div key={index} className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-purple-400"
                />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div
          className={`flex items-center justify-center mt-6 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          All plans include a&nbsp;
          <span className="text-purple-600 font-semibold">
            7-day free trial
          </span>
          &nbsp;. No credit card required.
        </div>
      </div>
    </>
  );
};

export default Pricing;