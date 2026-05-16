import React, { useState, useEffect } from 'react';
import siteMap2BHK from './site mam 2 bhk.jpeg';
import siteMap4BHK from './site map 4 bhk.jpeg';

const UNITS = [
  {
    type: '2 BHK',
    badge: 'Executive Series',
    area: '900 sq.ft',
    price: '₹41L',
    oldPrice: '₹45L',
    tag: 'Best Seller',
    tagColor: 'bg-orange-600',
    features: [
      '2 Grand Master Bedrooms',
      'Dual Wide Balconies',
      'Modular Kitchen Space',
      'Premium Vitrified Flooring',
      'Cross Ventilation Design',
      'Vastu Compliant Layout',
    ],
    siteMap: siteMap2BHK,
    color: 'from-orange-600/20 to-orange-800/5',
    accent: 'text-orange-500',
    border: 'border-orange-500/30',
    planLines: [
      { d: 'M20 20 H180 V160 H20 Z',   label: 'Living + Dining', x: 100, y: 95  },
      { d: 'M180 20 H310 V90 H180 Z',  label: 'Bedroom 1',       x: 245, y: 58  },
      { d: 'M180 90 H310 V160 H180 Z', label: 'Bedroom 2',       x: 245, y: 128 },
      { d: 'M20 160 H130 V220 H20 Z',  label: 'Kitchen',         x: 68,  y: 193 },
      { d: 'M130 160 H230 V220 H130 Z',label: 'Balcony',         x: 178, y: 193 },
    ],
  },
  {
    type: '4 BHK',
    badge: 'Luxury Series',
    area: '1216 sq.ft carpet',
    price: '₹82L',
    oldPrice: '₹90L',
    tag: 'Ultra Luxury',
    tagColor: 'bg-amber-600',
    features: [
      '4 Premium Bedrooms',
      'Grand Living & Dining Hall',
      'Master Suite with Dressing',
      'Premium Modular Kitchen',
      'Private Terrace Access',
      'Vastu Compliant Layout',
    ],
    siteMap: siteMap4BHK,
    color: 'from-amber-600/20 to-amber-800/5',
    accent: 'text-amber-400',
    border: 'border-amber-500/30',
    planLines: [
      { d: 'M20 20 H170 V180 H20 Z',   label: 'Living + Dining', x: 80,  y: 108 },
      { d: 'M170 20 H290 V90 H170 Z',  label: 'Master Suite',    x: 222, y: 58  },
      { d: 'M290 20 H390 V180 H290 Z', label: 'Bed 2',           x: 334, y: 108 },
      { d: 'M170 90 H290 V180 H170 Z', label: 'Bed 3',           x: 222, y: 138 },
      { d: 'M20 180 H170 V240 H20 Z',  label: 'Kitchen',         x: 88,  y: 213 },
      { d: 'M170 180 H290 V240 H170 Z',label: 'Bed 4',           x: 222, y: 213 },
      { d: 'M290 180 H390 V240 H290 Z',label: 'Utility',         x: 334, y: 213 },
    ],
  },
];

const AMENITY_ICONS = [
  { icon: '🏋️', label: 'Gym'      },
  { icon: '🏊',  label: 'Pool'     },
  { icon: '🎮',  label: 'Games'    },
  { icon: '🌿',  label: 'Garden'   },
  { icon: '🔒',  label: 'Security' },
  { icon: '🅿️',  label: 'Parking'  },
  { icon: '🏸',  label: 'Sports'   },
  { icon: '☕',  label: 'Club'     },
];

