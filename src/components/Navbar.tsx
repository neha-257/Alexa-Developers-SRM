import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo1 from '../assets/images/logo1.png'; // Import the logo image

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#2C5364] via-[#203A43] to-[#0F2027] text-white border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* Logo */}
            <Link to="/">
              <img src={logo1} alt="Alexa Developers SRM" className="h-10 w-auto" />
            </Link>
          </div>
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex items-baseline space-x-4 ml-8">
              <Link to="/" className="hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Home</Link>
              <Link to="/our-domains" className="hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Our Domains</Link>
              <Link to="/events" className="hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Events</Link>
              <Link to="/team" className="hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Our Team</Link>
              <Link to="/blogs" className="hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Blogs</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link to="/apply" className="bg-white text-[#392D69] hover:bg-opacity-90 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Apply Now</Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none transition-colors duration-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-white/10 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Home</Link>
            <Link to="/our-domains" className="block hover:bg-white/10 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Our Domains</Link>
            <Link to="/events" className="block hover:bg-white/10 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Events</Link>
            <Link to="/team" className="block hover:bg-white/10 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Our Team</Link>
            <Link to="/blogs" className="block hover:bg-white/10 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Blogs</Link>
            <Link to="/apply" className="block bg-white text-[#392D69] hover:bg-opacity-90 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Apply Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
