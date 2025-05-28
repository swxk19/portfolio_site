import React from 'react';
import { CalendarDays, GraduationCap } from 'lucide-react';

const PlainEducationItem = ({ degree, institution, year, details }) => (
 <div className="mb-6 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
      <h3 className="text-xl font-semibold text-slate-700">{degree}</h3>
      <span className="text-sm text-gray-500 mt-1 sm:mt-0 flex items-center">
        <CalendarDays size={14} className="mr-1 text-slate-500" /> {year}
      </span>
    </div>
    <p className="text-md font-medium text-slate-600 mb-1 flex items-center">
      <GraduationCap size={16} className="mr-2 text-slate-500" /> {institution}
    </p>
    {details && details.length > 0 && (
      <ul className="list-disc list-inside text-gray-700 space-y-1 pl-1">
        {details.map((detail, index) => (
          <li key={index} className="text-sm">{detail}</li>
        ))}
      </ul>
    )}
  </div>
);

export default PlainEducationItem;