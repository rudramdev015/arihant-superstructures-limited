import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const About = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 11, minutes: 45, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('Contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div className="w-full overflow-hidden bg-white" id="About">

      {/* ── SCARCITY BAR (sticky, not fixed) ── */}
      <div className="sticky top-0 z-40 bg-slate-900/97 backdrop-blur-md text-white py-3 px-4 shadow-2xl border-b border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
            </span>
            <p className="font-bold uppercase tracking-widest text-[9px] sm:text-[10px] text-center sm:text-left">
              Exclusive Offer: <span className="text-orange-400">FEW UNITS LEFT</span> — Jodhpur's Premier Project
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex gap-1 font-mono text-sm font-black bg-white/10 px-3 py-1 rounded-full border border-white/5 tabular-nums">
              <span>{pad(timeLeft.hours)}h</span>
              <span className="opacity-50">:</span>
              <span>{pad(timeLeft.minutes)}m</span>
              <span className="opacity-50">:</span>
              <span>{pad(timeLeft.seconds)}s</span>
            </div>
            <button
              onClick={scrollToContact}
              className="bg-orange-600 text-white px-4 py-1.5 rounded-full font-black uppercase text-[9px] tracking-tight hover:bg-white hover:text-slate-900 transition-all shadow-lg"
            >
              Claim Unit
            </button>
          </div>
        </div>
      </div>

      {/* ── THE VISIONARY (dark section) ── */}
      <section className="bg-slate-950 py-20 sm:py-28 px-5 sm:px-8 md:px-16 lg:px-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/3 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">

          {/* Text */}
          <div className="order-2 lg:order-1">
            <p className="text-orange-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 italic">
              Man Behind the Vision
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 tracking-tighter leading-[0.95]">
              Mr. Ashok Chhajer
            </h2>
            <p className="text-orange-200 font-bold text-[10px] mb-10 uppercase tracking-[0.4em] bg-white/5 w-max px-4 py-2 rounded-full border border-white/5">
              Chairman & Managing Director
            </p>

            <div className="space-y-6 text-slate-300 text-lg leading-relaxed italic relative">
              <span className="absolute -left-6 -top-6 text-6xl text-orange-600/15 font-serif select-none">"</span>
              <p>
                Arihant truly embodies{' '}
                <span className="text-white font-bold">'Changing Lifestyles'</span>. Our objective is to revolutionize
                the home-buying experience by delivering sustainable, elegant, and modern living spaces.
              </p>
              <p className="not-italic text-sm text-slate-500 max-w-lg">
                With over 20 years of experience, Mr. Chhajer has pioneered real estate in Navi Mumbai and Jodhpur,
                ensuring transparency and quality in every project.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="text-center">
                <p className="text-2xl font-black text-white">ISO</p>
                <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest">Certified Quality</p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="text-center">
                <p className="text-2xl font-black text-white italic font-serif">Trust</p>
                <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest">Unmatched Legacy</p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="text-center">
                <p className="text-2xl font-black text-orange-500">30+</p>
                <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest">Years</p>
              </div>
            </div>
          </div>

          {/* Chairman image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              <div className="absolute inset-0 border-2 border-orange-500/25 rounded-[3rem] translate-x-5 translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
              <div className="relative z-10 w-full aspect-[3/4] bg-slate-900 rounded-[3rem] overflow-hidden border-4 border-slate-800 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-50" />
                <img
                  src={assets.chairman_img}
                  alt="CMD Ashok Chhajer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
