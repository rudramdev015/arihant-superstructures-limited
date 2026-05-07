import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Users, Crown, ShieldCheck, Layout, Phone, MapPin, Calculator, Home, Star } from "lucide-react";

const CONFIG = {
  PHONE: "+91 9001233545",
  WA_LINK: `https://wa.me/919001233545?text=Ram%20Ram!%20I%20am%20interested%20in%20Arihant%20Anchal.%20Please%20share%20details.`,
  CALL_LINK: "tel:+919001233545",
};

const QUICK_CHIPS = [
  { label: "💰 Price List", query: "price list" },
  { label: "🏠 2 BHK Plans", query: "2 bhk plans" },
  { label: "👑 4 BHK Luxury", query: "4 bhk luxury" },
  { label: "📍 Location", query: "location" },
  { label: "🏊 Amenities", query: "amenities" },
  { label: "📅 Book Visit", query: "book visit" },
  { label: "🧮 EMI Calc", query: "emi calculator" },
  { label: "🤝 Offer", query: "current offer" },
];

const KB = [
  {
    patterns: /(good morning|\bgm\b|subh prabhat|shubh prabhat)/i,
    reply: () =>
      `🌅 Good Morning! Ram Ram Ji! 🙏\n\nShubh Prabhat! Wishing you a wonderful day!\n\nI'm here to help you find your dream home at **Arihant Anchal**, Jodhpur.\n🏠 2 BHK ₹41L* | 👑 4 BHK ₹81L*\n\nHow can I assist you today?`,
  },
  {
    patterns: /(good night|\bgn\b|shubh ratri|good nite)/i,
    reply: () =>
      `🌙 Good Night! Shubh Ratri! Ram Ram Ji! 🙏\n\nMay your dreams lead you to your perfect home!\n\n✨ Arihant Anchal awaits you...\n📞 Call us anytime: +91 90012 33545\n\nSweet dreams! 🌟`,
  },
  {
    patterns: /(jai (shri )?krishna|jay krishna|radhe radhe|hare krishna|jai krishn)/i,
    reply: () =>
      `🙏 Jai Shri Krishna! Radhe Radhe!\n\nKrishna Ji ki kripa se aapka swagat hai **Arihant Anchal** mein!\n\n🏠 2 BHK — ₹41 Lakhs*\n👑 4 BHK — ₹81 Lakhs*\n\n📞 For details: +91 90012 33545`,
  },
  {
    patterns: /(om namah|om shanti|har har mahadev|jai mahadev|bhole|shiv ji)/i,
    reply: () =>
      `🕉️ Om Namah Shivay! Har Har Mahadev! 🙏\n\nBhagwan Shiv Ji ki kripa aap par sadaa bani rahe!\n\nArihant Anchal is **Vastu Compliant** — a truly auspicious home.\n\n📞 +91 90012 33545`,
  },
  {
    patterns: /^om$/i,
    reply: () =>
      `🕉️ Om! Namaste Ji! 🙏\n\nSweet greetings! Welcome to **Arihant Anchal** — Jodhpur's finest luxury homes.\n\n🏠 2 BHK ₹41L* | 👑 4 BHK ₹81L*\n\nHow may I help you today?`,
  },
  {
    patterns: /(hi|hello|hey|ram ram|namaste|hii|helo|namaskar|jai ram|ram|radha swami)/i,
    reply: () => {
      const h = new Date().getHours();
      const greet = h < 12 ? "Shubh Prabhat! 🌅" : h < 17 ? "Ram Ram Ji! ☀️" : "Shubh Sandhya! 🌆";
      return `Ram Ram! 🙏 ${greet}\n\nWelcome to **Arihant Anchal** – Jodhpur's most awaited luxury township.\n\n✨ Luxury 2 BHK & 4 BHK homes\n📍 Dali Bai Circle, Jodhpur\n\nHow can I assist you today?`;
    },
  },
  {
    patterns: /(price|cost|budget|rate|lakh|pricing|kitna|kitne)/i,
    reply: () =>
      `💰 **PRICING**\n\n🏠 2 BHK — ₹41 Lakhs*\n👑 4 BHK — ₹81 Lakhs*\n\n📞 For complete details:\n+91 90012 33545\n\nCall or WhatsApp — our team will help! 🙏`,
  },
  {
    patterns: /(2 ?bhk|two bhk|2bhk)/i,
    reply: () =>
      `🏠 **2 BHK** — Starting ₹41 Lakhs* 🎉\n\nFor more details, please call or WhatsApp:\n📞 **+91 90012 33545**\n\nOur team will share full details immediately! 🙏`,
  },
  {
    patterns: /(4 ?bhk|four bhk|4bhk|penthouse|luxury)/i,
    reply: () =>
      `👑 **4 BHK** — Starting ₹81 Lakhs* 🎉\n\nFor more details, please call or WhatsApp:\n📞 **+91 90012 33545**\n\nOnly **LIMITED UNITS** remaining! 🙏`,
  },
  {
    patterns: /(visit|appointment|book|schedule|dekna|dekhna)/i,
    reply: () =>
      `📅 **BOOK A FREE SITE VISIT**\n\n🚗 FREE Car Pickup from your location\n🎁 Special gift on visit\n⏰ Timings: 10 AM – 6 PM\n\n📞 Call or WhatsApp: +91 90012 33545\n\nWould you prefer Today or Tomorrow? 🙏`,
  },
  {
    patterns: /(location|map|address|where|kahan|dali|jaisalmer bypass)/i,
    reply: () =>
      `📍 **ARIHANT ANCHAL**\n\nNear Dali Bai Circle,\nJaisalmer Bypass Road,\nJodhpur, Rajasthan 342014\n\n🚗 10 min from Airport\n🏥 5 min from AIIMS Jodhpur\n🛒 3 min from City Mall\n\n📞 +91 90012 33545`,
  },
  {
    patterns: /(ameniti|gym|pool|park|club|facility|facilities|swimming)/i,
    reply: () =>
      `🏊 **WORLD-CLASS AMENITIES**\n\n🏋️ Indoor Gym & Yoga Studio\n🏊 Rooftop Swimming Pool\n🎮 Kids Play Zone\n🌿 Landscaped Gardens\n🔒 24/7 CCTV Security\n🅿️ Dedicated Parking\n\n🏠 500+ Families Already Living Here!\n\n📞 +91 90012 33545`,
  },
  {
    patterns: /(emi|loan|finance|bank|installment|pay)/i,
    reply: () =>
      `🧮 **HOME LOAN ASSISTANCE**\n\n🏦 Tie-ups with SBI, HDFC, ICICI\n✅ Easy EMI options available\n✅ Home Loan assistance included\n\n📞 For EMI details & calculations:\n+91 90012 33545\n\nOur finance team will guide you! 🙏`,
  },
  {
    patterns: /(offer|discount|deal|scheme|launch price|early bird|prebook)/i,
    reply: () =>
      `🎁 **EXCLUSIVE LAUNCH OFFER**\n\n⭐ Pre-Launch Price — LIVE NOW\n🎀 FREE Modular Kitchen (limited)\n🚗 FREE Parking Space\n⏳ Offer Valid for **FEW UNITS ONLY**\n\n📞 Call NOW to lock your price:\n+91 90012 33545 🔒`,
  },
  {
    patterns: /(rera|approved|legal|jda|certificate)/i,
    reply: () =>
      `✅ **LEGAL & APPROVALS**\n\n🏛 RERA: RAJ/P/2017/322\n🏛 JDA Approved Layout\n📜 Clear Title & Documentation\n🔍 ISO Certified Quality\n\n📞 +91 90012 33545\n\nBuilding Trust Since 1994 🙏`,
  },
  {
    patterns: /(contact|call|phone|number|whatsapp)/i,
    reply: () =>
      `📞 **CONTACT US**\n\n📱 Call / WhatsApp: +91 90012 33545\n⏰ Hours: 10 AM – 7 PM (Mon–Sun)\n\nOur team will respond within **30 minutes**! 🙏`,
  },
];

