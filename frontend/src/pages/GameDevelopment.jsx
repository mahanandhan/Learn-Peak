import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameDevelopment = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 text-gray-900 flex flex-col items-center justify-center px-6 py-12">
      {/* Main Title */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-green-600">Game Development</h1>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Visual Learning Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-teal-600 mb-4">Visual Learning</h1>
          <p className="text-gray-700">
            Learn the principles of game design, engine programming, and interactive 3D visuals through immersive tutorials.
          </p>
          <button onClick={() => navigate('/gamedevvl')} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
            Start Learning
          </button>
        </div>

        {/* Theoretical Learning Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-indigo-600 mb-4">Interview Preparation</h1>
          <p className="text-gray-700">
            Prepare for game development interviews with in-depth theoretical knowledge and practical scenarios.
          </p>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameDevelopment;
