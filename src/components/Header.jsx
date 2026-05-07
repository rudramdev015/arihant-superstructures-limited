import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './Preloader';

const YT_ID = 'lIBxyEhoalc';

const Header = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [revealed, setRevealed]   = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setIsLoading(false);
      requestAnimationFrame(() => setTimeout(() => setRevealed(true), 80));
    }, 3200);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>

      <header className="relative w-full h-[100dvh] bg-black overflow-hidden" id="Header">

        {/* ── YOUTUBE BACKGROUND VIDEO ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <iframe
            src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1&mute=1&loop=1&playlist=${YT_ID}&controls=0&showinfo=0&rel=0&playsinline=1&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width:  'max(100vw, 177.78vh)',
              height: 'max(100vh, 56.25vw)',
              border: 'none',
              opacity: 0.82,
            }}
            allow="autoplay; fullscreen; picture-in-picture"
            title="Arihant Anchal"
          />
        </div>

        {/* ── GRADIENT OVERLAYS ── */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/10 to-black/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* ── LOCATION PILL ── */}
        <div
          className="absolute z-40 top-8 left-1/2 -translate-x-1/2 transition-all duration-700"
          style={{ opacity: revealed ? 1 : 0, transform: `translateX(-50%) translateY(${revealed ? 0 : -10}px)` }}
        >
          <span className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-xl border border-white/15 text-white/70 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] px-5 py-2.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            Dali Bai Circle · Jodhpur, Rajasthan
          </span>
        </div>

        {/* ── BOTTOM CTA STRIP ── */}
        <div
          className="absolute z-40 bottom-10 left-0 right-0 px-6 sm:px-12 lg:px-20 flex items-end justify-between transition-all duration-700"
          style={{ opacity: revealed ? 1 : 0, transform: revealed ? 'translateY(0)' : 'translateY(16px)', transitionDelay: '0.3s' }}
        >
          {/* Left: CTA buttons */}
          <div className="flex flex-row gap-2 sm:gap-3">
            <button
              onClick={() => scrollTo('Contact')}
              className="px-5 sm:px-10 py-3 sm:py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-black text-[10px] sm:text-[11px] uppercase tracking-widest shadow-2xl shadow-orange-600/40 active:scale-95 transition-all duration-200 whitespace-nowrap"
            >
              Book Site Visit
            </button>
            <button
              onClick={() => scrollTo('PropertyDetails')}
              className="px-5 sm:px-10 py-3 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full font-black text-[10px] sm:text-[11px] uppercase tracking-widest border border-white/20 active:scale-95 transition-all duration-200 whitespace-nowrap"
            >
              Explore
            </button>
          </div>

          {/* Right: scroll cue + YouTube link */}
          <div className="flex flex-col items-end gap-3">
            <a
              href={`https://www.youtube.com/watch?v=${YT_ID}`}
              target="_blank"
              rel="noreferrer"
              style={{ width: 42, height: 42 }}
              className="rounded-full bg-black/60 backdrop-blur-xl border border-orange-500/40 flex items-center justify-center hover:scale-110 active:scale-90 transition-transform duration-200"
              aria-label="Watch on YouTube"
            >
              <svg className="w-4 h-4 fill-red-500" viewBox="0 0 24 24">
                <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
              </svg>
            </a>
            <div className="hidden sm:flex flex-col items-center gap-2 opacity-40">
              <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden rounded-full">
                <div className="w-full bg-white absolute top-0 left-0 rounded-full animate-scroll-line" style={{ height: '40%' }} />
              </div>
              <span className="text-white text-[8px] font-black uppercase tracking-[0.4em]">Scroll</span>
            </div>
          </div>
        </div>

      </header>

      <style>{`
        @keyframes scroll-line {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(350%);  }
        }
        .animate-scroll-line { animation: scroll-line 1.6s ease-in-out infinite; }
      `}</style>
    </>
  );
};

export default Header;
