import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ClientStories from "./pages/Clientstories";
import ContactUs from "./pages/ContactUs";
import SignUpPage from "./pages/SignUp";
import SignIn from "./pages/SignIn"
import Footer from "./Footer/Footer"

//import './App.css'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/client-stories" element={<ClientStories />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
