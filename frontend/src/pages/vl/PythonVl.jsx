import React from 'react';

const PythonVl = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      {/* Main Title */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-blue-500 mb-4">Python Development</h1>
      </div>

      {/* Python for Blockchain Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6">
        <h1 className="text-3xl font-semibold text-yellow-400 text-center">
          Python
        </h1>

        {/* Video Section */}
        <div className="flex justify-start">
          <iframe
            className="w-full md:w-[560px] h-[315px] rounded-lg shadow-md"
            src="https://www.youtube.com/embed/ix9cRaBkVe0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Python DSA Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg mt-8 space-y-6">
        <h1 className="text-3xl font-semibold text-yellow-400 text-center">
          Python DSA (Data Structures and Algorithms)
        </h1>

        {/* DSA Video Section */}
        <div className="flex justify-start">
          <iframe
            className="w-full md:w-[560px] h-[315px] rounded-lg shadow-md"
            src="https://www.youtube.com/embed/lvO88XxNAzs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PythonVl;
