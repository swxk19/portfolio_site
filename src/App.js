import React, { useState, useEffect } from 'react';
import { Eye, Palette } from 'lucide-react';
import PlainResumeView from './views/PlainResumeView';
import InteractiveView from './views/InteractiveView';
// Note: In a standard project, global styles (like body background, fonts, Tailwind directives)
// would be handled in index.css and index.html, not via JavaScript like this.
// This useEffect is a workaround for the immersive environment.

function App() {
  const [isInteractiveMode, setIsInteractiveMode] = useState(true); // Start in interactive mode by default for dark theme

  // Effect for global style setup (workaround for immersive environment)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensure Tailwind CSS is loaded (typically in index.html)
      if (!document.getElementById('tailwind-script')) {
        const tailwindScript = document.createElement('script');
        tailwindScript.id = 'tailwind-script';
        tailwindScript.src = 'https://cdn.tailwindcss.com';
        document.head.appendChild(tailwindScript);
      }

      // Ensure Inter font is loaded (typically in index.html or CSS)
      if (!document.getElementById('inter-font')) {
        const fontLink = document.createElement('link');
        fontLink.id = 'inter-font';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);
      }

      // Load AOS CSS
      if (!document.getElementById('aos-css')) {
        const aosCssLink = document.createElement('link');
        aosCssLink.id = 'aos-css';
        aosCssLink.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
        aosCssLink.rel = 'stylesheet';
        document.head.appendChild(aosCssLink);
      }

      // Load AOS JS and initialize
      if (!document.getElementById('aos-js')) {
        const aosJsScript = document.createElement('script');
        aosJsScript.id = 'aos-js';
        aosJsScript.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
        aosJsScript.onload = () => {
          if (window.AOS) {
            window.AOS.init({
              duration: 800, // values from 0 to 3000, with step 50ms
              once: true,    // whether animation should happen only once - while scrolling down
            });
          }
        };
        document.body.appendChild(aosJsScript); // Append to body to ensure it loads after DOM
      }

      // Base body styles and scrollbar
      if (!document.getElementById('base-styles')) {
        const style = document.createElement('style');
        style.id = 'base-styles';
        style.textContent = `
          body {
            font-family: 'Inter', sans-serif;
            color: #e2e8f0; /* Default text color for dark theme */
            line-height: 1.6;
            transition: background-color 0.3s ease, color 0.3s ease;
          }
          body.interactive-mode {
            background-color: #1a202c; /* Dark background for interactive mode */
          }
          body.plain-mode {
            background-color: #f0f4f8; /* Background for plain mode (unchanged) */
            color: #333; /* Text color for plain mode */
          }
          ::-webkit-scrollbar { width: 8px; height: 8px; }
          ::-webkit-scrollbar-track { background: #2d3748; border-radius: 10px; } /* Darker scrollbar track */
          ::-webkit-scrollbar-thumb { background: #4a5568; border-radius: 10px; } /* Darker scrollbar thumb */
          ::-webkit-scrollbar-thumb:hover { background: #616e7f; }
        `;
        document.head.appendChild(style);
      }
    }
  }, []);

  // Effect to toggle body class based on mode
  useEffect(() => {
    if (typeof window !== 'undefined') {
        document.body.classList.toggle('interactive-mode', isInteractiveMode);
        document.body.classList.toggle('plain-mode', !isInteractiveMode);
        // Re-initialize AOS when mode changes to ensure animations reset if needed
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
    // The outer div's background is less important now as body style is controlled
    <div className={`min-h-screen transition-colors duration-300 py-6 sm:py-12`}>
      <ModeToggleButton />
      {isInteractiveMode ? <InteractiveView /> : <PlainResumeView />}
    </div>
  );
}

export default App;
