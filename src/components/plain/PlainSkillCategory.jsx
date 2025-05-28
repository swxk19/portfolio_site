import React from 'react';

const PlainSkillCategory = ({ title, skillsList }) => (
  <div className="mb-4">
    <h4 className="text-md font-semibold text-slate-700 mb-2">{title}:</h4>
    <div className="flex flex-wrap gap-2">
      {skillsList.map((skill, index) => (
        <span key={index} className="bg-slate-200 text-slate-700 px-3 py-1 text-sm rounded-full shadow-sm">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default PlainSkillCategory;