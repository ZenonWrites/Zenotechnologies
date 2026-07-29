// import React from 'react';

// Explicitly define the props using an interface
interface ProjectCardProps {
  title: string;
  tags: string[];
  imagePlaceholderColor: string;
}

function ProjectCard({ title, tags, imagePlaceholderColor }: ProjectCardProps) {
  return (
    <a href="#" className="group block group-hover:opacity-100 transition-all cursor-pointer">
      {/* Media / Video Block */}
      <div className={`w-full aspect-4/5 rounded-3xl overflow-hidden mb-6 relative ${imagePlaceholderColor}`}>
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
            <span className="text-black ml-1">▶</span>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{title}</h3>
        <ul className="flex flex-wrap gap-2 text-sm text-gray-500">
          {tags.map((tag, index) => (
            <li key={index}>
              {tag}{index !== tags.length - 1 ? <span className="mx-2">•</span> : ''}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ProjectCard;