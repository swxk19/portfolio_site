import React from 'react';
import { ChevronsRight } from 'lucide-react'; // Using a new icon for skills

const PlainSkillItem = ({ title, skillsList }) => (
  <div className="mb-6 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white flex flex-col h-full">
    <div className="flex-grow">
      <h3 className="text-xl font-semibold text-slate-700 mb-2">{title}</h3>
      {skillsList && skillsList.length > 0 && (
        <div className="mb-2">
          <h5 className="text-sm font-semibold text-slate-600 mb-1">Technologies:</h5>
          <div className="flex flex-wrap gap-2">
            {skillsList.map((skill, index) => (
              <span key={index} className="bg-slate-200 text-slate-700 px-3 py-1 text-sm rounded-full shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

export default PlainSkillItem;