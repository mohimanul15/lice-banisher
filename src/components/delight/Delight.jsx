import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineSparkles, HiOutlineHeart, HiOutlineSun, HiArrowRight, HiOutlinePhone } from 'react-icons/hi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Delight = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#FDFAFB] text-[#2D3A3A] overflow-hidden">
      
      {/* --- HERO: THE MOMENT OF RELIEF --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 px-6">
        {/* Floating Abstract Shapes for Delight */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-3xl -z-10"
        />
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-20 -left-20 w-[400px] h-[400px] bg-pink-100/30 rounded-full blur-3xl -z-10"
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-pink-50 text-pink-500 text-xs font-bold uppercase tracking-widest mb-8">
              <HiOutlineSparkles className="animate-pulse" /> NYC's Gentlest Care
            </div>
            <h1 className="text-6xl lg:text-7xl font-serif font-medium leading-tight mb-8">
              Swap the itch for <br />
              <span className="text-teal-600 italic">pure sunshine.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-lg">
              We don't just banish lice; we bring back the smiles. Our organic, spa-inspired treatment is a favorite for NYC kids and a lifesaver for parents.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <button className="bg-[#2D3A3A] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-teal-700 transition-all shadow-xl hover:shadow-teal-100 flex items-center gap-3">
                Schedule a Happy Visit <HiArrowRight />
              </button>
            </div>
          </div>

          <div className="relative" data-aos="zoom-in">
            {/* Main Lifestyle Image */}
            <div className="relative z-10 rounded-[3rem] p-4 bg-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800" 
                alt="Happy Child After Treatment" 
                className="w-full h-[500px] object-cover rounded-[2.5rem]"
              />
            </div>
            
            {/* Delight Card: Testimonial Snippet */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -bottom-6 -right-12 bg-white p-6 rounded-3xl shadow-xl z-20 max-w-[240px] border-t-4 border-teal-400"
            >
              <div className="flex text-yellow-400 mb-2">★★★★★</div>
              <p className="text-sm italic text-slate-600">"My daughter actually had fun! It felt like a spa day, and we were lice-free in an hour."</p>
              <p className="text-xs font-bold mt-3 uppercase tracking-tighter">— Sarah, Upper West Side</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- THE "DELIGHT" PROCESS: 3 SIMPLE STEPS --- */}
      <section className="py-24 bg-white rounded-[5rem] shadow-inner">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20" data-aos="fade-up">
            <h2 className="text-4xl font-serif font-bold mb-6">From "Oh No" to "All Clear"</h2>
            <p className="text-slate-500">We’ve perfected a process that is as relaxing as it is effective.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                icon: <HiOutlinePhone className="text-teal-500" />, 
                title: "Easy Booking", 
                desc: "Call or book online in seconds. We fit your busy NYC schedule." 
              },
              { 
                icon: <HiOutlineHeart className="text-pink-400" />, 
                title: "Gentle Treatment", 
                desc: "Non-toxic, organic products that smell like a fresh spring day." 
              },
              { 
                icon: <HiOutlineSun className="text-yellow-500" />, 
                title: "Total Freedom", 
                desc: "Walk out with an 'All Clear' certificate and a huge weight off your shoulders." 
              }
            ].map((step, i) => (
              <div key={i} className="text-center group" data-aos="fade-up" data-aos-delay={i * 200}>
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-white group-hover:shadow-xl transition-all duration-500 text-3xl">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Delight;