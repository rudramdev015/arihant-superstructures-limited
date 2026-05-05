import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download, Maximize, TreePine, Layers, ChevronRight,
  Eye, Box, Compass, ShieldCheck, Zap
} from 'lucide-react';

import blueprintImg from '../assets/images/MAP.jpg';
import render2BHK from '../assets/images/r1 (1).png';
import render3BHK from '../assets/images/r1 (5).png';
import render4BHK from '../assets/images/r1 (7).png';

const layouts = {
  '2BHK': {
    label: 'Executive Series',
    title: '2 BHK',
    subtitle: 'Luxury Residence',
    area: '950 sq.ft',
    details: [
      'Vastu Compliant Design',
      '2 Grand Master Bedrooms',
      'Dual Wide Balconies',
      'Modular Kitchen Space',
      'Premium Vitrified Flooring',
    ],
    blueprint: blueprintImg,
    lifestyle: render2BHK,
    accent: 'from-orange-500 to-red-600',
  },
  '3BHK': {
    label: 'Signature Series',
    title: '3 BHK',
    subtitle: 'Elite Family Suite',
    area: '1450 sq.ft',
    details: [
      '3 Master Suites',
      'Spacious Living & Dining',
      'Wrap-around Sundeck',
      'Designer Bathrooms',
      'Servant Room Attached',
    ],
    blueprint: blueprintImg,
    lifestyle: render3BHK,
    accent: 'from-amber-500 to-orange-600',
  },
  '4BHK': {
    label: 'Presidential Series',
    title: '4 BHK',
    subtitle: 'Ultra-Premium Penthouse',
    area: '2100 sq.ft',
    details: [
      '4 Ultra-Luxury Suites',
      'Private Entry Lobby',
      "Chef's Grade Kitchen",
      'Grand Deck with Views',
      'Smart Home Automation',
    ],
    blueprint: blueprintImg,
    lifestyle: render4BHK,
    accent: 'from-blue-600 to-indigo-600',
  },
};

const STATS = [
  { icon: TreePine, val: '18.5', label: 'Acres' },
  { icon: ShieldCheck, val: 'Vastu', label: 'Compliant' },
  { icon: Zap, val: '24/7', label: 'Power Backup' },
];

