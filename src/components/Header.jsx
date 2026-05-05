import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import Preloader from './Preloader';
import arihantVideo from '../components/arihant .mp4';

const Header = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [revealed, setRevealed]   = useState(false);
  const [isMuted, setIsMuted]     = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setIsLoading(false);
      requestAnimationFrame(() => setTimeout(() => setRevealed(true), 80));
    }, 3200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = isMuted;
  }, [isMuted]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>

      <header className="relative w-full h-[100dvh] bg-black overflow-hidden" id="Header">

        {/* ── VIDEO ── */}
        <video
          ref={videoRef}
          autoPlay loop playsInline muted
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.78 }}
        >
          <source src={arihantVideo} type="video/mp4" />
        </video>

        {/* ── GRADIENT OVERLAYS ── */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/75 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* ── HUD BORDER ── */}
        <div className="absolute inset-0 border-[10px] md:border-[18px] border-black/70 pointer-events-none z-30" />

        {/* ── CORNER ACCENTS ── */}
        {/* Top-left */}
        <div
          className="absolute z-30 pointer-events-none transition-all duration-1000"
          style={{ top: 22, left: 22, opacity: revealed ? 1 : 0 }}
        >
          <div className="w-8 h-[2px] bg-orange-500" />
          <div className="w-[2px] h-8 bg-orange-500 mt-0" />
        </div>
        {/* Top-right */}
        <div
          className="absolute z-30 pointer-events-none flex flex-col items-end transition-all duration-1000"
          style={{ top: 22, right: 22, opacity: revealed ? 1 : 0 }}
        >
          <div className="w-8 h-[2px] bg-orange-500" />
          <div className="w-[2px] h-8 bg-orange-500" />
        </div>
        {/* Bottom-left */}
        <div
          className="absolute z-30 pointer-events-none flex flex-col justify-end transition-all duration-1000"
          style={{ bottom: 22, left: 22, opacity: revealed ? 1 : 0 }}
        >
          <div className="w-[2px] h-8 bg-orange-500" />
          <div className="w-8 h-[2px] bg-orange-500" />
        </div>
        {/* Bottom-right */}
        <div
          className="absolute z-30 pointer-events-none flex flex-col items-end justify-end transition-all duration-1000"
          style={{ bottom: 22, right: 22, opacity: revealed ? 1 : 0 }}
        >
          <div className="w-[2px] h-8 bg-orange-500" />
          <div className="w-8 h-[2px] bg-orange-500" />
        </div>

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
          <div className="flex flex-row gap-3">
            <button
              onClick={() => scrollTo('Contact')}
              className="px-7 sm:px-10 py-3.5 sm:py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-black text-[10px] sm:text-[11px] uppercase tracking-widest shadow-2xl shadow-orange-600/40 active:scale-95 transition-all duration-200 whitespace-nowrap"
            >
              Book Site Visit
            </button>
            <button
              onClick={() => scrollTo('PropertyDetails')}
              className="px-7 sm:px-10 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full font-black text-[10px] sm:text-[11px] uppercase tracking-widest border border-white/20 active:scale-95 transition-all duration-200 whitespace-nowrap"
            >
              Explore
            </button>
          </div>

          {/* Right: Scroll cue */}
          <div className="hidden sm:flex flex-col items-center gap-2 opacity-40">
            <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden rounded-full">
              <div className="w-full bg-white absolute top-0 left-0 rounded-full animate-scroll-line" style={{ height: '40%' }} />
            </div>
            <span className="text-white text-[8px] font-black uppercase tracking-[0.4em]">Scroll</span>
          </div>
        </div>

        {/* ── AUDIO TOGGLE ── */}
        <div className="absolute top-[72px] left-4 sm:left-5 md:top-auto md:left-auto md:bottom-10 md:right-10 z-40">
          <button
            onClick={() => setIsMuted(!isMuted)}
            style={{ width: 42, height: 42 }}
            className="rounded-full bg-black/60 backdrop-blur-xl border border-orange-500/40 flex items-center justify-center hover:scale-110 active:scale-90 transition-transform duration-200"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted
              ? <VolumeX className="w-4 h-4 text-orange-500" />
              : <Volume2 className="w-4 h-4 text-orange-500" />}
          </button>
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
