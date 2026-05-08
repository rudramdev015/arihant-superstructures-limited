import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Eye, Box, ShieldCheck, Zap, TreePine } from 'lucide-react';

import lifestyle2BHK from '../assets/images/000AVAE1.jpeg';
import lifestyle4BHK from '../assets/images/OAOSOOA11.jpeg';
import siteMap2BHK   from './site mam 2 bhk.jpeg';
import siteMap4BHK   from './site map 4 bhk.jpeg';

const LAYOUTS = {
  '2BHK': {
    label:    'Executive Series',
    title:    '2 BHK',
    price:    '₹41L',
    oldPrice: '₹45L',
    accent:   'from-orange-500 to-red-600',
    lifestyle: lifestyle2BHK,
    blueprint: siteMap2BHK,
  },
  '4BHK': {
    label:    'Luxury Series',
    title:    '4 BHK',
    price:    '₹82L',
    oldPrice: '₹90L',
    accent:   'from-amber-500 to-orange-600',
    lifestyle: lifestyle4BHK,
    blueprint: siteMap4BHK,
  },
};

const STATS = [
  { icon: TreePine,    val: '900',   label: 'Sq Ft'        },
  { icon: ShieldCheck, val: 'Vastu', label: 'Compliant'    },
  { icon: Zap,         val: '24/7',  label: 'Power Backup' },
];

const PropertyShowcase = () => {
  const [activeTab, setActiveTab] = useState('2BHK');
  const [viewMode,  setViewMode]  = useState('lifestyle');
  const current = LAYOUTS[activeTab];

  return (
    <section
      id="Layouts"
      className="relative w-full bg-[#050505] py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-orange-600/8 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] bg-amber-600/5 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto">

        {/* ── HEADER ── */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-12 sm:mb-20 gap-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-10 sm:w-16 bg-orange-600" />
              <p className="text-orange-600 font-black tracking-[0.5em] uppercase text-[11px]">Elite Architecture</p>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.82] uppercase">
              MASTER{' '}
              <span className="italic font-light" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.25)', color: 'transparent' }}>PLAN</span>
              <br />
              <span className="text-orange-600">LAYOUTS</span>
            </h2>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full xl:w-auto">
            {STATS.map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div key={stat.label} className="bg-white/5 backdrop-blur-xl border border-white/10 p-3 sm:p-6 rounded-[1.5rem] sm:rounded-[2.5rem] flex flex-col items-center text-center min-w-0">
                  <StatIcon className="text-orange-500 mb-1.5 sm:mb-2 flex-shrink-0" size={18} />
                  <p className="text-lg sm:text-2xl font-black text-white leading-none">{stat.val}</p>
                  <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider sm:tracking-widest text-white/30 mt-1 sm:mt-1.5 break-words leading-tight">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── GRID ── */}
        <div className="grid xl:grid-cols-12 gap-6 sm:gap-10 items-stretch">

          {/* LEFT — info */}
          <div className="xl:col-span-5 flex flex-col gap-5 sm:gap-8 order-2 xl:order-1">

            {/* Tab selector */}
            <div className="flex p-1.5 bg-white/5 backdrop-blur-xl rounded-[1.8rem] border border-white/10">
              {Object.keys(LAYOUTS).map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setViewMode('lifestyle'); }}
                  className={`relative flex-1 py-4 sm:py-5 rounded-2xl font-black text-[11px] sm:text-[12px] tracking-[0.25em] uppercase transition-all duration-300 z-10 ${
                    activeTab === tab ? 'text-white' : 'text-white/30 hover:text-white/60'
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="tabGlow"
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
                className="bg-white/5 border border-white/10 rounded-[2.5rem] sm:rounded-[3.5rem] p-7 sm:p-12 backdrop-blur-xl flex flex-col gap-8 flex-1"
              >
                {/* Label + Title */}
                <div>
                  <p className="text-orange-500 font-black text-[10px] uppercase tracking-[0.5em] mb-3">{current.label}</p>
                  <h3 className="text-7xl sm:text-8xl font-black text-white tracking-tighter leading-none uppercase">{current.title}</h3>
                </div>

                {/* Price block */}
                <div className="flex flex-col gap-3">
                  <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.45em]">Special Launch Price</p>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-white/30 text-2xl line-through font-black">{current.oldPrice}</span>
                    <span className="text-5xl sm:text-6xl font-black text-orange-400 tracking-tighter leading-none">{current.price}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-black text-white bg-orange-600 px-3 py-1.5 rounded-full uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Limited Units
                    </span>
                    <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">Onwards*</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/8" />

                {/* Download */}
                <a
                  href="/Arihant Anchal .pdf"
                  download="Arihant-Anchal-Brochure.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full h-16 sm:h-[72px] bg-white text-black rounded-2xl sm:rounded-[2rem] font-black uppercase tracking-[0.3em] text-[11px] hover:bg-orange-600 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-3 group"
                >
                  <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                  Download Brochure
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — visualizer */}
          <div className="xl:col-span-7 relative order-1 xl:order-2">
            <div className="relative h-[360px] sm:h-[500px] xl:h-full xl:min-h-[640px] bg-white/5 rounded-[2.5rem] sm:rounded-[4rem] border border-white/10 overflow-hidden group shadow-2xl">

              {/* View toggle */}
              <div className="absolute top-4 sm:top-8 left-4 sm:left-10 z-30 flex gap-1.5 p-1.5 bg-black/60 backdrop-blur-2xl rounded-2xl border border-white/10">
                <button
                  onClick={() => setViewMode('lifestyle')}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-[10px] sm:text-[11px] font-black uppercase tracking-widest transition-all ${
                    viewMode === 'lifestyle' ? 'bg-orange-600 text-white' : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  <Eye size={13} />
                  Lifestyle
                </button>
                <button
                  onClick={() => setViewMode('blueprint')}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-[10px] sm:text-[11px] font-black uppercase tracking-widest transition-all ${
                    viewMode === 'blueprint' ? 'bg-orange-600 text-white' : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  <Box size={13} />
                  Site Map
                </button>
              </div>

              {/* Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab}-${viewMode}`}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={viewMode === 'blueprint' ? current.blueprint : current.lifestyle}
                    alt={viewMode === 'blueprint' ? `${current.title} Site Map` : `${current.title} Lifestyle`}
                    className={`w-full h-full transition-all duration-700 ${
                      viewMode === 'blueprint'
                        ? 'object-contain bg-white/5 p-4'
                        : 'object-cover opacity-90 group-hover:scale-105'
                    }`}
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Bottom fade for lifestyle only */}
              {viewMode === 'lifestyle' && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none" />
              )}

              {/* Label */}
              <div className="absolute bottom-6 sm:bottom-10 right-5 sm:right-10 text-right z-10">
                <p className="text-[10px] sm:text-[12px] font-black text-white uppercase tracking-[0.3em] mb-1">{current.label}</p>
                <p className="text-[9px] font-medium text-white/30 uppercase tracking-[0.15em]">Arihant Anchal · Jodhpur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;
