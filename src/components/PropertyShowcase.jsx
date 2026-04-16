import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Maximize, 
  TreePine, 
  Layers, 
  ChevronRight,
  Eye,
  Box
} from 'lucide-react';

const PropertyShowcase = () => {
  const [activeTab, setActiveTab] = useState('2BHK');
  const [viewMode, setViewMode] = useState('blueprint'); // 'blueprint' or 'lifestyle'

  const layouts = {
    '2BHK': {
      label: "Executive",
      title: "2 BHK",
      subtitle: "Luxury Residence",
      area: "900 sq.ft",
      details: ["2 Grand Bedrooms", "2 Luxury Bathrooms", "Living Hall", "Modular Kitchen", "Wide Balcony"],
      // REPLACE THESE URLS WITH YOUR ACTUAL ASSETS
      blueprint: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2000", 
      lifestyle: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
      accent: "from-orange-500 to-red-600"
    },
    '4BHK': {
      label: "Signature",
      title: "4 BHK",
      subtitle: "Ultra-Premium Suite",
      area: "1800 sq.ft",
      details: ["4 Master Suites", "4 Premium Baths", "Grand Lounge", "Chef's Kitchen", "Wrap-around Deck"],
      // REPLACE THESE URLS WITH YOUR ACTUAL ASSETS
      blueprint: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
      lifestyle: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
      accent: "from-blue-600 to-indigo-600"
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-[#020202] py-20 px-4 md:px-10 lg:px-20 flex flex-col items-center justify-center overflow-hidden" id="Layouts">
      
      {/* --- CINEMATIC AMBIENCE --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-orange-600/5 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-white/5 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-[1700px]">
        
        {/* --- 4K RESPONSIVE HEADER --- */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-12 bg-orange-600" />
              <p className="text-orange-600 font-black tracking-[0.5em] uppercase text-[10px]">Architectural Intelligence</p>
            </div>
            <h2 className="text-6xl md:text-8xl 2xl:text-9xl font-light text-white tracking-tighter leading-none uppercase">
              The <span className="font-black italic">Master</span> <br /> 
              <span className="text-orange-600">Plan</span>
            </h2>
          </motion.div>

          {/* Project Scale Badge (18.5 Acres) */}
          <motion.div 
            whileHover={{ scale: 1.05, rotateY: 10 }}
            className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-[3rem] flex items-center gap-8 shadow-2xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg">
              <TreePine className="text-white" size={32} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">Land Parcel</p>
              <p className="text-4xl font-black text-white">18.5 <span className="text-sm font-light uppercase text-orange-600">Acres</span></p>
            </div>
          </motion.div>
        </div>

        {/* --- DUAL GRID SYSTEM --- */}
        <div className="grid xl:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT: INFORMATION SUITE (5 Cols) */}
          <div className="xl:col-span-5 flex flex-col gap-8 order-2 xl:order-1">
            
            {/* Tab Switcher - Cinematic Toggle */}
            <div className="flex p-2 bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/10 w-full max-w-md self-center xl:self-start">
              {Object.keys(layouts).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative flex-1 py-5 rounded-2xl font-black text-[11px] tracking-[0.3em] uppercase transition-all duration-500 z-10 ${
                    activeTab === tab ? 'text-white' : 'text-white/30 hover:text-white/60'
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div 
                      layoutId="activeTabGlow"
                      className={`absolute inset-0 bg-gradient-to-r ${layouts[tab].accent} rounded-2xl -z-10 shadow-2xl`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {tab}
                </button>
              ))}
            </div>

            {/* Main Info Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="bg-white/5 border border-white/10 rounded-[3.5rem] p-10 md:p-14 backdrop-blur-md relative overflow-hidden"
              >
                <Layers className="absolute -bottom-10 -right-10 w-40 h-40 text-white/[0.02] rotate-12" />
                
                <div className="relative z-10">
                  <span className="text-orange-600 font-black text-[11px] uppercase tracking-[0.5em]">{layouts[activeTab].label} Series</span>
                  <h3 className="text-7xl font-black text-white mt-4 mb-8 tracking-tighter leading-none uppercase">
                    {layouts[activeTab].title}
                  </h3>

                  <div className="bg-white/5 border border-white/5 p-8 rounded-[2rem] flex items-center gap-8 mb-10">
                    <div className="p-4 bg-orange-600/10 rounded-2xl">
                      <Maximize size={32} className="text-orange-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-1">Floor Area</p>
                      <p className="text-4xl font-medium text-white tracking-tighter">{layouts[activeTab].area}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-12">
                    {layouts[activeTab].details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-5 group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-600 transition-colors">
                          <ChevronRight size={14} className="text-orange-600" />
                        </div>
                        <p className="text-[12px] font-bold text-white/60 uppercase tracking-widest leading-none">{detail}</p>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] hover:bg-orange-600 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-4">
                    <Download size={20} />
                    Download Prospectus
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: CINEMATIC VISUALIZER (7 Cols) */}
          <div className="xl:col-span-7 relative order-1 xl:order-2">
            <motion.div 
              layout
              className="relative h-full min-h-[600px] xl:min-h-full bg-white/5 rounded-[4.5rem] border border-white/10 overflow-hidden flex flex-col group"
            >
              {/* VIEW SWITCHER HUD */}
              <div className="absolute top-12 left-12 z-20 flex gap-2 p-1.5 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10">
                <button 
                  onClick={() => setViewMode('blueprint')}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'blueprint' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
                >
                  <Box size={14} /> Blueprint
                </button>
                <button 
                  onClick={() => setViewMode('lifestyle')}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'lifestyle' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
                >
                  <Eye size={14} /> Lifestyle
                </button>
              </div>

              {/* IMAGE DISPLAY ENGINE */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab}-${viewMode}`}
                  initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full"
                >
                  <img 
                    src={viewMode === 'blueprint' ? layouts[activeTab].blueprint : layouts[activeTab].lifestyle} 
                    alt="Property Visual" 
                    className={`w-full h-full object-cover ${viewMode === 'blueprint' ? 'opacity-40 grayscale invert brightness-200' : 'opacity-80'}`}
                  />
                </motion.div>
              </AnimatePresence>

              {/* GRADIENT SHIELD */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* BOTTOM HUD */}
              <div className="absolute bottom-12 right-12 text-right">
                <p className="text-[12px] font-black text-orange-600 uppercase tracking-[0.3em] mb-2">Live Showroom</p>
                <p className="text-[9px] font-medium text-white/30 uppercase tracking-[0.2em] leading-relaxed">
                  High-Fidelity Architectural Preview <br />
                  Signature Residences | 2026
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* BACKGROUND PHANTOM TEXT */}
      <div className="absolute bottom-[-5%] left-[-5%] whitespace-nowrap opacity-[0.01] pointer-events-none select-none">
        <span className="text-[25vw] font-black text-white uppercase tracking-tighter leading-none">
          ARCHITECTURAL PERFECTION
        </span>
      </div>
    </section>
  );
};

export default PropertyShowcase;