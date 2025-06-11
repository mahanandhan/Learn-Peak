import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const DataScience = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Helmet block for SEO */}
      <Helmet>
        <title>Data Science - LearnPeak</title>
        <meta
          name="description"
          content="Master Data Science with LearnPeak. Dive into visualizations, theory, and real-world interview preparation tailored for aspiring data scientists."
        />
        <meta
          name="keywords"
          content="Data Science, LearnPeak, Data Visualization, Machine Learning, Data Science Interviews, Data Science Theory, DS Tutorials"
        />
        <link rel="canonical" href="https://elearning-platform-zksp.vercel.app/datascience" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-r from-teal-400 via-white to-purple-600 text-white flex flex-col items-center justify-center px-6 py-16">
        {/* Main Title */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
            Data Science
          </h1>
          <p className="text-gray-100 mt-2 text-lg">Choose your learning path</p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
          {/* Visual Learning Section */}
          <div className="bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-md hover:scale-[1.03] transition-all duration-300">
            <h2 className="text-3xl font-bold text-fuchsia-400 mb-4">Visual Learning</h2>
            <p className="text-gray-300">
              Dive into data visualization techniques, learn how to interpret graphs, charts, and infographics effectively.
            </p>
            <button
              onClick={() => navigate('/datasciencevl')}
              className="mt-6 bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
            >
              Start Learning
            </button>
          </div>

          {/* Interview Preparation Section */}
          <div className="bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-md hover:scale-[1.03] transition-all duration-300">
            <h2 className="text-3xl font-bold text-lime-400 mb-4">Interview Preparation</h2>
            <p className="text-gray-300">
              Prepare for data science interviews with in-depth theoretical knowledge and practical scenarios.
            </p>
            <button
              onClick={() => navigate('/DataScienceIq')}
              className="mt-6 bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
            >
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataScience;
