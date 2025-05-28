import React from 'react';
import InteractiveCard from '../common/InteractiveCard';
import { Github, CalendarDays, Users, CheckCircle } from 'lucide-react';

const InteractiveProjectItem = ({ title, description, techStack, githubLink, dates, teamInfo }) => (
  <InteractiveCard className="mb-8 flex flex-col h-full">
    <div className="flex-grow">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
            <h3 className="text-2xl font-semibold text-sky-700">{title}</h3>
            {dates && <span className="text-sm text-gray-500 mt-1 sm:mt-0 bg-sky-100 text-sky-700 px-2 py-1 rounded-full flex items-center">
                <CalendarDays size={14} className="mr-2" /> {dates}
            </span>}
        </div>
        {teamInfo && <p className="text-sm text-gray-600 mb-2 flex items-center"><Users size={14} className="mr-1 text-sky-600" /> {teamInfo}</p>}
        <ul className="space-y-2 mb-4">
        {description.map((desc, index) => (
            <li key={index} className="text-gray-700 flex">
            <CheckCircle size={16} className="mr-2 mt-1 text-green-500 flex-shrink-0" />
            <span>{desc}</span>
            </li>
        ))}
        </ul>
        {techStack && techStack.length > 0 && (
        <div className="mb-4">
            <h5 className="text-sm font-semibold text-slate-600 mb-1">Core Technologies:</h5>
            <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
                <span key={index} className="bg-teal-100 text-teal-700 px-3 py-1 text-xs rounded-full font-medium">
                {tech}
                </span>
            ))}
            </div>
        </div>
        )}
    </div>
    <div className="mt-auto"> {/* Pushes button to bottom */}
        {githubLink && (
            <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-slate-700 hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
            >
            <Github size={18} className="mr-2" /> View on GitHub
            </a>
        )}
    </div>
  </InteractiveCard>
);

export default InteractiveProjectItem;