import React from 'react';

const MobileDev = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Mobile App Development - Visual Learning</h1>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/KC0ddYQcnq4?si=9lWXkQAaUUYJCa7f"
          title="Mobile App Development Visual Learning"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default MobileDev;
