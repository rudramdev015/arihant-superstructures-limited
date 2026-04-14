import React from 'react';
// Importing the logo from the same folder as per your VS Code screenshot
import arihantLogo from './arihant-logo.png';

const Footer = () => {
  return (
    <footer className="relative bg-[#0f0f0f] text-gray-400 pt-16 overflow-hidden" id="Footer">
      
      {/* Top Branding Section */}
      <div className="container mx-auto px-6 md:px-20 lg:px-32 mb-12 border-b border-zinc-800 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Main Logo from your project */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={arihantLogo} 
              alt="Arihant Superstructures Ltd." 
              className="h-16 md:h-20 w-auto object-contain brightness-110" 
            />
            <div className="h-0.5 w-full bg-orange-500 mt-2"></div>
            <p className="text-[10px] tracking-[0.4em] text-gray-500 mt-2 font-medium uppercase">
              Continuing Stability
            </p>
          </div>

          {/* Social Presence */}
          <div className="flex gap-8 items-center">
            <a href="#" className="text-sm hover:text-orange-500 transition-all font-medium">Facebook</a>
            <a href="#" className="text-sm hover:text-orange-500 transition-all font-medium">Instagram</a>
            <a href="#" className="text-sm hover:text-orange-500 transition-all font-medium">YouTube</a>
          </div>
        </div>
      </div>

      {/* Grid Content: Info, Links, Newsletter */}
      <div className="container mx-auto px-6 md:px-20 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Contact Info */}
        <div>
          <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
            Contact Details
          </h3>
          <div className="space-y-4 text-sm leading-relaxed border-l border-zinc-800 pl-4">
            <p>
              <strong className="text-white">Arihant Anchal</strong><br />
              Near Dali Bai Circle, Jaisalmer Bypass Road, <br />
              Jodhpur, Rajasthan 342014
            </p>
            <p className="hover:text-white transition-colors cursor-pointer">
              <strong>Phone:</strong> 077288 88553
            </p>
            <p><strong>Hours:</strong> Open until 6:00 PM</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
            Navigation
          </h3>
          <ul className="space-y-3 text-sm border-l border-zinc-800 pl-4">
            <li><a href="#Header" className="hover:text-orange-500 transition-all">Home</a></li>
            <li><a href="#About" className="hover:text-orange-500 transition-all">About Us</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-all">Arihant Adita</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-all">Arihant Ayati</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-1">
          <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
            Newsletter
          </h3>
          <div className="flex flex-col gap-3">
            <p className="text-xs">Subscribe for the latest property updates in Jodhpur.</p>
            <input 
              type="email" 
              placeholder="Enter Email" 
              className="bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-all text-white"
            />
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded text-[10px] uppercase tracking-[0.2em] transition-all">
              Submit
            </button>
          </div>
        </div>

        {/* RERA Section */}
        <div>
          <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
            Certified
          </h3>
          <div className="p-4 bg-zinc-900/30 rounded border border-zinc-800/50">
            <p className="text-[11px] leading-relaxed italic text-gray-500">
              Arihant Anchal offers supreme lifestyle at an affordable price in Jodhpur.
            </p>
            <p className="text-orange-500 text-[10px] mt-4 font-bold tracking-tight">
              RERA: RAJ/P/2017/322
            </p>
          </div>
        </div>
      </div>

      {/* Visual Building Silhouette (The 'Wow' Factor) */}
      <div className="mt-16 opacity-[0.05] pointer-events-none select-none">
        <svg viewBox="0 0 1200 120" className="w-full h-auto fill-current text-white">
          <path d="M0,120 L0,100 L30,100 L30,60 L60,60 L60,110 L90,110 L90,40 L120,40 L120,120 L150,120 L150,20 L220,20 L220,120 L300,120 L300,70 L350,70 L350,40 L400,40 L400,120 L500,120 L500,10 L580,10 L580,120 L700,120 L700,50 L750,50 L750,120 L900,120 L900,30 L1000,30 L1000,120 L1100,120 L1100,60 L1200,60 L1200,120 Z" />
        </svg>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#050505] py-8 relative z-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[10px] text-gray-600 tracking-[0.3em] uppercase mb-2">
            Copyright 2026 © Arihant Superstructures Ltd. | All Rights Reserved.
          </p>
          <p className="text-[9px] text-zinc-800 tracking-[0.1em]">
            Developed by <span className="text-zinc-700">Bawra Digital</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;