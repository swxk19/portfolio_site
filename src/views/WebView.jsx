import React, { useState } from 'react';

// Main App component for the portfolio webpage
export default function App() {
  // State to manage the currently open skill category for the accordion
  const [openCategory, setOpenCategory] = useState(null); // Stores the category name, or null if none are open

  // Function to toggle the open/close state of a category
  const toggleCategory = (categoryName) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

  // Define skills categorized with emojis for a fun touch
  const categorizedSkills = [
    {
      category: 'Programming Languages',
      emoji: '📚',
      skills: [
        { name: 'Python', emoji: '🐍' },
        { name: 'JavaScript', emoji: '💻' },
        { name: 'TypeScript', emoji: '📜' },
        { name: 'Java', emoji: '☕' },
        { name: 'C', emoji: '⚙️' },
        { name: 'SQL', emoji: '🗄️' },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      emoji: '🏗️',
      skills: [
        { name: 'React', emoji: '⚛️' },
        { name: 'PyTorch', emoji: '🧠' },
        { name: 'FastAPI', emoji: '⚡' },
      ],
    },
    {
      category: 'Databases',
      emoji: '🗃️',
      skills: [
        { name: 'MongoDB', emoji: '🍃' },
        { name: 'PostGresDB', emoji: '🐘' },
      ],
    },
    {
      category: 'Tools & Platforms',
      emoji: '🛠️',
      skills: [
        { name: 'AWS (EC2)', emoji: '☁️' },
        { name: 'Docker', emoji: '🐳' },
        { name: 'Gradle', emoji: '⚙️' },
        { name: 'Git & GitHub', emoji: '🐙' },
      ],
    },
    {
      category: 'Testing & DevOps',
      emoji: '🧪',
      skills: [
        { name: 'Jest', emoji: '✅' },
        { name: 'Playwright', emoji: '🎭' },
        { name: 'JMeter', emoji: '🚀' },
        { name: 'Selenium', emoji: '🌐' },
      ],
    },
    {
      category: 'Concepts & Methodologies',
      emoji: '💡',
      skills: [
        { name: 'Machine Learning', emoji: '🤖' },
        { name: 'Software Engineering Principles', emoji: '📐' },
        { name: 'Agile Development', emoji: '🏃' },
        { name: 'Data Structures & Algorithms', emoji: '🧩' },
      ],
    },
  ];

  // Define some placeholder projects
  const projects = [
    {
      title: 'E-commerce Site Testing',
      description: 'Engineered unit and integration tests for an e-commerce site, achieving code coverage of 95%. Created 75+ UI tests to ensure seamless user experience, functionality, and regression prevention.',
      tech: ['MongoDB', 'JavaScript', 'Jest', 'Playwright', 'JMeter'],
      link: 'https://github.com/swxk19/cs4218-project-2024-team04/',
      image: 'https://placehold.co/400x250/FFD700/000000?text=E-commerce+Testing',
    },
    {
      title: 'PeerPrep (Technical Interview Platform)',
      description: 'Led and coordinated a 4-member Agile development team for a technical interview preparation platform. Integrated video and chat functionalities to facilitate seamless communication during mock interviews.',
      tech: ['Python', 'FastAPI', 'Docker', 'TypeScript'],
      link: 'https://github.com/swxk19/ay2324s1-course-assessment-g23',
      image: 'https://placehold.co/400x250/87CEEB/000000?text=PeerPrep',
    },
    {
      title: 'Machine Learning Model for Ship Classification',
      description: 'Developed a machine learning model for ship classification based on emitted sound, achieving 76% accuracy. Implemented incremental learning for new classes.',
      tech: ['Python', 'PyTorch', 'Machine Learning'],
      link: '#',
      image: 'https://placehold.co/400x250/90EE90/000000?text=ML+Model',
    },
    // Removed 'Automated Inventory Management' project as requested
  ];

  // Education details from resume
  const education = [
    {
      degree: 'Bachelor of Computing in Computer Science (Second Class Upper)',
      institution: 'National University of Singapore (NUS)',
      year: '2025',
      notes: [],
    },
    {
      degree: 'Diploma with Merit in Applied Chemistry',
      institution: 'Singapore Polytechnic (SP)',
      year: '2019',
      notes: ['Bronze Medalist', 'September 2018 - February 2019'],
    },
  ];

  return (
    // Apply Poppins as the base font, Montserrat for headings
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 text-gray-200 font-poppins">

      {/* Google Fonts Import (simulated - ideally in <head> of index.html) */}
      {/*
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
      */}

      {/* Hero Section */}
      <header className="relative py-24 px-4 text-center overflow-hidden">
        {/* Background blobs for artistic touch */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-6xl font-extrabold text-white mb-4 drop-shadow-lg leading-tight font-montserrat">
            Hey there! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Kelvin Seow</span> ✨
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Welcome to my digital playground! I'm a Computer Science major who loves building cool stuff, solving tricky problems, and turning ideas into code. Let's explore!
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
            As a Computer Science major from National University of Singapore (NUS), I'm constantly fascinated by how technology shapes our world. My journey into code started with a curious click, and now I'm hooked on the thrill of bringing ideas to life, one line of code at a time!
          </p>
          <p className="mb-4">
            I thrive on challenges and enjoy diving deep into new concepts, whether it's optimizing algorithms, designing user-friendly interfaces, or exploring the frontiers of AI. When I'm not coding, you can probably find me [mention a casual hobby, e.g., "sipping coffee and brainstorming my next big project," or "exploring new hiking trails," or "playing video games"].
          </p>
          <p>
            I'm always eager to learn, collaborate, and contribute to impactful projects. Feel free to connect if you're building something awesome or just want to chat about tech! You can reach me at <a href="mailto:s.wxk19@gmail.com" className="text-cyan-400 hover:underline">s.wxk19@gmail.com</a> or <a href="tel:+6592962763" className="text-cyan-400 hover:underline">+65 9296 2763</a>.
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

      {/* Projects Section - UPDATED */}
      <section id="projects" className="py-16 px-4 bg-gray-800/70 backdrop-blur-sm rounded-3xl mx-auto max-w-5xl my-12 shadow-xl">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-white mb-4 font-montserrat">My Projects 🛠️</h2> {/* Changed heading */}
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
            Want to see more? Check out my full <a href="https://github.com/swxk19" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-bold">GitHub profile</a>!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Kelvin Seow. All rights reserved. Built with ❤️ and React.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/kelvin-seow-swxk19/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">LinkedIn</a>
          <a href="https://github.com/swxk19" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">GitHub</a>
          <a href="mailto:s.wxk19@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Email</a>
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