const PropertyShowcase = () => {
  const [activeTab, setActiveTab] = useState('2BHK');
  const [viewMode, setViewMode] = useState('lifestyle');

  const current = layouts[activeTab];

  const scrollToContact = () => {
    const el = document.getElementById('Contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section
      className="relative w-full bg-[#050505] py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col items-center justify-center overflow-hidden"
      id="Layouts"
    >
      {/* Ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-orange-600/8 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/5 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px]">

        {/* ── HEADER ── */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-12 sm:mb-20 gap-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-10 sm:w-16 bg-orange-600" />
              <p className="text-orange-600 font-black tracking-[0.5em] uppercase text-[11px]">Elite Architecture</p>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.82] uppercase">
              MASTER{' '}
              <span className="stroke-white italic font-light">PLAN</span>
              <br />
              <span className="text-orange-600">LAYOUTS</span>
            </h2>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-3 w-full xl:w-auto">
            {STATS.map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 sm:p-6 rounded-[1.8rem] sm:rounded-[2.5rem] flex flex-col items-center text-center"
                >
                  <StatIcon className="text-orange-500 mb-2" size={20} />
                  <p className="text-xl sm:text-2xl font-black text-white leading-none">{stat.val}</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mt-1.5">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── INTERACTIVE GRID ── */}
        <div className="grid xl:grid-cols-12 gap-6 sm:gap-10 items-stretch">

          {/* LEFT: INFO SUITE */}
          <div className="xl:col-span-5 flex flex-col gap-5 sm:gap-8 order-2 xl:order-1">

            {/* Tab selector */}
            <div className="flex p-1.5 bg-white/5 backdrop-blur-xl rounded-[1.8rem] border border-white/10">
              {Object.keys(layouts).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative flex-1 py-4 sm:py-5 rounded-2xl font-black text-[11px] sm:text-[12px] tracking-[0.2em] sm:tracking-[0.3em] uppercase transition-all duration-400 z-10 ${
                    activeTab === tab ? 'text-white' : 'text-white/30 hover:text-white/60'
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className={`absolute inset-0 bg-gradient-to-r ${current.accent} rounded-2xl -z-10 shadow-xl`}
                    />
                  )}
                  {tab}
                </button>
              ))}
            </div>

            {/* Info card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35 }}
                className="bg-white/5 border border-white/10 rounded-[2.5rem] sm:rounded-[3.5rem] p-7 sm:p-12 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3 mb-5">
                  <Compass size={14} className="text-orange-600 animate-spin-slow" />
                  <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.5em]">{current.label}</span>
                </div>

                <h3 className="text-6xl sm:text-7xl font-black text-white tracking-tighter leading-none uppercase mb-8">
                  {current.title}
                </h3>

                {/* Area badge */}
                <div className="bg-white/5 border border-white/5 p-5 sm:p-7 rounded-2xl sm:rounded-3xl flex justify-between items-center mb-8">
                  <div>
                    <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-1">Floor Space</p>
                    <p className="text-2xl sm:text-3xl font-medium text-white tracking-tighter">{current.area}</p>
                  </div>
                  <Maximize size={24} className="text-orange-600 opacity-50" />
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8 sm:mb-10">
                  {current.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-orange-600 group-hover:bg-orange-600 transition-all">
                        <ChevronRight size={14} className="text-orange-600 group-hover:text-white" />
                      </div>
                      <p className="text-[12px] font-bold text-white/70 uppercase tracking-[0.12em]">{detail}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className="w-full h-16 sm:h-[72px] bg-white text-black rounded-2xl sm:rounded-[2rem] font-black uppercase tracking-[0.3em] text-[11px] hover:bg-orange-600 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-3 group"
                >
                  <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                  Download Brochure
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: VISUALIZER */}
          <div className="xl:col-span-7 relative order-1 xl:order-2">
            <div className="relative h-[300px] sm:h-[440px] xl:h-full min-h-0 xl:min-h-[600px] bg-white/5 rounded-[2.5rem] sm:rounded-[4rem] border border-white/10 overflow-hidden group shadow-2xl">

              {/* HUD toggle — compact on mobile */}
              <div className="absolute top-4 sm:top-8 left-4 sm:left-10 z-30 flex gap-1.5 p-1.5 bg-black/50 backdrop-blur-2xl rounded-2xl border border-white/10">
                <button
                  onClick={() => setViewMode('lifestyle')}
                  className={`flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-6 py-2 sm:py-3.5 rounded-xl text-[10px] sm:text-[11px] font-black uppercase tracking-widest transition-all ${
                    viewMode === 'lifestyle' ? 'bg-orange-600 text-white' : 'text-white/40 hover:text-white'
                  }`}
                >
                  <Eye size={13} />
                  <span className="hidden xs:inline sm:inline">Lifestyle</span>
                </button>
                <button
                  onClick={() => setViewMode('blueprint')}
                  className={`flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-6 py-2 sm:py-3.5 rounded-xl text-[10px] sm:text-[11px] font-black uppercase tracking-widest transition-all ${
                    viewMode === 'blueprint' ? 'bg-orange-600 text-white' : 'text-white/40 hover:text-white'
                  }`}
                >
                  <Box size={13} />
                  <span className="hidden xs:inline sm:inline">Blueprint</span>
                </button>
              </div>

              {/* Image engine */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab}-${viewMode}`}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
                  className="w-full h-full absolute inset-0"
                >
                  <img
                    src={viewMode === 'blueprint' ? current.blueprint : current.lifestyle}
                    alt="Property Preview"
                    className={`w-full h-full object-cover transition-all duration-1000 ${
                      viewMode === 'blueprint'
                        ? 'invert opacity-40 brightness-150'
                        : 'opacity-80 group-hover:scale-105'
                    }`}
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-70 pointer-events-none" />

              {/* Bottom label */}
              <div className="absolute bottom-6 sm:bottom-12 right-5 sm:right-12 text-right">
                <p className="text-[10px] sm:text-[12px] font-black text-white uppercase tracking-[0.3em] mb-1">
                  {current.label}
                </p>
                <p className="text-[9px] font-medium text-white/30 uppercase tracking-[0.15em]">
                  Arihant Anchal · Jodhpur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;
