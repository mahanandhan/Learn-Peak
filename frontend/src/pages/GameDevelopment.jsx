import React from 'react';

const GameDevelopment = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Main Title */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-green-500">Game Development</h1>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Visual Learning Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-teal-400 mb-4">Visual Learning</h1>
          <p className="text-gray-300">
            Learn the principles of game design, engine programming, and interactive 3D visuals through immersive tutorials.
          </p>
        </div>

        {/* Theoretical Learning Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-indigo-400 mb-4">Theoretical Learning</h1>
          <p className="text-gray-300">
            Understand the core concepts behind game physics, algorithms, and storytelling to build immersive experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameDevelopment;
