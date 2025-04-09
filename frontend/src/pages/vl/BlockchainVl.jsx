import React from 'react';

const BlockchainVl = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-50 via-teal-100 to-teal-200 text-gray-800 px-6 py-12">
      {/* Main Title */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 mb-4">
          Blockchain Project-Based Learning
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Explore various hands-on learning projects to understand blockchain technology in depth.
        </p>
      </div>

      {/* Project-Based Learning Sections */}
      <div className="space-y-12">

        {/* Song Application Section */}
        <div className="bg-gradient-to-r from-teal-300 to-indigo-300 p-8 rounded-xl shadow-2xl space-y-6">
          <h2 className="text-3xl font-semibold text-teal-600 mb-6 text-center">Song Application Using Blockchain</h2>
          <p className="text-gray-600 text-center mb-6">
            Gain a better understanding of blockchain integration by building a decentralized song application.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
              <iframe
                className="w-full h-64 sm:h-80 rounded-lg"
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
        <div className="bg-gradient-to-r from-teal-300 to-indigo-300 p-8 rounded-xl shadow-2xl space-y-6">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6 text-center">Web3 for Beginners to Advanced</h2>
          <p className="text-gray-600 text-center mb-6">
            A complete guide to understanding Web3 from the basics to advanced concepts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
              <iframe
                className="w-full h-64 sm:h-80 rounded-lg"
                src="https://www.youtube.com/embed/wx0Hdgfpku0"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Solidity, Blockchain, and Smart Contract Course */}
        <div className="bg-gradient-to-r from-teal-300 to-indigo-300 p-8 rounded-xl shadow-2xl space-y-6">
          <h2 className="text-3xl font-semibold text-purple-600 mb-6 text-center">Solidity, Blockchain, and Smart Contract Course</h2>
          <p className="text-gray-600 text-center mb-6">
            Learn Solidity and smart contracts from beginner to expert level in this comprehensive course.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
              <iframe
                className="w-full h-64 sm:h-80 rounded-lg"
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
        <div className="bg-gradient-to-r from-teal-300 to-indigo-300 p-8 rounded-xl shadow-2xl space-y-6">
          <h2 className="text-3xl font-semibold text-teal-500 mb-6 text-center">NFT Marketplace on Ethereum with React JS</h2>
          <p className="text-gray-600 text-center mb-6">
            Learn how to build an NFT marketplace on Ethereum using React JS in this project-based course.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
              <iframe
                className="w-full h-64 sm:h-80 rounded-lg"
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
    </div>
  );
};

export default BlockchainVl;
