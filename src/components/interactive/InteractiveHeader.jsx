import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const InteractiveHeader = ({ name, bio, email, phone, github, linkedin }) => (
  <header className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white py-16 px-8 text-center rounded-lg shadow-xl mb-12">
    <h1 className="text-5xl font-bold mb-3">{name}</h1>
    <p className="text-xl mb-6 max-w-2xl mx-auto text-sky-100">{bio}</p>
    <div className="flex justify-center space-x-6">
      {email && <a href={`mailto:${email}`} className="hover:text-sky-200 transition-colors flex items-center"><Mail size={20} className="mr-1" /> Email</a>}
      {phone && <a href={`tel:${phone}`} className="hover:text-sky-200 transition-colors flex items-center"><Phone size={20} className="mr-1" /> Phone</a>}
      {github && <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-sky-200 transition-colors flex items-center"><Github size={20} className="mr-1" /> GitHub</a>}
      {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sky-200 transition-colors flex items-center"><Linkedin size={20} className="mr-1" /> LinkedIn</a>}
    </div>
  </header>
);

export default InteractiveHeader;