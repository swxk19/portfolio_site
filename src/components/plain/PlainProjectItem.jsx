import React from 'react';
import { Github, CalendarDays, Users } from 'lucide-react';

const PlainProjectItem = ({ title, description, techStack, githubLink, dates, teamInfo }) => (
  <div className="mb-6 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
      <h3 className="text-xl font-semibold text-slate-700">{title}</h3>
      {dates && <span className="text-sm text-gray-500 mt-1 sm:mt-0 flex items-center">
         <CalendarDays size={14} className="mr-1 text-slate-500" /> {dates}
      </span>}
    </div>
     {teamInfo && <p className="text-sm text-gray-600 mb-1 flex items-center"><Users size={14} className="mr-1 text-slate-500" /> {teamInfo}</p>}
    <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2 pl-1">
        {description.map((desc, index) => (
            <li key={index} className="text-sm leading-relaxed">{desc}</li>
        ))}
    </ul>
    {techStack && techStack.length > 0 && (
      <div className="mb-2">
        <h5 className="text-sm font-semibold text-slate-600">Tech Stack:</h5>
        <div className="flex flex-wrap gap-1 mt-1">
          {techStack.map((tech, index) => (
            <span key={index} className="bg-green-100 text-green-700 px-2 py-0.5 text-xs rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    )}
    <div className="flex flex-wrap gap-3 mt-3">
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-slate-600 hover:text-slate-900 font-medium flex items-center bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md transition-colors"
        >
          <Github size={16} className="mr-2" /> View on GitHub
        </a>
      )}
    </div>
  </div>
);

export default PlainProjectItem;