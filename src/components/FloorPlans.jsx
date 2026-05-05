import React, { useState } from 'react';

const UNITS = [
  {
    type: '2 BHK',
    badge: 'Executive Series',
    area: '950 sq.ft',
    price: '₹45L – ₹55L',
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
    color: 'from-orange-600/20 to-orange-800/5',
    accent: 'text-orange-500',
    border: 'border-orange-500/30',
    planLines: [
      // SVG path data for a simple 2BHK floor plan outline
      { d: 'M20 20 H180 V160 H20 Z', label: 'Living + Dining', x: 70, y: 95 },
      { d: 'M180 20 H310 V90 H180 Z', label: 'Bedroom 1', x: 225, y: 58 },
      { d: 'M180 90 H310 V160 H180 Z', label: 'Bedroom 2', x: 225, y: 128 },
      { d: 'M20 160 H130 V220 H20 Z', label: 'Kitchen', x: 68, y: 193 },
      { d: 'M130 160 H230 V220 H130 Z', label: 'Balcony', x: 178, y: 193 },
    ],
  },
  {
    type: '3 BHK',
    badge: 'Signature Series',
    area: '1250 sq.ft',
    price: '₹65L – ₹85L',
    tag: 'Popular',
    tagColor: 'bg-blue-600',
    features: [
      '3 Spacious Bedrooms',
      'Large Living & Dining',
      'Premium Master Suite',
      'Designer Kitchen',
      'Utility & Store Room',
      'Vastu Compliant Layout',
    ],
    color: 'from-blue-600/20 to-blue-800/5',
    accent: 'text-blue-400',
    border: 'border-blue-500/30',
    planLines: [
      { d: 'M20 20 H160 V170 H20 Z', label: 'Living + Dining', x: 75, y: 100 },
      { d: 'M160 20 H280 V90 H160 Z', label: 'Bedroom 1', x: 212, y: 58 },
      { d: 'M280 20 H370 V170 H280 Z', label: 'Bed 2', x: 318, y: 100 },
      { d: 'M160 90 H280 V170 H160 Z', label: 'Bedroom 3', x: 212, y: 133 },
      { d: 'M20 170 H160 V230 H20 Z', label: 'Kitchen', x: 80, y: 203 },
      { d: 'M160 170 H280 V230 H160 Z', label: 'Balcony', x: 212, y: 203 },
    ],
  },
  {
    type: '4 BHK',
    badge: 'Luxury Series',
    area: '1750 sq.ft',
    price: '₹90L – ₹1.2Cr',
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
    color: 'from-amber-600/20 to-amber-800/5',
    accent: 'text-amber-400',
    border: 'border-amber-500/30',
    planLines: [
      { d: 'M20 20 H170 V180 H20 Z', label: 'Living + Dining', x: 80, y: 108 },
      { d: 'M170 20 H290 V90 H170 Z', label: 'Master Suite', x: 222, y: 58 },
      { d: 'M290 20 H390 V180 H290 Z', label: 'Bed 2', x: 334, y: 108 },
      { d: 'M170 90 H290 V180 H170 Z', label: 'Bed 3', x: 222, y: 138 },
      { d: 'M20 180 H170 V240 H20 Z', label: 'Kitchen', x: 88, y: 213 },
      { d: 'M170 180 H290 V240 H170 Z', label: 'Bed 4', x: 222, y: 213 },
      { d: 'M290 180 H390 V240 H290 Z', label: 'Utility', x: 334, y: 213 },
    ],
  },
];

const AMENITY_ICONS = [
  { icon: '🏋️', label: 'Gym' },
  { icon: '🏊', label: 'Pool' },
  { icon: '🎮', label: 'Games' },
  { icon: '🌿', label: 'Garden' },
  { icon: '🔒', label: 'Security' },
  { icon: '🅿️', label: 'Parking' },
  { icon: '🏸', label: 'Sports' },
  { icon: '☕', label: 'Club' },
];

const FloorPlanSVG = ({ planLines, accent }) => (
  <svg
    viewBox="0 0 410 260"
    className="w-full h-auto"
    style={{ maxHeight: 220 }}
  >
    <rect width="410" height="260" fill="#0f172a" rx="12" />
    {/* Grid lines */}
    {[60, 120, 180, 240, 300, 360].map((x) => (
      <line key={`vg-${x}`} x1={x} y1={0} x2={x} y2={260} stroke="#ffffff08" strokeWidth={1} />
    ))}
    {[65, 130, 195].map((y) => (
      <line key={`hg-${y}`} x1={0} y1={y} x2={410} y2={y} stroke="#ffffff08" strokeWidth={1} />
    ))}
    {/* Rooms */}
    {planLines.map(({ d, label, x, y }, i) => (
      <g key={i}>
        <path d={d} fill="#ffffff06" stroke="#ffffff25" strokeWidth={1.5} />
        <text x={x} y={y} textAnchor="middle" fill="#ffffff55" fontSize="9" fontFamily="sans-serif" fontWeight="600">
          {label}
        </text>
      </g>
    ))}
    {/* Compass */}
    <text x="388" y="18" textAnchor="middle" fill="#f97316aa" fontSize="11" fontWeight="900">N</text>
    <line x1="388" y1="20" x2="388" y2="32" stroke="#f97316aa" strokeWidth="1.5" />
  </svg>
);

const FloorPlans = () => {
  const [active, setActive] = useState(0);
  const unit = UNITS[active];

  const scrollToContact = () => {
    const el = document.getElementById('Contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section className="bg-[#050810] py-20 md:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden" id="FloorPlans">

      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-orange-500 font-black text-[10px] uppercase tracking-[0.5em] mb-4">Architecture</p>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
              Elite<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.2)' }}>Architecture</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-base md:text-lg max-w-sm border-l-2 border-orange-600/30 pl-5">
            Every square foot designed for luxury living — Vastu compliant, JDA approved, power backup guaranteed.
          </p>
        </div>

        {/* Master plan badges */}
        <div className="mt-10 flex flex-wrap gap-3">
          {['Master Plan Ready', 'Vastu Compliant', 'Power Backup', 'JDA Approved', 'RERA Registered'].map((b) => (
            <span key={b} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-400">
              ✓ {b}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

        {/* Left — unit selector */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {UNITS.map((u, i) => (
            <button
              key={u.type}
              onClick={() => setActive(i)}
              className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                active === i
                  ? `bg-gradient-to-br ${u.color} ${u.border} border shadow-xl`
                  : 'bg-white/3 border-white/8 hover:bg-white/6 hover:border-white/15'
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
              <p className={`text-xs font-bold mt-1 ${active === i ? 'text-zinc-300' : 'text-zinc-600'}`}>{u.price}</p>
            </button>
          ))}

          {/* Amenities strip */}
          <div className="mt-2 bg-white/3 border border-white/8 rounded-2xl p-5">
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

          {/* Floor plan SVG */}
          <div className={`bg-gradient-to-br ${unit.color} border ${unit.border} rounded-3xl p-4 md:p-6`}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className={`text-[9px] font-black uppercase tracking-[0.4em] ${unit.accent}`}>{unit.badge}</span>
                <h3 className="text-white font-black text-3xl mt-0.5">{unit.type} Layout</h3>
              </div>
              <div className="text-right">
                <p className="text-zinc-500 text-[10px] uppercase font-bold">Carpet Area</p>
                <p className={`font-black text-xl ${unit.accent}`}>{unit.area}</p>
              </div>
            </div>
            <FloorPlanSVG planLines={unit.planLines} accent={unit.accent} />
            <p className="text-zinc-600 text-[9px] text-center mt-3 uppercase tracking-widest font-bold">
              Indicative layout · Not to scale · Actual may vary
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {unit.features.map((feat) => (
              <div key={feat} className={`flex items-center gap-3 bg-white/3 border border-white/8 rounded-xl px-4 py-3`}>
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${unit.tagColor}`} />
                <span className="text-zinc-300 text-sm font-semibold">{feat}</span>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={scrollToContact}
              className="flex-1 py-4 bg-orange-600 hover:bg-orange-500 active:scale-[0.98] text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] transition-all shadow-xl shadow-orange-600/25"
            >
              Download Brochure & Layouts
            </button>
            <button
              onClick={scrollToContact}
              className="flex-1 py-4 bg-white/8 hover:bg-white/14 border border-white/10 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] transition-all"
            >
              Book Private Viewing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
