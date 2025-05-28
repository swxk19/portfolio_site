import React from 'react';
import SectionTitle from '../common/SectionTitle';
import PlainProjectItem from './PlainProjectItem';
import { Code } from 'lucide-react';
import { resumeData } from '../../data/resumeData'; // Import data

const PlainProjects = () => (
  <section className="mb-8">
    <SectionTitle title="Projects" icon={<Code size={28} className="text-slate-600" />} />
    {resumeData.projects.map((item, index) => (
      <PlainProjectItem key={index} {...item} />
    ))}
  </section>
);

export default PlainProjects;