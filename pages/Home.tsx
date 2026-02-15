import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { SKILLS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center relative overflow-hidden px-6">
        <div className="absolute top-20 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-pulse">
                <path fill="currentColor" className="text-cloud-light dark:text-slate-light" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-17.9,89.9,-2.4C89.7,13.1,86.6,28.5,78.2,40.8C69.8,53.2,56.1,62.5,42.4,69.5C28.7,76.5,15.1,81.1,0.6,80.1C-13.9,79,-29.3,72.3,-42.6,63.4C-55.9,54.5,-67.2,43.4,-75.2,30.3C-83.2,17.2,-87.9,2.1,-84.8,-11.5C-81.8,-25.1,-71,-37.2,-59.2,-46.7C-47.4,-56.1,-34.7,-62.9,-21.8,-68.8C-8.9,-74.7,4.2,-79.6,18.5,-80.4C32.8,-81.2,48.2,-77.9,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
        </div>

        <div className="container mx-auto z-10">
          <FadeIn delay={100}>
            <p className="text-book-cloth font-medium tracking-widest uppercase mb-4">Sona Tech '28</p>
          </FadeIn>
          <FadeIn delay={300}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 dark:text-primary mb-6 leading-tight">
              Harnessing AI/ML <br />
              <span className="italic font-light text-gray-500 dark:text-tertiary">for Social Impact</span>
            </h1>
          </FadeIn>
          <FadeIn delay={500}>
            <p className="text-lg md:text-xl text-gray-600 dark:text-secondary max-w-2xl mb-10 leading-relaxed">
              I am SJ Kanish, an Artificial Intelligence & Machine Learning student crafting digital solutions that bridge the gap between complex algorithms and human needs.
            </p>
          </FadeIn>
          <FadeIn delay={700}>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="px-8 py-3 bg-book-cloth text-white font-medium rounded-full shadow-lg hover:bg-book-cloth-dark transition-all hover:scale-105 active:scale-95">
                View Initiatives
              </Link>
              <Link to="/achievements" className="px-8 py-3 bg-transparent text-slate-900 dark:text-white border border-gray-400 dark:border-gray-600 font-medium rounded-full shadow-sm hover:border-book-cloth hover:text-book-cloth transition-all hover:scale-105 active:scale-95">
                Explore Journey
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Technical DNA */}
      <section className="py-24 bg-white/50 dark:bg-white/5">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <h2 className="text-4xl font-serif font-bold text-slate-900 dark:text-primary mb-2">Technical DNA</h2>
                <div className="h-1 w-20 bg-book-cloth"></div>
              </div>
              <p className="text-gray-600 dark:text-secondary mt-4 md:mt-0 max-w-md text-right md:text-left">
                A blend of analytical rigor and creative problem solving.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((skill, index) => (
              <FadeIn key={skill.name} delay={index * 100} className="h-full">
                <div className="glass-card p-8 rounded-2xl h-full flex flex-col justify-center">
                  <div className="flex justify-between items-end mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-primary">{skill.name}</h3>
                    <span className="text-book-cloth font-mono font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-light h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-book-cloth rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 text-center">
        <FadeIn>
            <h2 className="text-3xl font-serif font-bold mb-8 text-slate-900 dark:text-primary">Let's Build the Future</h2>
            <a href="mailto:contact@sjkanish.dev" className="text-book-cloth text-lg hover:text-slate-900 dark:hover:text-primary transition-colors border-b border-book-cloth pb-1">
                Get in touch
            </a>
        </FadeIn>
      </section>
    </div>
  );
};

export default Home;