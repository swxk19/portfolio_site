import React from 'react';
import SectionTitle from '../common/SectionTitle';
import InteractiveExperienceItem from './InteractiveExperienceItem';
import { Briefcase } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

const InteractiveExperience = () => (
  <section id="experience" className="mb-12">
    <SectionTitle title="My Journey" icon={<Briefcase size={32} className="text-sky-600" />} className="justify-center" />
    <div className="space-y-8">
      {resumeData.experience.map((item, index) => (
        <InteractiveExperienceItem key={index} {...item} />
      ))}
    </div>
  </section>
);

export default InteractiveExperience;