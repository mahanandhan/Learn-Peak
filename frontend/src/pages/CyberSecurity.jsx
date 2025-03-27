import React from 'react';

const CyberSecurity = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Main Title */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-red-500">Cyber Security</h1>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Visual Learning Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-red-400 mb-4">Visual Learning</h1>
          <p className="text-gray-300">
            Explore cybersecurity concepts with interactive visuals, live simulations, and real-world case studies.
          </p>
        </div>

        {/* Theoretical Learning Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-red-400 mb-4">Theoretical Learning</h1>
          <p className="text-gray-300">
            Gain in-depth knowledge of cybersecurity principles, encryption, and risk assessment methodologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;
