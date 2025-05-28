import React from 'react';
import InteractiveCard from '../common/InteractiveCard';
import { CalendarDays, MapPin, Building, Star } from 'lucide-react';

const InteractiveExperienceItem = ({ title, company, dates, responsibilities, location }) => (
  <InteractiveCard className="mb-8">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
      <h3 className="text-2xl font-semibold text-sky-700">{title}</h3>
      <span className="text-sm text-gray-500 mt-1 sm:mt-0 bg-sky-100 text-sky-700 px-2 py-1 rounded-full flex items-center">
        <CalendarDays size={14} className="mr-2" /> {dates}
      </span>
    </div>
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 text-md">
        <p className="font-medium text-slate-700 flex items-center"><Building size={16} className="mr-2 text-sky-600" /> {company}</p>
        {location && <p className="text-sm text-gray-500 mt-1 sm:mt-0 flex items-center"><MapPin size={14} className="mr-1 text-sky-600" /> {location}</p>}
    </div>
    <ul className="space-y-2">
      {responsibilities.map((resp, index) => (
        <li key={index} className="text-gray-700 flex">
          <Star size={16} className="mr-2 mt-1 text-amber-500 flex-shrink-0" />
          <span>{resp}</span>
        </li>
      ))}
    </ul>
  </InteractiveCard>
);

export default InteractiveExperienceItem;