import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiCalendar, HiCheckBadge, HiShieldCheck, HiStar, HiHome } from 'react-icons/hi2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

const New = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* --- TOP TRUST BAR --- */}
      <div className="bg-blue-900 text-white py-3 px-6 text-center md:text-left text-sm font-semibold flex justify-between items-center">
        <div className="max-w-7xl mx-auto w-full flex justify-between">
          <span className="hidden md:block italic">#1 Rated Professional Lice Removal in New York City</span>
          <div className="flex gap-6 mx-auto md:mx-0">
            <span className="flex items-center gap-1"><HiShieldCheck className="text-blue-400" /> 100% Guaranteed</span>
            <span className="flex items-center gap-1"><HiShieldCheck className="text-blue-400" /> Clinic & In-Home</span>
          </div>
        </div>
      </div>

      {/* --- IMPACT HERO (Larger Than Lice Style Hierarchy) --- */}
      <section className="relative bg-slate-50 pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-bold text-sm mb-6 uppercase tracking-wider">
              <HiStar /> Licensed & Certified Professionals
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-8">
              One Visit. <br />
              <span className="text-blue-600 underline decoration-blue-200">No More Lice.</span> <br />
              Guaranteed.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Don't struggle with drugstore kits. We provide NYC families with non-toxic, chemical-free removal that works in a single session. Safe for children of all ages.
            </p>
            
            {/* DOMINANT ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-black px-10 py-6 rounded-2xl shadow-xl shadow-blue-200 flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95">
                <HiCalendar className="text-2xl" /> BOOK NOW
              </button>
              <button className="bg-white border-4 border-blue-600 text-blue-600 text-xl font-black px-10 py-6 rounded-2xl hover:bg-blue-50 flex items-center justify-center gap-3 transition-transform hover:scale-105">
                <HiPhone className="text-2xl" /> CALL (212) 555-0198
              </button>
            </div>
            
            <p className="flex items-center gap-2 font-bold text-slate-400 uppercase text-xs tracking-tighter">
              <HiCheckBadge className="text-green-500 text-lg" /> Serving all 5 Boroughs • Insurance Reimbursement Forms Provided
            </p>
          </div>

          {/* DEPTH COMPONENT */}
          <div className="relative" data-aos="fade-left">
            <div className="relative z-10 rounded-3xl shadow-2xl overflow-hidden border-[12px] border-white rotate-2 transition-transform hover:rotate-0 duration-500">
              <img 
                src="https://images.unsplash.com/photo-1544126592-807daf2156d3?auto=format&fit=crop&q=80&w=800" 
                alt="Expert Treatment" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Trust Card (Lice Busters Style) */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 border-l-8 border-blue-600">
              <div className="flex text-yellow-400 text-xl mb-2">★★★★★</div>
              <p className="font-bold text-slate-800 italic">"Lice-free in 90 minutes. Lifesavers!"</p>
              <p className="text-sm text-slate-400 mt-1">— The Miller Family, Manhattan</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- STRUCTURED PROCESS (Lice Mamas Style) --- */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black mb-4">The Stress-Free Process</h2>
          <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Diagnostic Screening", desc: "A thorough check of the whole family using our precision lighting and organic products." },
            { step: "02", title: "Professional Removal", desc: "Our technicians use the LiceVanish™ method to eliminate every louse and nit." },
            { step: "03", title: "All Clear Certificate", desc: "You walk away with peace of mind and the certification needed to return to school." }
          ].map((item, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-slate-50 hover:bg-blue-600 transition-all duration-500 hover:shadow-2xl">
              <span className="text-6xl font-black text-slate-200 group-hover:text-blue-500 transition-colors">{item.step}</span>
              <h3 className="text-2xl font-bold mt-4 mb-3 group-hover:text-white">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed group-hover:text-blue-100">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SERVICE OPTIONS (Visual Hierarchy) --- */}
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-black mb-6">Choose How We Meet</h2>
            <p className="text-slate-400 text-lg mb-8">We provide the most flexible options in NYC to fit your family's schedule and privacy needs.</p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <HiHome className="text-blue-400 text-4xl mt-1" />
                <div>
                  <h4 className="text-xl font-bold">House Calls</h4>
                  <p className="text-slate-400">Discrete arrival, full treatment in your own home. Available 24/7 across all boroughs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <HiOutlineOfficeBuilding className="text-blue-400 text-4xl mt-1" />
                <div>
                  <h4 className="text-xl font-bold">Clinic Visits</h4>
                  <p className="text-slate-400">Visit our kid-friendly professional facility for high-speed diagnostic and treatment.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-600 p-12 rounded-3xl" data-aos="zoom-in">
             <h3 className="text-3xl font-black mb-4">Our Commitment</h3>
             <ul className="space-y-4 font-bold text-lg">
                <li className="flex items-center gap-3"><HiCheckBadge className="text-blue-200" /> 100% Non-Toxic & Organic</li>
                <li className="flex items-center gap-3"><HiCheckBadge className="text-blue-200" /> Single-Treatment Guarantee</li>
                <li className="flex items-center gap-3"><HiCheckBadge className="text-blue-200" /> School Re-entry Assistance</li>
                <li className="flex items-center gap-3"><HiCheckBadge className="text-blue-200" /> Discrete Professional Service</li>
             </ul>
             <button className="w-full mt-10 bg-white text-blue-600 py-5 rounded-2xl font-black text-xl shadow-lg hover:bg-slate-50 transition-colors">
               REQUEST PRICING
             </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default New;