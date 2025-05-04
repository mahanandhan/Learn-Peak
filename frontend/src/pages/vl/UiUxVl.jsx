import React from 'react';

const UiUxVl = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-200 to-indigo-300 px-6 py-12 text-white flex items-center justify-center">
      
      <div className="w-full max-w-5xl bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 text-center mb-6">
          UI/UX Design Visual Learning
        </h1>
        <br />

        <div className="\">
          <iframe
            className="w-100 h-56 rounded-xl"
            src="https://www.youtube.com/embed/BU_afT-aIn0"
            title="UI/UX Design Visual Learning"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default UiUxVl;
