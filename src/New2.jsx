import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiCalendar, HiCheckBadge, HiShieldCheck, HiStar, HiHome, HiSparkles } from 'react-icons/hi2';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Using DaisyUI for structural components like the Navbar and Stats
const New2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* 1. STICKY ACTION HEADER */}
      <nav className="navbar bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 px-4 md:px-12">
        <div className="navbar-start">
          <a className="text-2xl font-black tracking-tighter text-teal-600">Lice<span className="text-slate-800 font-extrabold">Banishers</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-slate-600">
            <li><a>Our Process</a></li>
            <li><a>Service Areas</a></li>
            <li><a>Why Us</a></li>
            <li><a>Pricing</a></li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <a href="tel:2125550198" className="btn btn-ghost btn-circle hidden md:flex">
            <HiPhone className="text-xl text-teal-600" />
          </a>
          <button className="btn btn-primary bg-teal-600 border-none hover:bg-teal-700 text-white font-black px-8 rounded-full shadow-lg shadow-teal-200">
            BOOK NOW
          </button>
        </div>
      </nav>

      {/* 2. IMPACT HERO (Larger Than Lice Inspired) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div className="badge badge-outline border-teal-600 text-teal-700 font-bold p-4 mb-6 uppercase tracking-widest gap-2">
              <HiSparkles /> NYC's #1 Lice Removal Service
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
              Get Your Life <br />
              <span className="text-teal-600 underline decoration-teal-200 decoration-8 underline-offset-4">Back to Normal.</span> <br />
              In One Session.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              Stop the stress and the scratching. Our certified specialists provide 100% non-toxic, in-home or clinic treatments guaranteed to work.
            </p>
            
            {/* DOMINANT ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5 mb-10">
              <button className="btn btn-lg h-20 bg-teal-600 hover:bg-teal-700 border-none text-white px-10 rounded-2xl shadow-xl shadow-teal-200 transition-transform hover:scale-105">
                <div className="flex flex-col items-start leading-none">
                  <span className="text-xs uppercase font-bold opacity-80">Online Booking</span>
                  <span className="text-xl font-black">SCHEDULE NOW</span>
                </div>
                <HiCalendar className="text-2xl ml-4" />
              </button>
              <button className="btn btn-lg h-20 bg-white border-4 border-slate-900 text-slate-900 px-10 rounded-2xl hover:bg-slate-900 hover:text-white transition-all transform hover:scale-105">
                 <div className="flex flex-col items-start leading-none text-left">
                  <span className="text-xs uppercase font-bold opacity-80">Urgent Dispatch</span>
                  <span className="text-xl font-black">(212) 555-0198</span>
                </div>
                <HiPhone className="text-2xl ml-4" />
              </button>
            </div>

            <div className="flex items-center gap-6">
              <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                {[1,2,3,4].map(i => (
                  <div key={i} className="avatar border-white border-4">
                    <div className="w-10 bg-slate-200"><img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user"/></div>
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-slate-400">
                <span className="text-teal-600">5,000+</span> Happy NYC Parents
              </p>
            </div>
          </div>

          <div className="relative" data-aos="zoom-in">
            <div className="relative z-10 rounded-[3rem] shadow-2xl border-[16px] border-white overflow-hidden transform -rotate-2">
              <img src="https://images.unsplash.com/photo-1628516942091-2296978dd437?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Family" className="w-full h-full object-cover" />
            </div>
            {/* Trust badge inspired by Lice Busters */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl z-20 flex items-center gap-4 border border-slate-100"
            >
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 text-3xl">
                <HiCheckBadge />
              </div>
              <div>
                <p className="font-black text-slate-900 text-lg">100% Guaranteed</p>
                <p className="text-xs font-bold text-slate-400">School Clearance Certs</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MOCK GOOGLE REVIEWS SECTION (Trust Anchored) */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div data-aos="fade-up">
              <h2 className="text-4xl font-black mb-4 tracking-tight">NYC Parents Love Us</h2>
              <p className="text-slate-500 font-medium">Real stories from the Five Boroughs.</p>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
              <span className="font-black text-2xl">4.9</span>
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => <HiStar key={i} />)}
              </div>
              <span className="text-slate-400 text-sm ml-2">522 Reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", loc: "Upper West Side", text: "They arrived within 2 hours. My daughter felt so comfortable and we were lice-free immediately. A lifesaver!" },
              { name: "Jessica K.", loc: "Brooklyn", text: "The most professional service I've ever used. They explained the process so clearly. Highly recommend to any stressed parent." },
              { name: "Elena R.", loc: "Tribeca", text: "Discrete, fast, and 100% natural. I can't thank LiceBanishers enough for getting us through this nightmare." }
            ].map((review, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i*100} className="card bg-white border border-slate-100 shadow-sm p-8 rounded-3xl hover:shadow-xl transition-shadow">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[1,2,3,4,5].map(i => <HiStar key={i} size={18} />)}
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="avatar placeholder">
                    <div className="bg-teal-50 text-teal-700 rounded-full w-12 font-black uppercase">{review.name[0]}</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-none">{review.name}</h4>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{review.loc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE PROCESS (Structured like Lice Mamas) */}
      <section className="py-24 bg-teal-600 text-white rounded-[4rem] mx-4 mb-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">Our Simple 3-Step Relief</h2>
            <p className="text-teal-50 max-w-xl mx-auto font-medium opacity-80">We've perfected the removal process to be as fast as it is thorough.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 text-center">
            {[
              { icon: <HiHome />, title: "The Screening", text: "Full diagnostic of the family using professional lighting and tools." },
              { icon: <HiSparkles />, title: "The Treatment", text: "Manual removal using our non-toxic, exclusive LiceVanish method." },
              { icon: <HiShieldCheck />, title: "The All-Clear", text: "Final inspection and school clearance certification provided." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center" data-aos="fade-up" data-aos-delay={i*150}>
                <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-4xl mb-8 border border-white/30">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-black mb-4">{step.title}</h3>
                <p className="text-teal-100 leading-relaxed opacity-90">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Abstract shapes for depth */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-[100px] -z-0 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-700 rounded-full blur-[100px] -z-0 -translate-x-1/2 translate-y-1/2"></div>
      </section>

    </div>
  );
};

export default New2;