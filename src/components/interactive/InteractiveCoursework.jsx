import React from 'react';
import SectionTitle from '../common/SectionTitle';
import InteractiveCard from '../common/InteractiveCard';
import { FileText, CheckCircle } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

const InteractiveCoursework = () => (
  <section id="coursework" className="mb-12">
    <SectionTitle title="Relevant Coursework" icon={<FileText size={32} className="text-sky-600" />} className="justify-center" />
    <InteractiveCard>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
        {resumeData.coursework.map((course, index) => (
            <li key={index} className="text-gray-700 flex items-center p-2 rounded-md hover:bg-sky-50 transition-colors">
            <CheckCircle size={18} className="mr-3 text-green-500 flex-shrink-0" /> 
            <span><span className="font-semibold">{course.id}:</span> {course.name}</span>
            </li>
        ))}
        </ul>
    </InteractiveCard>
  </section>
);

export default InteractiveCoursework;