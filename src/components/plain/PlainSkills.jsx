import React from 'react';
import SectionTitle from '../common/SectionTitle';
import PlainSkillCategory from './PlainSkillCategory';
import { Zap } from 'lucide-react';
import { resumeData } from '../../data/resumeData'; // Import data

const PlainSkills = () => (
  <section className="mb-8 p-4 border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow">
    <SectionTitle title="Skills" icon={<Zap size={28} className="text-slate-600" />} />
    {resumeData.skills.map((category, index) => (
      <PlainSkillCategory key={index} title={category.title} skillsList={category.skillsList} />
    ))}
  </section>
);

export default PlainSkills;