import React, { useState, useEffect, useRef } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

/* ── ALL 29 GALLERY IMAGES ── */
import G1  from './Gallery/comp2.png';
import G2  from './Gallery/comp3.png';
import G3  from './Gallery/comp4.png';
import G4  from './Gallery/comp5.png';
import G5  from './Gallery/comp7.png';
import G6  from './Gallery/comp10.png';
import G7  from './Gallery/comp11.png';
import G8  from './Gallery/comp12.png';
import G9  from './Gallery/comp13.png';
import G10 from './Gallery/52.png';
import G11 from './Gallery/coparihantstart.png';
import G12 from './Gallery/AWAWAW.jpeg';
import G13 from './Gallery/EWEWEC.jpeg';
import G14 from './Gallery/FEFAS.jpeg';
import G15 from './Gallery/WWWW11.jpeg';
import G16 from './Gallery/WWWW111.jpeg';
import G17 from './Gallery/11R.jpeg';
import G18 from './Gallery/2222.jpeg';
import G19 from './Gallery/22121.jpeg';
import G20 from './Gallery/22122W.jpeg';
import G21 from './Gallery/222S.jpeg';
import G22 from './Gallery/221211RRWQ.jpeg';
import G23 from './Gallery/212121.jpeg';
import G24 from './Gallery/111122222.jpeg';
import G25 from './Gallery/2222323221.jpeg';
import G26 from './Gallery/22121 (2).jpeg';

/* ── NEW IMAGES from assets/images ── */
import G27 from '../assets/images/000A0DA SE.jpeg';
import G28 from '../assets/images/000AVAE1.jpeg';
import G29 from '../assets/images/0100DR.jpeg';
import G30 from '../assets/images/OAOSOOA11.jpeg';
import G31 from '../assets/images/OOOA.jpeg';
import G32 from '../assets/images/OOOAA1.jpeg';

/* spans for the bento hero grid (first 9) */
const BENTO = [
  { span: 'col-span-2 row-span-2' },
  { span: 'col-span-1 row-span-1' },
  { span: 'col-span-1 row-span-1' },
  { span: 'col-span-1 row-span-1' },
  { span: 'col-span-1 row-span-1' },
  { span: 'col-span-2 row-span-1' },
  { span: 'col-span-1 row-span-1' },
  { span: 'col-span-1 row-span-1' },
  { span: 'col-span-2 row-span-1' },
];

const ALL_IMAGES = [
  G1, G2, G3, G4, G5, G6, G7, G8, G9,
  G10, G11, G12, G13, G14, G15, G16,
  G17, G18, G19, G20, G21, G22, G23, G24, G25, G26,
  G27, G28, G29, G30, G31, G32,
];

const LABELS = [
  'Grand Facade', 'Master Suite', 'Living Lounge', 'Premium Lobby',
  'Lifestyle Hub', 'Evening Elevation', 'Rooftop View', 'Zen Garden',
  'Signature Corridor', 'Open Terrace', 'Anchal Life', 'Sky Deck',
  'Club Lounge', 'Fitness Zone', 'Pool View', 'Sunset Balcony',
  'Interior Detail', 'Premium Finish', 'Modern Kitchen', 'Spa Suite',
  'Private Study', 'Kids Zone', 'Dining Space', 'Master Bath',
  'City View', 'Entry Foyer',
  'Luxury Interior', 'Modern Design', 'Premium Space',
  'Elite Living', 'Grand View', 'Signature Style',
];

