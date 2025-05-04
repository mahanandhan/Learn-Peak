import React from 'react';
import { useNavigate } from 'react-router-dom';

const WebDevelopment = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 via-blue-200 to-gray-100 text-gray-800 flex flex-col items-center justify-center px-6 py-12">
      {/* Main Title */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-blue-600">Web Development</h1>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Visual Learning Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-blue-500 mb-4">Visual Learning</h1>
          <p className="text-gray-600">
            Learn web development through interactive visuals, video tutorials, and hands-on projects.
          </p>
          <button 
            onClick={() => navigate('/webdevvl')} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer"
          >
            Start Learning
          </button>
        </div>

        {/* Theoretical Learning Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-blue-500 mb-4">Interview Preperation</h1>
          <p className="text-gray-600">
            Prepare for web development interviews with in-depth theoretical knowledge and practical scenarios.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
