import React from 'react';
import SectionTitle from '../common/SectionTitle';
import PlainSkillItem from './PlainSkillItem'; // Changed import
import { Zap } from 'lucide-react';
import { resumeData } from '../../data/resumeData'; // Import data

const PlainSkills = () => (
  <section className="mb-8"> {/* Removed outer card styling */}
    <SectionTitle title="Skills" icon={<Zap size={28} className="text-slate-600" />} />
    <div className="grid md:grid-cols-2 gap-8"> {/* Added grid layout */}
      {resumeData.skills.map((category, index) => (
        <PlainSkillItem key={index} title={category.title} skillsList={category.skillsList} />
      ))}
    </div>
  </section>
);

export default PlainSkills;