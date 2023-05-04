import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ClientStories from "./pages/ClientStories";
import ContactUs from "./pages/ContactUs";
import SignUpPage from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Footer from "./Footer/Footer";
import Pricing from "./pages/Pricing";

//import './App.css'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/client-stories" element={<ClientStories />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
