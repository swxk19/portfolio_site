import React from 'react';
import SectionTitle from '../common/SectionTitle';
import InteractiveEducationItem from './InteractiveEducationItem';
import { GraduationCap } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

const InteractiveEducation = () => (
  <section id="education" className="mb-12">
    <SectionTitle title="Education" icon={<GraduationCap size={32} className="text-sky-600" />} className="justify-center" />
     <div className="space-y-6">
        {resumeData.education.map((item, index) => (
            <InteractiveEducationItem key={index} {...item} />
        ))}
    </div>
  </section>
);

export default InteractiveEducation;
