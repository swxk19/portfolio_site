import React from 'react';
import SectionTitle from '../common/SectionTitle';
import InteractiveProjectItem from './InteractiveProjectItem';
import { Code } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

const InteractiveProjects = () => (
  <section id="projects" className="mb-12">
    <SectionTitle title="Featured Projects" icon={<Code size={32} className="text-sky-600" />} className="justify-center" />
    <div className="grid md:grid-cols-2 gap-8">
      {resumeData.projects.map((item, index) => (
        <InteractiveProjectItem key={index} {...item} />
      ))}
    </div>
  </section>
);

export default InteractiveProjects;