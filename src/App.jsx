import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlinePhone, HiOutlineShieldCheck, HiOutlineCheckCircle, HiArrowRight } from 'react-icons/hi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Delight from './components/delight/Delight';
import Promise from './components/promise/Promise';
import Booking from './components/booking/Booking';
import Testimonials from './components/testimonials/Testimonials';
import CTA from './components/cta/CTA';
import Footer from './components/footer/Footer';
import Process from './components/process/Process';

const App = () => {

  const [isOpen, SetIsOpen] = useState(false);

  function handleModal(){
    // console.log(isOpen);
    SetIsOpen(!isOpen);
  }

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="bg-[#FCFDFD] text-[#1A2E35] selection:bg-sage-100 font-monts">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-tight">
            Lice<span className="text-teal-600">Banishers</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-sm text-slate-600">
            <a href="#" className="hover:text-teal-600 transition-colors">Services</a>
            <a href="#" className="hover:text-teal-600 transition-colors">The Process</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Pricing</a>
          </div>
          <a href="tel:555" className="bg-[#1A2E35] text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-teal-700 transition-all">
            <HiOutlinePhone size={18} /> (212) 555-0198
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        {/* Subtle Background Art */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-50/50 -z-10 rounded-l-[100px]" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-widest mb-6">
              <HiOutlineShieldCheck size={16} /> Certified NYC Technicians
            </div>
            <h1 className="text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-8 text-slate-900">
              Gentle care for <br />
              <span className="italic">peace of mind.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-lg">
              The gold standard in non-toxic lice removal. We provide a discreet, spa-like experience that guarantees your family is lice-free in a single visit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button onClick={()=>handleModal()} className="bg-teal-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-teal-200 hover:bg-teal-700 transition-all flex items-center justify-center gap-3 group">
                Book Treatment <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-3 px-6 py-5">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-600">4.9/5 Rating (500+ NYC Families)</span>
              </div>
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-px">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" 
                alt="Safe Treatment" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Floating Trust Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl z-20 max-w-[280px] border border-slate-50"
            >
              <HiOutlineCheckCircle className="text-teal-500 text-4xl mb-4" />
              <h4 className="font-bold text-lg mb-1">Our Guarantee</h4>
              <p className="text-sm text-slate-500">If you see a louse within 30 days, we retreat for free. No questions asked.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- QUICK STATS --- */}
      <section className="py-20 bg-[#1A2E35] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-12">
          {[
            { label: "Founded in NYC", val: "2012" },
            { label: "Success Rate", val: "99.9%" },
            { label: "Safe & Organic", val: "100%" },
            { label: "Schools Served", val: "150+" },
          ].map((stat, i) => (
            <div key={i} className="text-center" data-aos="zoom-in" data-aos-delay={i*100}>
              <p className="text-4xl font-serif italic mb-2">{stat.val}</p>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Delight></Delight>

      <Process></Process>

      <Promise></Promise>

      <Testimonials></Testimonials>

      <CTA></CTA>

      <Booking isOpen={isOpen} onClose={SetIsOpen}></Booking>

      <Footer></Footer>

    </div>
  );
};

export default App;