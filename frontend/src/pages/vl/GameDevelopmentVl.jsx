import React from 'react';

const GameDevelopmentVl = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 px-6 py-12 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-5xl font-bold text-gray-800 mb-12 text-center">Game Development - Visual Learning</h1>

      {/* Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Unity Section */}
        <div className="rounded-xl overflow-hidden shadow-lg bg-white">
          <h2 className="text-2xl font-semibold text-center text-purple-700 p-4">Unity Game Development</h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/gB1F9G0JXOo?si=RSW5HbM-bv8jp1pe"
            title="Unity Game Development Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>

        {/* Unreal Engine Section */}
        <div className="rounded-xl overflow-hidden shadow-lg bg-white">
          <h2 className="text-2xl font-semibold text-center text-blue-700 p-4">Unreal Engine Game Development</h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/6UlU_FsicK8?si=pFSHS4k4SSDCBrTJ"
            title="Unreal Engine Game Development Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GameDevelopmentVl;
