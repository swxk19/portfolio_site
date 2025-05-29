import React, { useState } from 'react';
import { resumeData } from '../data/resumeData'; // Import resume data
import InteractiveHeader from '../components/interactive/InteractiveHeader';
import InteractiveAbout from '../components/interactive/InteractiveAbout';
import InteractiveEducation from '../components/interactive/InteractiveEducation';
import InteractiveSkills from '../components/interactive/InteractiveSkills';
import InteractiveProjects from '../components/interactive/InteractiveProjects';
import InteractiveFooter from '../components/interactive/InteractiveFooter';

// Helper map for skill emojis (moved here as it's used for processing categorizedSkills)
const skillEmojiMap = {
  'Python': '🐍',
  'JavaScript': '💻', // Corrected emoji
  'TypeScript': '📜',
  'Java': '☕',
  'C': '⚙️',
  'SQL': '🗄️',
  'React': '⚛️',
  'PyTorch': '🧠',
  'FastAPI': '⚡',
  'MongoDB': '🍃',
  'PostGresDB': '🐘',
  'AWS (EC2)': '☁️',
  'Docker': '🐳',
  'Gradle': '🛠️',
  'Selenium': '🌐',
  'Jest': '✅',
  'Playwright': '🎭',
  'JMeter': '🚀',
  'Machine Learning': '🤖',
  'Software Engineering Principles': '📐',
  'Agile Development': '🏃',
  'Data Structures & Algorithms': '🧩',
  'Git & GitHub': '🐙',
};

// InteractiveView component for the portfolio webpage
export default function InteractiveView({ isInteractiveMode, setIsInteractiveMode }) {
  // State to manage the currently open skill category for the accordion
  const [openCategory, setOpenCategory] = useState(null); // Stores the category name, or null if none are open

  // Function to toggle the open/close state of a category
  const toggleCategory = (categoryName) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

  // Process skills from resumeData into categorizedSkills structure
  const categorizedSkills = [
    { category: 'Programming Languages', emoji: '📚', skills: [] },
    { category: 'Frameworks & Libraries', emoji: '🏗️', skills: [] },
    { category: 'Databases', emoji: '🗃️', skills: [] },
    { category: 'Tools & Platforms', emoji: '🛠️', skills: [] },
    { category: 'Testing & DevOps', emoji: '🧪', skills: [] },
    { category: 'Concepts & Methodologies', emoji: '💡', skills: [] },
  ];

  // Populate skills based on resumeData and map to categories
  resumeData.skills.forEach(skillCategory => {
    skillCategory.skillsList.forEach(skillName => {
      const skillWithEmoji = { name: skillName, emoji: skillEmojiMap[skillName] || '✨' };

      // Determine which category this skill belongs to based on its name
      if (['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'SQL'].includes(skillName)) {
        categorizedSkills[0].skills.push(skillWithEmoji); // Programming Languages
      } else if (['React', 'PyTorch', 'FastAPI'].includes(skillName)) {
        categorizedSkills[1].skills.push(skillWithEmoji); // Frameworks & Libraries
      } else if (['MongoDB', 'PostGresDB'].includes(skillName)) {
        categorizedSkills[2].skills.push(skillWithEmoji); // Databases
      } else if (['AWS (EC2)', 'Docker', 'Gradle', 'Git & GitHub'].includes(skillName)) {
        categorizedSkills[3].skills.push(skillWithEmoji); // Tools & Platforms
      } else if (['Jest', 'Playwright', 'JMeter', 'Selenium'].includes(skillName)) {
        categorizedSkills[4].skills.push(skillWithEmoji); // Testing & DevOps
      }
    });
  });

  // Add concepts from resumeData.coursework or manually if not covered by skillsList
  // For now, these are explicitly added as they represent broader concepts
  // Ensure no duplicates if skills like 'Machine Learning' are already in skillsList
  const conceptsToAdd = [
    { name: 'Machine Learning', emoji: skillEmojiMap['Machine Learning'] },
    { name: 'Software Engineering Principles', emoji: skillEmojiMap['Software Engineering Principles'] },
    { name: 'Agile Development', emoji: skillEmojiMap['Agile Development'] },
    { name: 'Data Structures & Algorithms', emoji: skillEmojiMap['Data Structures & Algorithms'] }
  ];
  conceptsToAdd.forEach(concept => {
    if (!categorizedSkills[5].skills.some(s => s.name === concept.name)) {
      categorizedSkills[5].skills.push(concept);
    }
  });


  // Sort skills within each category alphabetically by name
  categorizedSkills.forEach(category => {
    category.skills.sort((a, b) => a.name.localeCompare(b.name));
  });

  // Process projects from resumeData
  const projectsData = resumeData.projects.map(proj => ({
    title: proj.title,
    description: proj.description.join(' '), // Join description array into a single string
    tech: proj.techStack,
    link: proj.githubLink,
    image: `https://placehold.co/400x250/cccccc/333333?text=${proj.title.replace(/\s/g, '+')}`, // Placeholder image
  }));

  // Process education from resumeData
  const educationData = resumeData.education.map(edu => ({
    degree: edu.degree,
    institution: edu.institution,
    year: edu.year,
    notes: edu.details || [], // Ensure notes is an array
  }));


  return (
    // Apply Poppins as the base font, Montserrat for headings
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 text-gray-200 font-poppins">

      {/* Interactive Header */}
      <InteractiveHeader
        name={resumeData.name}
        bio={resumeData.bio}
        email={resumeData.email}
        phone={resumeData.phone}
        github={resumeData.github}
        linkedin={resumeData.linkedin}
        isInteractiveMode={isInteractiveMode}
        setIsInteractiveMode={setIsInteractiveMode}
      />

      {/* About Me Section */}
      <InteractiveAbout
        email={resumeData.email}
        phone={resumeData.phone}
        institution={resumeData.education[0]?.institution}
      />

      {/* Education Section */}
      <InteractiveEducation educationData={educationData} />

      {/* Skills Section */}
      <InteractiveSkills
        categorizedSkills={categorizedSkills}
        openCategory={openCategory}
        toggleCategory={toggleCategory}
      />

      {/* Projects Section */}
      <InteractiveProjects
        projectsData={projectsData}
        githubLink={resumeData.github}
      />

      {/* Footer */}
      <InteractiveFooter
        name={resumeData.name}
        linkedin={resumeData.linkedin}
        github={resumeData.github}
        email={resumeData.email}
      />

      {/* Custom CSS for blob animation and 3D text effect (kept here as they are global to this view's aesthetic) */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.4, 0.4, 0.8);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .text-3d-effect {
          text-shadow:
            0.5px 0.5px 0px rgba(0, 0, 0, 0.5),
            1px 1px 0px rgba(0, 0, 0, 0.3),
            1.5px 1.5px 0px rgba(0, 0, 0, 0.1);
          paint-order: fill stroke;
        }

        /* Custom fonts (ensure these are loaded in App.js or index.html) */
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </div>
  );
}
