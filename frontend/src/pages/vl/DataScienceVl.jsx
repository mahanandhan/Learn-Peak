import React from 'react';

const DataScienceVl = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-teal-200 to-green-100 text-white px-6 py-12">
      
      {/* Main Title */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 mb-4">
          Data Science Full Course
        </h1>
        <p className="text-lg text-gray-800 mt-2 font-medium">Master Data Science, ML & Deep Learning from scratch</p>
      </div>

      {/* Video Section */}
      <div className="bg-gradient-to-r from-green-300 to-blue-300 p-8 rounded-xl shadow-2xl space-y-6 mt-8 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-purple-600 text-center mb-4">Visual Learning</h2>
        <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
          <iframe
            className="w-full h-64 sm:h-96 rounded-lg"
            src="https://www.youtube.com/embed/lfyeni0euT4"
            title="Data Science Full Course"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default DataScienceVl;
