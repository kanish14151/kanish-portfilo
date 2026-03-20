import React from 'react';
import FadeIn from '../components/FadeIn';

const About: React.FC = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <FadeIn>
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
                        {/* Image */}
                        <div className="w-full md:w-1/2 aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl group">
                            <img
                                src="/crop-kanish.png"
                                alt="SJ Kanish"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>

                        {/* Intro Text */}
                        <div className="w-full md:w-1/2">
                            <h5 className="text-book-cloth font-bold tracking-widest uppercase mb-4 text-xs">Who am I?</h5>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-primary mb-6 leading-tight">
                                Engineer. <br /> Innovator. <br /> <span className="text-gray-400 dark:text-tertiary">Dreamer.</span>
                            </h1>
                            <p className="text-gray-600 dark:text-secondary text-lg leading-relaxed mb-6">
                                I'm SJ Kanish, a passionate AI & ML Engineer from Sona College of Technology. My journey is defined by a curiosity for how intelligent systems can solve real-world human problems.
                            </p>
                            <p className="text-gray-600 dark:text-secondary text-lg leading-relaxed">
                                Beyond the code, I am a storyteller and a leader, believing that the best technology doesn't just calculate—it connects.
                            </p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={200}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="p-8 rounded-[2rem] bg-[#D8D8D8] dark:bg-slate-medium/50 border border-white/50 dark:border-white/5 hover:border-book-cloth/30 transition-colors duration-300">
                            <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Education</h3>
                            <div>
                                <h4 className="font-bold text-lg text-slate-800 dark:text-white">Sona College of Technology</h4>
                                <p className="text-book-cloth text-sm font-bold uppercase tracking-wide mb-2">2024 - 2028</p>
                                <p className="text-gray-600 dark:text-secondary">Bachelor of Engineering in Artificial Intelligence & Machine Learning.</p>
                            </div>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-[#D8D8D8] dark:bg-slate-medium/50 border border-white/50 dark:border-white/5 hover:border-book-cloth/30 transition-colors duration-300">
                            <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Interests</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Generative AI', 'Social Impact', 'Robotics', 'Public Speaking', 'UI/UX Design', 'Philosophy'].map(tag => (
                                    <span key={tag} className="px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg text-xs font-bold text-slate-700 dark:text-secondary shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Google Map - Increased Height */}
                    <div className="w-full h-80 md:h-96 rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-white/50 dark:border-white/5 group mb-12 bg-[#D8D8D8] dark:bg-slate-medium/50">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.6845741639866!2d78.1460143148118!3d11.66661199172082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ccf52cba0b%3A0xee9989007068ca06!2sSona%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1625050000000!5m2!1sen!2sin"
                            className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-70 group-hover:opacity-100 dark:invert-[.85] dark:hue-rotate-180 dark:group-hover:invert-0 dark:group-hover:hue-rotate-0"
                            allowFullScreen={false}
                            loading="lazy"
                            title="Sona College of Technology Map"
                        ></iframe>

                        {/* Map Overlay Label */}
                        <div className="absolute bottom-5 left-5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm pointer-events-none z-10">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Base of Operations</p>
                            </div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Sona College of Technology, Salem</p>
                        </div>
                    </div>
                </FadeIn>

                {/* Download Resume Section */}
                <FadeIn delay={300}>
                    <div className="flex flex-col items-center justify-center mb-20">
                        <a
                            href="#" // Replace with actual resume link
                            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-book-cloth dark:hover:bg-book-cloth dark:hover:text-white shadow-2xl hover:shadow-book-cloth/40 hover:-translate-y-1"
                        >
                            <span>Download Resume</span>
                            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </span>
                        </a>
                        <p className="mt-4 text-xs font-medium text-gray-400 dark:text-tertiary uppercase tracking-widest">
                            Updated August 2028 • PDF Format
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={400}>
                    <div className="text-center py-10 border-t border-gray-200 dark:border-white/5">
                        <p className="font-serif text-2xl italic text-gray-400 dark:text-tertiary">
                            "The best way to predict the future is to create it."
                        </p>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}

export default About;