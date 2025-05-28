import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { FileText, CheckCircle } from 'lucide-react';
import { resumeData } from '../../data/resumeData'; // Import data

const PlainCoursework = () => (
  <section className="mb-8 p-4 border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow">
    <SectionTitle title="Relevant Coursework" icon={<FileText size={28} className="text-slate-600" />} />
    <ul className="space-y-1">
      {resumeData.coursework.map((course, index) => (
        <li key={index} className="text-gray-700 text-sm flex items-center">
          <CheckCircle size={14} className="mr-2 text-green-500" /> {course.id}: {course.name}
        </li>
      ))}
    </ul>
  </section>
);

export default PlainCoursework;