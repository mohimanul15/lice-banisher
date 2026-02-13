import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCheckBadge, HiOutlineHeart, HiOutlineLightBulb, HiOutlineSparkles } from 'react-icons/hi2';

const Promise = () => {
  const promises = [
    {
      icon: <HiOutlineLightBulb className="text-emerald-500" />,
      title: "100% Organic",
      desc: "Plant-based enzymes that are tough on lice but gentle on hair follicles.",
      color: "bg-emerald-50"
    },
    {
      icon: <HiOutlineHeart className="text-rose-400" />,
      title: "Pesticide Free",
      desc: "No neurotoxins or harsh chemicals. Safe for newborns and expectant mothers.",
      color: "bg-rose-50"
    },
    {
      icon: <HiOutlineCheckBadge className="text-sky-500" />,
      title: "NYC Certified",
      desc: "Our technicians are trained in the shepherd method—the gold standard of care.",
      color: "bg-sky-50"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP ROW: HEADING & IMAGE */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div data-aos="fade-right">
            <h2 className="text-5xl font-serif font-medium text-slate-900 mb-6">
              Safe enough for a <br />
              <span className="text-emerald-600 italic">newborn.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              We believe families shouldn't have to choose between effectiveness and safety. 
              Our proprietary formula uses peppermint and essential oils to naturally 
              dissolve the "glue" that holds lice in place, making removal painless and 
              even—dare we say—enjoyable.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                <HiOutlineSparkles className="text-emerald-500" /> BPA Free
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                <HiOutlineSparkles className="text-emerald-500" /> Vegan
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                <HiOutlineSparkles className="text-emerald-500" /> Cruelty Free
              </div>
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="rounded-[4rem] overflow-hidden rotate-3 shadow-2xl">
              <img 
                src="https://i.ibb.co.com/M5gfmChf/pexels-elly-fairytale-3807571.jpg" 
                alt="Safe botanical ingredients" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Decorative organic blob */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl -z-10" />
          </div>
        </div>

        {/* BOTTOM ROW: THREE PROMISES */}
        <div className="grid md:grid-cols-3 gap-8">
          {promises.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`${item.color} p-10 rounded-[3rem] transition-all border border-transparent hover:border-white hover:shadow-xl`}
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promise;