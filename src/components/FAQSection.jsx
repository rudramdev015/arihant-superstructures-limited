import React, { useState } from 'react';

const FAQS = [
  {
    q: 'What is the price of a 2 BHK flat in Arihant Anchal Jodhpur?',
    a: '2 BHK flats at Arihant Anchal Jodhpur are priced starting from Rs.41 Lakhs (Rs.41,00,000) for 900 sq.ft carpet area — approximately Rs.4,500 per sq.ft. This is the most affordable 2 BHK flat under Rs.50 lakhs in Jodhpur with JDA & RERA approval. Home loans are available from SBI, HDFC, ICICI Bank, and Axis Bank. Call +91 90012 33545 for current availability and floor-wise pricing.',
  },
  {
    q: 'What is the price of a 4 BHK flat in Arihant Anchal Jodhpur?',
    a: '4 BHK luxury flats at Arihant Anchal Jodhpur start from Rs.82 Lakhs (Rs.82,00,000) — 1800 sq.ft super built-up area with 1216 sq.ft carpet area, approximately Rs.4,500 per sq.ft. The 4 BHK Luxury Series includes 4 bedrooms, 4 bathrooms, a grand living & dining hall, master suite with dressing room, and private terrace access. Home loans available from all major banks and NBFCs.',
  },
  {
    q: 'Is Arihant Anchal RERA approved?',
    a: 'Yes. Arihant Anchal is fully RERA registered with Registration Number RAJ/P/2017/322 under the Rajasthan RERA authority. It is also JDA (Jodhpur Development Authority) approved and ISO certified. You can verify RERA details on the official Rajasthan RERA website. This ensures 100% legal, transparent, and safe investment.',
  },
  {
    q: 'Is Arihant Anchal ready to move in?',
    a: 'Yes. Arihant Anchal is a ready-to-move-in gated township. More than 500 families are already living here. There is no waiting period — you can visit the actual flat, inspect the construction quality, meet residents, and book the same day. Free AC car pickup is arranged from your home for the site visit.',
  },
  {
    q: 'Where is Arihant Anchal located in Jodhpur?',
    a: 'Arihant Anchal is located on Jaisalmer Bypass Road, near Dali Bai Circle, Jodhpur, Rajasthan 342008. GPS coordinates: 26.2359°N, 73.0314°E. It is 8 km from AIIMS Jodhpur, 12 km from Jodhpur International Airport, 15 km from Jodhpur Railway Station, and 18 km from Jodhpur City Centre (Clock Tower). Situated on the fastest-growing real estate corridor in Jodhpur.',
  },
  {
    q: 'How to book a flat at Arihant Anchal?',
    a: 'Booking a flat at Arihant Anchal is simple: (1) Call or WhatsApp +91 90012 33545 to express your interest. (2) We arrange a FREE AC car pickup from your home for a no-obligation site visit. (3) Choose your preferred flat, floor, and configuration. (4) Complete documentation with our team\'s help. (5) Apply for home loan — approval in as little as 7 days from SBI, HDFC, ICICI, Axis Bank, or Bank of Baroda.',
  },
  {
    q: 'Is home loan available for Arihant Anchal Jodhpur?',
    a: 'Yes. Home loans are approved for Arihant Anchal from all major banks including SBI (State Bank of India), HDFC Bank, ICICI Bank, Axis Bank, Bank of Baroda, and all major NBFCs. Loan approval typically takes 7 days. Our dedicated loan assistance team helps you with documentation and ensures the best interest rates. Both salaried and self-employed buyers can apply.',
  },
  {
    q: 'Can NRI buy a flat at Arihant Anchal Jodhpur?',
    a: 'Yes. NRI (Non-Resident Indian) buyers can purchase flats at Arihant Anchal under the FEMA (Foreign Exchange Management Act) compliant purchase process. Our dedicated NRI assistance team guides you through all documentation — Power of Attorney, FEMA compliance, NRE/NRO account requirements — without you needing to be physically present. Contact: +91 90012 33545.',
  },
  {
    q: 'What amenities are available at Arihant Anchal?',
    a: 'Arihant Anchal offers world-class amenities across its 18.5-acre gated campus — 1. Fully Equipped Gymnasium 2. Swimming Pool 3. Library & Reading Room 4. Temple (within campus) 5. Club Lounge & Banquet Hall 6. 24/7 CCTV Surveillance Security 7. Covered Stilt Parking 8. Children\'s Play Area 9. Jogging Track 10. Sports Court (Basketball & Badminton) 11. Landscaped Garden & Green Areas 12. 100% 24/7 Power Backup for all units 13. Rainwater Harvesting System 14. Visitor Parking. Every amenity is included in the flat price — no extra club charges.',
  },
  {
    q: 'How many total units and floors does Arihant Anchal have?',
    a: 'Arihant Anchal is a large-scale township spread over 18.5 acres with 2,324 total residential units. The structure is Stilt + 7 Floors across multiple towers. Available configurations are 2 BHK (900 sq.ft) and 4 BHK (1800 sq.ft). Multiple floor options are available — higher floors offer panoramic views of Jodhpur city and the Aravalli hills.',
  },
  {
    q: 'Who is the developer of Arihant Anchal?',
    a: 'Arihant Anchal is developed by Arihant Superstructures Ltd., founded in 1994 and led by Chairman & Managing Director Mr. Ashok Chhajer. The company has 30+ years of real estate experience with projects in Jodhpur (Rajasthan) and Navi Mumbai (Maharashtra). Other projects include Arihant Adita, Arihant Ayati, and Sky Penthouses — all in Jodhpur. The company is ISO certified and has delivered thousands of homes.',
  },
  {
    q: 'How far is Arihant Anchal from AIIMS Jodhpur?',
    a: 'Arihant Anchal is approximately 8 km from AIIMS Jodhpur (All India Institute of Medical Sciences). The project is also close to MBM University Jodhpur (14 km), Jodhpur International Airport (12 km), Jodhpur Railway Station (15 km), Patrakar Colony (3 km), and Dali Bai Circle (0.5 km). Its location on Jaisalmer Bypass Road ensures excellent connectivity across the city.',
  },
  {
    q: 'Is there 24/7 security at Arihant Anchal?',
    a: 'Yes. Arihant Anchal has a robust 24/7 security system including CCTV surveillance cameras throughout the campus, trained security guards at all entry/exit points, intercom system in all flats, gated community with controlled access, and visitor management system. The entire 18.5-acre township is secured for the safety of all 500+ resident families.',
  },
  {
    q: 'What is the Google rating of Arihant Anchal?',
    a: 'Arihant Anchal has a Google rating of 4.2 out of 5 stars based on 109 reviews. The project is consistently praised by residents for its construction quality, amenities, security, and management team. You can read verified reviews on Google Maps and visit the project in person to see for yourself.',
  },
  {
    q: 'Is a free site visit available for Arihant Anchal?',
    a: 'Yes. Arihant Anchal offers a completely FREE site visit with no obligation to purchase. Just call or WhatsApp +91 90012 33545 and our team will arrange a free AC car pickup from your home or office, drive you to the project, show you actual flats, introduce you to resident families, and answer all your questions. No sales pressure — the decision is entirely yours.',
  },
];

