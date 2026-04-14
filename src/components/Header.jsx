import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
// Direct import of your local high-quality asset
import arihantVideo from '../components/arihant .mp4' 

/**
 * ELITE CINEMATIC HEADER
 * Optimized for: Mobile (100dvh), Tablet, and 4K Displays
 * Focus: Pure Visual Storytelling
 */
const Header = () => {
    return (
        <header className='relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-black' id='Header'>
            
            {/* --- 1. THE CINEMATIC VIDEO ENGINE --- */}
            {/* 'object-cover' is the secret for responsiveness. 
                It ensures the video fills the screen like a movie frame on any device.
            */}
            <div className="absolute inset-0 w-full h-full z-0">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover scale-[1.02] transition-opacity duration-1000"
                >
                    <source src={arihantVideo} type="video/mp4" />
                </video>
            </div>

            {/* --- 2. PREMIUM OVERLAYS --- */}
            {/* Soft dark vignettes to keep the UI clean and high-end */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10 pointer-events-none"></div>
            
            {/* Subtle grain/noise overlay for a "Film" texture (Optional but Pro) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* --- 3. NAVIGATION LAYER --- */}
            <div className="absolute top-0 w-full z-50">
                <Navbar />
            </div>

            {/* --- 4. THE ONLY VISUAL ELEMENT: SCROLL CUE --- */}
            {/* Keeps the focus on the video but guides the user to explore */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 z-20"
            >
                {/* Minimalist Line Animation */}
                <div className="relative w-[1px] h-24 bg-white/10 overflow-hidden">
                    <motion.div 
                        animate={{ 
                            y: ["-100%", "100%"],
                            opacity: [0, 1, 0] 
                        }}
                        transition={{ 
                            repeat: Infinity, 
                            duration: 2.5, 
                            ease: "linear" 
                        }}
                        className="w-full h-1/2 bg-gradient-to-b from-transparent via-blue-500 to-transparent"
                    ></motion.div>
                </div>
                
                <motion.span 
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="text-[8px] font-black tracking-[1.2em] text-white/40 uppercase ml-3"
                >
                    Explore
                </motion.span>
            </motion.div>

        </header>
    )
}

export default Header