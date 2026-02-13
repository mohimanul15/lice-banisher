import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCheckCircle, HiOutlineClock, HiOutlineSparkles, HiOutlineAcademicCap } from 'react-icons/hi2';

const Process = () => {
  const features = [
    {
      icon: <HiOutlineSparkles />,
      title: "LiceVanish™ Method",
      desc: "Our exclusive Advanced Lice and Nit Removal Method ensures a precision solution in a single visit."
    },
    {
      icon: <HiOutlineClock />,
      title: "24/7 Availability",
      desc: "Lice doesn't wait, and neither do we. We're available whenever you need convenience and speed."
    },
    {
      icon: <HiOutlineAcademicCap />,
      title: "Certified Experts",
      desc: "Our removal experts undergo extensive training to maintain the highest standard of NYC care."
    },
    {
      icon: <HiOutlineCheckCircle />,
      title: "Natural & Essential",
      desc: "Enriched with essential oils and 100% free from harmful chemicals. Safe for the whole family."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 mb-6 leading-tight">
              Where precision <br />
              <span className="text-teal-600 italic font-normal text-5xl md:text-6xl">meets efficiency.</span>
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Wondering what sets us apart? At Lice Banishers, we simplify the screening and treatment process into one seamless visit. It's not just a service; it's a commitment to your comfort.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="space-y-3">
                  <div className="text-teal-500 text-2xl">{f.icon}</div>
                  <h4 className="font-bold text-slate-900">{f.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Side (The Method) */}
          <div className="relative" data-aos="fade-left">
            <div className="bg-teal-50 rounded-[4rem] p-8 md:p-12 border border-teal-100/50 relative overflow-hidden">
               <div className="relative z-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-4 block">Exclusive Technology</span>
                  <h3 className="text-3xl font-serif mb-6 text-slate-900 italic font-medium">LiceVanish™ Advanced</h3>
                  <p className="text-slate-600 mb-8">A multi-step system that thoroughly addresses the problem with precision. We dissolve the bond, remove the nits, and protect the scalp.</p>
                  
                  {/* Visual Steps Mockup */}
                  <div className="space-y-4">
                     {[1,2,3].map(step => (
                        <div key={step} className="flex items-center gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/80">
                           <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs font-bold">{step}</div>
                           <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }} 
                                whileInView={{ width: step === 1 ? '100%' : step === 2 ? '100%' : '100%' }}
                                transition={{ duration: 1, delay: step * 0.2 }}
                                className="h-full bg-teal-400" 
                              />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               
               {/* Abstract background shape */}
               <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;