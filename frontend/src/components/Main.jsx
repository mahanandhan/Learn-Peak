import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header'

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Header />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Main;
