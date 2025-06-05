import React from 'react';
import { useNavigate } from 'react-router-dom';

const UiUx = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-300 text-white flex flex-col items-center justify-center px-6 py-16">
      
      {/* Main Title */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400">
          UI/UX Design
        </h1>
        <p className="text-gray-800 mt-2 text-lg font-medium">Design stunning and user-friendly interfaces</p>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        
        {/* Visual Learning Section */}
        <div className="bg-gradient-to-br from-pink-400 to-fuchsia-600 p-8 rounded-2xl shadow-2xl hover:scale-[1.03] transition-all duration-300">
          <h2 className="text-3xl font-bold text-white mb-4">Visual Learning</h2>
          <p className="text-white/90">
            Learn how to create beautiful and user-friendly interfaces, focusing on visual design principles and prototyping tools.
          </p>
          <button onClick={() => navigate('/uiuxvl')} className="mt-6 bg-white text-pink-700 font-bold py-2 px-6 rounded-full hover:bg-pink-100 transition">
            Start Learning
          </button>
        </div>

        {/* Interview Preparation Section */}
        <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 p-8 rounded-2xl shadow-2xl hover:scale-[1.03] transition-all duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interview Preparation</h2>
          <p className="text-gray-900/80">
            Prepare for UI/UX interviews with in-depth theoretical knowledge and practical scenarios.
          </p>
          <button onClick={() => navigate('/UiUxIq')} className="mt-6 bg-white text-yellow-600 font-bold py-2 px-6 rounded-full hover:bg-yellow-100 transition">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default UiUx;
