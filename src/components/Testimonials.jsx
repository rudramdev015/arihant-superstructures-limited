import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Praveen Sundesha",
    date: "10/03/2026",
    text: "Best society in Jodhpur. Good amenities like the indoor gym and clubhouse. Already 450+ families living happily here. Highly recommended for premium living.",
    rating: 5,
    initials: "PS",
    color: "from-blue-600 to-blue-800"
  },
  {
    name: "Shobha Vyas",
    date: "15/02/2026",
    text: "The experience was seamless. Apartments are amazing! The 2 BHK premium flats are very spacious and well-ventilated. A true gem in Sun City.",
    rating: 5,
    initials: "SV",
    color: "from-emerald-600 to-emerald-800"
  },
  {
    name: "Ashok Thanvi",
    date: "20/01/2026",
    text: "Excellent construction quality and peaceful environment near Dali Bai Circle. One of the top-class residential townships in Rajasthan.",
    rating: 5,
    initials: "AT",
    color: "from-orange-500 to-orange-700"
  },
  {
    name: "Rahul Gehlot",
    date: "05/12/2025",
    text: "Nice apartments, friendly staff and a quiet environment. Located perfectly in Jodhpur. Very satisfied with the smart home features.",
    rating: 5,
    initials: "RG",
    color: "from-purple-600 to-purple-800"
  },
  {
    name: "Maria Korsgaard",
    date: "15/04/2021",
    text: "Amazing apartments. It's new, clean, and comfortable. I felt right at home immediately. The security and management team is very helpful.",
    rating: 5,
    initials: "MK",
    color: "from-rose-600 to-rose-800"
  }
];

const GoogleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const Testimonials = () => {
  const googleReviewLink = "https://share.google/4NExLKj3PbPuWjQsL";

  return (
    <section className='py-20 md:py-32 px-6 lg:px-24 xl:px-32 w-full bg-[#FAFAFA] overflow-hidden' id='Testimonials'>
      <div className='max-w-[1800px] mx-auto'>
        
        {/* Top Class Header Area based on your design */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1a73e8] font-black text-[10px] uppercase tracking-[0.2em]"
            >
              Real Customer Stories
            </motion.div>
            <h2 className='text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.95] uppercase'>
              Trusted By The <br/> <span className="text-orange-600">Jodhpur Community.</span>
            </h2>
          </div>

          {/* Fixed Review Button & Stats Card */}
          <div className="flex flex-col items-start lg:items-end gap-6 w-full lg:w-auto">
            <div className="flex items-center gap-4 bg-white p-5 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-50">
               <div className="flex text-yellow-400 text-2xl font-black items-center gap-1">
                 <span className="text-slate-900 mr-2 text-4xl">4.9</span> ★★★★★
               </div>
               <div className="h-10 w-[1px] bg-slate-200"></div>
               <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">107+ Reviews</p>
            </div>
            
            <a 
              href={googleReviewLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full lg:w-auto text-center bg-[#1a73e8] hover:bg-blue-700 text-white px-12 py-5 rounded-2xl font-black shadow-[0_15px_30px_rgba(26,115,232,0.25)] transition-all active:scale-95 text-xs uppercase tracking-[0.2em]"
            >
              Write a Review
            </a>
          </div>
        </div>

        {/* Stunning Bento Grid Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className='bg-white border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.04)] rounded-[2.5rem] p-10 relative flex flex-col justify-between transition-all duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.1)] group'
            >
              {/* Google G Logo branding - Always Colorful */}
              <div className="absolute top-10 right-10 group-hover:scale-110 transition-transform duration-300">
                <GoogleIcon />
              </div>

              <div>
                <div className="flex items-center gap-5 mb-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-black text-2xl shadow-xl`}>
                    {review.initials}
                  </div>
                  <div>
                    <h3 className='font-black text-slate-800 tracking-tight text-xl'>{review.name}</h3>
                    <p className='text-[11px] text-slate-400 font-black uppercase tracking-[0.1em]'>{review.date}</p>
                  </div>
                </div>

                <div className='flex gap-1.5 mb-8 text-yellow-400'>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>

                <p className='text-slate-600 text-lg leading-relaxed font-medium italic opacity-90'>
                  "{review.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Trust Footer */}
        <div className="mt-24 flex flex-col items-center gap-6 opacity-60">
           <div className="flex items-center gap-4">
              <span className="font-black text-3xl tracking-tighter text-slate-900">Google</span>
              <div className="h-8 w-[2px] bg-slate-300"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">Verified Reviews</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;