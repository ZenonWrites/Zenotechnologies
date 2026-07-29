// import React from 'react';
import ProjectCard from './ProjectCard';

// Interface defining the shape of our project data
interface Project {
  id: number;
  title: string;
  tags: string[];
  color: string;
}

function ProjectGrid () {
  const projects: Project[] = [
    { id: 1, title: 'Euduco', tags: ['Distribution company', 'UX/UI Design', 'Front end'], color: 'bg-orange-100' },
    { id: 2, title: 'Wish flowers', tags: ['Flower delivery', 'UX/UI Design'], color: 'bg-pink-100' },
    { id: 3, title: 'SavEd', tags: ['Charitable foundation', 'Front end'], color: 'bg-green-100' },
    { id: 4, title: 'Validsoft', tags: ['Marketing', 'Website'], color: 'bg-blue-100' },
  ];

  return (
    <section className="bg-gray-50 py-24 rounded-[3rem] mt-12">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-bold max-w-lg">All our projects are delivered with quality.</h2>
          <button className="hidden md:block bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition-colors">
            Create New →
          </button>
        </div>

        {/* Tailwind Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((proj) => (
            <ProjectCard 
              key={proj.id} 
              title={proj.title} 
              tags={proj.tags} 
              imagePlaceholderColor={proj.color} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectGrid;