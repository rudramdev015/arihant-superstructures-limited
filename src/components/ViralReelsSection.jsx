import React, { useEffect } from 'react';

const ViralReelsSection = () => {
  useEffect(() => {
    // This script ensures Instagram embeds reload properly on every component render
    const processEmbeds = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//www.instagram.com/embed.js";
        document.body.appendChild(script);
      }
    };
    processEmbeds();
  }, []);

  // EXACTLY 6 REELS - Featuring your latest link
  const reelLinks = [
    "https://www.instagram.com/reel/DWb2dj8AYPA/", // NEWEST ADDITION
    "https://www.instagram.com/reel/DViNj3tjdwM/", 
    "https://www.instagram.com/reel/DSSNkEXgdqC/", 
    "https://www.instagram.com/reel/DULLuxDEdSc/", 
    "https://www.instagram.com/reel/DSey26xjMSz/", 
    "https://www.instagram.com/reel/DVoDpA9DjrD/"
  ];

  return (
    <section className="py-20 px-4 bg-[#F9FAFB] text-black overflow-hidden" id="viral-reels">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Class Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <p className="text-[#ea580c] font-black tracking-[0.3em] text-[10px] uppercase">
              #TRENDINGJODHPUR
            </p>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
              MOMENTS.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed border-l-4 border-[#ea580c] pl-6 italic">
              Experience the elite lifestyle through the lens of Jodhpur's trendsetters. Real moments, real luxury.
            </p>
          </div>
        </div>

        {/* PERFECT 6-ITEM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {reelLinks.map((url, index) => (
            <div 
              key={index} 
              className="relative rounded-[2.5rem] overflow-hidden bg-white border border-gray-100 shadow-sm transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 group"
              style={{ minHeight: '620px' }}
            >
              {/* Premium Glow Overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none border-[12px] border-transparent group-hover:border-[#ea580c]/5 transition-all duration-700 rounded-[2.5rem]"></div>

              <div className="w-full h-full p-3">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-captioned="false"
                  data-instgrm-permalink={`${url}?utm_source=ig_embed&amp;utm_campaign=loading`}
                  data-instgrm-version="14"
                  style={{ 
                    background: '#FFFFFF', 
                    border: '0', 
                    borderRadius: '30px', 
                    margin: '0', 
                    padding: '0',
                    width: '100%',
                    height: '100%' 
                  }}
                >
                  {/* High-End Loading State */}
                  <div className="flex flex-col items-center justify-center h-[580px] bg-gray-50 rounded-[30px]">
                     <div className="w-10 h-10 border-4 border-[#ea580c] border-t-transparent rounded-full animate-spin mb-4"></div>
                     <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Syncing Reel...</p>
                  </div>
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Center CTA Button - Premium Style */}
        <div className="mt-24 text-center">
          <button className="group relative bg-black text-white px-16 py-6 rounded-full font-black tracking-[0.2em] text-xs hover:bg-[#ea580c] transition-all duration-500 shadow-2xl uppercase active:scale-95 overflow-hidden">
            <span className="relative z-10">Explore All Elite Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ViralReelsSection;