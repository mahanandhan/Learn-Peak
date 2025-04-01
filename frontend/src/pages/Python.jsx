import React from 'react';
import { useNavigate } from 'react-router-dom';
const Python = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Main Title */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-yellow-500">Python Programming</h1>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Visual Learning Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-green-400 mb-4">Visual Learning</h1>
          <p className="text-gray-300">
            Dive into Python programming with interactive coding exercises, live demos, and real-world examples.
          </p>
          <button onClick={() => navigate('/pythonvl')} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
            Start Learning
          </button>
        </div>

        {/* Theoretical Learning Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-blue-400 mb-4">Theoretical Learning</h1>
          <p className="text-gray-300">
            Learn the foundational concepts of Python, from variables and data types to object-oriented programming and advanced topics.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default Python;
