import React from 'react';
import FadeIn from '../components/FadeIn';

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full mx-auto">

                {/* Left Card - Quote & Image */}
                <FadeIn delay={0} className="md:row-span-2 h-full">
                    <div className="h-full min-h-[500px] md:min-h-[640px] bg-[#D8D8D8] dark:bg-slate-medium rounded-[2.5rem] overflow-hidden relative group shadow-2xl border border-white/40 dark:border-white/5">
                        {/* Image Section */}
                        <div className="h-[55%] w-full overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?q=80&w=2054&auto=format&fit=crop"
                                alt="Workspace"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 dark:opacity-80"
                            />
                            {/* Subtle gradient overlay to blend image into dark bottom */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 dark:via-slate-medium/50 to-white dark:to-slate-medium"></div>
                        </div>

                        {/* Text Section */}
                        <div className="p-10 flex flex-col justify-center h-[45%] text-slate-900 dark:text-white relative z-10">
                            <p className="text-3xl md:text-4xl font-medium leading-[1.2] mb-6 tracking-tight">
                                "Keep creating. It's our imperfections that shape the most human kind of perfection."
                            </p>
                            <div className="flex items-center gap-3 opacity-60">
                                <span className="text-base font-medium">Someone on internet, 2024</span>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* Top Right - Stats */}
                <FadeIn delay={150}>
                    <div className="h-[300px] rounded-[2.5rem] bg-gradient-to-b from-[#FF6B00] to-[#FF9E2C] p-8 flex flex-col items-center justify-between text-center text-white relative overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
                        <span className="text-sm font-semibold uppercase tracking-wider mt-2">Project</span>
                        <h2 className="text-8xl font-bold tracking-tighter">25+</h2>
                        <p className="text-white font-medium mb-2">25+ Project is done!</p>
                    </div>
                </FadeIn>

                {/* Bottom Right - Contact CTA */}
                <FadeIn delay={300}>
                    <div className="h-[300px] rounded-[2.5rem] bg-slate-900 dark:bg-slate-medium p-10 flex flex-col justify-between text-white relative overflow-hidden group shadow-xl hover:scale-[1.02] transition-transform duration-500 border border-transparent dark:border-white/5">
                        <div className="space-y-2 relative z-10">
                            <h3 className="text-4xl font-medium leading-tight tracking-tight">Any ideas? <br /> lets work together!</h3>
                        </div>

                        <div className="flex justify-between items-end relative z-10">
                            <a href="mailto:contact@sjkanish.dev" className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors w-max">
                                Contact Us
                            </a>

                            {/* QR Code Section */}
                            <div className="flex flex-col items-center gap-2 group/qr">
                                <div className="w-24 h-24 p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 transition-all duration-500 group-hover/qr:scale-110 group-hover/qr:bg-white/20 shadow-lg">
                                    <img
                                        src="/qr-code.svg"
                                        alt="QR Code"
                                        className="w-full h-full object-contain filter brightness-0 invert"
                                    />
                                </div>
                                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/50 group-hover/qr:text-white/80 transition-colors duration-300">
                                    KANISH - PORTFOLIO
                                </span>
                            </div>
                        </div>
                    </div>
                </FadeIn>

            </div>
        </div>
    );
};

export default Contact;