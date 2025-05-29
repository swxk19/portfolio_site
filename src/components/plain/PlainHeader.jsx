import React from 'react';
import { Mail, Phone, Github } from 'lucide-react';

// Receive isInteractiveMode and setIsInteractiveMode as props
const PlainHeader = ({ name, email, phone, github, isInteractiveMode, setIsInteractiveMode }) => {
  // Mode Toggle Button component for PlainResumeView
  const ModeToggleButton = () => (
    <button
      onClick={() => setIsInteractiveMode(!isInteractiveMode)}
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded-full shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm mt-3" // Changed mt-2 to mt-3 for more gap
    >
      View Interactive Portfolio
    </button>
  );

  return (
    <header className="bg-slate-700 text-white p-8 rounded-t-lg shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left"> {/* Center align for smaller screens */}
          <h1 className="text-4xl font-bold">{name}</h1>
          {/* Place the Mode Toggle Button directly under the name */}
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
    </header>
  );
};

export default PlainHeader;
