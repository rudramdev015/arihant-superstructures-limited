import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Bot } from 'lucide-react';
import Navbar from './Navbar';
import Preloader from './Preloader';
import arihantVideo from '../components/arihant .mp4'; 

const Header = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // High-end delay to allow the brand identity to settle
        const timer = setTimeout(() => setIsLoading(false), 4000); 
        return () => clearTimeout(timer);
    }, []);

    const brandOrange = '#f15a24';

    return (
        <>
            <AnimatePresence>
                {isLoading && <Preloader />}
            </AnimatePresence>

            <header className='relative w-full h-[100dvh] bg-[#030303] overflow-hidden' id='Header'>
                
                {/* --- CINEMATIC BACKGROUND --- */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40 md:opacity-60">
                        <source src={arihantVideo} type="video/mp4" />
                    </video>
                    {/* Deep shadow overlay for premium aesthetic */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black" />
                </div>

                {/* --- NAVIGATION --- */}
                <div className="absolute top-0 w-full z-50">
                    <Navbar />
                </div>

                {/* --- MOBILE-ONLY CONTENT (HIDDEN ON BIG SCREENS) --- */}
                <div className="md:hidden relative z-20 w-full h-full flex flex-col items-center justify-center px-6">
                    
                    {/* Mobile Branding */}
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={!isLoading ? { opacity: 1, y: 0 } : {}}
                        className="text-center mb-8"
                    >
                        <h1 className="text-4xl font-black text-white uppercase tracking-[0.4em] pl-[0.4em]">
                            ARIHANT
                        </h1>
                        <p className={`text-[10px] tracking-[1.5em] text-[${brandOrange}] uppercase mt-3 ml-[1.5em] font-bold`}>
                            Superstructures
                        </p>
                    </motion.div>

                    {/* Mobile Floating Video Frame */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={!isLoading ? { opacity: 1, scale: 1 } : {}}
                        className="relative w-full max-w-[340px] aspect-video rounded-3xl border-[1px] border-white/20 bg-black overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
                    >
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                            <source src={arihantVideo} type="video/mp4" />
                        </video>
                    </motion.div>

                    {/* Mobile Action Buttons */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={!isLoading ? { opacity: 1, y: 0 } : {}}
                        className="mt-10 w-full max-w-sm flex flex-col gap-3"
                    >
                        <button className="bg-white text-black py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest">
                            Enquire Now
                        </button>
                        <button className={`bg-[${brandOrange}] text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest`}>
                            Book Visit
                        </button>
                    </motion.div>
                </div>

                {/* --- BIG SCREEN / PC VIEW (CLEAN & MINIMAL) --- 
                    All buttons and central text are removed here to create a "Top Class" 
                    architectural showcase feel. */}
                <div className="hidden md:flex absolute inset-0 z-20 items-end p-20 pointer-events-none">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={!isLoading ? { opacity: 1, x: 0 } : {}}
                        className="border-l-2 border-[#f15a24] pl-6"
                    >
                        <h2 className="text-white text-xs tracking-[1em] uppercase opacity-50">Perspective</h2>
                        <h3 className="text-white text-4xl font-light tracking-widest mt-2 uppercase">Jodhpur Prime</h3>
                    </motion.div>
                </div>

                {/* --- PERSISTENT FLOATING CONTACT (TOP CLASS UX) --- */}
                <div className="absolute bottom-10 right-8 flex flex-col gap-4 z-40">
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl"
                    >
                        <MessageSquare className="text-white w-6 h-6" />
                    </motion.button>
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-2xl border border-white/10 flex items-center justify-center"
                    >
                        <Bot className={`text-[${brandOrange}] w-6 h-6`} />
                    </motion.button>
                </div>

                {/* HUD FRAME */}
                <div className="absolute inset-0 border-[15px] md:border-[40px] border-black pointer-events-none z-30" />
            </header>
        </>
    );
};

export default Header;