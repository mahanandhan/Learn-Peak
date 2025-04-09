import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header'

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-pink-100 via-yellow-100 to-green-100 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-r from-pink-100 via-yellow-100 to-green-100">
        <Header />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Main;
