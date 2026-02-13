import React from 'react';
import { motion } from 'framer-motion';
import { HiStar, HiOutlineChatBubbleBottomCenterText, HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi2';

const testimonials = [
  {
    name: "Elena R.",
    location: "Upper East Side",
    quote: "The panic I felt when the school called was overwhelming. Lice Banishers arrived within 2 hours. My daughter felt like she was at a spa, and I could finally breathe again.",
    tag: "Life Saver"
  },
  {
    name: "Marcus T.",
    location: "Brooklyn Heights",
    quote: "I tried the drugstore kits three times with no luck. One visit from these pros and we were completely clear. The 30-day guarantee gave us such peace of mind.",
    tag: "Highly Recommend"
  },
  {
    name: "Sophia K.",
    location: "Tribeca",
    quote: "Discreet, professional, and incredibly kind. They didn't just treat the hair; they educated us on how to stay clear. Worth every penny for the stress relief.",
    tag: "Discreet & Professional"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-teal-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 mb-4">
              Stories of <span className="italic text-teal-600">Relief.</span>
            </h2>
            <p className="text-slate-500 max-w-md">
              Join 5,000+ NYC families who traded the itch for a smile.
            </p>
          </div>
          
          <div className="flex gap-3" data-aos="fade-left">
            <button className="p-4 rounded-full border border-slate-200 bg-white hover:bg-teal-600 hover:text-white transition-all shadow-sm">
              <HiOutlineArrowLeft size={20} />
            </button>
            <button className="p-4 rounded-full border border-slate-200 bg-white hover:bg-teal-600 hover:text-white transition-all shadow-sm">
              <HiOutlineArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((story, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-50 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => <HiStar key={i} />)}
                </div>
                <p className="text-xl font-serif italic text-slate-700 leading-relaxed mb-8">
                  "{story.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">
                    {story.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-none">{story.name}</h4>
                    <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-widest">{story.location}</p>
                  </div>
                </div>
                <div className="hidden lg:block">
                    <HiOutlineChatBubbleBottomCenterText className="text-slate-100" size={40} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TRUST BANNER */}
        <div className="mt-20 pt-12 border-t border-slate-200 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           <span className="font-serif text-2xl text-slate-400">Google Reviews 4.9/5</span>
           <span className="font-serif text-2xl text-slate-400">Yelp Elite</span>
           <span className="font-serif text-2xl text-slate-400">NYC Dept. of Health</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;