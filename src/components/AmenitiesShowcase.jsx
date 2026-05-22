import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const AMENITIES = [
  { img: '/kkj45.jpeg', title: 'Movie Theatre',     icon: '🎬', desc: 'Branded recliner seats' },
  { img: '/kkj1.jpeg',  title: 'Disco Room',        icon: '🕺', desc: 'LED dance floor & DJ' },
  { img: '/kkj7.jpeg',  title: 'Gaming Zone',       icon: '🎮', desc: 'PC gaming stations' },
  { img: '/kkj15.jpeg', title: 'Music Room',        icon: '🎸', desc: 'Live stage & instruments' },
  { img: '/kkj5.jpeg',  title: 'Library',           icon: '📖', desc: 'Quiet reading lounge' },
  { img: '/kkj3.jpeg',  title: 'Arcade Zone',       icon: '🕹️', desc: 'Retro & modern arcades' },
  { img: '/kkj20.jpeg', title: 'Sports Lounge',     icon: '🏓', desc: 'Table tennis & billiards' },
  { img: '/kkj40.jpeg', title: 'Kids Play Area',    icon: '🎠', desc: 'Safe indoor playground' },
  { img: '/kkj10.jpeg', title: 'Art Studio',        icon: '🎨', desc: 'Creative space for all' },
  { img: '/kkj30.jpeg', title: 'Relax Lounge',      icon: '🛋️', desc: 'Serene sitting area' },
  { img: '/kkj35.jpeg', title: 'Grand Lobby',       icon: '🏛️', desc: 'Luxury entrance corridor' },
  { img: '/kkj50.jpeg', title: 'Business Centre',   icon: '💼', desc: 'Private office cabin' },
  { img: '/kkj25.jpeg', title: 'Music Lounge',      icon: '🎵', desc: 'Karaoke & live music' },
  { img: '/kkj55.jpeg', title: 'Concert Stage',     icon: '🎤', desc: 'Full stage & sound system' },
  { img: '/kkj61.jpeg', title: 'Racing Zone',       icon: '🏎️', desc: 'Sim racing experience' },
];

const Card = ({ img, title, icon, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.45, delay: (index % 5) * 0.07 }}
    className="group relative rounded-2xl overflow-hidden bg-slate-900 shadow-lg cursor-default flex-shrink-0"
    style={{ width: 260, height: 180 }}
  >
    <img
      src={img}
      alt={`Arihant Anchal ${title} — Luxury Amenity Jodhpur`}
      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      loading="lazy"
      decoding="async"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <div className="flex items-center gap-2">
        <span className="text-lg leading-none">{icon}</span>
        <div>
          <p className="text-white font-black text-[13px] leading-tight">{title}</p>
          <p className="text-slate-400 text-[10px] font-medium mt-0.5">{desc}</p>
        </div>
      </div>
    </div>
    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="bg-orange-500 text-white text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full">
        Included
      </span>
    </div>
  </motion.div>
);

const AmenitiesShowcase = () => {
  const scrollRef = useRef(null);

  return (
    <section className="bg-slate-950 py-14 sm:py-20 overflow-hidden" id="amenities-showcase">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="inline-block bg-orange-500/20 text-orange-400 px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-4">
              World-Class Amenities
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tighter">
              Life Beyond
              <br />
              <span className="text-orange-500">4 Walls.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed sm:text-right">
            15+ exclusive amenities inside Arihant Anchal — the lifestyle you deserve, right at your doorstep.
          </p>
        </div>

        {/* Scrollable card row */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {AMENITIES.map((a, i) => (
            <Card key={a.title} {...a} index={i} />
          ))}
        </div>

        {/* Scroll hint on mobile */}
        <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mt-4 sm:hidden text-center">
          ← Swipe to explore all amenities →
        </p>

        {/* Bottom stats row */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: '24+', label: 'Amenities' },
            { value: '18.5', label: 'Acres Campus' },
            { value: '500+', label: 'Families Living' },
            { value: '100%', label: 'Vastu Compliant' },
          ].map(({ value, label }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-3xl sm:text-4xl font-black text-orange-500 leading-tight">{value}</p>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AmenitiesShowcase;
