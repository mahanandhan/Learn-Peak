import React from 'react';
import '../pages/css/CyberSecurity.css'; // We'll add custom styles here
import { useNavigate } from 'react-router-dom';

const CyberSecurity = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white flex flex-col items-center justify-center px-6 py-12 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-pink-200 drop-shadow-lg">
            Cyber Security
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            Dive into the world of cybersecurity with engaging visuals and deep theoretical learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Visual Learning</h2>
            <p className="text-white/80 mb-4">
              Learn cybersecurity through engaging visuals, hands-on simulations, and real-world case studies.
            </p>
            <button onClick={() => navigate('/cybersecurityvl')} className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-xl transition duration-300 shadow-md">
              Start Learning
            </button>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">interview preperation</h2>
            <p className="text-white/80 mb-4">
              Prepare for cybersecurity interviews with in-depth theoretical knowledge and practical scenarios.
            </p>
            <button onClick={() => navigate('/CyberSecurityIq')} className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-xl transition duration-300 shadow-md">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;
