import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  // YOUR DEPLOYED GOOGLE SCRIPT URL
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxBtFFZ1ub_P2HAGMbxu04t7GJzzAsvkYTR0yVYRW5XkdniOu56iwW7-pSxEckInDVwFg/exec";

  const [formData, setFormData] = useState({
    Name: '',
    Phone: '',
    Email: '',
    Interest: 'Arihant 2 (3BHK Luxury)',
    Budget: '₹50L - ₹60L',
    Purpose: 'Self-Use',
    Location: '',
    Message: ''
  });

  const [status, setStatus] = useState('idle');

  const handleDataSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setTimeout(() => setStatus('success'), 1500);
    } catch (error) {
      setStatus('idle');
      alert("System Busy. Please retry.");
    }
  };

  return (
    <section className="min-h-screen bg-[#010205] py-12 md:py-24 px-4 lg:px-12 flex items-center justify-center relative overflow-hidden" id="Contact">
      
      {/* Cinematic Lighting */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>

      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="bg-white/[0.03] backdrop-blur-3xl p-10 md:p-20 rounded-[4rem] border border-white/10 text-center max-w-2xl mx-auto shadow-2xl"
            >
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-orange-600/50 shadow-2xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-5xl font-black text-white uppercase tracking-tighter italic">AUTHENTICATED.</h2>
              <p className="text-zinc-400 mt-6 text-xl">Expect a private viewing invitation shortly.</p>
              <button onClick={() => setStatus('idle')} className="mt-10 text-orange-500 font-black uppercase text-[10px] tracking-[0.6em]">New Submission</button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* META AD COPY SECTION */}
              <div className="lg:col-span-5 text-center lg:text-left">
                <div className="inline-block bg-orange-600/10 px-5 py-2 rounded-full border border-orange-600/20 mb-8">
                   <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.5em]">Exclusive Meta Pre-Launch</span>
                </div>
                <h1 className="text-6xl md:text-8xl xl:text-[9rem] font-black text-white uppercase leading-[0.8] tracking-tighter">
                  RESERVE <br /> YOUR <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-white italic">LEGACY.</span>
                </h1>
                <p className="text-zinc-500 text-xl md:text-2xl mt-8 font-medium italic border-l-2 border-orange-600/30 pl-6 max-w-md mx-auto lg:mx-0">
                  Secure Jodhpur's most anticipated address. Access private floor plans and off-market pricing.
                </p>
              </div>

              {/* REFINED LONG-FORM SYSTEM */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-7 bg-white/[0.02] backdrop-blur-3xl p-6 sm:p-12 rounded-[3rem] border border-white/10 shadow-2xl"
              >
                <form onSubmit={handleDataSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  
                  {/* Row 1 */}
                  <div className="relative group md:col-span-2">
                    <input type="text" required onChange={(e) => setFormData({...formData, Name: e.target.value})}
                      className="peer w-full bg-transparent border-b border-white/10 py-4 text-white font-bold text-2xl outline-none focus:border-orange-600 transition-all placeholder-transparent"
                    />
                    <label className="absolute left-0 top-0 text-[10px] font-black text-zinc-600 uppercase tracking-widest transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:top-[-15px] peer-focus:text-orange-500">Full Name *</label>
                  </div>

                  {/* Row 2 */}
                  <div className="relative group">
                    <input type="tel" required onChange={(e) => setFormData({...formData, Phone: e.target.value})}
                      className="peer w-full bg-transparent border-b border-white/10 py-4 text-white font-bold text-xl outline-none focus:border-orange-600 transition-all placeholder-transparent"
                    />
                    <label className="absolute left-0 top-0 text-[10px] font-black text-zinc-600 uppercase tracking-widest transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:top-[-15px] peer-focus:text-orange-500">WhatsApp *</label>
                  </div>

                  <div className="relative group">
                    <input type="text" required onChange={(e) => setFormData({...formData, Location: e.target.value})}
                      className="peer w-full bg-transparent border-b border-white/10 py-4 text-white font-bold text-xl outline-none focus:border-orange-600 transition-all placeholder-transparent"
                    />
                    <label className="absolute left-0 top-0 text-[10px] font-black text-zinc-600 uppercase tracking-widest transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:top-[-15px] peer-focus:text-orange-500">City / Residence *</label>
                  </div>

                  {/* Row 3 - Dropdowns */}
                  <div className="relative">
                    <select onChange={(e) => setFormData({...formData, Interest: e.target.value})}
                      className="w-full bg-[#020408] border border-white/10 p-4 rounded-xl text-white font-bold outline-none focus:border-orange-600 appearance-none"
                    >
                      <option>Arihant 2 (3BHK Luxury)</option>
                      <option>Arihant 2 (4BHK Elite)</option>
                      <option>Sky Penthouse</option>
                    </select>
                    <label className="absolute top-[-22px] left-0 text-[9px] font-black text-orange-500 uppercase">Requirement</label>
                  </div>

                  <div className="relative">
                    <select onChange={(e) => setFormData({...formData, Budget: e.target.value})}
                      className="w-full bg-[#020408] border border-white/10 p-4 rounded-xl text-white font-bold outline-none focus:border-orange-600 appearance-none"
                    >
                      <option>₹40L - ₹50L</option>
                      <option>₹50L - ₹60L</option>
                      <option>₹60L - ₹1.2Cr</option>
                      <option>Premium Bespoke</option>
                    </select>
                    <label className="absolute top-[-22px] left-0 text-[9px] font-black text-orange-500 uppercase">Investment Bracket</label>
                  </div>

                  {/* REFINED BUTTON - NO WRAPPING */}
                  <div className="md:col-span-2 pt-6">
                    <motion.button 
                      whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                      type="submit" disabled={status === 'loading'}
                      className="group w-full h-[80px] md:h-[95px] bg-[#ea580c] hover:bg-white text-white hover:text-black rounded-full font-black uppercase text-xs md:text-sm tracking-[0.4em] transition-all duration-300 shadow-2xl overflow-hidden relative"
                    >
                      {status === 'loading' ? (
                        <span className="flex items-center justify-center gap-4">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Verifying Profile...
                        </span>
                      ) : (
                        "Verify & Submit Your Profile"
                      )}
                    </motion.button>
                  </div>

                  <p className="md:col-span-2 text-center text-[8px] text-zinc-600 font-black uppercase tracking-[0.4em]">Official Developer Whitelist • Jodhpur Launch 2026</p>

                </form>
              </motion.div>

            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;