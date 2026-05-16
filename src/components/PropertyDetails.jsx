import React from 'react';

const STATS = [
  { value: '2 & 4', label: 'BHK Flats' },
  { value: '2324', label: 'Total Units' },
  { value: '900–1800', label: 'Sq Ft Range' },
  { value: '7', label: 'Floors' },
];

const AMENITIES = [
  { title: 'Gym', icon: '🏋️' },
  { title: 'Library', icon: '📖' },
  { title: 'Temple', icon: '🛕' },
  { title: 'Lounge', icon: '🛋️' },
];

const PropertyDetails = () => {
  return (
    <section className="bg-white text-slate-900 py-14 sm:py-20 md:py-28 overflow-hidden" id="PropertyDetails">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20">

        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-20 gap-6">
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
        <div className="mb-10 sm:mb-16 max-w-4xl">
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Located on <strong className="text-slate-800">Jaisalmer Bypass Road, Jodhpur</strong>,
            Arihant Anchal is a <strong className="text-slate-800">JDA &amp; RERA approved</strong> (RAJ/P/2017/322)
            gated residential township spread over <strong className="text-orange-600">18.5 acres</strong> with{' '}
            <strong className="text-slate-800">2324 premium residential units</strong>.
            Choose from <strong className="text-orange-600">2 BHK (900 sq.ft carpet) starting Rs.41 Lakhs</strong> or{' '}
            <strong className="text-orange-600">4 BHK (1800 sq.ft super built-up · 1216 sq.ft carpet) starting Rs.82 Lakhs</strong> — the most affordable
            luxury homes near <strong className="text-slate-800">AIIMS Jodhpur &amp; Dali Bai Circle</strong>.
            Vastu compliant · 24/7 CCTV · Power backup · Home loans from SBI, HDFC, ICICI &amp; all major banks.
            <strong className="text-slate-800"> 500+ families</strong> already living here.
          </p>
        </div>

        {/* ── MAIN CONTENT GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-14 sm:mb-20">

          {/* Left: Info card */}
          <div className="lg:col-span-7 bg-slate-50 p-7 sm:p-12 md:p-14 rounded-[2.5rem] sm:rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-700">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 italic leading-snug">
              "The hub of comfortable and contemporary lifestyle."
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
              Arihant Anchal offers a{' '}
              <span className="text-slate-900 font-bold">Supreme Lifestyle</span> at an affordable price.
              This Stilt + 7 Storey development spans over{' '}
              <span className="text-orange-600 font-bold">2 BHK (900 sq.ft)</span> &amp; <span className="text-orange-600 font-bold">4 BHK (1,800 sq.ft)</span> premium living spaces,
              with well-planned roads and 24/7 CCTV security for your peace of mind.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-7 border-t border-slate-200">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">{value}</p>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Amenities */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {AMENITIES.map(({ title, icon }) => (
              <div
                key={title}
                className="bg-white border border-slate-100 p-6 sm:p-8 rounded-[1.8rem] sm:rounded-[2rem] flex flex-col items-center justify-center text-center shadow-sm hover:border-orange-500 hover:shadow-lg transition-all group cursor-default"
              >
                <span className="text-3xl sm:text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {icon}
                </span>
                <span className="font-bold text-[10px] uppercase tracking-widest text-slate-500">{title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PropertyDetails;
