import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => (prev < 100 ? prev + 1 : 100));
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
                y: '-100%',
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden"
        >
            {/* --- HIGH-RISE CINEMATIC BACKGROUND --- */}
            <motion.div 
                initial={{ scale: 1.2, filter: 'blur(10px) brightness(0)' }}
                animate={{ 
                    scale: 1, 
                    filter: `blur(${10 - (progress/10)}px) brightness(${0.3 + (progress/200)})` 
                }}
                className="absolute inset-0 z-0"
            >
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                        backgroundImage: `url('https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2000')`,
                    }} 
                />
                {/* Luxury Amber Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#f15a24]/10 to-black" />
            </motion.div>

            {/* --- ARCHITECTURAL GRID OVERLAY --- */}
            <div className="absolute inset-0 z-1 opacity-[0.15]" 
                 style={{ 
                     backgroundImage: `linear-gradient(#f15a24 1px, transparent 1px), linear-gradient(90deg, #f15a24 1px, transparent 1px)`, 
                     backgroundSize: '50px 50px' 
                 }} 
            />

            {/* --- CENTRAL 3D CORE --- */}
            <div className="relative z-10 flex flex-col items-center w-full px-4">
                
                {/* LOGO PLATE */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative mb-12"
                >
                    <div className="relative z-10 bg-black/40 backdrop-blur-3xl p-10 md:p-14 border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)]">
                        {/* THE LOGO */}
                        <motion.img 
                            src="/images.png" 
                            alt="Arihant Logo" 
                            className="w-56 md:w-80 h-auto relative z-20"
                            style={{ filter: 'drop-shadow(0 0 15px rgba(241,90,36,0.4))' }}
                        />
                        
                        {/* Scanning Laser Beam */}
                        <motion.div 
                            animate={{ top: ['-10%', '110%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-[2px] bg-[#f15a24] shadow-[0_0_15px_#f15a24] z-30"
                        />
                    </div>

                    {/* Architectural Brackets */}
                    <div className="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-l-2 border-[#f15a24]" />
                    <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-[#f15a24]" />
                </motion.div>

                {/* --- TYPOGRAPHY --- */}
                <div className="flex flex-col items-center">
                    <motion.h2 
                        initial={{ letterSpacing: '0.5em', opacity: 0 }}
                        animate={{ letterSpacing: '1.8em', opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="text-white font-black text-sm md:text-xl uppercase ml-[1.8em] relative"
                        style={{ textShadow: '0 10px 20px rgba(0,0,0,0.5)' }}
                    >
                        ARIHANT
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ delay: 0.8 }}
                        className="text-[9px] md:text-[11px] text-white uppercase tracking-[1.5em] md:tracking-[2.8em] ml-[2.8em] mt-2 font-light"
                    >
                        Superstructures
                    </motion.p>
                </div>

                {/* --- PROGRESS HUD --- */}
                <div className="mt-20 w-full max-w-[320px]">
                    <div className="flex justify-between items-end mb-4 font-mono">
                        <div className="flex flex-col">
                            <span className="text-[8px] text-[#f15a24] tracking-widest uppercase">Drafting Reality</span>
                            <span className="text-[10px] text-white/40 uppercase">Project: Jodhpur_Prime</span>
                        </div>
                        <span className="text-3xl font-black text-white">{progress}%</span>
                    </div>

                    {/* The Progress Bar */}
                    <div className="w-full h-[1px] bg-white/10 relative">
                        <motion.div 
                            className="absolute inset-0 bg-[#f15a24] shadow-[0_0_15px_#f15a24]"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Tech Details */}
                    <div className="mt-4 flex justify-between text-[7px] text-white/20 uppercase tracking-[0.3em]">
                        <span>Secure Connection</span>
                        <span>High-Rise Assets Loaded</span>
                        <span>v2.0.26</span>
                    </div>
                </div>
            </div>

            {/* Cinematic Vignette */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,1)] bg-radial-gradient" />
        </motion.div>
    );
};

export default Preloader;