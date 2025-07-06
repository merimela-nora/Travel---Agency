import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Destinations from './pages/Destinations';
import Blog from './pages/Blog';
import Trips from './pages/Trips';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/destinations" element={<Destinations/>} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
