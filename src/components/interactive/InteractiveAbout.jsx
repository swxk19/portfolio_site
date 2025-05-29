import React from 'react';

// InteractiveAbout component
const InteractiveAbout = ({ email, phone, institution }) => {
  return (
    <section id="about" className="py-16 px-4 bg-gray-800/70 backdrop-blur-sm rounded-3xl mx-auto max-w-5xl my-12 shadow-xl">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-extrabold text-white mb-4 font-montserrat">About Me 💡</h2>
        <p className="text-lg text-gray-300">A little bit about my journey and what makes me tick in the tech world.</p>
      </div>
      <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-200">
        <p className="mb-4">
          As a Computer Science major from {institution}, I'm constantly fascinated by how technology shapes our world. My journey into code started with a curious click, and now I'm hooked on the thrill of bringing ideas to life, one line of code at a time!
        </p>
        <p className="mb-4">
          I thrive on challenges and enjoy diving deep into new concepts, whether it's optimizing algorithms, designing user-friendly interfaces, or exploring the frontiers of AI. When I'm not coding, you can probably find me [mention a casual hobby, e.g., "sipping coffee and brainstorming my next big project," or "exploring new hiking trails," or "playing video games"].
        </p>
        <p>
          I'm always eager to learn, collaborate, and contribute to impactful projects. Feel free to connect if you're building something awesome or just want to chat about tech! You can reach me at <a href={`mailto:${email}`} className="text-cyan-400 hover:underline">{email}</a> or <a href={`tel:${phone}`} className="text-cyan-400 hover:underline">{phone}</a>.
        </p>
      </div>
    </section>
  );
};

export default InteractiveAbout;
