import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  HiPhone, HiCalendar, HiCheckCircle, HiStar, 
  HiArrowRight, HiShieldCheck, HiOutlineSparkles,
  HiCurrencyDollar, HiScale, HiUserGroup
} from 'react-icons/hi2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const New4 = () => {
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
    <div className="bg-white font-sans text-slate-900 selection:bg-teal-100">
      
      {/* --- 1. REVISED HERO: AUTHORITY & ACTION --- */}
      <section className="relative pt-10 pb-20 lg:pt-24 lg:pb-32 px-6 bg-gradient-to-br from-slate-50 to-teal-50/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7" data-aos="fade-right">
            <div className="flex items-center gap-2 text-teal-700 font-black text-xs uppercase tracking-[0.2em] mb-6">
              <span className="w-10 h-1 bg-teal-600 rounded-full"></span>
              NYC'S Trusted Lice Specialists
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
              Lice Free. <br />
              <span className="text-teal-600 italic font-serif">Today.</span> <br />
              Guaranteed.
            </h1>
            
            {/* THE "CHECKMARK" VALUE PROPOSITION */}
            <div className="grid sm:grid-cols-2 gap-3 mb-12">
              {trustPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-2 group">
                  <div className="bg-teal-100 p-1 rounded-full group-hover:bg-teal-600 transition-colors">
                    <HiCheckCircle className="text-teal-600 group-hover:text-white text-xl" />
                  </div>
                  <span className="font-bold text-slate-700 text-sm lg:text-base">{point}</span>
                </div>
              ))}
            </div>

            {/* DOMINANT ACTION BUTTONS (Larger Than Lice Style) */}
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="btn btn-lg h-24 bg-teal-600 border-none hover:bg-teal-700 text-white rounded-3xl px-10 shadow-2xl shadow-teal-200 transition-all hover:scale-105 active:scale-95">
                <div className="text-left">
                  <p className="text-[10px] opacity-80 font-black tracking-widest uppercase mb-1">Schedule Visit</p>
                  <p className="text-2xl font-black">BOOK ONLINE</p>
                </div>
                <HiCalendar className="ml-4 text-3xl" />
              </button>
              
              <button className="btn btn-lg h-24 bg-slate-900 border-none text-white rounded-3xl px-10 hover:bg-slate-800 transition-all hover:scale-105">
                <div className="text-left">
                  <p className="text-[10px] opacity-70 font-black tracking-widest uppercase mb-1">Urgent Support</p>
                  <p className="text-2xl font-black">(212) 555-0198</p>
                </div>
                <HiPhone className="ml-4 text-3xl animate-pulse" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative" data-aos="zoom-in">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(13,148,136,0.3)] border-[12px] border-white">
              <img 
                // src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800"
                src='https://images.unsplash.com/photo-1628516942091-2296978dd437?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                alt="Happy child after treatment" 
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. THE PROCESS: STRUCTURED & CLEAR (Lice Mamas Style) --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">How It Works</h2>
            <p className="text-lg text-slate-500 font-medium italic">Three simple steps to a lice-free home.</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 bg-slate-100 -z-0"></div>
          
          {[
            { step: "01", title: "Free Phone Consult", desc: "Speak with a specialist. We'll assess the situation and provide a flat-rate quote.", icon: <HiPhone /> },
            { step: "02", title: "Professional Removal", desc: "Our technicians use the LiceVanish method to remove all traces of lice and nits.", icon: <HiOutlineSparkles /> },
            { step: "03", title: "School Clearance", desc: "We provide an official certificate of treatment for immediate school re-entry.", icon: <HiShieldCheck /> }
          ].map((item, i) => (
            <div key={i} className="relative z-10 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
              <div className="w-20 h-20 bg-teal-600 rounded-3xl flex items-center justify-center text-white text-3xl mb-8 rotate-3 group-hover:rotate-6 transition-transform">
                {item.icon}
              </div>
              <span className="text-xs font-black text-teal-600 uppercase tracking-[0.3em] mb-4">Step {item.step}</span>
              <h3 className="text-2xl font-black mb-4">{item.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. COMPARISON SECTION: BUILDING TRUST (Lice Busters Style) --- */}
      <section className="py-24 px-6 bg-slate-900 text-white rounded-[4rem] mx-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
                <h2 className="text-4xl lg:text-5xl font-black mb-8">Why Parents Choose Us Over Drugstore Kits</h2>
                <p className="text-slate-400 text-lg mb-10">OTC products contain neurotoxins that most lice in NYC are now resistant to. We provide a mechanical, non-toxic solution that actually works.</p>
                
                <div className="space-y-6">
                    {[
                        { title: "One-Time Treatment", text: "No repeat kits or messy home applications.", icon: <HiCalendar /> },
                        { title: "Safe for Newborns", text: "100% pesticide-free and organic oils.", icon: <HiCheckCircle /> },
                        { title: "Financial Ease", text: "We help with HSA/FSA and Insurance forms.", icon: <HiCurrencyDollar /> }
                    ].map((feature, i) => (
                        <div key={i} className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-teal-400 flex-shrink-0">
                                {feature.icon}
                            </div>
                            <div>
                                <h4 className="font-black text-xl mb-1">{feature.title}</h4>
                                <p className="text-slate-400">{feature.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] text-slate-900 shadow-2xl" data-aos="flip-left">
                <h3 className="text-3xl font-black mb-6 text-center">Flat Rate Pricing</h3>
                <div className="divider"></div>
                <div className="space-y-6">
                    <div className="flex justify-between items-center font-bold text-lg">
                        <span>Diagnostic Check</span>
                        <span className="text-teal-600">$75*</span>
                    </div>
                    <div className="flex justify-between items-center font-bold text-lg">
                        <span>Full Removal Service</span>
                        <span className="text-teal-600">Flat Rate</span>
                    </div>
                    <div className="p-4 bg-teal-50 rounded-2xl text-xs font-bold text-teal-800 text-center uppercase tracking-widest">
                        *Diagnostic fee waived if treatment is performed
                    </div>
                    <button className="btn btn-lg w-full bg-teal-600 border-none text-white rounded-2xl font-black">GET A QUOTE</button>
                </div>
            </div>
        </div>
      </section>

      {/* --- 4. THE TRUST GRID: TESTIMONIALS (High Visibility) --- */}
      <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div data-aos="fade-up">
                    <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">What NYC Says</h2>
                    <p className="text-slate-500 font-bold mt-2">Verified Google Reviews from Local Families</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-center gap-4">
                    <div className="text-4xl font-black">4.9</div>
                    <div className="flex text-yellow-400">
                        <HiStar /><HiStar /><HiStar /><HiStar /><HiStar />
                    </div>
                    <span className="text-xs font-black text-slate-400 uppercase">500+ Reviews</span>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { name: "Robert F.", loc: "Manhattan", text: "Total life saver. They arrived on time and were extremely discrete. We tried the kits for two weeks with no luck, LiceBanishers fixed it in 2 hours." },
                    { name: "Sasha P.", loc: "Brooklyn Heights", text: "As a parent of three, this was my worst nightmare. The heated air removal was painless and effective. Highly recommend!" },
                    { name: "Karen L.", loc: "Queens", text: "Super professional. They even gave us the insurance paperwork so we got reimbursed. 5 stars!" }
                ].map((review, i) => (
                    <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-transparent hover:border-teal-200 hover:bg-white hover:shadow-2xl transition-all">
                        <div className="flex text-yellow-400 mb-6"><HiStar/><HiStar/><HiStar/><HiStar/><HiStar/></div>
                        <p className="font-bold text-slate-700 italic leading-relaxed mb-8">"{review.text}"</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-teal-600 flex items-center justify-center text-white font-black">{review.name[0]}</div>
                            <div>
                                <h4 className="font-black text-slate-900">{review.name}</h4>
                                <p className="text-xs font-bold text-teal-600 uppercase tracking-widest">{review.loc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>
      </section>

    </div>
  );
};

export default New4;