import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzdTrSJFFd1GwNVlJZRyQ9xbc3LYv8D8yDI0Pwe9JAjNdrsKipdBx1SD4__PuVQD4t7/exec";

const INTEREST_OPTIONS = [
  'Arihant Anchal (2 BHK Premium)',
  'Arihant Anchal (4 BHK Luxury)',
  'Sky Penthouse',
];

const BUDGET_OPTIONS = [
  '₹40L – ₹55L',
  '₹55L – ₹75L',
  '₹75L – ₹1.2Cr',
  'Premium Bespoke',
];

const TRUST_STATS = [
  { value: '30+', label: 'Years of Trust' },
  { value: '600+', label: 'Happy Families' },
  { value: 'JDA', label: 'Approved' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

const InputField = ({ label, type = 'text', value, onChange, required, placeholder }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] font-black uppercase tracking-[0.35em] text-orange-500 flex items-center gap-1.5">
      {label}
      {required && <span className="text-orange-400">*</span>}
    </label>
    <input
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder || `Enter ${label.toLowerCase()}`}
      className="
        bg-white/[0.04] border border-white/[0.09] rounded-2xl px-5 py-4
        text-white text-[15px] font-medium outline-none
        focus:border-orange-500/70 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(234,88,12,0.12)]
        transition-all duration-300 placeholder-white/20 w-full
      "
    />
  </div>
);

