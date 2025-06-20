import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import Helmet

const Blockchain = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Helmet block for SEO */}
      <Helmet>
        <title>Blockchain Technology - LearnPeak</title>
        <meta
          name="description"
          content="Learn Blockchain Technology through visual learning and theoretical preparation. Start your blockchain journey today on LearnPeak."
        />
        <meta
          name="keywords"
          content="Blockchain, Blockchain Learning, Blockchain Course, LearnPeak, Crypto, Decentralization, Blockchain Interview, Web3"
        />
        <link rel="canonical" href="https://elearning-platform-zksp.vercel.app/blockchain" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 text-gray-800 flex flex-col items-center justify-center px-6 py-12">
        {/* Main Title */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 mb-4">
            Blockchain Technology
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Discover the world of blockchain with hands-on learning and theoretical insights.
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Visual Learning Section */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105 border border-gray-200">
            <h2 className="text-3xl sm:text-4xl font-semibold text-teal-600 mb-4">Visual Learning</h2>
            <p className="text-gray-600 text-lg mb-6">
              Dive deep into blockchain concepts through interactive visuals, real-world case studies, and engaging simulations.
            </p>
            <button
              onClick={() => navigate('/blockchainvl')}
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg mt-4 transition duration-300 transform hover:scale-105"
            >
              Start Learning
            </button>
          </div>

          {/* Interview Preparation Section */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105 border border-gray-200">
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-600 mb-4">Interview Preparation</h2>
            <p className="text-gray-600 text-lg mb-6">
              Prepare for blockchain interviews with in-depth theoretical knowledge, practical scenarios, and coding challenges.
            </p>
            <button
              onClick={() => navigate('/blockchainiq')}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg mt-4 transition duration-300 transform hover:scale-105"
            >
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blockchain;
