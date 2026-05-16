import React, { useEffect, useState } from 'react';

const arihantLogo = '/LOGO.jpeg';

// Desktop nav links — kept short so they fit comfortably at 1024px+
const NAV_LINKS = ['Home', 'About', 'Projects', 'Testimonials', 'FAQ'];

// Mobile menu includes Contact at the end
const MOBILE_LINKS = [...NAV_LINKS, 'Contact'];

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled]         = useState(false);

  const phoneNumber  = "919001233545";
  const whatsappUrl  = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I am interested in Arihant Anchal Jodhpur. Please send me details.")}`;

  const scrollToContact = (e) => {
    if (e) e.preventDefault();
    const el = document.getElementById('Contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
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

      {/* ── TOP TICKER — desktop only, hides on scroll ── */}
      <div
        className={`hidden lg:block bg-[#0a0a0a] text-white/50 text-[10px] uppercase tracking-[0.4em] font-black py-2 transition-all duration-500 ${
          isScrolled ? 'opacity-0 -translate-y-full h-0 py-0 overflow-hidden' : 'opacity-100'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-10 flex justify-between items-center">
          <p>✨ Arihant Anchal — Jodhpur's Premier Luxury Residences</p>
          <span>Sales: +91 90012 33545</span>
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <nav className={`w-full transition-all duration-500 ${isScrolled ? 'py-2 px-3 lg:px-6' : 'py-4 px-4 lg:px-10'}`}>
        <div
          className={`max-w-[1440px] mx-auto flex items-center justify-between gap-4 transition-all duration-500
            ${isScrolled
              ? 'bg-white/96 backdrop-blur-2xl shadow-2xl shadow-black/8 rounded-[1.8rem] px-5 lg:px-10 py-3 border border-white/30'
              : 'bg-transparent'
            }`}
        >

          {/* ── LOGO ── */}
          <div className="flex-shrink-0">
            <div className={`rounded-xl overflow-hidden transition-all duration-500 ${!isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg px-2 py-1' : ''}`}>
              <img
                src={arihantLogo}
                alt="Arihant Anchal Logo"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>
          </div>

          {/* ── DESKTOP NAV LINKS — lg+ only ── */}
          <ul className={`hidden lg:flex items-center gap-6 xl:gap-8 transition-colors duration-300 ${isScrolled ? 'text-zinc-900' : 'text-white'}`}>
            {[...NAV_LINKS, 'Contact'].map((item) => (
              <li key={item} className="relative group overflow-hidden">
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={item === 'Contact' ? scrollToContact : undefined}
                  className="block py-1 font-[900] text-[10px] xl:text-[11px] uppercase tracking-[0.2em] xl:tracking-[0.25em] whitespace-nowrap hover:text-orange-600 transition-colors duration-300 leading-none"
                >
                  {item}
                </a>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </li>
            ))}
          </ul>

          {/* ── RIGHT SIDE — CTA buttons + hamburger ── */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">

            {/* WhatsApp — hidden on mobile, visible md+ */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className={`hidden md:inline-flex items-center px-4 lg:px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest border transition-all duration-300
                ${isScrolled
                  ? 'border-zinc-200 text-zinc-900 hover:bg-zinc-900 hover:text-white hover:border-zinc-900'
                  : 'border-white/20 text-white bg-white/5 hover:bg-white/15'
                }`}
            >
              WhatsApp
            </a>

            {/* Book Site Visit — always visible sm+ */}
            <button
              onClick={scrollToContact}
              className="hidden sm:block bg-orange-600 hover:bg-orange-700 text-white px-4 lg:px-7 py-2.5 lg:py-3 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg shadow-orange-600/25 transition-all active:scale-95 whitespace-nowrap"
            >
              <span className="hidden lg:inline">Book Site Visit</span>
              <span className="lg:hidden">Book Visit</span>
            </button>

            {/* Phone button — mobile only (xs screens) */}
            <a
              href="tel:+919001233545"
              className={`sm:hidden flex items-center justify-center w-10 h-10 rounded-2xl transition-all ${
                isScrolled ? 'bg-orange-600 text-white' : 'bg-orange-600 text-white'
              }`}
              aria-label="Call us"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>

            {/* Hamburger — lg and below only */}
            <button
              onClick={() => setShowMobileMenu(true)}
              aria-label="Open navigation menu"
              className={`lg:hidden p-2.5 sm:p-3 rounded-2xl transition-all ${
                isScrolled ? 'bg-zinc-100 text-zinc-900' : 'bg-white/10 text-white backdrop-blur-md border border-white/20'
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="3" y1="6"  x2="21" y2="6"  />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>

        </div>
      </nav>

      {/* ── MOBILE FULLSCREEN MENU ── */}
      <div
        className={`fixed inset-0 z-[110] bg-zinc-950 flex flex-col transition-all duration-500 ease-in-out ${
          showMobileMenu ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header row */}
        <div className="flex justify-between items-center p-6 pb-4">
          <div className="bg-white/95 rounded-xl px-2 py-1">
            <img src={arihantLogo} alt="Arihant Anchal Logo" className="h-11 sm:h-13 w-auto object-contain" />
          </div>
          <button
            onClick={() => setShowMobileMenu(false)}
            aria-label="Close menu"
            className="bg-white/8 rounded-2xl text-white flex items-center justify-center hover:bg-white/15 transition-colors p-3"
            style={{ width: 48, height: 48 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6"  x2="6"  y2="18" />
              <line x1="6"  y1="6"  x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 flex flex-col justify-center px-8 sm:px-12 gap-0">
          {MOBILE_LINKS.map((item, i) => (
            <div
              key={item}
              className="transition-all duration-500"
              style={{
                transitionDelay: showMobileMenu ? `${0.07 + i * 0.055}s` : '0s',
                opacity:   showMobileMenu ? 1 : 0,
                transform: showMobileMenu ? 'translateX(0)' : 'translateX(-24px)',
              }}
            >
              {item === 'Contact' ? (
                <button
                  onClick={scrollToContact}
                  className="w-full text-left text-white text-4xl sm:text-5xl font-black uppercase tracking-tighter py-3 border-b border-white/5 hover:text-orange-500 hover:pl-4 transition-all duration-300"
                >
                  Contact
                </button>
              ) : (
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setShowMobileMenu(false)}
                  className="block text-white text-4xl sm:text-5xl font-black uppercase tracking-tighter py-3 border-b border-white/5 hover:text-orange-500 hover:pl-4 transition-all duration-300"
                >
                  {item}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom CTAs */}
        <div
          className="px-6 sm:px-8 pb-10 sm:pb-14 flex flex-col gap-3 transition-all duration-500"
          style={{
            transitionDelay: showMobileMenu ? `${0.07 + MOBILE_LINKS.length * 0.055}s` : '0s',
            opacity:   showMobileMenu ? 1 : 0,
            transform: showMobileMenu ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <button
            onClick={scrollToContact}
            className="w-full bg-orange-600 text-white py-4 sm:py-5 rounded-3xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-orange-600/30 active:scale-95 transition-transform"
          >
            Book Free Site Visit
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full bg-[#25D366] text-white py-4 sm:py-5 rounded-3xl font-black text-sm uppercase tracking-widest text-center shadow-2xl shadow-green-600/20 active:scale-95 transition-transform"
          >
            Chat on WhatsApp
          </a>
          <a
            href="tel:+919001233545"
            className="w-full bg-white/8 border border-white/10 text-white py-4 rounded-3xl font-black text-sm uppercase tracking-widest text-center active:scale-95 transition-transform"
          >
            📞 +91 90012 33545
          </a>
        </div>
      </div>

    </header>
  );
};

export default Navbar;
