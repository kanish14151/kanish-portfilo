import React, { useState, useRef, useEffect } from 'react';
import FadeIn from '../components/FadeIn';
import Modal from '../components/Modal';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card center (-1 to 1)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Update CSS variables for translation
    cardRef.current.style.setProperty('--mouse-x', `${x * -15}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y * -15}px`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--mouse-x', '0px');
    cardRef.current.style.setProperty('--mouse-y', '0px');
  };

  return (
    <div 
      ref={cardRef}
      className="bg-[#D8D8D8] dark:bg-slate-medium rounded-[2.5rem] p-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_-12px_rgba(204,120,92,0.15)] transition-all duration-500 group cursor-pointer will-change-transform border border-white/40 dark:border-white/5 hover:-translate-y-2"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Container - Highly rounded */}
      <div className="relative h-52 w-full rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-slate-dark">
         <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors z-10 duration-500"></div>
         
         {/* Floating Category Badge */}
         <div className="absolute top-4 right-4 bg-white/95 dark:bg-slate-dark/95 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-slate-900 dark:text-white shadow-sm z-20 border border-gray-100 dark:border-white/10">
            {project.category}
         </div>
        
        {/* Parallax Image Wrapper */}
        <div className="w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-200 ease-out will-change-transform opacity-100 dark:opacity-90"
            style={{
              transform: 'translate(var(--mouse-x, 0px), var(--mouse-y, 0px))'
            }}
          />
        </div>
      </div>

      {/* Content Content */}
      <div className="pt-5 px-3 pb-3 flex flex-col h-[180px]">
        <div className="mb-auto">
            <h3 className="text-xl font-bold text-slate-900 dark:text-primary mb-2 leading-tight group-hover:text-book-cloth transition-colors duration-300">
            {project.title}
            </h3>
            <p className="text-gray-600 dark:text-secondary text-sm line-clamp-2 leading-relaxed">
            {project.description}
            </p>
        </div>
        
        {/* Footer: Tech & Action */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-white/5">
          <div className="flex flex-wrap gap-1.5 max-w-[65%]">
            {project.technologies.slice(0, 2).map(tech => (
              <span key={tech} className="px-2.5 py-1 bg-gray-50 dark:bg-slate-dark rounded-lg text-[10px] font-bold text-gray-500 dark:text-tertiary uppercase tracking-wider border border-gray-200/60 dark:border-white/5">
                {tech}
              </span>
            ))}
            {project.technologies.length > 2 && (
                <span className="px-2 py-1 bg-gray-50 dark:bg-slate-dark rounded-lg text-[10px] font-bold text-gray-400 dark:text-gray-500 border border-gray-200/60 dark:border-white/5">
                    +{project.technologies.length - 2}
                </span>
            )}
          </div>

          <button className="bg-slate-900 dark:bg-white text-white dark:text-black text-xs font-bold px-5 py-2.5 rounded-xl group-hover:bg-book-cloth group-hover:text-white transition-colors duration-300 shadow-lg hover:shadow-book-cloth/30">
             View
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectDetail: React.FC<{ project: Project }> = ({ project }) => {
    const [animate, setAnimate] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-white dark:bg-slate-dark text-slate-900 dark:text-white transition-colors duration-300">
            {/* Header Image */}
            <div className="h-56 md:h-72 w-full relative overflow-hidden">
                 <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${animate ? 'scale-100' : 'scale-110'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 md:left-8 md:right-8">
                     <span className="inline-block px-2.5 py-1 mb-3 bg-book-cloth/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-md shadow-sm">
                        {project.category}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-serif font-bold text-white shadow-sm leading-tight">
                        {project.title}
                    </h2>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                        <span key={tech} className="px-2.5 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-tertiary rounded-md text-[10px] font-bold uppercase tracking-wide">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mb-8">
                    <p className="text-gray-600 dark:text-secondary leading-relaxed text-base md:text-lg">
                        {project.longDescription}
                    </p>
                </div>
                
                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-white/10">
                    <button className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-black px-4 py-3.5 rounded-xl hover:bg-book-cloth hover:text-white transition-all duration-300 font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                        Live Demo
                    </button>
                    <button className="flex-1 bg-transparent border border-gray-200 dark:border-white/20 text-slate-900 dark:text-white px-4 py-3.5 rounded-xl hover:border-slate-900 dark:hover:border-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 font-bold text-sm hover:-translate-y-0.5">
                        View Code
                    </button>
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
                <h1 className="text-5xl font-serif font-bold text-slate-900 dark:text-primary mb-4">Initiatives</h1>
                <p className="text-lg text-gray-600 dark:text-secondary max-w-xl">
                    AI solutions bridging algorithmic complexity and human needs.
                </p>
            </div>
            
            {/* Filter - Compact style */}
            <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
                {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                    filter === cat 
                        ? 'bg-slate-900 dark:bg-primary text-white dark:text-slate-dark border-transparent shadow-lg transform scale-105' 
                        : 'bg-white dark:bg-slate-medium text-gray-600 dark:text-secondary border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5'
                    }`}
                >
                    {cat}
                </button>
                ))}
            </div>
          </div>
        </FadeIn>

        {/* Grid - 3 Columns for compact look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 100}>
              <ProjectCard 
                project={project} 
                onClick={() => setSelectedProject(project)} 
              />
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && <ProjectDetail project={selectedProject} />}
      </Modal>
    </div>
  );
};

export default Projects;