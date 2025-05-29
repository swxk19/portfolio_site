import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react'; // Import Lucide icons

// InteractiveHeader component
const InteractiveHeader = ({ name, bio, email, phone, github, linkedin, isInteractiveMode, setIsInteractiveMode }) => {
  // Mode Toggle Button component for InteractiveView
  const ModeToggleButton = () => (
    <button
      onClick={() => setIsInteractiveMode(!isInteractiveMode)}
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4"
    >
      View as Plain CV
    </button>
  );

  return (
    <header className="relative py-24 px-4 text-center overflow-hidden">
      {/* Background blobs for artistic touch */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-6xl font-extrabold text-white mb-4 drop-shadow-lg leading-tight font-montserrat flex flex-col items-center">
          <span>Hey there!</span> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mt-2">{name} ✨</span> 
        </h1>
        <ModeToggleButton />
        <p className="text-xl text-gray-300 mt-6 mb-8 max-w-2xl mx-auto">
          {bio}
        </p>
        <a
          href="#projects"
          className="inline-block bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          See My Projects 👇
        </a>
      </div>
    </header>
  );
};

export default InteractiveHeader;
