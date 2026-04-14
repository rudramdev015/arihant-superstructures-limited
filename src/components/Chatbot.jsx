import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaRobot, FaTimes, FaPaperPlane, FaBuilding, FaMapMarkerAlt, FaRupeeSign } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Ram Ram! 🙏 Welcome to Arihant Anchal. How can I assist you with your dream home in Jodhpur today?' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  // ADVANCED AI BRAIN - TOP CLASS LOGIC
  const getBotResponse = (userText) => {
    const text = userText.toLowerCase().trim();
    
    // Cultural & Time Greetings
    if (text.includes("ram ram")) return "Ram Ram! Sa. 🙏 It's a pleasure to serve you. Looking for a premium property in the Sun City?";
    if (text.includes("jai shree krishna")) return "Jai Shree Krishna! 🙏 How can I help you find peace and luxury at Arihant Anchal?";
    if (text.includes("good morning")) return "Good Morning! ☀️ A beautiful day to start your home-buying journey.";
    if (text.includes("good night")) return "Good Night! 🌙 Dream of your new home. Our team will be ready to help you tomorrow morning.";
    if (text.includes("good evening")) return "Good Evening! ✨ Relax and browse our premium 1BHK & 2BHK layouts.";
    
    // Property Specifics
    if (text.includes("how many bhk") || text.includes("unit type") || text.includes("flats")) 
      return "We offer high-end 1BHK (380 sq.ft) and spacious 2BHK apartments across 7 floors (Stilt + 7). Which one would you like to see?";
    
    if (text.includes("price") || text.includes("budget") || text.includes("cost") || text.includes("lakh")) 
      return "Luxury living here is affordable! Prices start from ₹25 Lakhs onwards. We also have banking partners for easy home loans.";
    
    if (text.includes("location") || text.includes("where") || text.includes("address")) 
      return "Arihant Anchal is strategically located near Dali Bai Circle, Jaisalmer Bypass Road, Jodhpur. Perfectly connected to AIIMS and the Railway Station.";
    
    if (text.includes("amenities") || text.includes("gym") || text.includes("security")) 
      return "We have top-class facilities: 24/7 CCTV Security, a Modern Gym, Library, Temple, and a beautiful Lounge area.";
    
    if (text.includes("possession") || text.includes("ready") || text.includes("move")) 
      return "Many families are already living happily here! Contact us for the current availability of ready-to-move units.";

    if (text.includes("hi") || text.includes("hello") || text.includes("hey")) 
      return "Hello! Hope you are doing well. How can I guide you through our projects today?";

    return "I'm here to help! For a detailed brochure or to book a site visit, please click the WhatsApp button below or call our Jodhpur office at +91 77288 88553.";
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const botMessage = { role: 'bot', text: getBotResponse(input) };
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">
      
      {/* STUNNING CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="w-[360px] sm:w-[420px] h-[550px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.2)] rounded-[2.5rem] overflow-hidden flex flex-col border border-slate-100 mb-6"
          >
            {/* Elite Header */}
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 p-7 text-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20">
                      <FaRobot size={24} className="text-blue-400" />
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-slate-900 rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="font-black uppercase text-[10px] tracking-[0.3em] text-blue-400 mb-1">Arihant Virtual Assistant</h3>
                    <p className="text-lg font-bold tracking-tight">Support Desk</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="bg-white/10 p-2 rounded-xl hover:bg-white/20 transition-colors">
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#f8fafc]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-[1.5rem] text-sm font-semibold shadow-sm leading-relaxed ${
                    msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={scrollRef} />
            </div>

            {/* Quick Actions Buttons */}
            <div className="px-4 py-2 flex gap-2 overflow-x-auto bg-[#f8fafc] no-scrollbar">
               <button onClick={() => setInput("What is the Price?")} className="whitespace-nowrap bg-white border border-slate-200 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-blue-500 hover:text-blue-600 transition-all">💰 Price?</button>
               <button onClick={() => setInput("How many BHK?")} className="whitespace-nowrap bg-white border border-slate-200 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-blue-500 hover:text-blue-600 transition-all">🏠 BHK?</button>
               <button onClick={() => setInput("Location Map")} className="whitespace-nowrap bg-white border border-slate-200 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-blue-500 hover:text-blue-600 transition-all">📍 Location</button>
            </div>

            {/* Premium Input */}
            <form onSubmit={handleSend} className="p-5 bg-white flex gap-3 items-center">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type 'Ram Ram' or ask a question..."
                className="flex-1 bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm font-bold text-slate-800 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
              />
              <button type="submit" className="bg-blue-600 text-white p-4 rounded-2xl shadow-lg hover:bg-blue-700 transition-all active:scale-90">
                <FaPaperPlane size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* EYE-CATCHING FLOATING BUTTONS */}
      <div className="flex flex-col gap-4">
        {/* WhatsApp with Pulse Effect */}
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/917728888553" 
          target="_blank" 
          rel="noreferrer"
          className="bg-[#25D366] text-white p-5 rounded-[1.5rem] shadow-[0_15px_30px_rgba(37,211,102,0.4)] flex items-center justify-center relative group"
        >
          <FaWhatsapp size={28} />
          <span className="absolute right-20 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">Direct Sales Line</span>
        </motion.a>

        {/* AI Chat Button with Notification Badge */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-slate-900 text-white p-5 rounded-[1.5rem] shadow-[0_15px_30px_rgba(0,0,0,0.3)] flex items-center justify-center relative"
        >
          {isOpen ? <FaTimes size={28} /> : <FaRobot size={28} />}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-600 text-[10px] font-bold items-center justify-center">1</span>
            </span>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default Chatbot;