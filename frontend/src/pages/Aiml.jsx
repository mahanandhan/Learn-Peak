import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import Helmet

const Aiml = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Helmet block for SEO */}
      <Helmet>
        <title>AI & Machine Learning - LearnPeak</title>
        <meta name="description" content="Explore AI and Machine Learning through visual lessons, theory, and real-world applications. Start learning today on LearnPeak." />
        <meta name="keywords" content="AI, Machine Learning, LearnPeak, Artificial Intelligence, Deep Learning, ML Tutorials, Visual AI, ML Theory" />
        <link rel="canonical" href="https://elearning-platform-zksp.vercel.app/ai-machinelearning" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 text-gray-800 flex flex-col items-center justify-center px-6 py-12">
        {/* Main Title */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
            AI & Machine Learning
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Explore the world of AI & ML with engaging, interactive lessons and hands-on experience.
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Visual Learning Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 border border-gray-300">
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-600 mb-4">Visual Learning</h2>
            <p className="text-gray-600 text-lg mb-6">
              Learn AI and ML concepts with visualizations that make the complex ideas simpler to grasp.
            </p>
            <button
              onClick={() => navigate('/aimlvl')}
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg mt-4 transition duration-300 transform hover:scale-105"
            >
              Start Learning
            </button>
          </div>

          {/* Theoretical Learning Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 border border-gray-300">
            <h2 className="text-3xl sm:text-4xl font-semibold text-yellow-600 mb-4">Theoretical Learning</h2>
            <p className="text-gray-600 text-lg mb-6">
              Dive deeper into the foundational principles of machine learning algorithms and AI theories.
            </p>
            <button
              onClick={() => navigate('/aimliq')}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-lg mt-4 transition duration-300 transform hover:scale-105"
            >
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aiml;
