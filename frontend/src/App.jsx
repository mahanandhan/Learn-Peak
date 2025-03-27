import React from 'react'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Main from './components/Main'
import WebDevelopment from './pages/WebDevelopment'
import CyberSecurity from './pages/CyberSecurity'
import Aiml from './pages/Aiml'
import Blockchain from './pages/Blockchain'
import DataScience from './pages/DataScience'
import CloudComputing from './pages/CloudComputing'
import Devops from './pages/Devops'
import MobileAppDevelopment from './pages/MobileAppDevelopment'
import GameDevelopment from './pages/GameDevelopment'
import UiUx from './pages/UiUx'
import EmbeddedSystem from './pages/EmbeddedSystem'
import Iot from './pages/Iot'
import DataAnalysis from './pages/DataAnalysis'
import ArVr from './pages/ArVr'
import SoftwareTesting from './pages/SoftwareTesting'
import EthicalHacking from './pages/EthicalHacking'
import FullStack from './pages/FullStack'
import Python from './pages/Python'
import Java from './pages/Java'
import SoftwareEngineer from './pages/SoftwareEngineer'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path='/cybersecurity' element={<CyberSecurity />} />
        <Route path='/ai&machinelearning' element={<Aiml />} />
        <Route path='/blockchain' element={<Blockchain />} />
        <Route path='/datascience' element={<DataScience />} />
        <Route path='/cloudcomputing' element={<CloudComputing />} />
        <Route path='/devops' element={<Devops />} />
        <Route path='/mobileappdevelopment' element={<MobileAppDevelopment />} />
        <Route path='/gamedevelopment' element={<GameDevelopment />} />
        <Route path='/ui/uxdesign' element={<UiUx />} />
        <Route path='/embeddedsystems' element={<EmbeddedSystem />} />
        <Route path='/iot(internetofthings)' element={<Iot />} />
        <Route path='/bigdataanalytics' element={<DataAnalysis />} />
        <Route path='/ar/vrdevelopment' element={<ArVr />} />
        <Route path='/softwaretesting&qa' element={<SoftwareTesting />} />
        <Route path='/ethicalhacking' element={<EthicalHacking />} />
        <Route path='/full-stackdevelopment' element={<FullStack />} />
        <Route path='/pythonprogramming' element={<Python />} />
        <Route path='javaprogramming' element={<Java />} />
        <Route path='/softwareengineering' element={<SoftwareEngineer />} />
      </Routes>
    </div>
  )
}

export default App
