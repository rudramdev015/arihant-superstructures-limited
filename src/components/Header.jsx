import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import Preloader from './Preloader';
import arihantVideo from '../components/arihant .mp4';

const STATS = [
  { value: '600+', label: 'Happy Families' },
  { value: '4.4', label: 'Acres' },
  { value: '30+', label: 'Years Trust' },
  { value: 'JDA', label: 'Approved' },
];

const Header = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [revealed, setRevealed] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
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

      <header className="relative w-full h-[100dvh] bg-[#060608] overflow-hidden" id="Header">

        {/* ────── BACKGROUND VIDEO ────── */}
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          muted
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.72 }}
        >
          <source src={arihantVideo} type="video/mp4" />
        </video>

        {/* ────── GRADIENT OVERLAYS (light touch) ────── */}
        {/* Top fade for navbar legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent pointer-events-none" />
        {/* Bottom fade for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
        {/* Subtle left vignette for desktop text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent pointer-events-none" />

        {/* ────── HUD FRAME BORDER ────── */}
        <div className="absolute inset-0 border-[8px] md:border-[18px] border-black/60 pointer-events-none z-30" />

        {/* ────── CONTENT ────── */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between px-5 sm:px-10 md:px-16 lg:px-20 pt-28 sm:pt-32 pb-10 sm:pb-14">

          {/* ── TOP ROW: location tag ── */}
          <div
            className="transition-all duration-700"
            style={{ opacity: revealed ? 1 : 0, transform: revealed ? 'translateY(0)' : 'translateY(-12px)' }}
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.35em] px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Dali Bai Circle · Jodhpur, Rajasthan
            </span>
          </div>

          {/* ── MAIN HERO COPY ── */}
          <div className="flex flex-col gap-6 sm:gap-8 max-w-4xl">

            {/* Eyebrow */}
            <div
              className="transition-all duration-700"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateX(0)' : 'translateX(-20px)',
                transitionDelay: '0.08s',
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 sm:w-12 bg-orange-500" />
                <p className="text-orange-400 font-black text-[10px] sm:text-[11px] uppercase tracking-[0.5em]">
                  Luxury Residences · Jodhpur
                </p>
              </div>
            </div>

            {/* Main headline */}
            <div className="overflow-hidden">
              <h1
                className="text-[13vw] sm:text-8xl md:text-9xl lg:text-[9rem] xl:text-[10rem] font-black text-white uppercase leading-[0.82] tracking-tighter transition-all duration-1000"
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? 'translateY(0)' : 'translateY(40px)',
                  transitionDelay: '0.14s',
                }}
              >
                ARIHANT<br />
                <span
                  className="italic font-light"
                  style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.4)', color: 'transparent' }}
                >
                  ANCHAL
                </span>
              </h1>
            </div>

            {/* Subline + CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-10 transition-all duration-700"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '0.26s',
              }}
            >
              <div className="border-l-2 border-orange-500 pl-5 max-w-xs">
                <p className="text-white/70 text-sm sm:text-base leading-relaxed font-medium">
                  Luxury 2 & 4 BHK homes.<br />
                  Starting <span className="text-orange-400 font-bold">₹45 Lakhs*</span>
                </p>
              </div>

              <div className="flex flex-row sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={() => scrollTo('Contact')}
                  className="flex-1 sm:flex-none px-6 sm:px-8 py-3.5 sm:py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-black text-[10px] sm:text-[11px] uppercase tracking-widest shadow-2xl shadow-orange-600/40 active:scale-95 transition-all duration-200 whitespace-nowrap"
                >
                  Book Site Visit
                </button>
                <button
                  onClick={() => scrollTo('PropertyDetails')}
                  className="flex-1 sm:flex-none px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full font-black text-[10px] sm:text-[11px] uppercase tracking-widest border border-white/25 active:scale-95 transition-all duration-200 whitespace-nowrap"
                >
                  Explore Project
                </button>
              </div>
            </div>
          </div>

          {/* ── BOTTOM ROW: stats + scroll ── */}
          <div
            className="flex flex-col xs:flex-row items-start xs:items-end justify-between gap-5 transition-all duration-700"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(16px)',
              transitionDelay: '0.38s',
            }}
          >
            {/* Stats strip */}
            <div className="flex gap-4 sm:gap-8 flex-wrap">
              {STATS.map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-white font-black text-xl sm:text-2xl leading-none">{value}</span>
                  <span className="text-white/40 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mt-1">{label}</span>
                </div>
              ))}
            </div>

            {/* Scroll cue */}
            <div className="hidden sm:flex flex-col items-center gap-2 opacity-50">
              <div className="w-[1px] h-12 bg-white/40 relative overflow-hidden rounded-full">
                <div className="w-full bg-white/80 absolute top-0 left-0 rounded-full animate-scroll-line" style={{ height: '40%' }} />
              </div>
              <span className="text-white text-[8px] font-black uppercase tracking-[0.4em] rotate-0">Scroll</span>
            </div>
          </div>
        </div>

        {/* ────── AUDIO TOGGLE ──────
            Mobile: top-left below navbar pill
            Desktop: bottom-right corner                ────── */}
        <div className="absolute top-[76px] left-4 sm:left-5 md:top-auto md:left-auto md:bottom-10 md:right-10 z-40">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-10 h-10 sm:w-11 sm:h-11 md:w-13 md:h-13 rounded-full bg-black/60 backdrop-blur-xl border border-orange-500/40 flex items-center justify-center animate-pulse-glow hover:scale-110 active:scale-90 transition-transform duration-200"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
            style={{ width: 42, height: 42 }}
          >
            {isMuted
              ? <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
              : <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
            }
          </button>
        </div>

      </header>

      <style>{`
        @keyframes scroll-line {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(350%); }
        }
        .animate-scroll-line { animation: scroll-line 1.6s ease-in-out infinite; }
      `}</style>
    </>
  );
};

export default Header;
