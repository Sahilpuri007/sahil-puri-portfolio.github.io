
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-40 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">SP</span>
          <span className="hidden sm:inline-block font-bold tracking-tight text-gray-100 uppercase text-sm">Sahil Puri</span>
        </div>
        
        <div className="flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
          <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20">Let's Talk</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
