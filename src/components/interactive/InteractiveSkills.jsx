import React from 'react';
import SectionTitle from '../common/SectionTitle';
import InteractiveCard from '../common/InteractiveCard';
import { Zap } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

const InteractiveSkills = () => (
  <section id="skills" className="mb-12">
    <SectionTitle title="My Toolkit" icon={<Zap size={32} className="text-sky-600" />} className="justify-center" />
    <InteractiveCard>
      {resumeData.skills.map((category, index) => (
        <div key={index} className="mb-6 last:mb-0">
          <h4 className="text-lg font-semibold text-slate-800 mb-3">{category.title}</h4>
          <div className="flex flex-wrap gap-3">
            {category.skillsList.map((skill, skillIndex) => (
              <span 
                key={skillIndex} 
                className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white px-4 py-2 text-sm rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </InteractiveCard>
  </section>
);

export default InteractiveSkills;