const FloorPlanSVG = ({ planLines }) => (
  <svg viewBox="0 0 410 260" className="w-full h-auto" style={{ maxHeight: 220 }}>
    <rect width="410" height="260" fill="#0f172a" rx="12" />
    {[60, 120, 180, 240, 300, 360].map((x) => (
      <line key={`v${x}`} x1={x} y1={0} x2={x} y2={260} stroke="#ffffff08" strokeWidth={1} />
    ))}
    {[65, 130, 195].map((y) => (
      <line key={`h${y}`} x1={0} y1={y} x2={410} y2={y} stroke="#ffffff08" strokeWidth={1} />
    ))}
    {planLines.map(({ d, label, x, y }, i) => (
      <g key={i}>
        <path d={d} fill="#ffffff06" stroke="#f9731640" strokeWidth={1.5} />
        <text x={x} y={y} textAnchor="middle" fill="#ffffff55" fontSize="9" fontFamily="sans-serif" fontWeight="600">
          {label}
        </text>
      </g>
    ))}
    <text x="388" y="18" textAnchor="middle" fill="#f97316aa" fontSize="11" fontWeight="900">N</text>
    <line x1="388" y1="20" x2="388" y2="32" stroke="#f97316aa" strokeWidth="1.5" />
  </svg>
);

