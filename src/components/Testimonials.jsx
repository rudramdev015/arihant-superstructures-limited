import React from 'react';

const reviews = [
  {
    name: "Praveen Sundesha",
    date: "10 Mar 2026",
    text: "Best society in Jodhpur. Good amenities like the indoor gym and clubhouse. Already 450+ families living happily here. Highly recommended for premium living.",
    rating: 5,
    initials: "PS",
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "Shobha Vyas",
    date: "15 Feb 2026",
    text: "The experience was seamless. Apartments are amazing! The 2 BHK premium flats are very spacious and well-ventilated. A true gem in Sun City.",
    rating: 5,
    initials: "SV",
    color: "from-emerald-600 to-emerald-800",
  },
  {
    name: "Ashok Thanvi",
    date: "20 Jan 2026",
    text: "Excellent construction quality and peaceful environment near Dali Bai Circle. One of the top-class residential townships in Rajasthan.",
    rating: 5,
    initials: "AT",
    color: "from-orange-500 to-orange-700",
  },
  {
    name: "Rahul Gehlot",
    date: "05 Dec 2025",
    text: "Nice apartments, friendly staff and a quiet environment. Located perfectly in Jodhpur. Very satisfied with the smart home features.",
    rating: 5,
    initials: "RG",
    color: "from-purple-600 to-purple-800",
  },
  {
    name: "Maria Korsgaard",
    date: "15 Apr 2025",
    text: "Amazing apartments. New, clean, and comfortable. I felt right at home immediately. The security and management team is very helpful.",
    rating: 5,
    initials: "MK",
    color: "from-rose-600 to-rose-800",
  },
  {
    name: "Deepak Rathore",
    date: "02 Nov 2025",
    text: "Invested in a 4 BHK unit and could not be happier. The panoramic view from the upper floors is breathtaking. Premium quality at every turn.",
    rating: 5,
    initials: "DR",
    color: "from-cyan-600 to-cyan-800",
  },
];

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const StarRow = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))}
  </div>
);

const ReviewCard = ({ review, style = {} }) => (
  <div
    style={style}
    className="flex-shrink-0 w-[300px] sm:w-[340px] bg-white rounded-[1.8rem] p-7 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col gap-4 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500"
  >
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-black text-lg shadow-md`}>
          {review.initials}
        </div>
        <div>
          <p className="font-black text-slate-800 text-base leading-tight">{review.name}</p>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-0.5">{review.date}</p>
        </div>
      </div>
      <GoogleIcon />
    </div>
    <StarRow />
    <p className="text-slate-600 text-sm leading-relaxed italic flex-1">
      "{review.text}"
    </p>
  </div>
);

const Testimonials = () => {
  const googleReviewLink = "https://share.google/4NExLKj3PbPuWjQsL";
  const doubled = [...reviews, ...reviews];

  return (
    <section className="py-20 md:py-32 bg-[#FAFAFA] overflow-hidden" id="Testimonials">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <GoogleIcon />
              <span className="text-[#1a73e8] font-black text-[10px] uppercase tracking-[0.2em]">Real Customer Stories</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.95] uppercase">
              Trusted By<br />
              <span className="text-orange-600">Jodhpur.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-5">
            {/* Rating card */}
            <div className="flex items-center gap-5 bg-white p-5 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100">
              <div>
                <p className="text-5xl font-black text-slate-900 leading-none">4.9</p>
                <div className="mt-1"><StarRow /></div>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <p className="font-black text-slate-900 text-xl">107+</p>
                <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Reviews</p>
              </div>
            </div>

            <a
              href={googleReviewLink}
              target="_blank"
              rel="noreferrer"
              className="w-full lg:w-auto text-center bg-[#1a73e8] hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-[0_8px_24px_rgba(26,115,232,0.3)] transition-all active:scale-95"
            >
              Write a Review
            </a>
          </div>
        </div>
      </div>

      {/* ── INFINITE MARQUEE ROW 1 (left scroll) ── */}
      <div className="relative mb-4 overflow-hidden">
        <div className="flex gap-4 animate-marquee-left will-change-transform">
          {doubled.map((r, i) => (
            <ReviewCard key={`r1-${i}`} review={r} />
          ))}
        </div>
      </div>

      {/* ── INFINITE MARQUEE ROW 2 (right scroll) ── */}
      <div className="relative overflow-hidden">
        <div className="flex gap-4 animate-marquee-right will-change-transform">
          {[...doubled].reverse().map((r, i) => (
            <ReviewCard key={`r2-${i}`} review={r} />
          ))}
        </div>
      </div>

      {/* Bottom trust line */}
      <div className="mt-14 flex justify-center px-6">
        <div className="flex items-center gap-4 opacity-40">
          <span className="font-black text-2xl tracking-tighter text-slate-900">Google</span>
          <div className="h-6 w-px bg-slate-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">Verified Reviews</span>
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left  { animation: marquee-left  35s linear infinite; }
        .animate-marquee-right { animation: marquee-right 38s linear infinite; }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
};

export default Testimonials;
