import React from 'react';
import InteractiveHeader from '../components/interactive/InteractiveHeader';
import InteractiveExperience from '../components/interactive/InteractiveExperience';
import InteractiveProjects from '../components/interactive/InteractiveProjects';
import InteractiveEducation from '../components/interactive/InteractiveEducation';
import InteractiveSkills from '../components/interactive/InteractiveSkills';
import InteractiveCoursework from '../components/interactive/InteractiveCoursework';
import Navbar from '../components/interactive/Navbar'; // Import Navbar
import { resumeData } from '../data/resumeData';

const InteractiveView = () => {
  return (
    <div className="bg-gray-800 min-h-screen">
      <Navbar /> {/* Include the Navbar */}
      <div className="container mx-auto px-6 lg:px-8 py-24 mt-16"> {/* Adjust padding and margin to account for fixed navbar */}
        <InteractiveHeader
          name={resumeData.name}
          bio={resumeData.bio}
          email={resumeData.email}
          phone={resumeData.phone}
          github={resumeData.github}
          linkedin={resumeData.linkedin}
        />
        <main className="space-y-16">
          <InteractiveExperience />
          <InteractiveProjects />
          <InteractiveEducation />
          <InteractiveSkills />
          <InteractiveCoursework />
        </main>
        <footer className="text-center mt-24 py-8 border-t border-gray-700 text-gray-400">
          Designed with <span className="text-red-500">&hearts;</span> by Kelvin Seow &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
};

export default InteractiveView;