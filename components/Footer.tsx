import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-white dark:bg-slate-900 pt-20 pb-10 border-t border-black/5 dark:border-white/5 mt-auto">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-2">SJ Kanish<span className="text-book-cloth">.</span></h2>
                    <p className="text-gray-500 dark:text-secondary text-sm max-w-xs mx-auto md:mx-0">
                        Crafting digital experiences with intelligence and purpose.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-600 dark:text-secondary">
                     <Link to="/about" className="hover:text-book-cloth transition-colors">About</Link>
                     <Link to="/projects" className="hover:text-book-cloth transition-colors">Initiatives</Link>
                     <Link to="/achievements" className="hover:text-book-cloth transition-colors">Achievements</Link>
                     <Link to="/certifications" className="hover:text-book-cloth transition-colors">Certifications</Link>
                     <Link to="/contact" className="hover:text-book-cloth transition-colors">Contact</Link>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 dark:text-tertiary">
                <p>&copy; 2028 SJ Kanish. All rights reserved.</p>
                <div className="flex items-center gap-1">
                    <span>Developed by</span>
                    <a href="#" className="font-bold text-slate-900 dark:text-white hover:text-book-cloth transition-colors tracking-wide">AJ STUDIOZ</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;