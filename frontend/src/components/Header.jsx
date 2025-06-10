import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import coursesData from "../assets/data";
import logoLearn from "../../src/assets/logoLearn.jpg";

const Header = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(coursesData);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-pink-100 via-yellow-100 to-green-100 text-gray-800 min-h-screen flex flex-col justify-center items-center px-6 py-20">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-teal-200 to-pink-200 opacity-60"></div>

      {/* Logo */}
      <img
        src={logoLearn}
        alt="LearnPeak Logo"
        className="w-32 md:w-40 lg:w-48 mb-8 z-10 rounded-full shadow-2xl border-4 border-white"
      />

      <div className="relative z-10 text-center w-full">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-indigo-700 mb-6 tracking-wide">
          Explore Our Courses
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Unlock your potential with expert-led courses in AI, Blockchain, Web Development, and more!
        </p>
        <h3 className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed border border-gray-300 bg-red-500 p-1 rounded-2xl hover:scale-105 duration-300 shadow-2xl ">We are going to implement the few more courses and the roadmap section</h3>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 w-full max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-xl cursor-pointer w-full max-w-xs sm:max-w-sm mx-auto"
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-52 object-cover transition duration-300 ease-in-out hover:opacity-80"
              />
              <div className="p-6 text-center bg-gradient-to-r from-teal-200 via-blue-200 to-indigo-200 flex flex-col justify-between h-full">
                <Link
                  to={`/${course.name.toLowerCase().replace(/\s+/g, '')}`}
                  state={course}
                  className="inline-block text-lg font-medium text-white bg-indigo-600 px-5 py-2 rounded-full shadow-md hover:bg-white hover:text-indigo-700 border border-indigo-600 transition duration-300 mb-3"
                >
                  {course.name}
                </Link>
                <p className="text-gray-700 text-sm">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