const processQuery = (q) => {
  for (const entry of KB) {
    if (entry.patterns.test(q)) return entry.reply();
  }
  return `Ram Ram! 🙏\n\nFor any query, our team is always ready to help!\n\n📞 Call / WhatsApp: +91 90012 33545\n⏰ 10 AM – 7 PM (Mon–Sun)\n\nShall I book a FREE site visit for you? 🏠`;
};

const BotMessage = ({ text }) => (
  <div className="flex justify-start">
    <div className="max-w-[88%] px-4 py-3 rounded-2xl rounded-tl-none text-sm leading-relaxed bg-white text-slate-800 border border-slate-100 shadow-sm">
      {text.split("\n").map((line, i) => (
        <p key={i} className={`${i > 0 ? "mt-1" : ""} ${line.startsWith("**") && line.endsWith("**") ? "font-black text-slate-900 text-[13px]" : ""}`}>
          {line.replace(/\*\*(.*?)\*\*/g, "$1")}
        </p>
      ))}
    </div>
  </div>
);

const UserMessage = ({ text }) => (
  <div className="flex justify-end">
    <div className="max-w-[80%] px-4 py-3 rounded-2xl rounded-tr-none text-sm leading-relaxed bg-orange-600 text-white shadow-md">
      <p>{text}</p>
    </div>
  </div>
);

