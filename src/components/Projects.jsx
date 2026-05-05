import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

import Img1  from './Gallery/comp2.png';
import Img2  from './Gallery/comp3.png';
import Img3  from './Gallery/comp4.png';
import Img4  from './Gallery/comp5.png';
import Img5  from './Gallery/comp7.png';
import Img6  from './Gallery/comp10.png';
import Img7  from './Gallery/comp11.png';
import Img8  from './Gallery/comp12.png';
import Img9  from './Gallery/comp13.png';
import Img10 from './Gallery/52.png';
import Img11 from './Gallery/coparihantstart.png';

const ALL_IMAGES = [
  { src: Img1,  title: 'Grand Facade',        layout: 'col-span-2 row-span-2', priority: true  },
  { src: Img2,  title: 'Master Bedroom',       layout: 'col-span-1 row-span-1', priority: true  },
  { src: Img3,  title: 'Modern Living',        layout: 'col-span-1 row-span-1', priority: true  },
  { src: Img4,  title: 'Evening View',         layout: 'col-span-2 row-span-1', priority: true  },
  { src: Img5,  title: 'Lifestyle Hub',        layout: 'col-span-2 row-span-1', priority: true  },
  { src: Img6,  title: 'Elite Detail',         layout: 'col-span-1 row-span-1', priority: false },
  { src: Img7,  title: 'Luxury Lounge',        layout: 'col-span-1 row-span-2', priority: false },
  { src: Img8,  title: 'Architectural Art',    layout: 'col-span-2 row-span-1', priority: false },
  { src: Img9,  title: 'Zen Space',            layout: 'col-span-1 row-span-1', priority: false },
  { src: Img10, title: 'Premium Finishes',     layout: 'col-span-1 row-span-1', priority: false },
  { src: Img11, title: 'The Anchal Life',      layout: 'col-span-2 row-span-1', priority: false },
];

const Gallery = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleImages = isExpanded ? ALL_IMAGES : ALL_IMAGES.filter(img => img.priority);

  return (
    <section className="py-20 bg-white" id="Gallery">
      <div className="container mx-auto px-6">

        {/* Header */}
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
            <span className="text-transparent italic font-light" style={{ WebkitTextStroke: '2px #0f172a' }}>Signature</span> <br />
            Gallery
          </h2>

          <div className="mt-8 flex items-start gap-4 border-l-2 border-slate-100 pl-4">
            <p className="text-slate-500 font-medium text-sm md:text-base max-w-sm">
              Explore Jodhpur's most awaited luxury residences through our curated visual collection.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[250px]">
          <AnimatePresence>
            {visibleImages.map((img, index) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <p className="text-white text-[10px] font-black uppercase tracking-widest">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle Button */}
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
    </section>
  );
};

export default Gallery;
