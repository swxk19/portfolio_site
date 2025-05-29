import React, { useState } from 'react';

// InteractiveProjects component
const InteractiveProjects = ({ projectsData, githubLink }) => {
  // State to manage which project descriptions are expanded
  const [expandedProjects, setExpandedProjects] = useState({});

  // Function to toggle the expanded state of a project description
  const toggleExpand = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId] // Toggle the boolean value for the specific project
    }));
  };

  // Function to truncate text (used with line-clamp for consistency)
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  const DESCRIPTION_MAX_LENGTH = 150; // Define max length for description before truncation
  const DESCRIPTION_CONTAINER_MIN_HEIGHT = '140px'; // Minimum height for the description area to ensure button alignment

  return (
    <section id="projects" className="py-16 px-4 bg-gray-800/70 backdrop-blur-sm rounded-3xl mx-auto max-w-5xl my-12 shadow-xl">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-extrabold text-white mb-4 font-montserrat">My Projects 🛠️</h2>
        <p className="text-lg text-gray-300">A sneak peek into some of the cool things I've built.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-800 to-indigo-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-103 transition-all duration-300 ease-in-out border-2 border-solid border-blue-700 flex flex-col" // Added flex flex-col for consistent layout
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-xl mb-4 border-2 border-white shadow-sm"
              onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x250/cccccc/333333?text=${project.title.replace(/\s/g, '+')}`; }}
            />
            <h3 className="text-2xl font-bold text-cyan-400 mb-2 font-montserrat">{project.title}</h3>

            {/* Container for description and "See More" button to ensure consistent height */}
            <div className="flex-grow flex flex-col justify-between mb-2" style={{ minHeight: expandedProjects[index] ? 'auto' : DESCRIPTION_CONTAINER_MIN_HEIGHT }}>
              <p className={`text-gray-300 text-base ${!expandedProjects[index] ? 'line-clamp-4' : ''}`}>
                {project.description}
              </p>
              {project.description.length > DESCRIPTION_MAX_LENGTH && (
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-cyan-400 hover:underline text-sm focus:outline-none mt-2 self-start" // Removed absolute, added mt-2 and self-start
                >
                  {expandedProjects[index] ? 'Show Less' : 'See More'}
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-4 mt-auto pt-4"> {/* Added mt-auto to push tech stack and button to bottom, pt-4 for spacing */}
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
              className="inline-block bg-cyan-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-cyan-700 transition-colors duration-200 self-start" // Added self-start to align button left
            >
              View Project
            </a>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-xl text-gray-300">
          Want to see more? Check out my full <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-bold">GitHub profile</a>!
        </p>
      </div>
    </section>
  );
};

export default InteractiveProjects;
