import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaWhatsapp, FaRobot, FaTimes, FaPaperPlane, 
  FaGem, FaMapMarkerAlt, FaHome, FaShieldAlt, 
  FaUserTie, FaBuilding, FaWallet, FaCheckCircle 
} from 'react-icons/fa';

/**
 * ARIHANT ANCHAL - ELITE CONCIERGE SYSTEM (VERSION 5.0)
 * Top-Class Design | Human-Like Logic | Fully Responsive
 */
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'bot', 
      text: 'Ram Ram! 🙏 Welcome to Arihant Anchal, Jodhpur. I am your Executive Assistant. How can I help you find your 1BHK or 2BHK signature home today?' 
    }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  // --- ELITE CONFIGURATION ---
  const CONFIG = {
    PHONE: "919001233545",
    PRICE: "₹45 Lakhs*",
    LOCATION: "Dali Bai Circle, Jaisalmer Bypass Road, Jodhpur",
    WHATSAPP_LINK: `https://wa.me/919001233545?text=${encodeURIComponent("Hi! I'm interested in Arihant Anchal. Please send me the brochure and price list for units starting at 45L.")}`
  };

  // --- ADVANCED AI LOGIC (HUMAN-LIKE ERROR HANDLING) ---
  const processAIResponse = (userInput) => {
    const t = userInput.toLowerCase().trim();

    // 1. FUZZY PRICE LOGIC (Handles: price, prce, rate, cost, kitna, budget)
    if (t.includes("price") || t.includes("prce") || t.includes("rate") || t.includes("cost") || t.includes("kitna") || t.includes("budget") || t.includes("lakh") || t.includes("lac")) {
      return `Our premium residences at Arihant Anchal start from ${CONFIG.PRICE}. This is an exclusive price for Jodhpur's most connected location. Would you like a detailed payment plan or current availability?`;
    }

    // 2. FUZZY LOCATION LOGIC (Handles: where, address, map, locatn, kahan)
    if (t.includes("where") || t.includes("location") || t.includes("address") || t.includes("map") || t.includes("kahan") || t.includes("locatn") || t.includes("rasta")) {
      return `📍 Arihant Anchal is perfectly situated at Dali Bai Circle on the Jaisalmer Bypass Road. \n\n• AIIMS: 12 Mins \n• Railway Station: 18 Mins \n• DPS School: 5 Mins \n• High Court: 15 Mins. It is the fastest-growing area of Jodhpur!`;
    }

    // 3. CONFIGURATION (Handles: bhk, flat, size, room, sqft)
    if (t.includes("bhk") || t.includes("flat") || t.includes("size") || t.includes("room") || t.includes("sqft") || t.includes("square")) {
      return "We offer ultra-luxury 1BHK and 2BHK units. Every flat is Vastu compliant with premium ventilation and high-end floorings. Which configuration suits your family better?";
    }

    // 4. POSSESSION & TIME (Handles: ready, move, time, kab, construction)
    if (t.includes("ready") || t.includes("move") || t.includes("possession") || t.includes("kab") || t.includes("time") || t.includes("construction")) {
      return "We have 'Ready to Move' units available! Many happy families have already shifted. You can visit today and select your actual flat. 🏠";
    }

    // 5. AMENITIES (Handles: gym, park, security, water, facility)
    if (t.includes("gym") || t.includes("park") || t.includes("facility") || t.includes("amenity") || t.includes("security") || t.includes("water")) {
      return "Arihant Anchal features 5-star facilities: \n✅ Fully Equipped Gym \n✅ Community Temple \n✅ Modern Library \n✅ Kids Play Area \n✅ 24/7 CCTV & Gated Security \n✅ Dedicated Stilt Parking";
    }

    // 6. LOAN & LEGAL (Handles: bank, loan, emi, rera, jda, legal)
    if (t.includes("bank") || t.includes("loan") || t.includes("emi") || t.includes("rera") || t.includes("jda") || t.includes("legal") || t.includes("paper")) {
      return "Yes, we are 100% RERA Registered and JDA Approved. 🛡️ You can get home loans from all leading banks like SBI, HDFC, and ICICI at attractive rates.";

    }

    // 7. CULTURAL GREETINGS (Handles: ram ram, hi, hello, khamma ghani)
    if (t.includes("ram ram") || t.includes("khamma ghani")) return "Ram Ram! Sa. 🙏 It is an honor to serve you. How can I help you join our premium community?";
    if (t.includes("hi") || t.includes("hello") || t.includes("hey")) return "Hello! 👋 Welcome to Arihant Anchal. Looking for a premium investment or a new home?";

    // 8. SITE VISIT (Handles: visit, see, meet, appointment)
    if (t.includes("visit") || t.includes("see") || t.includes("appointment") || t.includes("dekho")) {
      return "We'd love to host you! 🚗 Our site is open from 10 AM to 7 PM daily. Please click the WhatsApp button below to share your number, and we will book your VIP tour.";
    }

    // 9. WHY ARIHANT (Handles: why, best, better)
    if (t.includes("why") || t.includes("best") || t.includes("better")) {
      return "Arihant is synonymous with trust in Jodhpur. We offer the best price-to-quality ratio, high construction standards, and the most strategic location for appreciation. 📈";
    }

    // FALLBACK
    return "I'm sorry, I didn't quite catch that. Would you like to know about the Price (₹45L+), Location (Dali Bai Circle), or schedule a Site Visit? Or you can directly chat with our Sales Head on WhatsApp (+91 9001233545).";
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'bot', text: processAIResponse(input) }]);
    }, 800);
  };

  useEffect(() => { scrollRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[2000] flex flex-col items-end gap-3 md:gap-4 font-sans">
      
      {/* --- ELITE CHAT WINDOW --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 40, scale: 0.9, filter: 'blur(10px)' }}
            className="w-[90vw] sm:w-[400px] md:w-[450px] h-[75vh] md:h-[650px] bg-white rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.25)] border border-slate-100 flex flex-col mb-2 overflow-hidden"
          >
            {/* Premium Header */}
            <div className="bg-[#0f172a] p-6 md:p-8 text-white relative">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-600 rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
                      <FaGem size={26} className="text-white" />
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-4 border-[#0f172a] rounded-full animate-pulse"></span>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-1">Executive Concierge</h3>
                    <p className="text-xl font-bold tracking-tight">Arihant Anchal</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="bg-white/10 p-3 rounded-2xl hover:bg-white/20 transition-all"><FaTimes size={18} /></button>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 bg-[#fcfdfe] no-scrollbar">
              {messages.map((msg, i) => (
                <motion.div initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }} animate={{ opacity: 1, x: 0 }} key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-5 rounded-[2rem] text-[15px] font-medium leading-relaxed shadow-sm ${
                    msg.role === 'user' ? 'bg-orange-600 text-white rounded-tr-none' : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 px-6 py-4 rounded-full flex gap-1 items-center">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>

            {/* Smart Action Chips */}
            <div className="px-6 py-4 flex gap-3 overflow-x-auto no-scrollbar bg-white border-t border-slate-50">
               {['Starting Price?', 'Location?', 'Ready units?', 'Book Visit'].map(q => (
                 <button key={q} onClick={() => setInput(q)} className="whitespace-nowrap bg-white border border-slate-200 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-orange-600 hover:border-orange-500 transition-all shadow-sm">
                   {q}
                 </button>
               ))}
            </div>

            {/* Elite Input Box */}
            <form onSubmit={handleSend} className="p-6 md:p-8 bg-white flex gap-4 items-center border-t border-slate-100">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about 45L flats, Location..."
                className="flex-1 bg-slate-50 border-none rounded-2xl px-6 py-5 text-sm font-bold text-slate-800 focus:ring-1 focus:ring-orange-600 outline-none"
              />
              <button type="submit" className="bg-orange-600 text-white p-5 rounded-2xl shadow-xl shadow-orange-600/20 hover:scale-105 active:scale-95 transition-all">
                <FaPaperPlane size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- TOP-CLASS FLOATING TRIGGERS --- */}
      <div className="flex flex-col gap-4">
        
        {/* Responsive WhatsApp FAB */}
        <motion.a 
          whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}
          href={CONFIG.WHATSAPP_LINK} target="_blank" rel="noreferrer"
          className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-2xl md:rounded-[1.8rem] shadow-[0_15px_40px_rgba(37,211,102,0.4)] flex items-center justify-center relative group"
        >
          <FaWhatsapp className="text-[28px] md:text-[34px]" />
          <span className="absolute right-[120%] bg-zinc-900 text-white text-[10px] font-black uppercase tracking-widest px-5 py-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-2xl">
            Direct Sales Head
          </span>
        </motion.a>

        {/* Responsive AI Toggle FAB */}
        <motion.button 
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 md:w-16 md:h-16 bg-[#0f172a] text-white rounded-2xl md:rounded-[1.8rem] shadow-[0_15px_40px_rgba(0,0,0,0.3)] flex items-center justify-center relative border border-white/10"
        >
          {isOpen ? <FaTimes size={24} /> : <FaRobot size={28} />}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-6 w-6 md:h-7 md:w-7">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-6 w-6 md:h-7 md:w-7 bg-orange-600 text-[10px] md:text-[11px] font-black items-center justify-center border-2 border-[#0f172a]">1</span>
            </span>
          )}
        </motion.button>

      </div>

      {/* Global Responsive Fix for Mobile No-Scroll */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        ${isOpen ? 'body { overflow: hidden !important; } @media (min-width: 768px) { body { overflow: auto !important; } }' : ''}
      `}</style>

    </div>
  );
};

export default Chatbot;