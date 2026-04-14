import React, { useEffect } from 'react';
import arihantLogo from './arihant-logo.png';

const PropertyDetails = () => {
  return (
    <section className="bg-white text-slate-900 py-16 md:py-32 overflow-hidden" id="About">
      <div className="max-w-[2560px] mx-auto px-6 md:px-20 lg:px-40">
        
        {/* --- SECTION HEADER: 4K OPTIMIZED --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-4xl">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-6 animate-bounce">
              Property Showcase
            </span>
            <h2 className="text-5xl md:text-7xl 2xl:text-9xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              Arihant <span className="text-orange-500">Anchal</span> <br />
              <span className="text-slate-300">Modern Living.</span>
            </h2>
          </div>
          <div className="hidden lg:block pb-4">
            <p className="text-slate-400 font-medium tracking-widest uppercase text-sm border-r-4 border-orange-500 pr-6">
              Jaisalmer Bypass Road <br /> Near Dali Bai Circle, Jodhpur
            </p>
          </div>
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Left: Deep Info Card */}
          <div className="lg:col-span-7 bg-slate-50 p-8 md:p-16 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-700">
            <h3 className="text-3xl font-bold mb-8 italic">"The hub of comfortable and contemporary lifestyle."</h3>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
              Arihant Anchal offers a <span className="text-slate-900 font-bold">Supreme Lifestyle</span> at an affordable price. 
              This Stilt + 7 Storey development spans over <span className="text-orange-600 font-bold">4.40 acres</span> of lush greenery, 
              offering well-planned roads and 24/7 CCTV security for your peace of mind.
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate-200">
              <div>
                <p className="text-4xl font-black text-slate-900">1&2</p>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">BHK Flats</p>
              </div>
              <div>
                <p className="text-4xl font-black text-slate-900">2324</p>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Total Units</p>
              </div>
              <div>
                <p className="text-4xl font-black text-slate-900">4.4</p>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Acres</p>
              </div>
              <div>
                <p className="text-4xl font-black text-slate-900">7</p>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Floors</p>
              </div>
            </div>
          </div>

          {/* Right: Amenities Highlight */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {[
              { title: 'Gym', icon: '🏋️' },
              { title: 'Library', icon: '📖' },
              { title: 'Temple', icon: '🛕' },
              { title: 'Lounge', icon: '🛋️' }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-100 p-8 rounded-[2rem] flex flex-col items-center justify-center text-center shadow-sm hover:border-orange-500 transition-all group">
                <span className="text-4xl mb-4 group-hover:scale-125 transition-transform">{item.icon}</span>
                <span className="font-bold text-xs uppercase tracking-widest text-slate-500">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- 4K MAP & CONNECTIVITY SECTION --- */}
        <div className="bg-slate-900 rounded-[4rem] overflow-hidden shadow-2xl relative">
          <div className="grid lg:grid-cols-2">
            
            {/* Stunning Map Integration */}
            <div className="h-[400px] md:h-[600px] 2xl:h-[800px] relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.431665487679!2d72.9555!3d26.264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418e986348ef57%3A0xe9899f8d55a298!2sArihant%20Anchal!5e0!3m2!1sen!2sin!4v1712310000000!5m2!1sen!2sin" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                className="grayscale brightness-50 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              ></iframe>
              <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 pointer-events-none">
                <p className="text-white text-xs font-bold uppercase tracking-widest">Live Location</p>
              </div>
            </div>

            {/* Premium Connectivity List */}
            <div className="p-10 md:p-20 flex flex-col justify-center">
              <h4 className="text-white text-3xl md:text-5xl font-black mb-10">Strategic <span className="text-orange-500">Connectivity</span></h4>
              <div className="space-y-8">
                {[
                  { place: 'Dali Bai Circle', dist: '0.5 Kms' },
                  { place: 'B.R Birla School', dist: '1.5 Kms' },
                  { place: 'AIIMS Hospital', dist: '6 Kms' },
                  { place: 'Railway Station', dist: '10 Kms' },
                  { place: 'Jodhpur Airport', dist: '14 Kms' }
                ].map((loc, idx) => (
                  <div key={idx} className="flex items-center justify-between group cursor-default">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-orange-600 rounded-full group-hover:scale-150 transition-all"></div>
                      <span className="text-zinc-400 group-hover:text-white text-lg transition-colors font-medium">{loc.place}</span>
                    </div>
                    <span className="text-white font-black tracking-widest">{loc.dist}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 flex flex-wrap gap-4">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-orange-900/40">
                  Get Directions
                </button>
                <div className="bg-white/5 border border-white/10 px-8 py-5 rounded-2xl">
                   <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">RERA Registered</p>
                   <p className="text-white font-bold text-xs uppercase tracking-tighter">RAJ/P/2017/322</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PropertyDetails;