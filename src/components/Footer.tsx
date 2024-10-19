import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-sm text-white border-t border-white/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Alexa Developers SRM</h3>
            <p className="text-sm text-white/80">Voices United, Tech Amplified</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white/80 transition-colors duration-300">Home</a></li>
              <li><a href="/our-domains" className="hover:text-white/80 transition-colors duration-300">Our Domains</a></li>
              <li><a href="/events" className="hover:text-white/80 transition-colors duration-300">Events</a></li>
              <li><a href="/team" className="hover:text-white/80 transition-colors duration-300">Our Team</a></li>
              <li><a href="/blogs" className="hover:text-white/80 transition-colors duration-300">Blogs</a></li>
              <li><a href="/apply" className="hover:text-white/80 transition-colors duration-300">Apply Now</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white/80 transition-colors duration-300"><Facebook /></a>
              <a href="#" className="hover:text-white/80 transition-colors duration-300"><Twitter /></a>
              <a href="#" className="hover:text-white/80 transition-colors duration-300"><Instagram /></a>
              <a href="#" className="hover:text-white/80 transition-colors duration-300"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/80">&copy; {new Date().getFullYear()} Alexa Developers SRM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
