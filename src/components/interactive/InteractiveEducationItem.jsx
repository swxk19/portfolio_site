import React from 'react';
import InteractiveCard from '../common/InteractiveCard';
import { CalendarDays, GraduationCap, Star } from 'lucide-react';

const InteractiveEducationItem = ({ degree, institution, year, details }) => (
    <InteractiveCard className="mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
            <h3 className="text-xl font-semibold text-sky-700">{degree}</h3>
            <span className="text-sm text-gray-500 mt-1 sm:mt-0 bg-sky-100 text-sky-700 px-2 py-1 rounded-full flex items-center">
                <CalendarDays size={14} className="mr-2" /> {year}
            </span>
        </div>
        <p className="text-md font-medium text-slate-700 mb-2 flex items-center">
            <GraduationCap size={18} className="mr-2 text-sky-600" /> {institution}
        </p>
        {details && details.length > 0 && (
        <ul className="space-y-1">
            {details.map((detail, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
                <Star size={14} className="mr-2 text-amber-400" /> {detail}
            </li>
            ))}
        </ul>
        )}
    </InteractiveCard>
);

export default InteractiveEducationItem;