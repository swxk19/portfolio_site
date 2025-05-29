import React from 'react';

// InteractiveEducation component
const InteractiveEducation = ({ educationData }) => {
  return (
    <section id="education" className="py-16 px-4 bg-gray-800/70 backdrop-blur-sm rounded-3xl mx-auto max-w-5xl my-12 shadow-xl">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-extrabold text-white mb-4 font-montserrat">My Learning Journey 🎓</h2>
        <p className="text-lg text-gray-300">Where I've honed my skills and expanded my knowledge.</p>
      </div>
      <div className="max-w-3xl mx-auto space-y-8">
        {educationData.map((edu, index) => (
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
  );
};

export default InteractiveEducation;
