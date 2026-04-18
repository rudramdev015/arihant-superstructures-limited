import React, { useEffect, useState } from 'react';
import arihantLogo from './arihant-logo.png'; 

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const phoneNumber = "919001233545"; 
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I am interested in the Signature Residences Jodhpur. Please send me more details.")}`;

  // TOP-CLASS SCROLL FUNCTION
  const scrollToContact = (e) => {
    if (e) e.preventDefault();
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setShowMobileMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
  }, [showMobileMenu]);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-700">
      {/* Brand Strip */}
      <div className={`hidden md:block bg-[#0a0a0a] text-white/50 text-[10px] uppercase tracking-[0.4em] font-black py-2 transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100'}`}>
        <div className="max-w-[1400px] mx-auto px-10 flex justify-between items-center">
          <p>✨ Signature Residences Jodhpur</p>
          <span>Sales: +91 90012 33545</span>
        </div>
      </div>

      {/* Main Navigator */}
      <nav className={`w-full transition-all duration-700 ${isScrolled ? 'py-2 px-4' : 'py-6 px-8'}`}>
        <div className={`max-w-[1440px] mx-auto flex items-center justify-between transition-all duration-700 
          ${isScrolled ? 'bg-white/95 backdrop-blur-2xl shadow-2xl rounded-[2rem] px-10 py-3 border border-white/20' : 'bg-transparent'}`}>
          
          <div className="flex-shrink-0">
            <div className={`transition-all duration-700 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <img src={arihantLogo} alt="Arihant Logo" className="h-8 md:h-9" />
            </div>
          </div>

          <ul className={`hidden lg:flex items-center gap-10 font-black text-[11px] uppercase tracking-[0.25em] ${isScrolled ? 'text-zinc-900' : 'text-white'}`}>
            {['Home', 'About', 'Projects', 'Testimonials'].map((item) => (
              <li key={item} className="relative group overflow-hidden">
                <a href={`#${item.toLowerCase()}`} className="block py-1 hover:text-orange-600 transition-colors duration-300">{item}</a>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
              </li>
            ))}
            <li className="relative group overflow-hidden">
              <button onClick={scrollToContact} className="block py-1 hover:text-orange-600 transition-colors duration-300 uppercase">Contact</button>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
            </li>
          </ul>

          <div className="hidden md:flex items-center gap-5">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className={`px-7 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest border transition-all ${isScrolled ? 'border-zinc-200 text-zinc-900 hover:bg-zinc-900 hover:text-white' : 'border-white/20 text-white bg-white/5'}`}>Whatsapp</a>
            <button onClick={scrollToContact} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl transition-all active:scale-95">Book Site Visit</button>
          </div>

          <button onClick={() => setShowMobileMenu(true)} className={`lg:hidden p-4 rounded-2xl ${isScrolled ? 'bg-zinc-100 text-zinc-900' : 'bg-white/10 text-white backdrop-blur-md border border-white/20'}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[110] bg-zinc-950 transition-all duration-700 ${showMobileMenu ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex justify-end p-10"><button onClick={() => setShowMobileMenu(false)} className="p-5 bg-white/5 rounded-full text-white"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div>
        <nav className="flex flex-col items-center gap-8 h-[60vh] justify-center">
          {['Home', 'About', 'Projects', 'Testimonials'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setShowMobileMenu(false)} className="text-white text-4xl font-black uppercase tracking-tighter hover:text-orange-600 transition-all">{item}</a>
          ))}
          <button onClick={scrollToContact} className="text-white text-4xl font-black uppercase tracking-tighter hover:text-orange-600">Contact</button>
          <div className="w-full px-12 mt-6 flex flex-col gap-4">
             <button onClick={scrollToContact} className="w-full bg-orange-600 text-white py-5 rounded-3xl font-black text-sm uppercase">Book Visit</button>
             <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full bg-white/10 text-white py-5 rounded-3xl font-black text-sm uppercase text-center border border-white/20">Chat on Whatsapp</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;