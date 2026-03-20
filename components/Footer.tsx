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

                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-600 dark:text-secondary">
                            <Link to="/about" className="hover:text-book-cloth transition-colors">About</Link>
                            <Link to="/projects" className="hover:text-book-cloth transition-colors">Initiatives</Link>
                            <Link to="/achievements" className="hover:text-book-cloth transition-colors">Achievements</Link>
                            <Link to="/certifications" className="hover:text-book-cloth transition-colors">Certifications</Link>
                            <Link to="/contact" className="hover:text-book-cloth transition-colors">Contact</Link>
                        </div>

                        {/* Footer QR Code */}
                        <div className="flex flex-col items-center gap-2 group/qr">
                            <div className="w-16 h-16 p-1.5 bg-white rounded-xl shadow-sm transition-all duration-500 group-hover/qr:scale-110">
                                <img
                                    src="/qr-code-styling.svg"
                                    alt="QR Code"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-slate-400 dark:text-white/40 group-hover/qr:text-slate-600 dark:group-hover/qr:text-white/80 transition-colors duration-300">
                                AJ STUDIOZ
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 dark:text-tertiary">
                    <p>&copy; 2028 SJ Kanish. All rights reserved.</p>
                    <div className="flex flex-col items-center md:items-end gap-4">
                        <div className="flex items-center gap-2 group/aj">
                            <span className="opacity-70">Developed by</span>
                            <a href="#" className="flex items-center gap-2 font-bold text-slate-900 dark:text-white hover:text-book-cloth transition-all tracking-wide">
                                <img
                                    src="/aj-logo.png"
                                    alt="AJ Logo"
                                    className="w-6 h-6 object-contain rounded-full border border-gray-200 dark:border-white/10 filter grayscale group-hover/aj:grayscale-0 transition-all duration-500"
                                />
                                <span>AJ STUDIOZ</span>
                            </a>
                        </div>
                        <div className="px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-full border border-gray-200 dark:border-white/10 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-book-cloth animate-pulse"></span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 dark:text-white/60">Made by AJ STUDIOZ</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;