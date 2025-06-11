import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const ArVr = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-purple-200 to-pink-300 text-white flex flex-col items-center justify-center px-6 py-16">

      {/* ✅ Helmet for SEO */}
      <Helmet>
        <title>AR/VR Development | LearnPeak</title>
        <meta name="description" content="Explore immersive AR/VR learning with interactive simulations and interview preparation." />
        <meta name="keywords" content="AR, VR, development, immersive learning, interview questions, LearnPeak" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://elearning-platform-zksp.vercel.app/arvr" />
      </Helmet>

      {/* Main Title */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-600">
          AR/VR Development
        </h1>
        <p className="text-gray-800 mt-2 text-lg font-medium">Explore the future with immersive learning</p>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">

        {/* Visual Learning Section */}
        <div className="bg-gradient-to-br from-pink-400 to-fuchsia-600 p-8 rounded-2xl shadow-2xl hover:scale-[1.03] transition-all duration-300">
          <h2 className="text-3xl font-bold text-white mb-4">Visual Learning</h2>
          <p className="text-white/90">
            Dive into immersive environments using AR and VR, visualizing complex concepts with interactive simulations.
          </p>
          <button onClick={() => navigate('/arvrvl')} className="mt-6 bg-white text-pink-700 font-bold py-2 px-6 rounded-full hover:bg-pink-100 transition">
            Start Learning
          </button>
        </div>

        {/* Interview Preparation Section */}
        <div className="bg-gradient-to-br from-green-300 to-green-500 p-8 rounded-2xl shadow-2xl hover:scale-[1.03] transition-all duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interview Preparation</h2>
          <p className="text-gray-900/80">
            Prepare for AR/VR interviews with in-depth theoretical knowledge and practical scenarios, covering the latest technologies and trends.
          </p>
          <button onClick={() => navigate('/ArVrIq')} className="mt-6 bg-white text-green-700 font-bold py-2 px-6 rounded-full hover:bg-green-100 transition">
            Start Learning
          </button>
        </div>

      </div>
    </div>
  );
};

export default ArVr;
