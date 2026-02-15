import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* 
        Floating Capsule Container 
        - Fixed positioning
        - Centered horizontally
        - Top spacing varies slightly on scroll for dynamic feel
      */}
      <nav 
        className={`
          fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${scrolled ? 'top-4 w-[90%] md:w-auto' : 'top-6 w-[95%] md:w-auto'}
        `}
      >
        <div 
          className={`
            relative flex items-center justify-between px-2 md:px-3 py-2 
            bg-white/80 dark:bg-slate-medium/80 
            backdrop-blur-xl saturate-150
            border border-black/5 dark:border-white/10
            shadow-lg shadow-black/5 dark:shadow-black/20
            rounded-full transition-all duration-300
            ${mobileMenuOpen ? 'rounded-2xl' : 'rounded-full'}
          `}
        >
          
          {/* Logo Section */}
          <NavLink 
            to="/" 
            className="pl-4 pr-6 md:pr-8 text-xl font-serif font-bold text-slate-900 dark:text-white tracking-tight shrink-0 hover:opacity-70 transition-opacity"
          >
            SJK<span className="text-book-cloth">.</span>
          </NavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-black/5 dark:bg-white/5 rounded-full p-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out
                  ${isActive 
                    ? 'text-slate-900 dark:text-white bg-white dark:bg-slate-800 shadow-sm' 
                    : 'text-slate-500 dark:text-secondary hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }
                `}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Right Actions: Theme Toggle & Mobile Trigger */}
          <div className="flex items-center gap-2 pl-4 pr-1">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-900 dark:text-white transition-colors"
              aria-label="Toggle Theme"
            >
               <div className="relative w-5 h-5 overflow-hidden">
                  <div className={`absolute inset-0 transform transition-transform duration-500 ${theme === 'dark' ? 'translate-y-0' : '-translate-y-8'}`}>
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <div className={`absolute inset-0 transform transition-transform duration-500 ${theme === 'light' ? 'translate-y-0' : 'translate-y-8'}`}>
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                  </div>
               </div>
            </button>

            {/* Mobile Hamburger */}
            <button 
              className="md:hidden p-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-900 dark:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1.5">
                <span className={`block h-0.5 w-5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown (Attached to capsule) */}
        <div 
            className={`
                md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                mx-2 rounded-b-2xl
                ${mobileMenuOpen ? 'max-h-[400px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}
            `}
        >
            <div className="bg-white/90 dark:bg-slate-medium/90 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-2xl p-2 shadow-xl">
                <div className="flex flex-col gap-1">
                    {NAV_ITEMS.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `
                                px-4 py-3 rounded-xl text-center font-medium transition-colors
                                ${isActive 
                                    ? 'bg-black/5 dark:bg-white/10 text-slate-900 dark:text-white' 
                                    : 'text-slate-500 dark:text-secondary hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                                }
                            `}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;