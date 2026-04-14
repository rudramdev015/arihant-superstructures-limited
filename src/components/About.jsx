import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  // Logic for the FOMO Countdown Timer
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='w-full overflow-hidden bg-white selection:bg-orange-500 selection:text-white' id='About'>
      
      {/* --- SECTION 1: HIGH-CONVERSION SCARCITY BAR --- */}
      <div className='sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md text-white py-3 px-6 shadow-2xl border-b border-white/10'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='flex items-center gap-3'>
            <span className='relative flex h-3 w-3'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-orange-500'></span>
            </span>
            <p className='font-bold uppercase tracking-widest text-[10px] md:text-xs italic'>
              Exclusive Offer: <span className='text-orange-400'>FEW UNITS LEFT</span> in Jodhpur's Premier Project
            </p>
          </div>
          
          <div className='flex items-center gap-6'>
            <div className='flex gap-3 font-mono text-sm md:text-lg font-black bg-white/10 px-4 py-1 rounded-full border border-white/5'>
              <span>{timeLeft.hours}h</span>:<span>{timeLeft.minutes}m</span>:<span>{timeLeft.seconds}s</span>
            </div>
            <button className='bg-orange-600 text-white px-6 py-2 rounded-full font-black uppercase text-[10px] tracking-tighter hover:bg-white hover:text-slate-900 transition-all duration-500 shadow-lg shadow-orange-600/20'>
              Claim Your Unit
            </button>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: BRAND HERITAGE (LUXURY GRID) --- */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='container mx-auto py-24 px-6 md:px-20 lg:px-32'
      >
        <div className='grid lg:grid-cols-2 gap-16 xl:gap-24 items-center'>
          {/* Visual Side */}
          <div className='relative group'>
            <div className='absolute -inset-4 bg-orange-50 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700 opacity-50'></div>
            <img 
              src={assets.brand_img} 
              alt="Heritage" 
              className='relative z-10 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] w-full object-cover aspect-[4/3] grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000' 
            />
            
            {/* Floating Trust Badge */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className='absolute -bottom-10 -right-4 md:-right-10 z-20 bg-white p-8 rounded-3xl shadow-2xl border border-slate-50 hidden sm:block'
            >
              <p className='text-5xl font-black text-slate-900 leading-none'>30+</p>
              <p className='text-slate-400 font-bold uppercase text-[9px] tracking-[0.3em] mt-2'>Years of Excellence</p>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className='flex flex-col gap-10'>
            <div className='space-y-4'>
              <p className='text-orange-600 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs'>Our Heritage</p>
              <h1 className='text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tighter'>
                Building Dreams into <span className='font-light italic text-slate-400 underline decoration-orange-200 decoration-4 underline-offset-8'>Reality</span>
              </h1>
            </div>

            <div className='grid grid-cols-2 gap-4 md:gap-8'>
              {[
                { label: 'Homes Delivered', value: '12k+' },
                { label: 'Ongoing Projects', value: '18+' }
              ].map((stat, i) => (
                <div key={i} className='p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 group'>
                  <p className='text-4xl font-black text-slate-900 group-hover:text-orange-600 transition-colors'>{stat.value}</p>
                  <p className='text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1'>{stat.label}</p>
                </div>
              ))}
            </div>

            <p className='text-slate-500 leading-relaxed text-lg border-l-4 border-orange-500 pl-8 italic'>
              At Arihant Superstructures, we don't just build apartments; we craft legacies. 
              Under the visionary leadership of <span className='text-slate-900 font-bold'>Mr. Ashok Chhajer</span>, 
              we are changing the lifestyle of Jodhpur with architectural innovation.
            </p>
          </div>
        </div>
      </motion.section>

      {/* --- SECTION 3: THE VISIONARY (PREMIUM DARK MODE) --- */}
      <section className='bg-slate-950 py-32 px-6 md:px-20 lg:px-32 text-white relative overflow-hidden'>
        {/* Background Decorative Circles */}
        <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] -mr-64 -mt-64'></div>
        <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -ml-64 -mb-64'></div>

        <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10'>
          
          {/* Text Content */}
          <div className='order-2 lg:order-1'>
            <motion.p 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              className='text-orange-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 italic'
            >
              Man Behind the Vision
            </motion.p>
            <h2 className='text-5xl md:text-7xl font-black mb-4 tracking-tighter'>Mr. Ashok Chhajer</h2>
            <p className='text-orange-200 font-bold text-xs mb-12 uppercase tracking-[0.4em] bg-white/5 w-max px-4 py-2 rounded-full border border-white/5'>
              Chairman & Managing Director
            </p>
            
            <div className='space-y-8 text-slate-300 text-xl leading-relaxed italic relative'>
              <span className='absolute -left-8 -top-8 text-7xl text-orange-600/20 font-serif'>“</span>
              <p>Arihant truly embodies <span className='text-white font-bold'>'Changing Lifestyles'</span> (Sach mein kuch badal raha hain). Our objective is to revolutionize the home-buying experience by delivering sustainable, elegant, and modern living spaces.</p>
              <p className='not-italic text-sm text-slate-500 max-w-lg'>With over 20 years of experience, Mr. Chhajer has pioneered real estate in Navi Mumbai and Jodhpur, ensuring transparency and quality in every project.</p>
            </div>

            <div className='mt-16 flex items-center gap-10'>
                <div className='text-center group'>
                  <p className='text-3xl font-black text-white group-hover:text-orange-500 transition-colors'>ISO</p>
                  <p className='text-[9px] text-slate-500 uppercase font-black tracking-widest'>Certified Quality</p>
                </div>
                <div className='h-12 w-[1px] bg-white/10'></div>
                <div className='text-center group'>
                  <p className='text-3xl font-black text-white group-hover:text-orange-500 transition-colors italic font-serif'>Trust</p>
                  <p className='text-[9px] text-slate-500 uppercase font-black tracking-widest'>Unmatched Legacy</p>
                </div>
            </div>
          </div>
          
          {/* Chairman Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className='order-1 lg:order-2 flex justify-center'
          >
             <div className='relative w-full max-w-md group'>
                {/* Decorative Frame */}
                <div className='absolute inset-0 border-2 border-orange-500/30 rounded-[4rem] translate-x-6 translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700'></div>
                
                <div className='relative z-10 w-full aspect-[3/4] bg-slate-900 rounded-[4rem] overflow-hidden border-4 border-slate-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]'>
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60'></div>
                  <img 
                    src={assets.chairman_img} 
                    alt="CMD Ashok Chhajer" 
                    className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100' 
                  />
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 4: MOBILE ACTION BAR (ENHANCED) --- */}
      <div className='fixed bottom-0 left-0 right-0 z-50 md:hidden grid grid-cols-2 gap-2 p-3 bg-white/80 backdrop-blur-xl border-t border-slate-100 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]'>
         <button className='bg-slate-100 text-slate-900 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-slate-200 transition-colors'>
           Enquire Now
         </button>
         <button className='bg-orange-600 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-orange-600/20'>
           Book Site Visit
         </button>
      </div>

    </div>
  );
};

export default About;