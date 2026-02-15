import React, { useState, useEffect } from 'react';
import FadeIn from '../components/FadeIn';
import Modal from '../components/Modal';
import { CERTIFICATIONS } from '../constants';
import { Certification } from '../types';

interface CertificationCardProps {
    cert: Certification;
    onClick: () => void;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ cert, onClick }) => {
    const isHighlight = cert.highlight;

    return (
        <div
            onClick={onClick}
            className={`
                relative rounded-[1.5rem] p-3 flex flex-col h-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group cursor-pointer
                bg-[#D8D8D8] dark:bg-[#1C1917]/60 border border-white/50 dark:border-[#292524] shadow-sm
                hover:-translate-y-1.5 hover:shadow-lg dark:hover:bg-[#1C1917] hover:border-white/80 dark:hover:border-[#44403C]
                ${isHighlight ? 'ring-1 ring-amber-500/20 dark:ring-gold-tech/20 bg-amber-50/20 dark:bg-amber-900/5' : ''}
            `}
        >
            {/* Image Area - Uniform Aspect Ratio */}
            <div className="relative w-full aspect-[16/10] rounded-[1.2rem] overflow-hidden shadow-sm mb-3 z-0 bg-gray-50 dark:bg-[#0C0A09]">
                <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover opacity-100 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/[0.02] pointer-events-none"></div>

                {/* Date Overlay */}
                <div className="absolute top-2 right-2 z-10">
                    <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full backdrop-blur-md bg-black/40 border border-white/10 text-[8px] font-bold tracking-widest uppercase text-white/90">
                        {cert.date}
                    </span>
                </div>
            </div>

            {/* Content Body - Uniform Growth */}
            <div className="flex-1 flex flex-col px-1">
                <div className="mb-3">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-amber-600 dark:text-gold-tech/80 mb-1">
                        {cert.issuer}
                    </p>
                    <h3 className="text-[0.95rem] font-bold leading-snug text-slate-900 dark:text-primary line-clamp-2 min-h-[2.4rem]">
                        {cert.name}
                    </h3>
                </div>

                {/* Footer - Pushed to Bottom */}
                <div className="mt-auto pt-3 flex items-center justify-between border-t border-black/5 dark:border-white/5">
                    <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 3).map(skill => (
                            <span key={skill} className="px-1.5 py-0.5 bg-gray-50 dark:bg-white/5 text-slate-500 dark:text-tertiary rounded text-[8px] font-bold uppercase tracking-tight">
                                {skill}
                            </span>
                        ))}
                    </div>

                    <button className="flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-widest text-slate-900 dark:text-white group/btn shrink-0 ml-2">
                        View
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5 transform group-hover/btn:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

const CertificationDetail: React.FC<{ cert: Certification }> = ({ cert }) => {
    return (
        <div className="bg-white dark:bg-[#0C0A09] flex flex-col">
            {/* Fitted Image View */}
            <div className="bg-[#0C0A09] p-2 md:p-6 flex items-center justify-center min-h-[40vh]">
                <img
                    src={cert.image}
                    alt={cert.name}
                    className="max-w-full max-h-[70vh] object-contain shadow-2xl rounded-sm transition-transform duration-500 animate-in fade-in zoom-in"
                />
            </div>

            {/* Balanced Details Section */}
            <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                    <div>
                        <p className="text-amber-600 dark:text-gold-tech text-xs font-bold uppercase tracking-[0.2em] mb-1">Issued by {cert.issuer}</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                            {cert.name}
                        </h2>
                    </div>
                </div>

                {/* Skills Row */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {cert.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-slate-600 dark:text-secondary rounded-full text-[10px] font-bold uppercase tracking-wide">
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Metadata Grid */}
                {cert.meta && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {cert.meta.map((item, idx) => (
                            <div key={idx} className="bg-gray-50 dark:bg-white/[0.02] p-4 rounded-2xl border border-gray-100 dark:border-white/5">
                                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                                <p className="text-sm font-semibold text-slate-900 dark:text-gray-200">{item.value}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Description */}
                <div className="mb-8">
                    <p className="text-gray-600 dark:text-secondary text-base leading-relaxed">
                        {cert.description || 'This certification verifies advanced proficiency in the core concepts and practical applications.'}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    {cert.link && cert.link !== '#' && (
                        <button
                            onClick={() => window.open(cert.link, '_blank')}
                            className="flex-1 py-4 bg-amber-500 hover:bg-amber-600 rounded-2xl text-[11px] font-bold uppercase tracking-widest text-white transition-all shadow-lg shadow-amber-500/20"
                        >
                            Verify Official Credential
                        </button>
                    )}
                    <button
                        onClick={() => window.open(cert.image, '_blank')}
                        className="flex-1 py-4 bg-slate-900 dark:bg-white dark:text-black text-white hover:opacity-90 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all"
                    >
                        View Full Image
                    </button>
                </div>
            </div>
        </div>
    );
}

const Certifications: React.FC = () => {
    const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8">
            <div className="container mx-auto max-w-7xl">
                <FadeIn>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 px-2">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-primary mb-2 tracking-tight">Credentials</h1>
                            <p className="text-gray-600 dark:text-secondary max-w-xl text-base font-light">
                                Verified expertise and continuous learning.
                            </p>
                        </div>
                        <div className="hidden md:block h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent flex-1 ml-12 mb-4"></div>
                    </div>
                </FadeIn>

                {/* Grid: 4 columns on extra large, 3 on large, 2 on medium, 1 on small */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {CERTIFICATIONS.map((cert, index) => (
                        <FadeIn key={cert.id} delay={index * 100}>
                            <CertificationCard cert={cert} onClick={() => setSelectedCert(cert)} />
                        </FadeIn>
                    ))}
                </div>

                <Modal
                    isOpen={!!selectedCert}
                    onClose={() => setSelectedCert(null)}
                    title={selectedCert?.name}
                >
                    {selectedCert && <CertificationDetail cert={selectedCert} />}
                </Modal>
            </div>
        </div>
    );
};

export default Certifications;