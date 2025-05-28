import React, { useState, useEffect } from 'react';
import { Eye, Palette } from 'lucide-react';
import PlainResumeView from './views/PlainResumeView';
import InteractiveView from './views/InteractiveView';
// Note: In a standard project, global styles (like body background, fonts, Tailwind directives)
// would be handled in index.css and index.html, not via JavaScript like this.
// This useEffect is a workaround for the immersive environment.

function App() {
  const [isInteractiveMode, setIsInteractiveMode] = useState(false);

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
      
      // Base body styles and scrollbar (typically in index.css)
      if (!document.getElementById('base-styles')) {
        const style = document.createElement('style');
        style.id = 'base-styles';
        style.textContent = `
          body {
            font-family: 'Inter', sans-serif;
            background-color: #f0f4f8; /* Default for plain mode */
            color: #333;
            line-height: 1.6;
            transition: background-color 0.3s ease;
          }
          body.interactive-mode {
            background-color: #e0f2fe; /* Background for interactive mode */
          }
          body.plain-mode {
            background-color: #f0f4f8; /* Background for plain mode */
          }
          ::-webkit-scrollbar { width: 8px; height: 8px; }
          ::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
          ::-webkit-scrollbar-thumb { background: #a0aec0; border-radius: 10px; }
          ::-webkit-scrollbar-thumb:hover { background: #718096; }
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
    }
  }, [isInteractiveMode]);

  const ModeToggleButton = () => (
    <button
      onClick={() => setIsInteractiveMode(!isInteractiveMode)}
      title={isInteractiveMode ? "Switch to Plain Resume" : "Switch to Interactive Website"}
      className="fixed top-4 right-4 z-50 bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
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