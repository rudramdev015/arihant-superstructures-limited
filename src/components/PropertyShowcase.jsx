import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, Maximize, TreePine, Layers, ChevronRight,
  Eye, Box, Compass, ShieldCheck, Zap 
} from 'lucide-react';

// --- HIGH-QUALITY LOCAL IMPORTS ---
import blueprintImg from '../assets/images/MAP.jpg';
import render2BHK from '../assets/images/r1 (1).png';
import render3BHK from '../assets/images/r1 (5).png';
import render4BHK from '../assets/images/r1 (7).png';

const PropertyShowcase = () => {
  const [activeTab, setActiveTab] = useState('2BHK');
  const [viewMode, setViewMode] = useState('lifestyle'); 

  const layouts = {
    '2BHK': {
      label: "Executive Series",
      title: "2 BHK",
      subtitle: "Luxury Residence",
      area: "950 sq.ft",
      details: ["Vastu Compliant Design", "2 Grand Master Bedrooms", "Dual Wide Balconies", "Modular Kitchen Space", "Premium Vitrified Flooring"],
      blueprint: blueprintImg, 
      lifestyle: render2BHK,
      accent: "from-orange-500 to-red-600"
    },
    '3BHK': {
      label: "Signature Series",
      title: "3 BHK",
      subtitle: "Elite Family Suite",
      area: "1450 sq.ft",
      details: ["3 Master Suites", "Spacious Living & Dining", "Wrap-around Sundeck", "Designer Bathrooms", "Servant Room Attached"],
      blueprint: blueprintImg, 
      lifestyle: render3BHK,
      accent: "from-amber-500 to-orange-600"
    },
    '4BHK': {
      label: "Presidential Series",
      title: "4 BHK",
      subtitle: "Ultra-Premium Penthouse",
      area: "2100 sq.ft",
      details: ["4 Ultra-Luxury Suites", "Private Entry Lobby", "Chef's Grade Kitchen", "Grand Deck with Views", "Smart Home Automation"],
      blueprint: blueprintImg,
      lifestyle: render4BHK,
      accent: "from-blue-600 to-indigo-600"
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-[#050505] py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center overflow-hidden" id="Layouts">
      
      {/* --- CINEMATIC LIGHTING --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-orange-600/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/5 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px]">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-20 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <span className="h-[3px] w-16 bg-orange-600" />
              <p className="text-orange-600 font-black tracking-[0.6em] uppercase text-[12px]">Elite Architecture</p>
            </div>
            <h2 className="text-6xl md:text-8xl 2xl:text-9xl font-black text-white tracking-tighter leading-[0.8] uppercase">
              MASTER <span className="text-transparent stroke-white italic font-light">PLAN</span> <br /> 
              <span className="text-orange-600">LAYOUTS</span>
            </h2>
          </motion.div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full xl:w-auto">
            {[
              { icon: TreePine, val: "18.5", unit: "Acres", label: "Project Area" },
              { icon: ShieldCheck, val: "Vastu", unit: "100%", label: "Compliant" },
              { icon: Zap, val: "Power", unit: "24/7", label: "Backup" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-3xl border border-white/10 p-6 rounded-[2.5rem] flex flex-col items-center text-center min-w-[140px]"
              >
                <stat.icon className="text-orange-500 mb-3" size={24} />
                <p className="text-3xl font-black text-white leading-none">{stat.val}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- INTERACTIVE GRID --- */}
        <div className="grid xl:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT: INFO SUITE */}
          <div className="xl:col-span-5 flex flex-col gap-8 order-2 xl:order-1">
            
            {/* Tab Selector */}
            <div className="flex p-2 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 w-full overflow-x-auto no-scrollbar">
              {Object.keys(layouts).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative flex-1 py-6 rounded-3xl font-black text-[12px] tracking-[0.3em] uppercase transition-all duration-500 z-10 min-w-[120px] ${
                    activeTab === tab ? 'text-white' : 'text-white/30 hover:text-white/60'
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div 
                      layoutId="activeTabGlow"
                      className={`absolute inset-0 bg-gradient-to-r ${layouts[tab].accent} rounded-3xl -z-10 shadow-2xl`}
                    />
                  )}
                  {tab}
                </button>
              ))}
            </div>

            {/* Info Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                className="bg-white/5 border border-white/10 rounded-[4rem] p-10 md:p-14 backdrop-blur-xl"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Compass size={16} className="text-orange-600 animate-spin-slow" />
                    <span className="text-orange-600 font-black text-[11px] uppercase tracking-[0.5em]">{layouts[activeTab].label}</span>
                  </div>
                  
                  <h3 className="text-8xl font-black text-white tracking-tighter leading-none uppercase mb-10">
                    {layouts[activeTab].title}
                  </h3>

                  <div className="bg-white/5 border border-white/5 p-8 rounded-3xl flex justify-between items-center mb-10">
                    <div>
                        <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-2">Floor Space</p>
                        <p className="text-4xl font-medium text-white tracking-tighter">{layouts[activeTab].area}</p>
                    </div>
                    <Maximize size={32} className="text-orange-600 opacity-50" />
                  </div>

                  <div className="space-y-5 mb-12">
                    {layouts[activeTab].details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-5 group">
                        <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-600 group-hover:bg-orange-600 transition-all">
                          <ChevronRight size={16} className="text-orange-600 group-hover:text-white" />
                        </div>
                        <p className="text-[13px] font-bold text-white/70 uppercase tracking-[0.15em]">{detail}</p>
                      </div>
                    ))}
                  </div>

                  <button className="w-full h-20 bg-white text-black rounded-[2rem] font-black uppercase tracking-[0.4em] text-[12px] hover:bg-orange-600 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-4 group">
                    <Download size={24} className="group-hover:translate-y-1 transition-transform" />
                    Download Brochure
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: VISUALIZER */}
          <div className="xl:col-span-7 relative order-1 xl:order-2">
            <div className="relative h-full min-h-[500px] xl:min-h-full bg-white/5 rounded-[4rem] border border-white/10 overflow-hidden group shadow-2xl">
              
              {/* HUD HUD */}
              <div className="absolute top-10 left-10 z-30 flex gap-3 p-2 bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/10">
                <button 
                  onClick={() => setViewMode('lifestyle')}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${viewMode === 'lifestyle' ? 'bg-orange-600 text-white' : 'text-white/40 hover:text-white'}`}
                >
                  <Eye size={16} /> Lifestyle
                </button>
                <button 
                  onClick={() => setViewMode('blueprint')}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${viewMode === 'blueprint' ? 'bg-orange-600 text-white' : 'text-white/40 hover:text-white'}`}
                >
                  <Box size={16} /> Blueprint
                </button>
              </div>

              {/* IMAGE ENGINE */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab}-${viewMode}`}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                  className="w-full h-full relative"
                >
                  <img 
                    src={viewMode === 'blueprint' ? layouts[activeTab].blueprint : layouts[activeTab].lifestyle} 
                    alt="Property Preview" 
                    className={`w-full h-full object-cover transition-all duration-1000 ${viewMode === 'blueprint' ? 'invert opacity-40 brightness-150' : 'opacity-80 group-hover:scale-110'}`}
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 pointer-events-none" />
              
              <div className="absolute bottom-14 right-14 text-right">
                <p className="text-[12px] font-black text-white uppercase tracking-[0.4em] mb-2">Signature Series</p>
                <p className="text-[10px] font-medium text-white/30 uppercase tracking-[0.2em] leading-relaxed">
                  High-Fidelity Virtual Preview <br />
                  Arihant Anchal Jodhpur
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .stroke-white {
          -webkit-text-stroke: 2px rgba(255,255,255,0.2);
          color: transparent;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PropertyShowcase;