const FloorPlans = () => {
  const [active, setActive]   = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const unit = UNITS[active];

  useEffect(() => {
    const close = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('Contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section className="bg-[#050810] py-20 md:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden" id="FloorPlans">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-orange-500 font-black text-[10px] uppercase tracking-[0.5em] mb-4">Architecture</p>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
              Master<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.2)' }}>Plan</span>
              <br />Layouts
            </h2>
          </div>
          <p className="text-zinc-500 text-base md:text-lg max-w-sm border-l-2 border-orange-600/30 pl-5">
            Every square foot designed for luxury living — Vastu compliant, JDA approved, power backup guaranteed.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 sm:gap-3">
          {['Master Plan Ready', 'Vastu Compliant', 'Power Backup', 'JDA Approved', 'RERA Registered'].map((b) => (
            <span key={b} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-widest text-zinc-400">
              ✓ {b}
            </span>
          ))}
        </div>

        {/* SEO description */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
            <h3 className="text-orange-500 font-black text-xs uppercase tracking-widest mb-3">2 BHK — ₹41 Lakhs · 900 sq.ft</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              The <strong className="text-white">2 BHK Executive Series</strong> at Arihant Anchal offers 900 sq.ft of
              thoughtfully designed carpet area — the most affordable 2 BHK flat under ₹50 lakhs in Jodhpur.
              Features include 2 master bedrooms, 2 full bathrooms, a modular kitchen, dual balconies with
              natural cross-ventilation, and premium vitrified flooring. Vastu-compliant layout. Available on
              Stilt + 7 floors with home loan support from SBI, HDFC, ICICI &amp; Axis Bank.
            </p>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
            <h3 className="text-amber-400 font-black text-xs uppercase tracking-widest mb-3">4 BHK — Rs.82 Lakhs · 1800 sq.ft Super Built-Up</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              The <strong className="text-white">4 BHK Luxury Series</strong> — 1800 sq.ft super built-up area
              (1216 sq.ft carpet area) — with 4 premium bedrooms, 4 bathrooms, a grand living &amp; dining hall,
              master suite with private dressing room, private terrace access, and luxury marble flooring.
              Panoramic views from upper floors. Starting Rs.82 Lakhs (~Rs.4,500/sq.ft) on Jaisalmer Bypass Road,
              near AIIMS Jodhpur.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

        {/* Left — unit selector (2 cards only) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {UNITS.map((u, i) => (
            <button
              key={u.type}
              onClick={() => setActive(i)}
              className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                active === i
                  ? `bg-gradient-to-br ${u.color} ${u.border} shadow-xl`
                  : 'bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[9px] font-black uppercase tracking-widest ${active === i ? u.accent : 'text-zinc-600'}`}>
                  {u.badge}
                </span>
                <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full text-white ${u.tagColor}`}>
                  {u.tag}
                </span>
              </div>
              <div className="flex items-end justify-between mt-1">
                <span className="text-white font-black text-2xl">{u.type}</span>
                <span className={`text-sm font-bold ${active === i ? u.accent : 'text-zinc-600'}`}>{u.area}</span>
              </div>
              <p className="mt-1 flex items-center gap-2">
                <span className="text-xs line-through text-zinc-600">{u.oldPrice}</span>
                <span className={`text-sm font-black ${active === i ? 'text-orange-400' : 'text-zinc-500'}`}>{u.price}</span>
                <span className="text-[9px] font-black text-white bg-orange-600 px-1.5 py-0.5 rounded-full">OFFER</span>
              </p>
            </button>
          ))}

          {/* Amenities */}
          <div className="mt-2 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-4">Lifestyle Amenities</p>
            <div className="grid grid-cols-4 gap-3">
              {AMENITY_ICONS.map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <span className="text-2xl">{icon}</span>
                  <span className="text-[9px] text-zinc-500 font-bold uppercase">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — plan detail */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className={`bg-gradient-to-br ${unit.color} border ${unit.border} rounded-3xl p-4 md:p-6 shadow-2xl`}>
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className={`text-[9px] font-black uppercase tracking-[0.4em] ${unit.accent}`}>{unit.badge}</span>
                <h3 className="text-white font-black text-3xl mt-1">{unit.type} <span className={unit.accent}>Layout</span></h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider">Carpet Area</p>
                  <p className={`font-black text-2xl ${unit.accent}`}>{unit.area}</p>
                  <p className="flex items-center gap-2 mt-0.5">
                    <span className="text-zinc-600 text-xs line-through">{unit.oldPrice}</span>
                    <span className="text-orange-400 text-base font-black">{unit.price}</span>
                  </p>
                </div>
                {unit.siteMap && (
                  <button
                    onClick={() => setLightbox(unit.siteMap)}
                    className={`w-10 h-10 rounded-xl border ${unit.border} bg-white/5 hover:bg-white/15 flex items-center justify-center transition-all group`}
                    title="View Full Plan"
                  >
                    <svg className={`w-4 h-4 ${unit.accent} group-hover:scale-110 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Site map image with zoom hover */}
            {unit.siteMap ? (
              <div
                className="relative overflow-hidden rounded-2xl cursor-zoom-in group"
                onClick={() => setLightbox(unit.siteMap)}
              >
                <img
                  src={unit.siteMap}
                  alt={`${unit.type} Site Map`}
                  className="w-full object-contain bg-black/30 transition-transform duration-700 group-hover:scale-105"
                  style={{ maxHeight: 360 }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 backdrop-blur-sm rounded-full px-5 py-2.5 flex items-center gap-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span className="text-white text-[10px] font-black uppercase tracking-widest">View Full Plan</span>
                  </div>
                </div>
              </div>
            ) : (
              <FloorPlanSVG planLines={unit.planLines} />
            )}

            <p className="text-zinc-600 text-[9px] text-center mt-4 uppercase tracking-widest font-bold">
              Indicative layout · Not to scale · Actual may vary
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {unit.features.map((feat) => (
              <div key={feat} className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${unit.tagColor}`} />
                <span className="text-zinc-300 text-sm font-semibold">{feat}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/Arihant Anchal .pdf"
              download="Arihant-Anchal-Brochure.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-4 bg-orange-600 hover:bg-orange-500 active:scale-[0.98] text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] transition-all shadow-xl shadow-orange-600/25 text-center flex items-center justify-center gap-2"
            >
              📋 Download Brochure
            </a>
            <button
              onClick={scrollToContact}
              className="flex-1 py-4 bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] transition-all"
            >
              Book Private Viewing
            </button>
          </div>
        </div>
      </div>
      {/* ── FULLSCREEN LIGHTBOX ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-11 h-11 bg-white/10 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightbox}
            alt="Site Map Full View"
            className="max-w-4xl max-h-[90vh] w-full object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-600 text-[9px] uppercase tracking-widest font-bold">
            Press ESC or click outside to close
          </p>
        </div>
      )}
    </section>
  );
};

export default FloorPlans;
