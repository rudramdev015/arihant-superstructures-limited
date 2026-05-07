import React, { useState, useEffect, useRef } from 'react';

const PERKS = [
  { icon: '🚗', title: 'Free Pickup & Drop', desc: 'We come to your door — AC car, no charge.' },
  { icon: '🎁', title: 'Exclusive Gift', desc: 'Every visitor receives a premium welcome gift.' },
  { icon: '📐', title: 'Full Brochure Kit', desc: 'Floor plans, pricing & payment options — yours to keep.' },
  { icon: '☕', title: 'VIP Lounge Tour', desc: 'Private guided walkthrough with chai & refreshments.' },
  { icon: '🏡', title: 'Live Model Flat', desc: 'See the actual furnished flat before you decide.' },
  { icon: '💰', title: 'Best Price Lock', desc: 'On-site visits qualify for launch-day pricing benefits.' },
];


const useCountUp = (target, duration = 1800, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

const CounterItem = ({ value, suffix, label, animate }) => {
  const count = useCountUp(value, 1600, animate);
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none tabular-nums">
        {animate ? count : 0}{suffix}
      </span>
      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.35em] text-white/40 mt-2">{label}</span>
    </div>
  );
};

const SiteVisit = () => {
  const [visible, setVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    const msg = `🏠 *Site Visit Request*%0AName: ${name}%0APhone: ${phone}${date ? `%0ADate: ${date}` : ''}%0AProject: Arihant Anchal, Jodhpur`;
    window.open(`https://wa.me/919001233545?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#030305] overflow-hidden py-20 sm:py-28 md:py-36"
      id="SiteVisit"
    >
      {/* ── Ambient glow blobs ── */}
      <div className="absolute top-[-15%] left-[-10%] w-[55%] h-[55%] bg-orange-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-orange-500/6 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-amber-500/4 rounded-full blur-[120px] pointer-events-none" />

      {/* ── Subtle grid ── */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20">

        {/* ── SECTION BADGE ── */}
        <div
          className="flex justify-center mb-10 sm:mb-14 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <span className="inline-flex items-center gap-2.5 bg-orange-600/15 border border-orange-500/30 text-orange-400 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.45em] px-5 py-2.5 rounded-full backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            Exclusive Offer · Limited Slots
          </span>
        </div>

        {/* ── HEADLINE ── */}
        <div
          className="text-center mb-14 sm:mb-20 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transitionDelay: '0.08s' }}
        >
          <h2 className="text-[13vw] sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-black text-white uppercase leading-[0.85] tracking-tighter mb-6">
            FREE SITE
            <br />
            <span
              className="italic font-light"
              style={{ WebkitTextStroke: '1.5px rgba(255,165,0,0.5)', color: 'transparent' }}
            >
              VISIT
            </span>
            {' '}
            <span className="text-orange-500">TODAY</span>
          </h2>
          <p className="text-white/45 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Experience Arihant Anchal in person — zero pressure, full luxury. We handle everything so you can focus on finding your dream home.
          </p>
        </div>

        {/* ── PERKS GRID ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-16 sm:mb-20 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(25px)', transitionDelay: '0.18s' }}
        >
          {PERKS.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="group relative bg-white/[0.03] border border-white/8 rounded-[1.8rem] p-6 sm:p-8 hover:bg-white/[0.06] hover:border-orange-500/30 transition-all duration-500 overflow-hidden cursor-default"
              style={{ transitionDelay: `${0.06 * i}s` }}
            >
              {/* hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-orange-600/0 group-hover:from-orange-600/8 group-hover:to-transparent transition-all duration-700 rounded-[1.8rem]" />
              <div className="relative z-10">
                <span className="text-3xl sm:text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300 origin-left">{icon}</span>
                <h3 className="text-white font-black text-base sm:text-lg mb-2 tracking-tight">{title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-medium">{desc}</p>
              </div>
              {/* corner accent */}
              <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-orange-500/0 group-hover:bg-orange-500 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* ── COUNTERS STRIP ── */}
        <div
          className="flex justify-center mb-16 sm:mb-20 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transitionDelay: '0.3s' }}
        >
          <div className="bg-white/5 border border-orange-500/30 rounded-3xl px-16 sm:px-24 py-10 backdrop-blur-md text-center">
            <CounterItem value={500} suffix="+" label="Families Already Living" animate={visible} />
          </div>
        </div>

        {/* ── BOOKING PANEL ── */}
        <div
          className="max-w-4xl mx-auto transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transitionDelay: '0.38s' }}
        >
          <div className="relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/12 rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-2xl backdrop-blur-xl p-8 sm:p-12 md:p-16">
            {/* panel inner glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-5">🎉</div>
                  <h3 className="text-white font-black text-2xl sm:text-3xl mb-3">Visit Confirmed!</h3>
                  <p className="text-white/50 text-base mb-8">Our team will WhatsApp you within 30 minutes to confirm your slot and arrange pickup.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://wa.me/919001233545"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] hover:bg-[#1ebe5a] text-white rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all active:scale-95"
                    >
                      <span>💬</span> Chat on WhatsApp
                    </a>
                    <a
                      href="tel:+919001233545"
                      className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/15 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all active:scale-95"
                    >
                      <span>📞</span> Call Now
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                    <div>
                      <p className="text-orange-500 font-black text-[10px] uppercase tracking-[0.45em] mb-2">Book Your Slot</p>
                      <h3 className="text-white font-black text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
                        Schedule a{' '}
                        <span className="text-orange-400 italic">Free Visit</span>
                      </h3>
                    </div>
                    <div className="bg-orange-600/15 border border-orange-500/25 px-5 py-3 rounded-2xl text-center flex-shrink-0">
                      <p className="text-orange-400 font-black text-lg leading-none">100%</p>
                      <p className="text-orange-400/60 text-[9px] font-black uppercase tracking-wider mt-0.5">Free · No Obligation</p>
                    </div>
                  </div>

                  {/* Toggle: form vs direct contact */}
                  <div className="flex p-1 bg-white/5 border border-white/8 rounded-2xl mb-8 w-full sm:w-max">
                    <button
                      onClick={() => setFormVisible(false)}
                      className={`px-5 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${!formVisible ? 'bg-orange-600 text-white' : 'text-white/30 hover:text-white/60'}`}
                    >
                      Quick Contact
                    </button>
                    <button
                      onClick={() => setFormVisible(true)}
                      className={`px-5 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${formVisible ? 'bg-orange-600 text-white' : 'text-white/30 hover:text-white/60'}`}
                    >
                      Schedule Date
                    </button>
                  </div>

                  {formVisible ? (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                          <label className="text-white/40 text-[9px] font-black uppercase tracking-[0.35em]">Your Name</label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Rahul Sharma"
                            className="bg-white/5 border border-white/12 hover:border-white/20 focus:border-orange-500 text-white placeholder-white/20 rounded-2xl px-5 py-4 text-sm font-medium outline-none transition-all"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-white/40 text-[9px] font-black uppercase tracking-[0.35em]">Phone Number</label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            placeholder="+91 98765 43210"
                            className="bg-white/5 border border-white/12 hover:border-white/20 focus:border-orange-500 text-white placeholder-white/20 rounded-2xl px-5 py-4 text-sm font-medium outline-none transition-all"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-white/40 text-[9px] font-black uppercase tracking-[0.35em]">Preferred Date (Optional)</label>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="bg-white/5 border border-white/12 hover:border-white/20 focus:border-orange-500 text-white rounded-2xl px-5 py-4 text-sm font-medium outline-none transition-all"
                          style={{ colorScheme: 'dark' }}
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-5 sm:py-6 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl font-black text-[11px] sm:text-xs uppercase tracking-[0.4em] transition-all shadow-2xl shadow-orange-600/30 active:scale-[0.98] flex items-center justify-center gap-3"
                      >
                        <span>💬</span> Book via WhatsApp — It's Free
                      </button>
                    </form>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="https://wa.me/919001233545?text=Hi,%20I%20want%20to%20book%20a%20free%20site%20visit%20for%20Arihant%20Anchal%20Jodhpur"
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-3 py-5 sm:py-6 bg-[#25D366] hover:bg-[#1ebe5a] text-white rounded-2xl font-black text-[11px] sm:text-xs uppercase tracking-[0.35em] transition-all shadow-2xl shadow-green-600/30 active:scale-[0.98]"
                      >
                        <span className="text-lg">💬</span> WhatsApp Now
                      </a>
                      <a
                        href="tel:+919001233545"
                        className="flex-1 flex items-center justify-center gap-3 py-5 sm:py-6 bg-white/8 hover:bg-white/14 border border-white/12 text-white rounded-2xl font-black text-[11px] sm:text-xs uppercase tracking-[0.35em] transition-all active:scale-[0.98]"
                      >
                        <span className="text-lg">📞</span> Call: +91 90012 33545
                      </a>
                    </div>
                  )}

                  <p className="text-white/20 text-[9px] font-medium text-center mt-6 uppercase tracking-widest">
                    No spam · No pressure · 100% confidential
                  </p>
                </>
              )}
            </div>
          </div>

          {/* ── Trust strip below panel ── */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-10">
            {['JDA Approved', 'RERA: RAJ/P/2017/322', 'ISO Certified', '30+ Yrs Trust'].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="text-orange-500 text-xs">✓</span>
                <span className="text-white/30 font-black text-[9px] uppercase tracking-[0.3em]">{t}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SiteVisit;
