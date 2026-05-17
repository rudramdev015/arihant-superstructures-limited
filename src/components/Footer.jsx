import React, { useState } from 'react';

const arihantLogo = '/LOGO.jpeg';

const LINKS = {
  Navigate: [
    { label: 'Home', href: '#home' },
    { label: 'Floor Plans', href: '#floorplans' },
    { label: 'Gallery', href: '#projects' },
    { label: 'About Us', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#Contact' },
  ],
  Projects: [
    { label: 'Arihant Anchal', href: '#home' },
    { label: 'Arihant Adita', href: '#' },
    { label: 'Arihant Ayati', href: '#' },
  ],
};

const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="w-10 h-10 bg-white/6 hover:bg-orange-600 border border-white/10 hover:border-orange-600 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
  >
    {children}
  </a>
);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('Contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#080808] text-zinc-400 overflow-hidden" id="Footer">

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange-600/4 blur-[120px] rounded-full pointer-events-none" />

      {/* ── PRE-FOOTER CTA BAND ── */}
      <div className="relative border-b border-zinc-800/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-orange-500 font-black text-[10px] uppercase tracking-[0.5em] mb-3">Limited Units Remaining</p>
            <h3 className="text-white font-black text-3xl md:text-4xl tracking-tighter leading-tight">
              Ready to secure your<br className="hidden md:block" /> dream home in Jodhpur?
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all shadow-xl shadow-orange-600/20 active:scale-95 whitespace-nowrap"
            >
              Book Site Visit
            </button>
            <a
              href="https://wa.me/919001233545"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-[#25D366]/15 hover:bg-[#25D366] border border-[#25D366]/30 hover:border-[#25D366] text-[#25D366] hover:text-white rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all active:scale-95 whitespace-nowrap text-center"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 pt-16 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

        {/* Brand column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="bg-white/95 rounded-2xl px-3 py-2 inline-block mb-4">
            <img src={arihantLogo} alt="Arihant Superstructures" className="h-16 w-auto object-contain" loading="lazy" />
          </div>
          <div className="w-12 h-0.5 bg-orange-500 mb-5" />
          <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-xs">
            Building dreams into reality since 1994. Jodhpur's most trusted luxury real estate developer.
          </p>
          {/* Socials */}
          <div className="flex gap-2 mb-6">
            <SocialIcon href="https://www.facebook.com/ArihantSupersrtucturesLtd/" label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/arihantsuperstructuresofficial/" label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </SocialIcon>
            <SocialIcon href="https://www.youtube.com/@arihantsuperstructuresltd9434" label="YouTube">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/company/arihant-superstructures-limited/" label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </SocialIcon>
            <SocialIcon href="https://wa.me/919001233545" label="WhatsApp">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.6-2.8-23.6-8.7-45-27.7-16.6-14.8-27.8-33.1-31.1-38.6-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            </SocialIcon>
          </div>
          {/* Certifications */}
          <div className="flex gap-2 flex-wrap">
            {['ISO', 'JDA', 'RERA'].map((cert) => (
              <span key={cert} className="px-3 py-1 bg-orange-600/10 border border-orange-600/20 rounded-lg text-orange-500 text-[10px] font-black uppercase tracking-wider">
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="text-white text-xs font-black tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
            <span className="w-3 h-0.5 bg-orange-600" />
            Navigate
          </h4>
          <ul className="space-y-3">
            {LINKS.Navigate.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="text-sm text-zinc-500 hover:text-orange-500 hover:translate-x-1 inline-block transition-all duration-200 font-medium">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h4 className="text-white text-xs font-black tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
            <span className="w-3 h-0.5 bg-orange-600" />
            Our Projects
          </h4>
          <ul className="space-y-3">
            {LINKS.Projects.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="text-sm text-zinc-500 hover:text-orange-500 hover:translate-x-1 inline-block transition-all duration-200 font-medium">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact snippet */}
          <div className="mt-8 space-y-3">
            <h4 className="text-white text-xs font-black tracking-[0.3em] uppercase flex items-center gap-2">
              <span className="w-3 h-0.5 bg-orange-600" />
              Contact
            </h4>
            <a href="tel:+919001233545" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-orange-500 transition-colors font-medium">
              <svg className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 90012 33545
            </a>
            <p className="text-xs text-zinc-600 leading-relaxed pl-5">
              Near Dali Bai Circle,<br />
              Jaisalmer Bypass Road,<br />
              Jodhpur, Rajasthan 342014
            </p>
            <a
              href="https://maps.google.com/?q=Arihant+Anchal+Jodhpur"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[10px] text-orange-500 hover:text-orange-400 font-black uppercase tracking-wider transition-colors pl-5"
            >
              Open in Maps
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white text-xs font-black tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
            <span className="w-3 h-0.5 bg-orange-600" />
            Stay Updated
          </h4>
          <p className="text-zinc-500 text-sm mb-5 leading-relaxed">
            Get exclusive launch prices and property updates directly in your inbox.
          </p>
          {subscribed ? (
            <div className="bg-orange-600/10 border border-orange-600/20 rounded-2xl p-5 text-center">
              <p className="text-orange-500 font-black text-sm uppercase tracking-wider">You're on the list!</p>
              <p className="text-zinc-500 text-xs mt-1">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-500 text-white font-black py-3 rounded-xl text-[10px] uppercase tracking-[0.3em] transition-colors active:scale-95"
              >
                Subscribe
              </button>
            </form>
          )}

          {/* RERA notice */}
          <div className="mt-6 p-4 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl">
            <p className="text-zinc-600 text-[10px] leading-relaxed italic">
              Arihant Anchal offers supreme lifestyle at an affordable price in Jodhpur.
            </p>
            <p className="text-orange-500 text-[10px] mt-3 font-black tracking-wide">
              RERA: RAJ/P/2017/322
            </p>
          </div>
        </div>
      </div>

      {/* Building silhouette */}
      <div className="opacity-[0.04] pointer-events-none select-none -mb-1">
        <svg viewBox="0 0 1200 100" className="w-full fill-white">
          <path d="M0,100 L0,80 L40,80 L40,50 L80,50 L80,90 L120,90 L120,30 L160,30 L160,100 L200,100 L200,15 L280,15 L280,100 L360,100 L360,55 L420,55 L420,30 L480,30 L480,100 L600,100 L600,8 L690,8 L690,100 L800,100 L800,40 L870,40 L870,100 L1000,100 L1000,25 L1100,25 L1100,100 L1150,100 L1150,50 L1200,50 L1200,100 Z" />
        </svg>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#040404] border-t border-zinc-900/80">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-zinc-700 tracking-[0.25em] uppercase text-center sm:text-left">
            Copyright 2026 © Arihant Superstructures Ltd. All Rights Reserved.
          </p>
          <p className="text-[9px] text-zinc-800 tracking-wider">
            Developed by <span className="text-zinc-700 font-bold">Bawra Digital</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
