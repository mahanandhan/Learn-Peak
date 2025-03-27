import React from 'react';

const SoftwareEngineer = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Main Title */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-green-500">Software Engineering Courses</h1>
      </div>

      {/* Courses List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Course 1: Web Development */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">Web Development</h2>
          <p className="text-gray-300">Master the skills to build websites and applications using HTML, CSS, JavaScript, and frameworks like React and Node.js.</p>
        </div>

        {/* Course 2: Cyber Security */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-red-400 mb-4">Cyber Security</h2>
          <p className="text-gray-300">Learn how to protect applications and data from security threats through encryption, penetration testing, and ethical hacking.</p>
        </div>

        {/* Course 3: Blockchain */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-purple-400 mb-4">Blockchain</h2>
          <p className="text-gray-300">Dive into blockchain technology, smart contracts, and decentralized applications to build secure, transparent systems.</p>
        </div>

        {/* Course 4: AI/ML */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">AI/ML</h2>
          <p className="text-gray-300">Explore artificial intelligence and machine learning, learning how to build and train models to make intelligent systems.</p>
        </div>

        {/* Course 5: Data Science */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-teal-400 mb-4">Data Science</h2>
          <p className="text-gray-300">Gain skills in data analysis, statistics, and machine learning to work with large datasets and derive valuable insights.</p>
        </div>

        {/* Course 6: Cloud Computing */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-indigo-400 mb-4">Cloud Computing</h2>
          <p className="text-gray-300">Learn how to use cloud platforms like AWS and Azure for scalable computing resources, storage, and networking.</p>
        </div>

        {/* Course 7: DevOps */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-pink-400 mb-4">DevOps</h2>
          <p className="text-gray-300">Understand the DevOps lifecycle and learn to automate infrastructure and deployment to increase collaboration and efficiency.</p>
        </div>

        {/* Course 8: Mobile App Development */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-orange-400 mb-4">Mobile App Development</h2>
          <p className="text-gray-300">Learn how to build mobile applications for iOS and Android using frameworks like React Native or Flutter.</p>
        </div>

        {/* Course 9: Game Development */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">Game Development</h2>
          <p className="text-gray-300">Learn to create interactive and immersive games using Unity, C#, and other game development tools.</p>
        </div>

        {/* Course 10: UI/UX Design */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-lime-400 mb-4">UI/UX Design</h2>
          <p className="text-gray-300">Learn to design user-friendly interfaces and create amazing user experiences using tools like Figma and Adobe XD.</p>
        </div>

        {/* Course 11: Embedded Systems */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-amber-400 mb-4">Embedded Systems</h2>
          <p className="text-gray-300">Understand how to build embedded systems and work with microcontrollers, sensors, and real-time operating systems (RTOS).</p>
        </div>

        {/* Course 12: IoT */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-indigo-500 mb-4">IoT</h2>
          <p className="text-gray-300">Learn how to develop Internet of Things (IoT) applications that connect devices to the cloud for smarter solutions.</p>
        </div>

        {/* Course 13: Data Analysis */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-sky-400 mb-4">Data Analysis</h2>
          <p className="text-gray-300">Learn how to collect, clean, and analyze data using tools like Excel, Python, and SQL to inform business decisions.</p>
        </div>

        {/* Course 14: AR/VR */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-cyan-400 mb-4">AR/VR</h2>
          <p className="text-gray-300">Explore Augmented Reality (AR) and Virtual Reality (VR) development to build immersive experiences.</p>
        </div>

        {/* Course 15: Software Testing */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-teal-500 mb-4">Software Testing</h2>
          <p className="text-gray-300">Learn the methods and best practices to test software and ensure that applications are reliable and error-free.</p>
        </div>

        {/* Course 16: Ethical Hacking */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4">Ethical Hacking</h2>
          <p className="text-gray-300">Understand how to test systems and networks for vulnerabilities to prevent security breaches and data theft.</p>
        </div>

        {/* Course 17: Full Stack Development */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-pink-500 mb-4">Full Stack Development</h2>
          <p className="text-gray-300">Learn how to build both front-end and back-end applications, using frameworks like React, Node.js, and MongoDB.</p>
        </div>

        {/* Course 18: Python */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-purple-500 mb-4">Python</h2>
          <p className="text-gray-300">Master Python programming, from basic syntax to advanced topics like web development, machine learning, and more.</p>
        </div>

        {/* Course 19: Java */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Java</h2>
          <p className="text-gray-300">Learn Java programming to build powerful, efficient, and scalable applications for various platforms.</p>
        </div>

        {/* Course 20: Software Engineering */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">Software Engineering</h2>
          <p className="text-gray-300">Understand the principles of software engineering, including design patterns, algorithms, and software architecture.</p>
        </div>
      </div>
    </div>
  );
};

export default SoftwareEngineer;
