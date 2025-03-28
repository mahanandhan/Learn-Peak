import React from 'react';

const BlockchainVl = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      {/* Main Title */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-blue-500 mb-4">Blockchain</h1>
      </div>

      {/* Project-Based Learning Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6">
        <h1 className="text-3xl font-semibold text-blue-400 text-center">
          Project-Based Learning on Blockchain
        </h1>

        {/* Song Application Section */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-green-400 text-center mb-4">
            Song Application using Blockchain
          </h1>

          {/* Video Section */}
          <div className="flex justify-center">
            <iframe
              className="w-full md:w-[560px] h-[315px] rounded-lg shadow-md"
              src="https://www.youtube.com/embed/rp83FIpXyEY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainVl;
