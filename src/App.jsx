import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/home.jsx';
import Services from './pages/services.jsx';
import Portfolio from './pages/portfolio.jsx';
import AboutUs from './pages/aboutUs.jsx';

function App() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/About" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

