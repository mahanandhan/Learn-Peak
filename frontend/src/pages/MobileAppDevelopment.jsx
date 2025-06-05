import React from 'react';
import { useNavigate } from 'react-router-dom';

const MobileAppDevelopment = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-yellow-100 to-purple-100 text-gray-800 flex flex-col items-center justify-center px-6 py-12">
      {/* Main Title */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-purple-600">Mobile App Development</h1>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Visual Learning Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-pink-500 mb-4">Visual Learning</h1>
          <p className="text-gray-700">
            Explore mobile app development concepts through interactive visuals and app-building tutorials.
          </p>
          <button onClick={() => navigate('/mobiledevvl')} className="bg-pink-500 hover:bg-pink-700 transform transition duration-300 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
            Start Learning
          </button>
        </div>

        {/* Interview Prepqaration Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-yellow-500 mb-4">Interview Preparation</h1>
          <p className="text-gray-700">
            Prepare for mobile app development interviews with in-depth theoretical knowledge and practical scenarios.
          </p>
          <button onClick={() => navigate('/MobileAppDevelopmentIq')} className="bg-yellow-500 hover:bg-yellow-700 transform transition duration-300 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDevelopment;
