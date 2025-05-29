import React from 'react';

// InteractiveSkills component
const InteractiveSkills = ({ categorizedSkills, openCategory, toggleCategory }) => {
  return (
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
  );
};

export default InteractiveSkills;
