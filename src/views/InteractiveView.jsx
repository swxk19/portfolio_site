import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react'; // Import Lucide icons for contact info
import { resumeData } from '../data/resumeData'; // Import resume data

// Helper map for skill emojis
const skillEmojiMap = {
  'Python': '🐍',
  'JavaScript': '�',
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
  'Git & GitHub': '🐙', // Explicitly add Git & GitHub emoji
  // Add more as needed
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
  categorizedSkills[5].skills.push(
    { name: 'Machine Learning', emoji: skillEmojiMap['Machine Learning'] },
    { name: 'Software Engineering Principles', emoji: skillEmojiMap['Software Engineering Principles'] },
    { name: 'Agile Development', emoji: skillEmojiMap['Agile Development'] },
    { name: 'Data Structures & Algorithms', emoji: skillEmojiMap['Data Structures & Algorithms'] }
  );

  // Sort skills within each category alphabetically by name
  categorizedSkills.forEach(category => {
    category.skills.sort((a, b) => a.name.localeCompare(b.name));
  });

  // Process projects from resumeData
  const projects = resumeData.projects.map(proj => ({
    title: proj.title,
    description: proj.description.join(' '), // Join description array into a single string
    tech: proj.techStack,
    link: proj.githubLink,
    image: `https://placehold.co/400x250/cccccc/333333?text=${proj.title.replace(/\s/g, '+')}`, // Placeholder image
  }));

  // Process education from resumeData
  const education = resumeData.education.map(edu => ({
    degree: edu.degree,
    institution: edu.institution,
    year: edu.year,
    notes: edu.details || [], // Ensure notes is an array
  }));

  // Mode Toggle Button component (now inside InteractiveView)
  const ModeToggleButton = () => (
    <button
      onClick={() => setIsInteractiveMode(!isInteractiveMode)}
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4"
    >
      View as Plain CV
    </button>
  );

  return (
    // Apply Poppins as the base font, Montserrat for headings
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 text-gray-200 font-poppins">

      {/* Hero Section */}
      <header className="relative py-24 px-4 text-center overflow-hidden">
        {/* Background blobs for artistic touch */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-6xl font-extrabold text-white mb-4 drop-shadow-lg leading-tight font-montserrat">
            Hey there! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{resumeData.name}</span> ✨
          </h1>
          {/* Place the Mode Toggle Button immediately after the name */}
          <ModeToggleButton />
          <p className="text-xl text-gray-300 mt-6 mb-8 max-w-2xl mx-auto"> {/* Adjusted margin-top */}
            {resumeData.bio}
          </p>
          <a
            href="#projects"
            className="inline-block bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            See My Projects 👇
          </a>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="py-16 px-4 bg-gray-800/70 backdrop-blur-sm rounded-3xl mx-auto max-w-5xl my-12 shadow-xl">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-white mb-4 font-montserrat">About Me 💡</h2>
          <p className="text-lg text-gray-300">A little bit about my journey and what makes me tick in the tech world.</p>
        </div>
        <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-200">
          <p className="mb-4">
            As a Computer Science major from {resumeData.education[0]?.institution} (NUS), I'm constantly fascinated by how technology shapes our world. My journey into code started with a curious click, and now I'm hooked on the thrill of bringing ideas to life, one line of code at a time!
          </p>
          <p className="mb-4">
            I thrive on challenges and enjoy diving deep into new concepts, whether it's optimizing algorithms, designing user-friendly interfaces, or exploring the frontiers of AI. When I'm not coding, you can probably find me [mention a casual hobby, e.g., "sipping coffee and brainstorming my next big project," or "exploring new hiking trails," or "playing video games"].
          </p>
          <p>
            I'm always eager to learn, collaborate, and contribute to impactful projects. Feel free to connect if you're building something awesome or just want to chat about tech! You can reach me at <a href={`mailto:${resumeData.email}`} className="text-cyan-400 hover:underline">{resumeData.email}</a> or <a href={`tel:${resumeData.phone}`} className="text-cyan-400 hover:underline">{resumeData.phone}</a>.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-gray-800/70 backdrop-blur-sm rounded-3xl mx-auto max-w-5xl my-12 shadow-xl">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-white mb-4 font-montserrat">My Learning Journey 🎓</h2>
          <p className="text-lg text-gray-300">Where I've honed my skills and expanded my knowledge.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gradient-to-br from-indigo-900 to-purple-900 p-6 rounded-2xl shadow-lg border-2 border-solid border-indigo-700">
              <h3 className="text-2xl font-bold text-cyan-400 mb-1 font-montserrat">{edu.degree}</h3>
              <p className="text-xl text-gray-200 mb-2">{edu.institution} | {edu.year}</p>
              {edu.notes.length > 0 && (
                <ul className="list-disc list-inside text-gray-300 text-base">
                  {edu.notes.map((note, noteIndex) => (
                    <li key={noteIndex}>{note}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section - NOW CATEGORIZED with Accordion-like behavior */}
      <section id="skills" className="py-16 px-4 bg-gray-800/70 backdrop-blur-sm rounded-3xl mx-auto max-w-5xl my-12 shadow-xl">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-white mb-4 font-montserrat">My Superpowers ⚡</h2>
          <p className="text-lg text-gray-300">The tools and tech I wield to make digital magic happen.</p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {categorizedSkills.map((category, catIndex) => (
            <div key={catIndex} className="rounded-2xl overflow-hidden shadow-lg border border-gray-700">
              {/* Accordion Header */}
              <button
                onClick={() => toggleCategory(category.category)}
                className="w-full flex justify-between items-center p-6 bg-gray-700 hover:bg-gray-600 transition-colors duration-200 cursor-pointer focus:outline-none"
              >
                <h3 className="text-2xl font-bold text-cyan-300 font-montserrat">
                  <span className="text-3xl mr-3">{category.emoji}</span>
                  {category.category}
                </h3>
                <span className={`transform transition-transform duration-300 ${openCategory === category.category ? 'rotate-180' : 'rotate-0'}`}>
                  <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </button>

              {/* Accordion Content */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openCategory === category.category
                    ? 'grid-rows-[1fr] opacity-100' // Expands
                    : 'grid-rows-[0fr] opacity-0' // Collapses
                }`}
              >
                <div className="overflow-hidden"> {/* Ensures content is clipped during collapse */}
                  <div className="p-6 bg-gray-800/90">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-2xl text-center shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 ease-in-out border-2 border-dashed border-gray-600"
                        >
                          <span className="text-5xl mb-3 block">{skill.emoji}</span>
                          <h4 className="text-xl font-bold text-cyan-300 font-poppins">{skill.name}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-800/70 backdrop-blur-sm rounded-3xl mx-auto max-w-5xl my-12 shadow-xl">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-white mb-4 font-montserrat">My Projects 🛠️</h2>
          <p className="text-lg text-gray-300">A sneak peek into some of the cool things I've built.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-800 to-indigo-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-103 transition-all duration-300 ease-in-out border-2 border-solid border-blue-700"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-xl mb-4 border-2 border-white shadow-sm"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x250/cccccc/333333?text=${project.title.replace(/\s/g, '+')}`; }}
              />
              <h3 className="text-2xl font-bold text-cyan-400 mb-2 font-montserrat">{project.title}</h3>
              <p className="text-gray-300 text-base mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-700 text-gray-200 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-cyan-700 transition-colors duration-200"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-xl text-gray-300">
            Want to see more? Check out my full <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-bold">GitHub profile</a>!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved. Built with ❤️ and React.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">LinkedIn</a>
          <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">GitHub</a>
          <a href={`mailto:${resumeData.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Email</a>
        </div>
      </footer>

      {/* Custom CSS for blob animation */}
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

        /* Custom fonts */
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
