import React from 'react';

const CyberSecurityVl = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-100 text-white px-6 py-12">
      
      {/* Main Title */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-600 mb-4">
          Cyber Security
        </h1>
      </div>
      {/* Educational Disclaimer */}
        <div className="mt-12 text-center text-xl text-bold text-gray-800">
        ⚠️ This content is provided solely for educational purposes. We do not encourage or support any form of illegal hacking. Please use your knowledge ethically and responsibly.
        </div>

      {/* Introduction Section */}
      <div>
        <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 text-center mb-6">Introduction</h2>
      </div>

      {/* Penetration Testing */}
      <div className="bg-gradient-to-r from-red-300 to-yellow-300 p-8 rounded-xl shadow-2xl space-y-6 mt-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-500 text-center mb-4">Penetration Testing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
            <iframe className="w-full h-64 sm:h-80 rounded-lg" src="https://www.youtube.com/embed/wNA4CLG-OSM" title="Penetration Testing" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      {/* vernalble assessment */}
      <div className="bg-gradient-to-r from-red-300 to-yellow-300 p-8 rounded-xl shadow-2xl space-y-6 mt-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-green-500 text-center mb-4">vernalble assessment</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
            <iframe className="w-full h-64 sm:h-80 rounded-lg" src="https://www.youtube.com/embed/iLdsCnpMnTg" title="vernalble assessment" frameBorder="0" allowFullScreen></iframe>
            </div>
            </div>
      </div>

      {/* Kali Linux */}
      <div className="bg-gradient-to-r from-red-300 to-yellow-300 p-8 rounded-xl shadow-2xl space-y-6 mt-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-red-500 text-center mb-4">Kali Linux</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
            <iframe className="w-full h-64 sm:h-80 rounded-lg" src="https://www.youtube.com/embed/T_zF1YOVo34" title="Kali Linux" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      
      
    </div>
  );
};

export default CyberSecurityVl;
