import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Clientstories from './pages/ClientStories'
import ContactUs from './pages/ContactUs'
import Loginpage from './pages/LoginPage'
//import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/About" element={<About/>}/>
        <Route  path="/Clientstories" element={<Clientstories/>}/>
        <Route  path="/Contactus" element={<ContactUs/>}/>
        <Route  path="/login" element={<Loginpage/>}/>
      </Routes>
    </div>
  )
}

export default App
