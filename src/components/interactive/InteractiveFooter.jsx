import React from 'react';

// InteractiveFooter component
const InteractiveFooter = ({ name, linkedin, github, email }) => {
  return (
    <footer className="py-8 px-4 text-center text-gray-400 text-sm">
      <p>&copy; {new Date().getFullYear()} {name}. All rights reserved. Built with ❤️ and React.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">LinkedIn</a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">GitHub</a>
        <a href={`mailto:${email}`} className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Email</a>
      </div>
    </footer>
  );
};

export default InteractiveFooter;
