import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../assets/assets';

const PropertyShowcase = () => {
  const [activeTab, setActiveTab] = useState('1BHK');

  const layouts = {
    '1BHK': {
      title: "1 BHK Apartment",
      area: "380 sq.ft",
      details: ["1 Master Bedroom", "1 Modern Bathroom", "Spacious Living Room", "Modular Kitchen", "Private Balcony"],
      img: assets.plan1BHK
    },
    '2BHK': {
      title: "2 BHK Apartment",
      area: "900 sq.ft",
      details: ["2 Grand Bedrooms", "2 Luxury Bathrooms", "Large Living Hall", "Modular Kitchen", "Extra Wide Balcony"],
      img: assets.plan2BHK
    }
  };

  return (
    <section className="min-h-screen w-full bg-slate-50 py-16 px-4 md:px-10 lg:px-32 flex flex-col justify-center items-center overflow-hidden" id="Layouts">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-20"
      >
        <p className="text-orange-600 font-black tracking-[0.3em] uppercase text-[10px] md:text-xs mb-3">Flat Layout</p>
        <h2 className="text-4xl md:text-7xl font-bold text-slate-900 tracking-tighter">
          Arihant Anchal <span className="font-light italic text-slate-400">Plans</span>
        </h2>
      </motion.div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
        
        {/* Left Side: Interactive Controls & Text */}
        <div className="order-2 lg:order-1 flex flex-col justify-center">
          
          {/* Tab Switcher */}
          <div className="flex p-1.5 bg-white rounded-2xl w-max shadow-sm border border-slate-200 mb-10 md:mb-14 mx-auto lg:mx-0">
            {['1BHK', '2BHK'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-3 md:px-12 md:py-4 rounded-xl font-black text-[10px] md:text-xs tracking-widest transition-all duration-500 z-10 ${
                  activeTab === tab ? 'text-white' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-slate-900 rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab} LAYOUT
              </button>
            ))}
          </div>

          {/* Dynamic Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="text-center lg:text-left"
            >
              <h3 className="text-5xl md:text-7xl font-black text-slate-900 mb-2 leading-none">
                {layouts[activeTab].title}
              </h3>
              <p className="text-2xl md:text-3xl text-orange-600 font-bold mb-8">
                Super-buildup area <span className="underline decoration-orange-200 underline-offset-8">{layouts[activeTab].area}</span>
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-md mx-auto lg:mx-0">
                {layouts[activeTab].details.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500 font-medium text-sm md:text-base">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-[10px]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full md:w-max bg-slate-900 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-orange-600 hover:shadow-2xl hover:shadow-orange-200 transition-all active:scale-95">
                Download Full Floor Plan
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Visual Floor Plan */}
        <motion.div 
          layout
          className="order-1 lg:order-2 bg-white rounded-[3rem] md:rounded-[4.5rem] p-6 md:p-14 shadow-2xl shadow-slate-200 border border-slate-100 relative group overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-orange-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.1, rotate: 2 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <img 
                src={layouts[activeTab].img} 
                alt={`${activeTab} Plan`} 
                className="w-full h-auto max-h-[500px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full border border-slate-100 shadow-sm">
            <p className="text-[9px] font-black tracking-widest text-slate-400 uppercase italic">Detailed Architectural View</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PropertyShowcase;