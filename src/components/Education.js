import React from 'react';

const Education = () => {
    const education = [
        {
            degree: "Bachelor of Computing in Computer Science (Second Class Upper)",
            institution: "National University of Singapore (NUS)",
            year: "2025"
        },
        {
            degree: "Diploma with Merit in Applied Chemistry",
            institution: "Singapore Polytechnic (SP)",
            year: "2019",
            award: "Bronze Medalist"
        }
    ];

    return (
        <section id="education" className="py-16 bg-white rounded-xl shadow-md mx-auto mt-8 max-w-7xl px-4">
            <div className="container mx-auto">
                <h3 className="text-3xl font-bold text-blue-700 mb-8 text-center">Education</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h4 className="text-xl font-semibold text-gray-900 mb-1">{edu.degree}</h4>
                            <p className="text-blue-600 font-medium mb-1">{edu.institution}</p>
                            <p className="text-gray-500 text-sm">{edu.year}</p>
                            {edu.award && <p className="text-gray-600 text-sm mt-2 font-semibold">Award: {edu.award}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
