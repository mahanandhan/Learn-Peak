import React from 'react';

const DataScience = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Main Title */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-teal-400">Data Science</h1>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Visual Learning Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-fuchsia-500 mb-4">Visual Learning</h1>
          <p className="text-gray-300">
            Dive into data visualization techniques, learn how to interpret graphs, charts, and infographics effectively.
          </p>
          <button className="bg-fuchsia-400 hover:bg-fuchsia-700 transform transition duration-300 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
            Start Learning
            </button>
        </div>

        {/* Theoretical Learning Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-lime-400 mb-4">Theoretical Learning</h1>
          <p className="text-gray-300">
            Master statistical analysis, machine learning algorithms, and data modeling principles with a strong theoretical foundation.
          </p>
          <button className="bg-lime-400 hover:bg-lime-700 transform transition duration-300 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
            Start Learning
            </button>
        </div>
      </div>
    </div>
  );
};

export default DataScience;
