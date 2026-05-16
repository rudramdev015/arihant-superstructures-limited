import React, { useEffect, useState } from 'react';

const arihantLogo = '/LOGO.jpeg';

const NAV_LINKS = ['Home', 'About', 'Projects', 'Testimonials', 'FAQ'];

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const phoneNumber = "919001233545";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I am interested in Arihant Anchal Jodhpur. Please send me details.")}`;

  const scrollToContact = (e) => {
    if (e) e.preventDefault();
    const el = document.getElementById('Contact');
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
    setShowMobileMenu(false);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showMobileMenu]);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-500">

      {/* Top ticker — desktop only */}
      <div
        className={`hidden md:block bg-[#0a0a0a] text-white/50 text-[10px] uppercase tracking-[0.4em] font-black py-2 transition-all duration-500 ${
          isScrolled ? 'opacity-0 -translate-y-full h-0 py-0 overflow-hidden' : 'opacity-100'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-10 flex justify-between items-center">
          <p>✨ Arihant Anchal — Jodhpur's Premier Luxury Residences</p>
          <span>Sales: +91 90012 33545</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`w-full transition-all duration-500 ${isScrolled ? 'py-2 px-3 md:px-6' : 'py-5 px-6 md:px-10'}`}>
        <div
          className={`max-w-[1440px] mx-auto flex items-center justify-between transition-all duration-500
            ${isScrolled
              ? 'bg-white/96 backdrop-blur-2xl shadow-2xl shadow-black/8 rounded-[1.8rem] px-6 md:px-10 py-3 border border-white/30'
              : 'bg-transparent'
            }`}
        >
          {/* Logo */}
          <div className="transition-all duration-500">
            <div className={`transition-all duration-500 rounded-xl overflow-hidden ${!isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg px-2 py-1' : ''}`}>
              <img
                src={arihantLogo}
                alt="Arihant Logo"
                className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-10 md:h-12' : 'h-10 md:h-12'}`}
              />
            </div>
          </div>

          {/* Desktop links */}
          <ul className={`hidden lg:flex items-center gap-10 font-black text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 ${isScrolled ? 'text-zinc-900' : 'text-white'}`}>
            {NAV_LINKS.map((item) => (
              <li key={item} className="relative group overflow-hidden">
                <a href={`#${item.toLowerCase()}`} className="block py-1 hover:text-orange-600 transition-colors duration-300">{item}</a>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </li>
            ))}
            <li className="relative group overflow-hidden">
              <button onClick={scrollToContact} className="block py-1 hover:text-orange-600 transition-colors duration-300 uppercase">Contact</button>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </li>
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className={`px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest border transition-all duration-300
                ${isScrolled
                  ? 'border-zinc-200 text-zinc-900 hover:bg-zinc-900 hover:text-white hover:border-zinc-900'
                  : 'border-white/20 text-white bg-white/5 hover:bg-white/15'
                }`}
            >
              WhatsApp
            </a>
            <button
              onClick={scrollToContact}
              className="bg-orange-600 hover:bg-orange-700 text-white px-7 py-3 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg shadow-orange-600/25 transition-all active:scale-95"
            >
              Book Site Visit
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setShowMobileMenu(true)}
            aria-label="Open menu"
            className={`lg:hidden p-3 rounded-2xl transition-all ${
              isScrolled ? 'bg-zinc-100 text-zinc-900' : 'bg-white/10 text-white backdrop-blur-md border border-white/20'
            }`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ── MOBILE FULLSCREEN MENU (pure CSS transitions) ── */}
      <div
        className={`fixed inset-0 z-[110] bg-zinc-950 flex flex-col transition-all duration-500 ease-in-out ${
          showMobileMenu ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {/* Close */}
        <div className="flex justify-between items-center p-7 pb-4">
          <div className="bg-white/95 rounded-xl px-2 py-1">
            <img src={arihantLogo} alt="Arihant Logo" className="h-12 md:h-14 w-auto object-contain" />
          </div>
          <button
            onClick={() => setShowMobileMenu(false)}
            className="w-13 h-13 bg-white/8 rounded-2xl text-white flex items-center justify-center hover:bg-white/15 transition-colors p-3"
            style={{ width: 50, height: 50 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 flex flex-col justify-center px-10 gap-1">
          {[...NAV_LINKS, 'Contact'].map((item, i) => (
            <div
              key={item}
              className="transition-all duration-500"
              style={{
                transitionDelay: showMobileMenu ? `${0.08 + i * 0.06}s` : '0s',
                opacity: showMobileMenu ? 1 : 0,
                transform: showMobileMenu ? 'translateX(0)' : 'translateX(-20px)',
              }}
            >
              {item === 'Contact' ? (
                <button
                  onClick={scrollToContact}
                  className="block w-full text-left text-white text-5xl font-black uppercase tracking-tighter py-3 border-b border-white/5 hover:text-orange-500 hover:pl-4 transition-all duration-300"
                >
                  {item}
                </button>
              ) : (
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setShowMobileMenu(false)}
                  className="block text-white text-5xl font-black uppercase tracking-tighter py-3 border-b border-white/5 hover:text-orange-500 hover:pl-4 transition-all duration-300"
                >
                  {item}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom CTAs */}
        <div
          className="px-8 pb-12 flex flex-col gap-3 transition-all duration-500"
          style={{
            transitionDelay: showMobileMenu ? '0.42s' : '0s',
            opacity: showMobileMenu ? 1 : 0,
            transform: showMobileMenu ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <button
            onClick={scrollToContact}
            className="w-full bg-orange-600 text-white py-5 rounded-3xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-orange-600/30 active:scale-95 transition-transform"
          >
            Book Free Site Visit
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full bg-[#25D366] text-white py-5 rounded-3xl font-black text-sm uppercase tracking-widest text-center shadow-2xl shadow-green-600/20 active:scale-95 transition-transform"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
