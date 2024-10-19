import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurDomains from './pages/OurDomains';
import Events from './pages/Events';
import OurTeam from './pages/OurTeam';
import Blogs from './pages/Blogs';
import Apply from './pages/Apply';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#2C5364] via-[#203A43] to-[#0F2027]">
        <Navbar />
        <main className="flex-grow pt-16"> {/* Add padding-top to account for fixed Navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-domains" element={<OurDomains />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/apply" element={<Apply />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
