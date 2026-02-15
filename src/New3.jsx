import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  HiPhone, HiCalendar, HiCheckCircle, HiStar, 
  HiArrowRight, HiShieldCheck, HiSparkles 
} from 'react-icons/hi2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const New3 = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const trustPoints = [
    "Non-toxic heated air removal",
    "HSA/FSA approved",
    "Out of network insurance",
    "Flat rate with no hidden fees",
    "Safe for all ages!"
  ];

  return (
    <div className="bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* --- PREMIUM NAVIGATION --- */}
      <nav className="navbar bg-white/90 backdrop-blur-lg sticky top-0 z-[100] border-b border-slate-100 px-4 lg:px-12">
        <div className="navbar-start">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-teal-200">
              <HiShieldCheck size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter italic">Lice<span className="text-teal-600">Banishers</span></span>
          </div>
        </div>
        <div className="navbar-end gap-3 font-bold">
          <a href="tel:2125550198" className="btn btn-ghost hidden lg:flex text-slate-600 hover:text-teal-600">
            <HiPhone className="mr-2" /> (212) 555-0198
          </a>
          <button className="btn btn-primary bg-teal-600 border-none hover:bg-teal-700 text-white px-8 rounded-2xl shadow-xl shadow-teal-100 uppercase font-black">
            Book Appointment
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION: THE "RELIEF CHECKLIST" --- */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 px-6">
        {/* Visual Depth Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50/50 -z-10 rounded-l-[100px] hidden lg:block" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7" data-aos="fade-right">
            <div className="flex items-center gap-2 text-teal-700 font-extrabold text-sm uppercase tracking-widest mb-6">
              <span className="w-12 h-px bg-teal-600"></span>
              Trusted by 5,000+ NYC Families
            </div>
            <h1 className="text-5xl lg:text-8xl font-black text-slate-900 leading-[0.95] mb-8">
              Expert Lice <br />
              <span className="text-teal-600">Removal</span> in <br />
              One Session.
            </h1>
            
            {/* THE DYNAMIC CHECKLIST */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {trustPoints.map((point, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-50 hover:shadow-md transition-shadow"
                >
                  <HiCheckCircle className="text-teal-500 text-2xl flex-shrink-0" />
                  <span className="font-bold text-slate-700">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* DOMINANT CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-lg h-24 bg-teal-600 border-none hover:bg-teal-700 text-white rounded-[2rem] px-12 shadow-2xl shadow-teal-300 transition-all hover:scale-105 group">
                <div className="text-left">
                  <p className="text-xs opacity-70 uppercase font-black tracking-widest">Fastest Service</p>
                  <p className="text-2xl font-black">BOOK NOW</p>
                </div>
                <HiArrowRight className="ml-4 text-2xl group-hover:translate-x-2 transition-transform" />
              </button>
              
              <button className="btn btn-lg h-24 bg-white border-4 border-slate-900 text-slate-900 rounded-[2rem] px-12 hover:bg-slate-900 hover:text-white transition-all hover:scale-105">
                <div className="text-left">
                  <p className="text-xs opacity-70 uppercase font-black tracking-widest">24/7 Support</p>
                  <p className="text-2xl font-black">CALL NOW</p>
                </div>
              </button>
            </div>
          </div>

          {/* HERO IMAGE WITH DEPTH CARDS */}
          <div className="lg:col-span-5 relative" data-aos="fade-left">
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800" 
                alt="Happy Child" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            {/* MOCK GOOGLE REVIEW OVERLAY */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-[2rem] shadow-2xl z-20 max-w-[280px] border border-teal-50"
            >
              <div className="flex items-center gap-2 mb-3 text-yellow-400">
                <HiStar /><HiStar /><HiStar /><HiStar /><HiStar />
              </div>
              <p className="text-sm font-bold text-slate-800 italic leading-relaxed">
                "We were clear in under 90 minutes. The heated air treatment is amazing—my son actually fell asleep!"
              </p>
              <p className="text-xs text-slate-400 font-black mt-4 uppercase">— Melissa, Upper West Side</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TRUST STATS BAR (Lice Busters Style) --- */}
      <section className="py-12 bg-slate-900 text-white mx-6 rounded-[3rem]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-black text-teal-400 mb-1">99.9%</p>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Success Rate</p>
          </div>
          <div>
            <p className="text-4xl font-black text-teal-400 mb-1">0%</p>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Pesticides</p>
          </div>
          <div>
            <p className="text-4xl font-black text-teal-400 mb-1">24hr</p>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Availability</p>
          </div>
          <div>
            <p className="text-4xl font-black text-teal-400 mb-1">20k+</p>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Families Served</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default New3;