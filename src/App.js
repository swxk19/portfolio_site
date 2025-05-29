import React, { useState, useEffect } from 'react';
import { Eye, Palette } from 'lucide-react';
import PlainResumeView from './views/PlainResumeView'; // Assuming this file exists
import InteractiveView from './views/InteractiveView'; // Import the new InteractiveView
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [isInteractiveMode, setIsInteractiveMode] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load Tailwind CSS
      if (!document.getElementById('tailwind-script')) {
        const tailwindScript = document.createElement('script');
        tailwindScript.id = 'tailwind-script';
        tailwindScript.src = 'https://cdn.tailwindcss.com';
        document.head.appendChild(tailwindScript);
      }

      // Load Poppins Font
      if (!document.getElementById('poppins-font')) {
        const poppinsFontLink = document.createElement('link');
        poppinsFontLink.id = 'poppins-font';
        poppinsFontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap';
        poppinsFontLink.rel = 'stylesheet';
        document.head.appendChild(poppinsFontLink);
      }

      // Load Montserrat Font
      if (!document.getElementById('montserrat-font')) {
        const montserratFontLink = document.createElement('link');
        montserratFontLink.id = 'montserrat-font';
        montserratFontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap';
        montserratFontLink.rel = 'stylesheet';
        document.head.appendChild(montserratFontLink);
      }

      // Load AOS CSS
      if (!document.getElementById('aos-css')) {
        const aosCssLink = document.createElement('link');
        aosCssLink.id = 'aos-css';
        aosCssLink.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
        aosCssLink.rel = 'stylesheet';
        document.head.appendChild(aosCssLink);
      }

      // Load AOS JS
      if (!document.getElementById('aos-js')) {
        const aosJsScript = document.createElement('script');
        aosJsScript.id = 'aos-js';
        aosJsScript.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
        aosJsScript.onload = () => {
          if (window.AOS) {
            window.AOS.init({
              duration: 800,
              once: true,
            });
          }
        };
        document.body.appendChild(aosJsScript);
      }

      // Base styles for body, removed font-family as it's handled by views
      if (!document.getElementById('base-styles')) {
        const style = document.createElement('style');
        style.id = 'base-styles';
        style.textContent = `
          body {
            line-height: 1.6;
            transition: background-color 0.3s ease, color 0.3s ease;
          }
          body.interactive-mode {
            background-color: #0d1117; /* Dark background for interactive mode */
            color: #e2e8f0; /* Light text for interactive mode */
          }
          body.plain-mode {
            background-color: #f0f4f8; /* Light background for plain mode */
            color: #333; /* Dark text for plain mode */
          }
          ::-webkit-scrollbar { width: 8px; height: 8px; }
          ::-webkit-scrollbar-track { background: #1a202c; border-radius: 10px; }
          ::-webkit-scrollbar-thumb { background: #2d3748; border-radius: 10px; }
          ::-webkit-scrollbar-thumb:hover { background: #4a5568; }
        `;
        document.head.appendChild(style);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
        document.body.classList.toggle('interactive-mode', isInteractiveMode);
        document.body.classList.toggle('plain-mode', !isInteractiveMode);
        if (window.AOS) {
          window.AOS.refresh();
        }
    }
  }, [isInteractiveMode]);

  const ModeToggleButton = () => (
    <button
      onClick={() => setIsInteractiveMode(!isInteractiveMode)}
      title={isInteractiveMode ? "Switch to Plain Resume" : "Switch to Interactive Website"}
      className="fixed top-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      {isInteractiveMode ? <Eye size={24} /> : <Palette size={24} />}
    </button>
  );

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300`}>
        <ModeToggleButton />
        {isInteractiveMode ? <InteractiveView /> : <PlainResumeView />}
      </div>
    </Router>
  );
}

export default App;
