import React from 'react';

const JavaVl = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      {/* Main Title */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-blue-500 mb-4">Java Development</h1>
      </div>

      {/* Java Programming Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6">
        <h1 className="text-3xl font-semibold text-yellow-400 text-center">
          Java Programming for Beginners
        </h1>

        {/* Video Section */}
        <div className="flex justify-start">
          <iframe
            className="w-full md:w-[560px] h-[315px] rounded-lg shadow-md"
            src="https://www.youtube.com/embed/xTtL8E4LzTQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Java DSA Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg mt-8 space-y-6">
        <h1 className="text-3xl font-semibold text-yellow-400 text-center">
          Java DSA (Data Structures and Algorithms)
        </h1>

        {/* Another Video Section */}
        <div className="flex justify-start">
          <iframe
            className="w-full md:w-[560px] h-[315px] rounded-lg shadow-md"
            src="https://www.youtube.com/embed/T0u5nwSA0w0"
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

export default JavaVl;
