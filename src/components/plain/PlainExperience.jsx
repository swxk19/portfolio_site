import React from 'react';
import SectionTitle from '../common/SectionTitle';
import PlainExperienceItem from './PlainExperienceItem';
import { Briefcase } from 'lucide-react';
import { resumeData } from '../../data/resumeData'; 
const PlainExperience = () => (
  <section className="mb-8">
    <SectionTitle title="Experience" icon={<Briefcase size={28} className="text-slate-600" />} />
    {resumeData.experience.map((item, index) => (
      <PlainExperienceItem key={index} {...item} />
    ))}
  </section>
);

export default PlainExperience;