const SelectField = ({ label, value, onChange, options }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] font-black uppercase tracking-[0.35em] text-orange-500">{label}</label>
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="
          w-full appearance-none bg-white/[0.04] border border-white/[0.09] rounded-2xl px-5 py-4
          text-white text-[15px] font-medium outline-none
          focus:border-orange-500/70 focus:shadow-[0_0_0_3px_rgba(234,88,12,0.12)]
          transition-all duration-300 cursor-pointer
        "
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-[#0c1221] text-white">{opt}</option>
        ))}
      </select>
      <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Phone: '',
    Email: '',
    Interest: INTEREST_OPTIONS[0],
    Budget: BUDGET_OPTIONS[0],
    Location: '',
  });
  const [status, setStatus] = useState('idle');

  const set = (key) => (e) => setFormData((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const params = new URLSearchParams({
        ...formData,
        Timestamp: new Date().toLocaleString('en-IN'),
      });
      await fetch(`${SCRIPT_URL}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors',
      });
      setTimeout(() => setStatus('success'), 1200);
    } catch {
      setStatus('idle');
      alert('Something went wrong. Please call us directly at +91 90012 33545');
    }
  };

  return (
    <section
      id="Contact"
      className="min-h-screen bg-[#010205] py-20 md:py-32 px-4 sm:px-6 lg:px-12 flex items-center justify-center relative overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-[-20%] right-[-8%] w-[600px] h-[600px] bg-orange-600/[0.07] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-8%] w-[500px] h-[500px] bg-blue-900/[0.09] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-900/[0.03] blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-[1340px] w-full mx-auto relative z-10">
        <AnimatePresence mode="wait">

          {/* ── SUCCESS STATE ── */}
          {status === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-lg mx-auto text-center bg-white/[0.03] backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-12 md:p-20 shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 16 }}
                className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-orange-600/40"
              >
                <svg className="w-11 h-11 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                Request<br />Received!
              </h2>
              <p className="text-zinc-400 mt-5 text-lg leading-relaxed">
                Our team will call you within{' '}
                <span className="text-orange-400 font-bold">30 minutes</span>.<br />
                A private viewing invite is on its way.
              </p>

              <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/919001233545"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 bg-[#25D366] hover:bg-[#1fba57] text-white rounded-2xl font-black text-[11px] uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.6-2.8-23.6-8.7-45-27.7-16.6-14.8-27.8-33.1-31.1-38.6-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-8 py-4 bg-white/[0.06] hover:bg-white/[0.12] text-white rounded-2xl font-black text-[11px] uppercase tracking-widest transition-colors border border-white/10"
                >
                  New Inquiry
                </button>
              </div>
            </motion.div>
          )}

          {/* ── FORM STATE ── */}
          {status !== 'success' && (
            <motion.div
              key="form"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{ show: { transition: { staggerChildren: 0.07 } } }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-24 items-center"
            >
              {/* ── LEFT COPY ── */}
              <div className="lg:col-span-5 text-center lg:text-left">
                <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2.5 bg-orange-600/[0.1] px-5 py-2.5 rounded-full border border-orange-500/20 mb-7">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-orange-400 font-black text-[10px] uppercase tracking-[0.45em]">Pre-Launch Open Now</span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  custom={1}
                  className="text-5xl sm:text-7xl xl:text-[5.8rem] font-black text-white uppercase leading-[0.83] tracking-tighter"
                >
                  RESERVE<br />YOUR<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 italic">LEGACY.</span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="text-zinc-500 text-[17px] mt-9 leading-relaxed border-l-2 border-orange-600/30 pl-6 max-w-md mx-auto lg:mx-0"
                >
                  Secure Jodhpur's most anticipated address. Get private floor plans and exclusive off-market pricing before public launch.
                </motion.p>

                {/* Trust stats */}
                <motion.div variants={fadeUp} custom={3} className="mt-10 grid grid-cols-3 gap-3 max-w-xs mx-auto lg:mx-0">
                  {TRUST_STATS.map(({ value, label }) => (
                    <div key={label} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-4 text-center hover:border-orange-500/20 transition-colors">
                      <p className="text-2xl font-black text-white">{value}</p>
                      <p className="text-[9px] text-zinc-500 uppercase font-bold tracking-wider mt-1">{label}</p>
                    </div>
                  ))}
                </motion.div>

                {/* Direct CTA links */}
                <motion.div variants={fadeUp} custom={4} className="mt-8 flex flex-col sm:flex-row lg:flex-col gap-3 max-w-xs mx-auto lg:mx-0">
                  <a
                    href="tel:+919001233545"
                    className="flex items-center justify-center gap-2.5 py-4 px-5 bg-white/[0.05] border border-white/10 rounded-2xl text-white font-bold text-sm hover:bg-white/[0.1] hover:border-white/20 transition-all"
                  >
                    <svg className="w-4 h-4 text-orange-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 90012 33545
                  </a>
                  <a
                    href="https://wa.me/919001233545"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2.5 py-4 px-5 bg-[#25D366]/[0.1] border border-[#25D366]/20 rounded-2xl text-[#25D366] font-bold text-sm hover:bg-[#25D366]/[0.18] transition-all"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 448 512">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.6-2.8-23.6-8.7-45-27.7-16.6-14.8-27.8-33.1-31.1-38.6-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                    WhatsApp Us
                  </a>
                </motion.div>
              </div>

              {/* ── RIGHT FORM ── */}
              <motion.div variants={fadeUp} custom={2} className="lg:col-span-7">
                <div className="relative bg-white/[0.025] backdrop-blur-3xl rounded-[2.5rem] border border-white/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.5)] p-7 sm:p-11 overflow-hidden">

                  {/* Subtle top glow line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-orange-700 rounded-full" />
                    <h3 className="text-white font-black text-sm uppercase tracking-[0.25em]">Book Your Private Viewing</h3>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <motion.div
                      className="flex flex-col gap-5"
                      variants={{ show: { transition: { staggerChildren: 0.06 } } }}
                      initial="hidden"
                      animate="show"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <InputField label="Full Name" value={formData.Name} onChange={set('Name')} required placeholder="Your full name" />
                        <InputField label="WhatsApp Number" type="tel" value={formData.Phone} onChange={set('Phone')} required placeholder="+91 00000 00000" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <InputField label="Email Address" type="email" value={formData.Email} onChange={set('Email')} placeholder="your@email.com" />
                        <InputField label="Your City" value={formData.Location} onChange={set('Location')} required placeholder="Current city" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <SelectField label="Unit Preference" value={formData.Interest} onChange={set('Interest')} options={INTEREST_OPTIONS} />
                        <SelectField label="Budget Range" value={formData.Budget} onChange={set('Budget')} options={BUDGET_OPTIONS} />
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-white/[0.06] my-1" />

                      {/* Submit */}
                      <motion.button
                        variants={fadeUp}
                        type="submit"
                        disabled={status === 'loading'}
                        whileTap={{ scale: 0.985 }}
                        className="
                          relative w-full h-16 md:h-[74px] overflow-hidden
                          bg-gradient-to-r from-orange-600 to-orange-500
                          hover:from-orange-500 hover:to-orange-400
                          disabled:from-orange-700/50 disabled:to-orange-600/50
                          text-white rounded-2xl font-black uppercase text-[13px] tracking-[0.3em]
                          transition-all duration-300
                          shadow-[0_8px_32px_rgba(234,88,12,0.35)]
                          hover:shadow-[0_12px_40px_rgba(234,88,12,0.45)]
                          flex items-center justify-center gap-3
                        "
                      >
                        {status === 'loading' ? (
                          <>
                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Submitting…
                          </>
                        ) : (
                          <>
                            Submit Your Interest
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </>
                        )}
                      </motion.button>

                      <p className="text-center text-[9px] text-zinc-700 font-bold uppercase tracking-[0.4em] leading-relaxed">
                        Official Developer Whitelist &nbsp;·&nbsp; Jodhpur Launch 2026 &nbsp;·&nbsp; RERA: RAJ/P/2017/322
                      </p>
                    </motion.div>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
