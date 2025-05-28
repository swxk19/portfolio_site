import React from 'react';
import InteractiveHeader from '../components/interactive/InteractiveHeader';
import InteractiveExperience from '../components/interactive/InteractiveExperience';
import InteractiveProjects from '../components/interactive/InteractiveProjects';
import InteractiveEducation from '../components/interactive/InteractiveEducation';
import InteractiveSkills from '../components/interactive/InteractiveSkills';
import InteractiveCoursework from '../components/interactive/InteractiveCoursework';
import { resumeData } from '../data/resumeData';

const InteractiveView = () => (
  <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
    <InteractiveHeader 
      name={resumeData.name}
      bio={resumeData.bio}
      email={resumeData.email}
      phone={resumeData.phone}
      github={resumeData.github}
      linkedin={resumeData.linkedin}
    />
    <main>
      <InteractiveExperience />
      <InteractiveEducation />
      <InteractiveSkills />
      <InteractiveCoursework />
      <InteractiveProjects />
    </main>
    <footer className="text-center mt-12 py-6 border-t border-slate-200">
      <p className="text-sm text-gray-500">
        Interactive Mode | {resumeData.name} &copy; {new Date().getFullYear()}
      </p>
    </footer>
  </div>
);

export default InteractiveView;