import React from 'react';

const Blockchain = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Main Title */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-blue-500">Blockchain</h1>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Visual Learning Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-teal-400 mb-4">Visual Learning</h1>
          <p className="text-gray-300">
            Explore blockchain concepts through interactive visuals, real-world case studies, and live simulations.
          </p>
        </div>

        {/* Theoretical Learning Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-indigo-400 mb-4">Theoretical Learning</h1>
          <p className="text-gray-300">
            Gain a solid understanding of blockchain fundamentals, cryptography, and decentralized applications (dApps).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blockchain;
