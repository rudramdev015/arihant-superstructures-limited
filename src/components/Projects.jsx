import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExpand, FaArrowRight } from 'react-icons/fa';

// --- ALL IMAGE IMPORTS ---
import img11 from './Gallery/11.png';
import img22 from './Gallery/22.png';
import img33 from './Gallery/33.png';
import img44 from './Gallery/44.png';
import img45 from './Gallery/45.png';
import img50 from './Gallery/50.png';
import img52 from './Gallery/52.png';
import r1 from '../assets/images/r1 (1).png';
import r2 from '../assets/images/r1 (2).png';
import r3 from '../assets/images/r1 (3).png';
import r4 from '../assets/images/r1 (4).png';
import r5 from '../assets/images/r1 (5).png';
import r6 from '../assets/images/r1 (6).png';
import r7 from '../assets/images/r1 (7).png';

const Gallery = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const allImages = [
        { src: r1, title: "Grand Facade", layout: "col-span-2 row-span-2", priority: true },
        { src: img11, title: "Master Bedroom", layout: "col-span-1 row-span-1", priority: true },
        { src: r2, title: "Modern Living", layout: "col-span-1 row-span-1", priority: true },
        { src: r5, title: "Evening View", layout: "col-span-2 row-span-1", priority: true },
        { src: img45, title: "Lifestyle Hub", layout: "col-span-2 row-span-1", priority: true },
        
        // HIDDEN UNTIL EXPANDED
        { src: r3, title: "Elite Detail", layout: "col-span-1 row-span-1", priority: false },
        { src: img22, title: "Luxury Lounge", layout: "col-span-1 row-span-2", priority: false },
        { src: r4, title: "Architectural Art", layout: "col-span-2 row-span-1", priority: false },
        { src: img33, title: "Zen Space", layout: "col-span-1 row-span-1", priority: false },
        { src: r6, title: "Premium Finishes", layout: "col-span-1 row-span-1", priority: false },
        { src: img44, title: "Comfort Redefined", layout: "col-span-1 row-span-1", priority: false },
        { src: r7, title: "Signature Style", layout: "col-span-1 row-span-1", priority: false },
        { src: img50, title: "Stellar Design", layout: "col-span-1 row-span-1", priority: false },
        { src: img52, title: "The Anchal Life", layout: "col-span-2 row-span-1", priority: false },
    ];

    // Filter images based on state
    const visibleImages = isExpanded ? allImages : allImages.filter(img => img.priority);

    return (
        <section className="py-20 bg-white" id="Gallery">
            <div className="container mx-auto px-6">
                
                {/* --- MOBILE-FIRST TOP CLASS HEADER --- */}
                <div className="flex flex-col mb-12">
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px] mb-3"
                    >
                        Exquisite Spaces
                    </motion.span>
                    
                    <h2 className="text-[14vw] md:text-8xl font-black text-slate-950 leading-[0.8] tracking-tighter uppercase">
                        The <br />
                        <span className="text-transparent stroke-text italic font-light">Signature</span> <br />
                        Gallery
                    </h2>
                    
                    <div className="mt-8 flex items-start gap-4 border-l-2 border-slate-100 pl-4">
                        <p className="text-slate-500 font-medium text-sm md:text-base max-w-sm">
                            Explore Jodhpur's most awaited luxury residences through our curated visual collection.
                        </p>
                    </div>
                </div>

                {/* --- STUNNING BENTO GRID --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[250px]">
                    <AnimatePresence>
                        {visibleImages.map((img, index) => (
                            <motion.div 
                                key={img.src}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className={`${img.layout} relative rounded-3xl overflow-hidden group shadow-sm bg-slate-50`}
                            >
                                <img 
                                    src={img.src} 
                                    alt={img.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />
                                
                                {/* Top Class Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                    <p className="text-white text-[10px] font-black uppercase tracking-widest">{img.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* --- TOP CLASS INTERACTIVE TOGGLE --- */}
                <div className="mt-12 flex justify-center">
                    {!isExpanded ? (
                        <motion.button 
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsExpanded(true)}
                            className="group flex items-center gap-6 bg-slate-950 text-white px-10 py-6 rounded-full font-black uppercase text-[10px] tracking-[0.3em] shadow-2xl hover:bg-orange-600 transition-all"
                        >
                            Explore Full Experience
                            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </motion.button>
                    ) : (
                        <motion.button 
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                setIsExpanded(false);
                                document.getElementById('Gallery').scrollIntoView();
                            }}
                            className="bg-slate-100 text-slate-950 px-10 py-6 rounded-full font-black uppercase text-[10px] tracking-[0.3em]"
                        >
                            Show Less
                        </motion.button>
                    )}
                </div>
            </div>

            <style jsx>{`
                .stroke-text {
                    -webkit-text-stroke: 1px #0f172a;
                    color: transparent;
                }
                @media (min-width: 768px) {
                    .stroke-text {
                        -webkit-text-stroke: 2px #0f172a;
                    }
                }
            `}</style>
        </section>
    );
};

export default Gallery;