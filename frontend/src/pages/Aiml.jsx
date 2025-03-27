import React from 'react';
import { useNavigate } from 'react-router-dom'
const Aiml = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Main Title */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-green-500">AI & Machine Learning</h1>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Visual Learning Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-yellow-400 mb-4">Visual Learning</h1>
          <p className="text-gray-300">
            Dive into AI and ML concepts with interactive visualizations, data models, and hands-on coding exercises.
          </p>
          <button onClick={() => navigate('/aimlvl')}  className="bg-green-500 hover:bg-green-700 transform transition duration-300 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
            Start Learning
          </button>
        </div>

        {/* Theoretical Learning Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-orange-400 mb-4">Theoretical Learning</h1>
          <p className="text-gray-300">
            Understand the foundational theories of artificial intelligence, machine learning algorithms, and statistical methods.
          </p>
          <button className="bg-green-500 hover:bg-green-700 transform transition duration-300 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
            Start Learning
            </button>
        </div>
      </div>
    </div>
  );
};
export default Aiml;