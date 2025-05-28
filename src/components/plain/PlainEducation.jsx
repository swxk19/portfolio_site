import React from 'react';
import SectionTitle from '../common/SectionTitle';
import PlainEducationItem from './PlainEducationItem';
import { GraduationCap } from 'lucide-react';
import { resumeData } from '../../data/resumeData'; // Import data

const PlainEducation = () => (
  <section className="mb-8">
    <SectionTitle title="Education" icon={<GraduationCap size={28} className="text-slate-600" />} />
    {resumeData.education.map((item, index) => (
      <PlainEducationItem key={index} {...item} />
    ))}
  </section>
);

export default PlainEducation;