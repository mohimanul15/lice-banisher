import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlinePhone, HiOutlineCalendar, HiOutlineShieldCheck } from 'react-icons/hi2';

const CTA = () => {
  return (
    /* Removed the relative/absolute background trick and applied bg directly to the section */
    <section className="py-24 px-6 bg-[#1A2E35] relative overflow-hidden">
      
      {/* Animated Glow Orbs - Changed z-index to 0 */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] z-0"
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div 
          data-aos="zoom-in" 
          className="bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-20 rounded-[3rem] md:rounded-[5rem]"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            Ready to be <span className="italic text-teal-400 font-medium">lice-free</span> <br className="hidden md:block" /> by dinner time?
          </h2>
          
          <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Don't spend another night worrying. Our expert technicians are across NYC right now, ready to bring peace back to your home.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-[#1A2E35] px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-teal-500/20 flex items-center justify-center gap-3 transform hover:-translate-y-1">
              <HiOutlineCalendar size={24} /> Book Appointment
            </button>
            
            <a href="tel:555" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3">
              <HiOutlinePhone size={24} /> Call (212) 555-0198
            </a>
          </div>

          <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-6 md:gap-12 text-slate-400 text-xs md:text-sm font-medium">
            <span className="flex items-center gap-2 uppercase tracking-widest">
              <HiOutlineShieldCheck className="text-teal-500 text-lg" /> Discreet
            </span>
            <span className="flex items-center gap-2 uppercase tracking-widest">
              <HiOutlineShieldCheck className="text-teal-500 text-lg" /> Non-Toxic
            </span>
            <span className="flex items-center gap-2 uppercase tracking-widest">
              <HiOutlineShieldCheck className="text-teal-500 text-lg" /> Guaranteed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;