/* ── LAZY IMAGE with blur-up ── */
const LazyImg = ({ src, alt, className, onClick, priority = false }) => {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(priority); // priority images start visible immediately

  useEffect(() => {
    if (priority) return; // skip IntersectionObserver — already visible
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin: '200px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [priority]);

  return (
    <div ref={ref} className={`${className} overflow-hidden bg-zinc-900`} onClick={onClick}>
      {visible && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'low'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 cursor-pointer
            ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />
      )}
      {(!visible || !loaded) && (
        <div className="w-full h-full animate-pulse bg-gradient-to-br from-zinc-800 to-zinc-900" />
      )}
    </div>
  );
};

/* ── LIGHTBOX ── */
const Lightbox = ({ images, index, onClose, onNav }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNav(1);
      if (e.key === 'ArrowLeft') onNav(-1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onNav]);

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onNav(-1); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition-all z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Image */}
      <Motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.93 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.93 }}
        transition={{ duration: 0.3 }}
        className="max-w-5xl max-h-[85vh] w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={LABELS[index] || 'Gallery'}
          className="w-full h-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl px-6 py-5">
          <p className="text-white font-black uppercase tracking-[0.3em] text-xs">{LABELS[index] || 'Arihant Anchal'}</p>
          <p className="text-zinc-500 text-xs mt-1">{index + 1} / {images.length}</p>
        </div>
      </Motion.div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNav(1); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition-all z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); onNav(i - index); }}
            className={`rounded-full transition-all ${i === index ? 'w-6 h-1.5 bg-orange-500' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </Motion.div>
  );
};

/* ── MAIN GALLERY COMPONENT ── */
const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (i) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const navigate = (delta) =>
    setLightbox((prev) => (prev + delta + ALL_IMAGES.length) % ALL_IMAGES.length);

  const heroImages = ALL_IMAGES.slice(0, 9);
  const extraImages = ALL_IMAGES.slice(9);

  return (
    <section className="bg-[#f8f7f5] py-20 md:py-28" id="Gallery">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* ── HEADER ── */}
        <div className="mb-14">
          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-orange-600/10 px-5 py-2 rounded-full border border-orange-600/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em]">Visual Experience</span>
          </Motion.div>

          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-[13vw] sm:text-[10vw] lg:text-[7rem] font-black text-slate-950 leading-[0.82] tracking-tighter uppercase"
          >
            THE<br />
            <span
              className="italic font-light"
              style={{ WebkitTextStroke: '2px #0f172a', color: 'transparent' }}
            >
              Signature
            </span>
            <br />GALLERY
          </Motion.h2>

          <Motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-slate-500 text-base md:text-lg max-w-lg border-l-2 border-orange-500/30 pl-5"
          >
            {ALL_IMAGES.length} curated visuals of Jodhpur&apos;s most
            anticipated luxury address — Arihant Anchal.
          </Motion.p>
        </div>

        {/* ── HERO BENTO GRID (first 9) ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5 md:gap-3 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[260px]">
          {heroImages.map((src, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`${BENTO[i].span} relative group rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500`}
            >
              <LazyImg
                src={src}
                alt={LABELS[i]}
                className="w-full h-full"
                onClick={() => openLightbox(i)}
                priority={i === 0}
              />
              {/* hover overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5 cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <p className="text-white text-[10px] font-black uppercase tracking-[0.3em] translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {LABELS[i]}
                </p>
                <div className="flex items-center gap-1.5 mt-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <svg className="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <span className="text-orange-400 text-[9px] font-bold uppercase tracking-widest">View</span>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* ── EXPANDED GRID (remaining images) ── */}
        <AnimatePresence>
          {showAll && (
            <Motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-2.5 md:gap-3 mt-3 auto-rows-[180px] sm:auto-rows-[210px] md:auto-rows-[240px]">
                {extraImages.map((src, i) => (
                  <Motion.div
                    key={i + 9}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.04 }}
                    className="relative group rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500"
                  >
                    <LazyImg
                      src={src}
                      alt={LABELS[i + 9] || 'Arihant Anchal'}
                      className="w-full h-full"
                      onClick={() => openLightbox(i + 9)}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 cursor-pointer"
                      onClick={() => openLightbox(i + 9)}
                    >
                      <p className="text-white text-[10px] font-black uppercase tracking-[0.3em]">
                        {LABELS[i + 9] || 'Arihant Anchal'}
                      </p>
                    </div>
                  </Motion.div>
                ))}
              </div>
            </Motion.div>
          )}
        </AnimatePresence>

        {/* ── TOGGLE BUTTON ── */}
        <div className="mt-12 flex justify-center">
          <Motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              if (showAll) document.getElementById('Gallery').scrollIntoView({ behavior: 'smooth' });
              setShowAll((v) => !v);
            }}
            className="group relative flex items-center gap-4 overflow-hidden rounded-full font-black uppercase text-[11px] tracking-[0.3em] px-12 py-5 transition-all duration-300 shadow-xl"
            style={{ background: showAll ? '#f1f5f9' : '#0f172a', color: showAll ? '#0f172a' : '#fff' }}
          >
            <span className="relative z-10">
              {showAll ? 'Show Less' : `View All ${ALL_IMAGES.length} Photos`}
            </span>
            <svg
              className={`w-4 h-4 relative z-10 transition-transform duration-500 ${showAll ? 'rotate-180' : 'group-hover:translate-x-1'}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                d={showAll ? 'M5 15l7-7 7 7' : 'M17 8l4 4m0 0l-4 4m4-4H3'} />
            </svg>
            {/* orange hover sweep */}
            {!showAll && (
              <span className="absolute inset-0 bg-orange-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 rounded-full" />
            )}
          </Motion.button>
        </div>

        {/* ── BOTTOM STAT BAR ── */}
        <Motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-4 border-t border-slate-200 pt-10"
        >
          {[
            { value: `${ALL_IMAGES.length}+`, label: 'Curated Photos' },
            { value: '3',  label: 'Unit Types' },
            { value: '18.5', label: 'Total Acres' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl md:text-4xl font-black text-slate-950">{value}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{label}</p>
            </div>
          ))}
        </Motion.div>
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            images={ALL_IMAGES}
            index={lightbox}
            onClose={closeLightbox}
            onNav={navigate}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
