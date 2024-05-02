import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Rides from './pages/Rides';
import Service from './pages/Service';
import Request from './pages/RequestForm';
import Faqq from './pages/Faqq';
import Contact from './pages/ContactForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/rides" element={<Rides/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/request" element={<Request/>} />
        <Route path="/faq" element={<Faqq/>} />
        <Route path="/contact" element={<Contact/>} />

      
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
