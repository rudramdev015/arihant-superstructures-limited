import React, { useEffect, useState } from 'react';
// Correct import based on your project structure
import arihantLogo from './arihant-logo.png'; 

/**
 * ELITE DYNAMIC NAVIGATION SYSTEM
 * Features: Post-Scroll Logo Reveal, Glassmorphism, and Ultra-Responsive Layout
 */
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // High-performance scroll listener
  useEffect(() => {
    const handleScroll = () => {
      // Trigger reveal after 50px of scrolling
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body lock for mobile menu
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
  }, [showMobileMenu]);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-700">
      
      {/* --- PREMIUM BRAND STRIP (Desktop Only) --- */}
      <div className={`hidden md:block bg-[#0a0a0a] text-white/50 text-[10px] uppercase tracking-[0.4em] font-black py-2 transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}`}>
        <div className="max-w-[1400px] mx-auto px-10 flex justify-between items-center">
          <p>✨ Signature Residences Jodhpur</p>
          <div className="flex gap-10">
            <span className="cursor-default">Sales: 077288 88553</span>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVIGATOR --- */}
      <nav className={`w-full transition-all duration-700 ${isScrolled ? 'py-2 px-4' : 'py-6 px-8'}`}>
        <div className={`max-w-[1440px] mx-auto flex items-center justify-between transition-all duration-700 
          ${isScrolled 
            ? 'bg-white/95 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.15)] rounded-[2rem] px-10 py-3 border border-white/20' 
            : 'bg-transparent'}`}
        >
          
          {/* LOGO SECTION: Only visible AFTER SCROLL */}
          <div className="flex-shrink-0">
            <div className={`transition-all duration-700 ease-in-out transform ${
              isScrolled 
                ? 'opacity-100 translate-x-0 h-8 md:h-9' 
                : 'opacity-0 -translate-x-10 h-10 md:h-14 pointer-events-none'
            } flex items-center`}>
              <img 
                src={arihantLogo} 
                alt="Arihant Logo" 
                className="h-full w-auto object-contain block"
              />
            </div>
          </div>

          {/* DESKTOP MENU: Modern Typography */}
          <ul className={`hidden lg:flex items-center gap-10 font-black text-[11px] uppercase tracking-[0.25em] transition-colors duration-500 
            ${isScrolled ? 'text-zinc-900' : 'text-white'}`}>
            {['Home', 'About', 'Projects', 'Testimonials', 'Contact'].map((item) => (
              <li key={item} className="relative group overflow-hidden">
                <a href={`#${item}`} className="block py-1 hover:text-orange-600 transition-colors duration-300">{item}</a>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
              </li>
            ))}
          </ul>

          {/* ACTION BUTTONS (Desktop/PC) */}
          <div className="hidden md:flex items-center gap-5">
            <a href="https://wa.me/917728888553" target="_blank" rel="noreferrer" className={`px-7 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest border transition-all ${isScrolled ? 'border-zinc-200 text-zinc-900 hover:bg-zinc-900 hover:text-white' : 'border-white/20 text-white bg-white/5 hover:bg-white hover:text-black'}`}>
              Whatsapp
            </a>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-orange-600/30 transition-all active:scale-95">
              Book Site Visit
            </button>
          </div>

          {/* MOBILE TOGGLE: Responsive UI */}
          <button 
            onClick={() => setShowMobileMenu(true)}
            className={`lg:hidden p-4 rounded-2xl transition-all ${isScrolled ? 'bg-zinc-100 text-zinc-900' : 'bg-white/10 text-white backdrop-blur-md border border-white/20'}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </nav>

      {/* --- FULL SCREEN MOBILE OVERLAY --- */}
      <div className={`fixed inset-0 z-[110] bg-zinc-950 transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] 
        ${showMobileMenu ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        
        <div className="flex justify-end items-center p-10">
          <button onClick={() => setShowMobileMenu(false)} className="p-5 bg-white/5 rounded-full text-white hover:bg-white/10 transition-all active:scale-90">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <nav className="flex flex-col items-center justify-center h-[70vh] gap-10">
          {['Home', 'About', 'Projects', 'Testimonials', 'Contact'].map((item, index) => (
            <a 
              key={item}
              onClick={() => setShowMobileMenu(false)} 
              href={`#${item}`} 
              className="text-white text-4xl font-black uppercase tracking-tighter hover:text-orange-600 transition-all transform active:scale-95"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item}
            </a>
          ))}
          <div className="w-full px-12 mt-6">
             <button className="w-full bg-orange-600 text-white py-5 rounded-3xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-orange-600/20">
               Book Visit
            </button>
          </div>
        </nav>
      </div>

    </header>
  );
};

export default Navbar;