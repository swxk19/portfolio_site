import React from 'react';

const SectionTitle = ({ title, icon, className = "" }) => (
  <div className={`flex items-center mb-6 ${className}`}>
    {icon}
    <h2 className="text-2xl font-bold text-gray-800 ml-3">{title}</h2>
  </div>
);

export default SectionTitle;