import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ClientStories from "./pages/Clientstories";
import ContactUs from "./pages/ContactUs";
import LoginPage from "./pages/Loginpage";

//import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/client-stories" element={<ClientStories />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
