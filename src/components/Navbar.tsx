import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-xl font-bold">Alexa Developers SRM</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/events" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Events</Link>
              <Link to="/team" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Our Team</Link>
              <Link to="/blogs" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Blogs</Link>
              <Link to="/apply" className="bg-white text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-md text-sm font-medium">Apply Now</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/events" className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">Events</Link>
            <Link to="/team" className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">Our Team</Link>
            <Link to="/blogs" className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">Blogs</Link>
            <Link to="/apply" className="block bg-white text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-md text-base font-medium">Apply Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;