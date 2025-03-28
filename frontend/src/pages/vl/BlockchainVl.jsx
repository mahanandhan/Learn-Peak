import React from 'react';

const BlockchainVl = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      {/* Main Title */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-blue-500 mb-4">Blockchain</h1>
      </div>

      {/* Project-Based Learning Section */}
      <div>
        <h2 className="text-3xl font-bold text-blue-500">Project-Based Learning on Blockchain</h2>
      </div>

      {/* Song Application Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 mt-8">
        <h1 className="text-3xl font-semibold text-green-400 text-center">Song Application using Blockchain Which gives understanding</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg">
            <iframe 
              className="w-full h-64 rounded-lg" 
              src="https://www.youtube.com/embed/rp83FIpXyEY" 
              title="YouTube video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Web3 for Beginners Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg mt-12 space-y-6">
        <h1 className="text-3xl font-semibold text-yellow-400 text-center">Web3 for Beginners To Advance</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg">
            <iframe 
              className="w-full h-64 rounded-lg" 
              src="https://www.youtube.com/embed/wx0Hdgfpku0" 
              title="YouTube video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Solidity, Blockchain, and Smart Contract Course Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg mt-12 space-y-6">
        <h1 className="text-3xl font-semibold text-purple-400 text-center">Solidity, Blockchain, and Smart Contract Course Beginner to Expert Python</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg">
            <iframe 
              className="w-full h-64 rounded-lg" 
              src="https://www.youtube.com/embed/M576WGiDBdQ" 
              title="YouTube video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* NFT Marketplace Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg mt-12 space-y-6">
        <h1 className="text-3xl font-semibold text-green-400 text-center">NFT Marketplace On Ethereum With React JS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg">
            <iframe 
              className="w-full h-64 rounded-lg" 
              src="https://www.youtube.com/embed/S3jJtGYI18E" 
              title="YouTube video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainVl;