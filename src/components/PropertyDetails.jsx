import React from 'react';

const STATS = [
  { value: '2 & 4', label: 'BHK Flats' },
  { value: '2324', label: 'Total Units' },
  { value: '18.5', label: 'Acres Campus' },
  { value: '500+', label: 'Families Living' },
];

const AMENITIES = [
  { title: 'Gym', icon: '🏋️' },
  { title: 'Swimming Pool', icon: '🏊' },
  { title: 'Library', icon: '📖' },
  { title: 'Temple', icon: '🛕' },
  { title: 'Club Lounge', icon: '🛋️' },
  { title: 'Box Cricket', icon: '🏏' },
  { title: 'Movie Theatre', icon: '🎬' },
  { title: 'Yoga Room', icon: '🧘' },
  { title: 'Gaming Zone', icon: '🎮' },
  { title: 'Cafeteria', icon: '☕' },
  { title: 'Business Lounge', icon: '💼' },
  { title: 'Kids Play Area', icon: '🎠' },
  { title: 'Football Ground', icon: '⚽' },
  { title: 'Disco Room', icon: '🎵' },
  { title: 'WiFi Zone', icon: '📶' },
  { title: '24/7 Security', icon: '🔒' },
];

const PropertyDetails = () => {
  return (
    <section className="bg-white text-slate-900 py-14 sm:py-20 md:py-28 overflow-hidden" id="PropertyDetails">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20">

        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-5 animate-bounce">
              Property Showcase
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              Arihant <span className="text-orange-500">Anchal</span>
              <br />
              <span className="text-slate-300">Changing lifestyle.</span>
            </h1>
          </div>
          <div className="lg:pb-4">
            <p className="text-slate-400 font-medium tracking-widest uppercase text-sm border-l-4 sm:border-l-0 sm:border-r-4 border-orange-500 pl-4 sm:pl-0 sm:pr-6 lg:text-right">
              Jaisalmer Bypass Road
              <br />
              Near Dali Bai Circle, Jodhpur
            </p>
          </div>
        </div>

        {/* ── SEO TEXT BLOCK ── */}
        <div className="mb-10 sm:mb-14 max-w-4xl">
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Located on <strong className="text-slate-800">Jaisalmer Bypass Road, Jodhpur</strong>,
            Arihant Anchal is a <strong className="text-slate-800">JDA &amp; RERA approved</strong> (RAJ/P/2017/322)
            gated residential township spread over <strong className="text-orange-600">18.5 acres</strong> with{' '}
            <strong className="text-slate-800">2324 premium residential units</strong>.
            Choose from <strong className="text-orange-600">2 BHK (900 sq.ft) starting Rs.41 Lakhs</strong> or{' '}
            <strong className="text-orange-600">4 BHK (1800 sq.ft super built-up) starting Rs.82 Lakhs</strong> — most affordable
            luxury homes near <strong className="text-slate-800">AIIMS Jodhpur &amp; Dali Bai Circle</strong>.
            <strong className="text-slate-800"> 500+ families</strong> already living here.
          </p>
        </div>

        {/* ── MAIN CONTENT GRID — Info + Building Photo ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-14">

          {/* Left: Info card */}
          <div className="bg-slate-50 p-7 sm:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-700 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 italic leading-snug">
                "The hub of comfortable and contemporary lifestyle."
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Arihant Anchal offers a{' '}
                <span className="text-slate-900 font-bold">Supreme Lifestyle</span> at an affordable price.
                This Stilt + 7 Storey development spans{' '}
                <span className="text-orange-600 font-bold">2 BHK (900 sq.ft)</span> &amp;{' '}
                <span className="text-orange-600 font-bold">4 BHK (1,800 sq.ft)</span> premium living spaces
                with 24/7 CCTV security and power backup.
              </p>
            </div>
            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-7 mt-6 border-t border-slate-200">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">{value}</p>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Actual Building Photo */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-xl relative group min-h-[300px]">
            <img
              src="/pp1.jpeg"
              alt="Arihant Anchal Jodhpur — Premium Residential Township aerial view"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-white font-black text-xl sm:text-2xl tracking-tight">Arihant Anchal</p>
              <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.3em] mt-1">
                Jaisalmer Bypass Road · Jodhpur · Rajasthan
              </p>
            </div>
          </div>
        </div>

        {/* ── AMENITIES — Full-width horizontal grid ── */}
        <div className="bg-slate-50 rounded-[2.5rem] p-7 sm:p-10 border border-slate-100">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-6">
            24+ World-Class Amenities
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
            {AMENITIES.map(({ title, icon }) => (
              <div
                key={title}
                className="bg-white border border-slate-100 p-3 sm:p-4 rounded-2xl flex flex-col items-center justify-center text-center hover:border-orange-500 hover:bg-orange-50 hover:shadow-md transition-all group cursor-default"
              >
                <span className="text-xl sm:text-2xl mb-1.5 group-hover:scale-125 transition-transform duration-300">
                  {icon}
                </span>
                <span className="font-bold text-[8px] sm:text-[9px] uppercase tracking-widest text-slate-500 leading-tight">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PropertyDetails;
