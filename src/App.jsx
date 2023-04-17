import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Allroutes/Home'
import About from './Allroutes/About'
import Clientstories from './Allroutes/Clientstories'
import ContactUs from './Allroutes/ContactUs'
import Loginpage from './Allroutes/Loginpage'
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
