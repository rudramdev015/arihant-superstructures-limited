import React from 'react';
import { motion } from 'framer-motion';

// IMPORTING ALL IMAGES FROM YOUR GALLERY FOLDER
import img11 from './Gallery/11.png';
import img22 from './Gallery/22.png';
import img33 from './Gallery/33.png';
import img44 from './Gallery/44.png';
import img45 from './Gallery/45.png';
import img50 from './Gallery/50.png';
import img52 from './Gallery/52.png';

const Gallery = () => {
    // Mapping images to their specific Bento Grid positions
    const galleryImages = [
        { src: img11, title: "Masterpiece", layout: "col-span-2 row-span-2", isFeatured: true },
        { src: img22, title: "Modern Living", layout: "col-span-1 row-span-2", isFeatured: false },
        { src: img33, title: "Interior View", layout: "col-span-1 row-span-1", isFeatured: false },
        { src: img44, title: "Elite Design", layout: "col-span-1 row-span-1", isFeatured: false },
        { src: img45, title: "Lifestyle", layout: "col-span-2 row-span-1", isFeatured: false, hasVideo: true },
        { src: img50, title: "Architecture", layout: "col-span-1 row-span-1", isFeatured: false },
        { src: img52, title: "Premium Space", layout: "col-span-1 row-span-1", isFeatured: false },
    ];

    return (
        <section className="py-24 bg-[#fcfcfc]" id="SignatureGallery">
            <div className="container mx-auto px-6 lg:px-20">
                
                {/* --- HEADER --- */}
                <div className="flex flex-col items-center mb-20">
                    <div className="w-1 h-20 bg-gradient-to-b from-orange-600 to-transparent mb-8"></div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter text-center">
                        The <span className="text-orange-600 italic">Signature</span> Gallery
                    </h2>
                </div>

                {/* --- BENTO GRID --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
                    {galleryImages.map((img, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`${img.layout} relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-xl`}
                        >
                            <img 
                                src={img.src} 
                                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                                alt={img.title} 
                            />
                            
                            {/* Overlay for all images */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>

                            {/* "Masterpiece" Badge for img11 */}
                            {img.isFeatured && (
                                <div className="absolute top-8 left-8">
                                    <span className="bg-orange-600 text-white text-[10px] font-black px-5 py-2 rounded-full tracking-widest uppercase shadow-xl">
                                        Masterpiece
                                    </span>
                                </div>
                            )}

                            {/* "Watch Film" Button for the wide item (img45) */}
                            {img.hasVideo && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                                        Watch Film
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;