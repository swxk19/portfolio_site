import React from 'react';

const InteractiveCard = ({ children, className = "" }) => (
  <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${className}`}>
    {children}
  </div>
);

export default InteractiveCard;