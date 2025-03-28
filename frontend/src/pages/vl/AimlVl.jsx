import React from 'react';

const AimlVl = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      {/* Main Title */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-green-500 mb-4">AI & ML</h1>
      </div>
      
      {/* Introduction Section */}
      <div>
        <h2 className="text-3xl font-bold text-green-500">Introduction</h2>
      </div>

      {/* AI & ML Introduction Video */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 mt-8">
        <h1 className="text-3xl font-semibold text-yellow-400 text-center">AI & ML Introduction</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg">
            <iframe className="w-full h-64 rounded-lg" src="https://www.youtube.com/embed/i_LwzRVP7bg" title="AI & ML Introduction" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      {/* NLP Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 mt-8">
        <h1 className="text-3xl font-semibold text-blue-400 text-center">NLP</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg">
            <iframe className="w-full h-64 rounded-lg" src="https://www.youtube.com/embed/dIUTsFT2MeQ" title="NLP" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      {/* Deep Learning Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 mt-8">
        <h1 className="text-3xl font-semibold text-green-400 text-center">Deep Learning</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg">
            <iframe className="w-full h-64 rounded-lg" src="https://www.youtube.com/embed/IA3WxTTPXqQ" title="Deep Learning" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      {/* Generative AI Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 mt-8">
        <h1 className="text-3xl font-semibold text-orange-400 text-center">Generative AI</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg">
            <iframe className="w-full h-64 rounded-lg" src="https://www.youtube.com/embed/mEsleV16qdo" title="Generative AI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      {/* Flask Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 mt-8">
        <h1 className="text-3xl font-semibold text-red-400 text-center">Flask</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg">
            <iframe className="w-full h-64 rounded-lg" src="https://www.youtube.com/embed/Z1RJmh_OqeA" title="Flask" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      {/* Gemini Clone Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 mt-8">
        <h1 className="text-3xl font-semibold text-purple-400 text-center">Gemini Clone</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg">
            <iframe className="w-full h-64 rounded-lg" src="https://www.youtube.com/embed/0yboGn8errU" title="Gemini Clone" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      {/* OpenCV Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 mt-8">
        <h1 className="text-3xl font-semibold text-cyan-400 text-center">OpenCV</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg">
            <iframe className="w-full h-64 rounded-lg" src="https://www.youtube.com/embed/oXlwWbU8l2o" title="OpenCV" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AimlVl;