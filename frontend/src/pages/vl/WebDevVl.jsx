import React from 'react'

const WebDevVl = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      {/* Main Title */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-green-500 mb-4">Web Development</h1>
      </div>
      
      {/* Frontend Development Section */}
      <div>
        <h2 className="text-3xl font-bold text-green-500">Frontend Development</h2>
      </div>

      {/* HTML Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 mt-8">
        <h1 className="text-3xl font-semibold text-yellow-400 text-center">HTML</h1>

        {/* Video Section for HTML */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg">
            <iframe 
              className="w-full h-64 rounded-lg" 
              src="https://www.youtube.com/embed/HD13eq_Pmp8" 
              title="YouTube video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* CSS Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg mt-12 space-y-6">
        <h1 className="text-3xl font-semibold text-blue-400 text-center">CSS</h1>

        {/* Video Section for CSS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg">
            <iframe 
              className="w-full h-64 rounded-lg" 
              src="https://www.youtube.com/embed/wRNinF7YQqQ" 
              title="YouTube video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* JavaScript Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg mt-12 space-y-6">
        <h1 className="text-3xl font-semibold text-red-500 text-center">JavaScript</h1>

        {/* Video Section for JavaScript */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg">
            <iframe 
              className="w-full h-64 rounded-lg" 
              src="https://www.youtube.com/embed/lfmg-EJ8gm4" 
              title="YouTube video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* React JS Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg mt-12 space-y-6">
        <h1 className="text-3xl font-semibold text-purple-500 text-center">React JS</h1>

        {/* Description for React JS */}
        <div className="text-center text-lg text-gray-300 mt-4">
          <h2 className='font-semibold text-4xl'>This is practical-based learning from projects</h2>
        </div>

        {/* Video Section for React JS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg">
            <iframe 
              className="w-full h-64 rounded-lg" 
              src="https://www.youtube.com/embed/x4rFhThSX04" 
              title="YouTube video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* React Redux Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg mt-12 space-y-6">
        <h1 className="text-3xl font-semibold text-yellow-500 text-center">React Redux</h1>

        {/* Video Section for React Redux */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg">
            <iframe 
              className="w-full h-64 rounded-lg" 
              src="https://www.youtube.com/embed/SlC8941Wwrk" 
              title="YouTube video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Backend Section */}
      <div>
        <h1 className="text-3xl font-semibold text-red-500 text-center mt-12">Backend</h1>
      </div>

      {/* MERN Stack Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg mt-12 space-y-6">
        <h1 className="text-3xl font-semibold text-red-500 text-center mt-4">MERN Stack</h1>

        {/* Video Section for MERN Stack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <iframe 
              className="w-full h-64 rounded-lg" 
              src="https://www.youtube.com/embed/O3BUHwfHf84" 
              title="YouTube video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Advanced MERN Stack Section */}
      <div>
        <h1 className="text-3xl font-semibold text-yellow-500 text-center mt-12">Advance into MERN Stack</h1>
      </div>

      {/* Video Section for Advanced MERN Stack */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg mt-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg">
            <iframe 
              className="w-full h-64 rounded-lg" 
              src="https://www.youtube.com/embed/7E6um7NGmeE" 
              title="YouTube video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Advanced MERN Stack with Redux Section */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg mt-12 space-y-6">
        <h1 className="text-3xl font-semibold text-yellow-500 text-center">Advanced MERN Stack with Redux</h1>

        {/* Video Section for Advanced MERN Stack with Redux */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg">
            <iframe 
              className="w-full h-64 rounded-lg" 
              src="https://www.youtube.com/embed/_4CPp670fK4?si=bCi0BiTMqEBjJINU" 
              title="YouTube video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebDevVl
