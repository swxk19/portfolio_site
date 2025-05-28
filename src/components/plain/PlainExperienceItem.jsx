import React from 'react';
import { CalendarDays, MapPin, Building } from 'lucide-react';

const PlainExperienceItem = ({ title, company, dates, responsibilities, location }) => (
  <div className="mb-6 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
      <h3 className="text-xl font-semibold text-slate-700">{title}</h3>
      <span className="text-sm text-gray-500 mt-1 sm:mt-0 flex items-center">
        <CalendarDays size={14} className="mr-1 text-slate-500" /> {dates}
      </span>
    </div>
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
      <p className="text-md font-medium text-slate-600 flex items-center">
        <Building size={16} className="mr-2 text-slate-500" /> {company}
      </p>
      {location && <p className="text-sm text-gray-500 mt-1 sm:mt-0 flex items-center">
        <MapPin size={14} className="mr-1 text-slate-500" /> {location}
      </p>}
    </div>
    <ul className="list-disc list-inside text-gray-700 space-y-1 pl-1">
      {responsibilities.map((resp, index) => (
        <li key={index} className="text-sm leading-relaxed">{resp}</li>
      ))}
    </ul>
  </div>
);

export default PlainExperienceItem;