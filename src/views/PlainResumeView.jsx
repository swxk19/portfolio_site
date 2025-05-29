import React from 'react';
import PlainHeader from '../components/plain/PlainHeader';
import PlainExperience from '../components/plain/PlainExperience';
import PlainProjects from '../components/plain/PlainProjects';
import PlainEducation from '../components/plain/PlainEducation';
import PlainSkills from '../components/plain/PlainSkills';
import PlainCoursework from '../components/plain/PlainCoursework';
import { resumeData } from '../data/resumeData';

// Receive isInteractiveMode and setIsInteractiveMode as props
const PlainResumeView = ({ isInteractiveMode, setIsInteractiveMode }) => {
  return (
    <div className="container mx-auto max-w-4xl px-4">
      <PlainHeader
        name={resumeData.name}
        email={resumeData.email}
        phone={resumeData.phone}
        github={resumeData.github}
        isInteractiveMode={isInteractiveMode}
        setIsInteractiveMode={setIsInteractiveMode}
      />
      <main className="bg-white p-6 sm:p-8 rounded-b-lg shadow-lg">
        <PlainExperience />
        <PlainEducation />
        <PlainSkills />
        <PlainCoursework />
        <PlainProjects />
      </main>
    </div>
  );
};

export default PlainResumeView;
