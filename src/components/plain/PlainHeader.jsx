import React from 'react';
import { Mail, Phone, Github } from 'lucide-react';

// Receive isInteractiveMode and setIsInteractiveMode as props
const PlainHeader = ({ name, email, phone, github, isInteractiveMode, setIsInteractiveMode }) => {
  // Mode Toggle Button component for PlainResumeView
  const ModeToggleButton = () => (
    <button
      onClick={() => setIsInteractiveMode(!isInteractiveMode)}
      className="relative inline-flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-extrabold py-2 px-6 rounded-full shadow-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75 text-sm hover:scale-105 hover:shadow-2xl hover:-translate-y-1 ml-4 overflow-hidden group font-montserrat animate-subtle-bounce" // Changed font-inter to font-montserrat
    >
      <span className="text-3d-effect">View CV as</span>
      <span className="text-3d-effect">Interactive Web Page</span>
      {/* Gleam effect pseudo-element */}
      <span className="absolute top-0 left-0 w-full h-full block bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transform -skew-x-12 -translate-x-full group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 ease-out"></span>
    </button>
  );

  return (
    <header className="bg-slate-700 text-white p-8 rounded-t-lg shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left flex items-center">
          <h1 className="text-4xl font-bold">{name}</h1>
          {/* Place the Mode Toggle Button to the right of the name */}
          <ModeToggleButton />
        </div>
        <div className="mt-4 md:mt-0 text-sm space-y-1 text-right">
          {email && <a href={`mailto:${email}`} className="flex items-center justify-end hover:text-slate-300 transition-colors">
            <Mail size={16} className="mr-2" /> {email}
          </a>}
          {phone && <a href={`tel:${phone}`} className="flex items-center justify-end hover:text-slate-300 transition-colors">
            <Phone size={16} className="mr-2" /> {phone}
          </a>}
          {github && <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-end hover:text-slate-300 transition-colors">
            <Github size={16} className="mr-2" /> {github.replace('https://', '')}
          </a>}
        </div>
      </div>
      {/* Custom CSS for button animation and text outline */}
      <style>{`
        .font-bebas-neue {
          font-family: 'Bebas Neue', sans-serif;
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        .font-montserrat { /* Ensure Montserrat is defined here if not globally */
          font-family: 'Montserrat', sans-serif;
        }
        .text-3d-effect {
          /* Base text color is white from parent */
          text-shadow:
            0.5px 0.5px 0px rgba(0, 0, 0, 0.5),   /* Reduced shadow offsets and opacity */
            1px 1px 0px rgba(0, 0, 0, 0.3),
            1.5px 1.5px 0px rgba(0, 0, 0, 0.1);
          paint-order: fill stroke; /* Ensure fill is drawn before stroke if any other stroke is applied */
        }

        /* New animation for subtle periodic bounce */
        @keyframes subtle-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-6px); /* Increased upward bounce */
          }
          50% {
            transform: translateY(0);
          }
          75% {
            transform: translateY(-2px); /* Increased smaller upward bounce */
          }
        }
        .animate-subtle-bounce {
          animation: subtle-bounce 3s infinite ease-in-out; /* Slower, more subtle bounce */
        }
      `}</style>
    </header>
  );
};

export default PlainHeader;
