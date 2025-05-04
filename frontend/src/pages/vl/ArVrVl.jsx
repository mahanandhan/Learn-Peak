import React from 'react';

const ArVrVl = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 via-yellow-100 to-pink-200 px-4 py-12 flex flex-col items-center space-y-16">
      {/* AR Section */}
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Augmented Reality (AR)</h1>
        <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/WzfDo2Wpxks?si=4PyeU-ZeEjoyXNBp"
            title="AR Visual Learning"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* VR Section */}
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Virtual Reality (VR)</h1>
        <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/YBQ_ps6e71k?si=wZunJDDMwx-UBmxN"
            title="VR Visual Learning"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ArVrVl;
