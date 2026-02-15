import React, { useRef, useState, MouseEvent } from 'react';
import FadeIn from '../components/FadeIn';
import { ACHIEVEMENTS } from '../constants';
import { Achievement } from '../types';

const AchievementIcon: React.FC<{ type: string; className?: string }> = ({ type, className = "w-6 h-6" }) => {
  const getPath = () => {
    switch (type) {
      case 'trophy': return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> 
        </svg>
      ); 
      case 'Hackathon': return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
      case 'Oratorical': return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      );
      case 'Academic': return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      );
      case 'Leadership': return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
      default: return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    }
  };

  return getPath();
};

const SpotlightCard: React.FC<{ 
    item: Achievement; 
    index: number;
    isWide: boolean;
    isTall: boolean;
}> = ({ item, index, isWide, isTall }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Spotlight Position
        setPosition({ x, y });
        setOpacity(1);

        // 3D Tilt Calculation
        // Normalize coordinates to -1 to 1
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -2; // Max rotation deg
        const rotateY = ((x - centerX) / centerX) * 2;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setOpacity(0);
        setRotation({ x: 0, y: 0 });
    };

    // Extract year from date string (e.g. "Oct 2027" -> "27")
    const year = item.date.match(/\d{4}/)?.[0].slice(2) || "24";
    const isGold = item.title.toLowerCase().includes('winner') || item.title.toLowerCase().includes('1st');

    return (
        <div 
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`
                group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] 
                transition-all duration-300 ease-out
                ${isWide ? 'md:col-span-2' : 'md:col-span-1'}
                ${isTall ? 'md:row-span-2' : ''}
                bg-[#D8D8D8] dark:bg-[#1C1917] 
                border border-white/40 dark:border-white/5
                shadow-lg hover:shadow-2xl
            `}
            style={{
                perspective: '1000px',
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1, 1, 1)`,
            }}
        >
            {/* 1. Interactive Spotlight Gradient (Follows Mouse) */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-20 mix-blend-soft-light"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.4), transparent 40%)`,
                }}
            />
            
            {/* 2. Spotlight Border Accent */}
            <div 
                className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[2rem] md:rounded-[2.5rem]"
                style={{
                     background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(251, 191, 36, 0.15), transparent 40%)`, // Gold accent
                     border: '1px solid rgba(251, 191, 36, 0.3)'
                }}
            ></div>

            {/* 3. Editorial Background Watermark (Year) */}
            <div className="absolute -bottom-10 -right-4 z-0 pointer-events-none select-none overflow-hidden">
                <span className={`
                    text-[12rem] md:text-[14rem] font-serif font-bold leading-none 
                    text-black/5 dark:text-white/5 
                    transition-transform duration-700 ease-out group-hover:translate-x-4 group-hover:rotate-6
                `}>
                    '{year}
                </span>
            </div>

            {/* 4. Giant Icon Decoration */}
            <div className="absolute top-8 right-8 z-0 pointer-events-none opacity-10 dark:opacity-5 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-12">
                 <AchievementIcon type={item.type} className="w-32 h-32" />
            </div>


            {/* Content Container */}
            <div className="relative z-20 flex flex-col h-full justify-between p-6 md:p-8">
                
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div className={`
                        w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-md border 
                        transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
                        ${isGold 
                            ? 'bg-gradient-to-br from-amber-400 to-amber-600 border-amber-300 text-white' 
                            : 'bg-white/80 dark:bg-white/5 border-white/50 dark:border-white/10 text-slate-800 dark:text-white backdrop-blur-md'
                        }
                    `}>
                        <AchievementIcon type={item.type} className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    
                    <span className={`
                        px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border
                        ${isGold 
                             ? 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-200 dark:border-amber-700/50' 
                             : 'bg-white/50 text-slate-500 border-white/40 dark:bg-black/20 dark:text-tertiary dark:border-white/5'
                        }
                    `}>
                        {item.type}
                    </span>
                </div>

                {/* Body */}
                <div className="mt-auto">
                    <h3 className={`font-serif font-bold leading-tight mb-2 ${isWide ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl'} text-slate-900 dark:text-primary group-hover:text-book-cloth dark:group-hover:text-gold-tech transition-colors`}>
                        {item.title}
                    </h3>
                    
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-tertiary mb-4">
                        {item.organization}
                    </p>

                    <div className={`h-px w-12 bg-slate-300 dark:bg-white/10 mb-4 transition-all duration-500 group-hover:w-full group-hover:bg-book-cloth dark:group-hover:bg-gold-tech`}></div>

                    <p className={`text-slate-600 dark:text-secondary leading-relaxed ${isWide ? 'text-base md:text-lg max-w-lg' : 'text-sm'}`}>
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

const Achievements: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 relative">
            {/* Creative Header */}
            <div className="absolute -top-10 -left-10 text-[8rem] md:text-[12rem] font-serif font-bold text-black/5 dark:text-white/5 leading-none select-none pointer-events-none">
                Awards
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 pl-2">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="h-px w-8 bg-book-cloth"></span>
                        <h5 className="text-book-cloth font-bold tracking-widest uppercase text-xs">Hall of Triumphs</h5>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 dark:text-primary leading-none">
                        Recognition
                    </h1>
                </div>
                <div className="max-w-md text-right md:text-left">
                    <p className="text-gray-600 dark:text-secondary text-lg font-light leading-relaxed">
                        A dynamic archive of milestones, accolades, and defining moments in my journey as an engineer.
                    </p>
                </div>
            </div>
          </div>
        </FadeIn>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
            {ACHIEVEMENTS.map((item, index) => {
                // Custom layout logic for the bento grid
                // Item 0: Wide (Winner)
                // Item 2: Tall
                const isWide = index === 0 || index === 3;
                const isTall = index === 2;

                return (
                    <FadeIn key={item.id} delay={index * 100} className={`${isWide ? 'md:col-span-2' : 'md:col-span-1'} ${isTall ? 'md:row-span-2' : ''}`}>
                        <SpotlightCard 
                            item={item} 
                            index={index}
                            isWide={isWide}
                            isTall={isTall}
                        />
                    </FadeIn>
                );
            })}

            {/* Interactive "Next" Card */}
            <FadeIn delay={ACHIEVEMENTS.length * 100}>
                <div className="group relative h-full min-h-[300px] flex flex-col items-center justify-center p-8 rounded-[2rem] border-2 border-dashed border-gray-300 dark:border-white/10 hover:border-book-cloth dark:hover:border-gold-tech transition-all cursor-pointer overflow-hidden bg-transparent hover:bg-white/50 dark:hover:bg-white/5">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed"></div>
                    
                    <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-book-cloth group-hover:text-white dark:group-hover:bg-gold-tech dark:group-hover:text-black">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400 dark:text-tertiary group-hover:text-white dark:group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-2 relative z-10">What's Next?</h3>
                    <p className="text-sm text-gray-500 dark:text-tertiary relative z-10">Let's create the next milestone together.</p>
                </div>
            </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Achievements;