const TypingDots = () => (
  <div className="flex justify-start">
    <div className="flex gap-1.5 bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm">
      {[0, 150, 300].map((delay) => (
        <span
          key={delay}
          className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </div>
  </div>
);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [hasUnread, setHasUnread] = useState(true);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { role: "bot", text: processQuery(text) }]);
    }, 900 + Math.random() * 400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  useEffect(() => {
    const h = new Date().getHours();
    const greet = h < 12 ? "Shubh Prabhat 🌅" : h < 17 ? "Shubh Dopahar ☀️" : "Shubh Sandhya 🌆";
    setMessages([
      {
        role: "bot",
        text: `Ram Ram! 🙏 ${greet}\n\nWelcome to **Arihant Anchal** – Jodhpur's finest luxury residences.\n\n🏠 2 BHK ₹41L* | 👑 4 BHK ₹81L*\n📍 Dali Bai Circle, Jodhpur\n\nHow can I help you today?`,
      },
    ]);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-4 right-3 md:bottom-8 md:right-8 z-[9999] pointer-events-none font-sans">

      {/* ── CHAT WINDOW ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="pointer-events-auto flex flex-col bg-white border border-slate-200/80 shadow-[0_30px_80px_rgba(0,0,0,0.18)] rounded-3xl overflow-hidden mb-4
              w-[calc(100vw-24px)] sm:w-[390px] md:w-[420px]
              h-[min(640px,82dvh)]"
          >
            {/* ── HEADER ── */}
            <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] px-5 py-4 text-white shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-11 h-11 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                      <Crown size={20} className="text-white" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-[#0f172a]" />
                  </div>
                  <div>
                    <h3 className="font-black text-[15px] leading-tight">Arihant Anchal</h3>
                    <p className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase">Sales Concierge • Online</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={CONFIG.CALL_LINK}
                    className="w-9 h-9 bg-white/10 hover:bg-green-500/20 rounded-xl flex items-center justify-center transition-colors"
                    title="Call Us"
                  >
                    <Phone size={16} className="text-white" />
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
                  >
                    <X size={17} />
                  </button>
                </div>
              </div>

              {/* Stats Strip */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { icon: <Users size={12} />, label: "500+ Families Living" },
                  { icon: <ShieldCheck size={12} />, label: "JDA Approved" },
                  { icon: <Layout size={12} />, label: "2 & 4 BHK" },
                ].map(({ icon, label }) => (
                  <div key={label} className="bg-white/8 border border-white/10 rounded-xl py-1.5 px-2 flex items-center gap-1.5">
                    <span className="text-orange-400">{icon}</span>
                    <span className="text-[9px] font-black uppercase tracking-wide text-slate-300">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── MESSAGES ── */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50/60 no-scrollbar">
              {messages.map((msg, i) =>
                msg.role === "bot" ? <BotMessage key={i} text={msg.text} /> : <UserMessage key={i} text={msg.text} />
              )}
              {isTyping && <TypingDots />}
              <div ref={scrollRef} />
            </div>

            {/* ── QUICK CHIPS ── */}
            <div className="px-4 pt-3 pb-2 flex gap-2 overflow-x-auto no-scrollbar bg-white border-t border-slate-100 shrink-0">
              {QUICK_CHIPS.map(({ label, query }) => (
                <button
                  key={label}
                  onClick={() => sendMessage(query)}
                  className="whitespace-nowrap px-3 py-1.5 bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-700 rounded-full text-[10px] font-black uppercase tracking-wide transition-all border border-slate-200 hover:border-orange-600 shrink-0"
                >
                  {label}
                </button>
              ))}
            </div>

            {/* ── INPUT ── */}
            <form onSubmit={handleSubmit} className="px-4 pb-4 pt-2 bg-white shrink-0">
              <div className="flex items-center gap-2 bg-slate-100 rounded-2xl px-4 py-1 border border-slate-200 focus-within:border-orange-400 focus-within:bg-white transition-all">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about price, plans, location..."
                  className="flex-1 bg-transparent py-2.5 text-sm text-slate-800 focus:outline-none placeholder-slate-400"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-8 h-8 bg-orange-600 rounded-xl flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-opacity shrink-0"
                >
                  <Send size={14} className="text-white" />
                </button>
              </div>

              {/* CTA row */}
              <div className="flex gap-2 mt-2.5">
                <a
                  href={CONFIG.WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#25D366] hover:bg-[#1db954] text-white rounded-xl text-[10px] font-black uppercase tracking-wide transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.6-2.8-23.6-8.7-45-27.7-16.6-14.8-27.8-33.1-31.1-38.6-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  WhatsApp
                </a>
                <a
                  href={CONFIG.CALL_LINK}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-slate-900 hover:bg-orange-600 text-white rounded-xl text-[10px] font-black uppercase tracking-wide transition-colors"
                >
                  <Phone size={12} />
                  Call Now
                </a>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FLOATING BUTTONS ── */}
      <div className="flex flex-col gap-3 pointer-events-auto items-end">

        {/* WhatsApp */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          href={CONFIG.WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="w-13 h-13 md:w-14 md:h-14 bg-[#25D366] rounded-2xl shadow-xl shadow-green-500/30 flex items-center justify-center border-2 border-white"
          style={{ width: 52, height: 52 }}
        >
          <svg className="w-6 h-6 fill-white" viewBox="0 0 448 512">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.6-2.8-23.6-8.7-45-27.7-16.6-14.8-27.8-33.1-31.1-38.6-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        </motion.a>

        {/* Chat Toggle */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl shadow-2xl shadow-slate-900/40 flex items-center justify-center border-4 border-white bg-[#0f172a]"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={26} className="text-white" />
              </motion.span>
            ) : (
              <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <MessageSquare size={26} className="text-white" />
              </motion.span>
            )}
          </AnimatePresence>

          {/* Unread badge */}
          {hasUnread && !isOpen && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center border-2 border-white"
            >
              <span className="text-white text-[8px] font-black">1</span>
            </motion.span>
          )}

          {/* Pulse ring */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-2xl animate-ping bg-orange-500/20 pointer-events-none" />
          )}
        </motion.button>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Chatbot;
