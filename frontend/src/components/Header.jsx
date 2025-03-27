import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import coursesData from "../assets/data";

const Header = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(coursesData);
  }, []);

  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center px-6 py-20">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center w-full">
        <h1 className="text-6xl font-bold text-blue-500 mb-6">Explore Our Courses</h1>
        <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-12">
          Upgrade your skills with our expert-led courses in AI, Blockchain, Web Development, and more!
        </p>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer w-full max-w-xs sm:max-w-sm mx-auto"
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-white">
                  <Link
                    to={`/${course.name.toLowerCase().replace(/\s+/g, '')}`}
                    state={course}
                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-400 transition duration-300 transform hover:scale-105"
                  >
                    {course.name}
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