const FAQItem = ({ faq, index, isOpen, onToggle }) => (
  <div className="border border-slate-100 rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:border-orange-200 hover:shadow-md">
    <button
      onClick={() => onToggle(index)}
      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
      aria-expanded={isOpen}
    >
      <span className="font-bold text-slate-800 text-sm sm:text-base leading-snug group-hover:text-orange-600 transition-colors">
        {faq.q}
      </span>
      <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
        isOpen ? 'bg-orange-600 text-white rotate-45' : 'bg-orange-50 text-orange-600'
      }`}>
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
        </svg>
      </span>
    </button>
    {isOpen && (
      <div className="px-6 pb-5">
        <div className="h-px bg-slate-100 mb-4" />
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{faq.a}</p>
      </div>
    )}
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const half = Math.ceil(FAQS.length / 2);
  const left = FAQS.slice(0, half);
  const right = FAQS.slice(half);

  return (
    <section className="bg-slate-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-12" id="faq">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-5">
              Common Questions
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-[0.95] tracking-tighter">
              Frequently Asked <br />
              <span className="text-orange-500">Questions</span>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-slate-400 text-sm leading-relaxed border-l-4 border-orange-500 pl-4">
              Everything you need to know about Arihant Anchal — pricing, location, home loans, booking process and more.
            </p>
            <a
              href="tel:+919001233545"
              className="mt-4 inline-flex items-center gap-2 text-orange-600 font-bold text-sm hover:text-orange-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Still have questions? Call us
            </a>
          </div>
        </div>
      </div>

      {/* Two-column FAQ grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
        <div className="flex flex-col gap-3 sm:gap-4">
          {left.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={toggle}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:gap-4">
          {right.map((faq, i) => (
            <FAQItem
              key={i + half}
              faq={faq}
              index={i + half}
              isOpen={openIndex === i + half}
              onToggle={toggle}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto mt-12 text-center">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl px-8 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <p className="text-white/80 text-xs uppercase tracking-widest font-bold mb-1">Ready to visit?</p>
            <h3 className="text-white font-black text-2xl sm:text-3xl">Book Your FREE Site Visit</h3>
            <p className="text-orange-100 text-sm mt-1">Free AC car pickup · No obligation · See actual flats</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="tel:+919001233545"
              className="bg-white text-orange-600 px-6 py-3 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-orange-50 transition-colors shadow-lg"
            >
              📞 +91 90012 33545
            </a>
            <a
              href="https://wa.me/919001233545?text=I%20want%20to%20book%20a%20site%20visit%20for%20Arihant%20Anchal%20Jodhpur"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-green-400 transition-colors shadow-lg"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default FAQSection;
