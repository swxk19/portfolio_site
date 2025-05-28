import React from 'react';
import { Mail, Phone, Github } from 'lucide-react';

const PlainHeader = ({ name, email, phone, github }) => (
  <header className="bg-slate-700 text-white p-8 rounded-t-lg shadow-lg">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold">{name}</h1>
      </div>
      <div className="mt-4 md:mt-0 text-sm space-y-1 text-right">
        {email && <a href={`mailto:${email}`} className="flex items-center justify-end hover:text-slate-300 transition-colors">
          <Mail size={16} className="mr-2" /> {email}
        </a>}
        {phone && <a href={`tel:${phone}`} className="flex items-center justify-end hover:text-slate-300 transition-colors">
          <Phone size={16} className="mr-2" /> {phone}
        </a>}
        {github && <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-end hover:text-slate-300 transition-colors">
          <Github size={16} className="mr-2" /> {github.replace('https://', '')}
        </a>}
      </div>
    </div>
  </header>
);

export default PlainHeader;